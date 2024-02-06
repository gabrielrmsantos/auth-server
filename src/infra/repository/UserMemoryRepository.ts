import { UserRepository } from "@application/repository/UserRepository";
import { UserEntity } from "@domain/UserEntity";

export class UserMemoryRepository implements UserRepository {

  private items: UserEntity[] = [];

  async save(user: UserEntity): Promise<void> {
    this.items.push(user);
  }

  async findUserById(userId: string): Promise<UserEntity> {
    const user = this.items.find(item => item.id.value === userId);
    if (!user) throw new Error("User not found");
    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = this.items.find(item => item.email.value === email);
    if (!user) throw new Error("User not found");
    return user;
  }
}