import { Client, Account } from "appwrite";
import { ShopperLoginStates } from "../constants/enums/enums";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("667375240009c7efa89e");

export const account = new Account(client);
export { ID } from "appwrite";

export async function logout(dispatch) {
  try {
    await account.deleteSession('current');
    dispatch({ type: 'SET_SHOPPER_STATE', payload: ShopperLoginStates.LOGGED_OUT });
    dispatch({ type: 'SET_LOGGED_IN_USER', payload: null });
  } catch (error) {
    console.error('Error logging out', error);
  }
}

export async function login(email, password, dispatch) {
  if(account){
    await logout();
  }
  try {
    await account.createEmailPasswordSession(email, password);
    const user = await account.get();
    dispatch({ type: 'SET_SHOPPER_STATE', payload: ShopperLoginStates.LOGGED_IN });
    dispatch({ type: 'SET_LOGGED_IN_USER', payload: user });
    dispatch({ type: 'SET_LOGGED_IN_NAME', payload: user.name})
  } catch (error) {
    console.error('Error logging in', error);
  }
}