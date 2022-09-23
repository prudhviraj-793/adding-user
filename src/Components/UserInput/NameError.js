function NameError(props) {

    function clickHandler() {
        props.isClicked(true)
    }

    return (
        <div>
            <div>Name Error</div>
            <p>enter name</p>
            <button onClick={clickHandler} >Ok</button>
        </div>
    )
}

export default NameError