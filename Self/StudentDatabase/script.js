const searchFunc = () => {
  let getValue = document.getElementById("myInput").value.toLowerCase();
  console.log(getValue); //given value by user and it will be stored in getValue

  let myTable = document.getElementById("table"); //search by table
  let tableRow = myTable.getElementsByTagName("tr"); //search by rows
  let checkIfDataNotFound = 1;

  for (var i = 0; i < tableRow.length; i++) {
    let td = tableRow[i].getElementsByTagName("td")[1];
    if (td) {
      let textValue = td.textContent;
      if (textValue.toLowerCase().indexOf(getValue) > -1) {
        tableRow[i].style.display = ""; //just display
      } else {
        tableRow[i].style.display = "none";
        checkIfDataNotFound++;
      }
    }
  }
  console.log(checkIfDataNotFound);
  if (checkIfDataNotFound == tableRow.length) {
    document.getElementById("table").innerHTML =
      "<p>Student Not Found!!! Try Again or Enquire.</p>";
  }
};

const prsentCount = () => {
  let myTable = document.getElementById("table"); //search by table
  let tableRow = myTable.getElementsByTagName("tr"); //search by rows
  let count = 0;

  for (var i = 0; i < tableRow.length; i++) {
    let td = tableRow[i].getElementsByTagName("td")[6];

    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue === "Present") {
        count++;
        console.log(count);
      }
    }
  }
  document.getElementById("student-count").innerHTML = count;
};
