import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import "./style.css";

interface CheckboxProps {
    className?: string;
    type: string;
    id: string;
    register: UseFormRegisterReturn;
    htmlFor: string;
    value: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
    className = "",
    type,
    id,
    register,
    htmlFor,
    value
}) => {
    return (
        <div className={`checkbox-container ${className}`}>
            <input
                type={type}
                id={id}
                {...register}    
            />
            <label htmlFor={htmlFor}>{value}</label>
        </div>
    )
}

export default Checkbox;