import UsersView from "@/components/user/UsersView";



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
    console.log(Users)
    return (
        <div>DashboardPage
            <UsersView users={Users}/>
        </div>
    )
}

export default DashboardPage