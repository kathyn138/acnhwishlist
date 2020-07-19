import axios from 'axios';

const BASE_URL = "https://acwlabackend.herokuapp.com" || "http://localhost:5000";

class wishlistApi {

  static async request(endpoint: string, params?: {
    name?: string,
    personalities?: string[], species?: string[]
  }) {
    try {
      return (await axios({
        method: 'get',
        url: `${BASE_URL}/${endpoint}`,
        params: params
      })).data;
    } catch (error) {
      console.error("API Error:", error);
      let message = error.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async searchVillagers(query: string) {
    let res = await this.request(`villagers`, { name: query });
    return res.villager;
  }

  static async filterVillagers(personalities: string[], species: string[]) {
    let res = await this.request(`villagers/filter`, { personalities, species });
    return res.villagers;
  }

  static async wakeBackend() {
    let res = await this.request('');
    return res;
  }
}

export default wishlistApi;