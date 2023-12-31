import Doctors from "@components/dashboard-Admin/Doctors";
import BtnAddDoctor from "@components/doctors/BtnAddDoctor";


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
        const filteredPatients = patients.Users.filter((patient) => patient.role === 'admin')
        //console.log(filteredPatients)
        return filteredPatients;
        } catch (error) {
        console.log("Error loading users: ", error);
        }
    };
async function DoctorsPage() {
    const Users = await getUsers();
    //console.log(Users)
    return (
        <div>
            <BtnAddDoctor/>
            <Doctors users={Users}/>
        </div>

    )
}

export default DoctorsPage