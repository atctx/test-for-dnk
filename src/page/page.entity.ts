import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('page')
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'id', foreignKeyConstraintName: 'parent_id_fk' })
  @ManyToOne(() => Page, (page) => page.id)
  @Column({ name: 'parent_id', nullable: true })
  parentId: number;

  @Column()
  title: string;
}
