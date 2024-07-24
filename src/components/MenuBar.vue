<script setup lang="ts">
import { useSaveDataStore } from '../stores/saveData'

const saveDataStore = useSaveDataStore();
</script>

<template>
    <div id="menu-bar">
        <a class="menu-bar-item dropdown-parent">File</a>
        <div class="dropdown">
            <a class="dropdown-item" @click="saveDataStore.openSaveFile()">Open</a>
            <a class="dropdown-item" @click="saveDataStore.saveFileAs()">Save As</a>
        </div>
    </div>
</template>

<style>
#menu-bar {
    position: sticky;
    top: 0px;
    border-bottom: 1px solid;
    background-color: var(--background);
}

.dropdown {
    min-width: 150px;
    display: none;
    position: absolute;
    background-color: var(--background);
}
.dropdown:hover {
    display: block;
}

.menu-bar-item {
    display: inline-block;
    padding: 5px;
    background-color: var(--background);
}
.menu-bar-item:hover {
    background-color: var(--button-hover);
}

.dropdown-item {
    display: block;
    padding: 5px;
}
.dropdown-item:hover {
    background-color: var(--button-hover);
}
.dropdown-item:active {
    background-color: var(--button-click);
}

.dropdown-parent:hover + .dropdown {
    display: block;
}

</style>