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
      ]
    }
  }
}
</script>

<template>
  <div id="app">

    <!-- Header Bar goes here -->
    <HeaderBar />

    <div class="main">
      <!-- Member Cards go here -->
       <MemberCard 
       v-for="member in members"
       :key="member.id"
       :name="member.name"
       :role="member.role"
       :img="member.img"
       :city="member.city"
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
</style>
