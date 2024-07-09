<template>
    <div>
        <h3>计算结果：{{$store.state.count}}</h3>
        <button @click="btnHandle1">+1</button>
        <div>
            <input type="number" placeholder="请输入数值" v-model.number="addNum">
            <button @click="btnHandleN">+{{addNum}}</button>
        </div>
        <button @click="btnHandle1Async">+1 async</button>
        <div>
            <input type="number" placeholder="请输入数值" v-model.number="addNumAsync">
            <button @click="btnHandleNAsync">+{{addNumAsync}}</button>
        </div>
        <h3>{{$store.getters.showNum}}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addNum: 2,
            addNumAsync: 3
        }
    },
    methods: {
        btnHandle1() {
            this.$store.commit('add')
        },
        btnHandleN() {
            this.$store.commit('addN', this.addNum)
        },
        btnHandle1Async() {
            this.$store.dispatch('addAsync')
        },
        btnHandleNAsync() {
            this.$store.dispatch('addNAsync', this.addNumAsync)
        }
    }
}
</script>