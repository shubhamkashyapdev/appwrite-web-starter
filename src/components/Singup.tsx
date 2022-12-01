import React, { useState } from "react"
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom"
import { account } from "../appwrite/appwrite"
import Input from "./Input"
import { Link } from "react-router-dom"

function Singup() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleUserInput = async (e: any) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSingup = async (e: any) => {
    e.preventDefault()
    if (!user.name || !user.email || !user.password) {
      alert("Invalid Input - name, email and password is required")
      return
    }
    const promise = account.create(uuid(), user.email, user.password, user.name)
    promise.then(
      (response) => {
        console.log(response)
        navigate("/")
      },
      (error) => console.log({ error })
    )
  }
  return (
    <section className="h-screen w-full flex justify-center items-center bg-slate-700">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSingup}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <Input
            id="name"
            type="text"
            onChange={handleUserInput}
            name="name"
            placeholder="Name"
            value={user.name}
            label="User's Name"
          />
          <Input
            id="email"
            type="email"
            onChange={handleUserInput}
            name="email"
            placeholder="Email"
            value={user.email}
            label="User's Email"
          />

          <Input
            id="password"
            type="password"
            onChange={handleUserInput}
            name="password"
            placeholder="Password"
            value={user.password}
            label="User's Password"
          />

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <Link to="/">
              <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Already have an account?
              </span>
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </section>
  )
}

export default Singup
