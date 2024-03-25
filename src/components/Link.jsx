export default function Link({ text, connect }) {
    return (
        <a href={connect}>
            <p>{text}</p>
        </a>
    )
}