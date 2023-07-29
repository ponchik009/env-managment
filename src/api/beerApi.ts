import { AxiosInstance } from "axios";
import { Beer } from "types";

export class BeerApi {
  constructor(private instance: AxiosInstance, private pageSize: number = 25) {}

  public async getBeers(page = 1) {
    return this.instance
      .get<Beer[]>("/beers", {
        params: {
          page,
          per_page: this.pageSize,
        },
      })
      .then((response) => response.data)
      .catch((e) => {
        console.log(e);
        return [];
      });
  }
}
