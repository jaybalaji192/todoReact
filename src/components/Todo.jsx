import React, { useState } from "react";


function Todo(props) {
    const [clicked, setState] = useState(false);

    return <li onClick={() => {
        props.onChecked(props.id);
    }}
    >
        {props.item}
    </li>
}

export default Todo;