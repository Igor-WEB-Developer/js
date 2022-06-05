"use strict";

let mas = ['a', 'b', 'c'];


mas[0] = 1;
mas[1] = 2;
mas[2] = 3;
console.log(mas);



// let obj = {'1a': 1, '2b': 2, 'c-c': 3};
// alert(obj['1a']+obj['2b']+obj['c-c']); // выведет [Object object]


// // let arr = [1, 2, 3];
// console.log( typeof arr[0] );

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// const arr = ['a', 'b', 'c'];

// console.log(arr);


let obj = {a: 1, b: 2, c: 3};
let key = 'a';

console.log(obj[key]);


let age = 18;
let adult;

if (age >= 18) 
{
	adult = true;
} else {
	adult = false;
}

console.log(adult);


// let ok = confirm('Текст вопроса');

// if (ok) {
// 	alert('вы ответили да');
// } else {
// 	alert('вы ответили нет');
// }






// let arr = [10, 20, 30, 50, 235, 3000];
// for(let i = 0; i < arr.length; i++)
// {
	
// 	let arr1 = String(arr[i]);
// 	if(arr1[0] == 1 )
// 	{
// 		console.log(arr[i])
// 	}
// 	if(arr1[0] == 2 )
// 	{
// 		console.log(arr[i])
// 	}
// 	if(arr1[0] == 5 )
// 	{
// 		console.log(arr[i])
// 	}
// }


let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false
for(let i = 0; i<arr.length; i++)
{
	if(arr[i] == 'cc')
	{
		flag = true;
		break;
	}

	

}
if(flag==true)
	{
		console.log('da')
		
	}
else
	{
		console.log('net')
		
	}



let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
obj={}
for(let i = 0; i < arr1.length; i++)
{
	obj[arr1[i]] = arr2[i]
	
}
console.log(obj)


obj={'a': 32, 'b': 42, 'c': 52}
let result={}
for(let key in obj)
{	
	console.log(key)
	result[obj[key]] = key
	console.log(obj[key])
}
console.log(result)








obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for(let keys in obj)
{
	if(obj[keys] <= 400)
	{
		obj[keys] *= 1.1
	}
}
console.log(obj)




let array = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (let subArr of array) {
	for (let elem of subArr) {
		console.log(elem);
	}
}
