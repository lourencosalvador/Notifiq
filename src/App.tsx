import React, { useRef, useState } from "react";
import { Items } from "./components/List";
import { dataItems } from "./data";
import { palavrasHorarios } from "./data/base";
import { VerifiqPalavra } from "./hook/VerifiqPalavra";
export interface Itemsdata 
  {
      tipeNotifiq: string,
      text: string,
      options: boolean
  }
function App() {
  const [itemList, setItemList] = useState(dataItems)
  const [value, setValue] = useState<string>('')
  const inputValue = useRef<HTMLInputElement | null>(null);
    

   const handleInputChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.current) {

      setValue(inputValue.current.value);
      const achada = VerifiqPalavra(inputValue.current.value)
      const result = achada ? 'alarm' : 'edit'
      setItemList([...itemList, {
          tipeNotifiq: `${result}`,
          text: inputValue.current.value,
          options: true
      } ])
    }
  }

  const deletTask = (id: string) => {
        const deleteItem = itemList.filter(item => !item.text.includes(id))
        setItemList(deleteItem)
  }

 

  return (
    <div className="w-screen h-screen bg-zinc-800 flex justify-center items-center">
      <div className=" h-screen w-[40rem] flex flex-col">
          <h1 className="text-violet-500 text-[2rem] ml-[30px] mt-[30px] mb-[100px] font-semibold">.Notifiq ✒️⏱️</h1>

          <div className="flex flex-col gap-4 px-[2rem] mb-[50px]">
            <label className="text-white font-medium text-[12.5px]">Add Notification 👌</label>
            <input 
            ref={inputValue}
            className="px-[1rem] text-[12px] w-[25rem] py-[10px] rounded bg-transparent border-[1px] border-violet-600 outline-none text-slate-200"
            type="text"  
            placeholder="Adicione nova notificação"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleInputChange} 
             />
          </div>
            
           <div className="flex flex-col gap-8 px-[2rem] ">
           <h1 className="text-white font-medium text-[15.5px]">Notificações recentes</h1>
            <ul className="px-[5rem] flex flex-col gap-2 w-auto ">
              {
                itemList.map(item => {
                  
                  return  <Items deletTask={deletTask} key={item.text} tipeNotifiq={item.tipeNotifiq} text={item.text} options={item.options} />;
                })
              }
            </ul>
           </div>
      </div>
    </div>
  );
}

export default App;
