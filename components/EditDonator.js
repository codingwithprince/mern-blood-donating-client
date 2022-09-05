import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from 'moment'
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import Spinner from "./Spinner";

const update = () => {
  const router = useRouter();

  const [newDonator, setNewDonator] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
  });
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (router.asPath !== router.route) {
      axios
        .get(`http://localhost:8080/update/${router.query.id}`)
        .then((res) => setNewDonator(res.data))
        .catch((error) => console.log(error));
    }
  }, [router]);

  const handleChangeGroup = (event) => {
    setAge(event.target.value);
    setNewDonator({
      ...newDonator,
      bGroup: event.target.value,
    });
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
    setNewDonator({
      ...newDonator,
      gender: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      if (router.asPath !== router.route) {
        await axios.put(
          `http://localhost:8080/update/${router.query.id}`,
          newDonator
        );
        // router.push("/edit");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e) => {
    setNewDonator({
      ...newDonator,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-donator px-2 md:px-[20%]">
      {
        newDonator.name == "" ? <Spinner /> :
      <div className="form flex justify-center rounded-md md:py-10 my-3">
        <form className="md:w-[500px] bg-white w-full shadow-lg py-2 px-5 rounded-md">
          <div className="flex flex-col justify-center gap-3 py-5">
            <IoPersonAddSharp className="text-red-500 w-full" size={40} />
            <h3 className="text-center font-semibold text-zinc-600 text-xl">
              Update Donator
            </h3>
          </div>
          <div className="flex flex-col gap-2 my-2 relative py-3 ">
            <input
              required
              onChange={onChangeHandler}
              className="focus:outline-none peer border-b-2 border-zinc-300 focus:border-red-300 pb-2"
              type="text"
              name="name"
              id="name"
              value={newDonator.name}
            />
            <label
              htmlFor="name"
              className={`text-zinc-500 capitalize 
            absolute left-0 peer-focus:text-xs cursor-text
            peer-focus:-top-3 transition-all duration-300 ${
              newDonator.name != "" && "-top-3 text-xs"
            }`}
            >
              Name
            </label>
          </div>
          <div className="flex flex-col gap-2 my-2 relative py-3 ">
            <input
              required
              onChange={onChangeHandler}
              className="focus:outline-none appearance-none peer border-b-2 border-zinc-300 focus:border-red-300 pb-2"
              type="number"
              name="age"
              id="age"
              maxLength="4"
              value={newDonator.age}
            />
            <label
              htmlFor="age"
              className={`text-zinc-500 capitalize 
            absolute cursor-text left-0 peer-focus:text-xs transition-all duration-300
            peer-focus:-top-3 ${newDonator.age != "" && "-top-3 text-xs"}`}
            >
              Age
            </label>
          </div>
          <div className="flex flex-col gap-2 my-2 relative py-3 ">
            <input
              required
              onChange={onChangeHandler}
              className="focus:outline-none appearance-none peer border-b-2 border-zinc-300 focus:border-red-300 pb-2"
              type="number"
              name="phone"
              id="phone"
              value={newDonator.phone}
            />
            <label
              htmlFor="phone"
              className={`text-zinc-500 capitalize 
            absolute left-0 cursor-text peer-focus:text-xs transition-all duration-300
            peer-focus:-top-3 ${newDonator.phone != "" && "-top-3 text-xs"}`}
            >
              Phone
            </label>
          </div>
          <div className="flex flex-col gap-2 my-2 relative py-3 ">
            <input
              required
              onChange={onChangeHandler}
              className="focus:outline-none appearance-none peer border-b-2 border-zinc-300 focus:border-red-300 pb-2"
              type="text"
              name="address"
              id="address"
              value={newDonator.address}
            />
            <label
              htmlFor="address"
              className={`text-zinc-500 capitalize 
            absolute left-0 cursor-text peer-focus:text-xs transition-all duration-300
            peer-focus:-top-3 ${newDonator.address != "" && "-top-3 text-xs"}`}
            >
              Address
            </label>
          </div>
          <div className="flex flex-col gap-2 my-2 relative py-3 ">
            <input
              required
              onChange={onChangeHandler}
              className="focus:outline-none appearance-none peer border-b-2 border-zinc-300 focus:border-red-300 pb-2"
              type="date"
              name="lastDonated"
              value={moment(newDonator.lastDonated).format('YYYY-MM-DD')}
            />
            
            <label
              htmlFor="name"
              className={`text-zinc-500 capitalize 
            absolute left-0 text-xs transition-all duration-300
           -top-3`}
            >
              Last Donated
            </label>
          </div>
          <div className="flex justify-between gap-3 my-2 relative">
            <select
              value={newDonator.bGroup}
              onChange={handleChangeGroup}
              id="underline_select"
              className="block py-2 text-md w-full border-b-2  border-zinc-300   focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option defaultValue="A+">Blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <select
              value={newDonator.gender}
              onChange={handleChangeGender}
              id="underline_select"
              className="block text-md py-2 w-full border-b-2  border-zinc-300   focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option defaultValue="male">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="submit-btn my-5">
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="px-5 py-2 rounded-md text-white bg-red-500 float-right hover:bg-red-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
       }
    </div>
  );
};

export default update;
