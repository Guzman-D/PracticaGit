import { PartialType } from '@nestjs/mapped-types';
import { CreateCurrentDto } from './create-current.dto';

export class UpdateCurrentDto extends PartialType(CreateCurrentDto) {}
