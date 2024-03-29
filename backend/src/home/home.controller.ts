import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
    constructor(private homeService: HomeService){}

    @Get()
    welcome(){
        return this.homeService.welcome();
    }
}
