import { randomUUID } from "crypto";

export class Identifier {

  readonly value: string;

  constructor(value?: string) {
    if (!value) value = randomUUID();
    this.value = value;
  }
}