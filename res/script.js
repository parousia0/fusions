function filter(filter) {
    var filter, table, tr, td, i, txtValue;
    // input = document.getElementById("myInput");
    // filter = input.value.toUpperCase();
    filter = filter.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) { //skip first line aka the head
        // td = tr[i].getElementsByTagName("td")[0];
        alltags = tr[i].getElementsByTagName("td");
        isFound = false;
        for(j=0; j< alltags.length; j++) {
            td = alltags[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    j = alltags.length;
                    isFound = true;
                }
            }
        }
        if(!isFound && tr[i].className !== "header") {
            tr[i].style.display = "none";
        }
    }
}