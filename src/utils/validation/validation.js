export const createAccountValidation = (userId, email, password, name, phone) => {

    //check for empty feilds
    if(isEmpty(name)) throw new Error("Please fill in both name feilds");
    if(isEmpty(email)) throw new Error("Please fill in your email");
    if(isEmpty(phone)) throw new Error("Please fill in your phone");
    if(isEmpty(phone)) throw new Error("Please fill in your phone");
    if(isEmpty(userId)) throw new Error("Please fill in your userId");
    if(isEmpty(password)) throw new Error("Please fill in your password");

    //appwrite will ensure that no duplicated account information exists

    

  };

  const isEmpty = (string) => {
    return !string || string.trim().length === 0;
};