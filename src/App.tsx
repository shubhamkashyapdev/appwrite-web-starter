import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BookForm from "./components/BookForm"
import Books from "./components/Books"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Singup from "./components/Singup"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add-book" element={<BookForm />} />

        <Route
          path="*"
          element={
            <h1 className="text-center text-4xl font-bold underline my-10">
              404
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
