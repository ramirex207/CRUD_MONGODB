import UsersView from "@/components/user/UsersView";
import DigitalClock from "@components/DigitalClock";



const getUsers = async () => {
    const apiUrl = process.env.API_URL;
    try {
      const res = await fetch(`${apiUrl}/api/user`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading users: ", error);
    }
  };
  

async function DashboardPage() {
    const {Users} = await getUsers();
   // console.log(Users)
    return (
        <div>
          
          <h1 className="text-center text-2xl py-2">LISTA DE USUARIOS</h1>
          <UsersView users={Users}/>
        </div>
    )
}

export default DashboardPage