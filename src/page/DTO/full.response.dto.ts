import { SimpleResponseDto } from './simple.response.dto';

export class FullResponseDto extends SimpleResponseDto {
  parent: {
    id: number;
    title: string;
  };
}
