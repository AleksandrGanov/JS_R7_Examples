(function()
{
    GetActionByColorAdv();

    /* Функция реализует обработку цвет заливки ячейки с последующим действием. 
		Более продвинутый вариант от https://t.me/felicitavanna, позволяющий уйти
		от указания конкретных свойств объекта с цветом, т.к. от версии к версии 
		API название свойство может меняться. 
		Ссылка на группу в ТГ: https://t.me/R7JavaScript/1798 */

    function GetActionByColorAdv()
    {
        let ws = Api.GetActiveSheet();
        let rng = ws.GetRange("B6:B10");

        // Задаем коллекцию проверяемых цветов
        let colors = {
            "розовый": getIdColor(ws.GetRange("A1").GetFillColor()),
            "жёлтый": getIdColor(ws.GetRange("A2").GetFillColor()),
            "зелёный": getIdColor(ws.GetRange("A3").GetFillColor()),
            "синий": getIdColor(ws.GetRange("A4").GetFillColor()),
        };

        console.log(colors);

        // Перебираем все ячейки ренджа
        rng.ForEach((cell) =>
        {
            // Получает цвет ячейки
            let cellColor = getIdColor(cell.GetFillColor());

            console.log(cellColor);

            // Сверяем с нужным цветом
            if (cellColor != "No Fill")
                for (const colorValue of Object.values(colors))
                    if (cellColor === colorValue)
                    {
                        console.log(`Цвет: ${Object.keys(colors)[Object.values(colors).indexOf(colorValue)]} и значение ${cell.GetValue()}`);
                        break;
                    }
            else
                console.log(`Нет заливки и значение ${cell.GetValue()}`);
        });
    }

    // Функция получает цвет объекта
    function getIdColor(colorObject)
    {
        if (colorObject != "No Fill")
            return colorObject.color[Object.keys(colorObject.color)[0]];
        else
            return "No Fill";
    }
})();