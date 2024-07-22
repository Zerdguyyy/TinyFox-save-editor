<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue';
import MenuBar from './components/MenuBar.vue';
import { OpenDialogOptions } from 'electron';
import { getFileViewerCallback } from './main/FilePickers';

onMounted(async () => {
    const params: OpenDialogOptions = {
        title: "amongus"
    };

    const cb = getFileViewerCallback();
    const ret = cb(params);
    console.log(ret);
})
</script>

<template>
    <MenuBar></MenuBar>
    AAAA
</template>

<style>
@import "./index.css"
</style>