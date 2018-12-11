If you're reading this on Github, it probably looks broken - head over to [the main site](https://component-reference.netlify.com/) to see it in action.

# Component Reference

<component-list>

<example-component>

## Responsive Image

-   Image

Flexible way to display images.

<div slot="example">

### Standard

Adds padding to take up the necessary space.

    <responsive-image src="..." />

<responsive-image src="https://images.unsplash.com/photo-1544458734-8363165cf417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80" />

### fill-space

Fills the available space.

    <responsive-image src="..." :fill-space="true" />

<div style="margin: auto; resize: both; overflow: scroll; position: relative; width: 200px; height: 200px;">
<responsive-image src="https://images.unsplash.com/photo-1544458734-8363165cf417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80" :fill-space="true"/>
</div>

### fit

`cover` or `contain`.

    <responsive-image src="..." :fill-space="true" fit="contain" />

<div style="margin: auto; resize: both; overflow: scroll; position: relative; width: 200px; height: 200px;">
<responsive-image src="https://images.unsplash.com/photo-1544458734-8363165cf417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80" :fill-space="true" fit="contain"/>
</div>

</div>

</example-component>

<example-component>

## Reveal Footer

-   Sticky
-   Slide

</example-component>

</component-list>
