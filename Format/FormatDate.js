function FormatDateTime(date, namedFormat)
{
    if (!(date instanceof Date))
        throw new TypeError("Первый аргумент должен быть объектом Date.");

    // Если формат не указан, используем формат по умолчанию (краткий формат даты и времени)
    namedFormat = namedFormat || "short";

    // Функция для добавления нулей в однозначные числа
    const pad = (num) => num.toString().padStart(2, '0');

    // Определяем форматирование в зависимости от указанного namedFormat
    switch (namedFormat.toLowerCase())
    {
        case "short":
            // Краткий формат даты и времени
            return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}
                            ${pad(date.getHours())}:${pad(date.getMinutes())}`;
        case "long":
            // Длинный формат даты и времени
            return `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}, ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
        case "shortdate":
            // Краткий формат даты
            return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
        case "longdate":
            // Длинный формат даты
            return `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
        case "shorttime":
            // Краткий формат времени
            return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
        case "longtime":
            // Длинный формат времени
            return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
        default:
            throw new Error("Неизвестный формат даты/времени.");
    }
}

// Примеры использования
const now = new Date();
console.log(formatDateTime(now)); // Краткий формат даты и времени по умолчанию
console.log(formatDateTime(now, "short")); // Краткий формат даты и времени
console.log(formatDateTime(now, "long")); // Длинный формат даты и времени
console.log(formatDateTime(now, "shortdate")); // Краткий формат даты
console.log(formatDateTime(now, "longdate")); // Длинный формат даты
console.log(formatDateTime(now, "shorttime")); // Краткий формат времени
console.log(formatDateTime(now, "longtime")); // Длинный формат времени