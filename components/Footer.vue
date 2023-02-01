<template>
    <footer class="footer">
        <div class="container flex-c">
            <div class="footer__left flex-c">
                <img src="../assets/img/logo.png" alt="" class="logo" />
                <ul class="footer__menu flex-c">
                    <li class="footer__item">
                        <nuxt-link class="footer__link footer__link--active" to="/">Каталог</nuxt-link>
                    </li>
                    <li class="footer__item">
                        <nuxt-link class="footer__link" to="/">Доставка</nuxt-link>
                    </li>
                    <li class="footer__item">
                        <nuxt-link class="footer__link" to="/">Оплата</nuxt-link>
                    </li>
                    <li class="footer__item">
                        <nuxt-link class="footer__link" to="/">Контакты</nuxt-link>
                    </li>
                    <li class="footer__item">
                        <nuxt-link class="footer__link" to="/">О галерее</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="footer__right flex-c">
                <div class="footer__tel footer__contact flex-c">
                    <svg-icon name="tel" width="14" height="14" />
                    <a href="tel+74959999999">+7 (495) 999-99-99</a>
                </div>
                <div class="footer__map footer__contact flex-c">
                    <svg-icon name="map" width="16" height="16" />
                    <span>г. Воронеж, ул. Никитина, 119А</span>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
}
</script>
<style lang="less">
.footer {
    padding: 24px 0;
    background: #eceaea;
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
    &__contact {
        gap: 10px;
    }
}
</style>
