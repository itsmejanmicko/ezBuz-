import { useEffect, useState } from "react";
import { appLogo } from "../utils/helper/imageHelper";
import { updateDateTime } from "../utils/helper/timeHelper";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";



export default function Header(){
    const [dateTime, setDateTime] = useState("");
    const [time, setTime] = useState("");

    useEffect(()=>{
        const {time, formattedDate} = updateDateTime();
        setTime(time);
        setDateTime(formattedDate);
        const interval = setInterval(()=>{
            const {time, formattedDate} = updateDateTime();
            setTime(time);
            setDateTime(formattedDate);
        }, 1000);

        return(() => {
            clearInterval(interval);
        })
    }, [])

    return(
        <main className="w-full bg-primary">
            <header className="p-2 flex pt-3">
               <div className="mx-8 flex gap-8 items-center justify-center">
                 <img src={appLogo} alt="logo" className="h-12 w-9 mt-1"/>
                 <h1 className="text-2xl font-extrabold italic">
                    <span className="text-green-500">E</span>
                    <span className="text-white">ZBus</span>
                    </h1>
               </div>
               <div className="flex-1 flex justify-center items-center ">
                 <p className="text-white text-sm">{dateTime} {time}</p>
               </div>
               <div className="flex items-center justify-center bg-white rounded-md h-9 p-4 gap-2">
                    <FaRegUser className="text-black text-md"/>
                     <button>Hi!<span className="">Admin</span></button>
                    <IoIosArrowDown className="text-black text-md"/>
            </div>
            </header>
        </main>
    )
}