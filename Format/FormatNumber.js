// аналог VBA: FormatNumber(Expression[,NumDigitsAfterDecimal [,IncludeLeadingDigit [,UseParensForNegativeNumbers [,GroupDigits]]]])=>Variant(String)

function FormatNumber(value,
    numDigitsAfterDecimal = 2,
    includeLeadingDigit = true,
    useParensForNegativeNumbers = false,
    groupDigits = false)
{
    let formattedNumber = value.toFixed(numDigitsAfterDecimal);

    // Обработка ведущего нуля
    if (!includeLeadingDigit && formattedNumber.startsWith('0.'))
        formattedNumber = formattedNumber.slice(1); // Удаляем ведущий ноль

    // Обработка группировки цифр (тысячные разделители)
    if (groupDigits)
    {
        let parts = formattedNumber.split('.'); // Разделяем целую и дробную части
        
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Добавляем запятые для тысячных
        formattedNumber = parts.join('.'); // Соединяем части обратно
    }

    // Обработка скобок для отрицательных чисел
    if (useParensForNegativeNumbers && value < 0)
        formattedNumber = `(${formattedNumber})`; // Оборачиваем отрицательное число в скобки
    else if (value < 0)
        formattedNumber = `-${formattedNumber}`; // Добавляем минус перед числом

    return formattedNumber;
}

// Примеры использования
console.log(formatNumber(12345.6789, 1)); // "12,345.7" - 1 знак после запятой
console.log(formatNumber(12345.6789, 2, false)); // "12,345.68" - ведущий ноль не включается
console.log(formatNumber(-12345.6789, 2, true, true)); // "(12,345.68)" - отрицательное число в скобках
console.log(formatNumber(12345.6789, 2, true, false, true)); // "12,345.68" - группировка цифр включена

// ---------------------------------------------------------------------------------------------------------
// аналог VBA: Format (Expression[, Format[, FirstDayOfWeek[, FirstWeekOfYear]]])=>Variant (String)

function FormatNumber(expression, format)
{
    if (typeof expression !== 'number' || isNaN(expression))
        throw new TypeError("Первый аргумент должен быть числом.");

    // Применяем форматирование чисел, если формат задан
    if (format === 'currency')
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(expression);
    else if (format === 'percent')
        return new Intl.NumberFormat('en-US', {
            style: 'percent'
        }).format(expression);
    else if (format === 'fixed')
        return expression.toFixed(2); // Форматирование числа с двумя знаками после запятой
    else
        return expression.toString(); // По умолчанию просто преобразуем число в строку
}

// Примеры использования
console.log(formatNumber(1234.567, 'currency')); // $1,234.57
console.log(formatNumber(0.1234, 'percent')); // 12.34%
console.log(formatNumber(1234.567, 'fixed')); // 1234.57