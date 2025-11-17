
// skilgreina path að spurninga database 
const flokkar = ["Flokkanúmer", "Undirflokkur", "Erfiðleikastig", "Gæðastig", "Spurning", "Svar"];
/**
 * Fall sem tekur inn array rows og mappar út hvert stak sem 
 * object tilheyrandi ákveðnum flokki sem er skilgreint í "flokkar"
 * @param {*} row -
 * @returns {}
 */
export function mapRowToObject(row) {
    const object = {};
    flokkar.forEach((key, index) => {
        object[key] = row[index] ?? "";
    });
    return object;
}