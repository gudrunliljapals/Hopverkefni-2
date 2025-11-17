import { searchQ } from "./lib/searchQ";
import { results } from "./lib/resultsQ";
import { empty } from "./lib/elements";


async function main() {
    const form = document.querySelector("#form-nr")
    const nrInput = form.querySelector("#nr");
    const hreinsaButton = form.querySelector("#button-hreinsa");
    const databasePath = new URL("./database/questions.csv", import.meta.url);
    const resultsContainer = document.querySelector("#spurningar-results")

    nrInput.addEventListener("keypress", async (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            empty(resultsContainer);

            const questions = await searchQ(form, databasePath);
            const displayResults = results(questions, resultsContainer);
        }
    });

    hreinsaButton.addEventListener("click", (ev) => {
        ev.preventDefault();
        empty(resultsContainer);
    });

}

main();





