const GiphyDisplay = ({giphy}) => {
    const loaded = () => {
        return (
            <div>
                Gif here
                <img src={gif} />
            </div>
        )
    }

    const loading = () => {
        return <h1>No Gif Here Sorry</h1>
    }

    return giphy ? loaded() : loading()
};

export default GiphyDisplay;