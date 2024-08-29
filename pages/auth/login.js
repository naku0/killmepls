import Input from "../../props/Input";
import {post} from "../../api/request";
import login from "../../styles/login.module.scss";
import button from "/styles/button.module.scss";
import input from "/styles/input.module.scss";
import {Button} from "../../props/Button";
import A from "../../props/A";
import {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const currentUsername = username.trim();
        const currentPassword = password.trim();
        if (!currentUsername || !currentPassword) {
            setError('Please fill in all fields');
            return;
        } else if (currentUsername.length >= 20 || currentPassword.length >= 20) {
            setError('Username or password too long');
            return;
        }
        alert(`${currentUsername} ${currentPassword}`);
        setError('');
        post({username: currentUsername, password: currentPassword}, '/auth/login');
    }

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        if (error) {
            setError('');
        }
    };

    return (
        <div className={login.container}>
            <h1 className={login.h}>LOGIN PAGE</h1>
            <hr className={login.mainHr}/>
            <form noValidate onSubmit={handleSubmit} className={login.loginForm}>
                <p>{error}</p>
                <Input type="text" onChange={handleInputChange(setUsername)}
                       placeholder="Username" required={true} value={username}
                       className={error ? input.inputError : input.input}/>
                <Input type="password" onChange={handleInputChange(setPassword)}
                       placeholder="Password" required={true} value={password}
                       className={error ? input.inputError : input.input}/>
                <Button type="submit" text="Login" className={button.button}/>
            </form>
            <hr className={login.otherHr}/>
            <p className={login.p}>
                Don't have an account?
            </p>
            <A href="../auth/registration" text="Register" className={login.link}/>
        </div>
    );
}

export default Login