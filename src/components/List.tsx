import { IoMdAlarm, IoIosCheckmark, IoIosClose, IoMdCreate } from "react-icons/io";
import { dataItems } from "../data";
import { text } from "stream/consumers";
import { memo, useState } from "react";
type ItemProps = {
    tipeNotifiq: string;
    text: string;
    options: boolean;
  };
  
  export function TodosItems({ tipeNotifiq, text, options }: ItemProps) {
    return(
        <>
       
                <li className="slider-enter w-[400px] h-[70px]  bg-zinc-900 rounded flex justify-between items-center px-[1rem]">
          <div className="icons w-[70px] h-[50px]  border-[1px] border-violet-900 rounded flex justify-center items-center">
           {
            tipeNotifiq == 'edit' ? (
                <IoMdAlarm />
            ) :  <IoMdCreate />
           }
          </div>
           <h3 className="text-slate-200 text-[14.5px]">
            {
                text
            }
           </h3>
           { options == true ? (
              <div className="flex gap-2">
                <div className="op w-[40px] h-[40px] bg-zinc-800 rounded-sm flex justify-center items-center">
                  <IoIosCheckmark />
                </div>
                <div className="op w-[40px] h-[40px] bg-zinc-800 rounded-sm flex justify-center items-center">
                  <IoIosClose />
                </div>
              </div>
            ) : <div className="w-[80px] h-[40px]"></div> }
        </li>
 
    </>
    )
}

export const Items = memo(TodosItems)