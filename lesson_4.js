//ДЗ 4. Функции
//1. Написать функцию возврата минимума
function min(a, b)
{
	if (a != b)
		return (a < b) ? a : b;
	else
		return 'Операнды равны';
}

// Проверим все три возможные варианта
console.log(min(9,1));
console.log(min(-9,1));
console.log(min(1,1));

// 2. Подсчитать количество заданных символов в строке
function countChar(str, ch)
{
	var counter = 0;
	for (var i=0; i<str.length; i++)
	{
		if (ch == str.charAt(i))
			counter++;
	}
	return counter;
}

console.log(countChar('Would you like a cup of tea','o'));

// Написать рекурсивную функцию для определения четности
function isEven(num)
{
	// доп условие, чтобы включить в рассмотрение отрицательные значения
	if (num < 0)
		num *= -1;
	// Основная часть определения четности
	if (num == 1)
		return false;
	else if (num == 0)
		return true;
	else 
		return isEven(num -= 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-19));
