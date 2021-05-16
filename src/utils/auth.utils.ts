import { SignInInterface } from "../interfaces/sign-in.interface";
import { SignUpInterface } from "../interfaces/sign-up.interface";
import { UserInterface } from "../interfaces/user";

export const signUp = async (
  signUpData: SignUpInterface
): Promise<UserInterface | null> => {
  let user: UserInterface;
  const response = await fetch(
    `https://taltech.akaver.com/api/v1/Account/Register/`,
    {
      method: "POST",
      body: JSON.stringify({ ...signUpData }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    user = await response.json();
    return user;
  }
  return null;
};

export const signIn = async (signInData: SignInInterface): Promise<any> => {
  let user;
  const response = await fetch(
    `https://taltech.akaver.com/api/v1/Account/Login/`,
    {
      method: "POST",
      body: JSON.stringify({ ...signInData }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    user = await response.json();
    return user;
  }
  return null;
};
