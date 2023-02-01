<template>
    <header class="header">
        <div class="container flex-c">
            <div class="header__left flex-c">
                <img src="../assets/img/logo.png" alt="" class="logo" />
                <ul class="header__menu flex-c">
                    <li class="header__item">
                        <nuxt-link class="header__link header__link--active" to="/">Каталог</nuxt-link>
                    </li>
                    <li class="header__item">
                        <nuxt-link class="header__link" to="/">Доставка</nuxt-link>
                    </li>
                    <li class="header__item">
                        <nuxt-link class="header__link" to="/">Оплата</nuxt-link>
                    </li>
                    <li class="header__item">
                        <nuxt-link class="header__link" to="/">Контакты</nuxt-link>
                    </li>
                    <li class="header__item">
                        <nuxt-link class="header__link" to="/">О галерее</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="header__right flex-c">
                <div class="header__search flex-c">
                    <input v-model="search" type="text" class="header__input" placeholder="Поиск по названию картины" />
                    <button class="btn" @click="$emit('update:cards', search)"><span>Найти</span></button>
                </div>
                <div class="header__basket">
                    <svg-icon name="basket" width="28" height="28" />
                    <span v-if="Object.keys(basket).length > 0" class="header__basket-amount">{{
                        Object.keys(basket).length
                    }}</span>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Header',
    data() {
        return {
            search: '',
        }
    },
    computed: {
        ...mapState('basket', ['basket']),
    },
}
</script>
<style lang="less">
.header {
    padding: 24px 0;
    border-bottom: 1px solid #e1e1e1;
    .container {
        justify-content: space-between;
    }
    &__link {
        &--active {
            color: #9f9f9f;
        }
    }
    &__left,
    &__menu {
        gap: 48px;
    }
    &__right {
        gap: 38px;
    }

    &__input {
        height: 48px;
        border: 1px solid #e1e1e1;
        padding: 0 16px;
        min-width: 294px;
        &::placeholder {
            font-family: @baseFont;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #9f9f9f;
        }
    }
    &__basket {
        position: relative;
        &-amount {
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #403432;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 400;
            font-size: 12px;
            top: 0;
            right: -10px;
        }
    }
}
</style>
