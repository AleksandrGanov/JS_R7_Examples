// Запись данных в ячейку таблицы

(function()
{
    Api.GetActiveSheet().GetRange("C4").SetValue("Hello world");
})();