# Hópverkefni 2

## Stutt lýsing
Vefsíða sem útfærir spurningarleik **Pubquiz style** með öllum helstu grunnvirkni sem þarf til að spila árangursríkan spurningarleik. 

Spurningarnar eru lesnar úr `.csv` skrá sem er breytt í JSON format og birtir spurningur í


sem skiptist upp eftirfarandi: 

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
- Grunnvirkni
- Fullscreen API
- Nánari gögn fyrir spurningar
- Filter
- Miklu fleiri surningar

## Vefþjónn og linkur

Verkefnið er keyrt á [Netlify](https://vef1-verkefni10.netlify.app/).

## JavaScript tól notuð og tækni

### Papa parse 
Notum [Papa Parse]() til að þátta CSV skrána í JSON format
```bash
npm install papaparse
```
## Web API

### Trivia spurningar
Gögnin koma frá [is-trivia-questions](https://github.com/sveinn-steinarsson/is-trivia-questions).

## Uppsetning

### Keyra verkefnið locally
```bash
# Klóna repo
git clone <slóð>

# Fara í möppu
cd hop2

# Setja upp dependencies
npm install

# Keyra development server
npm run dev
```

### Linting

Verkefnið notar ESLint:
```bash
# Keyra lint
npm run lint
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
Guðrún Lilja Pálsdóttir *[gudrunliljapals](https://github.com/gudrunliljapals)* 
Davíð Ásmundsson  *[DavidAsmunds](https://github.com/DavidAsmunds)* 
