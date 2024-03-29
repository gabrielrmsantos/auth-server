export class Email {

  readonly value: string;

  constructor(value: string) {
    if (!this.validate(value)) throw new Error("Invalid email");
    this.value = value;
  }

  validate(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}