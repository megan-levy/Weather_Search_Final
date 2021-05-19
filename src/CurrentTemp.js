import react from "react";

export default function getTemp (props) {
    return (
        <div className= "temperture">
            {Math.round(props.temp)}
        </div>
    );
}