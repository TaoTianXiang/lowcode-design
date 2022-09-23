import Inject from '@alilc/lowcode-plugin-inject';
import { init, plugins, project } from '@alilc/lowcode-engine';
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';
import SchemaPlugin from '@alilc/lowcode-plugin-schema';
import DataSource from '@alilc/lowcode-plugin-datasource-pane';
import CodeEditor from '@alilc/lowcode-plugin-code-editor';
import { setupHostEnvironment } from '@knxcloud/lowcode-utils';
import InitPlugin from '@/plugins-registry/init';
import logoPane from '@/plugins-registry/logoPane/index';
import ComponentPane from '@/plugins-registry/componentsPane';
import pluginMap from '@/plugins-registry/pluginMap';
import saveAndPreview from '@/plugins-registry/saveAndPreview';
import './assets/main.scss';

(async () => {
  const preference = new Map();

  preference.set('DataSourcePane', {
    importPlugins: [],
    dataSourceTypes: [
      {
        type: 'fetch',
      },
    ],
  });
  await plugins.register(Inject);
  await plugins.register(UndoRedoPlugin);
  await plugins.register(SchemaPlugin);
  await plugins.register(DataSource); //数据源
  await plugins.register(ComponentPane);
  await plugins.register(InitPlugin);
  await plugins.register(CodeEditor);
  await plugins.register(logoPane);
  await plugins.register(pluginMap);
  await plugins.register(saveAndPreview);

  setupHostEnvironment(project, '/static/js/vue.runtime.global.js');

  await init(
    document.getElementById('lce-container')!,
    {
      enableCondition: true,
      enableCanvasLock: true,
      supportVariableGlobally: true,
      simulatorUrl: [
        '/static/js/vue-simulator-renderer.js',
        '/static/css/vue-simulator-renderer.css',
        '/js/simulator.js',
      ],
    },
    preference,
  );
})();
