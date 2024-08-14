function addtablerowwithdata(stdname ,  stdagg)
{
    var table = document.getElementById("table").getElementsByTagName('tbody')[0]; 
    var tablerow = document.createElement('tr');
    var namecell =  document.createElement("td");
    namecell.innerText = stdname;
    var aggcell =  document.createElement("td");
    aggcell.innerHTML = stdagg;
    tablerow.appendChild(namecell);
    tablerow.appendChild(aggcell);
    table.append(tablerow);
}

function datafromlocalstorage()
{
     var studentsdata = JSON.parse(localStorage.getItem("StudentsData"));

     if(studentsdata)
     {
        studentsdata.forEach(element => {
            addtablerowwithdata(element.studentname , element.studentagg);          
        });
        
    }
}

datafromlocalstorage();