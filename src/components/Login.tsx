import React, { useState } from "react"
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom"
import { account } from "../appwrite/appwrite"
import Input from "./Input"
import { Link } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
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

  const handleLogin = async (e: any) => {
    e.preventDefault()
    if (!user.email || !user.password) {
      alert("Invalid Input")
      return
    }
    e.preventDefault()
    try {
      const response = await account.createEmailSession(
        user.email,
        user.password
      )
      console.log(response)
      navigate("/profile")
    } catch (err: any) {
      console.log(err.message)
    }
  }
  return (
    <section className="h-screen w-full flex justify-center items-center bg-slate-700">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
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
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <Link to="/singup">
              <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Don't have an account?
              </span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
