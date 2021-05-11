import axios from 'axios';

export async function http_get(url: string) {
  try {
    const data = await axios.get(url);
    return data;
  } catch (ex) {
    return new Error(ex.message)
  }
}

export async function http_post(url: string, body: any) {
  try {
    const data = await axios.post(url, body);
    return data;
  } catch (ex) {
    return new Error(ex.message)
  }
}