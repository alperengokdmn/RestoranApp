import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 6emNKthAmlQ0Ad5cJeMjM9gefhKAAEP2b1cAJwIMs16PE81kcbaq1Ejq0gqzm8C2kJwvdXhkUFRwDhByLFbJjKW5tzb1Gz2JckxlWtj_60OoXGh8otergwqdiPTJZnYx',
  },
});
