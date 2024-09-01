(function()
{
    // Сохраняем весь код на скрытый лист
    const CodeBaseBackUpWsName = "MACRO";
    let sheets = Api.GetSheets();
    let isCodeWsExists = false;

    // Проверяем наличие в книге листа для сохранения кода
    sheets.forEach((sheet) =>
    {
        if (sheet.GetName() === CodeBaseBackUpWsName)
            isCodeWsExists = true;
    });

    // Если лист не обнаружен, то создаем
    if (!isCodeWsExists)
        Api.AddSheet(CodeBaseBackUpWsName);

    let ws = Api.GetSheet(CodeBaseBackUpWsName);
    var i = 0;

    // Производим запись на лист всех макросов
    ws.GetUsedRange().Clear();
    macroSet.macrosArray.forEach((macro) =>
    {
        if (macro)
        {
            let macroNameRng = ws.GetRange(`A${++i}`);

            macroNameRng.SetValue(macro.name);
            macroNameRng.SetBold(true);

            let macroCodeRng = ws.GetRange(`A${++i}`);

            macroCodeRng.SetValue(macro.value);
            macroCodeRng.SetColumnWidth(70);
            macroCodeRng.AutoFit(true, false);
            macroCodeRng.SetWrap(true);
            i++;
        }
    });

    // Скрываем лист
    ws.SetVisible(false);
})();