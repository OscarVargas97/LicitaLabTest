import React, { useState } from 'react';
import Datepicker from '../datepicker/Datepicker';
import style from './Task.module.css'

const Task = () => {
	return (
		<li>
			<div className={style.body}>
				<div className={style.container}>
					<div className={style.items}>
						<input type="checkbox" />
						<span>comida para perros</span>
					</div>
					<div className={style.items}>
						<Datepicker />
						<i>status</i>
					</div>
				</div>
			</div >
		</li>
	);
}
export default Task