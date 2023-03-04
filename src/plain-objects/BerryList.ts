import Berry from "./Berry";
class BerryList {
    count?: number | unknown;
    next?: string | null;
    previous?: string | null;
    results: Array<Berry>;

    constructor(count: number, next: string, previous: string, results: Array<Berry> = []) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }

    getBerryCount() {
        return this.count;
    }

    getNextPage() {
        return this.next;
    }

    getPreviousPage() {
        return this.previous;
    }

    getResults() {
        return this.results;
    }

    setBerryCount(count: number | unknown) {
        this.count = count;
    }

    setNextPage(next: string | null) {
        this.next = next;
    }

    setPreviousPage(previous: string | null) {
        this.previous = previous;
    }

    addBerryToResults(berryName: string, berryUrl: string) {
        this.results = [...this.results, new Berry(berryName, berryUrl)]
    }

    serializeBerryList() {
        return JSON.stringify(this);
    }
}

export default BerryList