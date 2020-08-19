import router from 'vue-router';
import shouye from '../views/home/shouye'
import page2 from '../views/page2/page2'
import page3 from '../views/Car/car'
import page4 from '../views/page4'
import Vue from 'vue'
import Detail from '../views/Detail/detail'

Vue.use(router);

const routes = [
    {
        path:'/shouye',
        component:shouye
    },
    {
        path:'/page2',
        component:page2
    },
    {
        path:'/page3',
        component:page3
    },
    {
        path:'/page4',
        component:page4
    },
    {
        path:'/detail/:iid',
        component:Detail
    }
]
const originalPush = router.prototype.push
router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const app =  new router({
    routes,
    model:history
})

export default app