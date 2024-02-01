
import React from 'react'
import "./Popup.css"
const Popup = ({setShowPopup, emptyField}) => {
  return (
    <div>
        <div className=' flex bg-slate-300 opacity -z-1 items-center justify-center   h-lvh px-5 py-10  w-full'>
          <div className='bg-white p-5  rounded-lg flex flex-col items-center justify-center '>
            <p className='text-2xl mb-5 font-semibold mt-3  '>
              {`Input ${emptyField} !! `}
            </p>
          <button className="glow-on-hover z-1 mb-5 text-2xl"
          onClick={() => setShowPopup(false)}
          >Understood 🤗
          </button>
          </div>
        </div>
        
    </div>
  )
}

export default Popup