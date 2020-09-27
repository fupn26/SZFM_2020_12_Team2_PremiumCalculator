Tesztelési jegyzőkönyv
======================

| Tesztelő  | Időpont | Utolsó commit | Elvégzett művelet | Kapott eredmény | Helyes-e a kapott eredmény | Mit tesztelt ezzel? |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Fürjes-Benke Péter |   |   |   |   |   |  |
| Fürjes-Benke Péter |   |   |   |   |   |  |
| Fürjes-Benke Péter |   |   |   |   |   |  |
| Fürjes-Benke Péter |   |   |   |   |   |  |
| Fürjes-Benke Péter |   |   |   |   |   |  |
| Fürjes-Benke Péter |   |   |   |   |   |  |
| Fürjes-Benke Péter |   |   |   |   |   |  |
| Fürjes-Benke Péter |   |   |   |   |   |  |
| Fürjes-Benke Péter |   |   |   |   |   |  |
| Fürjes-Benke Péter |   |   |   |   |   |  |
| Szabó Benedek |  2020.09.27 11:15 | d52fae5  | 55+6  |  61 | Igen  | Összeadás művelet helyessége |
| Szabó Benedek |  2020.09.27 11:15 |  d52fae5 | 46-62  | -16  | Igen  | Kivonás művelet helyessége |
| Szabó Benedek | 2020.09.27 11:15  |  d52fae5 | 63*5  | 315  | Igen  | Szorzás művelet helyessége |
| Szabó Benedek |  2020.09.27 11:15 | d52fae5  |  315/5 | 63  | Igen  | Osztás művelet helyessége |
| Szabó Benedek | 2020.09.27 11:15  | d52fae5  | 314/5  |  62.8 | Igen  | Osztás művelet helyessége nem egész eredmény esetén |
| Szabó Benedek | 2020.09.27 11:15  |  d52fae5 | 12+6*2  |  24 | Igen  | Precedencia kezelése az alapműveleteknél |
| Szabó Benedek |  2020.09.27 11:15 | d52fae5  |  69-3*2 | 63  |  Igen | Precedencia kezelése az alapműveleteknél |
| Szabó Benedek |  2020.09.27 11:15 |  d52fae5 | 14/7+3*6  | 20  |  Igen | Precedencia kezelése az alapműveleteknél |
| Szabó Benedek |  2020.09.27 11:15 |  d52fae5 | 3pi+2  |  11.42477797 |  Igen | Pi gomb helyes kezelése, ha szám után írjuk, automatikusan szorzás művelet alkalmazása |
| Szabó Benedek |  2020.09.27 11:15 | d52fae5  | pi = | 3.141592653589793  |  Igen | Helyes pi érték |
| Mezei Botond |   |   |   |   |   |  |
| Mezei Botond |   |   |   |   |   |  |
| Mezei Botond |   |   |   |   |   |  |
| Mezei Botond |   |   |   |   |   |  |
| Mezei Botond |   |   |   |   |   |  |
| Mezei Botond |   |   |   |   |   |  |
| Mezei Botond |   |   |   |   |   |  |
| Mezei Botond |   |   |   |   |   |  |
| Mezei Botond |   |   |   |   |   |  |
| Mezei Botond |   |   |   |   |   |  |
| Bartha Balázs | 2020.09.27 11:20 | d52fae5 | dark mode színséma kiválasztása | az oldal a style_dark.css-re vált | Igen | a színsémaválasztó lista működése |
| Bartha Balázs | 2020.09.27 11:23 | d52fae5 | dark mode színséma kiválasztása után f5 gombbal frissítés | továbbra is a dark mode van kiválasztva, és még mndig a style_dark.css az aktív | Igen | a színsémaválasztó lista működése |
| Bartha Balázs | 2020.09.27 11:26 | d52fae5 | hosszabb kifejezés beírása, mint ami egy sorban elfér | az output terület görgethetővé válik | Igen | az output_area helyes CSS beállítását |
| Bartha Balázs | 2020.09.27 11:31 | ff27a42 | egy 0, majd egy 5 számjegy beírása | 5 |  Igen | Az 1-nél nagyobb számok 0 karakterrel való kezdésének tiltása |
| Bartha Balázs | 2020.09.27 11:34 | ff27a42 | egy 0, egy tizedespont, majd egy 3 számjegy beírása  | 0.3 | Igen  | Az 1-nél kisebb számok 0 karakterrel való kezdésének engedélyezése |
| Bartha Balázs | 2020.09.27 11:36 | ff27a42 | ((()) | Error: unbalanced brackets | Igen | az egyenlőtlen zárójelszám esetén történő hibakiírás |
| Bartha Balázs | 2020.09.27 11:38  | ff27a42 | ) * (  | Error: unbalanced brackets | Igen | az utolsó zárójel nyíltsága esetén történő hibakiírás |
| Bartha Balázs | 2020.09.27 11:40 | ff27a42 | ANS gomb lenyomása oldal betöltése után azonnal | semmi | Igen | az ANS gomb használatának tiltása, mikor még nincs a memóriában eredmény |
| Bartha Balázs | 2020.09.27 11:42 | ff27a42 | ANS gomb lenyomása 6+5 múvelet elvégzése után  | 11 | Igen  | az ANS gomb helyes működése |
| Bartha Balázs | 2020.09.27 11:44  | ff27a42 | 5 gomb tízszeri lenyomása | 5,555,555,555  | Igen | nagy számok helyes tördelése |
