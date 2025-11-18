
// skilgreina path að spurninga database 
const flokkar = ["Flokkanúmer", "Undirflokkur", "Erfiðleikastig", "Gæðastig", "Spurning", "Svar"];
/**
 * Fall sem tekur inn array rows og mappar út hvert stak sem 
 * object tilheyrandi ákveðnum flokki sem er skilgreint í "flokkar" listanum
 * 
 * @param {Array<string|number|undefined|null>} row - row úr csv gagnagrunni sem varpast í key object
 * @returns {Object<string, string|number>} - key object array þar sem hver key er úr "flokkar" og gildin eru úr row
 */
export function mapRowToObject(row) {
    const object = {};
    flokkar.forEach((key, index) => {
        object[key] = row[index] ?? "";
    });
    return object;
}