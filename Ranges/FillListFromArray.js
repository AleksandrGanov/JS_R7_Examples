(function()
{
	// Получаем текущий лист
	var ws = Api.GetActiveSheet();
	
	// Формируем массив заголовков
	var headers = ["ID", "Продукт", "Стоимость", "Наличие"];
	
	// Формируем массив данных
	var data = [
		["SKU124-21", "SKU124-21", "SKU124-21", "SKU124-21"],
		["Вода", "Сок", "Шоколад", "Яблоки"],
		[60, 180, 80, 132.5],
		["false", "false", "true", "true"]
	];

	// Присваиваем имя листу
	ws.SetName("Товары");
	
	/* Заполняем первую строку заголовками, последующие строки данным из
		массива "data"*/
	for (var i = 0; i < headers.length; i++)
	{
		ws.GetRangeByNumber(0, i).SetValue(headers[i]);
		for (var j = 0; j < data[0].length; j++)
			ws.GetRangeByNumber(j + 1, i).SetValue(data);
	}  
})();