import React, { useState } from 'react'

export const Addcategory = ({setCategories, categories}) => {

    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") {
            return;
        }
        setCategories([inputValue, ...categories]);
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Type something..."
            />
        </form>
    )
}
