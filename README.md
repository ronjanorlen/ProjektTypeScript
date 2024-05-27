# DT208G - Programmering i TypeScript, Projektuppgift

Detta repository innehåller koden för en webbplats för ett fiktivt universitet som heter Björks. 
På webbplatsen kan besökare söka bland kurser och ämnen samt skapa ett eget ramschema.

## Om webbplatsen

Webbplatsen är byggd med ramverket Angular och använder HTML, SCSS och TypeScript. 
Innehåll på webbplatsen läses ut och hanteras genom Angulars komponenter, moduler och databindings. Besökare kan söka på kurser, filtrera på kursnamn, kurskod, poäng och ämne. 
En länk till kursplanen för varje kurs finns även tillgänglig samt möjlighet att lägga till 
en kurs i det egna ramschemat. 

## Funktioner

### Följande funktioner är tillgängliga på webbplatsen
* Sökfunktion: Möjlighet att söka på kurskod eller kursnamn.
* Filtrering: Möjlighet att filtrera kurser på specifikt ämne.
* Sortering: Möjlighet att sortera kurser efter kurskod, kursnamn, poäng och ämne. Detta görs genom att klicka på rubriken för respektive kolumn.
* Skapa eget ramschema: Möjlighet att lägga till kurser till ett eget ramschema. Detta lagras och hanteras av localStorage vid sidomladdning.
* Paginering: Möjlighet att klicka framåt och bakåt mellan flera sidor för kurslistan. 


# Arbetsgång

### Tekniker och verktyg som använts för att bygga webbplatsen
* Angular och TypeScript.
* Interface för att skapa struktur på kursdata.
* Services för hantering av alla kurser samt ramschemat.
* LocalStorage för att spara och ladda in kurser som sparats i ramschemat.
* HttpClient för att hämta kursdata från extern JSON-fil.
* NgxPagination: För paginering av kurslista.
* Routing för att hantera navigering mellan olika sidor.
* Netlify för publicering av webbplats.


## Skapad:
Av: Ronja Norlén  
Kurs: Programmering i TypeScript  
Program: Webbutveckling  
Skola: Mittuniversitetet  
År: 2024
