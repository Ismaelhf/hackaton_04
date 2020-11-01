import React,{useState} from 'react'
import './index.css'

const Form = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [address, setAddress] = useState('');


const sendForm = (e) =>{
    e.preventDefault();
    document.querySelector('#nameForm').value = name;
    console.log({phone});
    document.querySelector('#surnameForm').value = surname;
    document.querySelector('#emailForm').value = email;
    document.querySelector('#phoneForm').value = phone;
    document.querySelector('#dateBirthForm').value = dateBirth;
    document.querySelector('#addressForm').value = address;
}

    return (
        <section className="login">
            <div className="loginContainer">
                <div className="form form-resp">
                    
                    <div className="titleForm item">
                        <h1>Datos de Formulario</h1>
                    </div>
                        <label>Nombre</label>
                    <div className="item">
                        <input type="text" required  id="nameForm"/>
                    </div>
                        <label>Apellido</label>
                    <div className="item">
                        <input type="text" required id="surnameForm"/>
                    </div>
                        <label>Email</label>
                    <div className="item" >
                        <input type="email" required id="emailForm"/>
                    </div>
                        <label>Phone</label>
                    <div className="item" >
                        <input type="number" required id="phoneForm"/>
                    </div>
                        <label>Fecha de Nacimiento</label>
                    <div className="item">
                        <input type="date" required id="dateBirthForm"/>
                    </div>
                        <label>Dirección</label>
                    <div className="item">
                        <input type="text" required id="addressForm"/>
                    </div>
                
                </div>
                <form onSubmit={sendForm} className="form form-registro">
                    <div className="title">
                        <h1>Arrange a collection</h1>
                    </div>
                        <label>Nombre</label>
                    <div className="item">
                        <input type="text" required value={name} onChange={({target: {value}})=> setName(value)}/>
                        {/* <p className="errorMsg">{emailError}</p> */}
                    </div>
                        <label>Apellido</label>
                    <div className="item">
                        <input type="text" required value={surname} onChange={({target: {value}})=> setSurname(value)}/>
                    </div>
                        <label>Correo</label>
                    <div className="item">
                        <input type="email" required value={email} onChange={({target: {value}})=> setEmail(value)}/>
                    </div>
                        <label>Teléfono</label>
                    <div className="item">
                        <input type="number"  required value={phone} onChange={({target: {value}})=> setPhone(value)}/>
                    </div>
                        <label>Fecha de Nacimiento</label>
                    <div className="item">
                        <input type="date" required value={dateBirth} onChange={({target: {value}})=> setDateBirth(value)}/>
                    </div>
                        <label>Dirección</label>
                    <div className="item">
                        <input type="text" required value={address} onChange={({target: {value}})=> setAddress(value)}/>
                        </div>
                    <div className="btnContainer">
                        <input type="submit" id="btnSubmit" value="Submit"/>
                    </div>

                </form>
            </div>
                {/* <div>form data:{JSON.stringify({name,surname,email,phone,dateBirth,address})}</div> */}
        </section>
    )
}


export default Form;