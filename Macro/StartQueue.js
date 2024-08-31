// https://t.me/R7JavaScript/1181

(function()
{
    var mA = JSON.parse(Api.pluginMethod_GetMacros();
    var mObj = mA.macrosArray.find(findM, "test"); 
	
	eval(mObj.value);
	
    function findM(macro)
    {
        return macro.name === this;
    }
})();

// https://t.me/R7JavaScript/1202
/* Кстати,  eval() ещё и аргументы не поддерживает,
а они иногда полезны и нужны. 
Нашел способ как это разом обойти */

(function()
{
    var mA=JSON.parse(Api.pluginMethod_GetMacros());
    var mObj=mA.macrosArray.find(findM, "test");
    
	if(mObj)
	{
        let txt="Text";
        let macro=new Function("txt",mObj.value);
        macro(txt);       
	}    

	function findM(macro)
	{
		return macro.name === this;
	}
})();