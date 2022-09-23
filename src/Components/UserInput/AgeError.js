function AgeError(props) {

    function clickHandler() {
        props.isClicked(true)
    }

    return (
        <div>
            <div>Age Error</div>
            <p>please enter age above 0</p>
            <button onClick={clickHandler} >Ok</button>
        </div>
    )
}

export default AgeError