import Papa from 'papaparse';

export async function parse(database_path) {
    const data_text = await database_path.text();
    const data_parsed = Papa.parse(data_text, 
            {header: false,
             skipEmptyLines: true
        });
        console.log(data_parsed);
        return data_parsed.data;
}