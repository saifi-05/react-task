import React, { useState } from 'react';
import Todos from './Todos';
import LoginForm from './LoginForm';
import Header from './Header';

const Login = () => {
    const users =
        [
            {
                "email": "admin@mail.com",
                "password": "admin@123",
                "type": "admin"
            },
            {
                "email": "ram@mail.com",
                "password": "ram@1234",
                "type": "user"
            },
            {
                "email": "shyam@mail.com",
                "password": "shyam@123",
                "type": "user"
            }
        ];
    const Tasks_Ram = [
        {
            "title": "Play",
            "desc": "I need to go to play football",
            "id": "1"
        },
        {
            "title": "Cook",
            "desc": "Need to buy vegetables",
            "id": "2"
        },
        {
            "title": "Health",
            "desc": "Need to get health checkup tomorrow",
            "id": "2"
        },
    ];

    const Tasks_Shyam = [
        {
            "title": "Play",
            "desc": "I need to go to play badminton",
            "id": "1"
        },
        {
            "title": "Health",
            "desc": "Renew my gym membership",
            "id": "2"
        }
    ];

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState({})

    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const handleLogin = (email, pwd) => {

        const emails = users.map(user => user.email);

        if (!(pwd.length >= 8 && (pwd.includes('@') || pwd.includes('!') || pwd.includes('$')))) {
            alert("Invalid password");
        }

        if (!email.match(validEmail)) {
            alert("Invalid email address!");
        }

        if (!emails.includes(email)) {
            alert("Email not found");
        }

        const userInfo = users.find(el => el.email === email && el.password === pwd)

        if (!userInfo) {
            alert('Incorrect user name or password')
        }
        setIsLoggedIn({ ...userInfo });
        
    }

    return (<div className="App">
        {
            Object.keys(isLoggedIn).length === 0 ?
                <LoginForm
                    userName={userName}
                    password={password}
                    setUserName={setUserName}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                >
                </LoginForm> : null
        }
        {  
            Object.keys(isLoggedIn).length > 0 && isLoggedIn.type === 'admin' ? 
            <div><Header userType={isLoggedIn.type} userEmail = {isLoggedIn.email}></Header><Todos Tasks={[...Tasks_Ram, ...Tasks_Shyam]} ></Todos></div> :
            Object.keys(isLoggedIn).length > 0 && isLoggedIn.type === 'user' && isLoggedIn.email === 'ram@mail.com' ? 
            <div><Header userType={isLoggedIn.type} userEmail = {isLoggedIn.email}></Header><Todos Tasks={[...Tasks_Ram]} ></Todos></div> :
            Object.keys(isLoggedIn).length > 0 && isLoggedIn.type === 'user' && isLoggedIn.email === 'shyam@mail.com' ? 
            <div><Header userType={isLoggedIn.type} userEmail = {isLoggedIn.email}></Header><Todos Tasks={[...Tasks_Shyam]} ></Todos></div>
            : null
        }
    </div>
    );
}

export default Login