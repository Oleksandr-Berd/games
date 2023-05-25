import axios from "axios"

import { BASE_URL, API_KEY } from "./constants"

export const getAllGames = async (page = 1, limit = 6) => {
    try {
        const response = await axios.get(
          `${BASE_URL}games?key=${API_KEY}&page=${page}&page_size=${limit}`
        );
       return response.data.results
    } catch (error) {
        return error
    }
}

export const getGameById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}games/${id}?key=${API_KEY}`)
         return response.data;
    } catch (error) {
        return error
    }
}

export const test = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}games/${id}/screenshots?key=${API_KEY}`
    );
    console.log(response.data);
  } catch (error) {
    return error;
  }
};
