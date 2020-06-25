const bannerText = document.getElementById('banner-text')

const headers = [
  'Music is awesome!',
  'Music is fun!',
  'Buy your headphones from us!'
]

function alternateBannerText () {
  setInterval(() => {
    bannerText.textContent = headers[Math.floor(Math.random() * headers.length)]
  }, 2500)
}

alternateBannerText()
