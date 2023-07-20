
'use client'

type MallProps = {
    onClick: () => void;
    label: string;
}

export function Mall({ onClick, label }: MallProps) {
    return (
        <div>
            <h1>
                Mall
            </h1>
        </div>
    )
}

export default {
    Mall
}
