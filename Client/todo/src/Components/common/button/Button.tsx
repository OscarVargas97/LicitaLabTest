import React from 'react';
type Props = {
	children: React.ReactNode; // 👈️ type children
};
const Button = (props: Props) => {
	return (
		<div>
			<button>{props.children}</button>
		</div>)
};

export default Button