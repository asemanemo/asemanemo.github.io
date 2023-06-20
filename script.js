const date = new Date();

/*  باگ :‌
ماه مهر کل ماه قبل رو در روز های گذشته نشون میده 
اولین روز ماه مهر از اول هفته شروع میشه 
اتفاقی که میوفته اینه که در این صورت باید هفته ی اول شهریور رو با
آخرین روز شهریور ایندکس بزنه 


وقتی که روز اول هفته منهای روز آخر هفته = 6 باشه باید از لوپ خارج
بشیم






/* "render" is for arrows to work*/
/* یک فانکشن می نویسیم و تمام کد به جز خط ۱۳۵ و ۱۴۵ رو داخلش 
قرار می دیم تا فلش های عوض کردن ماه کار بکنن*/

// date.setMonth(4);

const render = ()=>  {

const perAll = jalaali.toJalaali(date.getFullYear(), date.getMonth()+1, date.getDate());

const monthDays = document.querySelector(".days");

/*Persian Calendar variables*/

// const perAll = jalaali.toJalaali(date.getFullYear(), date.getMonth()+1, date.getDate());
const perMonthLast = jalaali.jalaaliMonthLength(perAll.jy, perAll.jm);

const perAll2 = jalaali.toJalaali(date.getFullYear(), date.getMonth(), date.getDate());
const perMonthPrev = jalaali.jalaaliMonthLength(perAll2.jy, perAll2.jm);
console.log(perMonthPrev);


const prevLastDay = jalaali.jalaaliMonthLength(perAll2.jy, perAll2.jm);




const weekIndex = jalaali.jalaaliWeek(perAll.jy,perAll.jm,1);

const weekIndexStart = weekIndex.saturday.jd;
const weekIndexEnd = weekIndex.friday.jd;



/* باید این ایندکس ها رو عوض کنم*/ 

const firsDayMonthIndex = perMonthPrev-weekIndexStart + 1;



const lastDayMonthWeek = jalaali.jalaaliWeek(perAll.jy, perAll.jm, perMonthLast);
const forLastWeekStart = lastDayMonthWeek.saturday.jd;
const forLastWeekEnd = lastDayMonthWeek.friday.jd;

const lastDayMonthIndex = (7- (perMonthLast - forLastWeekStart)) - 1;


console.log(lastDayMonthIndex);

// const miladi = jalaali.toGregorian(perAll.jy, perAll.jm, perAll.jd );
// const miladiMonth = miladi.gm
// console.log(miladiMonth);





// const lastDayWeek = new Date(date.getFullYear(),
// date.getMonth()+1, 0).getDay();

/* 
sat=6
sun = 0
mon=1
tue=2
wed=3
thur=4
fri=5



*/


const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "September",
    "October",
    "November",
    "December"
];


document.querySelector(".date h1").innerHTML 
= new Intl.DateTimeFormat('fa-IR', {month: 'short'}).format(date);

// document.querySelector(".date h1").innerHTML 
// = months[date.getMonth()];


document.querySelector(".date p").innerHTML 
= new Intl.DateTimeFormat('fa-IR', {dateStyle: 'full'}).format(date);

// document.querySelector(".date p").innerHTML 
// = new Date().toDateString();

let days = [];






 



// const perWeek = day => {
//     const perWeekend = (day + `: ${(day +1) % 7}`);
//         for(let day= 1; day <= perMonthLast; day++)
//     console.log(perWeekend);
// }
// console.log(perWeek);









for ( let x = firsDayMonthIndex; x > 0 ; x-- ){
    if (weekIndexEnd - weekIndexStart === 6) {break;}
    days+= `<div class="previous-date"> ${perMonthPrev - x+1}</div>`;
}



for (let i= 1; i<=perMonthLast; i++) {
    if(i === perAll.jd 
    && date.getMonth() === new Date().getMonth()) {
        days+=`<div class="today">${i}</div>`
    } else{
        days+= `<div>${i}</div>`;
    }    
    monthDays.innerHTML = days;
}

const hala = "";
console.log(hala);

for (let j=1; j <= lastDayMonthIndex; j++) {
    if (lastDayMonthIndex === 0) {
        days+=`<div class="next-date">${hala}</div>`
        // monthDays.innerHTML = days;
    }
    else {
        days+=`<div class="next-date">${j}</div>`
    
    }
    monthDays.innerHTML = days;
}
};




const hala = "";




const perAll = jalaali.toJalaali(date.getFullYear(), date.getMonth()+1, date.getDate());
const perMonthLast = jalaali.jalaaliMonthLength(perAll.jy, perAll.jm);


const perAll2 = jalaali.toJalaali(date.getFullYear(), date.getMonth(), date.getDate());
const perMonthPrev = jalaali.jalaaliMonthLength(perAll2.jy, perAll2.jm);

/*برای اینکه از «ست دیت» بتونیم استفاده کنیم و روز ماه رو معادل ۱ بذاریم */



const weekIndex = jalaali.jalaaliWeek(perAll.jy, perAll.jm, 1);
const weekIndexStart = weekIndex.saturday.jd;
const weekIndexEnd = weekIndex.friday.jd;

const firsDayMonthIndex = perMonthPrev-weekIndexStart + 1;
console.log(firsDayMonthIndex);


/* for finding the index number of last day of current month*/

const lastDayMonthWeek = jalaali.jalaaliWeek(perAll.jy, perAll.jm, perMonthLast);
const forLastWeekStart = lastDayMonthWeek.saturday.jd;
const forLastWeekEnd = lastDayMonthWeek.friday.jd;

const lastDayMonthIndex = (7- (perMonthLast - forLastWeekStart)) - 1;





const monthDays = document.querySelector(".days")

// const lastDay = jalaali.jalaaliMonthLength(perAll.jy, perAll.jm);

const prevLastDay = jalaali.jalaaliMonthLength(perAll2.jy, perAll2.jm);



/* باید یک متود بنویسیم ولی قبلش باید ورودی هاش رو در یک 
متغییر جهانی قرار بدیم */






const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "September",
    "October",
    "November",
    "December"
];




document.querySelector(".date h1").innerHTML 
= new Intl.DateTimeFormat('en-US-u-ca-persian', {month: 'short'}).format(date);

document.querySelector(".date p").innerHTML 
= new Intl.DateTimeFormat('en-IR', {dateStyle: 'full'}).format(date);



/*For Today Boxes*/



let days = [];



/*for previous days*/

for ( let x = firsDayMonthIndex; x > 0 ; x-- ){
    if (weekIndexEnd - weekIndexStart === 6) {break;}
    days+= `<div class="previous-date"> ${perMonthPrev - x+1}</div>`;
}




/*this shows number of days in a month + current day*/

for (let i= 1; i<=perMonthLast; i++) {
    if(i === new Date().getDate() 
    && date.getMonth() === new Date().getMonth()) {
        days+=`<div class="today">${i}</div>`
    } else{
        days+= `<div>${i}</div>`;
    }    
    monthDays.innerHTML = days;
}



/*for next days*/

for (let j=1; j<= lastDayMonthIndex; j++) {
    if (lastDayMonthIndex === 0) {
        days+=`<div class="next-date">${hala}</div>`
        // monthDays.innerHTML = days;
    }
    else {
        days+=`<div class="next-date">${j}</div>`
    
    }
    monthDays.innerHTML = days;
}




/* راه حل ها : 
1.
یا می تونی اول شمسی رو تبدیل کنی به میلادی و بعد بذاری توی «ست مانف» 
2.
یا میتونی از اون متود های «مومنت» استفاده کنی 
3.
شاید اصلا مشکل این بخش کلکیک کردن برای عوض کردن ماه نباشه 
شاید مشکل توی تعداد روز های قبل و بعد در ماه های بعدی و قبلی باشه 
*/

document.querySelector(".previous").addEventListener("click",() => {
    date.setMonth(date.getMonth() - 1)
    render();
    }
    
);

document.querySelector(".next").addEventListener("click",() => {
    date.setMonth(date.getMonth() +1)
    render();
    }
);

/* فانکشن «رندر» رو یک دفعه در مقیاس جهانی و یک دفعه برای هر کدوم
از فلش ها صدا می زنیم*/
render();


 

/* short date (Date Box) */
document.querySelector(".shamsi").innerHTML 
= new Intl.DateTimeFormat('fa-IR', {dateStyle: 'short'}).format(date);

document.querySelector(".miladi").innerHTML 
= new Intl.DateTimeFormat('en-US').format(date);


// document.querySelector(".ghamari").innerHTML 
// = new Intl.DateTimeFormat('ar-SA').format(date);


let ghamariShortToday = new Intl.DateTimeFormat('ar-SA').format(date);
let ghamariShortArray = ghamariShortToday.split("/");

/**Seperating ه in ghamari Year */
let ghamariSepH = ghamariShortArray[2];
console.log(ghamariShortArray);


const ghamariShortFun =()=> {

    let ghamariFinalYear = ghamariSepH.split(" ");

    // let ghamariShortArray1 = ghamariShortArray[0].trim();
    // let ghamariShortArray2 = ghamariShortArray[1].trim();
    // let ghamariShortArray3 = ghamariShortArray[2].trim();

    return `${ghamariShortArray[0]}/${ghamariFinalYear[0]}/${ghamariShortArray[1]}`;

}

document.querySelector(".ghamari").innerHTML = ghamariShortFun()






/** long dates (Date Box) */


document.querySelector(".miladi-long").innerHTML 
= new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(date);




/** Function for spliting SHAMSI and then puting it in one
 * line
*/


let shamsiToday = new Intl.DateTimeFormat('fa-IR', {dateStyle: 'long'}).format(date);

const shamsiFun =()=> {

    let shamsiArray = shamsiToday.split(" ");
    console.log(shamsiArray);
    let shamsiArray1 = shamsiArray[0].trim();
    let shamsiArray2 = shamsiArray[1].trim();
    let shamsiArray3 = shamsiArray[2].trim();

    return `${shamsiArray[2]} - ${shamsiArray[0]} ${shamsiArray[1]}`;

}

document.querySelector(".shamsi-long").innerHTML = shamsiFun()



/**GHAMARI long function */



let ghamariToday = new Intl.DateTimeFormat('ar-SA', {dateStyle: 'long'}).format(date);

const ghamariFun =()=> {

    let ghamariArray = ghamariToday.split(" ");

    let ghamariArray1 = ghamariArray[0].trim();
    let ghamariArray2 = ghamariArray[1].trim();
    let ghamariArray3 = ghamariArray[2].trim();

    return `${ghamariArray[2]} - ${ghamariArray[0]} ${ghamariArray[1]}`;

}


let ghamariArray = ghamariToday.split(" ");


document.querySelector(".ghamari-long").innerHTML = ghamariFun()


