import React from "react"
import { useNavigate, Link } from "react-router-dom"
import useSWR from "swr"
import { account } from "../appwrite/appwrite"

const fetcher = async () => {
  const data = await account.get()
  return data
}

function Profile() {
  const navigate = useNavigate()
  const { data, isValidating, error } = useSWR("profile", fetcher)

  const logout = async () => {
    try {
      await account.deleteSession("current")
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }
  if (error) {
    console.log(error)
    return (
      <section className="flex justify-center items-center">
        <div className="max-w-xl">
          <h1 className="text-center font-bold text-3xl underline text-red-500 drop-shadow-sm">
            Somethong Gone Wrong!!
          </h1>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen w-full bg-indigo-700 flex justify-center items-center">
      <div className="max-w-2xl shadow-lg rounded-md p-4 flex bg-white flex-col text-xl">
        <div className="flex-1">
          Name: {data?.name ?? ""} <br />
          Email: {data?.email ?? ""}
          <br />
          isVerified: {`${data?.emailVerification ?? ""}`}
        </div>
        <button
          onClick={logout}
          className="rounded-md mt-6 shadow-md py-2 px-4 bg-indigo-700 text-white font-bold border border-indigo-500 text-xl"
        >
          Logout
        </button>
      </div>
    </section>
  )
}

export default Profile
