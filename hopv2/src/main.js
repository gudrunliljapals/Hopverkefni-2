import { searchQ } from "./lib/searchQ";
import { results } from "./lib/resultsQ";


async function main() {
    const form = document.querySelector("#form-nr")
    const nrInput = form.querySelector("#nr");
    const nrButton = form.querySelector("#button-nr");
    const databasePath = new URL("./database/questions.csv", import.meta.url);

    nrInput.addEventListener("keypress", async (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const questions = await searchQ(form, databasePath);
            console.log(questions);
        }
    });


}

main();





