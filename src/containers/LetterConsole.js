import {useState} from 'react';
import LetterBox from '../components/LetterBox';


//React component
const LetterConsole = () => {

    const [letters, setLetters] = useState([
        {author:"Chris", message:"Hello Santa"},
        {author: "Harrison", message:"Please bring me a gift"},
        {author: "Eugene", message: "Anything but salmon"}
    ])


    return (
        <>
            <h2>This is the letter console</h2>
            <LetterBox letters={letters}/>
        </>
    )
};

export default LetterConsole;