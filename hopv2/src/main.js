import { fetchQ } from "./lib/fetchQ";
import { results } from "./lib/resultsQ";


async function main() {
    const nrInput = document.querySelector(".form-nr");
    const nrButton = document.querySelector(".button-nr");
    const database_path = new URL("./database/questions.csv", import.meta.url);
    console.log(database_path);
    const result = await fetchQ(database_path);
    console.log(result);

    nrInput.addEventListener("keypress", async function(event) {

        if (event.key === "Enter") {
            event.preventDefault();
            nrButton.click();

        }
    });


}

main();





