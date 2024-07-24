<script setup lang="ts">
import MenuBar from './components/MenuBar.vue';
import BottomBar from './components/BottomBar.vue';
import EditingPane from './components/EditingPane.vue';
</script>

<template>
    <MenuBar></MenuBar>
    <EditingPane></EditingPane>
    <BottomBar></BottomBar>
</template>

<style>
@import "./index.css";
</style>