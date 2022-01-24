import { useState } from 'react'
import AddPatient from './components/AddPatien'
import PatientCard from './components/PatientCard'

const DEFAULT_PATIENT = {id: Date.now().toString(16) ,firstname: 'KAGMENI', lastname: 'Jordan', birthdate: new Date('07/11/1998'), address: '268 Rue Gabriel Peri'}

function App() {
  const [patients, setPatients] = useState([DEFAULT_PATIENT])

  return (
    <div className="min-h-screen bg-zinc-100">
      <header className="flex items-center justify-center shadow px-2 py-4 bg-white">
        <h1 className='text-blue-500 font-extrabold text-3xl'>Patient App</h1>
      </header>

      <main className='px-4 mt-10 md:max-w-5xl mx-auto'>
        <div className='flex items-center justify-between overflow-y-auto py-5 px-2 border-b border-gray-200'>
          <div className='flex items-center space-x-2'>
            <h2 className='text-xl font-bold text-gray-600'>
              List of patients
            </h2> 
            <span className='w-5 h-5 flex items-center justify-center rounded-full shadow bg-gray-100 text-gray-500 text-sm'>{patients.length}</span>
          </div>
            <AddPatient savePatient={setPatients} />
        </div>

        {patients.length > 0 && <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-3 place-items-center md:place-items-start'>
          {patients.map((patient, i) => <PatientCard key={i} deletePatient={setPatients} patient={patient} />) }
        </section>}

        {patients.length === 0 && <section className='flex flex-col items-center justify-center h-[500px] space-y-2'>
          <img src='/public/empty.svg' className='h-64' />
          <p className='text-gray-500 text-xl'>No Patient yet !</p>
        </section>}
      </main>
    </div>
  )
}

export default App
