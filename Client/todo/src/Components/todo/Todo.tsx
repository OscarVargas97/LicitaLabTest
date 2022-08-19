import React from 'react';
import Tasklist from './tasklist/Tasklist';
import TopSide from '../common/topside/Topside';
import BottomSide from '../common/bottomside/Bottomside';
import { getAllTasks } from './todoAPI';
import style from './Todo.module.css'
import TaskListBar from './tasklistbar/Tasklistbar';

const request = getAllTasks('http://localhost')

const Todo = () => {
	return (

		<div className={style.layout}>
			<TopSide>
				<TaskListBar />
			</TopSide>
			<BottomSide>
				<Tasklist />
			</BottomSide>
		</div >
	)
};

export default Todo