import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { FindManyOptions, Repository } from 'typeorm';

export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepo: Repository<Restaurant>,
  ) {}

  async findAll(options: FindManyOptions<Restaurant>): Promise<Restaurant[]> {
    return this.restaurantRepo.find(options);
  }

  async findOne(id: number): Promise<Restaurant> {
    return this.restaurantRepo.findOne({ where: { id } });
  }
}
