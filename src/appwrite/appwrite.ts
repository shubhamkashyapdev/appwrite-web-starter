import { Client, Account, Databases } from "appwrite"
export const ENDPOINT = "http://localhost:5050/v1"
export const PROJECT_ID = "6387888f2344ba756f97"
export const DATABASE_ID = "638788d6c37e8dc0cc0d"
export const COLLECTION_ID = "638788e2b497289ff4c3"
const client = new Client()

client.setEndpoint(ENDPOINT).setProject(PROJECT_ID)

export const account = new Account(client)

// Database
export const databases = new Databases(client)
