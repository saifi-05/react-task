const Header = (props) => {

    return <header >
        <h1 style={{
            textAlign: "left"
        }}>React Task</h1>
        <h1 style={{
            textAlign: "right"
        }}>{props.userType + ':' + props.userEmail}</h1>
    </header>
}

export default Header;
