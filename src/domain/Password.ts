import { pbkdf2Sync } from "crypto";

export class Password {

  readonly value: string;
  private iterations: number = 10;
  private keylen: number = 32;
  private salt: string = "57491f6deb63b88ea33c759090d11d90c96ba16ff0d9b98ec664f9088833049c97329ae7d750f96d7cc7d74b60a7e4ae4990fb0cee3c79cd0db04a805621776e";

  constructor (value: string) {
    if (value.length < 6) throw new Error("Password must have more than 6 characters");
    this.value = this.encrypt(value);
  }

  encrypt(password: string): string {
    const key = pbkdf2Sync(password, this.salt, this.iterations, this.keylen, "sha512");
    return key.toString("hex");
  }

  compare(password: string): boolean {
    const encryptedPassword = this.encrypt(password);
    return encryptedPassword === this.value;
  }
}