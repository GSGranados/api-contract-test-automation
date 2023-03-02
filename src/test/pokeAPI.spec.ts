import PokeAPIController from "../controller/pokeAPIController";
import BerryList from "../plain-objects/BerryList";

describe('POKE API - CONTRACT API AUTOMATION', () => {

    it('Validate POKE API Respone against JSON Schema - Berries', async () => {
        const response = await PokeAPIController.getPokeBerries();
        const { count, next, previous, results } = response.body
        const berryList = new BerryList(count, next, previous, results);
        const berrySchema = await PokeAPIController.generateJSONSchema(berryList);
        await PokeAPIController.validateJSONSchema(berryList, berrySchema);
    });
});
