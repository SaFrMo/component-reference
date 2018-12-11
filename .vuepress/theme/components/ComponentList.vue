<template>

    <section class="component-list">

        <div class="search-wrap">
            <label for="search-label">Filter:</label>
            <input id="search-label" v-model="searchTerm" autofocus/>
        </div>

        <ul class="main-list">
            <slot/>
            <!-- <example-component
                v-for="(comp, i) in components"
                :info="comp"
                :key="i"
                v-if="passesSearch(comp)"/> -->
        </ul>

    </section>

</template>

<script>
export default {
    props: {
        components: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            searchTerm: ''
        }
    },
    methods: {
        passesSearch(component) {
            return (
                component &&
                (component.name.includes(this.searchTerm) ||
                    component.tags.some(tag => tag.includes(this.searchTerm)))
            )
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
        justify-content: center;
        text-align: center;
        align-items: center;

        label {
            margin-right: 10px;
        }
        input {
            font-size: 24px;
            padding: 10px;
            border: 2px solid $main;
            border-radius: 15px;
            flex: 1;
        }
    }
    .main-list {
        padding: 0;
        list-style: none;
    }
}
</style>
