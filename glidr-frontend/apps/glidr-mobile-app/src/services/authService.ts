import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEYS } from "@/constants/storage";
import { API } from "./api";


export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}


export interface UserResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;
    createdAt: string;
}

export interface LoginResponse {
    user: UserResponse;
    token: string;
}

export async function registerUser(
    request: RegisterRequest
): Promise<UserResponse> {

    const response = await fetch(
        `${API.BASE_URL}/users/register`,
        {
            method: "POST",
            headers: API.headers,
            body: JSON.stringify({
                ...request,
                role: "CUSTOMER",
            }),
        }
    );

    if (!response.ok) {

        const error = await response.json();

        throw new Error(
            error.message ?? "Registration failed."
        );

    }

    const user: UserResponse =
        await response.json();

    return user;

}


export async function loginUser(
    request: LoginRequest
): Promise<LoginResponse> {

    const response = await fetch(
        `${API.BASE_URL}/users/login`,
        {
            method: "POST",
            headers: API.headers,
            body: JSON.stringify(request),
        }
    );

    if (!response.ok) {

        const error = await response.json();

        throw new Error(
            error.message ?? "Login failed."
        );

    }

    const data: LoginResponse =
        await response.json();

    await AsyncStorage.setItem(
        STORAGE_KEYS.AUTH_TOKEN,
        data.token
    );

    await AsyncStorage.setItem(
        STORAGE_KEYS.CURRENT_USER,
        JSON.stringify(data.user)
    );

    return data;

}


export async function getStoredToken(): Promise<string | null> {

    return AsyncStorage.getItem(
        STORAGE_KEYS.AUTH_TOKEN
    );

}

export async function getStoredUser(): Promise<UserResponse | null> {

    const user =
        await AsyncStorage.getItem(
            STORAGE_KEYS.CURRENT_USER
        );

    if (!user) {
        return null;
    }

    return JSON.parse(user);

}

export async function saveUser(
    user: UserResponse
): Promise<void> {

    await AsyncStorage.setItem(
        STORAGE_KEYS.CURRENT_USER,
        JSON.stringify(user)
    );

}

export async function saveToken(
    token: string
): Promise<void> {

    await AsyncStorage.setItem(
        STORAGE_KEYS.AUTH_TOKEN,
        token
    );

}

export async function logoutUser(): Promise<void> {

    await AsyncStorage.multiRemove([
        STORAGE_KEYS.AUTH_TOKEN,
        STORAGE_KEYS.CURRENT_USER,
    ]);

}

export async function isAuthenticated(): Promise<boolean> {

    const token =
        await getStoredToken();

    return token !== null;

}
