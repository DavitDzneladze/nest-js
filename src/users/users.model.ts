import { Model, Table, Column, DataType } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";

interface UserCreationAttributes {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttributes> {
  @ApiProperty({ example: "1", description: "unique identifier" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "email@gmail.com", description: "user email" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: "12345", description: "password" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: false, description: "user status" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({
    example: "vailation the rules",
    description: "banning reason",
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;
}
