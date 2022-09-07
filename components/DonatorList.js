import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Moment from "react-moment";
import "moment-timezone";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import { FcInfo } from "react-icons/fc";
import axios from "axios";
import Spinner from "./Spinner";
import Modal from "./Modal";
import UserContext from "./context/UserContext";

const DonatorList = () => {
  const [allDonators, setAllDonators] = useState();
  const [modal, setModal] = useState(false)
  const [group, setGroup] = useState('all')
  const [ deleteId, setDeleteId] = useState()
  const [user, setUser] = useContext(UserContext)


  const router = useRouter();

  useEffect(() => {
    if(user){
      axios.get("https://blood-donator-management.herokuapp.com/").then((res) => setAllDonators(res.data));
    } else {
      router.push('/login')
    }

  }, [modal]);

  const handleDelete = (id) => {
    setDeleteId(id)
    setModal(!modal)
  };

  const onGroupChange = (e) => {
    setGroup(e.target.value)
  }


  return (
    <div className="donator-list md:px-[20%] px-3">
      {allDonators != null ? (
        <div>
          <h2
            className=" 
          font-semibold text-2xl text-center md:text-2xl py-5 text-zinc-600 capitalize"
          >
            Dashboard
          </h2>

          <select 
              onChange={onGroupChange}
              id="underline_select" className="text-sm text-zinc-500 border-2 rounded-md px-2 mb-2 float-right hover:text-zinc-600  focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                  <option value="all">All Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
              </select>

          <table className="table text-center table-auto w-full shadow-lg border-2">
            <thead className="bg-indigo-200 text-zinc-800 ">
              <tr className="text-xs md:text-lg font-semibold">
                <td className="p-2">Id</td>
                <td className="p-2">Name</td>
                <td className="p-2">Group</td>
                <td className="p-2">Last Donated</td>
                <td className="p-2">Info</td>
              </tr>
            </thead>
            <tbody>
              {allDonators != null &&
                allDonators.filter(e => {
                  if (group == "all"){
                    return allDonators
                  }
                  if(group != "all" && e.bGroup == group){
                    return e
                  } 
                }).map((item, index) => (
                  <tr
                    key={item._id}
                    className="text-xs md:text-lg border-b-1 text-zinc-700 shadow-md border-b-2 hover:bg-indigo-50 bg-white"
                  >
                    <td className="p-2  border-gray-500"> {index + 1}</td>
                    <td className="p-2 hover:underline hover:text-blue-500">
                      <Link href={`/info/${item._id}`}>{item.name}</Link>
                    </td>
                    <td className="p-2 ">{item.bGroup} </td>
                    <td className="p-2 ">
                      <Moment format="DD/MM/YYYY">{item.lastDonated}</Moment>
                    </td>
                    <td className="p-2 ">
                      <div className="icons flex gap-1 justify-center">
                        <Link href={`/update/${item._id}`}>
                          <FaEdit className="text-zinc-600" />
                        </Link>
                        <AiFillDelete
                          onClick={() => handleDelete(item._id)}
                          className="text-red-500"
                        />

                      </div>
                    </td>
                  </tr>
                  
                ))}
            </tbody>
          </table>
          {
                   modal ? <Modal setModal={setModal} id={deleteId}  /> : ""
          }
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default DonatorList;
