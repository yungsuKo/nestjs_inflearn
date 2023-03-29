import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductSaleslocation {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  address: string;

  @Column()
  addressDetail: string;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column()
  meetingTime: Date;
}
