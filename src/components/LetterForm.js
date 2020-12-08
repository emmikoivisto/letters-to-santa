// forms always hold their own state

import { useState } from "react";

const LetterForm = () => {

    const [author, setAuthor] = useState(""); //author starts as an empty string

    const [text, setText] = useState(""); //text starts as an empty string

    return (
        <form>
            <input 
                type="text"
                placeholder="Your Name"
                value={author}
            />
            <input
                type="text"
                placeholder="Say something.."
                value={text}
            />
            <input
                type="submit"
                value="Post"
            />
        </form>
    );
};

export default LetterForm;