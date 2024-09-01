(function()
{
    // Ссылка на обсуждение: https://t.me/R7JavaScript/1202

    // Получаем коллекцию макросов
    let macroSet = JSON.parse(Api.pluginMethod_GetMacros());

    // Задаем имя макроса, который требуется запустить
    let macroName = "MyLib_Alerts";

    // Ищем нужный макрос в коллекции макросов
    let macro = macroSet
        .macrosArray
        .find((x) => x.name === macroName);

    // Проверяем, что требуемый макрос найден
    if (macro)
    {
        // Конструируем функцию с необходимыми парамерами
        let macroWithParam = new Function('param', macro.value);
        let param = "someParam";

        // Запускаем код макроса, записанный в объекте и передаем аргумент
        macroWithParam(param);
    }
})();