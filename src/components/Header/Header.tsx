import { IconHome } from "@tabler/icons-react";

export default function Header(){
  return(
    <div className="flex text-2xl h-16 justify-center items-center bg-blue-700">
      <span className="flex gap-2 justify-center items-center"><IconHome />Header</span>
    </div>
  )
}