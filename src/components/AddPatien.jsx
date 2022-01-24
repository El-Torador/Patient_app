import { Transition, Dialog } from "@headlessui/react"
import { PlusIcon } from './PlusIcon'
import { Fragment, useCallback, useState } from "react"

function AddPatient({ savePatient }) {
  const [isOpen, setIsOpen] = useState(false)

  const _savePatient = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()

    console.log(e.target[0].id);

    const newPatient = {
      id: Date.now().toString(16)
    }

    for(let i = 0; i <= 3; i++) {
      newPatient[e.target[i].id] = e.target[i].value
    }

    savePatient(s => [...s, newPatient])
    toggleModal()
  }, [])

  const toggleModal = useCallback(() => setIsOpen(s => !s), [])
  return <>
        <button className='btn_primary' onClick={toggleModal}>
            <PlusIcon /> 
            <span className='hidden md:inline'>Nouveau patient</span>
          </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={toggleModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-40 cursor-not-allowed" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <form onSubmit={_savePatient} className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                 New Patien
                </Dialog.Title>
                <div className="mt-2 space-y-2">
                  <div className="control">
                    <label htmlFor="firstname" className="text-sm">Firstname</label>
                  <input required id='firstname' className="input" />
                  </div>
                  <div className='control'><label htmlFor="lastname" className="text-sm">Lastname</label>
                  <input required id='lastname' className="input" /></div>
      <div className='control'><label htmlFor="birthday" className="text-sm">Birthday</label>
                  <input required type='date' id='birthday' className="input" /></div>

      <div className='control'><label htmlFor="address" className="text-sm">Address</label>
                  <input required id='address' className="input" /></div>
      
                </div>

                <div className="mt-4 flex items-center space-x-2">
                  <button
                    type="submit"
                    className="btn_primary"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn_cancel"
                    onClick={toggleModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
}

export default AddPatient;