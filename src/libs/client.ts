import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "kaito071831",
  apiKey: process.env.NEXT_PUBLIC_API_KEY as string
});
