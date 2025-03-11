import { describe, expect, test } from "vitest";
import { app } from "../app";
import request from "supertest";
describe("", () => {
  test("app", async () => {
    // Ensure welcome get is active
    const get = await request(app).get("/");
    expect(get.body).toEqual({ message: "Welcome to game" });
  });
});
