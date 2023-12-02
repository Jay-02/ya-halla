import axios from "axios"

const BACKEND_URL = "https://ya-halla-db-default-rtdb.europe-west1.firebasedatabase.app/"
export const storeUserInfo = (userData)=> {
axios.put(BACKEND_URL + '/test.json', userData )
}