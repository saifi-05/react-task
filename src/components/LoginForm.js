import LoginButton from './LoginButton'

const LoginForm = (props) => {
    return (<div>
        <label>
            <b>UserName</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required onChange={event => props.setUserName(event.target.value)}></input>
        <br></br>
        <label>
            <b>Password</b>
        </label>
        <input type="text" placeholder="Enter Password" name="upassword" required onChange={event => props.setPassword(event.target.value)}></input>
        <br></br>
        <LoginButton onClick={() => { props.handleLogin(props.userName, props.password) }}></LoginButton>

    </div>)
}

export default LoginForm