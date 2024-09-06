(function()
{
    GetActionByColor();

	// Функция реализует обработку цвет заливки ячейки с последующим действием
    function GetActionByColor()
    {
        let ws = Api.GetActiveSheet();
        let rng = ws.GetRange("A1:B2");
        
        // Заливаем ячейку А1 черным цветом
        ws.GetRange("A1").SetFillColor(Api.CreateColorFromRGB(1, 1, 1));

        /* Если цвет ячейки совпадает с нужным цветом, 
        	то можно выполнить целевое действие. При необходимости сравнивать 
        	с несколькими цветами можно продолжить ветвление "if", либо использовать
        	конструкцию "switch" */
        
        // Перебираем все ячейки ренджа
        rng.ForEach((cell) =>
        {
            try
            {
                let color01 = cell.GetFillColor().color.mw;
                let color02 = Api.CreateColorFromRGB(1, 1, 1).color.mw;

                console.log(`Цвет ячейки: ${color01}`);
                console.log(`Цвет сравнения: ${color02}`);

                if (color01 == color02)
                    console.log("Есть черная ячейка");
            }
            catch (error)
            {
                console.error("Нет заливки");
            }
        });
    }
})();