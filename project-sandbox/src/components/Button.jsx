import React from "react";

export default function Button({ btnClass, text, icon, onClick }) {
	return (
		<button className={`btn ${btnClass}`} onClick={onClick}>
			{icon}
			{!text ? "Button" : text}
		</button>
	);
}
