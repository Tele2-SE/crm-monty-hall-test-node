# Tele2 Customer Care - Tekniskt Prov

Läs igenom hela detta dokument noggrant så du inte missar någonting. Kom ihåg att ha kul :)

## Komma igång

1. Börja med att forka detta repo
<img width="1243" alt="Screenshot 2022-02-03 at 16 25 45" src="https://user-images.githubusercontent.com/13869296/152373025-3eba1e91-8caf-4b38-bd39-bbca6502ca59.png">
2. Klona ner repot från ditt konto
3. Gör dina ändringar
4. Commita och pusha dina ändringar
5. Skapa en pull request mot detta repo (Tele2-SE/crm-monty-hall-test-node)
6. Nu är du klar kikar vi igenom dina ändringar och bokar in en tid

### Uppgiften
Monty Hall-problemet är ett spelteoretiskt problem som bygger på sannolikheter. Det är löst baserat på det amerikanska spelet "Let's make a deal". Namnet kommer från spelets presentatör, Monty Hall.
I spelet får spelaren se tre stängda dörrar - bakom en finns en bil, och bakom de två andra finns getter. Spelet börjar med att spelaren får välja en dörr, utan att öppna den. Därefter öppnar presentatören, som vet vad som finns bakom dörrarna, en av de två resterande dörrarna (men aldrig den med bilen) och visar att denna dörr inte innehåller vinsten. Spelaren får då ytterligare ett val, nämligen att byta dörr.

Frågeställningen är om chanserna att vinna ökar om spelaren byter dörr. Källa: https://sv.wikipedia.org/wiki/Monty_Hall-problemet

Din uppgift är att

1. Bygga spelets gränsnitt.
Användaren ska kunna spela spelet manuellt

2. Implementera en kontrollfunktion som bevisar paradoxen.
Användaren ska kunna simulera ett givet antal spel där man på förhand har bestämt om man byter dörr eller inte.

Som stöd har du
1. Bifogat designförslag
2. Backend implementerad

Backend når du på följande paths
localhost:3011/simulations/:simCount/:switchDoor
localhost:3011/simulate/:switchDoor

Det tekniska kravet för lösningen är att bygga en React app med nodejs backend.


### Systemkrav
[NodeJS](https://nodejs.org)


### Development mode

#### Start client
```
cd client
npm install
npm start
```
Klienten nås via --> http://localhost:3012

#### Start server
```
cd server
npm install
npm start
```
Servern nås via -->http://localhost:3011/

#### Verifikation
React appen har en komponent som pollar appens health endpoint och skriver ut svaret. Det som skrivs ut ska vara "UP" om allt funkar som det ska.
