import React,{useState} from "react";


function  AddPersonForm(props){
  const  [person,setPerson]  =  useState('')
  const [phoneNumber,setPhoneNumber] = useState("");

    function  handleChange(e){
        setPerson(e.target.value)
    }
    function handlePhoneNumber(event){
        setPhoneNumber(event.target.value)
    }
    const  handleSubmit = (event) =>{
       props.handleSubmission(person)
       props.handlePhoneNumber(phoneNumber)
       setPerson('')
        event.preventDefault()
    }
    return  (
        <form  onSubmit={handleSubmit}  className="container mt-3">
             <input  type="text"   onChange={handleChange} placeholder="Enter your name"  required/>
             <input  type="text"   onChange={handlePhoneNumber}  required/>
             <input  type="submit"  value="Add"  className="btn  btn-secondary  mx-3"/>
        </form>
    )
}

export  default  AddPersonForm;