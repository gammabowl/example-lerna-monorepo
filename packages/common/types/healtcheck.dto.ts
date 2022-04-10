import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class HealthcheckDTO {
  @IsString()
  @ApiProperty({
    example: 'Success',
    description: 'Healthcheck API response successfully',
  })
  name: string;

  @IsString()
  @ApiProperty({
    example: 'yay 200 !',
    description: 'Healthcheck API response message successfully',
  })
  message: string;
}
