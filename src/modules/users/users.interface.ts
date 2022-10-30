const { ObjectId } = require("mongoose").Types;
export default interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    create_at: Date;
    update_at: Date;
}