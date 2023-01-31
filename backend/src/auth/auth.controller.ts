import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    // @Post('signup')
    // signup(@Req() req: Request){
    //     console.log(req.body);
    //     return this.authService.signup();
    // } //we can use this but instead if we switch to fastify instead of express or anything then the express won't work so its better to use the nestjs @Body() decorator.
    
    @Post('signup')
    signup(@Body() dto: AuthDto)
    {
        // console.log({
        //    dto,
        // });
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin(@Body() dto: AuthDto){
        return this.authService.signin(dto);
    }
}
