  import axios from "axios";
  import UsersView from "@/components/user/UsersView";
  
  
  
  const apiUrl = process.env.API_URL;
  async function getUsers(){
    const res = await axios.get(`${apiUrl}/api/user`)
    const users = res.data.Users
    //console.log(res.data)
    return users
  }

async function HomePage() {
  //const users  = await getUsers();
  //console.log(users)
  return (
    <h1>hola mundo</h1>
  //<UsersView users={users}/>
  )
}

export default HomePage
