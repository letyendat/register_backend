import UserSchema from "./users.model";
import RegisterDto from "./dtos/register.dto";
import { isEmptyObject } from "@core/utils";
import { HttpException } from "@core/exception";
import bcryptjs from "bcryptjs";
import IUser from "./users.interface";

class UserService {
  public userSchema = UserSchema;

  public async createUser(model: RegisterDto): Promise<IUser> {
    if (isEmptyObject(model) === true) {
      throw new HttpException(400, "Model is empty");
    }

    const user = await this.userSchema
      .findOne({ email: model.email })
      .exec();
    if (user) {
      throw new HttpException(
        409,
        `Your email ${model.email} already exist`
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(model.password!, salt);
    
    const createdUser: IUser = await this.userSchema.create({
      ...model,
      password: hashedPassword,
      create_at: Date.now(),
    });
    
    return createdUser;
  }
}

export default UserService;
