// let name = prompt('')

let hours = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = new Date().getSeconds()

if (hours >= 4 && hours <= 11) {
    alert(`Доброе утро!
    На часах ровно — ${hours}:${minutes}:${seconds}
    `);
} else if (hours >= 12 && hours <= 16) {
    alert(`Добрый день!
    На часах ровно — ${hours}:${minutes}:${seconds}
    `)
} else if (hours >= 17 && hours <= 23) {
    alert(`Добрый вечер!
    На часах ровно — ${hours}:${minutes}:${seconds}
    `)
} else if (hours >= 24 && hours <= 3) {
    alert(`Доброй ночи!
    На часах ровно — ${hours}:${minutes}:${seconds}
    `)
}


let drim_killer = '18:10:00'
let alarm_hours = new Date().getHours()
let alarm_minutes = new Date().getMinutes()
let alarm_seconds = new Date().getSeconds()

if (alarm_hours && alarm_minutes && alarm_seconds === drim_killer) {
    alert(`Будильник прозвенел! Время — ${drim_killer}! Будильник работает как положено.`)
} else {
    alert(`Будильник еще не прозвенел, так как дедлвйн в ${drim_killer}`)
}