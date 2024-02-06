import { UserEntity } from "@domain/UserEntity";

export interface UserRepository {
  save(user: UserEntity): Promise<void>;
  findUserById(userId: string): Promise<UserEntity>;
  findUserByEmail(email: string): Promise<UserEntity>;
}