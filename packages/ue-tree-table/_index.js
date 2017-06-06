import ElTableColumn from './src/table-column';
import UeElTreeTable from './src/table';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(UeElTreeTable.name, UeElTreeTable);
  Vue.component(ElTableColumn.name, ElTableColumn);
};

export { UeElTreeTable, ElTableColumn };
