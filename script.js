const inputbox=document.getElementById("input-box");
//give user  input as node
const listcontainer =document.getElementById("list container");
// buttoncall function is passed as onclick to button
function buttoncall()
{
    if(inputbox.value==='')
    {
        alert("You must write something");
    }
    else
    {
        let list=document.createElement("li");
        list.textContent=inputbox.value;
        // list.innerHTML=inputbox.value; works same
        // since only working with content
        listcontainer.appendChild(list);
        // Add the new (li) as a child to the container (ul)
        let crossicon=document.createElement("span");
        crossicon.textContent="\u00d7";
        //still by above code x is not displayed
        list.appendChild(crossicon);
        // here li is parent emement which is stored in list variable
        // parentElement.appendChild(child tag , span which is stored in crossicon);

    }  
    inputbox.value='';
    savedata(); //save data to local storage
    //remove writen text from input box after adding to list
    // inputbox.value=""; both works same?
}
function linethrough (e)
{
    // tagName It returns  the tag name in uppercase.
    if(e.target.tagName=="LI")
     {
       e.target.classList.toggle("checked");
       savedata() //  that checked content will be saved
     }
    else if (e.target.tagName=="SPAN")
    {
    e.target.parentElement.remove();
    savedata()//save all data again fresh 
    //excluding removed that is new data
     /// immediate parent of an element
     //span parent is li not ul
    }
}

listcontainer.addEventListener("click",linethrough);

// the click is sending the event to linethrough
//  call we  linethrough(eventrecieved) which can
//which is passed to e since it is parameter
//from that event we should extract where we have 
//clcked using target that extract tag

function savedata()
{
     localStorage.setItem("data",listcontainer.innerHTML);
    // what is ther in list container will be 
    // store in or set in data (can any thing) variable so we 
    // can access it after wards
    //setIdem only store data to localstorage
    // we need getItem to display data on screen

}

function showtask()
{
    listcontainer.innerHTML=localStorage.getItem("data")
   
    //listcontainer.textContent=localStorage.getItem("data");
}
 showtask();