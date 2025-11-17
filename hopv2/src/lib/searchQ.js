import { fetchQ } from "./fetchQ";
import { mapRowToObject } from "./mapObject";

/**
 * Fall sem síar út 
 * @param {*} databasePath 
 * @param {*} nrForm 
 * @param {*} flokkarSelect 
 * @param {*} erfidiSelect 
 * @returns 
 */
export async function searchQ(databasePath, nrForm, flokkarSelect, erfidiSelect) {
    const number = nrForm.querySelector("#nr");
    const nr = parseInt(number.value, 10);
    if (Number.isNaN(nr) || nr <= 0) {
        return [];
    }
    
    const flokkurValue = flokkarSelect?.value || ""; 
    const flokkurNr = {
        "Almenn kunnátta": "1", 
        "Náttúra og vísindi": "2", 
        "Bókmenntir og listir": "3", 
        "Saga": "4",
        "Landafræði": "5", 
        "Skemmtun og afþreying": "6", 
        "Íþróttir og tómstundir": "7"};
    const flokkurSelected = flokkurNr[flokkurValue] || "";
    
    const erfidleikastigValue = erfidiSelect?.value || "";
    const erfidiNr = {"Létt": "1", "Meðal": "2", "Erfið": "3"};
    const erfidleikastigSelected = erfidiNr[erfidleikastigValue] || "";

    const browserUrl = new URL(window.location.href);  
    browserUrl.searchParams.set("nr", nr.toString());
    if (flokkurValue) browserUrl.searchParams.set("flokkur", flokkurValue);
    else browserUrl.searchParams.delete("flokkur");
    if (erfidleikastigValue) browserUrl.searchParams.set("erfidleikastig", erfidleikastigValue);
    else browserUrl.searchParams.delete("erfidleikastig");
    window.history.pushState({}, "", browserUrl.href);

    try {
        const dataFetched = await fetchQ(databasePath); 
        if (!Array.isArray(dataFetched) || dataFetched.length === 0) {
            return [];
        }
        
        const dataFetchedMap = dataFetched.map(mapRowToObject);
        const dataFetchedFiltered = dataFetchedMap.filter((q) => {
            if (flokkurSelected !== "" && String(q.Flokkanúmer) !== String(flokkurSelected)) {
                return false;
            }  
            if (erfidleikastigSelected !== "" && String(q.Erfiðleikastig) !== String(erfidleikastigSelected)) {
                return false;
            } 
            return true;
        });
        
        if (dataFetchedFiltered.length === 0) {
            return [];
        };

        const randomNrQ = [];
        const dataFilteredCopy = [...dataFetchedFiltered];
        const count = Math.min(nr, dataFilteredCopy.length);

        for (let i = 0; i < count && dataFilteredCopy.length > 0; i++) {
            const randomQIndex = Math.floor(Math.random() * dataFilteredCopy.length);
            const [pickedQ] = dataFilteredCopy.splice(randomQIndex, 1);
            randomNrQ.push(pickedQ);
        }

        return randomNrQ;

    } catch (e) {
        console.error(e);
        throw new Error("Fór úrskeiðis...")
    }
}



