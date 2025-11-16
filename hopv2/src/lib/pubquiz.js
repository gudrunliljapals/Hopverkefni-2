// skilgreina path að static spurninga database 
//const flokkar = ["Flokkanúmer", "Undirflokkur", "Erfiðleikastig", "Gæðastig", "Spurning", "Svar"]; 6 lengd

export function byrjaleik(questions){

    const fjoldi=questions.length;
    var count=0;                  //talning, á hvaða spurningu við erum
    var nuverandiSpurning=questions[0];   // heldur um núverandi spurningu
    var synaSpurningu = true; //bool til þess að viðhalda hvort við séum að sýna spurn eða svar

    //nánari upplýsingar
    var flokkur = nuverandiSpurning[0];
    var undirflokkur = nuverandiSpurning[1];
    var erfidleiki = nuverandiSpurning[2];

    const flokkar = {
        1: "Almenn kunnátta",
        2: "Náttúra og vísindi",
        3: "Bókmenntir og listir",
        4: "Saga",
        5: "Landafræði",
        6: "Skemmtun og afþreying",
        7: "Íþróttir og tómstundir"
    };

    const erfidleikastig = {
        1: "Létt", 
        2: "Meðal", 
        3: "Erfið"
    }

    document.getElementById("spurninga-flokkur").textContent=flokkar[flokkur];
    document.getElementById("spurninga-undirflokkur").textContent=undirflokkur;
    document.getElementById("spurninga-erfidleiki").textContent=("Erfiðleikastig: "+erfidleikastig[erfidleiki]);

    //fall til að uppfæra nanari uppl. þegar skipt er um spurningar
    function uppfaeraDeets(){
        flokkur = nuverandiSpurning[0];
        undirflokkur = nuverandiSpurning[1];
        erfidleiki = nuverandiSpurning[2];
        document.getElementById("spurninga-flokkur").textContent=flokkar[flokkur];
        document.getElementById("spurninga-undirflokkur").textContent=undirflokkur;
        document.getElementById("spurninga-erfidleiki").textContent=("Erfiðleikastig: "+erfidleikastig[erfidleiki]);

    }

    //initializear forritið í fyrstu spurningu
    var nuverandiSpurningText=nuverandiSpurning[4]; 
    document.getElementById("spurninga-box").textContent=nuverandiSpurningText;

    function tilbaka(){
        if(count!==0){
            count-=1;
            nuverandiSpurning = questions[count];
            var spurning = nuverandiSpurning[4];
            document.getElementById("spurninga-box").textContent=spurning;
            synaSpurningu=true;
            uppfaeraDeets();
        }
        else{
            alert("Þú ert á fyrstu spurningunni!")
        }
    }


    function next(){
        console.log("afram");
        if(count!==(fjoldi-1)){
            count+=1;
            nuverandiSpurning = questions[count];
            var spurning = nuverandiSpurning[4];
            document.getElementById("spurninga-box").textContent=spurning;
            synaSpurningu=true;
            uppfaeraDeets();
        }
        else{
            alert("Þú ert á seinustu spurningunni!")
        }
    }
    
    //skilgreinir sýna svar sýnir svar ef spurningin er uppi, sýnir spurningu ef svarið er uppi
    function synaSvar(){
        if(synaSpurningu){
            var svar = nuverandiSpurning[5];
            document.getElementById("spurninga-box").textContent=svar;
            synaSpurningu = false;
        }
        else{
            var spurning = nuverandiSpurning[4];
            document.getElementById("spurninga-box").textContent=spurning;
            synaSpurningu = true;
        }
    }

    const tilBakaButton = document.querySelector("#button-til-baka")
    const synaSvarButton = document.querySelector("#button-svar");
    const nextButton = document.querySelector("#button-next");


    tilBakaButton.addEventListener("click", async (event) => {
        event.preventDefault();
        tilbaka();
    });
    
    nextButton.addEventListener("click", async (event) => {
        event.preventDefault();
        next();
    });

    synaSvarButton.addEventListener("click", async (event) => {
        event.preventDefault();
        synaSvar();
    });

    //hægri og vinstri lyklar færa spurningarnar fram og til baka, Spacebar sýnir svarið.
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowLeft":
                event.preventDefault(); 
                tilbaka();
                break;

            case "ArrowRight":
                event.preventDefault(); 
                next();
                break;

            case " ":
                event.preventDefault(); 
                synaSvar();
                break;
        }
    });

    //hér
    const leikjaskjar = document.querySelector("#game-screen");
    document.addEventListener("keydown", (event) => {
        if(event.key === "f"){
            if(!document.fullscreenElement){
                leikjaskjar.requestFullscreen();
            }
            else{
                document.exitFullscreen?.();
            }
        }
    });
}