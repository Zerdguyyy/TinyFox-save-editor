<script setup lang="ts">
import { computed, reactive } from 'vue';
import { SAVE_FILE, SHRINE_LOCATION } from '../types/types';
import { useSaveDataStore } from '../stores/saveData';
import { ABILITY_NAMES, SHRINE_PRESETS, INVENTORY_LINKS, INVENTORY_BOOLS, INVENTORY_COUNTS, DARUMA_NAMES, OMAMORI_NAMES } from '../types/constants';

// TODO - unlock elevator in castle

const saveDataStore = useSaveDataStore();

const state = reactive({
    shrineSearchValue: "",

    showAdvancedShrineSettings: false,
});

const dataLoaded = computed(() => {
    return saveDataStore.data != null;
});

const shrineAsPreset = computed(() => {
    return {
        name: "",
        camera: saveDataStore.data.cameraName,
        position: saveDataStore.data.shrinePos,
        scene: saveDataStore.data.sceneName
    } as SHRINE_LOCATION;
})

function setShrinePreset(preset: SHRINE_LOCATION) {
    saveDataStore.data.shrinePos[0] = preset.position[0];
    saveDataStore.data.shrinePos[1] = preset.position[1];
    saveDataStore.data.cameraName = preset.camera;
    saveDataStore.data.sceneName = preset.scene;

    saveDataStore.shrinePresetName = preset.name;
}

function setSelectedDaruma() {
    saveDataStore.data.darumaActiveBooleans[0] = true;
}
</script>

<template>
    <div id="editing-pane">

        <div v-if="dataLoaded">
            <!-- <p>
               {{ JSON.stringify(shrineAsPreset).replace(/"([^"]+)":/g, '$1:') }},
            </p> -->

            <div id="shrine" class="subsection">
                <h4>Shrine - {{ saveDataStore.shrinePresetName }}</h4>
                
                <input id="search-shrines" v-model="state.shrineSearchValue" placeholder="Search shrine presets...">
                <div class="searchable-options">
                    <ul class="options">
                        <li v-for="shrine in SHRINE_PRESETS">
                            <a v-if="shrine.name.toLowerCase().includes(state.shrineSearchValue.toLowerCase())"
                                @click="setShrinePreset(shrine)" 
                                :class="{ selected: (shrine.name == saveDataStore.shrinePresetName) }"
                            >
                                {{ shrine.name }}
                            </a>
                        </li>
                    </ul>
                </div>
    
                <div>
                    <input type="checkbox" v-model="state.showAdvancedShrineSettings">
                    <label>Show advanced shrine settings</label>
                </div>
                
                <div v-show="state.showAdvancedShrineSettings">
                    <div>
                        <input type="text" v-model="saveDataStore.data.sceneName">
                        <label>Scene Name</label>
                    </div>
                    <div>
                        <input type="text" v-model="saveDataStore.data.cameraName">
                        <label>Camera Name</label>
                    </div>
        
                    <div>
                        <input type="number" v-model="saveDataStore.data.shrinePos[0]">
                        <label>X</label>
                    </div>
                    <div>
                        <input type="number" v-model="saveDataStore.data.shrinePos[1]">
                        <label>Y</label>
                    </div>
                </div>
            </div>
            
            <div id="abilities" class="subsection">
                <h4>Abilities</h4>
                <div v-for="i in 10">
                    <input type="checkbox" v-model="saveDataStore.data.abilityBooleans[i - 1]">
                    <label>{{ ABILITY_NAMES[i - 1] }}</label>
                </div>
            </div>
            
            <div id="inventory" class="subsection">
                <h4>Inventory</h4>
                <div class="row-display">
                    <div class="column">
                        <div v-for="item of INVENTORY_LINKS">
                            <input type="checkbox" v-model="saveDataStore.data.inventoryBooleans[item.boolIndex]">
                
                            <input type="number" v-model="saveDataStore.data.inventoryInts[item.countIndex]">
                            <label>{{ item.name }}</label>
                        </div>
                    </div>
                    <div class="column">
                        <div v-for="item of INVENTORY_BOOLS">
                            <input type="checkbox" v-model="saveDataStore.data.inventoryBooleans[item.boolIndex]">
                            <label>{{ item.name }}</label>
                        </div>
                    </div>
                    <div class="column">
                        <div v-for="item of INVENTORY_COUNTS">
                            <input type="number" v-model="saveDataStore.data.inventoryInts[item.countIndex]">
                            <label>{{ item.name }}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div id="daruma" class="subsection">
                <h4 style="display: inline;">Daruma</h4>
                <span> - (Daruma will not be usable unless Chomper is owned)</span>
                
                <table>
                    <tr>
                        <th></th>
                        <th>Owned</th>
                        <th>Awakened</th>
                        <!-- <th>Selected</th> -->
                    </tr>
                    <tr v-for="i in DARUMA_NAMES.length">
                        <td>
                            <label>{{ DARUMA_NAMES[i - 1] }}</label>
                        </td>
                        <td>
                            <input type="checkbox" v-model="saveDataStore.data.darumaAvailableBooleans[i - 1]" @click="setSelectedDaruma">
                        </td>
                        <td>
                            <input type="checkbox" v-model="saveDataStore.data.darumaTwoEyesBooleans[i - 1]" @click="setSelectedDaruma">
                        </td>
                        <!-- <td>
                            <input type="checkbox" disabled="true" v-model="saveDataStore.data.darumaActiveBooleans[i - 1]" @click="setSelectedDaruma">
                        </td> -->
                    </tr>
                </table>
            </div>
            
            <div id="omamori" class="subsection">
                <h4>Omamori</h4>
                
                <table>
                    <tr>
                        <th></th>
                        <th>Owned</th>
                        <th>Equipped</th>
                        <th>Description</th>
                    </tr>
                    <tr v-for="i in OMAMORI_NAMES.length">
                        <td>
                            <label>{{ OMAMORI_NAMES[i - 1].name }}</label>
                        </td>
                        <td>
                            <input type="checkbox" v-model="saveDataStore.data.omamoriAvailableBooleans[i - 1]">
                        </td>
                        <td>
                            <input type="checkbox" v-model="saveDataStore.data.omamoriActiveBooleans[i - 1]">
                        </td>
                        <td>
                            <label>{{ OMAMORI_NAMES[i - 1].description }}</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div v-if="!dataLoaded">
            <span id="no-data-overlay">No data loaded</span>
        </div>
    
        <!-- <button id="debug-btn" @click="console.log(saveDataStore.data)">
            Print raw data to console (Debug)
        </button> -->
    </div>
</template>

<style scoped>
.subsection {
    padding: 5px;
    border: 1px solid;

    input {
        margin-right: 2px;
    }
    th, td {
        border-right: 1px solid;
        padding: 2px 3px;
        border-bottom: 1px solid;
    }
    th {
        text-align: left;
    }
    td input {
        align-self: center;
    }
    table {
        margin: 5px;
        border-collapse: collapse;
    }
}

ul.options {
    list-style: none;
    padding: 0px;
    margin: 0px;

    li {
        
        a {
            border-top: 1px solid var(--light-border);
            display: block;
            padding: 2px;
        }
        a.selected {
            background-color: var(--selected);
        }
    }
    li:hover {
        background-color: var(--button-hover);
    }
    li:active {
        background-color: var(--button-click);
    }
}

.searchable-options {
    height: 10rem;
    overflow-y: scroll;
    overflow-x: hidden;
}

#no-data-overlay {
    display: block;
    padding: 50px;
    text-align: center;
}

#editing-pane {
    padding-bottom: 30px;
}

.row-display {
    display: flex;
}

.column {
    flex: 1;
    
    input[type=number] {
        width: 5rem;
    }
}
</style>