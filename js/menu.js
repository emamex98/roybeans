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
    ["MENU", "03_menu.html"],
    ["UBICACIÓN", "05_contact.html"],
    ["PROMOCIONES", "04_BLOG.html"]
  ];

  for(i=0; i<menuItems.length; i++){
      addElementToMenu(menuItems[i][0], menuItems[i][1]);
  }

var btCTA = document.getElementById("cta-text");
var linkCTA = document.createElement("a")
var itemText = document.createTextNode('ORDENA: (33) 2456 9009');

linkCTA.appendChild(itemText);
linkCTA.href = 'tel:+523324569009l';
linkCTA.title = 'Ordenar';
linkCTA.classList = 'plr-20 color-white btn-fill-primary';

btCTA.appendChild(linkCTA);

/*
<h6><a class="plr-20 color-white btn-fill-primary" href="tel:+523324569009">ORDENA: (33) 2456 9009</a></h6>

<li><a href="index.html">HOME</a></li>
<li><a href="02_about_us.html">ABOUT US</a></li>
<li><a href="03_menu.html">SERVICES</a></li>
<li><a href="04_blog.html">NEWS</a></li>
<li><a href="05_contact.html">CONTACT</a></li>
*/