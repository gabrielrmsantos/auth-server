import { UserRepository } from "@application/repository/UserRepository";
import { UserEntity } from "@domain/UserEntity";
import { Email } from "@domain/Email";
import { Password } from "@domain/Password";

export class CreateUser {

  constructor (
    readonly userRepository: UserRepository,
  ) { }

  async execute ({ username, email, password }: Input): Promise<Output> {
    const user = UserEntity.create({
      username,
      email: new Email(email),
      password: new Password(password)
    });
    await this.userRepository.save(user);
    return {
      id: user.id.value
    }
  }
}

type Input = {
  username: string;
  email: string;
  password: string;
}

type Output = {
  id: string;
}