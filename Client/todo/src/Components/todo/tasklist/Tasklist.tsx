import React from 'react';
import Addtask from '../task/Addtask';
import Task from '../task/Task';
import style from './Tasklist.module.css'

const Tasklist = () => {
	return (
		<div className={style.tasklist}>
			<ul>
				<Task />
				<Addtask />
			</ul>


		</div>)
};

export default Tasklist