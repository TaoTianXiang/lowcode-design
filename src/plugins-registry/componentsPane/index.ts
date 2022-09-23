import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import ComponentsPane from '@alilc/lowcode-plugin-components-pane';

const leftArea = (ctx: ILowCodePluginContext) => {
  return {
    name: 'builtin-plugin-registry',
    async init() {
      const { skeleton, project } = ctx;
      // 注册组件库面板
      const componentsPane = skeleton.add({
        area: 'leftArea',
        type: 'PanelDock',
        name: 'componentsPane',
        content: ComponentsPane,
        props: {
          align: 'top',
          icon: 'zujianku',
          description: '组件库',
        },
      });
      componentsPane.disable();
      project.onSimulatorRendererReady(() => {
        componentsPane.enable();
      });
    },
  };
};
leftArea.pluginName = 'leftAreaPluginRegistry';

export default leftArea;
