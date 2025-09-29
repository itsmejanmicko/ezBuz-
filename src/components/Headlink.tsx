import { useLocation } from "react-router-dom"


export default function HeadLink(){
    const pathName = useLocation().pathname.replace("/","").charAt(0).toUpperCase() + useLocation().pathname.replace("/","").slice(1);
    
    return(
    <aside className="mx-12 pt-2">
      <p className="text-orange text-lg font-extrabold">Home / {pathName}</p>
    </aside>
    )
}