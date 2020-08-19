import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        CarList:[]
    },
    mutations:{
        addNum(state,payload){
            payload.count++
        },
        addType(state,payload){
            payload.isCheked = false;
            state.CarList.push(payload)
        },
        // changeColor(state,payload){
        //
        // }
    },
    actions:{
        addCar(context, payload)
        {
            let isExist = context.state.CarList.find(item => item.iid === payload.iid)

            if (isExist) {
                context.commit('addNum', isExist)
            }
            else {
                payload.isCheked = false;
                payload.count = 1;
                context.commit('addType',payload)
            }
        }
    }

})


export default store