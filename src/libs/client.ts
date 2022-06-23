import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "kaito071831",
  apiKey: process.env.API_KEY as string
});
