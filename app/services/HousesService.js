import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js";

class HousesService {


    constructor() {
        console.log('Houses Service init');
        this.getHouses()
    }

    async getHouses() {
        let response
        try {
            response = await api.get('api/houses')
            console.log(response.data);

        } catch (error) {
            console.log('unable to load houses', error);
        }
        let houses = response.data.map(house => new House(house))
        AppState.houses = houses
        console.log(AppState.houses)

    }

    async createHouse(houseData) {
        try {
            let response = await api.post('api/houses', houseData)
            let house = new House(response.data)
            AppState.houses.push(house)
        } catch (error) {
            Pop.error(`failed to add house ${error}`)
        }

    }

    destroyHouse(houseId) {
        try {
            let response = api.delete(`api/houses/${houseId}`,)
            console.log(response);
        } catch (error) {
            Pop.error(error)
        }

    }
}

export const housesService = new HousesService()