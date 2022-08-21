function reverseNumber(num) {
     return (parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num));
}
function isPalindrome(str) {
     let re = /[^A-Za-z0-9]/g;
     str = str.toLowerCase().replace(re, '');
     for (let i = 0; i < str.length; i++) {
          if (str[i] !== str[str.length - 1 - i])
          return false;
     }
     return true;
}
function permutation(str) {
     let permutes = [];
     for (let i = 0; i < str.length; i++) {
          for (let j = i+1; j < str.length+1; j++) {
               permutes.push(str.slice(i, j));
          }
     }
     return permutes;
}
function alphabeticalString(str) {
     let arr = str.toLowerCase().split(''), sorted = arr.sort().join('').replace(/\s+/g, '');
     return sorted;
}
function firstUpper(str) {
     let arr = str.split(' ');
     for (let i = 0; i < arr.length; i++) {
          arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
     }
     return arr.join(' ');
}
function longestWord(str) {
     let array = str.split(' ');
     let longest = array[0];
     for (let i = 0; i < array.length; i++) {
        if (array[i].length > array[0].length) {
            longest = array[i];
            array[0] = array[i];
        }
    }
    return longest;
}
function countingVowels(str) {
     let counter = str.match(/[aeiou]/gi);
     if(counter)
          return counter.length;
     else
          return 0;
}
function isPrime(num) {
     if(num === 1)
          return console.error("Neither prime nor composite");
     else if(num){
          for (let i = 2; i < num; i++) {
               if(num % i == 0)
                    return false;
          }
          return true;
     }
}
function whatTypeIs(variable) {
     return typeof variable;
}
function createIdentityMatrix(num) {
     let matrix = [];
     for(let i = 0; i < num; i++){
          if(!matrix[i])
               matrix[i] = [];
          for(let j = 0; j < num; j++){
               if(i === j)
                    matrix[i][j] = 1;
               else
                    matrix[i][j] = 0;
          }
     }
     return matrix;
}
function secondLowestHighest(arr){
     arr.sort();
     const second = [arr[1], arr[arr.length-2]];
     return second;
}
function isPerfectNum(num) {
     let temp = 0;
     for (let i = 1; i < num.length; i++) {
          if(num % i === 0)
               temp+=i;
     }
     if(temp === number && temp !== 0)
          return true;
     else
          return false;
}
function factorsofNum(num){
     let factors = [];
     for (let i = 1; i < num; i++) {
          if(num % i === 0){
               factors.push(i);
          }
     }
     return factors;
}
function toCoins(num) {
     const coins = [25, 10, 5, 1];
     let change = [], i = 0;
     if(num === 0){
          return [];
     }
     while(num > 0){
          if(num - coins[i] < 0){
               i++;
          }
          else{
               num -= coins[i];
               change.push(coins[i]);
          }
     }
     return change;
}
function power(base, exponent) {
     return base ** exponent;
}
function uniqueCharacters(str) {
     let unique = "", temp = str;
     for (let i = 0; i < temp.length; i++) {
          if(unique.indexOf(temp.charAt(i)) === -1){
               unique += temp[i];
          }
     }
     return unique;
}
function letterOccurrances(str) {
     let arr = str.split(''), numberOfOccurrancesofEachLetter = [], counter = 0;
     for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
               if(arr[i] === arr[j])
                    counter++               
          }
          numberOfOccurrancesofEachLetter.push(arr[i], counter);
          counter = 0;
     }
     return numberOfOccurrancesofEachLetter;
}
function binarySearch(arr, searchingfor, start, end) {
     let mid=Math.floor((start + end)/2);
     if (start > end) 
          return false;
     if (arr[mid]===x)
          return true;
     if(arr[mid] > x)
          return recursiveFunction(arr, searchingfor, start, mid-1);
     else
          return recursiveFunction(arr, searchingfor, mid+1, end);
}
function elementGreaterThanNum(arr, num) {
     let greater = [];
     for (let i = 0; i < arr.length; i++) {
          if(arr[i] > num)
               greater.push(arr[i]);
     }
     return greater;
}
function generateID(num) {
     let generatedID = "";
     const char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
     for(var i=0; i < num; i++ ){  
          generatedID += char_list.charAt(Math.floor(Math.random() * char_list.length));
     }
     return generatedID;
}
function subsetsOfArray(arr, num) {
    let subsets = [], result = [];
    
    function getSubsets(repeat) {
        if (subsets.length === num) {   
            result.push(subsets.slice());
            return;
        }
        for (let i = repeat; i < arr.length; i++) {
            subsets.push(arr[i]);
            getSubsets(i + 1);
            subsets.pop();
        }
    }
    
    getSubsets(0);
    return result;
}
function countLetter(str, char) {
     return str.length - str.split(char).join("").length;
}
function firstNonrepeatedChar(str){
     for (let i = 0; i < str.length; i++) {
          if(countLetter(str, str[i]) == 1)
               return str[i];
     }
     return null;
}
function bubbleSort(arr) {
     let flag;
     let iteration = arr.length - 1;
     let sortedArr = arr;
     do {
          swapp = false;
          for (var i = 0; i < iteration; i++) {
               if (sortedArr[i] < sortedArr[i + 1]) {
               var temp = sortedArr[i];
               sortedArr[i] = sortedArr[i + 1];
               sortedArr[i + 1] = temp;
               flag = true;
               }
          }
          iteration--;
     }while(flag);
     return sortedArr;
}
function longestCountryName(arr) {
     let longest;
     for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
               if(arr[i].length > arr[j].length){
                    longest = arr[i];
               }
          }
     }
     return longest;
}
function longestSubstringWithoutRepeatingCharacters(str) {
     let length = 0, longestSubstring = "";
     let hash = {};
     for (let i = 0; i < str.length; i++) {
          if (!(str[i] in hash))
               hash[str[i]] = i; 
          else {
               if (length < (i - hash[str[i]])) {
                    length = i - hash[str[i]];
                    longestSubstring = str.substr(hash[str[i]], len);
               }
               hash[str[i]] = i;
          }
     }
     return longestSubstring;
}
function longestPalindrome(str) {
     let longest = 0, palindrome = "";
     for (let i = 0; i < str.length;) {
          let left = i, right = i;
          while (right + 1 < str.length && str[right] === str[right + 1]) {
               right++;
          }
          i = right + 1;
          while (right + 1 < str.length && left - 1 >= 0 && str[right + 1] === str[left - 1]) {
               left--;
               right++;
          }
          if (right - left + 1 > longest) {
               longest = right - left + 1;
               palindrome = str.substr(left, length);
          }
     }
     return palindrome;
}
//Number 28; This one requires a couple of functions
function passFunction(){
     return "Function passed Successfully";
}
function isPassed(){
     const pass = passFunction();
     console.log(pass);
}

function getFunctionName() {
     return arguments.callee.name;
}
