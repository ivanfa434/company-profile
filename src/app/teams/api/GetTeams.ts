import { get } from "node:https";
import axios from "axios";
import { User } from "../types/userTypes";

export const GetTeams = async (): Promise<User[] | null> => {
  try {
    const { data } = await axios.get("https://randomuser.me/api/?results=12");
    return data.results as User[];
  } catch (axiosError) {
    return null;
  }
};
