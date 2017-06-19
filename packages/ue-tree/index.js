import UeTree from './src/tree.vue';

/* istanbul ignore next */
UeTree.install = function(Vue) {
  Vue.component(UeTree.name, UeTree);
};

export default UeTree;
