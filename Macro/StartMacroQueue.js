(function()
{
    // Получаем коллекцию макросов
    let macroSet = JSON.parse(Api.pluginMethod_GetMacros());

    /* Формируем коллекцию для перезапуска 
    	(названия макросов приведены для примера, 
    	вписываем Ваши названия) */
    let macroToLoad = [
        "MyLib_Alerts",
        "MyLib_Arrays",
        "MyLib_Convert",
        "MyLib_Enums",
        "MyLib_Format",
        "MyLib_Mathes",
        "MyLib_Ranges",
        "MyLib_Texts"
    ];

    /* Получаем результат обработки кода объекта, 
		то есть фактически запускаем все макросы из списка */
    macroToLoad.forEach((name) =>
    {
        // Ищем нужный макрос в коллекции макросов
        let macro = macroSet
            .macrosArray
            .find((x) => x.name === name);

        // Запускаем код макроса, записанный в объекте
        if (macro) eval(macro.value);
    });
})();