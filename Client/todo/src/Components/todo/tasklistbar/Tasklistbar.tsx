import React from 'react';
import Currentdate from '../currentdate/Currentdate';
import Title from '../titulo/Title';
import Filter from '../../common/filter/Filter';
import Button from '../../common/button/Button'
import style from './Tasklistbar.module.css'
const TaskListBar = () => {
	return (
		<ul className={style.container}>
			<li className={style.item}>
				<Title>Cosas por Hacer</Title>
				<Currentdate />
			</li>
			<li className={style.item}>
				<Button>Liberar Seleccionadas</Button>
				<Filter />
			</li>
		</ul>
	)
};

export default TaskListBar