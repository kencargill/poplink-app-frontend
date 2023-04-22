import { axios } from '../libs/axios';
import { User } from "../types/user.types";

export async function logout() {}

export async function authenticateWithGoogle() {}

export async function signUpWithGoogle() {}

export async function loginWithGoogle() {}

export async function getLoginUser(uid: string) {
    const response = await axios.get<User>('/auth/login', { params: { uid } });
    return response.data;
}
