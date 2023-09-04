
import PatientFormView from "@components/patient/PatientFormView";
import axios from "axios"

const url = process.env.API_URL;
async function getPatient(id){
  const data = await axios.get(`${url}/api/user/${id}`)
  const user = await data.data.user
  //console.log(user)
  return{user}
}

async function PatientPage({params}) {
 // console.log(params.id)
  const patient = await getPatient(params.id)
  //console.log(patient)

  return (
    <div>
    <PatientFormView patient={patient.user}/>
    </div>
  )
}

export default PatientPage