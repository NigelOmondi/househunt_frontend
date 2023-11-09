import React from 'react';
import videodemo from "../src/images/videodemo.mp4"

const Video = () => {
    return (
        <section id="video">
            <h2>Project Demo of a house visit</h2>
            <video controls>
                <source src={videodemo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
}

export default Video;