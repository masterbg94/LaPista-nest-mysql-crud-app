import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HeelService } from './heel.service';
import { HeelDto } from './heelDto';
import { SizeDto } from '../size/sizeDto';

@Controller('heel')
export class HeelController {
  constructor(private heelService: HeelService) {}

  @Get()
  async getAll() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.heelService.getAllHells(),
    };
  }

  @Get(':id')
  async getHeelWithId(@Param() params) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.heelService.getHeelForId(params.id),
    };
  }

  @Get('/decrement/:id')
  async decrementSizeCount(
    @Param('id') id: number,
    @Body() data: Partial<HeelDto>,
  ) {
    const heel = await this.heelService.getHeelForId(id);
    data.heelCount = heel.heelCount - 1;
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Heel decremented successfully',
      data: await this.heelService.update(id, data),
    };
  }

  @Post()
  async createHeel(@Body() data: HeelDto) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Heel succesfull added',
      data: await this.heelService.create(data),
    };
  }

  @Delete(':id')
  async deleteHeel(@Param() params) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Heel Successfully deleted',
      data: await this.heelService.delete(params.id),
    };
  }

  @Put(':id')
  async updateHeel(@Param('id') id: number, @Body() data: Partial<HeelDto>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Heel update successfully',
      data: await this.heelService.update(id, data),
    };
  }
}
