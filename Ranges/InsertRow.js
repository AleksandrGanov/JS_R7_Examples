(function()
{
    // Получаем текущий лист и первую строку
    const ws = Api.GetActiveSheet();
    const row = ws.GetRows(1);

    // Окрашиваем первую строку в черный цвет
    row.SetFillColor(Api.CreateColorFromRGB(1, 1, 1));

    // Делаем вставку строки со сдвигом вниз
    row.Insert("down");
})();