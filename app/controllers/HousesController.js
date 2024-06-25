import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { setHTML } from "../utils/Writer.js";

export class HousesController {
    constructor() {
        // AppState.on('houses', this.drawHouses)
        console.log('house controller init');
        this.getHouses()
    }

    async getHouses() {
        await housesService.getHouses()
        this.drawHouses()
    }

    drawHouses() {
        let houses = AppState.houses
        let injectString
        houses.forEach(house => {
            injectString += house.htmlTemplate
        });
        setHTML('houses-area', injectString)
    }
}
