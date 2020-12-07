const Letter = ({author, children}) => {
    return (
        <li>
            <p>{author}</p>
            <p>{children}</p>
        </li>
    );
};

export default Letter;