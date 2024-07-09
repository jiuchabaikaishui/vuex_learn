<template>
    <div>
        <div>用户token {{ $store.state.user.token }}</div>
        <div>网站名称 {{ $store.state.setting.name }}</div>

        <div>用户token {{ token }}</div>
        <div>网站名称 {{ name }}</div>

        <div>
            <input  placeholder="请输入token" v-model="inputValue">
            <button @click="$store.commit('updateToken', inputValue)">方法一修改 token</button>
            <button @click="updateToken(inputValue)">方法二修改 token</button>
        </div>

        <div>
            <input  placeholder="请输入name" v-model="inputName">
            <button @click="$store.commit('setting/updateName', inputName)">方法一修改 name</button>
            <button @click="handel1(inputName)">方法二修改 name</button>
            <button @click="updateName(inputName)">方法三修改 name</button>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, createNamespacedHelpers } from 'vuex';
const { mapMutations: settingMutations } = createNamespacedHelpers('setting')

const result = {
    data() {
        return {
            inputValue: '',
            inputName: ''
        }
    }, 
    computed: {
        ...mapGetters(['token', 'name'])
    },
    methods: {
        ...mapMutations(['updateToken', 'setting/updateName']),
        handel1(name) {
            console.log('name: ', name);
            this['setting/updateName'](name)
        },
        ...settingMutations(['updateName'])
    }
}

console.log('methods: ', result.methods);

export default result
</script>