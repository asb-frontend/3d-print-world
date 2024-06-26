import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("667375240009c7efa89e");

export const account = new Account(client);
export { ID } from "appwrite";
