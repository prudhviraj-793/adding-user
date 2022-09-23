import {useState} from 'react'

function UserInput(props) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    function nameHandler(event) {
        setName(event.target.value)
    }

    function ageHandler(event) {
        setAge(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        const data = {
            name: name,
            age: age,
            id: Math.random().toString()
        }
        props.userData(data)
        setName('')
        setAge('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>UserName</label> <input type='text' value={name} onChange={nameHandler}  />
            </div>
            <div>
                <label>Age</label> <input type='number' value={age} onChange={ageHandler} />
            </div>
            <div>
                <button type='submit'>Add User</button>
            </div>
        </form>
    )
}

export default UserInput