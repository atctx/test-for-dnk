import { Repository } from 'typeorm';
import { Page } from './page.entity';

export abstract class PageAbstractService {
  constructor(protected readonly pageRepository: Repository<Page>) {}
}
