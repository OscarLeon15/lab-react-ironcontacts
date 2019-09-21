import React from 'react';
import contacts from '../contacts.json'




class ContactsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list: contacts,
            listDisplay: contacts.slice(0,5)
        }
    };

    showContacts = () =>{

        return this.state.listDisplay.map((eachContact, index)=>{

            return (
                <div key={index} style={{
                    border: "1px solid black",
                    borderRadius: "4px",
                    width: "45%",
                    margin: "10px",
                    padding: "5px"
                    }}>
                    <h4>{eachContact.name}</h4>
                    <p> <img src={eachContact.pictureUrl} alt="something"style={{width: "250px",height: "250px"}}></img></p>
                    
                    <p>popularity: {eachContact.popularity}</p>
                    <button onClick = { ()=>{ this.deleteContact(index)} }> Delete </button>
                </div>
            )
        })

    };

    updateTheValue = (e) =>{
        // this.state[e.target.name] = e.target.value
        // never do this
        // never update the state directly
        // instead use this.setState
        this.setState({
            [e.target.name]: e.target.value
        })   
    }


    deleteContact = (whichOne) =>{
        let copy = [...this.state.listDisplay];
        copy.splice(whichOne, 1);
        this.setState({listDisplay: copy})
 }

render(){
    return(
        <div>
            {this.showContacts()}
        </div>
    )
}


};  

export default ContactsList;
