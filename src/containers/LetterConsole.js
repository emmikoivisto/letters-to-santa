import {useState} from 'react';
import LetterBox from '../components/LetterBox';
import LetterForm from '../components/LetterForm';



//React component
const LetterConsole = () => {

    const [letters, setLetters] = useState([
        {id:1, author:"Chris", message:"Hello Santa"},
        {id: 2, author: "Harrison", message:"Please bring me a gift"},
        {id: 3, author: "Eugene", message: "Anything but salmon"}
    ]);

    const addLetter = (submittedLetter) => {
        submittedLetter.id = Date.now();
        const updatedLetters = [...letters, submittedLetter]  //spread operator. Copies all letters that exist + adds new
        setLetters(updatedLetters);
    };  //this is the callback and resets the state. Pass it down as a prop in Return in letterform

    return (
        <>
            <h2>This is the letter console</h2>
            <LetterBox letters={letters}/>
            <h2>Add a Letter:</h2>
            <LetterForm onLetterSubmit={(letter) => addLetter(letter)}/>
        </>
    );
};

export default LetterConsole;