import { EntityRepository, Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderDto } from './order.dto';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
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
