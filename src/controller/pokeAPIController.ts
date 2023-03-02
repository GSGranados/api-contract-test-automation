import { request } from "../helper/supertestHelper";
import { APPLICATION_JSON } from "../helper/apiTypes";
import toJsonSchema from "to-json-schema";
import { Validator } from "jsonschema";
import { expect } from "chai";
import BerryList from "../plain-objects/BerryList";
class PokeAPIController {

    baseURL: string = "/berry"
    constructor() { }

    async getPokeBerries() {
        const response = await request.get(this.baseURL)
            .set('Content-Type', APPLICATION_JSON);
        return response;
    }

    async generateJSONSchema(berryData: BerryList): Promise<toJsonSchema.JSONSchema3or4> {
        const jsonSchema = await toJsonSchema(berryData);
        return jsonSchema;
    }

    async validateJSONSchema(berryData: BerryList, berryDataSchema: any) {
        const validator = new Validator();
        const schemaValid = validator.validate(berryData, berryDataSchema);
        expect(schemaValid.valid).to.be.true;
    }

}

export default new PokeAPIController;