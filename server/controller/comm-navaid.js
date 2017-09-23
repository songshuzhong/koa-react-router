const controller = {
  getNavaidData (ctx, next)  {
    ctx.body = ctx.body = {
      namespace: 'pangu',
      version: '1.0.0',
      items: [
        {
          chlCode: '001',
          chlName: '产品',
          namespace: 'pangu',
          linkTo: '/'
        }, {
          chlCode: '002',
          chlName: '数据',
          namespace: 'pangu',
          linkTo: '/data-pro'
        }, {
          chlCode: '004',
          chlName: '数据挖掘',
          namespace: 'pangu',
          linkTo: '/docker'
        }, {
          chlCode: '005',
          chlName: '模型开发',
          namespace: 'pangu',
          linkTo: '/data-mining'
        }, {
          chlCode: '006',
          chlName: '帮助文档',
          namespace: 'pangu',
          linkTo: '/text-component'
        }, {
          chlCode: '007',
          chlName: '用户管理',
          namespace: 'pangu',
          linkTo: '/userManage'
        }
      ]
    };
  }
};

module.exports = controller;