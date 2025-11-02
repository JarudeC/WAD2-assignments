<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                temp: null,
                error: false,
                emoji: null
            }
        },
        props: ["city"],
        methods: {
            getWeather() {
                const API_KEY = "0ec4d4a178a5e65314a3b24c1284b4b4"
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}&units=metric`)
                .then(response => {
                    console.log(response.data)
                    this.temp = response.data.main.temp
                    this.error = false
                    this.getEmoji()
                })
                .catch(error => {
                    this.error = true
                })
            },
            getEmoji() {
                let temp = this.temp
                if (temp < 10) {
                    this.emoji = "🥶"
                }
                else if (temp < 20) {
                    this.emoji = "🍂"
                }
                else if (temp < 32) {
                    this.emoji = "☀️"
                }
                else {
                    this.emoji = "🔥"
                }
            }
        },
        created() {
            this.getWeather()
        }
    }
</script>

<template>
    <p v-if="error" class="error">⚠️ Weather unavailable</p>
    <p v-else-if="temp !== null">{{ city }}: {{ temp }}°C ({{ emoji }})</p>
    <p v-else>Loading Weather...</p> 
</template>

<style scoped>
.weather { font-size: 0.9rem; color: #333; }
.error { color: #c62828; }
</style>