<template>
  <div class="inicio-container">
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
  </div>
</template>

<script>
export default {
  name: "PaginaContato",

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
.inicio-container {
  padding: 20px;
  color: #4d4d4d;
}

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

</style>
