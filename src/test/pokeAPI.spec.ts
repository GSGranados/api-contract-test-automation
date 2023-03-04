import PokeAPIController from "../controller/pokeAPIController";
import generateId from "../helper/testIdGenerator";
import BerryList from "../plain-objects/BerryList";
let initialTestId = 'API-CONTRACT-TEST';
let testId = "";
let increment = 1;
describe(`${initialTestId}: POKE API - CONTRACT API AUTOMATION`, () => {

    it(`${generateId(initialTestId, increment)}: Validate POKE API Respone against JSON Schema - Berries`, async () => {
        testId = generateId(initialTestId, increment);
        const response = await PokeAPIController.getPokeBerries();
        const { count, next, previous, results } = response.body
        const berryList = new BerryList(count, next, previous, results);
        const berrySchema = await PokeAPIController.generateJSONSchema(berryList);
        await PokeAPIController.validateJSONSchema(berryList, berrySchema);
    });
});
