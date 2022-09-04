import React from "react";
import Link from 'next/link'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { IoAddCircleSharp } from 'react-icons/io5'
import { FcInfo } from 'react-icons/fc'

const dummyInfo = [
  {
    name: "Prince AHmed",
    bGroup: "AB+",
    address: "Alampur",
    lastDonationDate: "12/5/2022",
  },
  {
    name: "Prince AHmed",
    bGroup: "AB+",
    address: "Alampur",
    lastDonationDate: "12/5/2022",
  },
  {
    name: "Prince AHmed",
    bGroup: "AB+",
    address: "Alampur",
    lastDonationDate: "12/5/2022",
  },
];

const DonatorList = () => (
  <div className="donator-list md:px-[20%] px-2">
    <h2
      className=" 
        font-semibold text-md md:text-2xl py-5 text-zinc-600 uppercase"
    >
      Donators
    </h2>
    <table className="table text-center table-auto w-full shadow-lg">
      <thead className="bg-slate-200 text-zinc-800">
        <tr className="text-xs md:text-lg font-semibold">
          <td className="p-2">Id</td>
          <td className="p-2">Name</td>
          <td className="p-2">Blood group</td>
          <td className="p-2">Last Donated</td>
          <td className="p-2">Info</td>
        </tr>
      </thead>
      <tbody>
        {dummyInfo.map((item, index) => (
          <tr className="text-xs md:text-lg border-b-1 text-zinc-700  even:bg-zinc-100 hover:bg-zinc-100 odd:bg-white">
            <td className="p-2  border-gray-500"> {index+1}</td>
            <td className="p-2"> {item.name} </td>
            <td className="p-2 ">{item.bGroup} </td>
            <td className="p-2 "> {item.lastDonationDate} </td>
            <td className="p-2 ">
              <div className="icons flex gap-2 justify-center">
                <FaEdit className="text-yellow-500" />
                <AiFillDelete className="text-red-500" />
                <FcInfo />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DonatorList;
