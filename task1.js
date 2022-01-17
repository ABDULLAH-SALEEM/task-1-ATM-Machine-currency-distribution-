let amount = +prompt("Enter amount between 100 to 100000");
let preferred = +prompt("Enter prefered note");
let notes = [500, 100, 50, 20, 10, 5, 1];
let obj = { 500: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 1: 0, }
//counting notes
let b = Math.floor(amount / preferred)
//funtion for displaying ans
function objFormat(x) {
    let ans = JSON.stringify(x)
    let forAns = ans.replace(/[{}""]/g, '')
    let newAns = forAns.replaceAll(',', '<br />')
    document.write(newAns)
}
// function for counting notes
function notesCount(x) {
    a = x * preferred
    notes = notes.filter(element => element != preferred)
    amount = amount - a
    for (let i = 0; i < notes.length; i++) {
        obj[notes[i]] = Math.floor(amount / notes[i]);
        amount = amount - obj[notes[i]] * notes[i];
    }
}
if (amount >= 100 && amount <= 100000) {
    if (b <= 200) {
        obj[preferred] = b
        notesCount(b)
        objFormat(obj)
    }
    if (b > 200) {
        let pre = 200
        obj[preferred] = 200
        notesCount(200)
        if (amount <= 4 && amount > 0) {
            let bal = 5 - amount
            obj[1] = pre - bal
            if (obj[5] == 0) {
                obj[5]++
            } else {
                obj[5] = 0
                obj[10]++
            }
        }
        objFormat(obj)
    }
}else{
    alert('Please give amount between 100 and 100000')
}
