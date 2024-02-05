import { Password } from "../../src/domain/Password";

describe("Password", () => {

  it("should be able to receive and encrypt a password", () => {
    const password = new Password("testpass");
    expect(password.value).toBeDefined();
  });

  it("should not be able to receive a password with less than 6 characters", () => {
    const password = "test";
    expect(() => new Password(password)).toThrow(new Error("Password must have more than 6 characters"));
  });

  it("should return true if the passwords are equal", () => {
    const password = new Password("testpass");
    expect(password.compare("testpass")).toBeTruthy();
  });

  it("should return false if the passwords are different", () => {
    const password = new Password("testpass");
    expect(password.compare("anotherpass")).toBeFalsy();
  });
});