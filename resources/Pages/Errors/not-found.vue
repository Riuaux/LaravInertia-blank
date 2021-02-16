<template>
	<div>
    <p>Not found</p>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    </div>
</template>

<script>

	export default {
        name: "dashboard",
		data (){
            return {
            }
        },
        methods: {
        },
        mounted() {
            document.title = "PCERP - "+this.$options.name;
        },
        created: function(){
            document.title = "PCERP - "+this.$options.name;
        }
	}
</script>