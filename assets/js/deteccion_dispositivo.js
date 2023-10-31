const d = document,
  n = navigator,
  ua = n.userAgent;
export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDestop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opr|opera|opera mini/i),
      ie: () => ua.match(/msie|rv|iemobile/i),
      edge: () => ua.match(/Edg/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.opera()||
          this.chrome() ||
          this.safari() ||
          this.firefox() 
        );
      },
    };

  // console.log(ua);
  // console.log(isMobile.android());
  // console.log(isMobile.ios());
  // console.log(isMobile.any());
  $id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma en la que me encuentro: <b>${isMobile.any()? isMobile.any():isDestop.any()}</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  `

  // CONTEXTO EXCLUSIVO
if(isBrowser.chrome()){
  $id.innerHTML += `<p><mark>Este contenido sólo se ve en Chrome</mark></p>` 
}
if(isMobile.android()){
  window.location.href = "https://jonmircha.com "
}

}

