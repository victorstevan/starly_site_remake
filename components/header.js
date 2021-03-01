class Header extends HTMLElement {
  constructor() {
    super();
  }

   

  connectedCallback() {
    this.innerHTML = `
      


      <style> 
      header-component{
        background: ${getCurrentPage()[1]};
      }

      </style>
     
      <div class="logo">
          <a href="index.html"><img src="../assets/branding/logo.png" alt=""></a>
          <a href="index.html"><p>STARLY</p></a>

      </div>

      <div name="header" class="page-indicator">
          <p>${getCurrentPage()[0]}</p>
      </div>

      <nav>
          <ul>
              <li><a href="sobre-nos.html">Sobre nós</a></li>
              <li><a href="servicos.html">Serviços</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a class="menu-icon" href="#"><i class="fas fa-bars"></i></a></li>
          </ul>
      </nav>

 
    `;
  }
}

customElements.define('header-component', Header);

function getCurrentPage() {
  var currentPagePath = window.location.pathname;
  var backgroundColor;
  var currentPageName;

  switch(currentPagePath){
    case "/index.html":
      currentPageName = 'Página Inicial';
      backgroundColor = "#05204A";
      break;

    case "/html/servicos.html":
      currentPageName = "Serviços";
      backgroundColor = "#1a1721";
      break;

    case "/html/sobre-nos.html":
      currentPageName = "Sobre nós";
      backgroundColor = "#1b0720";
      break;

    case "/html/blog.html":
      currentPageName = "Blog";
      backgroundColor = "#212463";
      break;
    default:
      currentPageName = "Página Inicial";
      backgroundColor = "#05204A";
      break;
  }

  return [currentPageName, backgroundColor];

}
