import { IconMenu2 } from "@tabler/icons-react";

export default function Menu(){
  return(
    <div className={`bg-red-500 w-56 flex flex-col text-2xl px-5`}>
      <div className="flex items-center gap-2 p-5 bg-yellow-400 mt-5 rounded-lg">
        <span><IconMenu2/></span>
         <span>menu</span>
      </div>
    </div>
  )
}