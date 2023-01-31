import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {

    @Get()
    welcome(): {}{
        return {
            message:'welcome to home screen!!'
        }
    }
}
