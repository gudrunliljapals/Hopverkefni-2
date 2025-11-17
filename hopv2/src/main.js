import { searchQ } from "./lib/searchQ";
import { results } from "./lib/resultsQ";
import { empty } from "./lib/elements";
import { byrjaleik } from "./lib/pubquiz";
import { convertObjecttoArray } from "./lib/convertGame";

/**
 * 
 */

async function main() {
    let questions = null; // upphafsstilla spurningar 

    // html elements með virkni
    const nrForm = document.querySelector("#form-nr");
    const flokkarSelect = document.querySelector("#flokkar");
    const erfidiSelect = document.querySelector("#erfidleikastig");
    const forsidaButtonURL = document.getElementById("button-forsida");
    const leitaButton = document.querySelector("#button-leita");
    const spilaButton = document.querySelector("#button-spila");
    const stopButton = document.querySelector("#button-stop");
    const resultsContainer = document.querySelector("#spurningar-results");

    // gagnagrunns URL
    const databasePath = new URL("./database/questions.csv", import.meta.url);

    // SPURNINGAR.HTML virkni 
    if (nrForm && flokkarSelect && erfidiSelect && resultsContainer) {
        const nrInput = nrForm.querySelector("#nr");
        const hreinsaButton = nrForm.querySelector("#button-hreinsa");
        
        // fjöldi spurninga input virkni hægt að leita beint með "Enter"
        if (nrInput) {
            nrInput.addEventListener("keypress", async (event) => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    empty(resultsContainer);

                    questions = await searchQ(databasePath, nrForm, flokkarSelect, erfidiSelect);
                    if (!questions || questions.length === 0) {
                        resultsContainer.textContent = "Engar spurningar til með þessum skilyrðum";
                        return;
                    }
                    results(questions, resultsContainer);
                }
            });
        }
        
        // leita button fyrir almenna virkni á filter
        if (leitaButton) {
            leitaButton.addEventListener("click", async (e) => {
                e.preventDefault();
                empty(resultsContainer);

                questions = await searchQ(databasePath, nrForm, flokkarSelect, erfidiSelect);
                if (!questions || questions.length === 0) {
                    resultsContainer.textContent = "Engar spurningar til með þessum skilyrðum";
                    return;
                }
                results(questions, resultsContainer);
            });
        }
        
        // hreinsa button virkni
        if (hreinsaButton) {
            hreinsaButton.addEventListener("click", (ev) => {
                ev.preventDefault();
                empty(resultsContainer);

                nrForm.reset();
                flokkarSelect.selectedIndex = 0;
                erfidiSelect.selectedIndex = 0;

                const url = new URL(window.location.href);
                url.searchParams.delete("nr");
                url.searchParams.delete("flokkur");
                url.searchParams.delete("erfidleikastig");
                window.history.pushState({}, "", url.href);
            });      
        }
        
        // virkni til að uppfæra URL þegar farið aftur á forsíðu
        if (forsidaButtonURL) {
            forsidaButtonURL.addEventListener("submit", (e) => {
                e.preventDefault();
                const currentParams = window.location.search; 
                forsidaButtonURL.href =  "../index.html" + currentParams;
            });
        }

        // virkni til að hætta að spila og fara í spurningar.html aftur
        if (stopButton) {
            stopButton.addEventListener("click", (e) => {
                e.preventDefault();
                const currentParamsStop = window.location.search;
                window.location.href = "spurningarSpila.html" + currentParamsStop;
            });
        } 
        stopButton.classList.add("hidden");
    }   
        
    // SPILA.HTML virkni
    if (spilaButton) {
        spilaButton.addEventListener("click", async (event) => {
            event.preventDefault();
            if(questions && questions.length > 0){
                const akvedaSpurningar = document.querySelector(".akveda-spurningar");
                const leikjaskjar = document.querySelector(".leikjaskjar");
                const forsidaButton = document.querySelector("#button-forsida");
                akvedaSpurningar.classList.add("hidden");
                forsidaButton.classList.add("hidden");
                spilaButton.classList.add("hidden");
                resultsContainer.classList.add("hidden");
                stopButton.classList.remove("hidden");
                leikjaskjar.classList.remove("hidden");
                const cQuestions = convertObjecttoArray(questions);
                console.log(cQuestions);
                byrjaleik(cQuestions);
            }
            else{
                alert("Þú verður að velja spurningar fyrst");
                return;
            }
        });
    }
    
    //ég er latur, setti keybinding til að byrja leikinn í flýti
    document.addEventListener("keydown", (event) => {
        if (event.key === "p") {
            event.preventDefault();
            if(questions && questions.length > 0){
                const akvedaSpurningar = document.querySelector(".akveda-spurningar");
                const leikjaskjar = document.querySelector(".leikjaskjar");
                akvedaSpurningar.classList.add("hidden");
                leikjaskjar.classList.remove("hidden");
                const cQuestions = convertObjecttoArray(questions);
                byrjaleik(cQuestions);
            }
            else{
                alert("Þú verður að velja spurningar fyrst");
                return;
            }
        }
    }); 
}

main();





  