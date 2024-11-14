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
        <i :class="['dropdown-icon', isDropdownOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"></i>
        <span class="user">ADM Isabela Bergamo</span>
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


  <!-- Seção O Grupo -->
  <section class="sobre-section">
      <h3 class="dinastiaText2">AGENDA DE EVENTOS</h3>
      <div class="event-list">
    <div class="event-card">
      <div class="event-date">
        <p class="date-day">15</p>
        <p class="date-month">JUN</p>
      </div>
      <div class="event-details">
        <h4 class="event-name">Festa de Inverno</h4>
        <p class="event-description">Celebre a chegada do inverno com uma festa especial cheia de música, comidas típicas e diversão.</p>
      </div>
    </div>
    <div class="event-card">
      <div class="event-date">
        <p class="date-day">22</p>
        <p class="date-month">JUL</p>
      </div>
      <div class="event-details">
        <h4 class="event-name">Workshop de Fotografia</h4>
        <p class="event-description">Aprenda técnicas de fotografia com profissionais e melhore suas habilidades de captura de imagens.</p>
      </div>
    </div>
    <div class="event-card">
      <div class="event-date">
        <p class="date-day">10</p>
        <p class="date-month">AGO</p>
      </div>
      <div class="event-details">
        <h4 class="event-name">Festival de Música</h4>
        <p class="event-description">Um evento vibrante com apresentações ao vivo de artistas locais e nacionais para animar o público.</p>
      </div>
    </div>
  </div>
      <!--<button class="more-button">Veja mais <i class="fas fa-arrow-right"></i></button>-->
  </section>
 
  <br>
  <br>
  <br>
  <br>



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

/* Estilo para Agenda de Eventos */

.event-list {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Reduzido o espaçamento entre os cartões */
}

.event-card {
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 5px; /* Reduzido o padding para diminuir a parte branca */
  align-items: center;
}

.event-date {
  background-color: #186215;
  color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  margin-right: 15px;
  min-width: 60px;
}

.date-day {
  font-size: 24px;
  font-weight: bold;
}

.date-month {
  font-size: 14px;
  text-transform: uppercase;
}

.event-details {
  flex: 1;
}

.event-name {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px 0;
  color: #333;
  font-family: 'Poppins', sans-serif; 
  font-weight: 500; 
}

.event-description {
  font-size: 14px;
  color: #666;
  margin: 0;
  font-family: 'Poppins', sans-serif; 
  font-weight: 400; 
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  .agenda-section {
    width: 100%;
    padding: 15px; /* Reduzido para responsividade */
  }

  .event-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .event-date {
    margin-bottom: 10px;
    margin-right: 0;
  }
}


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
font-size: 63px;
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
height: 72vh;
}

/* Estilo da seção "Sobre" */
.sobre-section {
margin-top: 90px;
padding: 60px;
position: relative;
text-align: center;
width: 100%; 
height: 100vh; 
background-image: url('@/assets/imgAgenda.png');
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
