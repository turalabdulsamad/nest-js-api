import { CONFIGURABLE_MODULE_ID } from '@nestjs/common/module-utils/constants';
import { Table, Model, DataType, Column } from 'sequelize-typescript';

@Table({
    underscored: true
})
export class User extends Model<User>{
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email:string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @Column({
        type: DataType.ENUM,
        values: ['male','female'],
        allowNull:false,
    })
    gender: string
}