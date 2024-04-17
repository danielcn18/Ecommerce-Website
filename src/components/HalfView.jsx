

export default function HalfView({text, bText}) {

    return (
        <div className="card">
            <p>{text}</p>
            <button>{bText}</button>
        </div>
    );
}