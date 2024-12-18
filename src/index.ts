import * as arrow from 'apache-arrow';
import perspective from "@finos/perspective";
import "@finos/perspective-viewer";
import "@finos/perspective-viewer-datagrid";
import "@finos/perspective-viewer-d3fc";

import "@finos/perspective-viewer/dist/css/pro-dark.css";

const perspectiveWorker = await perspective.worker();
const viewer = document.getElementsByTagName("perspective-viewer")[0];

let table;

const tableData = arrow.tableFromArrays({
  id: Int32Array.from([1, 2, 3]),
  name: ['Alice', 'Bob', 'Charlie'],
  score: Float32Array.from([92.5, 87.3, 95.8])
});
table = await perspectiveWorker.table(arrow.tableToIPC(tableData));
viewer.load(table);
