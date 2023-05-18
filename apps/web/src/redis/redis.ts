import { createClient } from "redis";
import { createAdapter } from "@socket.io/redis-adapter";

import { clients } from "../constants";

/*
  Redis adapter helps transmitting events across servers on different node instances
  Refer to https://socket.io/docs/v4/redis-adapter/ for further details.
  */
class Redis {
  public pubClient;
  private subClient;

  constructor() {
    this.pubClient = createClient({
      url: `${clients.sessionStore.protocol}://${clients.sessionStore.host}:${clients.sessionStore.port}`
    });
    this.subClient = this.pubClient.duplicate();
  }

  initializeRedis = (io: any) => {
    Promise.all([this.pubClient.connect(), this.subClient.connect()])
      .then(() => {
        io.adapter(createAdapter(this.pubClient, this.subClient));
      })
      .catch((error) => {
        console.log("Redis connection failure:", error);
      });
  };

  setRedisData = (redisKey: string, value) => {
    this.pubClient.set(redisKey, value);
  };

  getRedisData = async (redisKey: string) => {
    return await this.pubClient.get(redisKey);
  };
}

const redis = new Redis();

export default redis;
export { redis };
