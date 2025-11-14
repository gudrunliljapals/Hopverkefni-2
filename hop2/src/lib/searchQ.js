import { fetchQ } from "./fetchQ";

// skilgreina path að static spurninga database 
const database_file = "/questions.csv"
const flokkar = ["Flokkanúmer", "Undirflokkur", "Erfiðleikastig", "Gæðastig", "Spurning", "Svar"];

/**
 * 
 * @param {*} form 
 */
export async function searchQ(form) {
    const number = form.querySelector("#nr");
    const nr = number.value;

    const browserUrl = new URL(window.location.href);  
    browserUrl.searchParams.set("nr", nr);
    window.history.pushState({}, "", browserUrl.href);

    try {
        const data_fetched = await fetchQ(database_file);
        
        console.log(data_fetched);

    } catch (e) {
        throw new Error("Fór úrskeiðis...")
    }
}




    

    
    
    



    