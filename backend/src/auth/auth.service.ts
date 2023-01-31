import { ForbiddenException, Injectable, Post, Req } from '@nestjs/common';
// import { Request } from 'express';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
// import { User } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    @Post()
    async signup(dto: AuthDto)
    {
        try {
            // generate the password hash
            const hash = await argon.hash(dto.password) ;
            // save the new user in the db
            const user = await this.prisma.user.create({
            data: {
                email: dto.email, 
                hash: hash,
                firstName: dto.firstName,
                lastName: dto.lastName,
                }
            });

            delete user.hash;
            return user;

        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError)
            {
                if(error.code === 'P2002')
                {
                    throw new ForbiddenException('User Credentials Exist!!')
                }
            }
            throw error; //if the error is not from prisma then throw that error
        }
    }

    @Post()
    async signin(dto: AuthDto)
    {
        //find the user by id
        const user = await this.prisma.user.findUnique({
            where:{
                email: dto.email,
            },
        });
        //throw an error if the user credentials do not match
        if(!user)
        {
            throw new ForbiddenException('User Not Found Try Signing up!')
        }
        //compare the passwords
        const matchPwd = await argon.verify(user.hash, dto.password)
        //if passwords are incorrect throw exception
        if(!matchPwd)
        {
            throw new ForbiddenException('Incorrect credentials')
        }

        delete user.hash;
        return user
    }
}
