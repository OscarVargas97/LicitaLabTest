import React from 'react';
import style from './Currentdate.module.css'

const Currentdate = () => {
	const date = new Date();
	const currentdate = [date.getDate(), date.getMonth(), date.getFullYear()].join('/')

	return (
		<div>
			<span className={style.size} >Hoy: {currentdate}</span>
		</div >)
};

export default Currentdate