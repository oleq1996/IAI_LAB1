let nav = '<ul class="nav justify-content-center">'+
    '<li class="nav-item">'+
    '<a class="nav-link" href="index.html">Home</a></li>'+
'<li class="nav-item">'+
   ' <a class="nav-link" href="blog.html">Blog</a></li>'+
'<li class="nav-item">'+
   ' <a class="nav-link" href="quiz.html">Quiz</a></li>'+
'<li class="nav-item">'+
    '<a class="nav-link" href="contact.html">Kontakt</a></li>'+
'</ul>';

let elem = document.querySelector('.navbar');
elem.innerHTML=nav;