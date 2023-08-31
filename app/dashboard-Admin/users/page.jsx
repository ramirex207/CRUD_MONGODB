import Doctors from "@components/dashboard-Admin/Doctors";

const getUsers = async () => {
    const apiUrl = process.env.API_URL;
        try {
        const res = await fetch(`${apiUrl}/api/user`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }
        const patients = await res.json();
        //console.log(patients)
        const filteredPatients = patients.Users.filter((patient) => patient.role === 'user')
        //console.log(filteredPatients)
        return filteredPatients;
        } catch (error) {
        console.log("Error loading users: ", error);
        }
    };
async function UsersPage() {
    const Users = await getUsers();
    //console.log(Users)
    return (
        <div>DoctorsPage
            <Doctors users={Users}/>
        </div>

    )
}

export default UsersPage