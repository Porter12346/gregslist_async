import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class HousesController {
    constructor() {
        AppState.on('houses', this.drawHouses)
        console.log('house controller init');
    }

    drawHouses() {
        let houses = AppState.houses
        let injectString = ''
        houses.forEach(house => {
            injectString += house.htmlTemplate
        });
        setHTML('houses-area', injectString)
    }

    createHouse() {
        try {
            event.preventDefault()
            const form = event.target
            const houseData = getFormData(form)
            housesService.createHouse(houseData)
        } catch (error) {
            Pop.error('failed to add house')
        }
    }

    destroyHouse(id) {
        console.log('destroying house');
        try {
            housesService.destroyHouse(id)
        } catch (error) {
            Pop.error('failed to destroy house')
        }
    }
}
