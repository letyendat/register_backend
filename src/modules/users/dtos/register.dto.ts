import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
export default class RegisterDto {
  constructor(
    
    name: string,
   
    email: string,
    password: string,
   
  ) {

    
    this.name = name;
    this.email = email;
    this.password = password;
  }

  @IsNotEmpty()
  @MinLength(2)
  public name: string;
  @IsNotEmpty()
  @IsEmail()
  public email: string;
  @IsNotEmpty()
  @MinLength(6)
  public password: string;
}
