import { useRef } from "react";

const Audio = ({ src }) => {
    if (!src) {
        null;
    }
    return (
        <audio controls key={src}>
            <source src={src} type="audio/ogg" />
            Your browser does not support the audio element.
        </audio>
    )
}

export default Audio;