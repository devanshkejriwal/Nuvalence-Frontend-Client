import React from 'react';
import { Contact } from '../types/contacts'

interface props {
  contact: Contact,
  closeModal: VoidFunction,
}

const ContactModal = ({ contact, closeModal }: props) => {
  return (
    <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="bg-white rounded-lg p-6">
                  <img className="w-32 h-32 rounded-full mx-auto mt-7" src={contact.picture.large} />
                  <div className="text-center m-5">
                    <h2 className="text-lg text-gray-800 ">{contact.name.first} {contact.name.last}</h2>
                    <div className="text-gray-600">{contact.email}</div>
                    <div className="text-gray-600">{contact.cell}</div>
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 m-5"
                      type="button"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  );
}

export default ContactModal