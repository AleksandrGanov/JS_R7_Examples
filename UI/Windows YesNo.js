Common.UI.alert(
{
    title: "Заголовок",
    msg: "Выберите \"Да\" или \"Нет\"",
    buttons: [
    {
        caption: "Да",
        value: "yes"
    },
    {
        caption: "Нет",
        value: "no"
    }],
    callback: function(value)
    {
        Common.UI.alert(
        {
            title: "Ваш выбор",
            msg: "Вы выбрали \"" + value + "\""

        });
    }
});