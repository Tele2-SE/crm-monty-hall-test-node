# Tele2 Customer Care - Tekniskt Prov

Läs igenom hela detta dokument noggrant så du inte missar någonting. Kom ihåg att ha kul :)

### Uppgiften
Monty Hall-problemet är ett spelteoretiskt problem som bygger på sannolikheter. Det är löst baserat på det amerikanska spelet "Let's make a deal". Namnet kommer från spelets presentatör, Monty Hall.
I spelet får spelaren se tre stängda dörrar - bakom en finns en bil, och bakom de två andra finns getter. Spelet börjar med att spelaren får välja en dörr, utan att öppna den. Därefter öppnar presentatören, som vet vad som finns bakom dörrarna, en av de två resterande dörrarna (men aldrig den med bilen) och visar att denna dörr inte innehåller vinsten. Spelaren får då ytterligare ett val, nämligen att byta dörr.

Frågeställningen är om chanserna att vinna ökar om spelaren byter dörr. Källa: https://sv.wikipedia.org/wiki/Monty_Hall-problemet

Din uppgift är att bygga en applikation som bevisar paradoxen. Applikationen ska kunna simulera ett givet antal spel där man på förhand har bestämt om man byter dörr eller inte.

Det tekniska kravet för lösningen är att bygga en React app med nodejs eller java backend. Nyttja gärna något av våra förberedda projekt: https://github.com/Tele2-SE för att komma igång snabbt. I gränssnittet ska man kunna mata in en siffra för antal simuleringar och välja om man vill byta dörr eller ej. Därefter kunna trycka på en knapp som startar simuleringen genom att anropa backend som utför det begärda antalet simulerade spel. När backend svarar så skrivs resultatet av simuleringarna ut.

### Inlämning
När du anser dig vara klar, gör en pull request mot detta repo så kikar vi igenom det och bokar in en tidsslot för genomgång tillsammans med dig. Under genomgången kommer vi be dig att gå igenom din applikation.


### Systemkrav
[NodeJS](https://nodejs.org)


### Development mode
#### Start client
```
cd client
npm install
npm start
```

#### Start server
```
cd server
npm install
npm start
```

#### Verifikation
React appen har en komponent som pollar appens health endpoint och skriver ut svaret. Det som skrivs ut ska vara "UP" om allt funkar som det ska.
