import createApp from "@/app";
import request from "supertest";

const app = createApp();

describe("app starts", () => {
  describe("GET /", () => {
    it("should return a 200 a default message", async () => {
      const { body, status } = await request(app).get("/");
      expect(status).toBe(200);
      expect(body).toEqual({
        message: "API Express + Jest + Supertest + TS 💛",
      });
    });
  });
});
