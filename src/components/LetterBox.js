import Letter from './Letter';
import LetterForm from './LetterForm';

const LetterBox = ({letters}) => {

    const letterList = letters.map( letter => {
        return (
            <Letter author={letter.author} key={letter.id}> {letter.message} </Letter>
        )
    });

    return (
        <>
        <h2>This is the letterbox component</h2>
        <ul>
            {letterList}

            {/* <Letter author="Chris">Hello Santa</Letter>  */}
            {/* anything between the tags is called children. Available to all components */}
        </ul>
        <h2>Add a Letter:</h2>
        <LetterForm></LetterForm>
        </>
    );
};

export default LetterBox;