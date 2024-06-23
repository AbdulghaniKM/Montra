<template>
    <div class="min-h-screen bg-violet-600">
        <div class="flex flex-col justify-center items-center">
            <h1 class=" text-white text-3xl font-bold  mt-24">
                Montra
            </h1>
            <p class="text-white font-semibold text-2xl mb-20 mt-2 text-center">
                Become your own money manager,<br> and make every cent count.
            </p>

        </div>
        <div class="grid grid-cols gap-4 items-center justify-center">
            <button
                class="btn bg-gray-300 text-violet-600 hover:bg-gray-600 hover:text-violet-400 border-none w-44 shadow-2xl font-bold text-lg"
                @click="loginShow = true">
                Log In
            </button>
            <button
                class="btn bg-gray-300 text-violet-600 hover:bg-gray-600 hover:text-violet-400 shadow-2xl border-none font-bold text-lg"
                @click.prevent="signup = true">
                Sign Up
            </button>
        </div>

        <div v-show="signup" class="fixed inset-0 flex items-center justify-center z-50 text-black">
            <div class="modal-overlay absolute inset-0 bg-black opacity-50"></div>
            <div class="modal-container bg-white rounded-lg p-6 relative justify-start sm:w-96">
                <div class="absolute top-4 right-4">
                    <button @click="signup = false" class="">
                        <svg fill="black" height="20px" width="20px" version="1.1" id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 460.775 460.775" xml:space="preserve">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z">
                                </path>
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="">
                    <h3 class="font-bold text-lg">Hello There!</h3>
                    <p class="py-4 ">Please fill this form to create a new account</p>
                </div>
                <div class="flex items-center justify-center flex-col">
                    <label>
                        Full Name:
                    </label>
                    <input type="text" class="input focus:border-black border-2 border-black bg-white"
                        v-model="fullName">
                    <label>
                        username:
                    </label>
                    <input type="text" class="input focus:border-black border-2 border-black bg-white"
                        v-model="username">
                    <label>
                        Password:
                    </label>
                    <input type="password" class="input focus:border-black border-2 border-black bg-white"
                        v-model="password">
                    <label>
                        Confirm Password:
                    </label>
                    <input type="password" class="input focus:border-black border-2 border-black bg-white"
                        v-model="Confpassword">
                    <div class="mt-7">
                        <button class="btn bg-violet-700 text-white border-none hover:bg-violet-600 w-24"
                            @click="createAcc()">
                            Create!
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <div v-show="loginShow" class="fixed inset-0 flex items-center justify-center z-50 text-black">
            <div class="modal-overlay absolute inset-0 bg-black opacity-50"></div>
            <div class="modal-container bg-white rounded-lg p-6 relative justify-start sm:w-96">
                <div class="absolute top-4 right-4">
                    <button @click="loginShow = false" class="">
                        <svg fill="black" height="20px" width="20px" version="1.1" id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 460.775 460.775" xml:space="preserve">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z">
                                </path>
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="">
                    <h3 class="font-bold text-lg">Welcome Back!</h3>
                    <p class="py-4 ">Please fill this form to access your account.</p>
                </div>
                <div class="flex items-center justify-center flex-col">
                    <label>
                        username:
                    </label>
                    <input type="text" class="input focus:border-black border-2 border-black bg-white"
                        v-model="loginUsername">
                    <label>
                        Password:
                    </label>
                    <input type="password" class="input focus:border-black border-2 border-black bg-white"
                        v-model="loginPassword">
                    <div class="mt-7">
                        <button class="btn bg-violet-700 text-white border-none hover:bg-violet-600 w-24"
                            @click="LoginAcc()">
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>


export default {
    data() {
        return {
            loginShow: false,
            signup: false,
            users: [],
            id: 0,
            fullName: '',
            username: '',
            password: '',
            Confpassword: '',
            loginUsername: '',
            loginPassword: '',
            currentUser: null
        }
    },
    created() {
        this.loadUsers();
        this.loadCurrentUser();
    },
    methods: {
        loadUsers() {
            const users = localStorage.getItem('users');
            if (users) {
                this.users = JSON.parse(users);
            }
        },
        saveUsers() {
            localStorage.setItem('users', JSON.stringify(this.users));
        },
        loadCurrentUser() {
            const user = localStorage.getItem('currentUser');
            if (user) {
                this.currentUser = JSON.parse(user);
            }
        },
        saveCurrentUser(user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUser = user;
        },
        isUsernameUnique(username) {
            return !this.users.some(user => user.username === username);
        },
        createAcc() {
            if (!this.fullName || !this.username || !this.password) {
                alert("Please fill out the form!");
                return;
            }

            if (this.password !== this.Confpassword) {
                alert("Passwords do not match!");
                return;
            }

            if (!this.isUsernameUnique(this.username)) {
                alert("Username already exists. Please choose another one.");
                return;
            }

            this.users.push({
                id: this.users.length + 1,
                fullName: this.fullName,
                username: this.username,
                password: this.password
            });

            this.saveUsers();
            alert("Account created successfully!");
            this.signup = false;
            this.fullName = '';
            this.username = '';
            this.password = '';
            this.Confpassword = '';
        },
        LoginAcc() {
            const user = this.users.find(user => user.username === this.loginUsername && user.password === this.loginPassword);

            if (!user) {
                alert("Invalid username or password!");
                return;
            }

            this.saveCurrentUser(user);
            this.loginModal = false;
            alert(`Welcome, ${user.fullName}!`);
            this.loginUsername = '';
            this.loginPassword = '';
            this.loggedInUser = user;
            // After successful login, navigate to boarding.vue
            this.$router.push({ name: 'Boarding'});


        },
        logout() {
            localStorage.removeItem('currentUser');
            this.currentUser = null;
            alert("You have been logged out!");
        }
    },

}
</script>