
//১. ভ্যারিয়েবল, কনসোল, কন্ডিশন

// let age = 18;

// if(age>=18){
//     console.log("You can vote")
// }
// else{
//     console.log("You cannot vote")
// }


// ২. লুপ দিয়ে কাউন্ট করা

// let count = 0;
// for (let i =1; i <=10; i++){
//     count = count+i;
// }

// console.log("Total:", count);


//৩. অ্যারে থেকে সর্বোচ্চ সংখ্যাটি খুঁজে বের করা

// let arr = [12,34,56,78,9];

// let max = arr[0];

// for ( let i=1; i < arr.length; i++){
//     if (arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log("largest number:", max);


// ৪. স্ট্রিং উল্টো করা (রিভার্স)

// const word = "hello";
// let reversed = "";

// for (let i = word.length - 1; i >= 0; i--){
//     reversed = reversed + word[i];
// }

// console.log("Reversed:",reversed);



// ৫.ক্যারেক্টার কাউন্ট (স্ট্রিং এ কয়টা ভাওয়েল আছে)

// let str = "Switzerland";

// let count = 0;

// for(let i = 0; i <= str.length; i++){
//     const ch = str[i];
    
//     if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
//         count++;

//     }
// }

// console.log("Vowel Count:", count);



// ৬. নাম্বারের ফ্যাক্টোরিয়াল

// const num = 5;
// let fact = 1;
// for(let i = 1; i <= num; i++){
//     fact = fact * i;
// }

// console.log("Factorial of 5:",fact);



// ৭. সংখ্যা জোড় না বিজোড়

// let num = 7;

// if(num % 2 == 0){
//     console.log("Even Number")
// }

// else{
//     console.log("Odd Number");
// }



// ৮. অ্যারেতে উপাদান খুঁজে বের করা (without includes)

// let house = ["targaryen","lannister","stark","baratheon"];
// let target = "baratheon";
// let found = false;

// for( let i = 0; i < house.length; i++){
//     if( house[i] == target){
//         found = true;
 
//     }
// }

// console.log("Found",found);



// ৯. অ্যারে উল্টো করা (নতুন অ্যারে বানিয়ে)

// let arr1 = ["mango","banana","coconut","guava"];
// let arr2 = [];

// for(let i = arr1.length - 1; i>= 0; i--){
//     arr2.push(arr1[i]);

// }

// console.log("Reversed Array:",arr2);


// ১০. ডিজিট কাউন্ট (একটি সংখ্যা কত অঙ্কের)

// let num = 12345;
// let count = 0;
// while(num!==0){
//     num = Math.floor(num/10);
//     count++;
// }

// console.log("Total Digit:",count);









