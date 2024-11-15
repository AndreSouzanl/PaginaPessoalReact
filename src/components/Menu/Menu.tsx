import { IconMenu2 } from "@tabler/icons-react";

export default function Menu(){
  return(
    <div className={` bg-zinc-900 w-56 flex flex-col text-2xl px-5 border-r-2 border-zinc-700`}>
      <div className="flex items-center bg-black gap-2 p-5 mt-5 rounded-lg">
        <span><IconMenu2/></span>
         <span>menu</span>
      </div>
    </div>
  )
}