const XLSX = require('xlsx');

//https://github.com/SheetJS/js-xlsx#optional-modules
class Statement {
    constructor(filePath) {
        this.workbook = XLSX.readFile(filePath);
        //质押式审批表模板
        this.zSheetTpl = "";
    }
    write(){

    }
}

import {Statement}
