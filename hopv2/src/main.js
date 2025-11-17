import { searchQ } from "./lib/searchQ";
import { results } from "./lib/resultsQ";
import { empty } from "./lib/elements";


async function main() {
    // filter parameteres
    const nrForm = document.querySelector("#form-nr")
    const nrInput = nrForm.querySelector("#nr");
    const flokkarSelect = document.querySelector("#flokkar");
    const erfidiSelect = document.querySelector("#erfidleikastig");
    const hreinsaButton = nrForm.querySelector("#button-hreinsa");
    const tilbakaButton = document.getElementById("button-tilbaka");
    // database
    const databasePath = new URL("./database/questions.csv", import.meta.url);
    // result container
    const resultsContainer = document.querySelector("#spurningar-results")

    nrInput.addEventListener("keypress", async (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            empty(resultsContainer);

            const questions = await searchQ(databasePath, nrForm, flokkarSelect, erfidiSelect);
            if (!questions || questions.length === 0) {
                resultsContainer.textContent = "Engar spurningar til með þessum skilyrðum";
                return;
            }
            results(questions, resultsContainer);
        }
    });

    hreinsaButton.addEventListener("click", (ev) => {
        ev.preventDefault();
        empty(resultsContainer);

        nrForm.reset();
        flokkarSelect.reset();
        erfidiSelect.reset();

        const url = new URL(window.location.href);
        url.searchParams.delete("nr");
        url.searchParams.delete("flokkur");
        url.searchParams.delete("erfidleikastig");
        window.history.pushState({}, "", url.href);
    });

    tilbakaButton.addEventListener("submit", (e) => {
        const currentParams = window.location.search; 
        tilbakaButton.href =  "../index.html" + currentParams;
    });
}

main();






