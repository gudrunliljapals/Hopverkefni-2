
// skilgreina path að spurninga database 
const flokkar = ["Flokkanúmer", "Undirflokkur", "Erfiðleikastig", "Gæðastig", "Spurning", "Svar"];
/**
 * 
 * @param {*} row 
 * @returns 
 */
export function mapRowToObject(row) {
    const object = {};
    flokkar.forEach((key, index) => {
        object[key] = row[index] ?? "";
    });
    return object;
}