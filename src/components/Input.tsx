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
}: InputProps) => (
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
          className={`h-full w-full bg-transparent p-4 text-xl ${
            optional && 'overflow-ellipsis pr-20'
          }`}
          {...props}
        />
      ) : (
        <input
          placeholder={placeholder}
          className={`h-full w-full bg-transparent p-4 text-xl ${
            optional && 'overflow-ellipsis pr-20'
          }`}
          {...props}
        />
      )}

      {optional && (
        <p className="absolute right-4 text-sm text-gray-400">Opcional</p>
      )}
    </div>
  </div>
)
