let moth = +prompt("төменге жазініз:")
if(moth == 3 || moth == 4 || moth == 5){
    alert("Ай куні:" + moth + '\n' + "Мезгылы:Spring" )
}
else if(moth == 6 || moth == 7 || moth == 8){
    alert("Ай куні:" + moth + '\n' + "Мезгылы:Summer")
}
else if(moth == 9 || moth == 10 || moth == 11){
    alert("Ай куні:" + moth + '\n' + "Мезгылы:Autumn")
}
else if(moth == 12 || moth == 1 || moth == 2){
    alert("Ай куні:" + moth + '\n' + "Мезгылы:Winter")
}
else{
    alert("1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз")
}

let a = +prompt("Бірыншысандыжазыніз:")
let b = +prompt("Екіншысандыжазыніз:")

if (a > b){
    alert("a саны b санынан үлкен" + '\n' + "орташа:" + (a + b)/2)
}
else if(a < b){
    alert("b саны a санынан үлкен" + '\n' + "орташа:" + (a + b)/2)
}
else(a == b)[
    alert("Сандар тең" + '\n' + "орташа:" + (a + b)/2)
]

let aa = +prompt("Бірыншы сан:")
let bb = +prompt("Екыншы сан:")
let cc = +prompt("Ушыншы сан:")

if (aa > bb && bb > cc){
    alert("Ең үлкен және ең кішкентай санның айырмасы:" + '\n' + (aa - cc))
}
else if (aa > cc && cc > bb){
    alert("Ең үлкен және ең кішкентай санның айырмасы:" + '\n' + (aa - bb))
}
else if (bb > aa && aa > cc){
    alert("Ең үлкен және ең кішкентай санның айырмасы:" + '\n' + (bb - cc))
}
else if (bb > cc && cc > aa){
    alert("Ең үлкен және ең кішкентай санның айырмасы:" + '\n' + (bb - aa))
}
else if (cc > aa && aa > bb){
    alert("Ең үлкен және ең кішкентай санның айырмасы:" + '\n' + (cc - bb))
}
else if (cc > bb && bb > aa){
    alert("Ең үлкен және ең кішкентай санның айырмасы:" + '\n' + (cc - aa))
}
else if (aa == bb && aa == cc){
    alert("Санің бәрі оксас Айырмасы:" + (aa - bb))
}