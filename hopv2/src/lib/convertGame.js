
/**
 * 
 * @param {*} questions 
 * @returns 
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