

export default function HalfView({text, bText}) {

    return (
        <div className="half-view">
            <p>{text}</p>
            <button>{bText}</button>
        </div>
    );
}