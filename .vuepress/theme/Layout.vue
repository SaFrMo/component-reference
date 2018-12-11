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
        background: white;
    }
    .header-anchor {
        color: $light-gray;
        text-decoration: none;

        &:hover,
        &:focus {
            color: darken($light-gray, 20%);
        }
    }
    h1,
    h2 {
        text-align: center;
    }
    .content.custom > *:first-child {
        display: none;
    }
}
</style>
