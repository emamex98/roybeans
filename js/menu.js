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
    ["MENÚ", "03_menu.html"],
    ["PROMOCIONES", "04_promos.html"],
    ["UBICACIÓN", "05_contact.html"]
  ];

  //["NOSOTROS", "02_about_us.html"],

  for(i=0; i<menuItems.length; i++){
      addElementToMenu(menuItems[i][0], menuItems[i][1]);
  }

var linksOrder = [
  document.getElementById("rappi"),
  document.getElementById("uber"),
  document.getElementById("sindel"),
  document.getElementById("call")
]

// Rappi
linksOrder[0].href = "https://www.rappi.com.mx/restaurantes/roy-beans---valle-real";
// Uber
linksOrder[1].href = "https://u.ubereats.com/en-MX/guadalajara/food-delivery/roy-bean-s/yGQm_HrRSq-nAKFuSky_xw/";
// SinDelantal
linksOrder[2].href = "https://www.sindelantal.mx/delivery/zapopan-jal/roy-beans-valle-real";
// Llamar
linksOrder[3].href = "tel:+523324569009";

for(i=0; i<linksOrder.length-1; i++){
  linksOrder[i].setAttribute("target", "_blank");
}

var d = new Date();
var n = d.getFullYear();

var footer = document.getElementById("footerContent");
var footerHTML = '<div class="row"> <div class="col-md-4"> <div class="pt-30"> <p class="underline-secondary"><b>Horario:</b></p><p>Lunes:</p><p>11:00 am. - 11:00 pm.</p><p>Martes a domingo:</p><p>11:30 am. - 4:00 am.</p></div></div><div class="col-md-4"> <div class="pt-30"> <p class="underline-secondary"><b>Dirección:</b></p><p>Avenida Santa Margarita 3740,<br>Col. Poniente, Zapopan, Jalisco.<br>C.P. 45136 <br>Local 20</p></div></div><div class="col-md-4"> <div class="pt-30"> <p class="underline-secondary mb-10"><b>Contacto:</b></p><p>Teléfono: <a href="tel:+523324569009">(33) 2456 9009</a><br><a href="tel:+523324569010">(33) 2456 9010</a></p><p>Email: <a href="#">info@roybeans.com</a></p></div></div></div><div class="row"> <div class="col-lg-12"> </div></div><p class="color-light font-9 mt-50 mt-sm-30">Copyright &copy; ' + n + ' Roy Beans Pizza &amp; Salads | Desarrollado por <a href="http://ema.nuel.xyz">ema.nuel.xyz</a> | <a href="07_legal.html">Legal</a>'; 
footer.innerHTML = footerHTML;

function legal(){
  console.log('Loaded.');
}

/*
<h6><a class="plr-20 color-white btn-fill-primary" href="tel:+523324569009">ORDENA: (33) 2456 9009</a></h6>

<li><a href="index.html">HOME</a></li>
<li><a href="02_about_us.html">ABOUT US</a></li>
<li><a href="03_menu.html">SERVICES</a></li>
<li><a href="04_blog.html">NEWS</a></li>
<li><a href="05_contact.html">CONTACT</a></li>
*/