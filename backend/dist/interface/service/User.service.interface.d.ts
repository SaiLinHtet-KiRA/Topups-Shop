import User, { PersonalInfo } from "../types/User";
export default interface UserServiceInterface {
    createUser(data: Pick<User, "email" | "firstName" | "lastName">): Promise<User>;
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    getUserInfoById(id: string): Promise<PersonalInfo>;
    getUserByEmail(email: string): Promise<User>;
    deleteUser(id: number): Promise<User>;
    updateUserInfo(id: string, data: PersonalInfo): Promise<User>;
    addTopup(id: string, order_id: string): Promise<User>;
    addRecharge(id: string, order_id: number): Promise<User>;
}
