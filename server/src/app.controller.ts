import { UseGuards } from '@nestjs/common';
import { Controller, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':user')
  @UseGuards(AuthGuard('api-key'))
  getUserRepos(@Param() params): string {
    return this.appService.getUserRepos(params);
  }
  @Get(':user/:repo')
  @UseGuards(AuthGuard('api-key'))
  getRepo(@Param() params): string {
    return this.appService.getRepo(params);
  }
  @Get(':user/:repo/:search')
  @UseGuards(AuthGuard('api-key'))
  getRepoData(@Param() params) {
    return this.appService.getRepoData(params);
  }
}
