import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "@/constants/storage";

export async function saveToken(token: string) {
  await AsyncStorage.setItem(
    STORAGE_KEYS.AUTH_TOKEN,
    token
  );
}

export async function getToken() {
  return AsyncStorage.getItem(
    STORAGE_KEYS.AUTH_TOKEN
  );
}

export async function saveUser(user: any) {
  await AsyncStorage.setItem(
    STORAGE_KEYS.CURRENT_USER,
    JSON.stringify(user)
  );
}

export async function getUser() {
  const user = await AsyncStorage.getItem(
    STORAGE_KEYS.CURRENT_USER
  );

  return user ? JSON.parse(user) : null;
}

export async function logout() {
  await AsyncStorage.multiRemove([
    STORAGE_KEYS.AUTH_TOKEN,
    STORAGE_KEYS.CURRENT_USER,
  ]);
}