const d = document,
  w = window;

  export default function speechReader(){
    const $speechSelect = d.getElementById("speech-select"),
      $speechTextarea = d.getElementById("speech-text"),
      $speechBtn = d.getElementById("speech-btn"),
      speechMesagge = new SpeechSynthesisUtterance()

      // console.log(speechMesagge)

      let voices = [];

      d.addEventListener("DOMContentLoaded", e=> {
        // console.log(w.speechSynthesis)
        // console.log(w.speechSynthesis.getVoices())

        w.speechSynthesis.addEventListener("voiceschanged", e => {
          // console.log(e)
          voices = w.speechSynthesis.getVoices();
          // console.log(voices)

          voices.forEach(voice => {
            const $option = d.createElement("option");
            $option.value = voice.name
            $option.textContent = `${voice.name} - ${voice.lang}`
            $speechSelect.appendChild($option)
          })
        })
      })
      d.addEventListener("change", e=> {
        if(e.target === $speechSelect){
          speechMesagge.voice = voices.find(
            (voice) => voice.name === e.target.value
            );
        }
        // console.log(speechMesagge)
      })
      d.addEventListener("click", e => {
        if(e.target === $speechBtn){
          speechMesagge.text = $speechTextarea.value;
          w.speechSynthesis.speak(speechMesagge)
        }
      })
  }