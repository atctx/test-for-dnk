import { IsNotEmpty, Max, Min } from 'class-validator';

export class getPagesRequestDto {
  @Max(3)
  @Min(1)
  @IsNotEmpty()
  type: number;
}
