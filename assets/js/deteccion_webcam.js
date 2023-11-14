const d = document,
n = navigator;
export default function webCam(id){
  const $video = d.getElementById(id)
  // console.log(n.mediaDevices)
  if(n.mediaDevices.getUserMedia){
    n.mediaDevices
    .getUserMedia({video:true, audio:false})
    .then(strem => {
      console.log(strem)
      $video.srcObject = strem
      $video.play();
    })
    .catch((err) => console.log(`¡sucedio el siguiente error: ${err}`))
  }
}
