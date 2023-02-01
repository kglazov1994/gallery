<template>
    <div class="site">
        <Header @update:cards="todosByTitle($event)" />
        <main class="site__content">
            <div class="gallery">
                <div class="container">
                    <h1 class="h1">Картины эпохи Возрождения</h1>
                    <div class="gallery__list">
                        <GridRow>
                            <GridCol v-for="(card, i) in cards" :key="i" size="3,6,12">
                                <div class="gallery__card">
                                    <CardsCard :card="card" />
                                </div>
                            </GridCol>
                        </GridRow>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Default',
    data() {
        return {
            cards: [
                {
                    id: '1',
                    img: '/img/i1.png',
                    name: '«Рождение Венеры» Сандро Боттичелли',
                    priceOld: '2 000 000 $',
                    price: '1 000 000 $',
                },
                {
                    id: '2',
                    img: '/img/i2.png',
                    name: '«Тайная вечеря»  Леонардо да Винчи',
                    price: '3 000 000 $',
                },
                {
                    id: '3',
                    img: '/img/i3.png',
                    name: '«Сотворение Адама» Микеланджело',
                    priceOld: '6 000 000 $',
                    price: '5 000 000 $',
                },
                {
                    id: '4',
                    img: '/img/i4.png',
                    name: '«Урок анатомии» Рембрандт',
                },
            ],
        }
    },
    computed: {
        ...mapState('basket', ['basket']),
    },
    methods: {
        todosByTitle(event) {
            if (event === '') {
                return (this.cards = [
                    {
                        id: '1',
                        img: '/img/i1.png',
                        name: '«Рождение Венеры» Сандро Боттичелли',
                        priceOld: '2 000 000 $',
                        price: '1 000 000 $',
                    },
                    {
                        id: '2',
                        img: '/img/i2.png',
                        name: '«Тайная вечеря»  Леонардо да Винчи',
                        price: '3 000 000 $',
                    },
                    {
                        id: '3',
                        img: '/img/i3.png',
                        name: '«Сотворение Адама» Микеланджело',
                        priceOld: '6 000 000 $',
                        price: '5 000 000 $',
                    },
                    {
                        id: '4',
                        img: '/img/i4.png',
                        name: '«Урок анатомии» Рембрандт',
                    },
                ])
            } else {
                return (this.cards = this.cards.filter((item) => item.name.includes(event)))
            }
        },
    },
}
</script>
<style lang="less">
.gallery {
    padding-top: 45px;
    .h1 {
        margin-bottom: 39px;
    }
    &__list {
        // .col {
        //     margin-right: 32px;
        //     &:last-child {
        //         margin-right: 0;
        //     }
        // }
    }
}
</style>
