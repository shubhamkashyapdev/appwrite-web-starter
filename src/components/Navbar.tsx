import React from "react"
import { Link } from "react-router-dom"
const links = [
  {
    name: "Login",
    route: "/",
  },
  {
    name: "Singup",
    route: "/singup",
  },
  {
    name: "Add Book",
    route: "add-book",
  },
  {
    name: "Books",
    route: "/books",
  },
]
const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="bg-white w-[90%] max-w-[1440px] mx-auto">
        <nav className=" flex justify-end h-full py-4">
          <ul className="flex gap-4 items-center w-fit font-bold text-indigo-700">
            {links.map((item) => (
              <Link to={item.route}>{item.name}</Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
