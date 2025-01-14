import * as arrow from 'apache-arrow';
import perspective from "@finos/perspective";
import "@finos/perspective-viewer";
import "@finos/perspective-viewer-datagrid";
import "@finos/perspective-viewer-d3fc";

import "@finos/perspective-viewer/dist/css/pro-dark.css";
import "./index.css";

const perspectiveWorker = await perspective.worker();
const viewer = document.getElementsByTagName("perspective-viewer")[0];

let table;

const tableData = arrow.tableFromArrays({
   date: arrow.vectorFromArray([20089], new arrow.Date_())
});


table = await perspectiveWorker.table(arrow.tableToIPC(tableData));
viewer.load(table);
