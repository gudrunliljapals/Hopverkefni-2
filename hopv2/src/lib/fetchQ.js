import Papa from 'papaparse';
/**
 * 
 * @param {string} database - string containing path to static database file
 * @returns -
 */

export async function fetchQ(database) {
    try {
        const data = await fetch(database);
        if (!data.ok) {
            throw new Error(`Fetching data failed: ${data.status} ${data.statusText}`);
        }
        
        const data_text = await data.text();
        const data_parsed = Papa.parse(data_text, 
            {header: false,
             skipEmptyLines: true
        });
        return data_parsed.data;

    } catch (error) {
        console.warn('Error fetching data:', error);
        return null;
    }
}
