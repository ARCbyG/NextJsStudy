'use client'

type ButtonProps = {
    onClick: () => void;
    label: string;
}

export function Button({onClick, label}: ButtonProps) {
    const buttonStyle = { margin: '5px' }

    return (
        <button style={buttonStyle} onClick={onClick}>{label}</button>
    )
}

export default {
    Button
}
