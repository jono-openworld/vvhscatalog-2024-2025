
function searchCourseName() {
    var input, filter, courseDivs, courseNameDivs, i, j;

    input = document.getElementById("nameInput");
    filter = input.value.toUpperCase();
    
    courseDivs = document.getElementsByClassName("course");
    
    for (i = 0; i < courseDivs.length; i++) {
        textSearchDivs = courseDivs[i].getElementsByClassName("textSearch");
        
        for (j = 0; j < textSearchDivs.length; j++) {

            if (textSearchDivs[j]) {
                txtValue = textSearchDivs[j].textContent || textSearchDivs[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    courseDivs[i].style.display = "";
                    break;
                } else {
                    courseDivs[i].style.display = "none";
                }
            }
        }
    }
} 
