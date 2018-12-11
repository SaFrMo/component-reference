import Vue from 'vue'

export default () => {
    // Register fh-components
    Vue.component('a-div', require('fh-components/a-div'))
    Vue.component('flex-text', require('fh-components/flex-text'))
    Vue.component('hamburger-button', require('fh-components/hamburger-button'))
    Vue.component('image-loader', require('fh-components/image-loader'))
    Vue.component('load-on-view', require('fh-components/load-on-view'))
    Vue.component('mailing-list', require('fh-components/mailing-list'))
    Vue.component('menu-item', require('fh-components/wp-menu-item'))
    Vue.component('responsive-image', require('fh-components/responsive-image'))
    Vue.component('reveal-footer', require('fh-components/reveal-footer'))
    Vue.component('scroll-to', require('fh-components/scroll-to'))
    Vue.component('slide-show', require('fh-components/slide-show'))
    Vue.component('split-text', require('fh-components/split-text'))
    Vue.component('sticky-wrap', require('fh-components/sticky-wrap'))
    Vue.component('text-typer', require('fh-components/text-typer'))
    Vue.component('velocity-animate', require('fh-components/velocity-animate'))
    Vue.component('video-stage', require('fh-components/video-stage'))
    Vue.component('wp-content', require('fh-components/wp-content'))
    Vue.component('wp-menu', require('fh-components/wp-menu'))

    // Register fh-components directives
    Vue.directive('animated', require('fh-components/v-animated'))
    Vue.directive('draggable', require('fh-components/v-draggable'))
    Vue.directive('full-height', require('fh-components/v-full-height'))
    Vue.directive('in-view', require('fh-components/v-in-view'))
    Vue.directive('interact', require('fh-components/v-interact'))
    Vue.directive('keydown', require('fh-components/v-keydown'))
    Vue.directive('reverse-hover', require('fh-components/v-reverse-hover'))

    // Register components specific to this reference site
    Vue.component(
        'component-list',
        require('./components/ComponentList').default
    )
    Vue.component(
        'example-component',
        require('./components/ExampleComponent').default
    )
}
