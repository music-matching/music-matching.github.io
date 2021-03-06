function setup() {
  
}

var mic, recorder, soundFile;

var state = 0; // mousePress will increment from Record, to Stop, to Play

function setup() {
  createCanvas(100,100);
    background(0,0,0,0);
//   fill(0);
  text('Enable mic and click the mouse to begin recording', 20, 20);

  // create an audio in
  mic = new p5.AudioIn();

  // users must manually enable their browser microphone for recording to work properly!
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // create an empty sound file that we will use to playback the recording
  soundFile = new p5.SoundFile();
}



function mousePressed() {
  // use the '.enabled' boolean to make sure user enabled the mic (otherwise we'd record silence)
  if (state === 0 && mic.enabled) {

    // Tell recorder to record to a p5.SoundFile which we will use for playback
    function recordSound(){
      recorder.record(soundFile);
    
   background(255,0,0);
    text('Recording now! Click to stop.', 20, 20);
    state++;
      }
  }

  else if (state === 1) {
        function recordStop(){

    recorder.stop(); // stop recorder, and send the result to soundFile

    background(0,255,0);
    text('Recording stopped. Click to play & save', 20, 20);
    state++;
        }
  }

  else if (state === 2) {
    soundFile.play(); // play the result!
            function recordSave(){

    saveSound(soundFile, 'js/mySound.wav'); // save file
    state++;
            }
  }
}
