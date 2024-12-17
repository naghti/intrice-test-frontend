import Search from "./Inputs/Search"

function Header() {

  return (
    <div 
      className="
        min-w-full 
        shadow-sm 
        shadow-zinc-500/40 
        py-1.5 
        flex 
        justify-center 
        relative
      "
    >
      <Search/>
    </div>
  )
}

export default Header