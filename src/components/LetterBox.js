import Letter from './Letter';

const LetterBox = ({letters}) => {

    const letterList = letters.map( letter => {
        return (
            <Letter author={letter.author}>{letter.message}</Letter>
        )
    });

    return (
        <Letter>
        <h2>This is the letterbox component</h2>
        <ul>
            {letterList}

            {/* <Letter author="Chris">Hello Santa</Letter>  */}
            {/* anything between the tags is called children. Available to all components */}
        </ul>
        </Letter>
    );
};

export default LetterBox;