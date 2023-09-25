var arr = ["html","js", "css", "node"];

//****DISPLAYING INDEX 0***

document.write(arr[0]);

//***CHANGING INDEX 0 WITH NEW DATA PYTHON**

document.write(arr + "<br>" );

arr [0]="pyhton";

document.write(arr + "<br>" );
 

// **** TO KNOW THE LENGTH OF THE ARRAY ****

var len = arr.length;

document.write(len,  "<br>");


//***USING FOR LOOP TO CHECK THE LENGTH OF THE ARRAY***

for (var i=0; i<len; i++) {
    document.write(arr[i] + "<br>");
}

