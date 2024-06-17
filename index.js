function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("itemList");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].querySelector('a'); 
        if (a) {
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].classList.add('show');
                li[i].classList.remove('hide');
            } else {
                li[i].classList.add('hide');
                li[i].classList.remove('show');
            }
        }
    }
}

var searchInput = document.getElementById('searchInput');
searchInput.addEventListener('blur', function() {
  var ul = document.getElementById("itemList");
  var li = ul.getElementsByTagName('li');
  
  for (var i = 0; i < li.length; i++) {
      li[i].classList.remove('show');
  }
});
