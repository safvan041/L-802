<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>

<style scoped>
header {
    width: 100%;
    height: 3.5rem;
    background-color: #ce5c00;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
header h1 {
    font-size: 1.5rem;
    margin: 0;
    color: white;
}
</style>