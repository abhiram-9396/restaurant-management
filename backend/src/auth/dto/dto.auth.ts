import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class AuthDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsOptional()
    firstName: string;

    @IsNotEmpty()
    @IsOptional()
    lastName: string;
}

//here we are just defining the shape if the dto i.e instead of 
//using "any" keyword we can specify the Authdto as the desired shape.