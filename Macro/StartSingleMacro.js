(function()
{
    /* Ссылка на обсуждение: https://t.me/R7JavaScript/1181 */

    // Получаем коллекцию макросов
    let macroSet = JSON.parse(Api.pluginMethod_GetMacros());

    // Задаем имя макроса, который требуется запустить
    let macroName = "MyLib_Alerts";

    // Ищем нужный макрос в коллекции макросов
    let macro = macroSet
        .macrosArray
        .find((x) => x.name === macroName);
	
	// Запускаем код макроса, записанный в объекте
    if (macro) eval(macro.value);
})();