export default function Login(){

const handleSubmit = (e) =>{
    e.preventDefault()
}

const handleChange = (e) =>{
    console.log(e.target.value)
}
const handleClick = () =>{
    console.log("Du gjorde noe!")
}
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Brukernavn:</label>
            <input id="username" type="text" placeholder="Sebastian Fors.." onChange={handleChange}></input>
            <label htmlFor="password">Passord:</label>
            <input id="password" type="password" placeholder="******" onChange={handleChange}></input>
            <button type="submit"onClick={handleChange}>Logg inn</button>
        </form>
    )
}