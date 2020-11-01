import React,{useState} from 'react'
import './index.css'

const Form = () => {

    const [name, setName] = useState('')

    // const { 
    //     name,
    //     setName
    // } = props


    return (
        <section className="login">
            <div className="loginContainer">
                <label>Nombre</label>
                <input type="text" required value={name} onChange={e => setName(e.target.value)}/>
                {/* <p className="errorMsg">{emailError}</p> */}
                {/* <label>Apellido</label>
                <input type="text" required value="" />
                <label>Correo</label>
                <input type="email" required value="" />
                <label>Teléfono</label>
                <input type="text" required value="" />
                <label>Fecha de Nacimiento</label>
                <input type="text" required value="" />
                <label>Dirección</label>
                <input type="text" required value="" /> */}
                <div className="btnContainer">
                    <button >Submit</button>
                </div>
            </div>
        </section>
    )
}


export default Form;