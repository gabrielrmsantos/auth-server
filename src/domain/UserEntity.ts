import { Email } from "./Email";
import { Entity } from "./Entity";
import { Identifier } from "./Identifier";
import { Password } from "./Password";

export type UserProps = {
  username: string;
  password: Password;
  email: Email;
}

export class UserEntity extends Entity<UserProps> {

  static create(props: UserProps) {
    return new UserEntity(props);
  }

  static hydrate(props: UserProps, id: Identifier) {
    return new UserEntity(props, id);
  }
}