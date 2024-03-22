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
// for (let i = 0; i < inputs.length; i++) {
// 	inputs[i].value = inpval[i] || ''
// }

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

// zad-96 - 136
let strRep = 'ahb acb aeb aeeb adcb axeb'
console.log(strRep.replace(/a.b/g, 'нашёл '))

let strRep2 = 'aba aca aea abba adca abea'
console.log(strRep2.replace(/a..a/g, 'нашёл '))
console.log(strRep2.replace(/ab.a/g, 'нашёл '))

let strRep4 = 'aa aba abba abbba abca abea'
console.log(strRep4.replace(/ab+a/g, 'нашёл '))
console.log(strRep4.replace(/ab*a/g, 'нашёл '))
console.log(strRep4.replace(/ab?a/g, 'нашёл '))
console.log(strRep4.replace(/ab*a/g, 'нашёл '))

let strRep5 = 'ab abab abab abababab abea'
console.log(strRep5.replace(/(ab)+/g, 'нашёл '))

let strRep6 = 'a.a aba aea'
console.log(strRep6.replace(/a\.a/g, 'нашёл '))

let strRep7 = '2+3 223 2223'
console.log(strRep7.replace(/2\+3/g, 'нашёл '))

let strRep8 = '23 2+3 2++3 2+++3 345 567'
console.log(strRep8.replace(/2\++3/g, 'нашёл '))

let strRep9 = '23 2+3 2++3 2+++3 445 677'
console.log(strRep9.replace(/2\+*3/g, 'нашёл '))

let strRep10 = '*+ *q+ *qq+ *qqq+ *qqq qqq+'
console.log(strRep10.replace(/\*q+\+/g, 'нашёл '))

let strRep11 = '[abc] {abc} abc (abc) [abc]'
console.log(strRep11.replace(/\[...\]/g, '!'))

let strRep12 = 'aa aba abba abbba abbbba abbbbba'
console.log(strRep12.replace(/ab{2,4}a/g, 'нашёл '))
console.log(strRep12.replace(/ab{1,3}a/g, 'нашёл '))
console.log(strRep12.replace(/ab{4,}a/g, 'нашёл '))

let strRep13 = 'aba accca azzza wwwwa'
console.log(strRep13.replace(/a??a/g, '!'))

let strRep14 = 'a1a a2a a3a a4a a5a aba aca'
console.log(strRep14.replace(/a\da/g, 'нашёл '))

let strRep15 = 'a1a a22a a333a a4444a a55555a aba aca'
console.log(strRep15.replace(/a\d+a/g, 'нашёл '))

let strRep16 = 'aa a1a a22a a333a a4444a a55555a aba aca'
console.log(strRep16.replace(/a\d*a/g, 'нашёл '))

let strRep17 = 'avb a1b a2b a3b a4b a5b abb acb'
console.log(strRep17.replace(/a\Db/g, 'нашёл '))

let strRep18 = 'ave a#b a2b a$b a4b a5b a-b acb'
console.log(strRep18.replace(/a\Wb/g, 'нашёл '))
console.log(strRep18.replace(/\s/g, ' ! '))

let strRep19 = 'aba aea aca aza axa'
console.log(strRep19.replace(/a[bex]a/g, 'нашёл '))

let strRep20 = 'a1a a3a a7a a9a aba'
console.log(strRep20.replace(/a[3-6]a/g, 'нашёл '))

let strRep21 = 'aba aea afa aha aga'
console.log(strRep21.replace(/a[a-g]a/g, 'нашёл '))
console.log(strRep21.replace(/a[a-fj-z]a/g, 'нашёл '))

let strRep22 = 'aAa aea aEa aJa a3a'
console.log(strRep22.replace(/a[a-fA-D]a/g, 'нашёл '))

let strRep23 = 'aAXa aeffa aGha aza ax23a a3sSa'
console.log(strRep23.replace(/a[a-z]+a/g, 'нашёл '))
console.log(strRep23.replace(/a[a-z\d]+a/g, 'нашёл ')) // либо [a-z0-9]

let strRepX = ''
console.log(strRepX.replace(/1[^ex]2/g, 'нашёл '))
console.log(strRepX.replace(/x[^2-7]z/g, 'нашёл '))
console.log(strRepX.replace(/x[^A-Z]+z/g, 'нашёл '))
console.log(strRepX.replace(/x[^A-Za-z1-5]+z/g, 'нашёл '))

let strRep24 = 'wйw wяw wёw wqw'
console.log(strRep24.replace(/w[а-яёА-ЯЁ]w/g, 'нашёл '))

let strRep25 = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'
console.log(strRep25.replace(/[а-яёА-ЯЁ]*/g, 'нашёл '))

let strRep26 = 'aba aea aca aza axa a.a a+a a*a'
console.log(strRep26.replace(/a[.+*]a/g, 'нашёл '))

let strRep27 = 'xaz x.z x3z x@z x$z xrz'
console.log(strRep27.replace(/x[^.@$]z/g, 'нашёл '))

console.log(strRepX.replace(/[\d.]+/g, 'нашёл '))
console.log(strRepX.replace(/[\Wa-g]{3,7}/g, 'нашёл '))

let strRep28 = 'x[]z x[[]]z x()z'
console.log(strRep28.replace(/x[\[\]]*z/g, 'нашёл '))

let strRep29 = 'x[]z x{}z x.z x()z x([])z'
console.log(strRep29.replace(/x[\[\](){}]*z/g, 'нашёл '))

let strRep30 = '^xx axx ^zz bkk @ss'
console.log(strRep30.replace(/[^\^\s][a-zA-Z][a-zA-Z]/g, 'нашёл '))

let strRep31 = 'xaz xBz xcz x-z x@z'
console.log(strRep31.replace(/x[a-zA-Z-]z/g, 'нашёл '))

let strRep32 = 'xaz x$z x-z xcz x+z x%z x*z'
console.log(strRep32.replace(/x[$\-+]z/g, 'нашёл '))

// let xxx = str.replace(/[a-z]/gi, '!')

let strRep33 = 'abc def xyz'
console.log(strRep33.replace(/^[a-zA-Z]+/g, 'нашёл '))
console.log(strRep33.replace(/[a-zA-Z]+$/g, 'нашёл '))
console.log(strRep33.replace(/\b/g, '#'))
console.log(strRep33.replace(/\B/g, '+'))

console.log(strRepX.replace(/$/gm, '!'))
console.log(strRepX.replace(/^/gm, '! '))
console.log(strRepX.replace(/\b/g, '! '))
console.log(strRepX.replace(/[\b\t]/g, '! '))
console.log(strRepX.replace(/[\b\n]/gm, '! '))
console.log(strRepX.replace(/^/gm, '     !'))

let strRep34 = 'aeeea aeea aea axa axxa axxxa'
console.log(strRep34.replace(/a(e*|x*)a/g, 'нашёл '))
console.log(strRep34.replace(/a(e{2}|x*)a/g, 'нашёл '))

let strRep35 = 'a aa aaa aaaa aaaa'
let rep35 = /a+/g
console.log(strRep35.replace(rep35, 'нашёл '))

console.log(/^http:\/\//g.test('http://'))
console.log(/^https?:\/\//g.test('https://'))
console.log(/.+[txt | php | html]$/.test('ddd.html ddd.txt ddd.php'))
console.log(/.+jpe?g$/g.test('123.jpg 123.jpeg'))
console.log(/.+[jpe?g | png]$/g.test('123.jpg 123.jpeg 123.png'))
console.log(/^\d{1,12}$/g.test('123456789'))
console.log(
	/^[0-3][0-9]\.[1-9][0-2]\.[0-2][0-1][0-9][0-9]$/g.test('20.11.2005')
)
console.log(/^[0-2][0-9]\:[0-6][0-9]\:[0-6][0-9]$/g.test('18:10:30'))
console.log(/^\w{1,15}@\w{1,10}\.\w{1,5}$/g.test('pochta@gmail.com'))
console.log(/^\w{1,99}\.\w{1,99}$/g.test('code.mu'))

let strRep36 = '1 23 456 789'
console.log(strRep36.search(/\d{3}/g))

let strRep37 = '2025-12-31 12:59:59'
console.log(strRep37.split(/[\-\:\s]/g))

let strRep38 = 'aaa 123 bbb'
console.log(strRep38.match(/\d+/)[0])
console.log(strRep38.match(/\d+/).index)

let strRep39 = 'sss domain.ru zzz'
console.log(strRep39.match(/(\w+)\.(ru)/)[0])
console.log(strRep39.match(/(\w+)\.(ru)/)[1])
console.log(strRep39.match(/(\w+)\.(ru)/)[2])

let strRep40 = '31.12.2025'
console.log(strRep40.match(/(\d+)\.(\d+)\.(\d+)/)[0])
console.log(strRep40.match(/(\d+)\.(\d+)\.(\d+)/)[1])
console.log(strRep40.match(/(\d+)\.(\d+)\.(\d+)/)[2])
console.log(strRep40.match(/(\d+)\.(\d+)\.(\d+)/)[3])

let strRep41 = 'site.ru sss site.com zzz site.net'
console.log(strRep41.match(/\w+\.\w+/g))

let strRep42 = 'a1b c34d x567z'
let resRep42 = strRep42.match(/\d+/g)
for (let res of resRep42) {
	sum += Number(res)
}
console.log(sum)

let strRep43 = '12:37 15:48 17:59'
let resRep43 = strRep43.matchAll(/(\d\d)\:(\d\d)/g)
for (let match of resRep43) {
	console.log(match)
}

let strRep44 = 'site.ru sss site.com zzz site.net'
let resRep44 = strRep44.matchAll(/(\w+)\.(\w+)/g)
for (let match of resRep44) {
	console.log(match)
}

let strRep45 = '12:37:57 15:48:58 17:59:59'
let regex = /(\d\d)\:(\d\d)\:(\d\d)/g
let resRep45
while ((resRep45 = regex.exec(strRep45))) {
	console.log(resRep45)
}

let strRep46 = '12:37 15:48 17:59'
let regRep46 = /(\d\d)\:(\d\d)/g
regRep46.lastIndex = 4
let resRep46 = regRep46.exec(strRep46)
console.log(resRep46)

let strRep47 = '12 34 56 78'
console.log(strRep47.replace(/(\d)(\d)/g, '$2$1'))

let strRep48 = '31.12.2025'
console.log(strRep48.replace(/(\d\d)\.(\d\d)\.(\d\d\d\d)/g, '$3.$2.$1'))

let strRep49 = 'aaa [2] bbb [3] ccc [12] ddd'
let resRep49 = strRep49.replace(/\d+/g, function (match) {
	return match * 2
})
console.log(resRep49)

let strRep50 = '123 456 789'
let resRep50 = strRep50.replace(/(\d+)/g, function (match) {
	return match.split('').reverse().join('')
})
console.log(resRep50)

let strRep51 = '31.12.2025 30.11.2024 29.10.2023'
let resRep51 = strRep51.replace(/(\d\d\.\d\d\.\d\d\d\d)/g, function (match) {
	return match.split('.').reverse().join('-')
})
console.log(resRep51)

let strRep52 = 'a1b2c3'
console.log(strRep52.replace(/(\d)/g, ' $1$1$1 '))

let strRep53 = 'sss site.ru zzz site.com kkk'
console.log(strRep53.replace(/(\w+\.\w+)/g, 'http://$1'))

let strRep54 = 'aaa bbb ccc xyz'
console.log(strRep54.replace(/([a-z])\1/g, 'нашёл '))

let strRep55 = 'a aa aaa aaaa aaaaa'
console.log(strRep55.replace(/([a-z]){1,}\1/g, 'нашёл '))

let strRep56 = 'aaa aaa bbb bbb ccc ddd'
console.log(strRep56.replace(/([a-z]+)\s\1/g, 'нашёл '))

let strRep57 = '12:59:59'
let regRep57 = /(?<hours>\d{2})\:(?<minutes>\d{2})\:(?<seconds>\d{2})/
let resRep57 = strRep57.match(regRep57)
console.log(resRep57.groups)
console.log(resRep57.groups.hours)
console.log(resRep57.groups.minutes)
console.log(resRep57.groups.seconds)

// TODO: 131 - 136
