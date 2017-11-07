//import Vue from 'vue'


import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from './components/UserReg.vue'
import Article from './components/Article.vue'

export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/follow',
    component:Follow
  },
  {
    path:'/column',
    component:Column
  },
  {
    path:'/user-info',
    component:UserInfo
  },
  {
    path:'/user-login',
    component:UserLogin
  },
  {
    path:'/user-reg',
    component:UserReg
  },
  {
    path:'/article/:id',
    component:Article,
    /*children:[
      {
        path:'/:id',
        component:Article
      }
    ]*/
  },
  //路由重定向
  { 
    path: '/', 
    redirect: '/home' 
  },
  { 
    //全部找不到跳转至此,可配404页面
    path: '*',
    redirect: '/home' 
  }
];

/*const router={
	mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
	routes:[
		{
			path:'/home',
			component:Home
		},
    {
      path:'/follow',
      component:Follow
    },
    {
      path:'/column',
      component:Column
    },
		{ 
      path: '/', 
      redirect: '/home' 
    }
	]
};*/

//export default new VueRouter(router);

