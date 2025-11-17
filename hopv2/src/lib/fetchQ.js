import Papa from "papaparse";
/**
 * Fall sem tekur inn path á gagnagrunn sem er á textaformi og 
 * skilar út gagnagrunninum á array formi
 * @param {string} database - strengur sem inniheldur URL path á gagnagrunn skrá
 * @returns {Promise}- gagnagrunnurinn á array formi
 */

export async function fetchQ(database) {
    try {
        const data = await fetch(database);  // sækja gögn frá URL 
        if (!data.ok || data === null) {   // passa að einhver gögn séu til
            throw new Error(`Villa að sækja gögn: ${data.status}`);
        }
        // breyta gagnagrunni í array form
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


