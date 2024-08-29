import input from "/styles/input.module.scss";
import {useState} from "react";
import { PiEye, PiEyeClosed } from "react-icons/pi";

const Input = ({type, placeholder, onChange, value, name, required, className, autoComplete}) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    return (
        <div className={input.container}>
            <input
                className={className}
                type={isPasswordVisible ? "text" : type}
                required={required}
                onChange={onChange}
                value={value}
                name={name}
                autoComplete={autoComplete || undefined}
            />
            <label htmlFor={placeholder} className={input.label}>
                {placeholder}
            </label>
            {type === "password" && (
                <button
                    type={"button"}
                    className={input.button}
                    onClick={() => setPasswordVisible(!isPasswordVisible)}
                    aria-label={isPasswordVisible ? "Hide password" : "Show password"}>
                    {isPasswordVisible ? <PiEyeClosed /> : <PiEye />}
                </button>
            )}

        </div>
    )
};
export default Input;