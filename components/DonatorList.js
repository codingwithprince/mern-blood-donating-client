import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import { FcInfo } from "react-icons/fc";
import axios from "axios";
import Spinner from "./Spinner";

const DonatorList = () => {
  const [allDonators, setAllDonators] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => setAllDonators(res.data));
  }, []);

  return (
    <div className="donator-list md:px-[20%] px-3">
      {allDonators != null ? (
        <div>
          <h2
            className=" 
          font-semibold text-2xl text-center md:text-2xl py-5 text-zinc-600 capitalize"
          >
            Donators
          </h2>
          <table className="table text-center table-auto w-full shadow-lg">
            <thead className="bg-slate-200 text-zinc-800">
              <tr className="text-xs md:text-lg font-semibold">
                <td className="p-2">Id</td>
                <td className="p-2">Name</td>
                <td className="p-2">Group</td>
                <td className="p-2">Last Donated</td>
                <td className="p-2">Info</td>
              </tr>
            </thead>
            <tbody>
              {allDonators &&
                allDonators.map((item, index) => (
                  <tr
                    key={item._id}
                    className="text-xs md:text-lg border-b-1 text-zinc-700  even:bg-zinc-100 hover:bg-zinc-100 odd:bg-white"
                  >
                    <td className="p-2  border-gray-500"> {index + 1}</td>
                    <td className="p-2"> {item.name} </td>
                    <td className="p-2 ">{item.bGroup} </td>
                    <td className="p-2 "> {item.lastDonated} </td>
                    <td className="p-2 ">
                      <div className="icons flex gap-1 justify-center">
                        <Link href={`/update/${item._id}`}>
                          <FaEdit className="text-zinc-600" />
                        </Link>
                        <AiFillDelete className="text-red-500" />
                        <Link href={`/info/${item._id}`}>
                          <FcInfo />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default DonatorList;
