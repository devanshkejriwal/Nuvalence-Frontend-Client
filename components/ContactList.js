import useFetch from 'react-fetch-hook'
import ContactCard from './ContactCard.tsx'
import {useEffect, useState} from 'react'

const ContactList = () => {
  const url = 'https://randomuser.me/api/'
  const { isLoading, data, error } = useFetch(url+'?results=10')
  const [contactList, setContactList] = useState()
  const [filterQuery, setFilterQuery] = useState()

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

  return (
    <div className={"bg-gray-100"}>
      <section>
        <form>
          <input
            type={"text"}
            placeholder={"type here to filter..."}
            onChange={event => setFilterQuery(event.target.value)}
            className={"ml-20 mt-6 rounded-md p-2"}
          />
        </form>
      </section>
      <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20"}>
        {contactList?.length < 1 && (
          <h1>No data matches your search</h1>
        )}
        <ContactCard contactList={contactList}/>
      </section>
    </div>
  )
}

export default ContactList