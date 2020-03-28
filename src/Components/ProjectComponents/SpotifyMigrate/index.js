import React from 'react'

export default function spotify_migrate(props) {

    const youtubeId = "IuAUrZLW2gI";

    const videoDivStyle = {
        position: "relative",
        marginBottom: "1.5rem",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
        backgroundColor: "darkgreen",
        borderRadius: "15px"
    };

    const iframeStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "15px",
        border: "1px solid darkgreen",
    }

    return (
        <div>

            {/* Credit to Kevin Simper for this chunk of code */}
            {/* https://medium.com/@kevinsimper/full-width-youtube-embed-with-react-js-responsive-embed-509de7e7c3bf */}
            <div className="video" style={videoDivStyle}>
                <iframe
                    title="Spotify Migrate Video Demo"
                    style={iframeStyle}
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    frameBorder="0"
                    allow="accelerometer; picture-in-picture; gyroscope"
                    allowfullscreen
                />
            </div>

            <h6 style={{ "color": props.themeHex }}>Background</h6>

        </div>
    )
}
