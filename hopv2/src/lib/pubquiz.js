// skilgreina path að static spurninga database 
//const flokkar = ["Flokkanúmer", "Undirflokkur", "Erfiðleikastig", "Gæðastig", "Spurning", "Svar"]; 6 lengd

export function byrjaleik(questions){

    const fjoldi=questions.length;
    var count=0;                  //talning, á hvaða spurningu við erum
    var nuverandiSpurning=questions[0];   // heldur um núverandi spurningu
    var synaSpurningu = true; //bool til þess að viðhalda hvort við séum að sýna spurn eða svar

    //initializear forritið í fyrstu spurningu
    var nuverandiSpurningText=nuverandiSpurning[4]; 
    document.getElementById("spurninga-box").textContent=nuverandiSpurningText;

    const tilBakaButton = document.querySelector("#button-til-baka")
    const synaSvarButton = document.querySelector("#button-svar");
    const nextButton = document.querySelector("#button-next");

    tilBakaButton.addEventListener("click", async (event) => {
        event.preventDefault();
        console.log("tilbaka");
        if(count!==0){
            count-=1;
            nuverandiSpurning = questions[count];
            var spurning = nuverandiSpurning[4];
            document.getElementById("spurninga-box").textContent=spurning;
            synaSpurningu=true;
        }
        else{
            alert("Þú ert á fyrstu spurningunni!")
        }
    });

    nextButton.addEventListener("click", async (event) => {
        event.preventDefault();
        console.log("afram");
        if(count!==(fjoldi-1)){
            count+=1;
            nuverandiSpurning = questions[count];
            var spurning = nuverandiSpurning[4];
            document.getElementById("spurninga-box").textContent=spurning;
            synaSpurningu=true;
        }
        else{
            alert("Þú ert á seinustu spurningunni!")
        }
    });

    //skilgreinir sýna svar takkan, sýnir svar ef spurningin er uppi, sýnir spurningu ef svarið er uppi
    synaSvarButton.addEventListener("click", async (event) => {
        if(synaSpurningu){
            event.preventDefault();
            var svar = nuverandiSpurning[5];
            document.getElementById("spurninga-box").textContent=svar;
            synaSpurningu = false;
        }
        else{
            event.preventDefault();
            var spurning = nuverandiSpurning[4];
            document.getElementById("spurninga-box").textContent=spurning;
            synaSpurningu = true;
        }
    });
}