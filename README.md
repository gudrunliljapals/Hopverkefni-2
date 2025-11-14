# Hópverkefni 2

## Stutt lýsing
Vefsíða sem inniheldur helstu atriði sem þarf til að spila árangursríkan spurningarleik. 

Gögnin koma frá [is-trivia-questions](https://github.com/sveinn-steinarsson/is-trivia-questions) og 
spurningarnar eru geymdar í .csv skrá sem skiptist upp eftirfarandi: 

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
- Miklu fleiri surningar

## Vefþjónn og linkur

Verkefnið er keyrt á [Netlify](https://vef1-verkefni10.netlify.app/).

## JavaScript tól notuð og tækni

### Next.js og React
Þetta verkefni notar nýjustu útgáfu af **Next.js** og **React**
Uppsetningin var með eftirfarandi skipun:
```bash
npm create-next-app@latest
```
Síðan var svarað:
- *Would you like to use TypeScript with this project?* No 
- *Would you like to use ESLint with this project?* Yes
- *Would you like to use `src/` directory with this project?* Yes
- *Would you like to use experimental `app/` directory with this project?* Yes

Grunnbygging síðunnar er gerð í Next.js með React components fyrir mismunandi hluta hennar.

### Tailwind CSS
Tailwind CSS fyrir útlit og skipulag síðunnar.
Uppsetningin var með eftirfarandi skipun:
```bash
npm install tailwindcss @tailwindcss/postcss postcss
```
Síðan var búið til `postcss.config.mjs` skrá og bætt við `@tailwindcss/postcss`. 
Útlitið er útfært með klössum beint í HTML og React components. 

### shadcn
Notum [shadcn](https://ui.shadcn.com/) fyrir útfærslu á UI components
Uppsetningin var með skipuninni:
```bash
npx shadcn@latest init
```
Það voru tveir UI components notaðir á síðunni og þeir voru settir upp með:
```bash
npx shadcn@latest add button
npx shadcn@latest add input
```
## Web API

### Trivia spurningar

## Uppsetning

### Keyra verkefnið locally
```bash
# Klóna repo
git clone <slóð>

# Fara í möppu
cd hopverkefni2

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
hopverkefni2/
      ├── .github/workflows    # Github workflow fyrir playwright       
      ├── public/              # static skrár (myndir)
      ├── src/                 # source mappa fyrir verkefnið
             ├── app/          # Next.js App router fyrir síður og grunnútlit
                    ├── globals.css      # almennt útlit (Tailwind)
                    ├── globe.svg        # SVG mynd 
                    ├── layout.jsx       # layout fyrir all efni
                    └── page.jsx         # aðalsíðan 
             ├── components/ui/          # UI components úr shadcn
                              ├── button.jsx 
                              └── input.jsx
             └── lib/          # js hjálparföll og viðmót fyrir API
                    ├── fetchapi.js      # sækir gögn frá REST Web API
                    ├── globe.js         # js skrá fyrir hnöttinn
                    ├── searchCountry.js # js skrá fyrir leit í gagnagrunni
                    └── utils.js         # js hjálparföll 
      ├── tests/               # Playwright prófin
               ├── example.spec.js       # sýnispróf frá playwright
               └── tests.spec.js         # 4 próf 
      ├── .gitignore           # hunsa við git commit
      ├── README.md            # þessi skrá
      ├── components.json      # stillingar fyrir shadcn
      ├── eslint.config.mjs    # stillingar fyrir eslint
      ├── jsconfig.json        # stillingar fyrir import ofl.
      ├── next.config.mjs      # stillingar fyrir Next.js
      ├── package-lock.json    # læst dependencies
      ├── package.json         # dependencies og npm script/keyrslur
      ├── playwright.config.js # stillingar fyrir playwright prófanir
      └── postcss.config.mjs   # stillingar fyrir Tailwind/postcss
```
## Höfundar

Davíð Ásmundsson og Guðrún Lilja Pálsdóttir 
