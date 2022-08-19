import React from 'react';
import style from './Title.module.css'

type Props = {
	children: React.ReactNode; // 👈️ type children
};

const Title = (props: Props) => {
	return (
		<div className={style.size}>
			{props.children}
		</div>)
};

export default Title