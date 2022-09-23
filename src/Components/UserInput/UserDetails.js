function UserDetails (props) {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.college}</div>
        </div>
    )
}

export default UserDetails