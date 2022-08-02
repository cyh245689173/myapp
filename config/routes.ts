export default [
  {
    path: '/user',
    layout: false,
    routes: [{path: '/user/login', component: './user/Login'},
      // {component: './404'},
      {path: '/user/resgiter', component: './user/Register'}],
  },
  // {component: './404'},
  {path: '/welcome',name: '欢迎', icon: 'smile', component: './Welcome'},


  {
    path: '/admin',
    icon: 'crown',
    name:'管理页面',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      //添加子路由
      {path: '/admin/user-manage',name: '用户管理', icon: 'smile', component: './Admin/UserManage'},
      {path: '/admin/sub-page', icon: 'smile', component: './Welcome'},
      {component: './404'},

    ],
  },
  {name:'查询表格',icon: 'table', path: '/list', component: './TableList'},
  {path: '/', redirect: '/welcome'},
  //{component: './404'},
];
