import { searchQ } from "./lib/searchQ";
import { results } from "./lib/resultsQ";
import { empty } from "./lib/elements";

import { byrjaleik } from "./lib/pubquiz";

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

    const spilaButton = document.querySelector("#button-spila");
    var questions = null;

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



    tilbakaButton.addEventListener("submit", (e) => {
        const currentParams = window.location.search; 
        tilbakaButton.href =  "../index.html" + currentParams;
    });
}

main();






