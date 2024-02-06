import { Entity } from "./Entity";
import { Email } from "@domain/Email";
import { Password } from "@domain/Password";
import { Identifier } from "@domain/Identifier";

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

  get email () {
    return this.props.email;
  }
}