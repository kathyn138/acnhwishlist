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
    }
  }
  static async getVillagers(personality: string) {
    let res = await axios.get(`${BASE_URL}/villagers/${personality}`);
    return res.data;
  }

  static async searchVillagers(query: string) {
    let res;

    if (query) {
      res = await this.request(`villagers`, { name: query });
    } else {
      res = await this.request(`${BASE_URL}/villagers`);
    }
    
    return res.villager;
  }
}

export default wishlistApi;