import React from 'react';
import style from './Task.module.css'
const Addtask = () => {
	return (
		<li>
			<div className={style.body}>
				<div className={style.container}>
					<i className="fa fa-plus" aria-hidden="true"></i>
				</div>
			</div>
		</li>

	)
};

export default Addtask