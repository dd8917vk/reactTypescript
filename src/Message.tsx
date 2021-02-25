import React from 'react'
interface Props {
    message: string,
    newChange: () => void
}
export const Message: React.FC<Props> = ({ message, newChange }) => {
    newChange();
    return (
        <div>
           <p>This is a quick {message}</p> 
        </div>
    )
}
