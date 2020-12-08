// forms always hold their own state

import { useState } from "react";

const LetterForm = () => {

    const [author, setAuthor] = useState(""); //author starts as an empty string

    const [text, setText] = useState(""); //text starts as an empty string

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    };

    const handleTextChange = (event) => {
        setText(event.target.value)
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