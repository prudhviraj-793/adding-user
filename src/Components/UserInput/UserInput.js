import {useRef} from 'react'

function UserInput(props) {

    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')

    const nameRef = useRef()
    const ageRef = useRef()

    // function nameHandler(event) {
    //     setName(event.target.value)
    // }

    // function ageHandler(event) {
    //     setAge(event.target.value)
    // }

    function submitHandler(event) {
        event.preventDefault()
        const data = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            id: Math.random().toString()
        }
        props.userData(data)
        nameRef.current.value = ''
        ageRef.current.value = ''
        // setName('')
        // setAge('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>UserName</label> <input type='text' ref={nameRef} />
            </div>
            <div>
                <label>Age</label> <input type='number' ref={ageRef} />
            </div>
            <div>
                <button type='submit'>Add User</button>
            </div>
        </form>
    )
}

export default UserInput