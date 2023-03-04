
class Berry {
    name?: string | undefined;
    url?: string | undefined;

    constructor(name: string | undefined, url: string | undefined) {
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