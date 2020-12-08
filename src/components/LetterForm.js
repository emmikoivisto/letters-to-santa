// forms always hold their own state

import { useState } from "react";

const LetterForm = () => {

    const [author, setAuthor] = useState(""); //author starts as an empty string

    const [text, setText] = useState(""); //text starts as an empty string

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleFormSubmit = (event) => {
        // can do any kind of validation on here to check and change 
        event.preventDefault();
        const authorToSubmit = author.trim(); //removes all whitespace after the text
        const textToSubmit = text.trim();
        if (!authorToSubmit || !textToSubmit) {
            return  //if these are not present, just return the form
        };
    };

    return (
        <form>
            <input 
                type="text"
                placeholder="Your Name"
                value={author}
                onChange={handleAuthorChange}  //onChange is a listener
            />
            <input
                type="text"
                placeholder="Say something.."
                value={text}
                onChange={handleTextChange}
            />
            <input
                type="submit"
                value="Post"
            />
        </form>
    );
};

export default LetterForm;