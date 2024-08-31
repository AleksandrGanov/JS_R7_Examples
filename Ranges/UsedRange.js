(function()
{
    const ws = Api.GetActiveSheet();
    const rowRange = ws.GetRows(2);
    
	rowRange.Insert("down");
    ws.GetUsedRange().AutoFit(true);
})();