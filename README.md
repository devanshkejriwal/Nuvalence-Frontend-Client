# Address Book - Front End Client

## Instruction
- Run `npm i` to download required packages
- Run `npm run dev` to start the application
- Navigate to localhost:3000

## Summary

### My approach

My approach was simple. I knew I had to call an API from the frontend and display the results which is pretty straightforward. Since these are contact lists I knew I needed to have a `ContactCard` component and a separate `ContactList` Component that displays all the contact cards. I know the assignment said I should have a "details page" but I felt like that was bad UI because a Modal would be more appropriate in this scenario so that's what I chose.

### Features
- Searching for Contacts
- Displaying Contacts
- Modals for contact details

### Short comings

It's my last week at my current internship and I've been working overtime to complete my tasks so I couldn't assign much time to this project. But given more time here's what I would do
- Have separate CSS files. Right now the CSS is not readable and I would never push this to prod with the CSS looking like that.
- I wanted to build out pagination but I didn't have time
- I would never call a 3rd party API directly from the frontend. I would have liked to start up my own backend server which called the random user API and echoed the results but I didn't have time to implement it.

Overall, given more time I would've made the code way more readable, added a linter (my laptop is really new and I didn't have time to setup linting for my repo) and created a backend API with integration tests as well. 

I structured the code in the frontend to the best of my abilities so that it's resuable and scalable (apart from the CSS).
