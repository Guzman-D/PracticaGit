import { Injectable } from '@nestjs/common';
import { CreateCurrentDto } from './dto/create-current.dto';
import { UpdateCurrentDto } from './dto/update-current.dto';

@Injectable()
export class CurrentService {
  create(createCurrentDto: CreateCurrentDto) {
    return 'This action adds a new current';
  }

  findAll() {
    return `This action returns all current`;
  }

  findOne(id: number) {
    return `This action returns a #${id} current`;
  }

  update(id: number, updateCurrentDto: UpdateCurrentDto) {
    return `This action updates a #${id} current`;
  }

  remove(id: number) {
    return `This action removes a #${id} current`;
  }
}
