import login from "../../styles/login.module.scss";
import Input from "../../props/Input";
import input from "../../styles/input.module.scss";
import {Button} from "../../props/Button";
import button from "../../styles/button.module.scss";
import A from "../../props/A";
import {useState} from "react";

const Registration = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        if (error) {
            setError('');
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const currentUsername = username.trim();
        const currentPassword = password.trim();
        const currentConfirmPassword = confirmPassword.trim();
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        } else if (!currentUsername || !currentPassword|| !currentConfirmPassword) {
            setError('Please fill in all fields!');
            return;
        } else if (currentUsername.length >= 20 || currentPassword.length >= 20) {
            setError('Username or password too long!');
            return;
        }
        alert("ok")
    }

    return (
        <div>
            <div className={login.container}>
                <h1 className={login.h}>REGISTRATION</h1>
                <hr className={login.mainHr}/>
                <form noValidate onSubmit={handleSubmit} className={login.loginForm}>
                    <p>{error}</p>
                    <Input type="text" onChange={handleInputChange(setUsername)} autoComplete="off"
                           placeholder="Username" required={true} value={username}
                           className={error ? input.inputError : input.input}/>
                    <Input type="password" onChange={handleInputChange(setPassword)} autoComplete="off"
                           placeholder="Password" required={true} value={password}
                           className={error ? input.inputError : input.input}/>
                    <Input type="password" onChange={handleInputChange(setConfirmPassword)} autoComplete="off"
                           placeholder="Confirm Password" required={true} value={confirmPassword}
                           className={error ? input.inputError : input.input}/>
                    <Button type="submit" text="Register" className={button.button}/>
                </form>
                <hr className={login.otherHr}/>
                <p className={login.p}>
                    Already have an account?
                </p>
                <A href="../auth/login" text="Login" className={login.link}/>
            </div>
        </div>
    );
};

export default Registration