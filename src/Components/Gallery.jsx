const Gallery = (props) => {
    return (
        <div>
            <h2>Welcome To Gallery</h2>
            {/* Use a relative path for the image */}
            <img src="SECE.jpg" alt="SECE logo" />
            <h3></h3>

            <h2>The image is {props.image}</h2>
        </div>
    );
}

export default Gallery;
