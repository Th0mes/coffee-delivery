import { forwardRef } from 'react'
import InputMask, { Props } from 'react-input-mask'

type InputProps = Partial<Props> & {
  error?: boolean
  label?: string
  optional?: boolean
  uppercase?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      mask,
      required,
      optional,
      className,
      uppercase,
      ...props
    }: InputProps,
    ref: any
  ) => {
    const inputStyles = `h-full w-full rounded-md bg-transparent p-4 text-xl outline-none ring-purple focus:ring-2 focus:ring-inset overflow-ellipsis ${
      optional && 'pr-20'
    } ${uppercase && 'uppercase'}`

    return (
      <div className={`h-full w-full space-y-2 ${className}`}>
        {label && (
          <label className="text-xl text-gray-600">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="relative flex h-full w-full items-center rounded-md bg-slate-200">
          {mask ? (
            <InputMask
              ref={ref}
              mask={mask}
              className={inputStyles}
              {...props}
              placeholder={placeholder}
            />
          ) : (
            <input
              ref={ref}
              className={inputStyles}
              {...props}
              placeholder={placeholder}
            />
          )}

          {optional && (
            <p className="absolute right-4 text-sm text-gray-400">Opcional</p>
          )}
        </div>
      </div>
    )
  }
)
