import clsx from "clsx"

function TextLabel({text, extraStylish}: {text: string, extraStylish?: string}) {
  return (
    <label 
      className={clsx(
        "block mb-2 text-sm font-medium text-gray-900",
        extraStylish
      )}
    >
      {text}
    </label>
  )
}

export default TextLabel