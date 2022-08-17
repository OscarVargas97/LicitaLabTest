import { Table, Model, DataType, Column } from "sequelize-typescript"

@Table({
	timestamps: false,
	tableName: 'task'
})

export class Task extends Model {
	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	name!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	description!: string

}

