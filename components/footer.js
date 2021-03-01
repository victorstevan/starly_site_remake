class Footer extends HTMLElement  {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `


        <style> 
      footer-component{
        background: ${getCurrentPage()[1]};
      }

      </style>

        <div class="footer__logo"><img src="../assets/branding/login_logo.svg" alt=""></div>
        <address>Setor Leste Universitário <br> Goiânia-GO <br><br><br><br>
        Contate-nos via email <a id="email_link" href="mailto:webmaster@example.com">Starly Marketing</a>.<br>
        </address>


        <div class="footer__navigation">
        <ul>
            <li><a href="../html/sobre-nos.html">Sobre nós</a></li>
            <li><a href="../html/servicos.html">Serviços</a></li>
            <li><a href="../html/blog.html">Blog</a></li>
            <li><a href="">Trabalhe conosco</a></li>
        </ul>
        </div>

        <div class="footer__contacts">
        <ul>
        <li><a href="https://www.instagram.com/starlymkt/?hl=pt-br">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/starly-marketing-digital-7b55511aa/?originalSubdomain=br">LinkedIn</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">WhatsApp</a></li>
    </ul>
        </div>

        <div class="footer__back-to-top"><a href="#header"><i class="fas fa-chevron-up"></i></a></div>

        <p class="footer__trademark">Starly Marketing e Tecnologia ${new Date().getFullYear()} | Todos os direitos reservados</p>




        `;
    }
    


    
}

customElements.define('footer-component', Footer);


