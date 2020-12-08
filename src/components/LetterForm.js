// forms always hold their own state

import { useState } from "react";

const LetterForm = ({onLetterSubmit}) => {  //onLetterSubmit is a prop caught here from Letter

    const [author, setAuthor] = useState(""); //author starts as an empty string

    const [message, setMessage] = useState(""); //text starts as an empty string

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleFormSubmit = (event) => {
        // can do any kind of validation on here to check and change 
        event.preventDefault();
        const authorToSubmit = author.trim(); //removes all whitespace after the text
        const messageToSubmit = message.trim();
        if (!authorToSubmit || !messageToSubmit) {
            return  //if these are not present, just return the form
        };
        //update letters in LetterConsole
        onLetterSubmit({
            author: authorToSubmit,
            message: messageToSubmit
        })
        setAuthor("");
        setMessage(""); //these set them back to empty strings
    };

    return (
        <form className="letter-form" onSubmit={handleFormSubmit}>
            <input 
                type="text"
                placeholder="Your Name"
                value={author}
                onChange={handleAuthorChange}  //onChange is a listener
            />
            <input
                type="text"
                placeholder="Say something.."
                value={message}
                onChange={handleMessageChange}
            />
            <input
                type="submit"
                value="Post"
            />
        </form>
    );
};

export default LetterForm;