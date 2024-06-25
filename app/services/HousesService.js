import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
    constructor() {
        console.log('Houses Service init');
        this.getHouses()
    }

    async getHouses() {
        try {
            const response = await api.get('api/houses')
            console.log(response.data);
            let houses = response.data.map(house => new House(house))
            AppState.houses = houses
            console.log(AppState.houses)
        } catch (error) {
            console.log('unable to load houses', error);
        }


    }
}

export const housesService = new HousesService()