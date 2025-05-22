import { expect, it } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value", (done) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (error, token) => {
    try {
      expect(token).toBeDefined();
      done(); // 提醒 test runner 這裡的函式是非同步的，要等待 callback function
    } catch (error) {
      done(error); // 告訴 test runner，callback function 拋出錯誤
    }
  });
});

it("should generate a token value", async () => {
  const testUserEmail = "test@test.com";

  const token = await generateTokenPromise(testUserEmail);

  expect(token).toBeDefined();
});

it("should generate a token value", () => {
  const testUserEmail = "test@test.com";

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});
