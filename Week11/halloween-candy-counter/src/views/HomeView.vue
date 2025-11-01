<script>
import CandyCard from '../components/CandyCard.vue';

export default {
  name: 'App',
  components: {CandyCard},
  data() {
    return {
      total: {},
      candies: [
        { id: 1, name: "Pumpkin Pop", img: '/candies/pumpkinpop.jpg' },
        { id: 2, name: "Ghost Gummies", img: '/candies/ghostgummies.jpg' },
        { id: 3, name: "Witch's Caramel", img: '/candies/witchcaramel.jpg' }
      ]
    }
  },
  methods: {
    add(candyId) {
      this.total[candyId]++
      console.log(this.total)
    },
    remove(candyId) {
      if (this.total[candyId] > 0) {
        this.total[candyId]--
      }
      console.log(this.total)
    },
    populateTotal() {
      for (let candy of this.candies) {
        this.total[candy.id] = 0;
      }
    }
  },
  computed: {
    displayTotal() {
      let res = 0
      for(let id in this.total) {
        res += this.total[id]
      }
      return res
    }
  },
  mounted() {
    this.populateTotal()
  }
}
</script>

<template>
  <main class="app">
    <h1>Halloween Candy Counter 🎃🍬</h1>
    <p class="total">
      Total Candies Collected: <strong>{{ displayTotal }}</strong>
    </p>


    <section class="cards">
      <!-- Cards will be displayed here -->
      <CandyCard 
        v-for="candy in candies"
        :key="candy.id"
        :cardName="candy.name"
        :image="candy.img"
        @add-candy="add(candy.id)"
        @remove-candy="remove(candy.id)"
      >
      <p v-if="candy.name == 'Pumpkin Pop'">Sweet and spooky delight for every trick or treater.</p>
      <p v-else-if="candy.name == 'Ghost Gummies'">Soft, chewy, and hauntingly good.</p>
      <p v-else>Enchanted caramel that vanishes fast.</p>

      <template #flavor>
        <span v-if="candy.name == 'Pumpkin Pop'">Pumpkin spice with sugar sparkles</span>
        <span v-else-if="candy.name == 'Ghost Gummies'">Vanilla mist with citrus notes and mint</span>
        <span v-else>Green apple caramel with a hint of magic</span>
      </template>

      <template #bonus>
        <span v-if="candy.name == 'Pumpkin Pop'">🎯 Bonus: First collect gives +2</span>
        <span v-else-if="candy.name == 'Ghost Gummies'">👻 Bonus: Random boo effect</span>
        <span v-else>🧙 Bonus: Witch hat wildcard</span>
      </template>
      </CandyCard>
    </section>

  </main>
</template>

<style>
.app {
  padding: 24px;
  background: #1a001a;
  color: #f7eaff;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  text-align: center;
}
h1 {
  margin: 0 0 8px;
  font-size: 1.6rem;
}
.total {
  margin: 0 0 20px;
  font-size: 1rem;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}
</style>