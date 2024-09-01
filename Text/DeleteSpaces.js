(function()
{
    // Пример использования
	DeleteSpaces();
    
    function DeleteSpaces()
    {
        var ws = Api.GetActiveSheet();
        var initValue = ws.GetRange("A1").GetValue();
        var trimedValue = initValue.trim();
        
		ws.GetRange("B3").SetValue(trimedValue);
    }
})();