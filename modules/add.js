/*eslint-disable*/

var k = "The respective values are :";
        function add_element_to_array() {
            var input = document.getElementsByName('array[]');
  
            for (var i = 0; i < input.length; i++) {
                var a = input[i];
                k = k + "array[" + i + "].value= " + a.value + " ";
            }
  
            document.getElementById("par").innerHTML = k;
            document.getElementById("po").innerHTML = "Output";
        }