import React from "react";


function  ContactList(props){
    let contactsList = props.contact
    let numbersList = props.phonenumber;
    let  contact = contactsList.map((elem,index) => <td  key={index}>{elem}</td>)
    let phone = numbersList.map((elem,index)=><td  key={index}>{elem}</td>)
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Phone Number</th>
            </tr>
            <tr>
                <td  style={{display:"flex",flexDirection:"column"}}>{contact}</td>
                <td>{phone}</td>
            </tr>
        </table>
    )
}

export  default  ContactList;