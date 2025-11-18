
/**
 * Breytir array með key objects yfir í 2D array án key objects
 * 
 * @param {Array<{
 *  Flokkanúmer: number,
 *  Undirflokkur: string,
 *  Erfiðleikastig: number,
 *  Gæðastig: number,
 *  Spurning: string,
 *  Svar: string }>} questions - Spurningarlisti með key objects  til að breyta í "hreinan" array fyrir spurningarleik
 * @returns {Array<Array<string|number>>} - 2D array með spurningarlistanum án key object
 */
export function convertObjecttoArray(questions) {
    const convertQ = questions.map(q => [
        q.Flokkanúmer, 
        q.Undirflokkur,
        q.Erfiðleikastig,
        q.Gæðastig,
        q.Spurning,
        q.Svar
    ]);
    console.log(convertQ);
    return convertQ;
}