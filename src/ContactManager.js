import  React,{useState} from 'react'

import ContactList from './ContactList';
import AddPersonForm from './AddPersonForm';

function  ContactManager(props){
    const [contacts,setContacts]  = useState(props.data)
    const [phoneNumber,setPhoneNumber] = useState(props.phoneData)
    function  addContact(name){
        setContacts([...contacts,name])
    }
    function addPhoneNumber(num){
            setPhoneNumber([...phoneNumber,num])
    }
    return(
        <div>
            <AddPersonForm  handleSubmission={addContact}  handlePhone={addPhoneNumber}/>
            <ContactList  contact={contacts}  phonenumber={phoneNumber}/>
      </div>
      )
}

export  default ContactManager;