var name1 = document.getElementById('name');
var rollno = document.getElementById('rollno');
var matric = document.getElementById('matric');
var fsc = document.getElementById('fsc');
var ecat = document.getElementById('ecat');
var btn = document.getElementById('submitbutton');
var contextname = document.getElementById('contextname');
var contextaggregate = document.getElementById('contextaggregate');

let studentsdata = JSON.parse(localStorage.getItem("StudentsData")) || [];


btn.addEventListener('click' , (e)=>{
  
   var agg =  ((matric.value/1100) * 0.2) + ((fsc.value/1100) * 0.3) + ((ecat.value/400) * 0.5);

    contextname.textContent = name1.value;
    contextaggregate.textContent = agg*100 + '%';
    if(agg*100 >= 60)
    {
        alert('Congratulations! You are eligible for admission.');
    }
    else
    {
        alert('You are not eligible for admission!');
    }
    studentname = name1.value;
    studentagg = agg*100;

    studentsdata.push({studentname , studentagg});

    localStorage.setItem("StudentsData" , JSON.stringify(studentsdata));


    setTimeout(clearfields, 8000);
 
});



function clearfields() {
    name1.value = '';
    rollno.value = '';
    ecat.value = '';
    matric.value = '';
    fsc.value = '';
    contextname.textContent = '-';
    contextaggregate.textContent = '0%';
}