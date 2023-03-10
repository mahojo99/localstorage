import { Link } from "react-router-dom"
import { useState } from "react"

export default function Register({user, setUser}){
    const [complete, setComplete] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const handleChange = (e) =>{
        const inputName = e.target.name
        const inputValue = e.target.value
        setUser((prev) => ({...prev, [inputName]: inputValue}))
    }
    const handleClick = (e) =>{
        user.password === user.checkpass ? setComplete(true) : console.log("passordene er ikke like!")
    }
    return(
        <>
        {complete ? <p>Bruker ble laget, <Link to="/">Logg inn</Link></p> : <form onSubmit={handleSubmit}>
            <label htmlFor="username">Lag et brukernavn:</label>
            <input name="username" id="username" type="text" placeholder="Sebastian Fors.." onChange={handleChange} ></input>
            <label htmlFor="password">Lag et passord:</label>
            <input name="password" id="password" type="password" placeholder="******" onChange={handleChange}></input>
            <label htmlFor="checkpass">Befreft passord:</label>
            <input name="password" id="checkpass" type="password" placeholder="******" onChange={handleChange}></input>
            <button onClick={handleClick} type="submit">Registrer</button>
        </form>}
        </>
    )
}