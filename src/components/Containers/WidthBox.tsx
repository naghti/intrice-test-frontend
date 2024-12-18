import clsx from "clsx";
import { ReactNode, FC } from "react";

interface WidthBoxProps {
  children: ReactNode; 
  className?: string
}

const WidthBox:FC<WidthBoxProps> = ({
  children,
  className
}) => {
  return (
    <div 
      className={clsx(`
        w-full
        max-w-screen-xl
        mx-auto
        `,
        className
      )}
    >
      {children}
    </div>
  )
}

export default WidthBox