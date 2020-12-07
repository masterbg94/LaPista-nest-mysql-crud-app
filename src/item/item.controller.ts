import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto } from './itemDto';

@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  async showAll() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.itemService.getAllItems(),
    };
  }

  @Post()
  async create(@Body() data: ItemDto) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Item added successfully',
      data: await this.itemService.create(data),
    };
  }
}