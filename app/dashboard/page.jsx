import UsersView from "@/components/user/UsersView";
import axios from "axios";
const apiUrl = process.env.API_URL;

async function getUsers(){
    const res = await axios.get(`${apiUrl}/api/user`)
    const users = res.data.Users
    //console.log(res.data)
    return users
  }

async function DashboardPage() {
    const users= await getUsers();
    console.log(apiUrl)
  return (
    <div>DashboardPage
    <UsersView users={users}/>
    </div>
  )
}

export default DashboardPage