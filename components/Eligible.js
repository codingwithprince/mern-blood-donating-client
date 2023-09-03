import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";
import axios from "axios";
import Spinner from "./Spinner";

const Eligible = () => {
  const [allDonators, setAllDonators] = useState();
  const [eligibleDonators, setEligibleDonators] = useState();
  const [group, setGroup] = useState("all");

  const router = useRouter();
  useEffect(() => {
    axios.get("https://redrosemission.onrender.com/").then((res) => setAllDonators(res.data));
    filterEligibleDonator();
  }, [allDonators]);


  const onGroupChange = (e) => {
    setGroup(e.target.value)
  }

  const date = new Date();
  const filterEligibleDonator = () => {
    if (allDonators) {
      const validDonator = allDonators.filter((e) => {
        if (moment(date).diff(moment(e.lastDonated), "months") >= 4) {
          return e;
        }
      });
      setEligibleDonators(validDonator);
    }
  };

  return (
    <div className="md:px-[20%] py-5">
        { eligibleDonators == null ? <Spinner /> : 
      <div>
        {/* <h2 className="text-gray-500 font-semibold text-xl text-center py-5">
          Eligible Donator
        </h2> */}
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

        <table className="table text-center table-auto w-full shadow-lg">
          <thead className="bg-green-200 text-zinc-800">
            <tr className="text-xs md:text-lg font-semibold">
              <td className="p-2">Id</td>
              <td className="p-2">Name</td>
              <td className="p-2">Group</td>
              <td className="p-2">Age</td>
              <td className="p-2">Last Donated</td>
            </tr>
          </thead>
          <tbody>
            {eligibleDonators != null &&
              eligibleDonators
                .filter((e) => {
                  if (group == "all") {
                    return eligibleDonators;
                  }
                  if (group != "all" && e.bGroup == group) {
                    return e;
                  }
                })
                .map((item, index) => (
                  <tr
                    key={item._id}
                    className="text-xs md:text-lg border-b-2 text-zinc-700  even:bg-green-50 hover:bg-green-50 odd:bg-white"
                  >
                    <td className="p-2  border-gray-500"> {index + 1}</td>
                    <td className="p-2 hover:underline hover:text-blue-500">
                      <Link href={`/info/${item._id}`}>{item.name}</Link>
                    </td>
                    <td className="p-2 ">{item.bGroup} </td>
                    <td className="p-2 ">{item.age} </td>
                    <td className="p-2 ">
                      <Moment format="DD/MM/YYYY">{item.lastDonated}</Moment>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      }
    </div>
  );
};

export default Eligible;
