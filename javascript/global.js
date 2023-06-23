function toggleMenu2() {
  var navigation = document.querySelector('.nav-mobile');
  navigation.computedStyleMap.display = (navigation.computedStyleMap.display === 'block') ? 'none' : 'block';
}