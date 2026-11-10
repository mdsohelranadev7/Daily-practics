let clearBtn = document.getElementById("clearBtn");
let plusMinusBtn = document.getElementById("plusMinusBtn");
let percentBtn = document.getElementById("percentBtn");
let divideBtn = document.getElementById("divideBtn");
let sevenBtn = document.getElementById("sevenBtn");
let eightBtn = document.getElementById("eightBtn");
let nineBtn = document.getElementById("nineBtn");
let multiplyBtn = document.getElementById("multiplyBtn");
let fourBtn = document.getElementById("fourBtn");
let fiveBtn = document.getElementById("fiveBtn");
let sixBtn = document.getElementById("sixBtn");
let minusBtn = document.getElementById("minusBtn");
let oneBtn = document.getElementById("oneBtn");
let twoBtn = document.getElementById("twoBtn");
let threeBtn = document.getElementById("threeBtn");
let plusBtn = document.getElementById("plusBtn");
let zeroBtn = document.getElementById("zeroBtn");
let decimalBtn = document.getElementById("decimalBtn");
let equalBtn = document.getElementById("equalBtn");
let display = document.getElementById("display");
let froms = document.querySelector("form");

froms.addEventListener("submit", (s) => {
  s.preventDefault();
});

equalBtn.addEventListener("click", () => {
  let dis = display.value;
  let result = eval(dis);
  console.log(result);
  // display.focus()
  clearInterval(focus);
  display.value = result;
});

clearBtn.addEventListener("click", () => {
  display.value = "";
  display.focus();
});

sevenBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "7";
});

eightBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "8";
});

nineBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "9";
});

fourBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "4";
});

fiveBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "5";
});

sixBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "6";
});

oneBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "1";
});

twoBtn.addEventListener("click", () => {
  let dis = display.value;

  display.focus();
  display.value = dis + "2";
});

threeBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "3";
});
zeroBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "0";
});
decimalBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + ".";
});

plusBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "+";
});

minusBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "-";
});

multiplyBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "*";
});
divideBtn.addEventListener("click", () => {
  let dis = display.value;
  display.focus();
  display.value = dis + "/";
});

let serch = document.getElementById("s");
let product = document.querySelectorAll(".product");

serch.addEventListener("input", () => {
  let val = serch.value.toLowerCase().trim();

  product.forEach((sl) => {
    let ak = sl.dataset.sk.toLowerCase();

    if (ak.includes(val)) {
      sl.style.display = "";
    } else {
      sl.style.display = "none";
    }
  });
});

let timescreen = document.getElementById("timescreen");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let minit = 0;
let sec = 0;
let milisec = 0;

let total = null;

function sal() {
  if (total !== null) {
    clearInterval(total);
  }

  total = setInterval(() => {
    settime();
  }, 10);
}

function settime() {
  milisec++;
  if (milisec == 100) {
    milisec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      minit++;
    }
  }

  let min = String(minit).padStart(2, "0");
  let se = String(sec).padStart(2, "0");
  let mil = String(milisec).padStart(2, "0");

  timescreen.textContent = `${min}:${se}:${mil}`;
}

start.addEventListener("click", () => {
  sal();
});

stop.addEventListener("click", () => {
  clearInterval(total);
});

reset.addEventListener("click", () => {
  clearInterval(total);
  timescreen.textContent = "00:00:00";
  minit = sec = milisec = 0;
});

let inp = document.getElementById("inp");
let add = document.getElementById("add");
let deleteall = document.getElementById("deleteall");
let ulbtn = document.getElementById("ulbtn");

add.addEventListener("click", () => {
  let input = inp.value;
  let li = document.createElement("li");

  li.innerHTML =
    ' <input type="checkbox"><span></span><button onclick="ksl(this)">delete</button>';
  let span = li.querySelector("span");
  span.textContent = input;
  ulbtn.appendChild(li);
  inp.value = "";
});

function ksl(sds) {
  sds.parentElement.remove();
}

deleteall.addEventListener("click", () => {
  let ks = document.querySelectorAll('input[type="checkbox"]:checked');

  ks.forEach((skd) => {
    skd.parentElement.remove();
  });
});

let num = [1, 2, 3, 4, 5];
console.log(num);

num.forEach((item) => {
  if (item > 3) {
    console.log(item);
  }
});

let sk = [2, 5, 28, 58, 5, 95, 45];

for (let i = 0; i < sk.length; i++) {
  console.log(sk[4]);
}
sk.forEach((item) => {
  console.log(item);
});

let products = [
  { name: "shoe", price: 1120 },
  { name: "book", price: 520 },
  { name: "chair", price: 320 },
];

let totals = 0;

products.forEach((sdf) => {
  // let lsl = sdf
  // console.log(lsl);

  totals += sdf.price;
  console.log(totals);
});

let pro = [
  { name: "shoe", price: 1220 },
  { name: "book", price: 520 },
  { name: "chair", price: 320 },
  { name: "table", price: 1320 },
];

pro.forEach((sas) => {
  if (sas.price > 1000) {
    console.log(sas.name + "-" + "expensive");
  } else {
    console.log(sas.name + "-" + "cheep");
  }
});

let pros = [
  { name: "shoe", price: 1220 },
  { name: "book", price: 520 },
  { name: "chair", price: 3420 },
  { name: "table", price: 1320 },
];

let maxp = Infinity;
let maxpd = "";
pros.forEach((jd) => {
  if (jd.price < maxp) {
    maxp = jd.price;
    maxpd = jd.name;
  }
});

console.log(maxpd);

let pr = [
  { name: "shoe", price: 1220 },
  { name: "book", price: 520 },
  { name: "chair", price: 20 },
  { name: "table", price: 120 },
];
let lkd = [52];
pr.forEach((sk) => {
  lkd.push(sk.price);
});

console.log(lkd);

let cptext = document.getElementById("cptext");
let copy = document.getElementById("copy");

copy.addEventListener("click", () => {
  cptext.classList.remove("opacity-0");
  cptext.classList.remove("translate-x-full");

  setTimeout(() => {
    cptext.classList.add("opacity-0");
    cptext.classList.add("translate-x-full");
  }, 2000);
});

let on = document.getElementById("on");
let rou = document.getElementById("rou");

rou.addEventListener("click", () => {
  if (on.classList.contains("translate-x-14")) {
    on.classList.remove("translate-x-14");
    on.innerHTML = "on";
    document.body.style.background = "white";
  } else {
    on.classList.add("translate-x-14");
    document.body.style.background = "black";
    on.innerHTML = "off";
  }
});

let inps = document.getElementById("inps");
let productt = document.querySelectorAll(".productt");

inps.addEventListener("input", () => {
  let ew = inps.value.toLowerCase().trim();

  productt.forEach((sks) => {
    let ala = sks.dataset.name.toLowerCase();

    if (ala.includes(ew)) {
      sks.style.display = "";
    } else {
      sks.style.display = "none";
    }
  });
});

let arr = [23, 35, 58, 16, 38, 12, 92];

arr.map((s) => {
  console.log(s);
});






// let btns = document.getElementById("btns");

// btns.addEventListener("click", () => {
//   btns.classList.toggle("active");

//   if (btns.classList.contains("active")) {
//     document.body.style.background = "black";
//     btns.style.color = "white";
//     btns.innerHTML = "Light";

//     btns.classList.add("translate-x-16");
//   } else {
//     btns.classList.remove("translate-x-16");
//     document.body.style.background = "White";
//     btns.style.color = "black";
//     btns.innerHTML = "Dark";
//   }
// });

// let bg = document.getElementById("bg");
// let colorBtn = document.getElementById("colorBtn");
// let ins = document.getElementById("ins");

// function random() {
//   let redf = Math.floor(Math.random() * 255);
//   let greenf = Math.floor(Math.random() * 255);
//   let bluef = Math.floor(Math.random() * 255);

//   return `rgb(${redf}, ${greenf},${bluef})`;
// }

// colorBtn.addEventListener("click", () => {
//   let ran = random();
//   console.log(ran);

//   bg.style.background = ran;

//   ins.value = ran;
// });

// let ip = document.getElementById("ip");
// let a = document.getElementById("a");
// let al = document.getElementById("al");
// let u = document.getElementById("u");

// a.addEventListener("click", () => {
//   let input = ip.value;

//   let li = document.createElement("li");
//   let bu = document.createElement("button");
//   bu.textContent = "delete";
//   li.innerHTML = input;

//   bu.addEventListener("click", () => {
//     li.remove();
//   });

//   u.appendChild(li);
//   li.appendChild(bu);
// });

// let sls = document.getElementById("sls");
// let ckl = document.getElementById("ckl");

// let aa = [2, 15, 5, 63, 9];

// ckl.addEventListener("click", () => {
//   let skks = sls.value.split(" ").map(Number);
//   let inpa = skks.filter((f) => {
//     return f > 5;
//   });

//   console.log(inpa);
// });

// let arra = ["apple", "orang", "manglo"];
// console.log(arra);

// function disp(some) {
//   console.log("out", some);
// }

// function cal(a, b) {
//   let total = a + b;

//   disp(total);
// }

// cal(5, 5);

// function di(s) {
//   console.log(s);
// }

// function cl(a, b, callback) {
//   let sum = a + b;
//   callback(sum);
// }
// cl(2, 8, di);

// let name = document.getElementById("name");
// let pass = document.getElementById("pass");
// let log = document.getElementById("log");
// let main = document.getElementById("main");
// let newa = document.getElementById("newa");
// let slss = document.getElementById("slss");

// slss.addEventListener("submit", (s) => {
//   s.preventDefault();

//   if ((name.value == "123") & (pass.value == "123")) {
//     main.style.display = "none";
//   } else {
//     alert("worng");
//   }

//   newa.removeAttribute("hidden");
// });

// // let prosa = new Promise((resolve, reject) => {
// //     setInterval(() => {
// //         const ok = true
// //         if (ok) {
// //             resolve("right")

// //         }
// //         else {
// //             reject("wrong")
// //         }

// //     }, 10000);

// // })

// // console.log(prosa);

// const getpromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("hello i am sohel ");
//     resolve("succes");
//   });
// };

// let sPromise = getpromise();

// sPromise.then((res) => {
//   // console.log("promise fullfild", res);
// });

// const pone = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hello sohel");
//       resolve("ok");
//     }, 2000);
//   });
// };

// const ptwo = () => {
//   // console.log("procesing");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("sfsf");

//       resolve("ok");
//     }, 2000);
//   });
// };

// console.log("procesing1");

// let po = pone();
// po.then((res) => {
//   console.log(res);

//   console.log("procesing2");
//   let l = ptwo();
//   l.then((res) => {
//     console.log(res);
//   });
// });

// async function ls() {
//   console.log("hello");
// }
// console.log(ls());


// let ks = (() => {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hello");

//       resolve("ok")

//     }, 2000)
//   })

// })
// let lse = ks()

// lse.then((res) => {
//   console.log(res);
// })



// async function sila() {
//   await ks(1)
//   await ks(2)
//   await ks(3)

// } 


let fl = document.getElementById("fl")
let ch = document.getElementById("ch")

fl.addEventListener("click", (() => {

  if (ch.classList.contains("translate-x-12")) {
    ch.classList.remove("translate-x-12")
  }
  else {
    ch.classList.add("translate-x-12")
  }



}))


let ppp = [22, 13, 35, 31]

// ************* Datatype conversetion ***************

console.log("......");
let nub = "33"
console.log(typeof nub);

let isnub = Number(nub)
console.log(isnub);
console.log(typeof isnub);



// **********************  oparetion *************


let ns = 4
ns++
console.log(ns++);

console.log(+true);
console.log(+false);

// *************** comparison fo datatype***********
let s = 2
let k = 1
console.log(s = k);


console.log(null < 0);
console.log(undefined < 0);

const score = 10
const id = Symbol("123")
const ids = Symbol("123")

console.log(id === ids);




// *********** Array **********

// push last element add 
// pop last element remove
// unshift frist element add
// shift frist element remove 
// join() array metthod  is string  and print 0,1,2,3, not array print [0,1,2,3]


const myarr = [0, 1, 2, 3, 4, 5]
myarr.push(5)
// myarr.pop()
myarr.unshift(45)
myarr.shift()

console.log(myarr);

const ls = myarr.includes(39)
console.log(ls);

const newarr = myarr.join()

console.log(newarr);


let sks = myarr.slice(2)

console.log(sks);


let sls = [3, 4, 1, 6, 34]
const nw = sls.slice(3)
console.log(nw);

let slss = [3, 4, 1, 6, 34]
slss.splice(3)
console.log(slss);


let fruits = ["mango", "banana", "orange"]
fruits.push("jackfruit")
let ks = fruits.indexOf("jackfruit")

let n = fruits.map((s) => {
  return s + " fruit"

})
console.log(n);
console.log(ks);

let prd = [
  { name: "shoe", price: 330, },
  { name: "bag", price: 230, },
  { name: "shirt", price: 360, },
]

let lsa = prd.filter((s, min) => {
  console.log(s.prd);



})



const heros = ["badman", "spiderman", "superman"]
const newheros = ["hero", "badluck", "sohel"]


const newh = [...heros, ...newheros]
console.log(newh);


const nmb = [2, 3, [12, 32, [53, 1, 8][5, 24, 16]]]
const nwa = nmb.flat(Infinity)
console.log(nwa
);



let a = [
  { name: "sohel", price: 130 },
  { name: "shamim", price: 100 },
  { name: "raju", price: 160 },
  { name: "sha", price: 10 },
]

let high = a[0]
let low = ""


let aks = a.forEach((s) => {
  if (s.price > high.price) {
    high = s.price
  }

})


console.log(high);


let addbtn = document.querySelectorAll(".addbtn")
let newdiv = document.getElementById("newdiv")
let newtext = document.getElementById("newtext")


const iphone = [
  { name: " iphone ", price: 99, },
]

function news() {
  newdiv.classList.remove("translate-x-full")
  newdiv.classList.remove("opacity-0")
  // newdiv.classList.remove("hidden")

}


function close() {
  newdiv.classList.add("translate-x-full")
  newdiv.classList.add("opacity-0")

}
addbtn.forEach((btn) => {

  btn.addEventListener("click", (s) => {
    const ka = btn.parentElement
    newtext.textContent = s.name

  })
  news()
})

document.addEventListener("click", (s) => {

  let ka = newdiv.contains(s.target)

  let ada = addbtn.contains(s.target)

  if (!ka && !ada) {
    close()
  }

})