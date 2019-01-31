Vue.filter('readMore', function(text, length, suffix){
  return text.substring(0, length) + suffix
})

var app = new Vue({
  el: '#app',
  data: {
    text: 'まだあげ初めし前髪の林檎のもとに見えしとき前にさしたる花櫛の花ある君と思ひけりやさしく白き手をのべて林檎をわれにあたへしは薄紅の秋の実に人こひ初めしはじめなりわがこゝろなきためいきのその髪の毛にかゝるときたのしき恋の盃を君が情に酌みしかな林檎畑の樹の下におのづからなる細道は誰が踏みそめしかたみぞと問ひたまふこそこひしけれ'
  }
})
