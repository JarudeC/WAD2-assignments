<script>
import FooterBar from './components/FooterBar.vue';
import HeaderBar from './components/HeaderBar.vue';
import MemberCard from './components/MemberCard.vue';

export default {
  name: 'App',
  components: {HeaderBar, MemberCard, FooterBar},
  data() {
    return {
      group: 'HUNTRIX',
      members: [
        {
          id: 1,
          name: 'Rumi',
          role: 'Leader, Vocal',
          img: '/photos/rumi.jpg',
          city: 'Dubai'
        },
        {
          id: 2,
          name: 'Mira',
          role: 'Rapper',
          img: '/photos/mira.jpg',
          city: 'Los Angeles'
        },
        {
          id: 3,
          name: 'Zoey',
          role: 'Dancer',
          img: '/photos/zoey.jpg',
          city: 'Moscow'
        }
      ],
      likes: { 1: 0, 2: 0, 3: 0 }
    }
  },
  methods: {
    addLikes(id) {
      this.likes[id]++
      console.log(this.likes)
    }
  },
  computed: {
    totalLikes() {
      let total = 0
      for (let id in this.likes) {
        total += this.likes[id]
      }
      return total
    }
  }
}
</script>

<template>
  <div id="app">

    <!-- Header Bar goes here -->
    <HeaderBar />

    <!-- Status bar -->
    <div class="status">
      ❤️ {{ totalLikes }} liked
      <!-- ALternate way: <p>Total Likes: {{ Object.values(likes).reduce((a,b)=>a+b, 0) }}</p>-->
    </div>
    <div class="status">
      <button @click="likes = {1:0, 2:0, 3:0}">Reset All Likes</button>
    </div>

    <div class="main">
      <!-- Member Cards go here -->
       <MemberCard 
       v-for="member in members"
       :key="member.id"
       :name="member.name"
       :role="member.role"
       :img="member.img"
       :city="member.city"
       :id="member.id"
       :likes="likes[member.id]"
       @liked="addLikes"
       >
      <p style="font-size:0.9rem;color:#555;">
      ✨ {{ member.name }} is shining bright today!
      </p>
      <template #footer>
        <div>
          <div v-if="member.name === 'Rumi'">🏆 Leader’s Choice</div>
        <div v-else-if="member.name === 'Mira'">🎤 Rap Star</div>
        <div v-else>💃 Dance Icon</div>
        </div>

      </template>
      </MemberCard>
    </div>

    <FooterBar />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}
.status {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
