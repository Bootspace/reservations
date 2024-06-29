import { Type } from 'class-transformer';
import * as cardDto from './card.dto';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
} from 'class-validator';

export class CreateChargeDto {
  @Type(() => cardDto.CardDTO)
  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  card: cardDto.CardDTO;

  @IsNumber()
  amount: number;
}
