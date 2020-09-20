Rendszerterv
============
Mit
---
### Funkcionális terv
#### Rendszer használati esetei, lefutásaik
![A diagram showing the process of executing the various use cases for the PremiumCalculator program.](./images/use_case_flowchart.png "Use case flowchart for PremiumCalculator")
#### Képernyő tervek
- Az alkalmazás prototípusa az alap színösszeállítással
![A picture of the PremiumCalculator program with the base color settings.](./images/prototype_normal.png "The base layout.")

- Az alkalmazás prototípusa "dark mode"-ban
![A picture of the PremiumCalculator program with the dark color settings.](./images/prototype_dark.png "The dark layout.")

- Az alkalmazás prototípusa "dark mode"-ban, tablet eszközön
![A picture of the PremiumCalculator program with the dark color settings on a tablet device.](./images/prototype_tablet_dark.png "The dark layout on tablet.")

- Az alkalmazás prototípusa "dark mode"-ban, mobil eszközön
![A picture of the PremiumCalculator program with the dark color settings on a mobile device.](./images/prototype_mobile_dark.png "The dark layout on mobile.")
#### Elemek a kijelzőn
![A picture of the PremiumCalculator program, with annotations.](./images/prototype_annotated.png "Elements on the screen.")
- A: A böngészőablak, amiben az oldal meg van nyitva.
- B: A kijelző. Ezen megjelenik az aktuális szám, melyet beírtunk vagy eredményként kaptunk, illetve ha végzünk operációt, ami ehhez a számhoz vezetett
- C: A számgombok, melyek lenyomása a kijelzőn szereplő aktív szám végére konkatenálja az adott számjegyet.
- D: Előjelgomb, melynek lenyomása ha a kijelzőn aktív szám pozitív, negatívvá teszi, ha pedig az aktív szám pozitív, akkor negatívvá teszi.
- E: Tizedespont, mely lehetőve teszi a számok tizedestörtként való megadását. A szám egészrészét a gomb lenyomása előtt adjuk meg, a törtrészét pedig a gomb lenyomása után.
- F: Operációgombok, melyek lenyomása a jelenleg kijelzőn szereplő aktív számot első (vagy egyparaméteres operáció esetén egyetlen) paraméterként véve, az operációt elvégzik, vagy ha arra szükség van, az operáció elvégzése előtt extra paramétereket várnak.
- G: Eredménygomb, melynek lenyomása a kijelzőn jelenleg szereplő kifejezés értékét megjeleníti számként.
- H: Clear gomb, melynek lenyomása a kijelző tartalmát törli.
- I: Törlés gomb, melynek lenyomása a legutóbb bevitt karaktert törli.
- J: Egy legördülő színséma menü, melyre kattintva látunk egy listát, melyen változatos színsémák nevei szerepelnek. Ezek egyikét kiválasztva az adott színsémára váltunk, ami megváltoztatja a számológép és a háttér megjelenését. Ezen belül választhatunk specifikus szituációkban hasznos módokat is, például sötét mód éjszakai használatra, vagy színvak mód, melyben bizonyos színlátási zavarokat kompenzáló sémák vannak, hogy könnyen megkülönböztethetőek legyenek az eltérő színű elemek.

Miért
-----

Hogyan
------

Mikor
-----
A rendszert legkésőbb 2020. szeptember 28-ig véglegesíteni kell.

Miből
-----
A fejlesztők saját eszközeiket használva dolgoznak a projekten.
