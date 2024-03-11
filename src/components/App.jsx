import React from "react";
import Todo from "./Todo";
import InputBox from "./InputBox";

function App() {
	let [items, addItem] = React.useState([]);

	function appendList(item) {
		addItem((preValue) => {
			return [...preValue, item];
		});

	}

	function deletion(index) {
		console.log("deleted", index);
		addItem((preValue) => {
			return preValue.filter((item, i) => { return i !== index })

		})
	}

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<InputBox onChecked={appendList} />
			<div>
				<ul>
					{items.map((item, index) => {
						return <Todo key={index} id={index} item={item} onChecked={deletion} />;
					})}
				</ul>
			</div>
		</div>
	);
}
export default App;