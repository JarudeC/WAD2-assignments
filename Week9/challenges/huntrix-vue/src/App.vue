<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      group: 'HUNTRIX',
      members: [
        {
          id: 1,
          name: 'Rumi',
          role: 'Leader, Vocal',
          img: '/photos/rumi.jpg',
          profile: [
            'Zodiac Sign: Aries',
            'Chinese Zodiac Sign: Goat',
            'Oldest of the three members in HUNTRIX',
            'Taekwondo Black Belt',
            'Loves cats',
            'Her favorite ramen flavor is Spicy Chicken.'
          ],
          city: 'Seoul',
          // optional: initialize to show loading state right away
          temp: undefined,
          tempError: false
        },
        {
          id: 2,
          name: 'Mira',
          role: 'Rapper',
          img: '/photos/mira.jpg',
          profile: [
            'Zodiac Sign: Taurus',
            'Chinese Zodiac Sign: Monkey',
            'Dancing since 4 years old',
            'Choreography for most of HUNTRIX songs',
            'Mira can play drums',
            'Her favorite ramen flavor is roast beef.'
          ],
          city: 'Los Angeles',
          temp: undefined,
          tempError: false
        },
        {
          id: 3,
          name: 'Zoey',
          role: 'Dancer',
          img: '/photos/zoey.jpg',
          profile: [
            'Zodiac Sign: Sagittarius',
            'Chinese Zodiac Sign: Rooster',
            'Her hobbies are drawing and skateboarding.',
            'She can play the bass',
            "Wrote most of HUNTRIX songs' rap parts",
            'Her favorite ramen flavor is pork with soy sauce.'
          ],
          city: 'Moscow',
          temp: undefined,
          tempError: false
        }
      ],
      query: '',
      selectedMember: null,
      active: null
    };
  },
  computed: {
    filteredMembers() {
      const q = this.query.trim().toLowerCase()
      if (!q) return this.members
      return this.members.filter(m => m.name.toLowerCase().includes(q))
    }
  },
  methods: {
    showProfile(member) {
      this.selectedMember = member
      this.active = member.id
    },
    removeProfile() {
      this.selectedMember = null
      this.active = null
    },
    async fetchWeather(member) {
      const API_KEY = "0ec4d4a178a5e65314a3b24c1284b4b4"
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${member.city}&units=metric&appid=${API_KEY}`)
      .then(response => {
        console.log(response.data.main.temp)
        member.temp = response.data.main.temp
      })
    },
    async fetchAllWeather() {
      await Promise.all(this.members.map(m => this.fetchWeather(m)))
    }
  },
  watch: {
    query() {
      this.selectedMember = null
      this.active = null
    }
  },
  mounted() {
    this.fetchAllWeather()
  }
};
</script>

<template>
  <main class="container">
    <h1>HUNTRIX Member Explorer</h1>
    <p>
      Search: <input type="text" v-model="query">
    </p>
    <p>
      {{ filteredMembers.length }} of {{ members.length }}
    </p>
    <p v-if="filteredMembers.length === 0">
      No members found <span v-if="query"> for {{ query }}</span>
    </p>
    <ol>
      <li v-for="m in filteredMembers" :key="m.id">
        <button @click="active ? removeProfile() : showProfile(m)" :class="{active: selectedMember && selectedMember.id === m.id}">
        {{ m.name }} - {{ m.role }}
        </button>
        <br>
      <img :src="m.img" width="100">
      <br>
        <p class="city-temp">
          <strong>{{ m.city }}</strong>
          <span v-if="m.tempError"> - N/A</span>
          <span v-else-if="m.temp === undefined"> - Loading...</span>
          <span v-else> :: {{ m.temp }}°C</span>
        </p>

      </li>
    </ol>
    <!-- Profile section -->
    <section v-if="selectedMember" class="profile">
      <h2>{{ selectedMember.name }}'s Profile</h2>
      <ul>
        <li 
          v-for="(info, idx) in selectedMember.profile" :key="idx">
          {{ info }}
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

.active {
  background-color: purple;
  color: white;
}

.city-temp {
  margin: 0.25rem 0 1rem;
  font-size: 0.9rem;
  color: #666;
}
</style>