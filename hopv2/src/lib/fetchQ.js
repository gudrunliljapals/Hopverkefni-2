import Papa from "papaparse";
/**
 * 
 * @param {string} database - string containing URL path to static database file
 * @returns - a parsed file with database in array form
 */

export async function fetchQ(database) {
    try {
        const data = await fetch(database);
        if (!data.ok || data === null) {
            throw new Error(`Villa að sækja gögn: ${data.status}`);
        }

        const data_text = await data.text();
        const data_parsed = Papa.parse(data_text, {
            header: false,
            skipEmptyLines: true,
        });

        return data_parsed.data;

    } catch (error) {
        console.warn('Error fetching data:', error);
        return null;
    }
}


