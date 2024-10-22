import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Page } from './page.entity';

export abstract class AbstractPageService {
  constructor(
    @InjectRepository(Page) protected readonly pageRepository: Repository<Page>,
  ) {}

  abstract getPages(type: number): Promise<Page[]>;
}
