<template>
    <div class="form">
        <form class="p-4">
            <h1 class="p-2 fs-3 fw-bold">Register</h1>
            <div class="pt-3 row m-0">
                <label class="fs-6 d-flex align-items-center col-md-4 m-0 p-0 col-form-label">Email:</label>
                <div class="col-md-8 m-0 p-0">
                    <input class="form-control shadow-none" type="email" :value="email" />
                </div>
            </div>
            <div class="pt-3 row m-0">
                <label class="fs-6 d-flex align-items-center col-md-4 m-0 p-0 col-form-label">Password:</label>
                <div class="col-md-8 m-0 p-0">
                    <input class="form-control shadow-none" type="password" :value="password" />
                </div>
            </div>
            <div class="pt-3 row m-0">
                <label class="fs-6 d-flex align-items-center col-md-4 m-0 p-0 col-form-label">Password Confirm:</label>
                <div class="col-md-8 m-0 p-0">
                    <input class="form-control shadow-none" type="password" :value="confirmPassword" />
                </div>
            </div>
            <div class="pt-4 text-center w-100">
                <button type="submit" @click.prevent="handleLogin" class="btn btn-primary w-md-25 w-100 fs-5">
                    Login
                </button>
                <p class="text-center mt-4">
                    Already have an account?
                    <nuxt-link :to="'/login'" class="btn btn-info">
                        Signin here!
                    </nuxt-link>
                </p>
            </div>
            <div class="row justify-content-center">
                <div class="col justify-content-center d-flex">
                    <a class="btn btn-outline-dark" href="/users/googleauth" role="button" style="text-transform:none">
                        <img width="20px" style="margin-bottom:3px; margin-right:5px" alt="Google sign-in"
                            src="../assets/images/google.png" />
                        Signup with with Google
                    </a>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: "user-auth"
});

let email = ref(null);
let password = ref(null);
let confirmPassword = ref(null);

const login = async () => {
    return await useFetch('/api/auth', {
        method: 'post',
        body: {
            email: email,
            password: password,
        }
    });
}

async function handleLogin() {
    const res = await login();
}
</script>
<style scoped lang="scss">
:deep() .fa-circle-check {
    color: #0d65fd;
}

.form {
    box-shadow: rgba(0, 57, 122, 0.4) 5px 5px,
        rgba(0, 57, 122, 0.3) 10px 10px,
        rgba(0, 57, 122, 0.2) 15px 15px,
        rgba(0, 57, 122, 0.1) 20px 20px,
        rgba(0, 57, 122, 0.05) 25px 25px;
}

input {
    border: solid 1px rgb(54, 54, 247);
}
</style>