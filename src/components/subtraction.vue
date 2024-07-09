<template>
    <div>
        <h3>计算结果：{{count}}</h3>
        <button @click="btnHandle1">-1</button>
        <div>
            <input type="number" placeholder="请输入数值" v-model.number="subNum">
            <button @click="btnHandleN">-{{subNum}}</button>
        </div>
        <button @click="subAsync">-1 async</button>
        <div>
            <input type="number" placeholder="请输入数值" v-model.number="subNumAsync">
            <button @click="subNAsync(subNumAsync)">-{{subNumAsync}} async</button>
        </div>
        <h3>{{showNum}}</h3>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            subNum: 2,
            subNumAsync: 3
        }
    },
    computed: {
        ...mapState(['count']),
        ...mapGetters(['showNum'])
    },
    methods: {
        ...mapMutations(['sub', 'subN']),
        btnHandle1() {
            this.sub()
        }, 
        btnHandleN() {
            this.subN(this.subNum)
        },
        ...mapActions(['subAsync', 'subNAsync'])
    }
}
</script>