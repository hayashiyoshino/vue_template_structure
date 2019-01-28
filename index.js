Vue.filter('numberFormat', function(value){
  return value.toLocaleString()
})

var app = new Vue({
  el: '#app',
  data: {
    price: 2980000000
  }
})

var appp = new Vue({
  el: '#appp',
  data: {
    price: 2980000000
  }
})
