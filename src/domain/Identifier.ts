import { ulid } from "ulid";

export class Identifier {

  readonly value: string;

  constructor(value?: string) {
    if (!value) value = ulid();
    this.value = value;
  }
}