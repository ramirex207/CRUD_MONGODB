
import PatientView from "@components/dashboard-Admin/PatientView";
import ButtonAgregar from "@components/patient/ButtonAgregar"
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
      const filteredPatients = patients.Users.filter((patient) => patient.role === 'patient')
      //console.log(filteredPatients)
      return filteredPatients;
      } catch (error) {
      console.log("Error loading users: ", error);
      }
  };


async function PatientsPage() {
  const patients = await getUsers();
  //console.log(patients)
  return (
    <div>
        <ButtonAgregar/>
        <PatientView users={patients}/>
    </div>
  )
}

export default PatientsPage