import { el, empty} from "./elements";

export function results(questions, resultsContainer) {
    if (!questions) return;

    const ul = el("ul", { class: "result-list" });

    for (const Q of questions) {
        const id = Q.Flokkanúmer ?? "";
        const li = el("li", {});
        li.appendChild(
            el("a", {href: id ? `?question=${encodeURIComponent(id)}` : "#",
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
                    titleQ.style.fontSize = "32px";
                    titleQ.style.fontWeight = "700";

                    const answerQ = document.createElement("p");
                    answerQ.textContent = Q.Svar ? `Svar: ${Q.Svar}`:
                    answerQ.style.fontSize = "16px";

                    const metaQ = document.createElement("p");
                    metaQ.textContent = `Flokkur: ${Q.Flokkanúmer ?? "-"} | ` +
                            `Undirflokkur: ${Q.Undirflokkur ?? "-"} | ` +
                            `Erfiðleikastig: ${Q.Erfiðleikastig ?? "-"} | ` +
                            `Gæðastig: ${Q.Gæðastig ?? "-"}`;
                    metaQ.style.fontSize = "14px";
                    metaQ.style.fontStyle = "italic";

                    const tilBaka = document.createElement("a");
                        tilBaka.innerHTML = "&#8592; Til baka";
                        tilBaka.href = "#";
                        tilBaka.addEventListener("click", (e) => {
                            e.preventDefault();
                            const bakaUrl = new URL(window.location.href);
                            bakaUrl.searchParams.delete("question");
                            window.history.pushState({}, "", bakaUrl.href);

                            results(questions, resultsContainer);
                        });

                    const section = document.createElement("section"); 
                    section.classList.add("main");
                    section.appendChild(titleQ);
                    section.appendChild(answerQ);
                    section.appendChild(metaQ);
                    section.appendChild(tilBaka);

                    resultsContainer.appendChild(section);
                } 
            }, Q.Spurning ?? `Spurning ${id || ""}`)
        )
        ul.appendChild(li);
    }
    resultsContainer.appendChild(ul);
}   

        

