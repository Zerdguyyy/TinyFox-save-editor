<script>

</script>

<template>
    <div id="menu-bar">
        <a class="menu-bar-item dropdown-parent">File</a>
        <div class="dropdown">
            <a class="dropdown-item" @click="">Open</a>
            <a class="dropdown-item" @click="">Save</a>
            <a class="dropdown-item" @click="">Save As</a>

        </div>
    </div>
</template>

<style>
#menu-bar {
    position: sticky;
    border-bottom: 1px solid;
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

.dropdown-parent:hover + .dropdown {
    display: block;
}

</style>