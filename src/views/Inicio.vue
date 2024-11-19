<template>
      <header class="header">
        <img src="@/assets/logoDinastia.png" alt="Logo Dinastia Nagual" class="logo" />
        <nav class="nav-bar">
          <router-link to="/" :class="{ 'active': $route.path === '/' }">Início</router-link>
          <router-link to="/sobre" :class="{ 'active': $route.path === '/sobre' }">Sobre</router-link>
          <router-link to="/eventos" :class="{ 'active': $route.path === '/eventos' }">Eventos</router-link>
          <router-link to="/contato" :class="{ 'active': $route.path === '/contato' }">Contato</router-link>
        </nav>
        <div class="user-profile">
          <div class="avatar-container" @click="toggleDropdown">
            <!--<i :class="['dropdown-icon', isDropdownOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"></i>-->
            <span class="user" onclick="window.location.href='/login'">Login/Cadastre-se</span>
            <img src="@/assets/avatar.png" alt="Avatar do Usuário" class="avatar" />
          </div>
          <div v-show="isDropdownOpen" class="dropdown-menu">
            <ul>
              <li><a href="#">Configurações</a></li>
              <li><a href="#">Sair</a></li>
            </ul>
          </div>
        </div>

      </header>
      <main class="main-content">
        <section class="intro-text">
          <h3 class="dinastiaText">DINASTIA NAGUAL</h3>
          <p class="efeitoText">Conheça a ti <br> mesmo</p>
          <p class="subefeitoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div class="buttons">
            <button class="start-button">
                Vamos começar <i class="fas fa-arrow-right"></i>
            </button>
            <button class="contact-button" onclick="window.location.href='/contato'">
                Contato <i class="fas fa-phone"></i>
            </button>

          </div>
        </section>
        <img src="@/assets/imgHome.png" alt="Imagem de Meditação" class="meditation-img" />
      </main>
  
      <!-- Seção Sobre -->
      <section class="sobre-section">
          <h3 class="dinastiaText2">SOBRE O DINASTIA NAGUAL</h3>
          <p class="efeitoText2">A felicidade é uma decisão, não um destino. Realize isso conosco!</p>
          <p class="subefeitoText2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus leo, 
            vestibulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. 
            Fusce tempus tellus sed erat scelerisque venenatis. Donec consequat ultrices quam, 
            vitae dignissim mi sodales non.
          </p>
          <button class="more-button">Veja mais <i class="fas fa-arrow-right"></i></button>
      </section>

      <br>
      <br>
      <br>
      <br>
      
      <!-- Seção O que fazemos -->
      <section class="oque-section">
        <h3 class="dinastiaText3">O QUE FAZEMOS?</h3>
        <p class="efeitoText3">Buscamos levar o amor, a cura e o conhecimento a todos</p>
        
        <div class="cards-container">
          
          <div class="card-container">
            <div class="card1">
              <img src="@/assets/palestras.png" alt="Palestras">
            </div>
            <div class="imgCard1">
              <img src="@/assets/card.png" alt="Card Palestras">
            </div>
          </div>

          <div class="card-container">
            <div class="card1">
              <img src="@/assets/palestras.png" alt="Palestras">
            </div>
            <div class="imgCard1">
              <img src="@/assets/card.png" alt="Card Palestras">
            </div>
          </div>

          <div class="card-container">
            <div class="card1">
              <img src="@/assets/palestras.png" alt="Palestras">
            </div>
            <div class="imgCard1">
              <img src="@/assets/card.png" alt="Card Palestras">
            </div>
          </div>


          <div class="card-container">
            <div class="card1">
              <img src="@/assets/palestras.png" alt="Palestras">
            </div>
            <div class="imgCard1">
              <img src="@/assets/card.png" alt="Card Palestras">
            </div>
          </div>


          <div class="card-container">
            <div class="card1">
              <img src="@/assets/palestras.png" alt="Palestras">
            </div>
            <div class="imgCard1">
              <img src="@/assets/card.png" alt="Card Palestras">
            </div>
          </div>

          <div class="card-container">
            <div class="card1">
              <img src="@/assets/palestras.png" alt="Palestras">
            </div>
            <div class="imgCard1">
              <img src="@/assets/card.png" alt="Card Palestras">
            </div>
          </div>
        </div>
      </section>

       <!-- Seção membro -->
       <section class="membro-section">
          <h3 class="dinastiaText4">TORNE-SE MEMBRO</h3>
          <p class="efeitoText4">Torne-se parte do Dinastia Nagual</p>
          <p class="subefeitoText4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus leo, 
            vestibulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. 
            Fusce tempus tellus sed erat scelerisque venenatis.
          </p>
          <button class="more-button1" onclick="window.location.href='/login'">Inscreva-se <i class="fas fa-arrow-right"></i></button>
        </section>
        

        <!-- Seção Conteúdos -->
      <section class="conteudo-section">
          <h3 class="dinastiaText5">CONTEÚDOS</h3>
          <p class="efeitoText5">Conteúdo impresso e digital para aprofundamento</p>
          <p class="subefeitoText5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus leo, 
            vestibulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. 
            Fusce tempus tellus sed erat scelerisque venenatis. Donec consequat ultrices quam, 
            vitae dignissim mi sodales non.
          </p>
          <button class="more-button3">Veja mais <i class="fas fa-arrow-right"></i></button>
      </section>

     <!-- Footer -->
    <footer class="footer-section">
      <div class="footer-content">
        <img src="@/assets/logoFooter.png" alt="Logo Footer" class="footer-logo">
        <p class="footerText">Copyright &copy; 2024 Dinastia Nagual. Todos os direitos reservados.</p>
        <div class="contact-info">
          <p><i class="fas fa-envelope"></i> dinastianagual@gmail.com</p>
          <p><i class="fas fa-phone-alt"></i> (11) 9 1234 5678</p>
        </div>
      </div>
    </footer>

  </template>
  
  <script>
  export default {
    name: "PaginaInicio",

    data() {
      return {
        isDropdownOpen: false,
      };
    },

    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  
/* Estilo para o footer */
.footer-section {
  background-color: #186215;
  color: #ffffff;
  padding: 20px 0; 
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  background-image: url('@/assets/footer.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
}

.footer-content {
  display: flex;
  justify-content: space-between; 
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 20px; 
}

.logo-container {
  flex: 0 1 auto;
}

.footer-logo {
  max-width: 180px; 
}

.footerText{
  font-family: 'Poppins', sans-serif; 
  font-weight: 400; 
  color: white;
  font-size: 18px;
}

.text-container {
  text-align: center;
  flex: 1; 
}

.footer-content p {
  font-size: 14px;
  margin-top: 10px; 
}

.contact-info p {
  margin: 5px 0;
  font-family: 'Poppins', sans-serif; 
  font-weight: 400; 
  color: white;
  font-size: 14px;
}

.contact-info i {
  margin-right: 8px; 
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  .footer-logo {
    max-width: 120px; 
  }

  .footer-content p {
    font-size: 12px; 
  }

  .contact-info p {
    font-size: 12px; 
  }
}

   /* Estilo da seção "Conteúdo" */
   .conteudo-section {
  margin-top: 90px;
  padding: 60px;
  position: relative;
  text-align: center;
  width: 100%; 
  height: 100vh;  
  box-sizing: border-box;
}

.dinastiaText5 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 0 20px; 
  color: #6c9b7f;  
  font-size: 19px;
  font-family: 'Poppins', sans-serif; 
  font-weight: 600;
}

.dinastiaText5::before,
.dinastiaText5::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30%;
  height: 2px;
  background-color: #186215; 
}

.dinastiaText5::before {
  left: 0;
  transform: translateY(-50%);
}

.dinastiaText5::after {
  right: 0;
  transform: translateY(-50%);
}

  .efeitoText5 {
    margin-left: 70px;
    color:  #513125;
    text-decoration: none;
    font-size: 60px;
    font-family: 'Cormorant', serif; 
    font-weight: 400; 
  }
  
  .more-button3 {
    margin-top: 15px;
    margin-left: 70px;
    background-color: #8ecf98;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;
    font-family: 'Poppins', sans-serif; 
    font-weight: 500; 
    color: white;
    font-size: 18px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .more-button3:hover {
    background-color: #5cb16d; 
    transform: translateY(-2px);
  }

  .more-button3 i {
    margin-left: 5px;
    font-size: 16px; 
    color: white;
  }

  .subefeitoText5 {
    margin-left: 70px; 
    color:  #7c7c7c99;
    text-decoration: none;
    font-size: 17px;
    font-family: 'Poppins', sans-serif; 
    font-weight: 400; 
  }

  /* Estilo da seção "Membros" */
  .membro-section {
    margin-top: 90px;
    padding: 60px;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza verticalmente */
    align-items: center; /* Centraliza horizontalmente */
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/fundoMembro.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }

  .dinastiaText4 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 0 20px;
    color: #ffffff;
    font-size: 19px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  .efeitoText4 {
    margin-top: -5px;
    margin-left: 70px;
    color: #ffffff;
    text-decoration: none;
    font-size: 60px;
    font-family: 'Cormorant', serif;
    font-weight: 400;
  }

  .more-button1 {
    margin-top: 15px;
    margin-left: 70px;
    background-color: #8ecf98;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #297B29;
    font-size: 18px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .more-button1:hover {
    background-color: #5cb16d;
    transform: translateY(-2px);
  }

  .more-button1 i {
    margin-left: 5px;
    font-size: 16px;
    color: white;
  }

  .subefeitoText4 {
    margin-top: -25px;
    margin-left: 70px;
    color: #ffffff;
    text-decoration: none;
    font-size: 17px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }


  /* Estilo da seção "O que fazemos" */

  .dinastiaText3 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 0 20px; 
  color: #6c9b7f;  
  font-size: 19px;
  font-family: 'Poppins', sans-serif; 
  font-weight: 600;
}

.dinastiaText3::before,
.dinastiaText3::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 40%;
  height: 2px;
  background-color: #186215; 
}

.dinastiaText3::before {
  left: 0;
  transform: translateY(-50%);
}

.dinastiaText3::after {
  right: 0;
  transform: translateY(-50%);
}

.efeitoText3 {
  color: #513125;
  text-decoration: none;
  font-size: 55px;
  font-family: 'Cormorant', serif; 
  font-weight: 400; 
  display: flex;         
  align-items: center;     
  justify-content: center; 
  height: 100%;            
}


.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  justify-items: center;
}

.card {
  width: 400px; 
  height: 400px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.imgCard{
  width: 400px; 
  height: 400px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-container {
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin-bottom: -120px;
}

.card1{
  width: 400px; 
  height: 400px;
}

.imgCard1 {
  margin-top: -50px;
  width: 350px; 
  height: 400px;
}

.card1 img{
  width: 100%; 
  object-fit: cover; 
}

.imgCard1 img {
  width: 100%; 
  object-fit: cover;
}
  

.text-overlay {
  position: absolute;
  top: 10px; 
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 10px;
  border-radius: 5px;
}

.saiba-mais-button {
  margin-top: 10px;
  background-color: #0a3019; 
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px; 
}

.saiba-mais-button:hover {
  background-color: #4a725a; 
}

 /* Estilo da seção "Dinastia" */
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .ondulacao {
    position: absolute;
    z-index: 1; 
}

  .logo {
    margin-left: 120px;
    height: 130px;
    position: relative; 
    z-index: 2; 
  }
  
  .nav-bar a {
    margin-right: 20px;
    color: #6c9b7f;
    text-decoration: none;
    font-size: 17px;
    font-family: 'Poppins', sans-serif; 
    font-weight: 400;
  }

  .dinastiaText {
    display: flex; 
    align-items: center; 
    margin-left: 70px;
    color: #6c9b7f;
    text-decoration: none;
    font-size: 19px;
    font-family: 'Poppins', sans-serif; 
    font-weight: 600;
  }

  .dinastiaText::after {
    content: '';
    display: block;
    width: 250px; 
    height: 2px; 
    background-color: #186215; 
    margin-left: 10px; 
}

  .efeitoText {
    margin-top: -10px;
    margin-left: 70px;
    color:  #513125;
    text-decoration: none;
    font-size: 86px;
    font-family: 'Cormorant', serif; 
    font-weight: 400; 
  }

  .subefeitoText {
    margin-left: 70px; 
    color:  #7c7c7c99;
    text-decoration: none;
    font-size: 17px;
    font-family: 'Poppins', sans-serif; 
    font-weight: 400; 
  }

  .user{
    color: #186215;
    text-decoration: none;
    font-size: 15px;
    font-family: 'Poppins', sans-serif; 
    font-weight: 400;
  }
  
  .nav-bar .active {
    color: #2c6b47; 
  }
  
  .user-profile {
    margin-top: -25px;
    position: relative;
    display: inline-block;
  }

.avatar-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px; 
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
  border: 3px solid #186215;
}


.dropdown-arrow {
  margin-left: 5px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #186215; 
}

.dropdown-menu {
  display: block; 
  position: absolute;
  top: 100%; 
  left: 0; 
  background-color: #ffffff; 
  border: 1px solid #ddd; 
  border-radius: 4px; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000; 
}

.dropdown-icon {
  margin-left: 5px;
  transition: transform 0.3s ease; 
}

.dropdown-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  padding: 10px 20px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}
  
  .main-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .intro-text h3 {
    color: #6c9b7f;
    margin-bottom: 10px;
  }
  
  .intro-text h1 {
    font-size: 48px;
    color: #5a4231;
    margin-bottom: 20px;
  }
  
  .intro-text p {
    margin-bottom: 30px;
    line-height: 1.5;
  }
  
  .buttons .start-button {
    margin-left: 70px;
    background-color: #8ecf98;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;
    font-family: 'Poppins', sans-serif; 
    font-weight: 500; 
    color: white;
    font-size: 18px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .buttons .start-button:hover {
    background-color: #5cb16d; 
    transform: translateY(-2px);
  }

  .start-button i {
    margin-left: 5px;
    font-size: 16px; 
    color: white;
  }
  
  .buttons .contact-button {
    background-color: transparent;
    border: 1px solid #8ecf98;
    padding: 10px 20px;
    cursor: pointer;
    color: #6c9b7f;
    font-family: 'Poppins', sans-serif; 
    font-weight: 500; 
    color: #8ecf98;
    font-size: 18px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .buttons .contact-button:hover {
    background-color:#5cb16d; 
    color: white; 
    transform: translateY(-2px); 
  }

  .buttons .contact-button:hover i {
    color: white; 
  }

  .contact-button i {
    margin-left: 5px;
    font-size: 16px; 
    color: #8ecf98;
}
  
  .meditation-img {
    margin-right: 10px;
    max-width: 70%;
    height: 82vh;
  }
  
  /* Estilo da seção "Sobre" */
  .sobre-section {
  margin-top: 90px;
  padding: 60px;
  position: relative;
  text-align: center;
  width: 100%; 
  height: 100vh; 
  background-image: url('@/assets/fundoSobre.png'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  box-sizing: border-box;
}

.dinastiaText2 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 0 20px; 
  color: #6c9b7f;  
  font-size: 19px;
  font-family: 'Poppins', sans-serif; 
  font-weight: 600;
}

.dinastiaText2::before,
.dinastiaText2::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30%;
  height: 2px;
  background-color: #186215; 
}

.dinastiaText2::before {
  left: 0;
  transform: translateY(-50%);
}

.dinastiaText2::after {
  right: 0;
  transform: translateY(-50%);
}

  .efeitoText2 {
    margin-left: 70px;
    color:  #513125;
    text-decoration: none;
    font-size: 60px;
    font-family: 'Cormorant', serif; 
    font-weight: 400; 
  }
  
  .more-button {
    margin-top: 15px;
    margin-left: 70px;
    background-color: #8ecf98;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;
    font-family: 'Poppins', sans-serif; 
    font-weight: 500; 
    color: white;
    font-size: 18px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .more-button:hover {
    background-color: #5cb16d; 
    transform: translateY(-2px);
  }

  .more-button i {
    margin-left: 5px;
    font-size: 16px; 
    color: white;
  }

  .subefeitoText2 {
    margin-left: 70px; 
    color:  #7c7c7c99;
    text-decoration: none;
    font-size: 17px;
    font-family: 'Poppins', sans-serif; 
    font-weight: 400; 
  }

  </style>
  