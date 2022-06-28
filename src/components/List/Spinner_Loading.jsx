import "./spinner.css";

const theStyle = {
    fill: "transparent",
    stroke: "#0d6efd", strokeWidth: "7px",
    strokeLinecap: "round",
    filter: "url(#shadow)"
}

export default function SpinnerLoading() {
    return (
        <div className="backSpinner">
            <div className="spinnerContainer">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <filter id="shadow">
                            <feDropShadow dx="0" dy="0" stdDeviation="1.5"
                                flood-color="#0d6efd" />
                        </filter>
                    </defs>
                    <circle id="spinner" style={theStyle} cx="50" cy="50" r="45" />
                </svg>
            </div>
        </div>
    );
}