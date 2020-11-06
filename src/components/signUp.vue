<template>
    <div class="sign-up">
        <h2>Create your account</h2>
        <input type="text" placeholder="username" v-model="username_input">
        <input type="text" placeholder="mail" v-model="mail_input">
        <p class="error-message" v-if="!mail_valid">use a correct mail adress format</p>
        <input type="password" placeholder="password" v-model="password_input">
        <p class="error-message" v-if="!password_valid">password should contain:<br>one digit<br>one lowercase<br>one uppercase<br>at least 8 characters</p>
        <input class="confirm-password" type="password" placeholder="confirm password" v-model="confirm_password_input">
        <p class="error-message" v-if="!confirm_password_valid">passwords are differents</p>
        <button v-if="can_be_create" class="create-account">Create Account</button>
    </div>
</template>

<script>
    export default {
        name: 'signUp',
        data() {
            return {
                username_input: '',
                mail_input: '',
                password_input: '',
                confirm_password_input: '',
                can_be_create: false,
                mail_valid: true,
                password_valid: true,
                confirm_password_valid: true,
            }
        },
        methods: {
            lookIfMailIsValid() {
                if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.mail_input) || this.mail_input === '')
                    this.mail_valid = true;
                else
                    this.mail_valid = false;
            },
            lookIfPasswordIsValid() {
                if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(this.password_input) || this.password_input === '')
                    this.password_valid = true;
                else
                    this.password_valid = false;
            },
            lookIfConfirmPasswordIsValid() {
                if(this.password_input === this.confirm_password_input || this.confirm_password_input === '')
                    this.confirm_password_valid = true;
                else
                    this.confirm_password_valid = false;
            },
            lookIfButtonCreateCanAppear() {
                if ((this.mail_valid && this.password_valid && this.confirm_password_valid) == true && (this.mail_input && this.password_input && this.confirm_password_input) != '')
                    this.can_be_create = true;
                else
                    this.can_be_create = false;
            },
        },
        beforeUpdate () {
            this.lookIfMailIsValid();
            this.lookIfPasswordIsValid();
            this.lookIfConfirmPasswordIsValid();
            this.lookIfButtonCreateCanAppear();
        },
    }
</script>

<style lang="css" scoped>
img {
    width: 200px;
    margin: auto;
    display: block;
}

.sign-up {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

h2 {
    font-size: 32px;
}

.error-message {
    margin: auto;
    margin-top: 10px;
    color: red;
}

input {
    width: 70%;
    margin: auto;
    margin-top: 15px;
    padding: 10px 10px;
    text-align: center;
    font-size: 26px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #f1f2f6;
    border: 2px solid #f1f2f6;
    outline: none;
    color: #57606f;
}

.confirm-password {
    margin-bottom: 20px;
}

.create-account {
    width: 40%;
    margin: auto;
    margin-bottom: 30px;
    margin-top: 30px;
    padding: 10px 10px;
    font-size: 26px;
    background-color: #45aaf2;
    border-radius: 5px;
    text-decoration: none;
    border: 2px solid #45aaf2;
    color: white;
    box-shadow: 0px 0px 6   px #45aaf2;
    outline: none;
    transition-duration: 0.4s;
}

.create-account:hover {
    cursor: pointer;
    background-color: white;
    color: #45aaf2;
}
</style>