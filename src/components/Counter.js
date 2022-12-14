import React, { useState } from "react";

function CounterApp() {
  let [num, setnum] = useState(0);

  return (
    <div className="flex   justify-center flex-col items-center">
      <h1 className=" font-bold text-2xl p-5 font-Edu mt-5 bg-gray-300 text-black rounded-lg shadow-md">
        Counter App
      </h1>
      <div className="space-x-10 mt-5 ">
        <button
          onClick={() => setnum((num += 1))}
          className="bg-blue-500 hover:bg-blue-600 text-4xl h-20 w-20 text-white py-2 px-4 rounded-full"
        >
          +
        </button>
        <button
          onClick={() => (num < 1 ? (num = num) : setnum((num -= 1)))}
          className="bg-blue-500 hover:bg-blue-600 text-4xl h-20 w-20 text-white py-2 px-4 rounded-full"
        >
          -
        </button>
      </div>

      <h2 className="flex justify-center font-bold text-2xl mt-5 p-5">
        {num}
      </h2>
    </div>
  );
}

export default CounterApp;
