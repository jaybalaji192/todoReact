import React from "react"

function InputBox(props) {

    const [item, setItem] = React.useState("");

    function handleChange(e) {
        setItem(e.target.value);
    }


    return <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button onClick={() => { props.onChecked(item),setItem("") }}>
            <span>Add</span>
        </button>
    </div>
}

export default InputBox;
// export {item};