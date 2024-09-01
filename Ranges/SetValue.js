(function()
{
    // Запись данных в ячейку таблицы
    Api.GetActiveSheet().GetRange("C4").SetValue("Hello world");
})();