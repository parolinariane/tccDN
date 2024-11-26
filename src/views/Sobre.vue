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
      <span class="user" @click="goToProfile">
        <!-- Exibe o nome do usuário se ele estiver logado, caso contrário exibe "Login/Cadastre-se" -->
        {{ userName || 'Login/Cadastre-se' }}
      </span>
      <img src="@/assets/avatar.png" alt="Avatar do Usuário" class="avatar" />
    </div>
    <div v-show="isDropdownOpen" class="dropdown-menu">
      <ul>
        <li><a href="#">Configurações</a></li>
        <li><a href="#" @click="logout">Sair</a></li>
      </ul>
    </div>
  </div>
</header>

  <main class="main-content">
    <section class="intro-text">
      <h3 class="dinastiaText">SOBRE NÓS</h3>
      <p class="efeitoText">A felicidade é uma decisão, <br> não um destino.<br> Realize isso conosco!</p>
      <p class="subefeitoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </section>
    <img src="@/assets/imgSobre.png" alt="Imagem de Meditação" class="meditation-img" />
  </main>

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

  
<!-- Seção O Grupo -->
<section class="sobre-section">
  <h3 class="dinastiaText2">O GRUPO</h3>
  <p class="efeitoText2">Nossos Servidores</p>

  <div class="equipe-container">
    <!-- Membro 1 -->
    <div class="equipe-card">
      <img src="@/assets/isabelaBergamo.png" alt="Membro 1" class="equipe-img">
      <div class="equipe-info">
        <p class="nome">Isabela Bergamo</p><br>
        <p class="descricao-servidor"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus leo, 
          vestibulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. </p>
      </div>
    </div>

    <!-- Membro 2 -->
    <div class="equipe-card">
      <img src="@/assets/vanderleiCarneosso.png" alt="Membro 2" class="equipe-img">
      <div class="equipe-info">
        <p class="nome">Vanderlei Carneosso</p><br>
        <p class="descricao-servidor"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus leo, 
          vestibulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. </p>
      </div>
    </div>

    <!-- Membro 3 -->
    <div class="equipe-card">
      <img src="@/assets/leticiaGarbin.png" alt="Membro 3" class="equipe-img">
      <div class="equipe-info">
        <p class="nome">Leticia Garbin</p><br>
        <p class="descricao-servidor"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus leo, 
          vestibulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. </p>
      </div>
    </div>

    <!-- Membro 4 -->
    <div class="equipe-card">
      <img src="@/assets/leticiaGebara.png" alt="Membro 4" class="equipe-img">
      <div class="equipe-info">
        <p class="nome">Leticia Gebara</p><br>
        <p class="descricao-servidor"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus leo, 
          vestibulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. </p>
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
    userName: localStorage.getItem('userName') || null,
  };
},

methods: {
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  },
   
   goToProfile() {
      if (this.userName) {
        this.$router.push('/perfil'); 
      } else {
        window.location.href = '/login';
      }
    },
   
    logout() {
      localStorage.removeItem('userName'); 
      this.userName = null; 
      window.location.href = '/login';
    }
},
};
</script>

<style scoped>

/* Contêiner de Equipe */
.descricao-servidor{
  font-family: 'Poppins', sans-serif; 
  font-weight: 400; 
  font-size: 14px;
  text-align: left;
}

.nome{
  font-family: 'Cormorant', serif; 
  font-weight: bold;
  font-size: 25px;
  text-align: left;
}

.equipe-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

/* Cartão de Equipe */
.equipe-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  padding: 20px;
  width: 400px;
  max-width: 100%;
  gap: 20px;
}

.equipe-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.equipe-info h4 {
  color: #333;
  margin: 0;
}

.equipe-info p {
  color: #555;
  margin: 0;
}

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
