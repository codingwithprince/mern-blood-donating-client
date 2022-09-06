import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Moment from 'react-moment';
import 'moment-timezone';
import { BsPersonBoundingBox } from 'react-icons/bs' 
import { IoCall } from 'react-icons/io5'
import axios from 'axios'
import Spinner from './Spinner'
import UserContext from './context/UserContext'
import { FiEdit } from 'react-icons/fi'

const SingleInfo = () => {
    const router = useRouter()
    const [singleDonator, setSingleDonator] = useState()
    
    useEffect(()=>{
        if(router){
            axios.get(`https://blood-donator-management.herokuapp.com/info/${router.query.id}`)
            .then(res => setSingleDonator(res.data))
            .catch(error => console.log(error))
        }
    },[])

    const [user, setUser] = useContext(UserContext)

  return (
    <div className='md:px-[20%] px-3 py-5'>
        {
            singleDonator == null ? <Spinner /> : 
            <div className='md:w-[500px] border-2 text-center shadow-xl rounded-md px-2 md:py-10 py-5 my-6 mx-auto'>
                <div className="avatar flex justify-center">
                    <BsPersonBoundingBox size={100} className="text-red-500" />
                </div>
                <div className="info py-5 mt-5 md:px-10 px-2 text-left flex flex-col gap-3">
                    <h3 className='md:text-lg text-sm px-2 text-red-500 even:white odd:bg-yellow-50 rounded-lg'>Name : <span className='text-zinc-500 font-normal uppercase'>{singleDonator.name}</span></h3>
                    <h3 className='md:text-lg text-sm px-2 text-red-500 even:white odd:bg-yellow-50 rounded-lg'>Age : <span className='text-zinc-500 font-normal uppercase'>{singleDonator.age}</span></h3>
                    <h3 className='md:text-lg text-sm px-2 text-red-500 even:white odd:bg-yellow-50 rounded-lg'>Address : <span className='text-zinc-500 font-normal uppercase'>{singleDonator.address}</span></h3>
                    <h3 className='md:text-lg text-sm px-2 text-red-500 even:white odd:bg-yellow-50 rounded-lg'>Phone : <span className='text-zinc-500 font-normal uppercase'>{singleDonator.phone}</span></h3>
                    <h3 className='md:text-lg text-sm px-2 text-red-500 even:white odd:bg-yellow-50 rounded-lg'>Last Donated : <span className='text-zinc-500 font-normal uppercase'>
                        <Moment format="DD/MM/YYYY">
                            {singleDonator.lastDonated}
                        </Moment>
                    </span></h3>
                    <h3 className='md:text-lg text-sm px-2 text-red-500 even:white odd:bg-yellow-50 rounded-lg'>Blood Group : <span className='text-zinc-500 font-normal uppercase'>{singleDonator.bGroup}</span></h3>
                    <h3 className='md:text-lg text-sm px-2 text-red-500 even:white odd:bg-yellow-50 rounded-lg'>Gender : <span className='text-zinc-500 font-normal uppercase'>{singleDonator.gender}</span></h3>
                </div>
                <div className="action flex justify-center gap-2">
                    <a href={`tel:${singleDonator.phone}`} className="bg-green-500 px-3 shadow-lg py-2 gap-2 rounded-md font-semibold text-white text-sm hover:bg-green-600 flex items-center"><IoCall /> Call Now</a>
                    <Link href={`/update/${singleDonator._id}`} >
                        <a className={`${ user ? 'block' : 'hidden'} bg-white px-3 shadow-lg py-2 gap-2 rounded-md font-semibold text-green-500 text-sm hover:bg-green-600 hover:text-white flex items-center`}><FiEdit /> Edit Now</a>
                    </Link>
                </div>

            </div>
        } 
        

    </div>
  )
}

export default SingleInfo