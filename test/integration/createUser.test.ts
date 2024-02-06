import { faker } from "@faker-js/faker";
import { CreateUser } from "@application/usecase/createUser";
import { UserMemoryRepository } from "@infra/repository/UserMemoryRepository";

describe("UseCases - CreateUser", () => {

  it("should be able to create an user", async () => {
    const password = "senhateste";
    const input = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password
    }
    const userRepository = new UserMemoryRepository();
    const createUser = new CreateUser(userRepository);
    const user = await createUser.execute(input);
    expect(user.id).toBeDefined();
  });
});