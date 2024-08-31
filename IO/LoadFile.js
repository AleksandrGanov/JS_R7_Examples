(function()
{
    function LoadFile()
    {
        $.ajax({
            url: 'http://ankars-club.ru/index.php',
			// url: 'file:///c:/doxcl/error_dax_00.txt', // для локальных файлов
            dataType: 'text',
        }).done(successFunction);
    }

    function successFunction(data)
    {
        var arrAllRows = data.split(/\r?\n|\r/);
        var oWorksheet = Api.GetActiveSheet();
        var i = 1;
        var j = 1;

        for (var singleRow = 0; singleRow < arrAllRows.length; singleRow++)
        {
            var rowCells = arrAllRows[singleRow].split(',');
            
            for (var rowCell = 0; rowCell < rowCells.length; rowCell++)
            {
                oWorksheet.GetCells(i, j).SetValue(rowCells[rowCell]);
                j = j + 1;
            }
            
            i = i + 1;
            j = 1;
        }
    }

    LoadFile();

    let reload = setInterval(function()
    {
        Api.asc_calculate(Asc.c_oAscCalculateType.All);
    });
})();