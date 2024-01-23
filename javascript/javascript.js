
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



class Grades {
    constructor(ninth, tenth, 
                eleventh, twelveth) {
      this.ninth = ninth;
      this.tenth = tenth;
      this.eleventh = eleventh;
      this.twelveth = twelveth;
    }
}

// initialize state with default checkbox values
let state = {
    grades: new Grades(true, true, true, true),
    nonElectives: true,
    electives: true,
}

const checkboxes = {
    gradeNinth: document.querySelector('#ninthCheck'),
    gradeTenth: document.querySelector('#tenthCheck'),
    gradeEleventh: document.querySelector('#eleventhCheck'),
    gradeTwelveth: document.querySelector('#twelvethCheck'), 

    electives: document.querySelector('#electivesCheck'),
    nonElectives: document.querySelector('#nonElectivesCheck'),

}

init();

function readState() {
    var obj;

    try {
        obj = JSON.parse(sessionStorage.state);
    } catch (e) {
        console.error(e instanceof SyntaxError);
        console.error(e.message);
        console.error(e.name);
        console.error(e.fileName);
        console.error(e.lineNumber);
        console.error(e.columnNumber);
        console.error(e.stack);
    }

    return obj;
}

function writeState(obj) {
    sessionStorage.setItem('state', JSON.stringify(obj));
}

function init() {
    console.log('init()');

    var newState = readState();
    if (newState != null){
        state = newState;
    }
    else {
        writeState(state);
    }
    updatePage();  
}

function updatePage() {

    if (checkboxes != null){

        // Grades checkboxes
        if (checkboxes.gradeNinth != null){
            checkboxes.gradeNinth.checked = state.grades.ninth;
        }
        if (checkboxes.gradeTenth != null){
            checkboxes.gradeTenth.checked = state.grades.tenth;
        }
        if (checkboxes.gradeEleventh != null){
            checkboxes.gradeEleventh.checked = state.grades.eleventh;
        }
        if (checkboxes.gradeTwelveth != null){
            checkboxes.gradeTwelveth.checked = state.grades.twelveth;
        }

        // Nonelectives checkbox
        if (checkboxes.nonElectives != null){
            checkboxes.nonElectives.checked = state.nonElectives;
        }

        // Electives checkbox
        if (checkboxes.electives != null){
            checkboxes.electives.checked = state.electives;
        }
        

        
    }

    // Show or hide grade levels
    showHideGrades();

    // Show or hide non-electives
    showHideClass("non-electives", 
                   state.nonElectives);

    // Show or hide electives
    showHideClass("electives", 
                   state.electives);
}


/////////////////////////////////
// Grades event listener
//
checkboxes.gradeNinth.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.grades.ninth = !state.grades.ninth;
        writeState(state);
        updatePage();
    }  
});

checkboxes.gradeTenth.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.grades.tenth = !state.grades.tenth;
        writeState(state);
        updatePage();
    }  
});

checkboxes.gradeEleventh.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.grades.eleventh = !state.grades.eleventh;
        writeState(state);
        updatePage();
    }  
});

checkboxes.gradeTwelveth.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.grades.twelveth = !state.grades.twelveth;
        writeState(state);
        updatePage();
    }  
});


/////////////////////////////////
// Non-Electives event listener
//
checkboxes.nonElectives.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.nonElectives = !state.nonElectives;
        writeState(state);
        updatePage();
    }  
});



/////////////////////////////////
// Electives event listener
//
checkboxes.electives.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.electives = !state.electives;
        writeState(state);
        updatePage();
    }  
});

////////////////////////////////////
// Show / Hide elements functions
//
function showHideClass(className, show){
	let coursesList = document.getElementsByClassName(className);

	for (i = 0; i < coursesList.length; i++) {
		if (show == true){
			/* show */
			coursesList[i].style.display="block";
		}
		else {
			/* hide */
			coursesList[i].style.display="none";
		}
	}
}


function getGradesSelector(grades){
    let showSelector = '';
    
    if (grades.ninth == true) {
        showSelector += '.ninth-grade,';
    }
    if (grades.tenth == true) {
        showSelector += '.tenth-grade,';
    }
    if (grades.eleventh == true) {
        showSelector += '.eleventh-grade,';
    }
    if (grades.twelveth == true) {
        showSelector += '.twelveth-grade,';
    }
    // Remove the final character from selectors
    showSelector = showSelector.slice(0, -1);

    return showSelector;
}

function showHideGrades(){
    let showSelector = getGradesSelector(state.grades);
    let hideSelector = '.grade-selectors';

    showHide(showSelector, hideSelector);  
}

function showHide(showSelector, hideSelector) {
    try {
        console.log(hideSelector);
        var list = document.querySelectorAll(hideSelector);
        var count = 0;
        
        if (list != null) {
            list.forEach((element) => {
              element.style.display="none";
              count++;
            });
        }
        
        console.log(count);

    }
    catch (e) {
        console.error(e instanceof SyntaxError);
        console.error(e.message);
        console.error(e.name);
        console.error(e.fileName);
        console.error(e.lineNumber);
        console.error(e.columnNumber);
        console.error(e.stack);
    }    
    

    try {
        console.log(showSelector);
        if (showSelector !== ''){           
            var list = document.querySelectorAll(showSelector);
            var count = 0;
            
            if (list != null) {
                list.forEach((department) => {
                  department.style.display="block";
                  count++;
                });
                console.log(count);
            }
        }
    }
    catch (e) {
        console.error(e instanceof SyntaxError);
        console.error(e.message);
        console.error(e.name);
        console.error(e.fileName);
        console.error(e.lineNumber);
        console.error(e.columnNumber);
        console.error(e.stack);
    } 
}



