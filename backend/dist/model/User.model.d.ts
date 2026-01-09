import mongoose from "mongoose";
export interface UserDocument extends mongoose.Document {
    id: string;
    banned: boolean;
    balance: number;
}
declare const UserModel: mongoose.Model<UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, UserDocument, {}, mongoose.DefaultSchemaOptions> & UserDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, UserDocument>;
export default UserModel;
