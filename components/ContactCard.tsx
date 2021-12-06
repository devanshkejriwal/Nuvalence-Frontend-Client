import React from "react"
import { Contact } from '../types/contacts'
import ContactModal from './ContactModal'

interface props {
  contact: Contact
  index: number
}

 const ContactCard = ({contact, index}: props) => {
  const [showModal, setShowModal] = React.useState<Boolean>(false);
    return (
      <>
          <figure className="bg-white text-white h-80 rounded-lg shadow-md" key={index}>
            <img alt="user" className="w-32 h-32 rounded-full mx-auto mt-7" src={contact.picture.large} />
            <figcaption className="text-center mt-5">
              <p className="text-gray-700 font-semibold text-xl mb-2">
                {contact.name.first} {contact.name.last}
              </p>
              <button
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Details
              </button>
              {showModal && <ContactModal closeModal={()=>setShowModal(false)} contact={contact}/>}
            </figcaption>
          </figure>
  
      </>
    )
  }
  
  export default ContactCard