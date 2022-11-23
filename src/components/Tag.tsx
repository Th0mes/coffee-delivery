interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  outline?: boolean
  pointer?: boolean
}

export const Tag = ({ title, outline, pointer, ...props }: TagProps) => (
  <div
    className={`rounded-xl border px-3 text-yellow-dark ${
      outline ? 'border-yellow' : 'border-yellow-light bg-yellow-light'
    } ${pointer && 'cursor-pointer'}`}
    {...props}
  >
    {title}
  </div>
)
