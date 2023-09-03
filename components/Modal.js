import React from 'react'
import { BsExclamationCircle } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import axios from 'axios';

const Modal = ({setModal , id}) => {

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://redrosemission.onrender.com/delete/${id}`);
      setModal(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='modal'>
        <div className="absolute md:w-[400px] p-2 py-4 bg-white shadow-xl border-2 
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         gap-3 rounded-lg w-[85%]">
          <div className="cancel p-2 absolute right-2">
            <ImCross onClick={()=> setModal(false)} className='text-zinc-500 float-right hover:text-zinc-600' />
          </div>
            <div className="flex flex-col items-center pt-10 gap-5">
                <BsExclamationCircle size={80} className="text-red-400" />
                <h3 className='font-semibold text-zinc-500 
                text-xl text-center px-5 py-3'>Are you sure you want to delete this donator?</h3>
                <div className="buttons py-5 flex justify-between">
                    <button onClick={()=> handleDelete(id) } className='text-white font-semibold 
                    bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md mx-2
                    '>Yes, I'm sure</button>
                    <button onClick={()=> setModal(false)} className='text-white font-semibold 
                    bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md mx-2
                    '>No, Cancel</button>
                </div>
            </div>
        </div>
        </div>

  )
}

export default Modal
