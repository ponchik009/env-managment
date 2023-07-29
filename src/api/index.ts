import axios from "axios";

import { BeerApi } from "./beerApi";
import { BEER_API_URL, PAGE_SIZE } from "const";

const beerApiInstance = axios.create({
  baseURL: BEER_API_URL,
});

const beerApi = new BeerApi(beerApiInstance, PAGE_SIZE);

export { beerApi };
