import React from "react"
import { Contact } from '../types/contacts'

interface props {
  contactList: Contact[]
}

class ContactCard extends React.Component <props, {}> {
    render() {
      return (
        <>
          {this.props.contactList?.map((contact, index) => (
            <figure className="bg-white text-white h-80 rounded-lg shadow-md" key={index}>
              <img alt="user" className="w-32 h-32 rounded-full mx-auto mt-7" src={contact.picture.large} />
              <figcaption className="text-center mt-5">
                <p className="text-gray-700 font-semibold text-xl mb-2">
                  {contact.name.first} {contact.name.last}
                </p>
                <p className="text-gray-500">
                  <span className="font-medium">email: </span>{contact.email}
                </p>
                <p className="text-gray-500">
                  <span className="font-medium">phone: </span>{contact.cell}
                </p>
              </figcaption>
            </figure>
          ))}
        </>
      )
    }
    
  }
  
  export default ContactCard