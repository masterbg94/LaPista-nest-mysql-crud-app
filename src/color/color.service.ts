import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColorEntity } from './color.entity';
import { ColorDto } from './colorDto';

@Injectable()
export class ColorService {
  constructor(
    @InjectRepository(ColorEntity)
    private colorRepository: Repository<ColorEntity>,
  ) {}

  async getAllColors() {
    return await this.colorRepository.find({ relations: ['sizes'] });
  }

  async create(data: ColorDto) {
    const color = this.colorRepository.create(data);
    await this.colorRepository.save(data);
    return color;
  }

  async delete(id: string) {
    return await this.colorRepository.delete(id);
  }
}
