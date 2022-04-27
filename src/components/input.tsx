import React, { FC } from 'react';
import cn from 'classnames';

type InputProps = {
    // Type of the input
    type: string,
    // Width of the input
    inputWidth?: string,
    // Background of Input
    inputBg?: string,
    // No Input Border
    inputNoBorder?: boolean,
    // Border color of input
    inputBorderColor?: string,
    // Title of input
    inputLabel?: string,
    // Title color of input
    inputLabelColor?: string,
    // Function that gets called on input change
    onInputChange(): void,
    // Disable the input
    inputIsDisabled?: boolean,
    // Input Placeholder,
    inputPlaceholder?: string
}

export const Input: FC<InputProps> = ({
    onInputChange,
    type = 'text',
    inputWidth = '100%',
    inputNoBorder = false,
    inputIsDisabled = false,
    inputBorderColor = 'primary',
    inputLabel = 'Some text',
    inputLabelColor = 'text-blue-500',
    inputPlaceholder = 'Placeholder'
}) => {
    return (
        <>
            <div className="flex flex-wrap mt-10">
                <label className={cn(
                    'font-sans capitalize text-2xl mb-3 w-full',
                    {
                        "text-red-500 ring-red-300": !inputIsDisabled && inputLabelColor === "danger",
                        "text-blue-500 ring-blue-300": !inputIsDisabled && inputLabelColor === "primary",
                        "text-gray-500 ring-gray-300": !inputIsDisabled && inputLabelColor === "secondary",
                        "text-yellow-500 ring-yellow-300": !inputIsDisabled && inputLabelColor === "warning",
                        "text-blue-400 ring-blue-200": !inputIsDisabled && inputLabelColor === "info",
                        "text-gray-100 opacity-25 ring-blue-200 cursor-not-allowed": inputIsDisabled,
                    }
                )}>{inputLabel}</label>
                <input type={type} style={{ width: inputWidth }} disabled={inputIsDisabled} onChange={onInputChange} placeholder={inputPlaceholder} className={cn(
                    'rounded-lg p-4 w-full border border-2',
                    {
                        "border-0 border-none": inputNoBorder,
                        "border-red-500": !inputIsDisabled && inputBorderColor === "danger",
                        "border-blue-500": !inputIsDisabled && inputBorderColor === "primary",
                        "border-gray-500": !inputIsDisabled && inputBorderColor === "secondary",
                        "border-yellow-500": !inputIsDisabled && inputBorderColor === "warning",
                        "border-blue-400": !inputIsDisabled && inputBorderColor === "info",
                        "border-gray-100 opacity-25 cursor-not-allowed": inputIsDisabled,
                    }
                )} />
            </div>
        </>
    );
};