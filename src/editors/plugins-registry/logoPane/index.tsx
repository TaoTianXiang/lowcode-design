import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import Logo from '@/componets/logo/logo';

const logoPane = (ctx: ILowCodePluginContext) => {
  return {
    name: 'builtin-plugin-registry',
    async init() {
      const { skeleton, project } = ctx;
      // 注册 logo 面板
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: Logo,
        contentProps: {
          logo: '/static/svg/logo.svg',
          href: 'https://lowcode-engine.cn',
        },
        props: {
          align: 'left',
        },
      });
    },
  };
};
logoPane.pluginName = 'logoPanePluginRegistry';

export default logoPane;
