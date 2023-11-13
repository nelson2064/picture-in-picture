const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();//waiting for user which windows they want to share 
    videoElement.srcObject = mediaStream; //video src=""  
    videoElement.onloadedmetadata = () => {  //when the video loaded its meta data (data about data)
      videoElement.play();      //play the video
    };
  } catch (error) {
    // Catch Error Here
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;    //this gonna happen if we succesfully request picture in picture


  // button.disabled = true;
});

// On Load
selectMediaStream(); //in every referesh calling
