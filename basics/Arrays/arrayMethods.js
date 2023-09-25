var arr = ["html","js", "css", "node","java", "xml",];

//*** PUSH***  "it will insert a new value into the array(last index) and return a new array 

arr.push("REACT");
document.write(arr, "<br/>" );

//*** UNSHIFT **** "it will insert a new value into the array(first index)and return a new array " */


arr.unshift("REACT");
document.write(arr, "<br/>" );

//***SHIFT**** "it will remove the value from the array(first index) and return a new array"

arr.shift();
document.write(arr , "<br/>");

//***POP**** "it will remove the value from the array(last index) and return a new array"

arr.pop();
document.write(arr , "<br/>");

//***slice is used to extract the value from the orginal array and return a new array(it will create a new array from sliceing the elements form the orginal array) *** 

//**SYNTAX :array.slice(start, end)****

const slicedArr=arr.slice(1,3)
 document.write(arr, "<br/>");
 document.write(slicedArr, "<br/>");


 //*** splice is used remove ,replacing or add elements from the orginal array and can be create an new spliced array by showing the spliced elements */

 //**SYNTAX :array.splice(start, deleteCount, item1, item2, ...)****


 document.write(arr, "<br/>");

 const spliceArr=arr.splice(1,4,"sliced","spliced")

 document.write(spliceArr, "<br/>");
 document.write(arr, "<br/>");

