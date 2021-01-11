const videoElemnt = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElemnt.srcObject = mediaStream;
        videoElemnt.onloadedmetadata = () => {
            videoElemnt.play();
        }
    } catch (error) {
        // Catch Error Here
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElemnt.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();