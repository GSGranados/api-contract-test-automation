import Berry from "./Berry";
class BerryList {
    count?: number | any;
    next?: string | null;
    previous?: string | null;
    results: Array<Berry>;

    constructor(count: number, next: string | null, previous: string | null, results: Array<Berry> = []) {
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

    setBerryCount(count: number) {
        this.count = count;
    }

    setNextPage(next: string | null) {
        this.next = next;
    }

    setPreviousPage(previous: string | null) {
        this.previous = previous;
    }

    addBerryToResults(berryName: string | undefined, berryUrl: string | undefined) {
        this.results = [...this.results, new Berry(berryName, berryUrl)]
    }

    serializeBerryList() {
        return JSON.stringify(this);
    }
}

export default BerryList