import React, { createContext, useState } from 'react'

export const Apps = createContext();
export default function AppProvider({ Children }) {
    const [valueInput, setValueInput] = useState()
    return (
        <Apps.Consumer value={{ valueInput, setValueInput }}>
            {Children}
        </Apps.Consumer>

    )
}
