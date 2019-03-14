function addElementToMenu(title,linksTo) {
    var menu = document.getElementById("main-menu");
    var item = document.createElement("li");
    var link = document.createElement("a")

    var itemText = document.createTextNode(title);

    link.appendChild(itemText);
    link.title = title;
    link.href = linksTo;

    item.appendChild(link);
    menu.appendChild(item);
  }

  var menuItems = [
    ["INICIO", "index.html"],
    ["NOSOTROS", "02_about_us.html"],
    ["MENÚ", "03_menu.html"],
    ["PROMOCIONES", "04_promos.html"],
    ["UBICACIÓN", "05_contact.html"]
  ];

  for(i=0; i<menuItems.length; i++){
      addElementToMenu(menuItems[i][0], menuItems[i][1]);
  }

var btCTA = document.getElementById("cta-text");
var linkCTA = document.createElement("a")
var itemText = document.createTextNode('ORDENA: (33) 2456 9009');

linkCTA.appendChild(itemText);
linkCTA.href = 'tel:+523324569009';
linkCTA.title = 'Ordenar';
linkCTA.classList = 'plr-20 color-white btn-fill-primary';

btCTA.appendChild(linkCTA);

var d = new Date();
var n = d.getFullYear();

var footer = document.getElementById("footerContent");
var footerHTML = '<div class="row"> <div class="col-md-4"> <div class="pt-30"> <p class="underline-secondary"><b>Horario:</b></p><p>Lunes a domingo:</p><p>1:00 - 11:00 pm.</p></div></div><div class="col-md-4"> <div class="pt-30"> <p class="underline-secondary"><b>Dirección:</b></p><p>Avenida Santa Margarita 3740,<br>Col. Poniente, Zapopan, Jalisco.<br>C.P. 45136 - Local 20</p></div></div><div class="col-md-4"> <div class="pt-30"> <p class="underline-secondary mb-10"><b>Contacto:</b></p><p>Teléfono: <a href="tel:+523324569009">(33) 2456 9009</a></p><p>Email: <a href="#">info@roybeans.com</a></p></div></div></div><div class="row"> <div class="col-lg-12"> <ul class="icon mt-30"> <li><a href="#"><i class="ion-social-facebook"></i></a></li><li><a href="#"><i class="ion-social-twitter"></i></a></li><li><a href="#"><i class="ion-social-instagram"></i></a></li></ul> </div></div><p class="color-light font-9 mt-50 mt-sm-30">Copyright &copy; ' + n + ' Roy Beans Pizza &amp; Salads | Desarrollado por <a href="http://ema.nuel.xyz">ema.nuel.xyz</a> | <a href="07_legal.html">Legal</a>'; 
footer.innerHTML = footerHTML;

function legal(){
  console.log('hello');
}

/*
<h6><a class="plr-20 color-white btn-fill-primary" href="tel:+523324569009">ORDENA: (33) 2456 9009</a></h6>

<li><a href="index.html">HOME</a></li>
<li><a href="02_about_us.html">ABOUT US</a></li>
<li><a href="03_menu.html">SERVICES</a></li>
<li><a href="04_blog.html">NEWS</a></li>
<li><a href="05_contact.html">CONTACT</a></li>
*/