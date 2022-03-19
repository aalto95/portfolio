import React from "react";

const Technologies = (props) => {
    return (
        <li className="flex justify-center m-1 list-none p-2 bg-gray-800 rounded-xl">
            {props.name}
        </li>
    )
}

export default Technologies