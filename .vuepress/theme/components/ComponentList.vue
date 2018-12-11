<template>

    <section class="component-list">

        <div class="search-wrap">
            <label for="search-label">Filter components</label>
            <input id="search-label" v-model="searchTerm" autofocus/>
        </div>

    </section>

</template>

<script>
export default {
    data() {
        return {
            searchTerm: ''
        }
    }
}
</script>

<style lang="scss">
@import '../styles/base';

.component-list {
    .search-wrap {
        font-size: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        label {
            margin-bottom: 10px;
        }
        input {
            font-size: 24px;
            padding: 10px;
        }
    }
}
</style>
