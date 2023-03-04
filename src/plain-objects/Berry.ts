
class Berry {
    name?: string;
    url?: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }

    getBerryName() {
        return this.name;
    }
    getBerryUrl() {
        return this.url;
    }

    setBerryName(berryName: string) {
        this.name = berryName;
    }
    setBerryUrl(berryURL: string) {
        this.url = berryURL;
    }
}

export default Berry