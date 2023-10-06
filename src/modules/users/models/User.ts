import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;
  
    @Column({ name: 'name', type: 'varchar', nullable: false })
    name: string;
  
    @Column({
      name: 'email',
      type: 'varchar',
      length: 124,
      nullable: false,
      unique: true,
    })
    email: string;
  
    @Column({
      name: 'password',
      type: 'varchar',
      nullable: false,
    })
    password: string;
  
    @Column({
      name: 'document',
      type: 'varchar',
      nullable: false,
    })
    document: string;
  
    @Column({ name: 'phone', type: 'varchar', nullable: false })
    phone: string;
  
    @Column({ name: 'born_date', type: 'date', nullable: false })
    bornDate: Date;
  
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
  
    @Column({
      name: 'active',
      type: 'boolean',
      nullable: false,
      default: true,
    })
    active: boolean;
  }
  