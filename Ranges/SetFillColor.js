(function()
{
    // Получаем текущий лист и ячейку
    let ws = Api.GetActiveSheet();
    let cell = ws.GetCells(1, 1);

    // Формирование черный цвет и без заполнения
    let blackColor = Api.CreateColorFromRGB(1, 1, 1);
    let noFill = Api.CreateNoFill();

    // Устанавливаем черный цвет ячейки
    cell.SetFillColor(blackColor);

    // Устанавливаем "без заполнения" для ячейки
    cell.SetFillColor(noFill);
})();