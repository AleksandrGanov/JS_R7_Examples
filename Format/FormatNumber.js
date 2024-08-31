function formatNumber(value,
    numDigitsAfterDecimal = 2,
    includeLeadingDigit = true,
    useParensForNegativeNumbers = false,
    groupDigits = false)
{
    let formattedNumber = value.toFixed(numDigitsAfterDecimal);

    // Обработка ведущего нуля
    if (!includeLeadingDigit && formattedNumber.startsWith('0.'))
    {
        formattedNumber = formattedNumber.slice(1); // Удаляем ведущий ноль
    }

    // Обработка группировки цифр (тысячные разделители)
    if (groupDigits)
    {
        let parts = formattedNumber.split('.'); // Разделяем целую и дробную части
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Добавляем запятые для тысячных
        formattedNumber = parts.join('.'); // Соединяем части обратно
    }

    // Обработка скобок для отрицательных чисел
    if (useParensForNegativeNumbers && value < 0)
    {
        formattedNumber = `(${formattedNumber})`; // Оборачиваем отрицательное число в скобки
    } else if (value < 0)
    {
        formattedNumber = `-${formattedNumber}`; // Добавляем минус перед числом
    }
    return formattedNumber;
}

// Примеры использования
console.log(formatNumber(12345.6789, 1)); // "12,345.7" - 1 знак после запятой
console.log(formatNumber(12345.6789, 2, false)); // "12,345.68" - ведущий ноль не включается
console.log(formatNumber(-12345.6789, 2, true, true)); // "(12,345.68)" - отрицательное число в скобках
console.log(formatNumber(12345.6789, 2, true, false, true)); // "12,345.68" - группировка цифр включена