function displayImage(img) {
    var newUrl = img.replace("small", "medium")
    document.getElementById('activeImg').src = newUrl
    document.getElementById('targetImg').src = newUrl
    document.getElementById('finalImg').src = newUrl
    document.getElementById('finalImgOverlay').src = newUrl
    document.getElementById('targetImgfeedback').src = img
    document.getElementById('activeImg').style.display = "block"
    document.getElementById('nextEffects').disabled = false
    document.getElementById('nextEffects').style.opacity = 1
}

function displayEffect(effect) {
    document.getElementById('nextIntensity').disabled = false
    document.getElementById('nextIntensity').style.opacity = 1
    document.getElementById('effectImg').className = effect
    document.getElementById('effectImgfeedback').className = effect
    document.getElementById('finalImgOverlay').className = effect
}

function displayIntensity(intensity) {
    document.getElementById('nextFeedback').disabled = false
    document.getElementById('nextFeedback').style.opacity = 1;
    document.getElementById('finalImgOverlay').style.opacity  = intensity;
    if (intensity == 1) {
        document.getElementById('finalImg').style.display = "none"; 
    }
}

function displayReturned() {
    document.getElementbyId('')
}

function nextPage(current, next) {
    if (next == 'intensityPage') {
        var group = document.getElementById('group').value
        if (group == 'a') {
            next = 'feedbackPage'
            document.getElementById('finalImgOverlay').style.opacity = 1; 
            document.getElementById('finalImg').style.opacity = 0; 
//            document.getElementById('finalImgOverlay').style.opacity = Math.random(); 
        }
    }

    if (next == 'feedbackPage') {
        document.getElementById('submit').style.display = "block"
    } 

    document.getElementById(current).style.display = "none";
    document.getElementById(next).style.display = "block"; 
}

function validate() {
    var toCheck = ['expectations1', 'satisfaction', 'creativecontrol1', 'creativecontrolamount', 'creativeself', 'expectations2', 'creativecontrol2', 'ownership'];
    var numQuestions = toCheck.length; 
    var canSend = false;

    // loop through all questions 
    for (var i = 0; i < numQuestions; i++) {
        var answered = false; 
        var radiobutton = toCheck[i]
        var id = document.getElementsByName(radiobutton)
        // loop through each question 
        for (var j = 0; j < 5; j++) {
            if (id[j].checked) {
                answered = true;
                break;
            }
        }

        if (!answered) {
            break; 
        } else if (answered && ((i + 1) == numQuestions)) {
            document.getElementById('submit').disabled = false
        }
    }
}

function makeid() {
    document.getElementById('submit').innerHTML = "Loading..."
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 7; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    document.getElementById('code').innerHTML = text; 
    document.getElementById('id').value = text; 

}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('activeImg').src = e.target.result; 
            document.getElementById('targetImg').src = e.target.result; 
            document.getElementById('finalImg').src = e.target.result; 
            document.getElementById('finalImgOverlay').src = e.target.result; 
            document.getElementById('targetImgfeedback').src = e.target.result; 
            document.getElementById('activeImg').style.display = "block"
            document.getElementById('nextEffects').disabled = false
            document.getElementById('nextEffects').style.opacity = 1


            document.getElementById('blah').src = e.target.result; 
            document.getElementById('blah').style.width = "100%"; 
        };

        reader.readAsDataURL(input.files[0]);
    }

}