import supertest from "supertest";

import { app } from "../../main";

const request = new Proxy(supertest(app), {
  get: (target, name) => (args) => target[name](args).set("X-Test-Mode", "true")
});

export { request };
