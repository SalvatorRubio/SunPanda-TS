import axios from "axios";

export type CityInfo = {
  discounts: string[];
  restaurants: RestaurantsInfo[];
};

export type RestaurantsInfo = {
  img: string;
  name: string;
  price: string;
  timeEnd: string;
  timeStart: string;
};

export const getApiResource = (url: string): Promise<boolean | CityInfo[]> => {
  const res = axios
    .get<CityInfo[] | false>(url)
    .then((res) => res.data)
    .catch((err: any) => {
      console.log(err);
      return false;
    });
  return res;
};
