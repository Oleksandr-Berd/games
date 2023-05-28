import axios from "axios";

import { BASE_URL, API_KEY } from "./constants";

export const getAllGames = async (page, limit, query) => {
  try {

    if (query) {
      const response = await axios.get(
        `${BASE_URL}games?key=${API_KEY}&page=${page}&page_size=${limit}&search=${query}`
      );

      return response.data.results;
    }

    const response = await axios.get(
      `${BASE_URL}games?key=${API_KEY}&page=${page}&page_size=${limit}`
    );

    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const getGameById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}games/${id}?key=${API_KEY}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getScreenshots = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}games/${id}/screenshots?key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const getTeam = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}games/${id}/development-team?key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const getDLC = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}games/${id}/additions?key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const getTrailers = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}games/${id}/movies?key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const getAchieves = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}games/${id}/achievements?key=${API_KEY}`
    );

return response.data.results;
   
  } catch (error) {
    return error;
  }
};

