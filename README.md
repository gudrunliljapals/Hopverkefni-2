# Hópverkefni 2

## Stutt lýsing
Vefsíða sem inniheldur helstu atriði sem þarf til að spila árangursríkan spurningarleik. 

Spurningarnar eru geymdar í .csv skrá sem skiptist upp eftirfarandi: 

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

### Next.js, React og Tailwind CSS
Þetta verkefni notar nýjustu útgáfu af **Next.js**, **React** og **Tailwind CSS**
Uppsetningin var með eftirfarandi skipun:
```bash
npm create-next-app@latest
```
Síðan var svarað:
- *Would you like to use TypeScript with this project?* No 
- *Which linter would you like to use?* Eslint
- *Would you like to use React Compiler?* Yes
- *Would you like to use Tailwind CSS?* Yes
- *Would you like your code inside a `src/`directory?* Yes
- *Would you like to use App Router?* Yes
- *Would you like to customize the import alias?* No

Grunnbygging síðunnar er gerð í Next.js með React components fyrir mismunandi hluta hennar.

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
hop2/   
      ├── font/              # static skrár 
      ├── src/                 # source mappa fyrir verkefnið
             ├── app/          # Next.js App router fyrir síður og grunnútlit
                    ├── globals.css      # almennt útlit (Tailwind)
                    ├── globe.svg        # SVG mynd 
                    ├── layout.jsx       # layout fyrir all efni
                    └── page.jsx         # aðalsíðan 
             └── lib/          # js hjálparföll og viðmót fyrir API
                    ├── fetchapi.js      # sækir gögn frá REST Web API
                    ├── globe.js         # js skrá fyrir hnöttinn
                    ├── searchCountry.js # js skrá fyrir leit í gagnagrunni
                    └── utils.js         # js hjálparföll 
      ├──.gitignore           # hunsa við git commit
      ├── README.md            # þessi skrá
      ├── eslint.config.mjs    # stillingar fyrir eslint
      ├── package-lock.json    # læst dependencies
      └── package.json         # dependencies og npm script/keyrslur
```
## Höfundar

Davíð Ásmundsson og Guðrún Lilja Pálsdóttir 
