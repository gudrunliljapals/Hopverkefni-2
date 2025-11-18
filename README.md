# Hópverkefni 2

## Stutt lýsing
Vefsíða sem útfærir spurningarleik **Pubquiz style** með öllum helstu grunnvirkni sem þarf til að spila árangursríkan spurningarleik. 

Spurningarnar eru lesnar úr `.csv` skrá sem er breytt í JSON format og birtir spurningar.

Spurningarnar skiptast upp á eftirfarandi hátt: 

| Dálkanúmer | Valfrjálst | Lýsing |
|---|---|---|
| 1 | Nei | Flokkanúmer |
| 2 | Já | Undirflokkur ef til staðar |
| 3 | Nei | Erfiðleikastig: **1**: Létt, **2**: Meðal, **3**: Erfið |
| 4 | Já | Gæðastig: **1**: Slöpp, **2**: Góð, **3**: Ágæt |
| 5 | Nei | Spurningin |
| 6 | Nei | Svarið  |

| Flokkanúmer | Flokkanafn |
|---|---|
| 1 | Almenn kunnátta |
| 2 | Náttúra og vísindi |
| 3 | Bókmenntir og listir |
| 4 | Saga |
| 5 | Landafræði |
| 6 | Skemmtun og afþreying | 
| 7 | Íþróttir og tómstundir |

## Grunnvirkni og aukavirkni 
Virkni síðunnar skiptist í eftifarandi:

### Leita og birta spurningar
- Sækja og birta spurningar úr CSV gagnagrunni
- Þátta gögnin með Papa Parse 
- Leita og sía gagnagrunninn miðað við hvað notandi vill, þetta er hægt eftir:
  
      - Flokkanafni
      - Erfiðaleikastigi
- Fjöldi spurninga sem birtast er alltaf handahófskenndt valið í gagnagrunninum út frá þeim skilyrðum sem notandi velur
  
      - Notandi setur inn hversu margar spurningar hann vill fá í leikinn (lágmark 1)

### Nánari upplýsingar um spurningu
- Með hverri spurningu birtast helstu upplýsingar um hana sem fylgja úr gagnagrunninum
- Ef notandi ýtir á spurninguna þá birtast þessar upplýsingar:
  
      - Svar við spurningunni
      - Flokkanafn
      - Undirflokkur (ef skilgreindur, annars tómt)
      - Erfiðleikastig
      - Gæðastig (ef skilgreint, annars tómt)
- Til að fara tilbaka í upphaflegu spurningarnar þá er takki fyrir það neðst

### Spilaumhverfið 
- Þegar notandi hefur valið sér spurningarnar fyrir leikinn þá ýtir hann á `-> SPILA <-` og spurningarnar sem hann valdi verða spilaðar í öðru sérstöku umhverfi á sömu síðu
- Í spilaumhverfinu er hægt:

      - að hafa leikinn í fullscreen til að bæta leikjaupplifunina
      - ýta á **esc** á lyklaborðinu til að fara úr fullscreen
      - fara áfram/tilbaka um spurningarnar með tökkum fyrir neðan spurninguna
      - birta svörin við spurningunni með takka sem er fyrir neðan spurninguna
      - Fyrir ofan spurninguna birtist flokkanafn og erfiðleikastig
      - Til að hætta að spila er sér takki neðst sem tengir notanda aftur á upphafsspunkt spurningarleiksins

## Vefþjónn og linkur

Verkefnið er keyrt á [Netlify](https://vef1-verkefni10.netlify.app/).

## JavaScript tól notuð og tækni

### Papa parse 
Notum [Papa Parse]() til að þátta CSV skrána í JSON format
```bash
npm install papaparse
```
## Gagnagrunnur

### Trivia spurningar
Gögnin koma frá [is-trivia-questions](https://github.com/sveinn-steinarsson/is-trivia-questions).

## Uppsetning

### Keyra verkefnið locally
```bash
# Klóna repo
git clone <slóð>

# Fara í möppu
cd hopv2

# Setja upp dependencies
npm install

# Keyra development server
npm run dev
```

### Linting

Verkefnið notar ESLint fyrir Javascript:
```bash
# Keyra lint
npm run lint
```
og Stylelint fyrir scss: 
```bash
# Keyra lint
npm run lint:scss
```
## Skráaruppbygging
```
README.md  # þessi skrá
hop2/   
      ├── font/                # leturgerð
      ├── src/                 # source mappa fyrir verkefnið
             ├── database/          # gagnagrunnur
                         └── questions.csv   # gagnagrunnurinn í .csv
             ├── lib/               # js hjálparföll 
                    ├── convertGame.js       # breytir gagnagrunni úr objects -> 2D array
                    ├── elements.js          # js hjálparföll fyrir lista og tæma 
                    ├── fetchQ.js            # sækir gögn frá gagnagrunni og parsar í array format
                    ├── mapObject.js         # breytir gagnagrunni úr 2D array -> objects
                    ├── pubquiz.js           # spila leikinn sjálfan
                    ├── resultsQ.js          # birta spurningar
                    └── searchQ.js           # js skrá fyrir leit í gagnagrunni eftir filter
             ├── myndir/   # mappa með myndum fyrir vef
             ├── sidur/
                      └── spurningarSpila.html       # leikjasíðan fyrir upphafsstillingu og leik
             ├── styles/            # mappa fyrir útlit á síðu
                       ├── base.scss         # grunnstillingar á breytum 
                       ├── footer.scss       # stíll á footer
                       ├── fullscreen.scss   # stillingar á fullscreen útliti
                       ├── gamescreen.scss   # útlitið á spurningarleiknum eftir upphafsstillingar
                       ├── intro.scss        # útlitið á index síðunni
                       ├── mainspurningar.scss  # útlitið á filter og birta spurningar fyrir leikinn 
                       ├── nav.scss          # útlitið á valmynd
                       ├── upphafspur.scss   # útlitið á takkanum neðst á index
                       └── utils.scss        # stilling fyrir read only view
             ├── index.html    # aðal forsíðan
             ├── main.js       # aðal javascript skráin fyrir allar virknir á síðunni
             └── styles.scss   # aðal scss skráin sem útfærir útlitið á síðunni í heild
      ├── .gitignore           # hunsa við git commit
      ├── .stylelintrc.json    # stillingar fyrir stylelint       
      ├── eslint.config.mjs    # stillingar fyrir eslint
      ├── package-lock.json    # læst dependencies
      └── package.json         # dependencies og npm script/keyrslur
```
## Höfundar
Guðrún Lilja Pálsdóttir *[gudrunliljapals](https://github.com/gudrunliljapals)* **glp5**

Davíð Ásmundsson  *[DavidAsmunds](https://github.com/DavidAsmunds)*  **daa41**
