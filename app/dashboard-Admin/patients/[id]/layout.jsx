import PatientNavbar from "@components/patient/PatientNavbar";
import axios from "axios";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400']
});
const url = process.env.API_URL;
async function getPatient(id){
  const data = await axios.get(`${url}/api/user/${id}`)
  const user = await data.data.user
  //console.log(user)
  return{user}
}



export default async function UserLayout({ children,params }) {
    
    const patient = await getPatient(params.id)
   // console.log(patient)
    return (

        <main className={inter.className}>
            <PatientNavbar id={params.id} nombrePaciente={patient.user.name}  />
            {children}
        </main>
    );
}
