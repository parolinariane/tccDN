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
      <div class="avatar-container">
        <span class="user" @click="goToProfile">
          <span class="arrow-down"  @click.stop="toggleDropdown"></span>
          {{ userName || 'Login/Cadastre-se' }}
        </span>
        <img src="@/assets/avatar.png" alt="Avatar do Usuário" class="avatar" />
      </div>
      <div v-show="isDropdownOpen" class="dropdown-menu">
        <ul>

          <li><a href="#" @click="logout">Sair</a></li>
        </ul>
      </div>
    </div>
  </header>

      <main class="main-content">
        <section class="intro-text">
          <h3 class="dinastiaText">DINASTIA NAGUAL</h3>
          <p class="efeitoText">Conheça a ti <br> mesmo</p>
          <p class="subefeitoText">Prepare-se para uma jornada épica de autodescoberta, onde cada passo revela um universo inexplorado dentro de você. 
            Por meio de eventos repletos de experiências imersivas e conhecimentos variados, você será conduzido a despertar o que há de mais único em sua essência. 
            Esta é sua chance de desvendar o extraordinário que o torna singular e de liberar a melhor e mais poderosa versão de si mesmo.</p>
        </section>
        <img src="@/assets/imgHome.png" alt="Imagem de Meditação" class="meditation-img" />
      </main>

      <!-- Seção Sobre -->
      <section class="sobre-section">
          <h3 class="dinastiaText2">SOBRE O DINASTIA NAGUAL</h3>
          <p class="efeitoText2">A felicidade é uma decisão, não um destino. Realize isso conosco!</p>
          <p class="subefeitoText2">
            A felicidade é um escolha, uma decisão, é o poder pessoal. Um verdadeiro sábio é capaz de enfrentar qualquer desafio, superar qualquer obstáculo e triunfar, pois carrega dentro de si os ingredientes para o sucesso: amor-próprio, paz interior e plena consciência de si mesmo e do mundo ao redor. 
            Nossa missão é seguir os passos dos sábios, guiados sempre pela humildade, pelo amor e por uma consciência elevada.
          </p>
          <button class="more-button" onclick="window.location.href='/sobre'">Veja mais <i class="fas fa-arrow-right"></i></button>
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
          <!-- Card 1 -->
          <div class="card-container">
            <img src="@/assets/palestras.jpeg" alt="Palestras" class="card-image-top">
            <div class="card-content">
              <h3 class="card-title">Palestras</h3>
              <p class="card-description">Palestras conduzidas por especialistas com profundo conhecimento teórico e prático, abrangendo temas de ciência, espiritualidade e esoterismo, em uma abordagem rica e inspiradora.</p>
              <div class="button-line"></div> 
            </div>
          </div>

          <!-- Card 2 -->
          <div class="card-container">
            <img src="@/assets/vivencias.jpeg" alt="Vivências" class="card-image-top">
            <div class="card-content">
              <h3 class="card-title">Vivências</h3>
              <p class="card-description">Exploramos o poder da neuroplasticidade, conduzindo vivências intensas e transformadoras que esculpem novos caminhos neurais. Cada experiência é um passo rumo à renovação, cuidando profundamente do corpo, nutrindo a mente e elevando a alma a um novo patamar de consciência.</p>
              <div class="button-line"></div> 
            </div>
          </div>

          <!-- Card 3 -->
          <div class="card-container">
            <img src="@/assets/ritos.jpeg" alt="Ritos" class="card-image-top">
            <div class="card-content">
              <h3 class="card-title">Ritos</h3>
              <p class="card-description">Realizamos diversos rituais que preservam a ancestralidade, honram nossa herança genética e resgatam o conhecimento milenar das culturas ao redor do mundo.</p>
              <div class="button-line"></div> 
            </div>
          </div>
        </div>
      </section>

<br>
<br>
<br>
<br>
<br>
<br>

      <!-- Seção O que fazemos -->
      <section class="oque-section">
      <div class="cards-container">
        <!-- Card 1 -->
        <div class="card-container">
          <img src="@/assets/encontro-mulheres.jpeg" alt="Encontro de mulheres" class="card-image-top">
          <div class="card-content">
            <h3 class="card-title">Encontro de Mulheres</h3>
            <p class="card-description">Organizamos eventos exclusivos para mulheres, dedicados a explorar a essência do feminino. Buscando compreender mais sobre o ser feminino, desde seu corpo biológico à suas transições de fases, além de sua profunda sacralidade.</p>
            <div class="button-line"></div> 
          </div>
        </div>

        <!-- Card 2 -->
        <div class="card-container">
          <img src="@/assets/consagracoes.jpeg" alt="Vivências" class="card-image-top">
          <div class="card-content">
            <h3 class="card-title">Consagrações Sagradas</h3>
            <p class="card-description">Sacralizamos a vida e a natureza, promovendo consagrações em homenagem e gratidão à Mãe Terra. Nosso objetivo é despertar a consciência de preservação e cuidado com nosso Lar, reafirmando nosso compromisso com o equilíbrio e a harmonia.</p>
            <div class="button-line"></div> 
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card-container">
          <img src="@/assets/jogos.jpeg" alt="Ritos" class="card-image-top">
          <div class="card-content">
            <h3 class="card-title">Jogos Inteligentes</h3>
            <p class="card-description">Estamos sempre em busca de desenvolver a mente, afastando-nos da rotina diária e concentrando nossa atenção em jogos de tabuleiro que estimulam a resolução de desafios e o pensamento estratégico.</p>
            <div class="button-line"></div> 
          </div>
        </div>
      </div>
    </section>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<!-- Seção números -->
<section class="stats-section">
  <div class="stats-container">
    <div class="stat-item">
      <i class="fas fa-smile stat-icon"></i>
      <h3 class="stat-number">950+</h3>
      <p class="stat-description">Pessoas Transformadas</p>
    </div>
    <div class="stat-item">
      <i class="fas fa-user-graduate stat-icon"></i>
      <h3 class="stat-number">20+</h3>
      <p class="stat-description">Desbravadores do Conhecimento</p>
    </div>
    <div class="stat-item">
      <i class="fas fa-comment-dots stat-icon"></i>
      <h3 class="stat-number">950+</h3>
      <p class="stat-description">Depoimentos Positivos</p>
    </div>
    <div class="stat-item">
      <i class="fas fa-leaf stat-icon"></i>
      <h3 class="stat-number">30+</h3>
      <p class="stat-description">Anos de <br> Experiência</p>
    </div>
    <div class="stat-item">
      <i class="fas fa-home stat-icon"></i>
      <h3 class="stat-number">10+</h3>
      <p class="stat-description">Cidades <br>Visitadas</p>
    </div>
  </div>
</section>

       <!-- Seção membro -->
       <section class="membro-section">
          <h3 class="dinastiaText4">TORNE-SE MEMBRO</h3>
          <p class="efeitoText4">Torne-se parte do Dinastia Nagual</p>
          <p class="subefeitoText4">
            Se o seu coração foi tocado e você deseja mergulhar mais fundo nos ensinamentos do grupo Dinastia Nagual, cadastre-se e venha fazer parte dessa jornada transformadora. 
            Não seguimos dogmas religiosos, acolhemos todos aqueles que buscam cura e desejam descobrir o próprio caminho. 
            Nosso propósito é puro e eterno: amar, curar e expandir os limites do conhecimento humano.
          </p>
          <button class="more-button1" onclick="window.location.href='/login'">Inscreva-se <i class="fas fa-arrow-right"></i></button>
        </section>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        
     <!-- Footer -->
     <footer class="footer-section">
        <div class="footer-content">
          <img src="@/assets/logoFooter.png" alt="Logo Footer" class="footer-logo">
          <p class="footerText">Copyright &copy; 2024 Dinastia Nagual. Todos os direitos reservados.</p>
        </div>
      </footer>

  </template>
  
  <script>
  export default {
    name: "PaginaInicio",

    data() {
      return {
        isDropdownOpen: false,
        userName: localStorage.getItem('userName') || null,
      };
    },

    methods: {
      toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
     
   goToProfile() {
      if (this.userName) {
        this.$router.push('/'); 
      } else {
        window.location.href = '/login'; 
      }
    },
    
    logout() {
      localStorage.removeItem('userName'); 
      this.userName = null; 
      window.location.href = '/'; 
    }
    },
  };
  </script>
  
  <style scoped>

  
/* Estilo para a seção */
.stats-section {
  background-color: #fff;
  padding: 50px 0;
  text-align: center;
}

.stats-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

/* Cada item */
.stat-item {
  flex: 1 1 150px;
  max-width: 200px;
}

.stat-icon {
  font-size: 40px;
  color: #6bb162; 
  margin-bottom: 10px;
}

.stat-number {
  font-size: 32px;
  color: #4d2717;
  margin: 0;
}

.stat-description {
  font-size: 18px;
  color: #999999; 
  margin: 5px 0 0;
  font-family: 'Poppins', sans-serif; 
  font-weight: 500; 
}

.button-line {
  width: 100%;
  height: 2px;
  background-color: #ffffff; 
  margin-top: 10px;
  transition: all 0.3s ease;
}

.card-button:hover + .button-line {
  background-color: #ffffff; 
}

.oque-section {
  text-align: center;
  padding: 20px;
}

.dinastiaText3 {
  font-size: 24px;
  font-weight: bold;
}

.efeitoText3 {
  font-size: 16px;
  margin-bottom: 20px;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card-container {
  width: 320px; 
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  min-height: 450px; 
}

.card-image-top {
  width: 100%;
  height: 200px; 
  object-fit: cover;
}

.card-content {
  background-color: #336633;
  color: white;
  padding: 15px;
  text-align: center;
  flex-grow: 1; 
  display: flex;
  flex-direction: column; 
  justify-content: space-between; 
}

.card-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: 'Cormorant', serif; 
  font-weight: 400; 
  margin-top: -5px;
}

.card-description {
  font-size: 16px;
  margin-bottom: 20px;
  font-family: 'Cormorant', serif;
  font-weight: 400;
  flex-grow: 1;
}

.card-button {
  background-color: #336633;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif; 
  font-weight: 400; 
}

.card-button:hover {
  color: #6c9b7f;
}

  
/* Estilo para o footer */
.footer-section {
  background-color: #186215;
  color: #ffffff;
  padding: 20px 0;
  display: flex;
  justify-content: center; 
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
  flex-direction: column; 
  align-items: center; 
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
  margin-bottom: 10px; 
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

  /* Estilo da seção "Membros" */
  .membro-section {
    margin-top: 90px;
    padding: 60px;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
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
  background-color: #6c9b7f; 
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

/* Seta para baixo */
.arrow-down {
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 8px;
  vertical-align: middle;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #000000;
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
    background-color: #6c9b7f; 
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
  background-color: #6c9b7f; 
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
  