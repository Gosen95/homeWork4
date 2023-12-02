/*  1 Given a number n (0 ≤ n ≤ 100) you should print the smallest positive number such that
its digits product is equal to n.*/

function smallNumber(n) {
   if (n === 0) {
     console.log(0);
     return;
   }
      if (n === 1) {
     console.log(1);
     return;
   }
   let result = '';   
   for (let i = 9; i > 1; i--) {  //Факторизация — это разложение функции на множители от 9 до 2
     while (n % i === 0) {      // цикл выполняется пока n делится на i без остатка
       result = i + result;  //  дообавляем  i в начало result и n делится на i
       n /= i;  //и n делится на i
     }
   }
   if (n > 1) { //  проверяет осталось ли n больше 1 после  факторизации
     console.log("Нет такого числа");
   } else {
     console.log(result);
   }
 }


 
/*  2  Find the biggest common divisor of two inserted numbers.*/






/*  3  Given a number. Print all prime factors of the number.*/


function printPrimeFactors(n) {
   while (n % 2 === 0) { // Этот цикл выполняется пока n делится на 2 без остатка
       console.log(2); // выводим 2 потому что 2 является простым множителем n
       n = Math.floor(n / 2);  //   уменьшаеm n деля на 2 и округляя в меньшую сторону
   }

   for (let i = 3; i * i <= n; i += 2) { // цикл начинаем с 3 чтобы проверить нечетные числа и на каждом круге увеличиваем на 2 чтобы пропускать четные, цикл будет выполнятся пока i * i < = 0 (i * i  это квадрат, ведь если мы не найдем до квадратного числя то и дальше не найдем значит это простое число , так уменьшим колличестви кругов)
       while (n % i === 0) {// Этот цикл выполняется пока n делится на 2 без остатка
           console.log(i);
           n = Math.floor(n / i); // уменьшаеm n деля на 2 и округляя в меньшую сторону
       }
   }

   if (n > 2) { // проверяем  есть ли еще простой множитель больше чем 2
       console.log(n);
   }
}










 /*  4  Enter a positive number. Calculate and print its factorial. ( n! = n * (n-1) * (n-2) * … * 3 * 2
* 1 , 0! = 1 )*/

function printFactorial(n) {
    if (n < 0) {// проверяем если меньше 0 значит отрицательное
        return "не бывает отрицательного факториала";
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;// умножаем результат на i
    }

    return result;
}









/* 5  Given a number n ( n >= 0 ). Print n Fibonacci number. (Fibonacci series: 0, 1, 1, 2, 3,
5, 8 …, a k = a k-1 + a k-2 )*/

function numbFibonacci(n) {
   // Если n меньше или равно 1, возвращаем n
   if (n <= 1) {
     return n;
   } else {
     // Иначе, используем цикл для вычисления числа Фибоначчи
     let a = 0, b = 1;
     for (let i = 2; i <= n; i++) {
       let temp = a + b; // временная переменная которая хранит сумму a+b, потом значение a даем b а b даем temp и обновляем цикл
       a = b;
       b = temp;
     }
     // Возвращаем результат
     return b;
   }
 }
 


 /*  6  Given a number n ( n > 0 ). Print Fibonacci series up to n.*/


 function numbFibonacci(n) {
   // Если n меньше или равно 1, возвращаем n
   if (n <= 1) {
     return n;
   } else {
     // Иначе, используем цикл для вычисления числа Фибоначчи
     let a = 0, b = 1;
     for (let i = 2; i <= n; i++) {
       let temp = a + b;
       a = b;
       b = temp;
     }
     // Возвращаем результат
     return b;
   }
 }


function seriesFibonachi(n) {
  
  for (let i = 0; numbFibonacci(i) <= n; i++) {// для каждого I вызываем numbFibonachi 
    console.log(numbFibonacci(i + `\n`));
  }
}



 