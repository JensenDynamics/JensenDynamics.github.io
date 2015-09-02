






function capcodes()
{
    
    var htmlcode = "<p>Capacitor Code Calculator</p>";
    
    
    
    
    htmlcode = htmlcode + "<select id='cap1' name='Color' onclick='calccapcode()'> <option value='0' style='background-color:white'>0</option> <option value='1' style='background-color:white'>1</option>  <option value='2' style='background-color:white'>2</option>     <option value='3' style='background-color:white'>3</option>    <option value='4' style='background-color:white'>4</option>    <option value='5' style='background-color:white'>5</option>   <option value='6' style='background-color:white'>6</option>   <option value='7' style='background-color:white'>7</option> <option value='8' style='background-color:white'>8</option> <option value='9' style='background-color:white'>9</option>   </select> &nbsp    <select id='cap2' name='Color' onclick='calccapcode()'> <option value='0' style='background-color:white'>0</option> <option value='1' style='background-color:white'>1</option>  <option value='2' style='background-color:white'>2</option>     <option value='3' style='background-color:white'>3</option>    <option value='4' style='background-color:white'>4</option>    <option value='5' style='background-color:white'>5</option>   <option value='6' style='background-color:white'>6</option>   <option value='7' style='background-color:white'>7</option> <option value='8' style='background-color:white'>8</option> <option value='9' style='background-color:white'>9</option>   </select>                               &nbsp    <select id='cap3' name='Color' onclick='calccapcode()'> <option value='0' style='background-color:white'>0</option> <option value='1' style='background-color:white'>1</option>  <option value='2' style='background-color:white'>2</option>     <option value='3' style='background-color:white'>3</option>    <option value='4' style='background-color:white'>4</option>    <option value='5' style='background-color:white'>5</option>   <option value='6' style='background-color:white'>6</option>   <option value='7' style='background-color:white'>7</option> <option value='8' style='background-color:white'>8</option> <option value='9' style='background-color:white'>9</option>   </select>  <p style='padding:10px' id='result'> </p>"
    
    document.getElementById("apptext").innerHTML = htmlcode;
    
}


function calccapcode()
{
    
    
    var cap1 = document.getElementById("cap1").value;
    var cap2 = document.getElementById("cap2").value;
    
    cap1 = cap1+cap2;
    var cap3 = document.getElementById("cap3").value;
    
    var number = parseFloat(cap1);

    
    
    number= number*(Math.pow(10,parseFloat(cap3)));
    
    
    
    document.getElementById("result").innerHTML = number + "pF";
    
    
    
    
    
}
