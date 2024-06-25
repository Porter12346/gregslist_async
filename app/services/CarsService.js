import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js"

class CarsService {
  async getCars() {
    // 🐕------> codeWorks sandbox API
    // NOTE the string passed through as the argument to .get will be concatted to the end of your baseURL. This will send a GET request to https://sandbox.codeworksacademy.com/api/cars
    const response = await api.get('api/cars')

    // NOTE Always log the response data
    console.log('🐕🏎️🚓🚙<-------', response.data);

    // NOTE response.data is the array of data we care about (the meat)
    const newCars = response.data.map((carPOJO) => new Car(carPOJO))

    AppState.cars = newCars
  }
}

export const carsService = new CarsService()