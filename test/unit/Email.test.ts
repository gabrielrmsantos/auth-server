import { Email } from "../../src/domain/Email";

describe("Email", () => {

  test.each([
    "emailuser@custom.com.br",
    "emailuser@custom.com",
    "emailuser@hotmail.fr",
    "emailuser@mail.ru",
    "emailuser@hotmail.co.uk",
  ])("should be able to create a valid email", (value: string) => {
    const email = new Email(value);
    expect(email.value).toBe(value);
  })
  

  it.each([
    "",
    "emailuser",
    "emailuser@",
    "emailuser@outlook",
    "emailuser@outlook.",
    "emailuser@outlook.com."
  ])("should not create an invalid email", (value: string) => {
    expect(() => new Email(value)).toThrow(new Error("Invalid email"));
  });
});