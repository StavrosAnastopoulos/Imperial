(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"9Yi/":function(e,t,l){"use strict";l.d(t,"a",function(){return n}),l("uOb8");var n=function(){return function(e){this.localeService=e}}()},Fh6D:function(e,t,l){"use strict";l.d(t,"a",function(){return o});var n=l("CcnG"),o=function(){function e(){var e=this;this.startSession=function(t,l){void 0===t&&(t=33),void 0===l&&(l=3),e.pages=[],e.tablesPerPage=[],e.currentRow=0,e.maxRows=t,e.newTableRows=l},this.switchPage=function(){e.tablesPerPage&&e.pages.push(e.tablesPerPage),e.tablesPerPage=[],e.currentRow=0},this.endSession=function(){return e.tablesPerPage.length>0&&e.pages.push(e.tablesPerPage),e.pages},this.addTable=function(t){var l=t.source?t.source.length:2;if(e.currentRow+=e.newTableRows,e.currentRow+l<=e.maxRows)e.tablesPerPage.push(t),e.currentRow+=l,e.maxRows-e.currentRow<6&&(e.currentRow=0,e.pages.push(e.tablesPerPage),e.tablesPerPage=[]);else{var n=t.source.splice(l-(e.currentRow+l-e.maxRows));e.tablesPerPage.push(t),e.currentRow=0,e.pages.push(e.tablesPerPage),e.tablesPerPage=[],e.addTable({source:n,pointers:t.pointers,title:t.title})}}}return e.ngInjectableDef=n.W({factory:function(){return new e},token:e,providedIn:"root"}),e}()},Jgrx:function(e,t,l){"use strict";var n=l("CcnG"),o=l("Ip0R"),r=l("BHnd"),a=l("y4qS"),u=l("Fzqc"),i=(l("Wf4p"),l("ZYjt"),l("dWZg")),s=n.rb({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}});function c(e){return n.Mb(2,[n.Ib(402653184,1,{_rowOutlet:0}),n.Ib(402653184,2,{_headerRowOutlet:0}),n.Ib(402653184,3,{_footerRowOutlet:0}),n.Bb(null,0),(e()(),n.tb(4,16777216,null,null,1,null,null,null,null,null,null,null)),n.sb(5,16384,[[2,4]],0,a.s,[n.S,n.k],null,null),(e()(),n.tb(6,16777216,null,null,1,null,null,null,null,null,null,null)),n.sb(7,16384,[[1,4]],0,a.q,[n.S,n.k],null,null),(e()(),n.tb(8,16777216,null,null,1,null,null,null,null,null,null,null)),n.sb(9,16384,[[3,4]],0,a.r,[n.S,n.k],null,null)],null,null)}var d=n.rb({encapsulation:2,styles:[],data:{}});function b(e){return n.Mb(2,[(e()(),n.tb(0,16777216,null,null,1,null,null,null,null,null,null,null)),n.sb(1,147456,null,0,a.c,[n.S],null,null)],null,null)}var p=n.rb({encapsulation:2,styles:[],data:{}});function f(e){return n.Mb(2,[(e()(),n.tb(0,16777216,null,null,1,null,null,null,null,null,null,null)),n.sb(1,147456,null,0,a.c,[n.S],null,null)],null,null)}var m=l("n7Ne"),h=l("uOb8");l("9Yi/"),l.d(t,"a",function(){return g}),l.d(t,"b",function(){return x});var g=n.rb({encapsulation:0,styles:[["table[_ngcontent-%COMP%]{border:1px solid #000;background-color:#6e1a17}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{color:#fff}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:start}mat-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}mat-table[_ngcontent-%COMP%]   mat-header-row[_ngcontent-%COMP%]{border-bottom:0;background-color:#ffffe0;border:1px solid #000;min-height:35px}mat-table[_ngcontent-%COMP%]   mat-header-row[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]{color:#000;font-size:12px;font-weight:600;text-align:left;padding-left:3px}mat-table[_ngcontent-%COMP%]   mat-header-row[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]:not(:last-child), mat-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid #000}mat-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]{border-left:1px solid #000;border-right:1px solid #000;border-bottom-color:#000;min-height:30px}mat-table[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]{font-size:10px;text-align:left;padding-left:3px}mat-table[_ngcontent-%COMP%]   .mat-column-Description[_ngcontent-%COMP%]{flex:1 1 40%}"]],data:{}});function C(e){return n.Mb(0,[(e()(),n.tb(0,0,null,null,1,"th",[["style","text-align: end"]],[[8,"innerHTML",1]],null,null,null,null)),n.Gb(1,1)],null,function(e,t){var l=t.component,o=n.Lb(t,0,0,e(t,1,0,n.Cb(t.parent.parent,1),l.data.price));e(t,0,0,o)})}function P(e){return n.Mb(0,[(e()(),n.tb(0,0,null,null,6,"table",[["style","width: 100%"]],null,null,null,null,null)),(e()(),n.tb(1,0,null,null,5,"tbody",[],null,null,null,null,null)),(e()(),n.tb(2,0,null,null,4,"tr",[],null,null,null,null,null)),(e()(),n.tb(3,0,null,null,1,"th",[],[[8,"innerHTML",1]],null,null,null,null)),n.Gb(4,2),(e()(),n.kb(16777216,null,null,1,null,C)),n.sb(6,16384,null,0,o.k,[n.S,n.P],{ngIf:[0,"ngIf"]},null)],function(e,t){e(t,6,0,t.component.data.price)},function(e,t){var l=t.component,o=n.Lb(t,3,0,e(t,4,0,n.Cb(t.parent,0),l.data.title,l.localeService.locale));e(t,3,0,o)})}function T(e){return n.Mb(0,[(e()(),n.tb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],[[8,"innerHTML",1]],null,null,null,null)),n.sb(1,16384,null,0,r.e,[a.d,n.k],null,null),n.Gb(2,2)],null,function(e,t){var l=t.component,o=n.Lb(t,0,0,e(t,2,0,n.Cb(t.parent.parent.parent,0),t.parent.context.$implicit,l.localeService.locale));e(t,0,0,o)})}function v(e){return n.Mb(0,[(e()(),n.tb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],[[8,"innerHTML",1]],null,null,null,null)),n.sb(1,16384,null,0,r.a,[a.d,n.k],null,null),n.Gb(2,2)],null,function(e,t){var l=t.component,o=n.Lb(t,0,0,e(t,2,0,n.Cb(t.parent.parent.parent,1),t.context.$implicit[t.parent.context.$implicit],l.localeService.locale));e(t,0,0,o)})}function w(e){return n.Mb(0,[(e()(),n.tb(0,0,null,null,12,null,null,null,null,null,null,null)),n.Hb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),n.sb(2,16384,null,3,r.c,[],{name:[0,"name"]},null),n.Ib(335544320,5,{cell:0}),n.Ib(335544320,6,{headerCell:0}),n.Ib(335544320,7,{footerCell:0}),n.Hb(2048,[[1,4]],a.d,null,[r.c]),(e()(),n.kb(0,null,null,2,null,T)),n.sb(8,16384,null,0,r.f,[n.P],null,null),n.Hb(2048,[[6,4]],a.j,null,[r.f]),(e()(),n.kb(0,null,null,2,null,v)),n.sb(11,16384,null,0,r.b,[n.P],null,null),n.Hb(2048,[[5,4]],a.b,null,[r.b])],function(e,t){e(t,2,0,t.context.$implicit)},null)}function S(e){return n.Mb(0,[(e()(),n.tb(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,b,d)),n.Hb(6144,null,a.k,null,[r.g]),n.sb(2,49152,null,0,r.g,[],null,null)],null,null)}function y(e){return n.Mb(0,[(e()(),n.tb(0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,f,p)),n.Hb(6144,null,a.m,null,[r.i]),n.sb(2,49152,null,0,r.i,[],null,null)],null,null)}function D(e){return n.Mb(0,[(e()(),n.tb(0,0,null,null,13,"mat-table",[["class","mat-table"]],null,null,null,c,s)),n.sb(1,2342912,null,4,r.k,[n.u,n.h,n.k,[8,null],[2,u.b],o.c,i.a],{dataSource:[0,"dataSource"]},null),n.Ib(603979776,1,{_contentColumnDefs:1}),n.Ib(603979776,2,{_contentRowDefs:1}),n.Ib(603979776,3,{_contentHeaderRowDefs:1}),n.Ib(603979776,4,{_contentFooterRowDefs:1}),(e()(),n.kb(16777216,null,null,1,null,w)),n.sb(7,278528,null,0,o.j,[n.S,n.P,n.u],{ngForOf:[0,"ngForOf"]},null),(e()(),n.kb(0,null,null,2,null,S)),n.sb(9,540672,null,0,r.h,[n.P,n.u],{columns:[0,"columns"]},null),n.Hb(2048,[[3,4]],a.l,null,[r.h]),(e()(),n.kb(0,null,null,2,null,y)),n.sb(12,540672,null,0,r.j,[n.P,n.u],{columns:[0,"columns"]},null),n.Hb(2048,[[2,4]],a.n,null,[r.j])],function(e,t){var l=t.component;e(t,1,0,l.data.source),e(t,7,0,l.data.pointers),e(t,9,0,l.data.pointers),e(t,12,0,l.data.pointers)},null)}function x(e){return n.Mb(0,[n.Eb(0,m.a,[h.a]),n.Eb(0,m.b,[h.a]),(e()(),n.tb(2,0,null,null,4,"div",[["style","margin-bottom: 10px;"]],null,null,null,null,null)),(e()(),n.kb(16777216,null,null,1,null,P)),n.sb(4,16384,null,0,o.k,[n.S,n.P],{ngIf:[0,"ngIf"]},null),(e()(),n.kb(16777216,null,null,1,null,D)),n.sb(6,16384,null,0,o.k,[n.S,n.P],{ngIf:[0,"ngIf"]},null)],function(e,t){var l=t.component;e(t,4,0,l.data.title),e(t,6,0,l.data.source)},null)}},"S3+I":function(e,t,l){"use strict";l.d(t,"b",function(){return n}),l.d(t,"a",function(){return r}),l("uOb8"),l("Fh6D");var n=function(e){return Object.keys(e).forEach(function(t){"#text"==t?delete e["#text"]:("object"==typeof e[t]&&(e[t]=n(e[t])),t.includes(":")&&(e[t.split(":")[1]]=e[t],delete e[t]))}),e},o={"CAR BODY":"BodyWork | header",ELECTRIC:"Electrics | header",MECHANIC:"MechanicalSystems | header"},r=function(){return function(e,t){var l=this;this.localeService=e,this._tableService=t,this.process=function(e){l._tableService.startSession();var t,r,a,u,i,s,c,d,b,p,f={},m={},h=["Description"],g={},C={},P={},T={},v={},w=[],S=[],y=[],D=[];if(e["S:Envelope"]){var x=(e=(e=e["S:Envelope"]["S:Body"])[Object.keys(e)[1]].return).customTemplateData.entry;Object.keys(x).forEach(function(e){return f[x[e].key]=x[e].value}),e=n(e["ns1:Dossier"])}else e["ns2:Dossiers"]&&(e=n(e["ns2:Dossiers"]["ns2:Dossier"]));l.localeService.setLocal(e.Language||"en"),l.localeService.setCurrency(e.Currency||"EUR"),f.Name=e.Name,f.Description=e.Description,f.CreateDate=e.CreateDate,f.ChangeDate=e.ChangeDate,f.DamageDate=e.RepairOrder.DamageDate,r=(e.TradingData||{}).Dealership||{},a=(e.TradingData||{}).Expert||{},t=(e.TradingData||{}).Owner||{},i=(((m=e.Vehicle||{}).Equipment||{}).SeriesEquipment||{}).EquipmentPosition||[],s=((m.Equipment||{}).SpecialEquipment||{}).EquipmentPosition||[],m.Color=(m.Equipment||{}).Color,delete m.Equipment,i.length>0&&l._tableService.addTable({source:i,pointers:h,title:"SeriesEquipment"}),s.length>0&&l._tableService.addTable({source:s,pointers:h,title:"SpecialEquipment"}),l._tableService.switchPage();var _=(e.RepairCalculation||{}).RepairWages,M=(e.RepairCalculation||{}).CalcResultCommon||null;M&&((g=(M.MaterialPositions||{}).MaterialPosition)&&(g.length||(g=[g]),l._tableService.addTable({source:g,pointers:["PartNumber","Description","ValuePerUnit","Amount","ValueTotalCorrected"],title:"SpareParts"})),(C=(M.AdditionalCostsPositions||{}).AdditionalCostsPosition)&&(C.length||(C=[C]),C.forEach(function(e){e.ValueTotalCorrected||(e.ValueTotalCorrected=e.ValueTotal)}),l._tableService.addTable({source:C,pointers:["Description","ValueTotalCorrected"],title:"AdditionalCosts"})),(T=(M.LabourPositions||{}).LabourPosition)&&(T.length||(T=[T]),l._tableService.addTable({source:T,pointers:["LabourPosId","Description","WageLevel","Duration","ValueTotalCorrected"],title:"Labour"})),(v=(M.LacquerPositions||{}).LacquerPosition)&&(v.length||(v=[v]),v.forEach(function(e){e.WagePrice=(_.Lacquer||30)*e.Duration,e.WageLevel=e.LabourPosId}),l._tableService.addTable({source:v,pointers:["WageLevel","Description","Material","Duration","WagePrice","ValueTotalCorrected"],title:"Lacquer"})),(P=(M.DiscountPositions||{}).DiscountPosition)&&(P.length||(P=[P]),P.forEach(function(e){e.ValueTotalCorrected=e.CorrectionValue}),l._tableService.addTable({source:P,pointers:["Description","BaseValue","CorrectionPercentage","ValueTotalCorrected"],title:"Discount"})),l._tableService.switchPage());var O=e.RepairCalculation.CalculationSummary;if(O&&Object.keys(O).length>0){var k=O.SparePartsCosts;k&&(k.Description="SparePartsSum | header",k.ValueTotalCorrected=k.TotalSum,w=[k],c=k.TotalSum),d=O.LabourCosts.TotalSum,delete O.LabourCosts.TotalSum,Object.keys(O.LabourCosts).forEach(function(e){return S.push(O.LabourCosts[e])}),S.forEach(function(e){e.Description=o[e.Type],e.Duration=e.Units,e.ValueTotalCorrected=e.Price}),O.LacquerCosts.Wage.Description="Wage | header",y.push(O.LacquerCosts.Wage),y.push.apply(y,O.LacquerCosts.Material.LacquerConstants.LacquerConstant);var L=O.LacquerCosts.Material.MaterialGroups.LacquerMaterialGroupSummary;L&&(L.length||(L=[L]),L.forEach(function(e){return e.Description=e.Name}),y.push.apply(y,L)),y.forEach(function(e){e.Duration=e.Units,e.ValueTotalCorrected=e.Price}),b=O.LacquerCosts.TotalSum,D=[{Description:"RepairCost | header",TotalNetCosts:O.TotalNetCosts,TotalVAT:O.TotalVAT,TotalGrossCosts:O.TotalGrossCosts}],O.TotalNetDiscount&&D.push({Description:"Discount | header",TotalNetCosts:O.TotalNetDiscount,TotalVAT:O.TotalVATDiscount,TotalGrossCosts:O.TotalGrossDiscount}),O.TotalNetCorrected&&D.push({Description:"CorrectedRepairCost | header",TotalNetCosts:O.TotalNetCorrected,TotalVAT:O.TotalVATCorrected,TotalGrossCosts:O.TotalGrossCorrected}),p=O.TotalGrossCorrected||O.TotalGrossCosts;var R=O.AuxiliaryCosts;R&&l._tableService.addTable({title:"AdditionalCostsSum",price:R.TotalSum}),l._tableService.addTable({source:w,pointers:["Description","AllSum","ConsumablesSurcharge","ValueTotalCorrected"],title:"SumBlockSpareParts",price:c}),l._tableService.addTable({source:S,pointers:["Description","Duration","PricePerUnit","ValueTotalCorrected"],title:"SumBlockWage",price:d}),l._tableService.addTable({source:y,pointers:["Description","Duration","PricePerUnit","ValueTotalCorrected"],title:"SumBlockLacquer",price:b}),l._tableService.addTable({source:D,pointers:["Description","TotalNetCosts","TotalVAT","TotalGrossCosts"],title:"CostSummary",price:p})}return u=l._tableService.endSession(),{additionalInfo:f,ownerInfo:t,dealerInfo:r,expertInfo:a,vehicleInfo:m,pages:u}}}}()},YeCy:function(e,t,l){"use strict";l.d(t,"a",function(){return o});var n=l("CcnG"),o=function(){function e(){}return e.prototype.xmlToJson=function(e){var t={};if(1===e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var l=0;l<e.attributes.length;l+=1){var n=e.attributes.item(l);t["@attributes"][n.nodeName]=n.nodeValue}}}else 3===e.nodeType&&(t=e.nodeValue);if(e.hasChildNodes()&&1===e.childNodes.length&&3===e.childNodes[0].nodeType)t=e.childNodes[0].nodeValue;else if(e.hasChildNodes())for(var o=0;o<e.childNodes.length;o+=1){var r=e.childNodes.item(o),a=r.nodeName;if(void 0===t[a])t[a]=this.xmlToJson(r);else{if(void 0===t[a].push){var u=t[a];t[a]=[],t[a].push(u)}t[a].push(this.xmlToJson(r))}}return t},e.ngInjectableDef=Object(n.W)({factory:function(){return new e},token:e,providedIn:"root"}),e}()}}]);