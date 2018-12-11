<template>

    <li
        class="example-component"
        :style="cmpStyle"
        v-if="passesSearch()">

        <h2 class="name" v-html="info.name"/>

        <div class="tag-wrap">
            <h4 class="label">Tags:</h4>
            <ul class="tags">
                <li
                    v-for="(tag, i) in info.tags"
                    :key="i"
                    v-html="tag"/>
            </ul>
        </div>

        <div class="info-wrap" v-html="info.content"/>

        <div class="example-wrap">
            <slot name="example"/>
        </div>

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
            default: '#7ED9BA'
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

            // get tags
            const ul = slot.find(s => s.tag == 'ul')
            const lis = ul.children.filter(child => child.tag == 'li')
            const tags = lis.map(li => li.children[0].text)
            output.tags = tags

            // get the rest of the content
            const contentIndex = slot.findIndex(s => s.tag == 'p')
            output.content = slot
                .slice(contentIndex)
                .map(s => s.children)
                .filter(s => s)
                .map(s => s[0])
                .map(s => (s.text ? '<p>' + s.text + '</p>' : ''))
                .join('')

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
    border: 2px solid var(--bg-color);
    padding: 20px;
    border-radius: 15px;
    background: white;

    .name {
        font-size: 28px;
        text-align: left;
    }
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
                background: $dark-main;
                border-radius: 5px;
                margin: 0 2px;
                color: white;
            }
        }
    }
    .info-wrap {
        margin-top: 20px;
    }

    & + .example-component {
        margin-top: 30px;
    }
}
</style>
