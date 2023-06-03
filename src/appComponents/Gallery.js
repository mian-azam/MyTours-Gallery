

function Gallery(props) {
    return (
        <div className="gallery container">
            {props.images.map(image => (
                <div key={image.id}>
                    <img src={image.url}> 
                    </img>
                </div>
            ))}
        </div>
    )
}

export default Gallery