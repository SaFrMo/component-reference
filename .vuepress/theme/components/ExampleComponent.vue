<template>

    <li
        class="example-component"
        :style="cmpStyle"
        v-if="passesSearch()">

        <h3 v-html="info.name"/>

        <div class="tag-wrap">
            <h4 class="label">Tags:</h4>
            <ul class="tags">
                <li
                    v-for="(tag, i) in info.tags"
                    :key="i"
                    v-html="tag"/>
            </ul>
        </div>

        <div class="info-wrap" v-html="info.info"/>

    </li>

</template>

<script>
import _get from 'lodash/get'

export default {
    data() {
        return {}
    },
    props: {
        bg: {
            type: String,
            default: 'tomato'
        }
    },
    computed: {
        cmpStyle() {
            return {
                '--bg-color': this.bg
            }
        },
        info() {
            const slot = this.$slots.default
            const output = {}

            // get component name
            const h2 = slot.find(s => s.tag == 'h2')
            if (h2) {
                output.name = h2.children.find(t => t.text).text
            }

            const ul = slot.find(s => s.tag == 'ul')
            const lis = ul.children.filter(child => child.tag == 'li')
            const tags = lis.map(li => li.children[0].text)
            output.tags = tags

            return output
        }
    },
    methods: {
        passesSearch() {
            const term = this.$parent.searchTerm.toLowerCase()
            return (
                this.info.name.toLowerCase().includes(term) ||
                this.info.tags.some(x => x.toLowerCase().includes(term))
            )
        }
    }
}
</script>

<style lang="scss">
@import '../styles/base';

.example-component {
    background: var(--bg-color);
    padding: 20px;

    .tag-wrap {
        font-style: italic;
        display: flex;
        align-items: center;

        .label {
            margin: 0 10px 0 0;
        }
        .tags {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                padding: 5px 15px 5px 10px;
                background: rgba(black, 0.8);
                border-radius: 5px;
                margin: 0 2px;
                color: white;
            }
        }
    }
    .info-wrap {
        margin-top: 20px;
    }
}
</style>
