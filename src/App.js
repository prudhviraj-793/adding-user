import {useState} from 'react'
import AgeError from './Components/UserInput/AgeError'
import UserDetails from './Components/UserInput/UserDetails'
import UserInput from "./Components/UserInput/UserInput"
import NameError from './Components/UserInput/NameError'

function App() {

    const [allUserData, setAllUserData] = useState([])
    const [isAgeValid, setValidAge] = useState(true)
    const [isNameValid, setValidName] = useState(true)

    function getUserData(userData) {
        if (userData.age > 0) {
            setAllUserData(() => {
                return [userData, ...allUserData]
            })
        } else if (userData.name.trim().length === 0) {
            setValidName(false)
        }else {
            setValidAge(false)
        }
    }

    function clickHandler(clicked) {
        if (clicked) {
            setValidAge(true)
        }
    }

    function nameHandler(clicked) {
        if (clicked) {
            setValidName(true)
        }
    }

    return (
        <div>
            <UserInput userData={getUserData} />
            {!isAgeValid && <AgeError isClicked={clickHandler} />}
            {!isNameValid && <NameError isClicked={nameHandler} />}
            {allUserData.length > 0 && allUserData.map(user => {
                return <UserDetails key={user.id} name={user.name} age={user.age}  />
            })}
        </div>
    )
}

export default App