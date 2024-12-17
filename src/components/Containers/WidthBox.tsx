import { ReactNode, FC } from "react";

interface WidthBoxProps {
  children: ReactNode; 
}

const WidthBox:FC<WidthBoxProps> = ({children}) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      {children}
    </div>
  )
}

export default WidthBox