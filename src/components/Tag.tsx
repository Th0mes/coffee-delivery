interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  outline?: boolean
}

export const Tag = ({ title, outline }: TagProps) => (
  <div
    className={`rounded-xl ${
      outline ? 'border border-yellow' : 'bg-yellow-light'
    } px-3 text-yellow-dark`}
  >
    {title}
  </div>
)
