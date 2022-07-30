
var i = 6
while(i != -1)
{
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
    i = i - 1;
}

function handleClick()
{
    alert("I got clicked!");
}

