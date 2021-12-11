import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import Link from "next/dist/client/link";
import { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'

const TutorialModal = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-opacity-75"
      >
        <QuestionMarkCircleIcon className='h-7 w-7 flex-shrink-0 text-dark'/>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
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
              <Dialog.Overlay className="fixed inset-0 bg-dark bg-opacity-25 backdrop-blur-sm" />
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-yellow shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-dark"
                >
                  How to Play
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-dark">
                    Evil King Shan has conquered Planet Falicornia.
                    Queen Al Falcone somehow escaped Falicornia. 
                    Help King Shan find her.
                    Select Planets to search the Queen and corresponding Vehicles. 
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="button ring-offset-yellow"
                    onClick={closeModal}
                  >
                    Ready!!!!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}



const NavBar = () => {
  return(
    <div className='fixed top-0 right-0 left-0 p-3 bg-yellow z-50'>
      <div className='flex justify-between items-center max-w-screen-md mx-auto'>
        <p className='font-bold text-lg text-dark'>Finding Falcone</p>
        <TutorialModal/>
      </div>
    </div>
  )
}
export default NavBar;
