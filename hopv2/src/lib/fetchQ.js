import Papa from "papaparse";

/**
 * 
 * @param {string} database - string containing path to static database file
 * @returns -
 */

export async function fetchQ(database) {
    try {
        const data = await fetch(database);
        
        if (!data.ok || data === null) {
            throw new Error(`Villa að sækja gögn: ${data.status}`);
        }

        const data_text = await data.text();
        // console.log("Gögn frá gagnagrunni \n", data_text);
        const data_parsed = Papa.parse(data_text, {
            header: false,
            skipEmptyLines: true,
        });

        // console.log(data_parsed.data);
        return data_parsed.data;

    } catch (error) {
        console.warn('Error fetching data:', error);
        return null;
    }
}


