import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderDto } from './order.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderRepository extends Repository<Order> {
  constructor(private dataSource: DataSource) {
    super(Order, dataSource.createEntityManager());
  }

  createOrder(permissionDto: OrderDto): Promise<Order> {
    const role = this.create();

    const { action, description } = permissionDto;

    role.action = action;
    role.description = description;

    try {
      return this.save(role);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
