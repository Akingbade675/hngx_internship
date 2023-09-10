import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api')
  getApi(
    @Query('slack_name') slackName: string,
    @Query('track') track: string,
  ) {
    return this.appService.getApi(slackName, track);
  }
}
