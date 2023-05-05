const GiphyDisplay = ({giphy}) => {
    const loaded = () => {
        return (
            <div>
                <img src={giphy.data[0].images.original.url} />
            </div>
        )
    }

    const loading = () => {
        return <h1>No Gif Here Sorry</h1>
    }

    return giphy ? loaded() : loading()
};

export default GiphyDisplay;