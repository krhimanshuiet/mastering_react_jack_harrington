import { memo, useEffect, useState } from "react";

export const Contact = memo(({color}:{color:string}) => {
    console.log("hello from contact")
    const bg_color = color === 'red' ? 'bg-red-400' : 'bg-green-400';
  return (
    <>
      <h1 className={`${bg_color} text-center`}>Contact</h1>
    </>
  );
});



const React_Hooks = () => {
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const [count, setCount] = useState(0);
  const [input , setInput] = useState('')

  useEffect(() => {
    console.log("hello")
  
    // return () => {
      
    // }
  }, [])
  
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 m-0">
      <Contact color = {count % 5 === 0  ? 'red' : 'green'}/>
      <h1 className="text-center font-bold text-lg">{count}</h1>
      <button
        className="border border-spacing-4 p-2 bg-orange-300 border-r-emerald-50"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="border border-spacing-4 p-2 bg-yellow-300 border-r-emerald-50"
        onClick={decrement}
      >
        decrement
      </button>
      <br/>

      <h1>{input}</h1>

      <input type="text" className="mt-4" value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  );
};

export default React_Hooks;
