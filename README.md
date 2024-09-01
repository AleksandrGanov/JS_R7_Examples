# JS_R7_Examples
Материалы для работы c макросами на JS в Р7-Офис. 
Примеры приведены исключительно в целях ознакомпления с возможностями работы с Р7 Офис для личных или рабочих целей.
Материалы на претендуют на охват, перфоманс, алгоритмизацию и иные аспекты с точки зрения профессиональных программистов JS.

## Информационные ресурсы по работе с макросами:
- [Учебный курс "Основы разработки плагинов и макросов в Р7-Офис"](https://r7-consult.ru/vc-oglav)
- [Мини-гайд по написанию макросов Р7-Офис](https://r7-office.ru/tpost/gj80r5kp41-gaid-po-napisaniyu-makrosov-na-javascrip)
- [Документация по плагинам и макросом Р7-Офис](https://support.r7-office.ru/category/desktop_editors/plugins-and-macros/)
- [Горячие клавиши редактора Р7-Офис](https://support.r7-office.ru/desktop_editors/plugins-and-macros/general_about_plugins_macros/gorjachie-klavishi-dlja-raboty-s-oknom-makrosy/)
- [Документация по API Р7-Офис](https://support.r7-office.ru/category/using-api-document-builder/)
- [Документация по API OnlyOffice](https://api.onlyoffice.com/officeapi/basic)
- [Справочный ресурс по JavaScript "Metanit"](https://metanit.com/web/javascript/1.1.php)
- [Справочный ресурс "Современный учебник JavaScript"](https://learn.javascript.ru)
- [Он-лайн редактор JavaScript](https://www.codechef.com/javascript-online-compiler)
- [Группа Telegram "Р7 Office JavaScript Плагины и Макросы"](https://t.me/R7JavaScript)
- [Группа Telegram "R7-Office User Community Group"](https://t.me/r7officeucg)

## Примеры

### Format
- [FormatCurrency](Format/FormatCurrency.js). Форматирование вывода денежных сумм

### Macro
- [StartMacroQueue](Macro/StartMacroQueue.js). Запуск макросов в требуемой очередности
- [StartSingleMacro](Macro/StartSingleMacro.js). Запуск единичного макроса
- [StartSingleMacroWithParam](Macro/StartSingleMacroWithParam.js). Запуск единичного макроса с параметром

### Ranges
- [FillListFromArray](Ranges/FillListFromArray.js). Заполнение листа данными из массива
- [InsertRow](Ranges/InsertRow.js). Окрашивание строки и вставка новой строки со смещение окрашенной строки вниз
- [SetFillColor](Ranges/SetFillColor.js). Окрашивание ячейки, установка "без заполнения"
- [SetValue](Ranges/SetValue.js). Запись данных в ячейку таблицы

### Text
- [DeleteSpaces](Text/DeleteSpaces.js). Удаление пробелов в начале и конце текста ячейки