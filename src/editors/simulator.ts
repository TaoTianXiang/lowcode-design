import simulator, { vueRendererConfig } from '@knxcloud/lowcode-vue-simulator-renderer';
import { Notify } from 'vant';
// import { ConfigProvider, configProviderProps } from './config-provider';

// const { message } = createDiscreteApi(['message'], {
//   configProviderProps,
// });

simulator.app.config.globalProperties.$message = Notify;

// vueRendererConfig.setConfigProvider(ConfigProvider);
