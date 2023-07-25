import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export function Tranform() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [monto, setmonto] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      monto :+monto,
    });  
    
    setDescription("");
    setmonto(0);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
          //className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          //value={description}
        />
        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={(e) => setmonto(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={monto}
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full disabled:opacity-50"
         disabled={!description || !monto}>Añadir Trasaccion</button>
      </form>
    </div>
  );
}


