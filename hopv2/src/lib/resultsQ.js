import { el, empty} from "./elements";

/**
 * Býr til og birtir lista af random spurningunum í resultsContainer á síðunni
 * Þegar notandi smellir á einhverja spurningu þá eru ítarlegri upplýsingar um spurninguna sýnt og svar
 * URL er uppfært í samræmi við staðsetningu og þetta fall er kallað á í searchQ
 *
 * @param {Question[]} questions - spurningar sem á að sýna
 * @param {HTMLElement} resultsContainer - HTML elementið sem heldur utan um niðurstöður 
 * @returns {void}
 */
export function results(questions, resultsContainer) {
    if (!questions) return;
    empty(resultsContainer);

    const ul = el("ul", { class: "result-list" });

    for (const Q of questions) {
        const id = Q.Flokkanúmer ?? "";
        const li = el("li", { class: "result-item" });
        li.appendChild(
            el("a", {href: id ? `?question=${encodeURIComponent(id)}` : "#", 
                    class: "spurningar-link",
                click: (ev) => {
                    ev.preventDefault();
                    empty(resultsContainer);

                    const browserUrl = new URL(window.location.href);
                    if (id) {
                        browserUrl.searchParams.set("question", id);
                    }
                    window.history.pushState({}, "", browserUrl.href);
                    
                    const titleQ = document.createElement("h2"); 
                    titleQ.textContent = Q.Spurning ?? "Spurning";
                    titleQ.classList.add("spurningar-title");

                    const answerQ = document.createElement("p");
                    answerQ.textContent = Q.Svar ? `Svar: ${Q.Svar}`:
                    answerQ.classList.add("spurningar-svar");

                    const metaSpurningar = document.createElement("div");
                    metaSpurningar.classList.add("meta-grid");

                    const metaFlokkur = document.createElement("div");
                    metaFlokkur.classList.add("meta-item");
                    metaFlokkur.textContent = `Flokkur: ${Q.Flokkanúmer ?? ""}`;

                    const metaErfidleiki = document.createElement("div");
                    metaErfidleiki.classList.add("meta-item");
                    metaErfidleiki.textContent = `Erfiðleikastig: ${Q.Erfiðleikastig ?? ""}`;

                    const metaUndirflokkur = document.createElement("div");
                    metaUndirflokkur.classList.add("meta-item");
                    metaUndirflokkur.textContent = `Undirflokkur: ${Q.Undirflokkur ?? ""}`;

                    const metaGaedastig = document.createElement("div");
                    metaGaedastig.classList.add("meta-item");
                    metaGaedastig.textContent = `Gæðastig: ${Q.Gæðastig ?? ""}`;

                    metaSpurningar.appendChild(metaFlokkur);
                    metaSpurningar.appendChild(metaErfidleiki);
                    metaSpurningar.appendChild(metaUndirflokkur);
                    metaSpurningar.appendChild(metaGaedastig);

                    const tilBaka = document.createElement("a");
                        tilBaka.innerHTML = "&#8592; Til baka";
                        tilBaka.href = "#";
                        tilBaka.classList.add("tilbaka-linkur");
                        tilBaka.addEventListener("click", (e) => {
                            e.preventDefault();
                            const bakaUrl = new URL(window.location.href);
                            bakaUrl.searchParams.delete("question");
                            bakaUrl.searchParams.delete("nr");
                            window.history.pushState({}, "", bakaUrl.href);

                            results(questions, resultsContainer);
                        });
                    
                    const section = document.createElement("section"); 
                    section.classList.add("spurningar-detail");
                    section.appendChild(titleQ);
                    section.appendChild(answerQ);
                    section.appendChild(metaSpurningar);
                    section.appendChild(tilBaka);

                    resultsContainer.appendChild(section);
                } 
            }, Q.Spurning ?? `Spurning ${id || ""}`)
        )
        ul.appendChild(li);
    }
    resultsContainer.appendChild(ul);
}   

        

