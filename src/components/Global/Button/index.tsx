interface ButtonProps  {
    children: React.ReactNode,
    color?: String,
    type?: String
}
export default function Button ({children, color, type,  ...rest}: ButtonProps) {
  return (
    <button {...rest} >
        {children}
    </button>
  )
}
