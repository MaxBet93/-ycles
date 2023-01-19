//Вивести на сторінку в один рядок через кому числа від 10 до 20.
document.write("Вивести на сторінку в один рядок через кому числа від 10 до 20.<br>");
let tmp = "";
for (let i = 10; i <= 20; i++){
  tmp = tmp + i + ",";
}
document.write(tmp + "<br><br>");

//Вивести квадрати чисел від 10 до 20.
document.write("Вивести квадрати чисел від 10 до 20.<br>");
let num = "";
for (let i = 10; i <= 20; i++){
  num = i * i + ",";
  document.write(num);
}
document.write("<br><br>");

//Вивести таблицю множення на 7.
document.write("Вивести таблицю множення на 7.<br>");
let j = 7;
for (let i = 1; i <= 9; i++){
    document.write((i*j) + ",");
}
document.write("<br><br>");

//Знайти суму всіх цілих чисел від 1 до 15.
document.write("Знайти суму всіх цілих чисел від 1 до 15.<br>");
for (let i = 1; i <=15; i++){
  for( let j = 1; j <= 15; j++){
    number = i + j 
      document.write(number + ",");
  }
  document.write("<br>");
}
document.write("<br>");
//Знайти добуток усіх цілих чисел від 15 до 35.
document.write("Знайти добуток усіх цілих чисел від 15 до 35.<br>");
for (let i = 15; i <=35; i++){
  for( let j = 15; j <= 35; j++){
    number = i * j 
      document.write(Math.trunc(number) + ",");
  }
  document.write("<br>");
}
document.write("<br>");
//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
document.write("Знайти середнє арифметичне всіх цілих чисел від 1 до 500.<br>");
let sum = 0;
for (let i = 0; i <= 500; i++){
  sum += i/500
}
document.write(sum);
document.write("<br><br>");
//Вивести суму лише парних чисел в діапазоні від 30 до 80.
document.write("Вивести суму лише парних чисел в діапазоні від 30 до 80.<br>");
for (let i = 30; i <=80; i=i+2){
  for( let j = 30; j <= 80; j=j+2){
    number = i + j 
      document.write(number + ",");
  }
}
document.write("<br><br>");
//Надрукувати повну таблицю множення від 1 до 10.
document.write("Надрукувати повну таблицю множення від 1 до 10.<br>");
for (let i = 1; i <=10; i++){
  for( let j = 1; j <= 10; j++){
    number = i * j 
      document.write(Math.trunc(number) + ",");
  }
  document.write("<br><br>");
}
//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
document.write("Вивести всі числа в діапазоні від 100 до 200 кратні 3.<br>");
for (let i = 100; i < 200; i++){
  if(i % 3 == 0)
  document.write(i + " ")
}