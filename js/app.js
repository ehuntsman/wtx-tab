var d = new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

document.getElementById("dayName").innerHTML = days[d.getDay()];
document.getElementById("datetime").innerHTML = monthNames[d.getMonth()] + " " + d.getDate();

(function () {
    'use strict';

    var byId = function (id) { return document.getElementById(id); },
    console = window.console;
    // 'handle' option
    Sortable.create(byId('settings-personal-links'), {
        handle: 'li',
        animation: 150,
    });
})();

