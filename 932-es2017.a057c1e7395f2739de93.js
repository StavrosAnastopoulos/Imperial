"use strict";(self.webpackChunkimperial=self.webpackChunkimperial||[]).push([[932],{3932:function(e,t,n){n.d(t,{g:function(){return C}});var i=n(9248),a=n(1169),o=n(7716),r=n(2623),s=n(4655),l=n(6627),c=n(257),g=n(8583),Z=n(594),d=n(8651),p=n(4698),h=n(1002);function m(e,t){if(1&e&&(o.TgZ(0,"div"),o._UZ(1,"imp-table-info",15),o.qZA()),2&e){const e=t.$implicit,n=o.oxw(3);o.xp6(1),o.Q6J("data",e)("cssClass",n.tableCss)}}function u(e,t){if(1&e&&(o.TgZ(0,"div"),o._UZ(1,"p",14),o.YNc(2,m,2,2,"div",13),o.qZA()),2&e){const e=t.$implicit;o.xp6(2),o.Q6J("ngForOf",e)}}function A(e,t){if(1&e&&(o.TgZ(0,"div"),o._UZ(1,"imp-report-title",10),o._UZ(2,"imp-client-info",11),o._UZ(3,"imp-damage-card",12),o.YNc(4,u,3,1,"div",13),o.qZA()),2&e){const e=o.oxw();o.xp6(1),o.Q6J("imgPath",e.logoPath)("dims",e.logoDims),o.xp6(1),o.Q6J("additionalInfo",e.data.additionalInfo)("ownerInfo",e.data.ownerInfo)("dealerInfo",e.data.dealerInfo)("expertInfo",e.data.expertInfo)("vehicleInfo",e.data.vehicleInfo),o.xp6(1),o.Q6J("cssClass",e.checkboxCss),o.xp6(1),o.Q6J("ngForOf",e.data.pages)}}function x(e,t){if(1&e&&(o.TgZ(0,"div",18),o._UZ(1,"img",19),o.qZA()),2&e){const e=t.$implicit;o.xp6(1),o.Q6J("alt",e),o.uIk("src",e,o.LSH)}}function f(e,t){if(1&e&&(o.TgZ(0,"div"),o._UZ(1,"p",14),o.TgZ(2,"div",16),o.YNc(3,x,2,2,"div",17),o.qZA(),o.qZA()),2&e){const e=t.$implicit;o.xp6(3),o.Q6J("ngForOf",e)}}function J(e,t){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,f,4,1,"div",13),o.qZA()),2&e){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.imageAlbum)}}const M=function(){return["/welcome"]};let C=(()=>{class e{constructor(e,t,n,i){this.ngxXml2jsonService=e,this._imageParser=t,this._dataProcessing=n,this.cdr=i,this.fileName="No file chosen",this.numberOfImages="No images chosen",this.imgFilePaths=[],this.dataProcessed=!1,this.fileSelected=!1,this.imgsSelected=!1,this.imageAlbum=[],this.logoPath="assets/img/Dekra_Logo.png",this.logoDims=[600,93],this.tableCss="imperial-table",this.checkboxCss="imperial-checkboxes",this.print=()=>window.print()}addImages(e){for(this.imgsSelected=!1,this.numberOfImages="No images chosen",this.imgFilePaths=this._imageParser.parseImages(e),this.numberOfImages=this.imgFilePaths.length.toString(),this.imgsSelected=this.imgFilePaths.length>0;this.imgFilePaths.length>0;)this.imageAlbum.push(this.imgFilePaths.splice(0,6))}addFile(e){if(e&&e.target.files[0].name.toLowerCase().endsWith(".xml")){if(this.fileName=e.target.files[0].name,"undefined"!=typeof FileReader){const t=new FileReader;t.onload=()=>{const e=(new DOMParser).parseFromString(t.result,"text/xml");this.data=this._dataProcessing.process(this.ngxXml2jsonService.xmlToJson(e)),this.dataProcessed=!0,this.cdr.markForCheck()},t.readAsText(e.target.files[0]),this.fileSelected=!0}}else this.fileName="Please select an XML file!"}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(r.OZ),o.Y36(a.U),o.Y36(i.B),o.Y36(o.sBO))},e.\u0275cmp=o.Xpm({type:e,selectors:[["ng-component"]],features:[o._Bn([i.B,a.U])],decls:21,vars:6,consts:[[1,"container"],[1,"flex","row","tool-bar","hide-print"],[1,"mr-auto",3,"routerLink"],["type","file","id","xmlFile","accept",".xml",1,"inputFile",3,"change"],["for","xmlFile",1,"flex","row"],[1,"flex","column","sp-around","label-info",3,"innerHtml"],["type","file","multiple","multiple","id","imgs","accept","image/png, image/jpeg",1,"inputFile",3,"change"],["for","imgs",1,"flex","row"],[1,"mr-auto",3,"click"],[4,"ngIf"],["title","DamageInspectionTitle",3,"imgPath","dims"],[3,"additionalInfo","ownerInfo","dealerInfo","expertInfo","vehicleInfo"],[3,"cssClass"],[4,"ngFor","ngForOf"],[2,"page-break-before","always"],[3,"data","cssClass"],[1,"flex","row-wrap","sp-between"],["class","img-item",4,"ngFor","ngForOf"],[1,"img-item"],["width","325","height","300",3,"alt"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"mat-icon"),o._uU(4,"first_page"),o.qZA(),o.qZA(),o.TgZ(5,"input",3),o.NdJ("change",function(e){return t.addFile(e)}),o.qZA(),o.TgZ(6,"label",4),o.TgZ(7,"mat-icon"),o._uU(8,"note_add"),o.qZA(),o._UZ(9,"div",5),o.qZA(),o.TgZ(10,"input",6),o.NdJ("change",function(e){return t.addImages(e)}),o.qZA(),o.TgZ(11,"label",7),o.TgZ(12,"mat-icon"),o._uU(13,"add_photo_alternate"),o.qZA(),o._UZ(14,"div",5),o.qZA(),o._UZ(15,"imp-lang-picker"),o.TgZ(16,"div",8),o.NdJ("click",function(){return t.print()}),o.TgZ(17,"mat-icon"),o._uU(18,"print"),o.qZA(),o.qZA(),o.qZA(),o.YNc(19,A,5,9,"div",9),o.YNc(20,J,2,1,"div",9),o.qZA()),2&e&&(o.xp6(2),o.Q6J("routerLink",o.DdM(5,M)),o.xp6(7),o.Q6J("innerHtml",t.fileName,o.oJD),o.xp6(5),o.Q6J("innerHtml",t.numberOfImages,o.oJD),o.xp6(5),o.Q6J("ngIf",t.dataProcessed),o.xp6(1),o.Q6J("ngIf",t.imgsSelected))},directives:[s.rH,l.Hw,c._,g.O5,Z.b,d.u,p.i,g.sg,h.K],styles:[".img-item[_ngcontent-%COMP%]{overflow:hidden;width:325px;margin:10px 10px 0}@media screen{.container[_ngcontent-%COMP%]{padding-top:50px}}@media screen and (max-width: 760px){.label-info[_ngcontent-%COMP%]{display:none}}@media print{.container[_ngcontent-%COMP%]{padding:0 20px}}"],changeDetection:0}),e})()},8651:function(e,t,n){n.d(t,{u:function(){return Z}});var i=n(3729),a=n(7716),o=n(8583),r=n(7539),s=n(3679),l=n(7301),c=n(9790);const g=function(e){return{"hide-print":e}};let Z=(()=>{class e{constructor(){this.additionalInfo={},this.ownerInfo={},this.dealerInfo={},this.expertInfo={},this.vehicleInfo={},this.hide=[];for(let e=0;e<21;e++)this.hide.push(!1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["imp-client-info"]],inputs:{additionalInfo:"additionalInfo",ownerInfo:"ownerInfo",dealerInfo:"dealerInfo",expertInfo:"expertInfo",vehicleInfo:"vehicleInfo"},features:[a._Bn([i.p])],decls:256,vars:222,consts:[[3,"ngClass"],[3,"ngModel","ngModelChange"],["chkh1",""],[3,"innerHtml"],[3,"value"],["chkh2",""],["chkh3",""],["colspan","3"],["chkh4",""],["chkh5",""],["chkh6",""],["chkh7",""],["chkh8",""],["colspan","4"],["chkh9",""],["chkh10",""],["chkh11",""],["colspan","6"],["chkh12",""],["colspan","2"],["chkh13",""],["chkh14",""],["colspan","5"],["chkh15",""],[1,"th-small"],["chkh16",""],["chkh17",""],["chkh18",""],["chkh19",""],["chkh21",""]],template:function(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"table"),a.TgZ(1,"tr",0),a.TgZ(2,"th"),a.TgZ(3,"mat-checkbox",1,2),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(4).indeterminate=t}),a.qZA(),a._UZ(5,"span",3),a.ALo(6,"translate"),a.qZA(),a.TgZ(7,"td"),a._UZ(8,"input",4),a.qZA(),a.TgZ(9,"th"),a._UZ(10,"span",3),a.ALo(11,"translate"),a.qZA(),a.TgZ(12,"td"),a._UZ(13,"input",4),a.qZA(),a.qZA(),a.TgZ(14,"tr",0),a.TgZ(15,"th"),a.TgZ(16,"mat-checkbox",1,5),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(17).indeterminate=t}),a.qZA(),a._UZ(18,"span",3),a.ALo(19,"translate"),a.qZA(),a.TgZ(20,"td"),a._UZ(21,"input"),a.qZA(),a.TgZ(22,"th"),a._UZ(23,"span",3),a.ALo(24,"translate"),a.qZA(),a.TgZ(25,"td"),a._UZ(26,"input"),a.qZA(),a.qZA(),a.TgZ(27,"tr",0),a.TgZ(28,"th"),a.TgZ(29,"mat-checkbox",1,6),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(30).indeterminate=t}),a.qZA(),a._UZ(31,"span",3),a.ALo(32,"translate"),a.qZA(),a.TgZ(33,"td",7),a._UZ(34,"input"),a.qZA(),a.qZA(),a.TgZ(35,"tr",0),a.TgZ(36,"th"),a.TgZ(37,"mat-checkbox",1,8),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(38).indeterminate=t}),a.qZA(),a._UZ(39,"span",3),a.ALo(40,"translate"),a.qZA(),a.TgZ(41,"td",7),a._UZ(42,"input"),a.qZA(),a.qZA(),a.TgZ(43,"tr",0),a.TgZ(44,"th"),a.TgZ(45,"mat-checkbox",1,9),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(46).indeterminate=t}),a.qZA(),a._UZ(47,"span",3),a.ALo(48,"translate"),a.qZA(),a.TgZ(49,"td"),a._UZ(50,"input"),a.qZA(),a.TgZ(51,"th"),a._UZ(52,"span",3),a.ALo(53,"translate"),a.qZA(),a.TgZ(54,"td"),a._UZ(55,"input",4),a.qZA(),a.qZA(),a.TgZ(56,"tr",0),a.TgZ(57,"th"),a.TgZ(58,"mat-checkbox",1,10),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(59).indeterminate=t}),a.qZA(),a._UZ(60,"span",3),a.ALo(61,"translate"),a.qZA(),a.TgZ(62,"td"),a._UZ(63,"input"),a.qZA(),a.TgZ(64,"th"),a._UZ(65,"span",3),a.ALo(66,"translate"),a.qZA(),a.TgZ(67,"td"),a._UZ(68,"input",4),a.ALo(69,"date"),a.qZA(),a.qZA(),a.TgZ(70,"tr",0),a.TgZ(71,"th"),a.TgZ(72,"mat-checkbox",1,11),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(73).indeterminate=t}),a.qZA(),a._UZ(74,"span",3),a.ALo(75,"translate"),a.qZA(),a.TgZ(76,"td"),a._UZ(77,"input",4),a.qZA(),a.TgZ(78,"th"),a._UZ(79,"span",3),a.ALo(80,"translate"),a.qZA(),a.TgZ(81,"td"),a._UZ(82,"input",4),a.ALo(83,"date"),a.qZA(),a.qZA(),a.TgZ(84,"tr",0),a.TgZ(85,"th"),a.TgZ(86,"mat-checkbox",1,12),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(87).indeterminate=t}),a.qZA(),a._UZ(88,"span",3),a.ALo(89,"translate"),a.qZA(),a.TgZ(90,"td"),a._UZ(91,"input"),a.qZA(),a.TgZ(92,"th"),a._UZ(93,"span",3),a.ALo(94,"translate"),a.qZA(),a.TgZ(95,"td"),a._UZ(96,"input"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(97,"table"),a.TgZ(98,"tr"),a.TgZ(99,"th",13),a._UZ(100,"span",3),a.ALo(101,"translate"),a.qZA(),a.qZA(),a.TgZ(102,"tr",0),a.TgZ(103,"th"),a.TgZ(104,"mat-checkbox",1,14),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(105).indeterminate=t}),a.qZA(),a._UZ(106,"span",3),a.ALo(107,"translate"),a.qZA(),a.TgZ(108,"td",7),a._UZ(109,"input",4),a.qZA(),a.qZA(),a.TgZ(110,"tr",0),a.TgZ(111,"th"),a.TgZ(112,"mat-checkbox",1,15),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(113).indeterminate=t}),a.qZA(),a._UZ(114,"span",3),a.ALo(115,"translate"),a.qZA(),a.TgZ(116,"td",7),a._UZ(117,"input",4),a.qZA(),a.qZA(),a.TgZ(118,"tr",0),a.TgZ(119,"th"),a.TgZ(120,"mat-checkbox",1,16),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(121).indeterminate=t}),a.qZA(),a._UZ(122,"span",3),a.ALo(123,"translate"),a.qZA(),a.TgZ(124,"td"),a._UZ(125,"input",4),a.qZA(),a.TgZ(126,"th"),a._UZ(127,"span",3),a.ALo(128,"translate"),a.qZA(),a.TgZ(129,"td"),a._UZ(130,"input",4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(131,"table"),a.TgZ(132,"tr"),a.TgZ(133,"th",17),a._UZ(134,"span",3),a.ALo(135,"translate"),a.qZA(),a.qZA(),a.TgZ(136,"tr",0),a.TgZ(137,"th"),a.TgZ(138,"mat-checkbox",1,18),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(139).indeterminate=t}),a.qZA(),a._UZ(140,"span",3),a.ALo(141,"translate"),a.qZA(),a.TgZ(142,"td",19),a._UZ(143,"input",4),a.qZA(),a.TgZ(144,"th"),a._UZ(145,"span",3),a.ALo(146,"translate"),a.qZA(),a.TgZ(147,"td",19),a._UZ(148,"input",4),a.qZA(),a.qZA(),a.TgZ(149,"tr",0),a.TgZ(150,"th"),a.TgZ(151,"mat-checkbox",1,20),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(152).indeterminate=t}),a.qZA(),a._UZ(153,"span",3),a.ALo(154,"translate"),a.qZA(),a.TgZ(155,"td",19),a._UZ(156,"input",4),a.ALo(157,"translate"),a.ALo(158,"vehicleType"),a.qZA(),a.TgZ(159,"th"),a._UZ(160,"span",3),a.ALo(161,"translate"),a.qZA(),a.TgZ(162,"td",19),a._UZ(163,"input",4),a.qZA(),a.qZA(),a.TgZ(164,"tr",0),a.TgZ(165,"th"),a.TgZ(166,"mat-checkbox",1,21),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(167).indeterminate=t}),a.qZA(),a._UZ(168,"span",3),a.ALo(169,"translate"),a.qZA(),a.TgZ(170,"td",22),a._UZ(171,"input",4),a.qZA(),a.qZA(),a.TgZ(172,"tr",0),a.TgZ(173,"th"),a.TgZ(174,"mat-checkbox",1,23),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(175).indeterminate=t}),a.qZA(),a._UZ(176,"span",3),a.ALo(177,"translate"),a.qZA(),a.TgZ(178,"td"),a._UZ(179,"input",4),a.qZA(),a.TgZ(180,"th"),a._UZ(181,"span",3),a.ALo(182,"translate"),a.qZA(),a.TgZ(183,"td"),a._UZ(184,"input",4),a.qZA(),a.TgZ(185,"th",24),a._UZ(186,"span",3),a.ALo(187,"translate"),a.qZA(),a.TgZ(188,"td"),a._UZ(189,"input",4),a.qZA(),a.qZA(),a.TgZ(190,"tr",0),a.TgZ(191,"th"),a.TgZ(192,"mat-checkbox",1,25),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(193).indeterminate=t}),a.qZA(),a._UZ(194,"span",3),a.ALo(195,"translate"),a.qZA(),a.TgZ(196,"td",19),a._UZ(197,"input",4),a.qZA(),a.TgZ(198,"th"),a._UZ(199,"span",3),a.ALo(200,"translate"),a.qZA(),a.TgZ(201,"td",19),a._UZ(202,"input",4),a.qZA(),a.qZA(),a.TgZ(203,"tr",0),a.TgZ(204,"th"),a.TgZ(205,"mat-checkbox",1,26),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(206).indeterminate=t}),a.qZA(),a._UZ(207,"span",3),a.ALo(208,"translate"),a.qZA(),a.TgZ(209,"td",19),a._UZ(210,"input"),a.qZA(),a.TgZ(211,"th"),a._UZ(212,"span",3),a.ALo(213,"translate"),a.qZA(),a.TgZ(214,"td",19),a._UZ(215,"input"),a.qZA(),a.qZA(),a.TgZ(216,"tr",0),a.TgZ(217,"th"),a.TgZ(218,"mat-checkbox",1,27),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(219).indeterminate=t}),a.qZA(),a._UZ(220,"span",3),a.ALo(221,"translate"),a.qZA(),a.TgZ(222,"td",19),a._UZ(223,"input"),a.qZA(),a.TgZ(224,"th"),a._UZ(225,"span",3),a.ALo(226,"translate"),a.qZA(),a.TgZ(227,"td",19),a._UZ(228,"input"),a.qZA(),a.qZA(),a.TgZ(229,"tr",0),a.TgZ(230,"th"),a.TgZ(231,"mat-checkbox",1,28),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(232).indeterminate=t}),a.qZA(),a._UZ(233,"span",3),a.ALo(234,"translate"),a.qZA(),a.TgZ(235,"td"),a._UZ(236,"input"),a.qZA(),a.TgZ(237,"th"),a._UZ(238,"span",3),a.ALo(239,"translate"),a.qZA(),a.TgZ(240,"td"),a._UZ(241,"input"),a.qZA(),a.TgZ(242,"th",24),a._UZ(243,"span",3),a.ALo(244,"translate"),a.qZA(),a.TgZ(245,"td"),a._UZ(246,"input"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(247,"table"),a.TgZ(248,"tr",0),a.TgZ(249,"th"),a.TgZ(250,"mat-checkbox",1,29),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.MAs(251).indeterminate=t}),a.qZA(),a._UZ(252,"span",3),a.ALo(253,"translate"),a.qZA(),a.TgZ(254,"td",7),a._UZ(255,"imp-text-area"),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=a.MAs(4),n=a.MAs(17),i=a.MAs(30),o=a.MAs(38),r=a.MAs(46),s=a.MAs(59),l=a.MAs(73),c=a.MAs(87),Z=a.MAs(105),d=a.MAs(113),p=a.MAs(121),h=a.MAs(139),m=a.MAs(152),u=a.MAs(167),A=a.MAs(175),x=a.MAs(193),f=a.MAs(206),J=a.MAs(219),M=a.MAs(232),C=a.MAs(251);a.xp6(1),a.Q6J("ngClass",a.VKq(182,g,e.indeterminate)),a.xp6(2),a.Q6J("ngModel",e.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(6,98,"OrderNo"),a.oJD),a.xp6(3),a.Q6J("value",t.additionalInfo.Name||t.additionalInfo.Description||""),a.xp6(2),a.Q6J("innerHtml",a.lcZ(11,100,"LicensePlate"),a.oJD),a.xp6(3),a.Q6J("value",t.vehicleInfo.RegistrationData.LicenseNumber||""),a.xp6(1),a.Q6J("ngClass",a.VKq(184,g,n.indeterminate)),a.xp6(2),a.Q6J("ngModel",n.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(19,102,"DebitorNo"),a.oJD),a.xp6(5),a.Q6J("innerHtml",a.lcZ(24,104,"AccidentRefNo"),a.oJD),a.xp6(4),a.Q6J("ngClass",a.VKq(186,g,i.indeterminate)),a.xp6(2),a.Q6J("ngModel",i.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(32,106,"ClientName"),a.oJD),a.xp6(4),a.Q6J("ngClass",a.VKq(188,g,o.indeterminate)),a.xp6(2),a.Q6J("ngModel",o.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(40,108,"ClientAddress"),a.oJD),a.xp6(4),a.Q6J("ngClass",a.VKq(190,g,r.indeterminate)),a.xp6(2),a.Q6J("ngModel",r.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(48,110,"Email"),a.oJD),a.xp6(5),a.Q6J("innerHtml",a.lcZ(53,112,"Telephone"),a.oJD),a.xp6(3),a.Q6J("value",t.expertInfo.PhoneBusiness||""),a.xp6(1),a.Q6J("ngClass",a.VKq(192,g,s.indeterminate)),a.xp6(2),a.Q6J("ngModel",s.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(61,114,"ClaimsAdjuster"),a.oJD),a.xp6(5),a.Q6J("innerHtml",a.lcZ(66,116,"DamageDate"),a.oJD),a.xp6(3),a.Q6J("value",a.lcZ(69,118,t.additionalInfo.DamageDate)),a.xp6(2),a.Q6J("ngClass",a.VKq(194,g,l.indeterminate)),a.xp6(2),a.Q6J("ngModel",l.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(75,120,"Inspector"),a.oJD),a.xp6(3),a.Q6J("value",t.expertInfo.NameLong||t.expertInfo.CompanyName||""),a.xp6(2),a.Q6J("innerHtml",a.lcZ(80,122,"CreateDate"),a.oJD),a.xp6(3),a.Q6J("value",a.lcZ(83,124,t.additionalInfo.CreateDate)),a.xp6(2),a.Q6J("ngClass",a.VKq(196,g,c.indeterminate)),a.xp6(2),a.Q6J("ngModel",c.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(89,126,"InspectionPlace"),a.oJD),a.xp6(5),a.Q6J("innerHtml",a.lcZ(94,128,"InspectionDate"),a.oJD),a.xp6(7),a.Q6J("innerHtml",a.lcZ(101,130,"VehicleOwner"),a.oJD),a.xp6(2),a.Q6J("ngClass",a.VKq(198,g,Z.indeterminate)),a.xp6(2),a.Q6J("ngModel",Z.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(107,132,"Name"),a.oJD),a.xp6(3),a.Q6J("value",t.ownerInfo.CompanyName||t.ownerInfo.LastName+" "+t.ownerInfo.FirstName),a.xp6(1),a.Q6J("ngClass",a.VKq(200,g,d.indeterminate)),a.xp6(2),a.Q6J("ngModel",d.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(115,134,"Address"),a.oJD),a.xp6(3),a.Q6J("value",t.ownerInfo.Street+", "+t.ownerInfo.StreetCity),a.xp6(1),a.Q6J("ngClass",a.VKq(202,g,p.indeterminate)),a.xp6(2),a.Q6J("ngModel",p.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(123,136,"Email"),a.oJD),a.xp6(3),a.Q6J("value",t.ownerInfo.EMail||""),a.xp6(2),a.Q6J("innerHtml",a.lcZ(128,138,"Telephone"),a.oJD),a.xp6(3),a.Q6J("value",t.ownerInfo.PhoneMobile||t.ownerInfo.PhonePersonal||""),a.xp6(4),a.Q6J("innerHtml",a.lcZ(135,140,"Vehicle"),a.oJD),a.xp6(2),a.Q6J("ngClass",a.VKq(204,g,h.indeterminate)),a.xp6(2),a.Q6J("ngModel",h.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(141,142,"VIN"),a.oJD),a.xp6(3),a.Q6J("value",t.vehicleInfo.VehicleIdentNumber||""),a.xp6(2),a.Q6J("innerHtml",a.lcZ(146,144,"FirstRegistration"),a.oJD),a.xp6(3),a.Q6J("value",t.vehicleInfo.InitialRegistration||""),a.xp6(1),a.Q6J("ngClass",a.VKq(206,g,m.indeterminate)),a.xp6(2),a.Q6J("ngModel",m.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(154,146,"Type"),a.oJD),a.xp6(3),a.Q6J("value",a.lcZ(157,148,a.lcZ(158,150,t.vehicleInfo.VehicleType))),a.xp6(4),a.Q6J("innerHtml",a.lcZ(161,152,"Make"),a.oJD),a.xp6(3),a.Q6J("value",t.vehicleInfo.ManufacturerName||""),a.xp6(1),a.Q6J("ngClass",a.VKq(208,g,u.indeterminate)),a.xp6(2),a.Q6J("ngModel",u.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(169,154,"ModelSeries"),a.oJD),a.xp6(3),a.Q6J("value",t.vehicleInfo.BaseModelName+", "+t.vehicleInfo.SubModelName),a.xp6(1),a.Q6J("ngClass",a.VKq(210,g,A.indeterminate)),a.xp6(2),a.Q6J("ngModel",A.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(177,156,"HorsePower"),a.oJD),a.xp6(3),a.Q6J("value",t.vehicleInfo.Engine.EnginePowerKw||""),a.xp6(2),a.Q6J("innerHtml",a.lcZ(182,158,"CubicCapacity"),a.oJD),a.xp6(3),a.Q6J("value",t.vehicleInfo.Engine.Capacity||""),a.xp6(2),a.Q6J("innerHtml",a.lcZ(187,160,"Fuel"),a.oJD),a.xp6(3),a.Q6J("value",t.vehicleInfo.Engine.FuelMethod||""),a.xp6(1),a.Q6J("ngClass",a.VKq(212,g,x.indeterminate)),a.xp6(2),a.Q6J("ngModel",x.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(195,162,"MileageReading"),a.oJD),a.xp6(3),a.Q6J("value",t.vehicleInfo.MileageOdometer||""),a.xp6(2),a.Q6J("innerHtml",a.lcZ(200,164,"Color"),a.oJD),a.xp6(3),a.Q6J("value",t.vehicleInfo.Color||""),a.xp6(1),a.Q6J("ngClass",a.VKq(214,g,f.indeterminate)),a.xp6(2),a.Q6J("ngModel",f.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(208,166,"MOTDate"),a.oJD),a.xp6(5),a.Q6J("innerHtml",a.lcZ(213,168,"EmissionCheck"),a.oJD),a.xp6(4),a.Q6J("ngClass",a.VKq(216,g,J.indeterminate)),a.xp6(2),a.Q6J("ngModel",J.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(221,170,"TyreDescription"),a.oJD),a.xp6(5),a.Q6J("innerHtml",a.lcZ(226,172,"TyreBrand"),a.oJD),a.xp6(4),a.Q6J("ngClass",a.VKq(218,g,M.indeterminate)),a.xp6(2),a.Q6J("ngModel",M.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(234,174,"LFRF"),a.oJD),a.xp6(5),a.Q6J("innerHtml",a.lcZ(239,176,"LRrRRr"),a.oJD),a.xp6(5),a.Q6J("innerHtml",a.lcZ(244,178,"TyreType"),a.oJD),a.xp6(5),a.Q6J("ngClass",a.VKq(220,g,C.indeterminate)),a.xp6(2),a.Q6J("ngModel",C.indeterminate),a.xp6(2),a.Q6J("innerHtml",a.lcZ(253,180,"AdditionalComments"),a.oJD)}},directives:[o.mk,r.oG,s.JJ,s.On,l.U],pipes:[c.X$,o.uU,i.p],styles:["table[_ngcontent-%COMP%]{width:100%;margin-bottom:10px;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:1px solid black}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:left}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid black}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;font-size:13px;width:20%;padding-left:3px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid black}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th.th-small[_ngcontent-%COMP%]{width:10%}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   input.active[_ngcontent-%COMP%]{outline:0}@media screen{table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:-webkit-fill-available;height:100%;padding:3px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   input.active[_ngcontent-%COMP%]{margin:-1px;box-shadow:inset 0 0 5px #2f84ec;border:1px solid #2f84ec}}@media print{table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:3px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:90%}}.mat-checkbox[_ngcontent-%COMP%]{margin-right:5px}@media print{mat-checkbox[_ngcontent-%COMP%]{display:none}}"]}),e})()},4698:function(e,t,n){n.d(t,{i:function(){return s}});var i=n(7716),a=n(8583),o=n(7539);const r=function(e){return{hide:e}};let s=(()=>{class e{constructor(){this.cssClass=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["imp-damage-card"]],inputs:{cssClass:"cssClass"},decls:34,vars:43,consts:[[1,"damage-card-container",3,"ngClass"],["src","assets/img/car.png","alt","Car Img","width","300","height","150"],[1,"flex","column","sp-between","damage-card"],[1,"flex","row","sp-between","damage-indicator-row"],[3,"ngClass"],["chk1",""],["chk2",""],["chk3",""],["chk4",""],["chk5",""],["chk6",""],["chk7",""],["chk8",""],["chk9",""],["chk10",""],["chk11",""],["chk12",""],["chk13",""],["chk14",""]],template:function(e,t){if(1&e&&(i.TgZ(0,"div",0),i._UZ(1,"img",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i._UZ(4,"mat-checkbox",4,5),i._UZ(6,"mat-checkbox",4,6),i._UZ(8,"mat-checkbox",4,7),i._UZ(10,"mat-checkbox",4,8),i._UZ(12,"mat-checkbox",4,9),i._UZ(14,"mat-checkbox",4,10),i.qZA(),i.TgZ(16,"div",3),i._UZ(17,"mat-checkbox",4,11),i._UZ(19,"mat-checkbox",4,12),i.qZA(),i.TgZ(21,"div",3),i._UZ(22,"mat-checkbox",4,13),i._UZ(24,"mat-checkbox",4,14),i._UZ(26,"mat-checkbox",4,15),i._UZ(28,"mat-checkbox",4,16),i._UZ(30,"mat-checkbox",4,17),i._UZ(32,"mat-checkbox",4,18),i.qZA(),i.qZA(),i.qZA()),2&e){const e=i.MAs(5),n=i.MAs(7),a=i.MAs(9),o=i.MAs(11),s=i.MAs(13),l=i.MAs(15),c=i.MAs(18),g=i.MAs(20),Z=i.MAs(23),d=i.MAs(25),p=i.MAs(27),h=i.MAs(29),m=i.MAs(31),u=i.MAs(33);i.Q6J("ngClass",t.cssClass),i.xp6(4),i.Q6J("ngClass",i.VKq(15,r,!e.checked)),i.xp6(2),i.Q6J("ngClass",i.VKq(17,r,!n.checked)),i.xp6(2),i.Q6J("ngClass",i.VKq(19,r,!a.checked)),i.xp6(2),i.Q6J("ngClass",i.VKq(21,r,!o.checked)),i.xp6(2),i.Q6J("ngClass",i.VKq(23,r,!s.checked)),i.xp6(2),i.Q6J("ngClass",i.VKq(25,r,!l.checked)),i.xp6(3),i.Q6J("ngClass",i.VKq(27,r,!c.checked)),i.xp6(2),i.Q6J("ngClass",i.VKq(29,r,!g.checked)),i.xp6(3),i.Q6J("ngClass",i.VKq(31,r,!Z.checked)),i.xp6(2),i.Q6J("ngClass",i.VKq(33,r,!d.checked)),i.xp6(2),i.Q6J("ngClass",i.VKq(35,r,!p.checked)),i.xp6(2),i.Q6J("ngClass",i.VKq(37,r,!h.checked)),i.xp6(2),i.Q6J("ngClass",i.VKq(39,r,!m.checked)),i.xp6(2),i.Q6J("ngClass",i.VKq(41,r,!u.checked))}},directives:[a.mk,o.oG],styles:[".damage-card-container[_ngcontent-%COMP%]{margin:auto;width:300px;height:150px}.damage-card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute}.damage-card-container[_ngcontent-%COMP%]   .damage-card[_ngcontent-%COMP%]{height:100%}.damage-card-container[_ngcontent-%COMP%]   .damage-card[_ngcontent-%COMP%]   .damage-indicator-row[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin:10px}@media print{.hide[_ngcontent-%COMP%]{visibility:hidden}}"]}),e})()},1169:function(e,t,n){n.d(t,{U:function(){return o}});var i=n(7716),a=n(9075);let o=(()=>{class e{constructor(e){this.sanitizer=e,this.parseImages=e=>{let t=[];for(let n=0;n<e.target.files.length;n++){if(!e.target.files[n].type.includes("image")){t=[];break}t.push(this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(e.target.files[n])))}return t}}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(a.H7))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})()},7301:function(e,t,n){n.d(t,{U:function(){return r}});var i=n(7716),a=n(3679);const o=["textarea"];let r=(()=>{class e{constructor(){this.textarea=null,this.placeholder="",this.valueChanged=new i.vpe,this.adjust=()=>{this.textareaEl.style.height="1px",this.textareaEl.style.height=this.textareaEl.scrollHeight+"px",this.valueChanged.emit(this.value)}}ngAfterViewInit(){var e;this.textareaEl=null===(e=this.textarea)||void 0===e?void 0:e.nativeElement}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["imp-text-area"]],viewQuery:function(e,t){if(1&e&&i.Gf(o,7),2&e){let e;i.iGM(e=i.CRH())&&(t.textarea=e.first)}},inputs:{value:"value",placeholder:"placeholder"},outputs:{valueChanged:"valueChanged"},decls:2,vars:2,consts:[[2,"overflow","hidden",3,"ngModel","placeholder","keyup","ngModelChange"],["textarea",""]],template:function(e,t){1&e&&(i.TgZ(0,"textarea",0,1),i.NdJ("keyup",function(){return t.adjust()})("ngModelChange",function(e){return t.value=e}),i.qZA()),2&e&&i.Q6J("ngModel",t.value)("placeholder",t.placeholder||"")},directives:[a.Fj,a.JJ,a.On],styles:["textarea[_ngcontent-%COMP%]{width:calc(100% - 7px);max-width:21cm;resize:none;border:1px solid transparent}textarea[_ngcontent-%COMP%]:focus, textarea.active[_ngcontent-%COMP%]{box-shadow:inset 0 0 5px #2f84ec;border:1px solid #2f84ec}"]}),e})()},594:function(e,t,n){n.d(t,{b:function(){return o}});var i=n(7716),a=n(9790);let o=(()=>{class e{constructor(){this.imgPath="",this.dims=[0,0],this.title=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["imp-report-title"]],inputs:{imgPath:"imgPath",dims:"dims",title:"title"},decls:5,vars:6,consts:[[1,"flex","column","report-title-container"],["alt","Imperial Logo",3,"src","width","height"],[1,"report-title",3,"innerHtml"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i._UZ(1,"img",1),i._UZ(2,"br"),i._UZ(3,"div",2),i.ALo(4,"translate"),i.qZA()),2&e&&(i.xp6(1),i.Q6J("src",t.imgPath,i.LSH)("width",t.dims[0]||45)("height",t.dims[1]||45),i.xp6(2),i.Q6J("innerHtml",i.lcZ(4,4,t.title),i.oJD))},pipes:[a.X$],styles:[".report-title-container[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:5px}.report-title-container[_ngcontent-%COMP%]   .report-title[_ngcontent-%COMP%]{margin:auto;font-size:18px;font-weight:700}"]}),e})()}}]);