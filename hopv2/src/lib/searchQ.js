import { fetchQ } from "./fetchQ";

// skilgreina path að spurninga database 
const flokkar = ["Flokkanúmer", "Undirflokkur", "Erfiðleikastig", "Gæðastig", "Spurning", "Svar"];

/**
 * 
 * @param {*} form 
 * @param {*} databasePath 
 * @returns 
 */
export async function searchQ(form, databasePath) {
    const number = form.querySelector("#nr");
    const nr = parseInt(number.value, 10);

    if (Number.isNaN(nr) || nr <= 0) {
        return [];
    }

    const browserUrl = new URL(window.location.href);  
    browserUrl.searchParams.set("nr", nr);
    window.history.pushState({}, "", browserUrl.href);

    try {
        const dataFetched = await fetchQ(databasePath); 

        if (!Array.isArray(dataFetched) || dataFetched.length === 0) {
            return [];
        }
        
        const randomNrQ = [];
        const dataFetchedCopy = [...dataFetched];
        const count = Math.min(nr, dataFetchedCopy.length);

        for (let i = 0; i < count && dataFetchedCopy.length > 0; i++) {
            const randomQIndex = Math.floor(Math.random() * dataFetchedCopy.length);
            const [pickedQ] = dataFetchedCopy.splice(randomQIndex, 1);
            randomNrQ.push(pickedQ);
        }

        const randomNrQflokkar = randomNrQ.map((row) => {
            const object = {};
            flokkar.forEach((key, index) => {
                object[key] = row[index] ?? "";
            });
            return object
        });

        return randomNrQflokkar;

    } catch (e) {
        console.error(e);
        throw new Error("Fór úrskeiðis...")
    }
}


