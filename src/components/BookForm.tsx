import React, { useState } from "react"
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom"
import Input from "./Input"
import { COLLECTION_ID, databases, DATABASE_ID } from "../appwrite/appwrite"

function BookForm() {
  const navigate = useNavigate()
  const [book, setBook] = useState("")
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!book) {
      alert("Invalid input!")
      return
    }
    try {
      const item = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        uuid(),
        {
          Name: book,
        }
      )
      console.log({ item })
      setBook("")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <section className="min-h-screen w-full bg-indigo-700 flex justify-center items-center">
      <div className="max-w-2xl shadow-lg rounded-md p-4 flex bg-white flex-col text-xl">
        <Input
          type="text"
          id="book"
          label="Book Name"
          placeholder="Book Name"
          name="book"
          onChange={(e: any) => setBook(e.target.value)}
          value={book}
        />
        <button
          onClick={handleSubmit}
          className="rounded-md mt-6 shadow-md py-2 px-4 bg-indigo-700 text-white font-bold border border-indigo-500 text-xl"
          type="submit"
        >
          Add Book
        </button>
      </div>
    </section>
  )
}

export default BookForm
