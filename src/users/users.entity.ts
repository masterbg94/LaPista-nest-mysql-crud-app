// import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
// import * as crypto from 'crypto';
//
// //pass the name of table inside @Entity() i.e "users", if you don't pass table name it will create "users_entity" table by default
// @Entity('users')
// export class UsersEntity {
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @Column()
//   name: string;
//
//   @Column()
//   email: string;
//
//   @BeforeInsert()
//   hashPassword() {
//     this.password = crypto.createHmac('sha256', this.password).digest('hex');
//   }
//   @Column()
//   password: string;
// }

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Photo } from '../photos/photo.entity';
import { CompanyEntity } from '../company/company.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Photo, (photo) => photo.user)
  photosos: Photo[];

  @ManyToOne(() => CompanyEntity, (company) => company.users)
  company: CompanyEntity;
}
