https://teachablemachine.withgoogle.com/models/fohiFtWDW/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fohiFtWDW/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotresults)
}