<template>
	<div class="fundo">
		<div :class="['container', { 'right-panel-active': isRightPanelActive }]">

			<!-- Login -->
			<div class="container__form container--signin">
				<form class="form" @submit.prevent="handleSubmit('signin')">
					<h2 class="form__title">Entrar</h2>
					<input type="email" placeholder="E-mail" class="input" v-model="signinForm.email" />
					<input type="password" placeholder="Senha" class="input" v-model="signinForm.password" />
					<button class="btn" type="submit">Acessar</button>
				</form>
			</div>

			<!-- Cadastro -->
			<div class="container__form container--signup">
				<form class="form" @submit.prevent="handleSubmit('signup')">
					<h2 class="form__title">Cadastre-se</h2>
					<input type="text" placeholder="Usuário" class="input" v-model="signupForm.name" />
					<input type="email" placeholder="E-mail" class="input" v-model="signupForm.email" />
					<input type="password" placeholder="Senha" class="input" v-model="signupForm.password" />
					<button class="btn" type="submit">Cadastrar</button>
				</form>
			</div>

			<!-- Overlay -->
			<div class="container__overlay">
				<div class="overlay">
					<div class="overlay__panel overlay--left">
						<button class="btn" @click="togglePanel(false)">Login</button>
					</div>
					<div class="overlay__panel overlay--right">
						<button class="btn" @click="togglePanel(true)">Cadastrar</button>
					</div>
				</div>
			</div>
		</div>

		<div v-if="notification.message" :class="`notification ${notification.type}`">
			{{ notification.message }}
		</div>

	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: "PaginaLogin",

	data() {
		return {
			isRightPanelActive: true,
			signupForm: {
				name: '',
				email: '',
				password: ''
			},
			signinForm: {
				name: '',
				email: '',
				password: ''
			},
			notification: {
				message: '',
				type: '', 
			},
		};
	},
	methods: {
		togglePanel(isSignUp) {
			this.isRightPanelActive = isSignUp;
		},

		showNotification(message, type) {
			this.notification.message = message;
			this.notification.type = type;

			setTimeout(() => {
				this.notification.message = '';
			}, 3000);
		},

		async handleSubmit(formType) {
			if (formType === 'signup') {
				try {
					const response = await axios.post('http://localhost:5161/api/auth/cadastro', this.signupForm);
					console.log('Cadastro sucesso:', response.data);

					this.showNotification('Cadastro realizado com sucesso!', 'success');
				} 
				catch (error) 
				{
					console.error('Erro ao cadastrar usuário:', error.response?.data || error.message);
					this.showNotification('Erro ao realizar cadastro. Verifique os dados e tente novamente.', 'error');
				}
			} else if (formType === 'signin') {
				try 
				{
					const response = await axios.post('http://localhost:5161/api/auth/login', this.signinForm);
					console.log('Login sucesso:', response.data);

					const roleResponse = await axios.get('http://localhost:5161/api/auth/role', {
						params: { email: this.signinForm.email }  // Passar o email para obter o role
					});

					localStorage.setItem('role', roleResponse.data.role); 
					const nomeResponse = await axios.get(`http://localhost:5161/api/auth/nome`, {
					params: { email: this.signinForm.email }  
					});

					localStorage.setItem('userName', nomeResponse.data.nome);
					this.showNotification('Login realizado com sucesso!', 'success');
					window.location.href = '/';
				} 
				catch (error) 
				{
					console.error('Erro ao fazer login:', error.response?.data || error.message);
					this.showNotification('Erro ao fazer login. Verifique suas credenciais.', 'error');
				}
			}

		},
	}
};
</script>

<style scoped>
.notification {
	position: fixed;
	top: 20px;
	right: 20px;
	padding: 10px 20px;
	border-radius: 5px;
	color: white;
	z-index: 1000;
	font-size: 16px;
	animation: fadeOut 3s forwards;
}

.notification.success {
	background-color: green;
}

.notification.error {
	background-color: red;
}

@keyframes fadeOut {
	0% {
		opacity: 1;
	}

	100% {
		opacity: 0;
		display: none;
	}
}

.fundo {
	background-color: #8ecf98;
	align-items: center;
	display: grid;
	height: 100vh;
	width: 100%;
	overflow: hidden;
	place-items: center;
	margin-top: -10px;
	margin-right: -15px;
	margin-left: -8px;
	margin-bottom: -15px;
	position: fixed;
}

.form__title {
	margin: 0;
	margin-bottom: 1.25rem;
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
}

.link {
	color: #333;
	font-size: 0.9rem;
	margin: 1.5rem 0;
	text-decoration: none;
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
}

.container {
	background-color: white;
	border-radius: 0.7rem;
	box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
		0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
	height: 420px;
	max-width: 758px;
	overflow: hidden;
	position: relative;
	width: 100%;
}

.container__form {
	height: 100%;
	position: absolute;
	top: 0;
	transition: all 0.6s ease-in-out;
}

.container--signin {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .container--signin {
	transform: translateX(100%);
}

.container--signup {
	left: 0;
	opacity: 0;
	width: 50%;
	z-index: 1;
}

.container.right-panel-active .container--signup {
	animation: show 0.6s;
	opacity: 1;
	transform: translateX(100%);
	z-index: 5;
}

.container__overlay {
	height: 100%;
	left: 50%;
	overflow: hidden;
	position: absolute;
	top: 0;
	transition: transform 0.6s ease-in-out;
	width: 50%;
	z-index: 100;
}

.container.right-panel-active .container__overlay {
	transform: translateX(-100%);
}

.overlay {
	background-color: #5cb16d;
	background: url("@/assets/login.png");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	left: -100%;
	position: relative;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
	width: 200%;
}

.container.right-panel-active .overlay {
	transform: translateX(50%);
}

.overlay__panel {
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	position: absolute;
	text-align: center;
	top: 0;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
	width: 50%;
}

.overlay--left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay--left {
	transform: translateX(0);
}

.overlay--right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay--right {
	transform: translateX(20%);
}

.btn {
	background-color: #5cb16d;
	background-image: linear-gradient(90deg, #5cb16d 0%, #278b3b 74%);
	border-radius: 20px;
	border: 1px solid #5cb16d;
	color: white;
	cursor: pointer;
	font-size: 0.8rem;
	letter-spacing: 0.1rem;
	padding: 0.9rem 4rem;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	font-family: 'Poppins', sans-serif;
	font-weight: 500;
}

.form>.btn {
	margin-top: 1.5rem;
}

.btn:active {
	transform: scale(0.95);
}

.btn:focus {
	outline: none;
}

.form {
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 3rem;
	height: 100%;
	text-align: center;
}

.input {
	background-color: #fff;
	border: none;
	padding: 0.9rem 0.9rem;
	margin: 0.5rem 0;
	width: 100%;
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
}

@keyframes show {

	0%,
	49.99% {
		opacity: 0;
		z-index: 1;
	}

	50%,
	100% {
		opacity: 1;
		z-index: 5;
	}
}
</style>