import { memo, useCallback } from "react"

/**
 * PATIENT CARD
 * @param {{firstname: string, lastname: string, birthdate: string | Date, address: string, deletePatient: () => void}} props 
 * @returns {JSX.Element}
 */
function PatientCard({ patient, deletePatient }) {

  const _deletePatient = useCallback(() => {
    deletePatient(pts => pts.filter(pt => patient.id !== pt.id))
  }, [])
  return <div className='card'>
            <div className='flex flex-col p-2'>
              <div className='flex justify-between'>
                <div className='flex flex-col -space-y-1'>
                  <h1 className='text-lg font-bold truncate w-[240px] text-gray-800'>{patient.firstname}</h1>
                  <h2 className='text-gray-600 text-sm font-semibold'>{patient.lastname}</h2>
                </div>

                <img src='https://api.iconify.design/ph:user-circle-fill.svg' className='h-5 w-5' />
              </div>
              <p className='text-sm text-gray-500 my-2'>
                <span>{new Intl.DateTimeFormat('fr-FR').format(patient.birthdate)}</span> &middot; <span>{patient.address}</span>
              </p>
            </div>
            <div className='border-t border-gray-100 flex items-center'>
              <button type='button' className='btn_danger' onClick={_deletePatient}>Supprimer</button>
            </div>
          </div>
}

export default memo(PatientCard)