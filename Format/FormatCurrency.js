function FormatCurrency(expression,
    numDigitsAfterDecimal = 2,
    includeLeadingDigit = false,
    useParensForNegativeNumbers = false,
    groupDigits = true)
{
    if (typeof expression !== 'number' || isNaN(expression))
        throw new TypeError("Первый аргумент должен быть числом.");

    // Создаем объект Intl.NumberFormat для форматирования чисел в денежном формате
    const options =
    {
        style: 'currency',
        currency: 'USD', // Установите валюту по умолчанию, если необходимо
        minimumFractionDigits: numDigitsAfterDecimal,
        maximumFractionDigits: numDigitsAfterDecimal,
        useGrouping: groupDigits
    };

    // Создаем экземпляр Intl.NumberFormat
    const formatter = new Intl.NumberFormat('en-US', options);

    // Форматируем число
    let formattedNumber = formatter.format(expression);

    // Если нужно добавить ведущий ноль, если число меньше 1
    if (includeLeadingDigit && expression < 1 && expression > -1)
        formattedNumber = formattedNumber.replace(/^(?!\$\s*0)/, '$0');

    // Если нужно использовать скобки для отрицательных чисел
    if (useParensForNegativeNumbers && expression < 0)
        formattedNumber = formattedNumber.replace(/^\(\$/, '$(').replace(/\)$/, ')');

    return formattedNumber;
}

// Примеры использования
console.log(formatCurrency(1234.567)); // Форматирование с двумя знаками после запятой и группировкой
console.log(formatCurrency(1234.567, 3)); // Форматирование с тремя знаками после запятой
console.log(formatCurrency(1234.567, 2, true)); // Форматирование с ведущим нулем, если число < 1
console.log(formatCurrency(1234.567, 2, false, false, false)); // Форматирование без группировки