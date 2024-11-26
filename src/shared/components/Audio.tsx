const Audio = ({ src }: { src: string }) => {
    if (!src) {
        return null;
    }
    return (
        <audio controls key={src}>
            <source src={src} type="audio/ogg" />
            Your browser does not support the audio element.
        </audio>
    )
}

export default Audio;