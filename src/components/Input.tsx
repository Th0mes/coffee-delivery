import InputMask, { Props } from 'react-input-mask'

type InputProps = Partial<Props> & {
  error?: boolean
  label?: string
  optional?: boolean
}

export const Input = ({
  label,
  placeholder,
  mask,
  required,
  optional,
  className,
  ...props
}: InputProps) => {
  const inputStyles = `h-full w-full rounded-md bg-transparent p-4 text-xl outline-none ring-purple focus:ring-2 focus:ring-inset ${
    optional && 'overflow-ellipsis pr-20'
  }`

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
            mask={mask}
            placeholder={placeholder}
            className={inputStyles}
            {...props}
          />
        ) : (
          <input placeholder={placeholder} className={inputStyles} {...props} />
        )}

        {optional && (
          <p className="absolute right-4 text-sm text-gray-400">Opcional</p>
        )}
      </div>
    </div>
  )
}
