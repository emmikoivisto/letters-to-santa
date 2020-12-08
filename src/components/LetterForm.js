const LetterForm = () => {
    return (
        <form>
            <input 
                type="text"
                placeholder="Your Name"
            />
            <input
                type="text"
                placeholder="Say something.."
            />
            <input
                type="submit"
                value="Post"
            />
        </form>
    );
};

export default LetterForm;