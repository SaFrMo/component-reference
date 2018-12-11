<template>

    <main class="layout">

        <div class="content-wrap">
            <Content/>
        </div>

    </main>

</template>

<script>
import registerComponents from './register-components'
registerComponents()

export default {}
</script>

<style lang="scss">
@import './styles/base';

.layout {
    min-height: 100vh;

    .content-wrap {
        padding: 20px 40px;
        max-width: 800px;
        margin: auto;
    }
    .header-anchor {
        color: darken($light-gray, 60%);
        text-decoration: none;

        &:hover,
        &:focus {
            color: darken($light-gray, 40%);
        }
    }
    h1,
    h2 {
        text-align: center;
    }
    h3 {
        background: $light-main;
        padding: 10px;
    }
    .content.custom > *:first-child {
        display: none;
    }
}
</style>
