import { Body, Controller, Post } from '@nestjs/common';
import { PageService } from './page.service';
import { getPagesRequestDto } from './DTO/get-pages.request.dto';

@Controller('pages')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Post()
  getPages(@Body() getPagesRequestDto: getPagesRequestDto) {
    console.log(getPagesRequestDto);
    return this.pageService.getPages();
  }
}
