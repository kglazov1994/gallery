<template>
    <div class="card" :class="card.price ? '' : 'card--salary'">
        <img :src="card.img" alt="" class="card__img" />
        <div class="card__body">
            <div class="card__name h2">{{ card.name }}</div>
            <div v-if="card.price" class="card__info flex-c">
                <div class="card__prices">
                    <div v-if="card.priceOld" class="card__price card__price--old h6">{{ card.priceOld }}</div>
                    <div class="card__price h3">{{ card.price }}</div>
                </div>
                <UiLoader :status="load">
                    <button
                        :id="card.id"
                        class="btn"
                        :class="isClick ? 'btn--basket' : ''"
                        @click="page($event), (isClick = !isClick)"
                    >
                        <span v-if="test">В корзине</span>
                        <span v-else>Купить</span>
                    </button>
                </UiLoader>
            </div>
            <div v-else class="card__info flex">
                <div class="sold h3">Продано на аукционе</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Card',
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isClick: false,
            load: 'loaded',
            inBasket: false,
            offer: {
                id: this.card.id,
                name: this.card.name,
                amount: 1,
            },
        }
    },

    computed: {
        ...mapState('basket', ['basket']),
        test() {
            let ids = false
            if (Object.keys(this.basket).length > 0) {
                Object.keys(this.basket).forEach((key) => {
                    if (this.card.id === key) {
                        ids = true
                        this.isClick = true
                    }
                })
            }
            return ids
        },
    },
    watch: {
        is() {
            if (this.test) {
                this.isClick = true
            } else {
                this.isClick = false
            }
        },
    },
    methods: {
        async page(event) {
            this.load = 'loading'
            try {
                if (this.isClick === false) {
                    const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/1')
                    this.load = 'loaded'
                    alert(response.title)
                    this.$store.commit('basket/setBasket', this.offer)
                } else {
                    const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/1')
                    this.load = 'loaded'
                    alert(response.title)
                    this.$store.commit('basket/removeBasket', this.card.id)
                }
            } catch (err) {
                console.log(err)
                alert(err)
            }
        },
    },
}
</script>
<style lang="less">
.card {
    min-height: 331px;
    display: flex;
    flex-direction: column;
    &__img {
        min-height: 160px;
    }
    &__body {
        border: 1px solid #e1e1e1;
        border-top: none;
        padding: 0 24px;
        padding-top: 20px;
        padding-bottom: 26px;
        min-height: 168px;
        flex: 1;
    }
    &__info {
        justify-content: space-between;
        margin-top: 23px;
        .sold {
            margin-top: 11px;
        }
    }
    &__price {
        &--old {
            color: #a0a0a0;
            text-decoration: line-through;
        }
    }
    &--salary {
        opacity: 0.5;
        pointer-events: none;
    }
}
</style>
