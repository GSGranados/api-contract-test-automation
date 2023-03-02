import { request } from "../helper/supertestHelper";
import { APPLICATION_JSON } from "../helper/apiTypes";
import toJsonSchema from "to-json-schema";
import { Validator } from "jsonschema";
import { expect } from "chai";
import BerryList from "../plain-objects/BerryList";
class PokeAPIController {

    baseURL: string = "/berry"
    constructor() { }

    /**
     * @function getPokeBerries It makes an API requests to the Berries resaource to get all poke berries data
     * @returns The Promise Resolved - response from API
     */
    async getPokeBerries() {
        const response = await request.get(this.baseURL)
            .set('Content-Type', APPLICATION_JSON);
        return response;
    }

    /**
     * @function generateJSONSchema It generates a JSON schema that describes the Whole Response structure obtained from the API response 
     * @param berryData The BerryList Object from the API response
     * @returns a JSON dictionary describing the BerryList Structure
     */
    async generateJSONSchema(berryData: BerryList): Promise<toJsonSchema.JSONSchema3or4> {
        const jsonSchema = await toJsonSchema(berryData);
        return jsonSchema;
    }

    /**
     * @function validateJSONSchema It makes use of the Schema validator to compare against the Berrylist object and the BerryList Schema and asserts the result
     * @param berryData Berrylist object
     * @param berryDataSchema Berrylist schema obtained from the Berrylist object
     */
    async validateJSONSchema(berryData: BerryList, berryDataSchema: any) {
        const validator = new Validator();
        const schemaValid = validator.validate(berryData, berryDataSchema);
        expect(schemaValid.valid).to.be.true;
    }

}

export default new PokeAPIController;