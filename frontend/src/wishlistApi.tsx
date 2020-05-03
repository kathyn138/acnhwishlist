import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

class wishlistApi {

  static async request(endpoint: string, params?: { name: string }) {
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

  static async getVillagers(personality: string) {
    let res = await this.request(`villagers/${personality}`);
    return res.villagers;
  }

  static async searchVillagers(query: string) {
    let res = await this.request(`villagers`, { name: query });
    return res.villager;
  }
}

export default wishlistApi;