export const CustomListItem = (props) => {
    const {word, savedWs, setSavedWs} = props;

    return (
        <li key={Math.random()}>
            {word}
            <button className="btn btn-outline-success" onClick={() => {
                setSavedWs((savedWs) => {
                    const tmpList = savedWs.concat();
                    tmpList.push(word)
                    return tmpList
                })
            }}>(save)</button>
        </li>
    )

}