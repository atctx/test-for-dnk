import { Injectable } from '@nestjs/common';
import { AbstractPageService } from './abstract-page.service';
import { Page } from './page.entity';

@Injectable()
export class PageService extends AbstractPageService {
  getPages(): Promise<Page[]> {
    return this.pageRepository.find();
  }
}
