import useFetch from 'react-fetch-hook'
import React, {useEffect, useState} from 'react'
import { Contact } from '../types/contacts'
import ContactCard from './ContactCard'
import { baseURL, contactLimit } from '../constant'

interface ContactListHttpResponse {
    results: Contact[]
}


 const ContactList = () => {
    const [contactList, setContactList] = useState<Contact[]>()
    const [filterQuery, setFilterQuery] = useState<string>()
    const { data, error } = useFetch<ContactListHttpResponse>(baseURL+`?results=${contactLimit}`)

    useEffect(() => {
        if (!filterQuery) {
          setContactList(data?.results?.slice(0, 100))
        } else {
          const queryString = filterQuery.toLowerCase()
          const filteredData = data?.results?.filter(contact => {
            const fullName = `${contact.name.first} ${contact.name.last}`
    
            // if it's just one letter, return all names that start with it
            if (queryString.length === 1) {
              const firstLetter = fullName.charAt(0).toLowerCase()
              return firstLetter === queryString
            }
            else {
              return fullName.toLowerCase().includes(queryString)
            }
          })
          setContactList(filteredData)
        }
      }, [data, filterQuery])

      if (error) {
          return (
            <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20"}>
              <h1>An error occured. Please try again later</h1>
            </section>
          )
      }
    
    return (
        <div className={"bg-gray-100"}>
        <section>
          <form>
            <input
              type={"text"}
              placeholder={"Search for Contacts"}
              onChange={event => setFilterQuery(event.target.value)}
              className={"ml-20 mt-6 rounded-md p-2"}
            />
          </form>
        </section>
        <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20"}>
          {contactList?.length < 1 && (
            <h1>No data matches your search</h1>
          )}
          {contactList?.map((contact, index) => {return (<ContactCard contact={contact} index={index}/>)})}
        </section>
      </div>
    )
  }
  
  export default ContactList