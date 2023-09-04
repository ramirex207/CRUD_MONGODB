import PatientEditForm from '@components/patient/PatientEditForm'
import axios from "axios"

const url = process.env.API_URL;
async function getPatient(id){
  const data = await axios.get(`${url}/api/user/${id}`)
  const user = await data.data.user
  //console.log(user)
  return{user}
}

async function EditPatientPage({params}) {
    const patient = await getPatient(params.id)
    //console.log(patient)
  return (
    <div>EditPatientPage
        <PatientEditForm patient = {patient}/>
    </div>
  )
}

export default EditPatientPage