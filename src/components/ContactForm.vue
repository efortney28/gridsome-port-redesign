<template>
  <b-container fluid class="form-container">
      <b-form
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                Don’t fill this out: <input name="bot-field" />
                </label>
            </p>
            <div class="sender-info">
                <div>
                    <b-form-input class="form-input" type="text" name="name" v-model="formData.name" placeholder="Your Name" />
                </div>
                <div>
                    <b-form-input class="form-input" type="email" name="email" v-model="formData.email" placeholder="Your Email" />
                </div>
                <div>
                    <b-form-input class="form-input" type="text" name="phone" v-model="formData.phone" placeholder="Your Phone Number" />
                </div>
            </div>

            <div class="message-wrapper">
                <b-form-textarea class="form-input" name="message" v-model="formData.message" placeholder="What can we work together on?"></b-form-textarea>
            </div>

            <div class="select-field">
                <p class="select-field-text">Please select one category:</p>
                <b-form-select class="form-selct form-input" v-model="selected" :options="options"></b-form-select>
            </div>

            <div class="text-center"><b-button pill type="submit" size="lg" id="submitButton">Submit</b-button></div>
        </b-form>
  </b-container>
</template>

<script>
export default {
    data() {
        return {
            formData: {},
            selected: null,
            options: [
                { value: null, text: "Please select an option"},
                { value: "development", text: "Development"},
                { value: "photography", text: "Photography"}
            ],
        }
    },
    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        },
        handleSubmit(e) {
            fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({
                'form-name': e.target.getAttribute('name'),
                ...this.formData,
            }),
            })
            .then(() => this.$router.push('/'))
            .catch(error => alert(error))
        }
    },

}
</script>

<style scoped>
.form-container {
    background-color: #222831;
    padding: 1em 1.5em 1em 0.5em;

}
.form-input {
    border: none;
    border-bottom: 2px solid #2DC583;
    background: none;
    color: #EEE;
    margin: 0.5em;
}
.form-select {
    margin: 0em 0.5em 0em 0.5em;
}
.select-field-text {
    font-family: "Poppins", sans-serif;
    color: #EEE;
    font-size: 10px;
    font-weight: 300;
    padding: 1em 0.5em 0em 1.25em;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #EEE;
  opacity: 1; /* Firefox */
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #EEE;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #EEE;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}
#submitButton {
    background: #FF5722;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: #EEE;
    margin: 1em;
}
</style>