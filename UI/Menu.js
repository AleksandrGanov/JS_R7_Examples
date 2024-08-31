// Шаг 1: создать макрос со следующим содержанием:

(function()
{
    Common.MainLevelMenu = function()
    {
        Common.UI.alert(
        {
            title: "Кастомное меню. Верхний уровень",
            msg: "Выберите макрос из списка ниже",
            resizable: true,

            width: 600,
            buttons: [
            {
                caption: "Группа 1",
                value: "g1"
            },
            {
                caption: "Макрос 1",
                value: "m1"
            },
            {
                caption: "Макрос 2",
                value: "m2"
            }, ],
            primary: "no",
            closable: true,
            callback: MainLevelMenuFunc,
        });
    }

    Common.g1 = function()
    {
        Common.UI.alert(
        {
            title: "Кастомное меню. Группа 1",
            msg: "Выберите макрос из списка ниже",
            width: 600,
            buttons: [
            {
                caption: "Вверх",
                value: "UpMenu"
            },
            {
                caption: "Макрос 1",
                value: "m1"
            },
            {
                caption: "Макрос 2",
                value: "m2"
            }, ],
            primary: "UpMenu",
            closable: true,
            callback: G1MenuFunc,
        });
    }


    function MainLevelMenuFunc(value)
    {
        console.log(`Пользователь выбрал ${value}`);
        if (value == "g1")
        {
            console.log("Выполняем");
            Common.g1();
        }
        if (value == "m1")
        {
            Common.UI.alert(
            {
                msg: "Выполняется макрос 1, основное меню"
            });
        }
    }

    function G1MenuFunc(value)
    {
        console.log(`Пользователь выбрал ${value}`);
        if (value == "UpMenu")
        {
            console.log("Выполняем");
            Common.MainLevelMenu();
        }

        if (value == "m1")
        {
            Common.UI.alert({
                msg: "Выполняется макрос 1, группа 1"
            });
        }
    }
})();

// Шаг 2: сделать макрос (шаг 1) автовыполняемым, выполнить его.

// Шаг 3: создать новый макрос с содержанием:
(function()
{
    Common.MainLevelMenu();
})();

// Шаг 4: вставить в документ автофигуру и назначить на неё макрос (шаг 3).

/* Возможности концепта:
 1 масштабируемость, в т.ч. поддержка неограниченного количества групп, макросов или отдельных функций */