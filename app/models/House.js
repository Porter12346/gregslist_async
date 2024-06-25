export class House {
    constructor(data) {
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.id = data.id
    }

    get htmlTemplate() {
        return (`<div class="col-12 d-flex border border-3 border-dark shadow shadow-5 p-0">
                <img src="${this.imgUrl}"
                    alt="a house" class="img-fluid img-sizing">
                <div class="p-4">
                    <h2>${this.bedrooms} Bedrooms, ${this.bathrooms} bathrooms</h2>
                    <h3>${this.levels} story</h3>
                    <h2>$${this.price}</h2>
                </div>
                <div class="py-4">
                    <p>built in 1982</p>
                    <p>${this.description}</p>
                    <p>listed by: ${this.creator.name}</p>
                </div>
                <button onclick="app.HousesController.destroyHouse('${this.id}')"></button>
            </div>`)
    }
}

// bedrooms: Number, required
// bathrooms: Number, required
// levels: Number, required
// imgUrl: String,
// year: Number, required
// price: Number, required
// description: String,
// creatorId: SchemaObjectId, required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)