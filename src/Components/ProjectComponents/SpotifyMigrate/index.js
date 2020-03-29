import React from 'react';

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
            <p>
                Similar to 'Artwave' below, Spotify Migrate was an idea I had a couple years ago, borne out of a desire to divest digitally from facebook.
                When I made my Spotify account in 2012, I signed up for the service using my facebook account. Since then, my desire to exorcise facebook
                from my life (for a variety of reasons) has increased dramatically - however, in the same span of time, my Spotify account had become one
                of my most cherished digital possessions. In the absence (at that time) of a native method by which one could migrate their Spotify data to
                a new account, I began thinking about how I could build a tool to do just that.
            </p>
            <p>
                I believe that now Spotify affords a way to accomplish this goal, but, given Spotify has a pretty robust API, I still wanted to give building
                my own version of such an application a shot. I figured it'd be good practice and a good portfolio project. With no access to a user's comprehensive,
                historic listening data, anything I might build would never truly be able to match the convenience of a native Spotify solution to account data
                migration, but I still wanted to try building the closest approximation.
            </p>

            <h6 style={{ "color": props.themeHex }}>The Flow</h6>
            <p>
                <ol>
                    <li>User authorizes existing user account so Spotify Migrate can access their account information</li>
                    <li>Using the access token retrieved from the authorization flow, the Spotify Migrate server queries the user account for all relevant data</li>
                    <li>After retrieval, data is structured appropriately and sent back to the client and displayed visually</li>
                    <li>After user reviews the data, they authorize the account they'd like to migrate the data to</li>
                    <li>User confirms migration and the data from the first account is sent back to the server to be parsed and POST/PUT to the new account</li>
                </ol>
            </p>

            <h6 style={{ "color": props.themeHex }}>Challenges</h6>
            <p>
                I use 'challenges' somewhat loosely here - while there were certainly challenges, this project came together fairly rapidly, which made me feel
                pretty good as a developer considering I was building a fairly complex backened based on an API I'd never built a custom integration with.
            </p>
            <p>
                The Spotify API puts some limits on the number of results that are returned per GET request as well as the number of new Spotify resources that can
                be added via PUT requests. So, assuming a Spotify user could have a fairly robust amount of saved data, I had to design functions that could recursively build
                the correct queries until the base case was met. You can inspect those functions in the 'server.js' file in the backend repo (link above, next to the title).
            </p>
            <p>
                Perhaps the trickiest part of the project though was designing the migration logic for a user's playlists. In accordance with the constraints of the API, while GETting
                the info about an existing playlist is fairly straightforward, requiring only a single query, building a <em>new</em> playlist in the new user account requires 3 distinct steps:
                <ol>
                    <li>First, a new playlist must be created using a POST request</li>
                    <li>Then, a recursive GET function to retrieve the tracklist of the original playlist</li>
                    <li>THEN, a recursive PUT function to traverse through the tracklist array from the previous step, PUTting the tracks into the newly created and empty playlist</li>
                </ol>
                Each of these steps is happening asynchronously inside the previous step and requires extensive error handling. Additionally, it becomes a long process and I ran into HTTP request
                timeout issues that would restart the parent function before all playlists had been migrated, resulting in an infinite loop creating duplicate loops -
                {/* Update this after you fix this bug */}
                truth be told, I'm still working that bug out. I've looked into websockets to see if that may be the solution to the problem.
            </p>

            <h6 style={{ "color": props.themeHex }}>Lessons Learned</h6>
            <p>
                async await, closure/lexical scope, auth flow, redux, functional design in react
            </p>


        </div>
    )
}
