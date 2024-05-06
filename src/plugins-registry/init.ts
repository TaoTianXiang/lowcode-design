import { injectAssets } from '@alilc/lowcode-plugin-inject';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { getProjectSchemaToLocalStorage } from '@/editors/utils';
import assets from '@/assets/assets.json';
import originSchema from '@/assets/schema.json';

const editorInit = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      const { material, project } = ctx;
      const loadedAssets = await injectAssets(assets);
      material.setAssets(loadedAssets);
      const projectSchema = getProjectSchemaToLocalStorage();
      const schema = projectSchema ? projectSchema['componentsTree'].pop() : originSchema;
      project.onSimulatorRendererReady(() => {
        project.openDocument(schema);
      });
    },
  };
};

editorInit.pluginName = 'editorInit';
export default editorInit;
