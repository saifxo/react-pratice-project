import React, { useState } from 'react'

function TempratureApp() {
    let [temp, settemp] = useState(0);
    let [tempcolour, settempcolour] = useState('bg-blue-700')
    function check() {
        if (temp >= 13) { settempcolour(tempcolour = 'bg-orange-300') }
        if (temp >= 10) { settempcolour(tempcolour = 'bg-blue-700') }
        if (temp >= 15) { settempcolour(tempcolour = 'bg-orange-500') }
        if (temp >= 20) { settempcolour(tempcolour = 'bg-orange-600') }
        if (temp >= 25) { settempcolour(tempcolour = 'bg-red-600') }
        if (temp >= 30) { settempcolour(tempcolour = 'bg-red-900') }
        if (temp <= 10) { settempcolour(tempcolour = 'bg-blue-400') }
        if (temp <= 5) { settempcolour(tempcolour = 'bg-blue-900') }
        if (temp <= 0) { settempcolour(tempcolour = 'bg-indigo-900') }
    }
    function tempup() {
        settemp(temp + 1)
        check()
    }
    function tempdown() {
        settemp(temp - 1)
        check()
    }
    return (
        <div className="flex   justify-center flex-col items-center">
            <h1 className=" font-bold text-2xl p-5 bg-gray-100 text-black rounded-lg">
                Temprature App
            </h1>
            <div className={`text-white transition-colors delay-100 ease-in ${tempcolour} h-36 w-36 rounded-full border-white border-2 flex  mt-3 items-center justify-center text-3xl`}>
                {temp}&deg;C
            </div>
            <div className="flex justify-center space-x-10 mt-4">
                <button
                    onClick={() => tempup()}
                    className="bg-gray-600  hover:bg-blue-600 text-4xl h-20 w-20 text-white p-4 rounded-full"
                >
                    +
                </button>
                <button
                    onClick={() => tempdown()}
                    className="bg-gray-600 hover:bg-blue-600 text-4xl h-20 w-20 text-white p-4 rounded-full"
                >
                    -
                </button>
            </div>
        </div>
    )
}

export default TempratureApp