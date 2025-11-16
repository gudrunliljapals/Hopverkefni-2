import { searchQ } from "./lib/searchQ";
import { results } from "./lib/resultsQ";
import { byrjaleik } from "./lib/pubquiz";

async function main() {
    const form = document.querySelector("#form-nr")
    const nrInput = form.querySelector("#nr");
    const nrButton = form.querySelector("#button-nr");
    const databasePath = new URL("./database/questions.csv", import.meta.url);

    const spilaButton = document.querySelector("#button-spila");
    var questions = null;

    nrInput.addEventListener("keypress", async (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            questions = await searchQ(form, databasePath);
            console.log(questions);
        }
    });

    nrButton.addEventListener("click", async (event) => {
        event.preventDefault();
        questions = await searchQ(form, databasePath);
        console.log(questions);
    });

    spilaButton.addEventListener("click", async (event) => {
        event.preventDefault();
        if(questions && questions.length > 0){
            const akvedaSpurningar = document.querySelector(".akveda-spurningar");
            const leikjaskjar = document.querySelector(".leikjaskjar");
            akvedaSpurningar.classList.add("hidden");
            leikjaskjar.classList.remove("hidden");
            byrjaleik(questions);
        }
        else{
            prompt("þú verður að velja spurningar fyrst");
            return;
        }
    });

    //ég er latur, setti keybinding til að byrja leikinn í flýti
    document.addEventListener("keydown", (event) => {
        if (event.key === "p") {
            event.preventDefault();
            if(questions && questions.length > 0){
                const akvedaSpurningar = document.querySelector(".akveda-spurningar");
                const leikjaskjar = document.querySelector(".leikjaskjar");
                akvedaSpurningar.classList.add("hidden");
                leikjaskjar.classList.remove("hidden");
                byrjaleik(questions);
            }
            else{
                prompt("þú verður að velja spurningar fyrst");
                return;
            }
        }
    });



}

main();





