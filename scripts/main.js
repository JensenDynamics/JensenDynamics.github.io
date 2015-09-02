function search()
{
var s = parseFloat(document.getElementById("demo").innerHTML);
window.location.href = "http://www.mouser.com/Search/Refine.aspx?Keyword=" + s +" ohms";

}


function onload()
{
}

function menupicker()
{


    var index = document.getElementById("menua").selectedIndex;

    if(index == 1)
    {
    onloadres();
    }

    if(index == 2)
    {
    capcodes();
    }


    document.getElementById("menua").selectedIndex="0";

}



function menupicker2()
{


    var index = document.getElementById("menud").selectedIndex;

    if(index == 1)
    {
    onloadres();
    }

    if(index == 2)
    {
    capcodes();
    }


    document.getElementById("menud").selectedIndex="0";

}

function menupicker3()
{


    var index = document.getElementById("menupcb").selectedIndex;

    if(index == 1)
    {
    onloadres();
    }

    if(index == 2)
    {
    capcodes();
    }


    document.getElementById("menupcb").selectedIndex="0";

}


function menupicker4()
{


    var index = document.getElementById("menumech").selectedIndex;

    if(index == 1)
    {
    drilltap();
    }

    if(index == 2)
    {
    capcodes();
    }


    document.getElementById("menumech").selectedIndex="0";

}
