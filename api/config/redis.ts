import redis from "redis";
import { promisify } from "util";

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASS
});

export default {
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client)
};
