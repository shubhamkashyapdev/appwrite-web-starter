import React from "react"
import useSWR from "swr"
import { COLLECTION_ID, databases, DATABASE_ID } from "../appwrite/appwrite"

const fetcher = async () => {
  const data = await databases.listDocuments(DATABASE_ID, COLLECTION_ID)
  return data
}

function Books() {
  const { data, isValidating, error, mutate } = useSWR("books", fetcher)

  const deleteItem = async (id: string) => {
    try {
      const deletedItem = await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      )
      console.log(`Item Delete`)
      mutate()
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <section className="min-h-screen w-full bg-indigo-700 flex justify-center items-center">
      <div className="min-w-2xl shadow-lg rounded-md p-4 flex bg-white flex-col text-xl">
        {isValidating ? (
          <h1 className="font-bold text-2xl text-center">Loading...</h1>
        ) : (
          <div className="flex flex-col gap-2 w-full min-w-2xl">
            {data?.documents.map((item) => (
              <h5
                onClick={() => deleteItem(item.$id)}
                className="bg-indigo-200 hover:bg-indigo-500 text-xl hover:shadow-sm hover:text-white cursor-pointer select-none ease-in duration-150 w-full px-6"
                key={item.$id}
              >
                {item.Name}
              </h5>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Books
