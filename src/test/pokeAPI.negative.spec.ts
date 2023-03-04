import PokeAPIController from "../controller/pokeAPIController";
import generateId from "../helper/testIdGenerator";
import BerryList from "../plain-objects/BerryList";
let initialTestId = 'API-NEGATIVE-CONTRACT-TEST';
let testId = "";
let increment = 1;
describe(`${initialTestId}: POKE API - CONTRACT API AUTOMATION - NEGATIVE TESTS`, () => {

    it(`${generateId(initialTestId, increment)}: Validate POKE API Respone against JSON Schema - Change Property Type`, async () => {
        testId = generateId(initialTestId, increment);
        const response = await PokeAPIController.getPokeBerries();
        const { count, next, previous, results } = response.body
        const berryList = new BerryList(count, next, previous, results);
        const berrySchema = await PokeAPIController.generateJSONSchema(berryList);
        berryList.count = String(berryList.count);
        await PokeAPIController.verifyIncorrectResponseAgainstSchema(berryList, berrySchema);
    });
    it(`${generateId(initialTestId, increment)}: Validate POKE API Respone against JSON Schema - Delete Property`, async () => {
        testId = generateId(initialTestId, increment);
        const response = await PokeAPIController.getPokeBerries();
        const { count, next, previous, results } = response.body
        const berryList = new BerryList(count, next, previous, results);
        const berrySchema = await PokeAPIController.generateJSONSchema(berryList);
        delete berryList.count;
        delete berryList.next;
        berryList.results.forEach(berry => delete berry.url);
        await PokeAPIController.verifyIncorrectResponseAgainstSchema(berryList, berrySchema);
    });
});
