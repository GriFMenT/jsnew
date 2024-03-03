// zad 1 - 31
let div1 = document.querySelector('#zad-1')
let btn1 = document.querySelector('#zad-1 .btn-1')
let btn2 = document.querySelector('#zad-1 .btn-2')
let btn3 = document.querySelector('#zad-1 .btn-3')

btn1.addEventListener('click', function () {
	div1.style.cssText = `
		width: 400px;
		height: 300px;
		font-size: 1.5em;
	`

	console.log(parseInt(div1.style.width))
	console.log(parseInt(div1.style.height))
	console.log(parseFloat(div1.style.fontSize))
})

btn2.addEventListener('click', function () {
	div1.style.width = parseInt(div1.style.width) + 50 + 'px'
	div1.style.height =
		parseInt(div1.style.height) + parseInt(div1.style.height) / 10 + 'px'
})

btn3.addEventListener('click', function () {
	div1.style.border = '1px solid red'
	console.log(div1.style.borderWidth)
	console.log(div1.style.borderStyle)
	console.log(div1.style.borderColor)
})

// computedStyle. ... - объект, содержащий значения CSS свойств для нашего элемента

// ... .dataset. ... - такой атрибут может иметь только одно значение и при записи новое значение само будет затирать старое.

// client ... - клиентский размер элемента, включающий в себя размер содержимого и внутреннего отступа, и не включающего в себя полосу прокрутки

// offset ... - содержит полный размер элемента

// scroll ... - содержит размеры элемента с учетом спрятанной под прокруткой части

// Следующие свойства содержат то, на сколько прокручен элемент:
// croll Top - сверху
// scroll Left - слева

// Следующие свойства содержат размеры окна браузера, не включающие в себя полосу прокрутки:
// let w = document.documentElement.clientWidth;  - ширина
// let h = document.documentElement.clientHeight; - высота

// Следующие свойства включают в себя полосу прокрутки:
// let w = window.innerWidth;  - ширина
// let h = window.innerHeight; - высота

// Разница между двумя типами свойств дает размер полосы прокрутки:
// let w1 = document.documentElement.clientWidth;
// let w2 = window.innerWidth;
// console.log(w2 - w1);

// Следующие свойства содержат то, на сколько прокручено окно (только для чтения):
// let x = window.pageXOffset - слева
// let y = window.pageYOffset - сверху

// Существует событие scroll, с помощью которого можно поймать момент, когда пользователь прокручивает окно

// zad 32 - 50
let map = new Map()

let arr1 = [1, 2]
let arr2 = [3, 4]
let arr3 = [5, 6]

let obj1 = { id: 1 }
let obj2 = { id: 2 }
let obj3 = { id: 3 }

map.set(obj1, arr1)
map.set(obj2, arr2)
map.set(obj3, arr3)

console.log(map)
console.log(map.size)
console.log(map.has(obj1))

// map.delete(obj1)
// map.clear()

for (let elem of map) {
	console.log(elem)
}

for (let [key, elem] of map) {
	console.log(key)
	console.log(elem)
}

let keys = map.keys()
for (let key of keys) {
	console.log(key)
}

let entries = Array.from(map.entries())
for (let [key, value] of entries) {
	console.log(key, value)
}

let inps = document.querySelectorAll('#zad-32 input')
let map2 = new Map()

let i = 1
for (let inp of inps) {
	map2.set(inp, i++)
}

for (let inp of inps) {
	inp.addEventListener('click', function () {
		this.value = map2.get(this)
	})
}

let numbers = []

for (input of inps) {
	input.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			let value = parseFloat(this.value)

			if (!isNaN(value)) {
				numbers.push(value)
				this.value = ''
			}
		}
	})

	input.addEventListener('blur', function () {
		console.log(numbers)
	})
}

let set = new Set()

set.add(1)
set.add(2)
set.add(3)
set.add(3)

console.log(set)

let arr = [1, 2, 3, 1, 3, 4]
let set2 = new Set(arr)

console.log(set2)
console.log(set2.size)
console.log(set2.has(1))
console.log(set2.has(5))

set2.delete(1)
// set.clear();

for (let elem of set2) {
	console.log(elem)
	console.log((elem += elem))
}

let arr4 = [...set2]
// let arr4 = Array.from(set2);
let set3 = new Set(arr4)

function func(arr4) {
	let res = [...new Set(arr4)]
	console.log(res)
}

func(arr4)

let ps = document.querySelectorAll('p')
let btn = document.querySelector('#zad-32 button')
let set4 = new Set()

for (let p of ps) {
	p.addEventListener('click', function () {
		set4.add(this)
	})
}

btn.addEventListener('click', function () {
	for (let p of set4) {
		p.textContent += '!'
	}
})

console.log(ps.length)
console.log(ps[0])
console.log(ps[1])

let asd = [...ps]

// let asd = []
// for (let p of ps) {
// 	arr.push(p)
// }

// let asd = Array.from(ps)

console.log(asd.slice(1, -1))

// У псевдомасивов нет методов массивов, таких как map, join, slice.

let test = [[1, 2, 3], { a: 1, b: 2, c: 3 }, [3, 4, 5], { x: 1, y: 2, z: 3 }]

for (let tst of test) {
	let res = Array.isArray(tst)
	console.log(res)
}

// zad 51 - 59
let sym1 = Symbol('текстовое описание')
let sym2 = Symbol('текстовое описание2')

console.log(sym1, sym2)

let obj = { a: 1, b: 2, c: 3 }
let sym = Symbol()

obj[sym] = '4'
console.log(obj)

obj[sym] = function () {
	console.log(new Date())
	console.log(this)
}

for (let key in obj) {
	console.log(obj[key])
}

obj[sym]()

obj[sym] = function () {
	let sum = 0

	for (let key in this) {
		sum += this[key]
	}

	return sum
}

console.log(obj[sym]())

// С помощью метода Symbol.for можно создавать символы с именем. Эти символы будут сохранены в глобальный реестр символов и доступ к ним можно будет получить из любого места кода.

let sym3 = Symbol.for('test1')
let sym4 = Symbol.for('test2')

console.log(Symbol.keyFor(sym3), Symbol.keyFor(sym4))

let setTest = new Set()
console.log(setTest[Symbol.iterator])

let mapTest = new Map()
console.log(mapTest[Symbol.iterator])

// TODO: zad 60 - 77

// zad 78 - 81
let json = '[1, 2, 3, "a", "b", "c"]'

let jsonobj = `{
	"a": 1,
	"b": 2,
	"c": "eee",
	"d": true
}`

let obj4 = `{
	"a": ["a", "b", "c"],
	"b": "111",
	"c": "eee"
}`

let json2 = '[1,2,3,4,5]'
let arr6 = JSON.parse(json2)
let sum = 0

for (let i = 0; i < arr6.length; i++) {
	sum += arr[i]
}

console.log(sum)

let json3 = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`
let arr7 = JSON.parse(json3)
console.log(arr7)

let json4 = '["user1","user2","user3","user4","user5"]'
let arr8 = JSON.parse(json4)

let ul = document.createElement('ul')

for (let arr of arr8) {
	let li = document.createElement('li')
	li.textContent = arr

	ul.appendChild(li)
}

document.body.appendChild(ul)

let arr9 = ['user1', 'user2', 'user3', 'user4', 'user5']
let json5 = JSON.stringify(arr9)

let li = document.querySelectorAll('#zad-78 ul li')
let goroda = [...li].map(city => city.textContent)
let json6 = JSON.stringify(goroda)

console.log(json6)

let rows = document.querySelectorAll('#zad-78 table tr')

let data = Array.from(rows)
	.slice(1)
	.map(row => {
		let columns = row.querySelectorAll('td')
		return {
			surname: columns[0].textContent,
			name: columns[1].textContent,
			patronymic: columns[2].textContent,
		}
	})

console.log(JSON.stringify(data))

let json7 = '["user1","user2","user3","user4","user5"]'

let arr5 = JSON.parse(json7)
arr5.push('user6')
let res = JSON.stringify(arr5)
console.log(JSON.stringify(arr5))

let arr10 = JSON.parse(res)
arr10[1] = 'юзер2'
console.log(JSON.stringify(arr10))

let json8 = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`

let arr11 = JSON.parse(json8)
arr11.push({ name: 'user4', age: 28, salary: 3000 })
console.log(JSON.stringify(arr11))

// zad 82 - 95
localStorage.setItem('key1', 1)
localStorage.setItem('key2', 2)
localStorage.setItem('key3', 3)

console.log(
	Number(localStorage.getItem('key1')) +
		Number(localStorage.getItem('key2')) +
		Number(localStorage.getItem('key3'))
)

let time = localStorage.getItem('time')
// if (!time) {
// 	localStorage.setItem('time', Date.now())
// }
localStorage.setItem('time', Date.now())
console.log((Date.now() - time) / 60000)

let inputx = document.querySelector('#zad-82 input')
let txt = localStorage.getItem('txt')

inputx.addEventListener('blur', function () {
	localStorage.setItem('txt', inputx.value)
})

inputx.value = txt

let reload = localStorage.getItem('reload')
let i2 = 0
i2 = Number(reload) + 1
localStorage.setItem('reload', i2)
console.log(reload)

if (reload >= 10) {
	localStorage.removeItem('reload')
}

console.log(localStorage.length)
console.log(localStorage.getItem(localStorage.key(2)))

// localStorage.clear()

for (let i = 0; i < localStorage.length; i++) {
	let key = localStorage.key(i)
	let val = localStorage.getItem(key)

	console.log(val)
}

// Object.keys(localStorage)
// Object.values(localStorage)

let inputs = document.querySelectorAll('#zad-94 input')
let btn4 = document.querySelector('#zad-94 button')

btn4.addEventListener('click', function () {
	localStorage.setItem(
		'input',
		JSON.stringify(Array.from(inputs).map(input => input.value))
	)
})

let inpval = JSON.parse(localStorage.getItem('input'))
for (let i = 0; i < inputs.length; i++) {
	inputs[i].value = inpval[i] || ''
}

let igp1 = document.querySelector('#zad-95 #inp1')
let igp2 = document.querySelector('#zad-95 #inp2')
let igp3 = document.querySelector('#zad-95 #inp3')
let bjn1 = document.querySelector('#zad-95 #btn1')

let users = JSON.parse(localStorage.getItem('users')) || []

bjn1.addEventListener('click', function () {
	let surname = igp1.value
	let name = igp2.value
	let age = Number(igp3.value)

	users.push({ surn: surname, name: name, age: age })
	localStorage.setItem('users', JSON.stringify(users))
})

console.log(users)

// Практика на localStorage в JavaScript
// zad-1

// zad-2

// zad-3
