import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('page')
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'parent_id', nullable: true })
  parentId: number;

  @Column()
  title: string;
}
