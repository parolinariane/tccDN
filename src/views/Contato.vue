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
      <img src="@/assets/instagram.png" alt="Instagram" class="social-icon instagram">
      <img src="@/assets/whatsapp.png" alt="Whatsapp" class="social-icon whatsapp">
      <img src="@/assets/email.png" alt="Email" class="social-icon email">
    </section>
  </main>

<br>
<br>
<br>
<br>
<br>


<!-- Seção Contato -->
<section class="contato-section">
  <div class="contato-container">
    <div class="contato-info">
      <h3 class="contato-titulo">NOSSO CONTATO</h3>
      <h2 class="contato-subtitulo">Entre em contato conosco</h2>
      <p class="contato-texto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus leo, 
        vestibulum a ipsum sed, suscipit sodales ex.
      </p>
      <p class="contato-social-texto">Siga-nos nas redes sociais</p>
      <div class="contato-icones">
        <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
        <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
      </div>
    </div>
    <div class="contato-formulario">
      <form>
        <div class="contato-nome">
          <input type="text" placeholder="Primeiro Nome" class="input-nome" />
          <input type="text" placeholder="Último Nome" class="input-nome" />
        </div>
        <input type="email" placeholder="Seu Email" class="input-email" />
        <textarea placeholder="Sua Mensagem" class="input-mensagem"></textarea>
        <button type="submit" class="contato-botao">Enviar Mensagem <i class="fas fa-arrow-right"></i></button>
      </form>
    </div>
  </div>
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

/* Seção de Contato */
.contato-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-color: #fdf9f6;
}

.contato-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  max-width: 1200px;
}

.contato-info {
  flex: 1;
  margin-right: 30px;
}

.contato-titulo {
  color: #6c9b7f;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif; 
  font-weight: 600; 
}

.contato-subtitulo {
  font-size: 40px;
  color: #523f35;
  margin-bottom: 15px;
  font-family: 'Cormorant', serif; 
  font-weight: 400; 
}

.contato-texto {
  font-size: 16px;
  color: #9999;
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif; 
  font-weight: 400; 
}

.contato-social-texto {
  font-size: 22px;
  color: #523f35;
  margin-bottom: 10px;
  font-family: 'Cormorant', serif; 
  font-weight: 500; 
}

.contato-icones a {
  margin-right: 10px;
  color: #6c9b7f;
  text-decoration: none;
}

.contato-icones a:hover {
  color: #186215;
}

/* Formulário */
.contato-formulario {
  flex: 1;
  background-color: #f4ebe4;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

.contato-nome {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.input-nome,
.input-email,
.input-mensagem {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.input-nome {
  flex: 1;
}

.input-mensagem {
  height: 100px;
  resize: none;
}

.contato-botao {
  background-color: #6c9b7f;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contato-botao:hover {
  background-color: #186215;
}

/* Estilo para redes sociais */
.intro-text {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  gap: 20px; 
  margin-top: 20px; 
  margin-left: 12%;
}

.social-icon {
  width: 320px; 
  height: 220px;
  transition: transform 0.3s ease;
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



</style>
