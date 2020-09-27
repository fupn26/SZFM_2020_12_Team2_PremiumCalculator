Tesztelési jegyzőkönyv
======================

| Tesztelő  | Időpont | Utolsó commit | Elvégzett művelet | Kapott eredmény | Helyes-e a kapott eredmény | Mit tesztelt ezzel? |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Fürjes-Benke Péter |  2020.09.17. 11:30 | d52fae5 | Szám billentyűk lenyomása | Megfelelő számok jelennek  meg az output mezőben. | Igen | Számbillentyűk lenyomásának helyes működése. 
| Fürjes-Benke Péter | 2020.09.17. 11:35 | d52fae5 | "+", "*", "/" bevitele billentyűzettel | "+", "*", "/" megjelenik az output mezőben | Igen | "+", "*", "/" műveleti jel billentyűzettel történő bevitelének helyesége.|
| Fürjes-Benke Péter | 2020.09.17. 11:39 | d52fae5 | "-" billenytű lenyomása ha nem szám az utolsó karakter | Negatív előjelet ad hozzá a kimenethez. | Igen | "-" jel helyes működése abban az esetben, ha nem szám van előtte, valamint ha szám van előtte.|
| Fürjes-Benke Péter | 2020.09.17. 11:42 | d52fae5 | "-" billenytű lenyomása ha szám az utolsó karakter | Kivonás műveleti jelet ad hozzá a kimenethez. | Igen | "-" billentyű helyes működése abban az esetben, ha nem szám van előtte.|
| Fürjes-Benke Péter | 2020.09.17. 11:49 | d52fae5 | "(" és ")" bevitele billentyűzettel | a "(" és ")" megjelenik a megfelelő billentyűzet lenyomásával. | Igen | Zárójelezés billentyűzettel történő alkalmazásának helyessége. |
| Fürjes-Benke Péter | 2020.09.17. 11:51 | d52fae5 | "=", Enter, Numpad Enter lenyomása. | Az eddig beírt kifejezés kiértékelődik. | Igen | Az Enter és "=" helyes működése billentyűzet használata során.|
| Fürjes-Benke Péter |  2020.09.17 11:55 | d52fae5 | Tizedes vessző beírása "." billentyűvel. | A tizedespont megjelenik. | Igen | A tizedes vessző megjelenése a "." billentyű lenyomásakor.|
| Fürjes-Benke Péter | 2020.09.17 12:00 | d52fae5 | A "," bevitele billentyűzettel | A tizedespont megjelenik. | Igen | A tizedespont megjelenése a "," billentyűzettel történő bevitele során. |
| Fürjes-Benke Péter | 2020.09.17. 12:07 | d52fae5 | A Backspace billentyű lenomyása. | A kimenet utolsó karaktere törlődik. | Igen  | A Backspace billentyű helyes működése, mint Del gomb. |
| Fürjes-Benke Péter | 2020.09.27. 12:09 | d52fae5 | Enter megnyomása azután, hogy az egérrel rákattintottunk egy gombra a felületen. | Kiértékelődik az eddig beírt kifejezés. | Igen | Annak vizsgálata, hogy az Enter billentyű minden esetben a kiértékelést végzi el és nem egy fókuszban maradt gomb műveletét. |
| Fürjes-Benke Péter | 2020.09.17. 12:51 | 3da707d | Az Enter megnyomása és a kifejezés kiértékelése. | A kiértékelt kifejezés és annak eredménye megjelenik a History-ban. | Igen | Annak vizsgálata, hogy az elvégzett műveletek bekerülnek-e a History-ba. |
| Fürjes-Benke Péter | 2020.09.17. 12:59 | 3da707d | Calculation History egyik sorára való rákattintás. | Az adott sorban lévő kifejezés betöltődik a kimeneti területbe. | Igen | Annak vizsgálata, hogy helyesen működik-e az előzmények visszatöltése. |
| Fürjes-Benke Péter | 2020.09.17. 18:29 | b2c098c | A "^" jel bevitele billentyűvel. | A hatványozás műveletet jelölő "^" megjelenik a kimenet részen. | Igen | A "^" billentyű lenyomásának helyes működésének vizsgálata. |
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
| Mezei Botond |  2020.09.27 11:50  |  8b14297  |  sin(0)  |  0  |  Igen  |  Szinusz operáció helyessége  |
| Mezei Botond |  2020.09.27 11:51  |  8b14297  |  sin(5*pi/2)  |  1  |  Igen  |  Szinusz operáció helyessége  |
| Mezei Botond |  2020.09.27 11:53  |  8b14297  |  cos(0)  |  1  |  Igen  |  Koszinusz operáció helyessége  |
| Mezei Botond |  2020.09.27 11:53  |  8b14297  |  cos(2*pi)  |  1  |  Igen  |  Koszinusz operáció helyessége  |
| Mezei Botond |  2020.09.27 11:55  |  8b14297  |  tan(0)  |  0  |  Igen  |  Tangens operáció helyessége  |
| Mezei Botond |  2020.09.27 11:55  |  8b14297  |  tan(1)  |  1.557407725  |  Igen  |  Tangens operáció helyessége  |
| Mezei Botond |  2020.09.27 11:56  |  8b14297  |  log(10)  |  1  |  Igen  |  Logaritmus operáció helyessége  |
| Mezei Botond |  2020.09.27 11:56  |  8b14297  |  log(100)  |  2  |  Igen  |  Logaritmus operáció helyessége  |
| Mezei Botond |  2020.09.27 11:57  |  8b14297  |  abs(-8)  |  8  |  Igen  |  Abszolútérték operáció helyessége  |
| Mezei Botond |  2020.09.27 11:57  |  8b14297  |  abs(8)  |  8  |  Igen  |  Abszolútérték operáció helyessége  |
| Mezei Botond |  2020.09.27 11:58  |  8b14297  |  sqrt(9)  |  3  |  Igen  |  Négyzetgyök operáció helyessége  |
| Mezei Botond |  2020.09.27 11:58  |  8b14297  |  sqrt(-9)  |  Error: invalid expression  |  Igen  |  Négyzetgyök operáció helyessége  |
| Mezei Botond |  2020.09.27 11:59  |  8b14297  |  5^-1  |  0.2  |  Igen  |  Reciprok operáció helyessége  |
| Mezei Botond |  2020.09.27 11:59  |  8b14297  |  0.5^-1  |  2  |  Igen  |  Reciprok operáció helyessége  |
| Mezei Botond |  2020.09.27 12:00  |  8b14297  |  6^3  |  216  |  Igen  |  Hatványozás operáció helyessége  |
| Mezei Botond |  2020.09.27 12:00  |  8b14297  |  -7^3  |  -343  |  Igen  |  Hatványozás operáció helyessége  |
| Mezei Botond |  2020.09.27 12:01  |  8b14297  |  3*sin(pi/2)+4  |  7  |  Igen  |  Precedencia helyessége összetettebb műveletek esetén  |
| Mezei Botond |  2020.09.27 12:04  |  8b14297  |  3+2/6-9*sin(6+3)  |  -0.375733034  |  Igen  |  Precedencia helyessége összetettebb műveletek esetén  |
| Mezei Botond |  2020.09.27 13:54  |  c0c7563  |  9.3*sin(0)+6/3  |  2  |  Igen  |  Precedencia helyessége összetettebb műveletek esetén  |
| Mezei Botond |  2020.09.27 13:56  |  c0c7563  |  abs(tan(0)-6)+6*log(10)^3  |  24  |  Igen  |  Precedencia helyessége összetettebb műveletek esetén  |
| Bartha Balázs | 2020.09.27 11:20 | d52fae5 | Dark mode színséma kiválasztása | Az oldal a style_dark.css-re vált | Igen | A színsémaválasztó lista működése |
| Bartha Balázs | 2020.09.27 11:23 | d52fae5 | Dark mode színséma kiválasztása után f5 gombbal frissítés | Továbbra is a dark mode van kiválasztva, és még mndig a style_dark.css az aktív | Igen | A színsémaválasztó lista működése |
| Bartha Balázs | 2020.09.27 11:26 | d52fae5 | Hosszabb kifejezés beírása, mint ami egy sorban elfér | Az output terület görgethetővé válik | Igen | Az output_area helyes CSS beállítását |
| Bartha Balázs | 2020.09.27 11:31 | ff27a42 | Egy 0, majd egy 5 számjegy beírása | 5 |  Igen | Az 1-nél nagyobb számok 0 karakterrel való kezdésének tiltása |
| Bartha Balázs | 2020.09.27 11:34 | ff27a42 | Egy 0, egy tizedespont, majd egy 3 számjegy beírása  | 0.3 | Igen  | Az 1-nél kisebb számok 0 karakterrel való kezdésének engedélyezése |
| Bartha Balázs | 2020.09.27 11:36 | ff27a42 | ((()) | Error: unbalanced brackets | Igen | Az egyenlőtlen zárójelszám esetén történő hibakiírás |
| Bartha Balázs | 2020.09.27 11:38  | ff27a42 | ) * (  | Error: unbalanced brackets | Igen | Az utolsó zárójel nyíltsága esetén történő hibakiírás |
| Bartha Balázs | 2020.09.27 11:40 | ff27a42 | ANS gomb lenyomása oldal betöltése után azonnal | Semmi | Igen | Az ANS gomb használatának tiltása, mikor még nincs a memóriában eredmény |
| Bartha Balázs | 2020.09.27 11:42 | ff27a42 | ANS gomb lenyomása 6+5 művelet elvégzése után  | 11 | Igen  | Az ANS gomb helyes működése |
| Bartha Balázs | 2020.09.27 11:44  | ff27a42 | 5 gomb tízszeri lenyomása | 5,555,555,555  | Igen | Nagy számok helyes tördelése |
