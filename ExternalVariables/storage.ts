import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';


export async function secureSave(key: string, value: any) {
  await SecureStore.setItemAsync(key, value);
}
export async function secureGet(key: string, funcTodo: any) {
  const result = await SecureStore.getItemAsync(key);
  if (funcTodo != null) {
    funcTodo(result);
  }

  if (result) {
    console.log(`🔐 Here's your value 🔐 \n${result}`);
  } else {
    console.log('No values stored under that key.');
  }
}
export async function secureDelete(key: string) {
  await SecureStore.deleteItemAsync(key);
}

export const storeLocal = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.log(error);
  }
};

export const getLocal = async (key: string) => {
  try {
    await AsyncStorage.getItem(key).then((data: any) => {
      // console.log(data);
      return data;
    });
  } catch (error) {
    console.log(error);
  }
};