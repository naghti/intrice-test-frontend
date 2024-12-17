function TextHeader({text, ...props}: {text: string, props?: any}) {
  return (
    <label className="block mb-2 font-medium text-gray-900 text-lg">{text}</label>
  )
}

export default TextHeader