import { Client, Account, Query, Databases } from "appwrite";
import { ShopperLoginStates } from "../../constants/enums/enums";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("667375240009c7efa89e");

const databases = new Databases(client);

export const account = new Account(client);
export { ID } from "appwrite";

export async function logout(dispatch) {
  try {
    await account.deleteSession("current");
    dispatch({
      type: "SET_SHOPPER_STATE",
      payload: ShopperLoginStates.LOGGED_OUT,
    });
    dispatch({ type: "SET_LOGGED_IN_USER", payload: null });
  } catch (error) {
    console.error("Error logging out", error);
  }
}
export async function create(userId, email, password, name, phone, dispatch) {
  try {
    await account.create(userId, email, password, name);
    await account.createEmailPasswordSession(email, password);
    const user = await account.get();
    dispatch({
      type: "SET_SHOPPER_STATE",
      payload: ShopperLoginStates.LOGGED_IN,
    });
    dispatch({ type: "SET_LOGGED_IN_USER", payload: user });
    dispatch({ type: "SET_LOGGED_IN_NAME", payload: user.name });
    const result = await account.updatePhone(
      phone, // phone
      password // password
    );
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

export async function login(email, password, dispatch) {
  if (account) {
    await logout(dispatch);
  }
  try {
    await account.createEmailPasswordSession(email, password);
    const user = await account.get();
    dispatch({
      type: "SET_SHOPPER_STATE",
      payload: ShopperLoginStates.LOGGED_IN,
    });
    dispatch({ type: "SET_LOGGED_IN_USER", payload: user });
    dispatch({ type: "SET_LOGGED_IN_NAME", payload: user.name });
  } catch (error) {
    console.error("Error logging in", error);
  }
}

export function OAuth2Fb(e) {
  try {
    account.createOAuth2Session(
      "facebook", // provider
      "http://localhost:3000/home", // redirect here on success
      "http://localhost:3000/login", // redirect here on failure
      [] // scopes (optional)
    );
  } catch {
    console.error(e.message);
  }
}

export function OAuth2Google(e) {
  try {
    account.createOAuth2Session(
      "google", // provider
      "http://localhost:3000/home", // redirect here on success
      "http://localhost:3000/login", // redirect here on failure
      [] // scopes (optional)
    );
  } catch {
    console.error(e.message);
  }
}

export async function getAddresses(id) {
  
    const response = await databases.listDocuments(
      "668dedff00230fe387bc",
      "668e1db300171ba35d86",
      [Query.equal("userId", id)]
    );
    return response.documents;
}
