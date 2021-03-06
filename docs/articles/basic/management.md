# Иерархия управления

Информация о системе управлениями стюардами и как отличить руководителей разного уровня.

## Функциональное руководство

Функциональным руководством занимаются `супервайзеры КРС`. 

Супервайзеры распределены по зонам. Задача супервайзеров сводится к обеспечению нормальной работы своей зоны. 

Предметом управления супервайзера являются старшие стюарды, работающие на его зоне. Супервайзер курируют работу старших, занимается внутренним контролем и координацией.

### Отличительные черты супервайзера КРС 

<div class="result" markdown>
- [x] жилет оранжевого цвета (кроме европейских и международных соревнований),
- [x] надпись на жилете «СУПЕРВАЙЗЕР», 
- [x] аккредитация с должностью «Супервайзер КРС».
</div>

### Зоны ответственности супервайзера

- Курирование работы блока
- Курирование старших стюардов блока
- Курирование трансферов между зонами
- Работа на дополнительных мероприятиях
- Организационные вопросы
- Взаимодейтвие с другими службами стадиона

## Линейное руководство

Руководством на местах (линейно) занимаются `старшие стюарды`. 

За каждым старшим (или старшими) закреплена зона и команда стюардов. 

Старший обеспечивает работу своей зоны, организует и сплочает команду, занимается решением локальных проблем во время мероприятий и взаимодействует непосредственно со своими стюардами, передавая или собирая необходимую информацию.

### Отличительные черты старшего стюарды: 

<div class="result" markdown>
- [x] жилет оранжевого цвета (кроме европейских и международных соревнований),
- [x] надпись на жилете «СТАРШИЙ СТЮАРД», 
- [x] аккредитация с должностью «Старший контролёр-распорядитель».
</div>

### Зоны ответственности старшего стюарда

- Руководство командой

## Организационная структура управления

``` mermaid
graph LR
  A[ЦПВП] -->|Курирует| B[Супервайзер];
  B -->|Руководит| C[Старший стюард];
  B -->|Курирует| E[Стюард];
  C -->|Руководит| E;
  D[Служба безопасности] -->|Руководит| B;
  D[Служба безопасности] -->|Руководит| C;
  A -->|Обеспечивает| E;
```

