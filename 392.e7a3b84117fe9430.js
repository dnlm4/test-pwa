"use strict";(self.webpackChunknewport_erp=self.webpackChunknewport_erp||[]).push([[392],{9392:(ce,C,s)=>{s.r(C),s.d(C,{VentaBajaListaModule:()=>ie});var f=s(5412),u=s(6895),l=s(7155),h=s(7392),m=s(4006),j=s(529),t=s(4650),v=s(9479);function A(e,n){1&e&&(t.TgZ(0,"th",12),t._uU(1,"#"),t.qZA())}function I(e,n){if(1&e&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.id)}}function B(e,n){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Informe"),t.qZA())}function w(e,n){if(1&e&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.informe_baja_elemento.informe_baja.sitio.empresa.nombre_corto+"-"+(null==a.informe_baja_elemento.informe_baja.departamento||null==a.informe_baja_elemento.informe_baja.departamento.area?null:a.informe_baja_elemento.informe_baja.departamento.area.nombre_corto)+"-"+(null==a.informe_baja_elemento.informe_baja.sitio?null:a.informe_baja_elemento.informe_baja.sitio.nombre_corto)+"-"+a.informe_baja_elemento.informe_baja.fecha_creacion+"-"+a.id||"-")}}function q(e,n){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Codigo Activo"),t.qZA())}function k(e,n){if(1&e&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu((null==a.informe_baja_elemento?null:a.informe_baja_elemento.codigo_activo)||"S/C")}}function N(e,n){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Equipo"),t.qZA())}function L(e,n){if(1&e&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu((null==a.informe_baja_elemento?null:a.informe_baja_elemento.equipo)||"-")}}function P(e,n){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Empresa"),t.qZA())}function O(e,n){if(1&e&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu((null==a.informe_baja_elemento||null==a.informe_baja_elemento.informe_baja||null==a.informe_baja_elemento.informe_baja.sitio||null==a.informe_baja_elemento.informe_baja.sitio.empresa?null:a.informe_baja_elemento.informe_baja.sitio.empresa.nombre)||"-")}}function M(e,n){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Sala"),t.qZA())}function F(e,n){if(1&e&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu((null==a.informe_baja_elemento||null==a.informe_baja_elemento.informe_baja||null==a.informe_baja_elemento.informe_baja.sitio?null:a.informe_baja_elemento.informe_baja.sitio.nombre)||"-")}}function D(e,n){1&e&&t._UZ(0,"tr",14)}function Y(e,n){1&e&&t._UZ(0,"tr",15)}let y=(()=>{class e{constructor(a){this.ventaGetService=a,this.tablaCabecera=["id","informe","codigoActivo","equipo","empresa","sala"]}ngOnInit(){this.cargarTabla()}cargarTabla(){this.ventaGetService.obtenerListaInformeVentaElementoPorEstadoPendiente().then(a=>{this.dataSource=new l.by(a.data.lista_informe_venta_elemento)})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(v.m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ne-adm-gact-venta-baja-pendiente"]],decls:22,vars:3,consts:[[1,"contenedor-lista"],["mat-table","","matSort","","matSortActive","created","matSortDisableClear","","matSortDirection","desc",1,"tabla",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","class","tabla-titulo",4,"matHeaderCellDef"],["mat-cell","","class","tabla-valor",4,"matCellDef"],["matColumnDef","informe"],["matColumnDef","codigoActivo"],["matColumnDef","equipo"],["matColumnDef","empresa"],["matColumnDef","sala"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",1,"tabla-titulo"],["mat-cell","",1,"tabla-valor"],["mat-header-row",""],["mat-row",""]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"table",1),t.ynx(2,2),t.YNc(3,A,2,0,"th",3),t.YNc(4,I,2,1,"td",4),t.BQk(),t.ynx(5,5),t.YNc(6,B,2,0,"th",3),t.YNc(7,w,2,1,"td",4),t.BQk(),t.ynx(8,6),t.YNc(9,q,2,0,"th",3),t.YNc(10,k,2,1,"td",4),t.BQk(),t.ynx(11,7),t.YNc(12,N,2,0,"th",3),t.YNc(13,L,2,1,"td",4),t.BQk(),t.ynx(14,8),t.YNc(15,P,2,0,"th",3),t.YNc(16,O,2,1,"td",4),t.BQk(),t.ynx(17,9),t.YNc(18,M,2,0,"th",3),t.YNc(19,F,2,1,"td",4),t.BQk(),t.YNc(20,D,1,0,"tr",10),t.YNc(21,Y,1,0,"tr",11),t.qZA()()),2&a&&(t.xp6(1),t.Q6J("dataSource",o.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",o.tablaCabecera),t.xp6(1),t.Q6J("matRowDefColumns",o.tablaCabecera))},dependencies:[l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk],styles:[".contenedor-lista[_ngcontent-%COMP%]{width:50vw;height:40vh;border-radius:6px;background-color:#313135;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none;box-shadow:#0003 0 2px 8px}.contenedor-lista[_ngcontent-%COMP%]   .tabla[_ngcontent-%COMP%]{width:95%!important;margin-top:2%}.contenedor-lista[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}"]}),e})();var U=s(5766),p=s(1588),i=s(7800),_=s(4891),E=s(5404),Z=s(3125);function J(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"div",32)(1,"input",33),t.NdJ("change",function(){const c=t.CHM(a).$implicit,d=t.oxw();return t.KtG(d.agregarAListaempresa(c.id))}),t.qZA(),t.TgZ(2,"label",34),t._uU(3),t.qZA()()}if(2&e){const a=n.$implicit;t.xp6(1),t.hYB("id","",a.id,"",a.nombre_corto,""),t.xp6(1),t.hYB("for","",a.id,"",a.nombre_corto,""),t.xp6(1),t.Oqu(a.nombre)}}let Q=(()=>{class e{ngOnInit(){this.construirFormulario(),this.cargarEmpresas()}constructor(a,o,r,c,d){this.modal=a,this.formBuilder=o,this.dialogRef=r,this.empresaGetService=c,this.data=d,this.fechaInicial="",this.fechaFinal="",this.pipe=new u.uU("en-US"),this.estadoPendiente=!1,this.estadoValidado=!1,this.estadoAprobado=!1,this.estadoRechazado=!1,this.listaEmpresa=[],this.listaIdEmpresaABuscar=new Array}construirFormulario(){this.formulario=this.formBuilder.group({fechaInicio:new m.NI({value:"",disabled:!1},m.kI.required),fechaFinal:new m.NI({value:"",disabled:!1},m.kI.required)})}filtrar(){this.modal.open(_._,{data:{titulo:i.in,accion:i.x9+" que desea aplicar los filtros?",opciones:2},disableClose:!0}).afterClosed().subscribe(a=>{a&&(this.fechaInicial=this.formulario.get("fechaInicio")?.value,this.fechaFinal=this.formulario.get("fechaFinal")?.value,this.fechaInicial=this.pipe.transform(this.fechaInicial,"yyyy-MM-dd")||"",this.fechaFinal=this.pipe.transform(this.fechaFinal,"yyyy-MM-dd")||"",this.fechaInicial>this.fechaFinal?this.modal.open(_._,{data:{titulo:i.MF,accion:"La fecha inicial no puede ser mayor que la fecha final",opciones:1},disableClose:!0}):(this.data.fechaInicial=this.fechaInicial,this.data.fechaFinal=this.fechaFinal,this.data.estados=[],!0===this.estadoAprobado&&this.data.estados.push(i.Gq),!0===this.estadoValidado&&this.data.estados.push(i.Rp),!0===this.estadoPendiente&&this.data.estados.push(i.Io),!0===this.estadoRechazado&&this.data.estados.push(i.QH),this.data.empresas=this.listaIdEmpresaABuscar,this.dialogRef.close(this.data)))})}cargarEmpresas(){this.empresaGetService.obtenerEmpresas().then(a=>{this.listaEmpresa=a.data.lista_empresas||[]})}agregarAListaempresa(a){let o=this.listaIdEmpresaABuscar.indexOf(a.toString());-1===o?this.listaIdEmpresaABuscar.push(a.toString()):this.listaIdEmpresaABuscar.splice(o,1)}cerrar(){this.modal.open(_._,{data:{titulo:i.in,accion:i.x9+" que desea salir sin aplicar los filtros?",opciones:2},disableClose:!0}).afterClosed().subscribe(a=>{a&&this.dialogRef.close(this.data)})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(f.uw),t.Y36(m.qu),t.Y36(f.so),t.Y36(E.K),t.Y36(f.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-informe-venta-filtrar"]],decls:57,vars:4,consts:[[1,"contenedor-modal-form"],[1,"contenedor-modal-form-cabecera"],[1,"contenedor-modal-form-cuerpo"],[1,"centrar-contenido"],[3,"formGroup"],[1,"form-row"],[1,"col-md-4.5","paddinng-left-0"],[1,"paddinng-derecho-5"],["matInput","","formControlName","fechaInicio",1,"pickerFecha",3,"ngModel","matDatepicker","click"],[1,"col-md-0.5","paddinng-left-0"],["picker",""],["aria-hidden","false","fontIcon","calendar_month",1,"icon","icono-azul",3,"click"],[1,"col-md-2","paddinng-left-0"],["formControlName","fechaFinal",1,"pickerFecha",3,"matDatepicker","click"],[1,"col-md-0.5"],["picker2",""],["aria-hidden","false","fontIcon","calendar_month",1,"icon","icono-naranja",3,"click"],[1,"col-md-3"],["type","checkbox","id","estadoAprobado",3,"change"],["for","estadoAprobado",1,"paddinng-izquierdo-5"],["type","checkbox","id","estadoValidado",3,"change"],["for","estadoValidado",1,"paddinng-izquierdo-5"],["type","checkbox","id","estadoPendiente",3,"change"],["for","estadoPendiente",1,"paddinng-izquierdo-5"],["type","checkbox","id","estadoRechazado",3,"change"],["for","estadoRechazado",1,"paddinng-izquierdo-5"],["class","col-md-6 paddinng-left-0",4,"ngFor","ngForOf"],[1,"contenedor-modal-form-pie"],[1,"contenedor-modal-form-pie-izquierda"],["cdkFocusInitial","",1,"btn-principal",3,"click"],[1,"contenedor-modal-form-pie-derecha"],[1,"btn-principal",3,"click"],[1,"col-md-6","paddinng-left-0"],["type","checkbox","name","checkbox","value","dddd",3,"id","change"],[1,"paddinng-izquierdo-5",3,"for"]],template:function(a,o){if(1&a){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Filtro de lista de Informe de Ventas:"),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"form",4)(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10,"Fecha Inicio"),t.qZA(),t.TgZ(11,"input",8),t.NdJ("click",function(){t.CHM(r);const d=t.MAs(14);return t.KtG(d.open())}),t.qZA()(),t.TgZ(12,"div",9),t._UZ(13,"mat-datepicker",null,10),t.TgZ(15,"mat-icon",11),t.NdJ("click",function(){t.CHM(r);const d=t.MAs(14);return t.KtG(d.open())}),t.qZA()(),t._UZ(16,"div",12),t.TgZ(17,"div",6)(18,"label",7),t._uU(19,"Fecha final"),t.qZA(),t.TgZ(20,"input",13),t.NdJ("click",function(){t.CHM(r);const d=t.MAs(23);return t.KtG(d.open())}),t.qZA()(),t.TgZ(21,"div",14),t._UZ(22,"mat-datepicker",null,15),t.TgZ(24,"mat-icon",16),t.NdJ("click",function(){t.CHM(r);const d=t.MAs(23);return t.KtG(d.open())}),t.qZA()()(),t.TgZ(25,"div",5)(26,"h3"),t._uU(27,"Estados:"),t.qZA()(),t.TgZ(28,"div",5)(29,"div",17)(30,"input",18),t.NdJ("change",function(){return o.estadoAprobado=!o.estadoAprobado}),t.qZA(),t.TgZ(31,"label",19),t._uU(32,"Aprobado"),t.qZA()(),t.TgZ(33,"div",17)(34,"input",20),t.NdJ("change",function(){return o.estadoValidado=!o.estadoValidado}),t.qZA(),t.TgZ(35,"label",21),t._uU(36," Validado"),t.qZA()(),t.TgZ(37,"div",17)(38,"input",22),t.NdJ("change",function(){return o.estadoPendiente=!o.estadoPendiente}),t.qZA(),t.TgZ(39,"label",23),t._uU(40,"Pendiente"),t.qZA()(),t.TgZ(41,"div",17)(42,"input",24),t.NdJ("change",function(){return o.estadoRechazado=!o.estadoRechazado}),t.qZA(),t.TgZ(43,"label",25),t._uU(44,"Rechazado"),t.qZA()()(),t.TgZ(45,"div",5)(46,"h3"),t._uU(47,"Empresas:"),t.qZA()(),t.TgZ(48,"div",5),t.YNc(49,J,4,5,"div",26),t.qZA()()()(),t.TgZ(50,"div",27)(51,"div",28)(52,"button",29),t.NdJ("click",function(){return o.filtrar()}),t._uU(53," Filtrar "),t.qZA()(),t.TgZ(54,"div",30)(55,"button",31),t.NdJ("click",function(){return o.cerrar()}),t._uU(56," Cancelar "),t.qZA()()()()}if(2&a){const r=t.MAs(14),c=t.MAs(23);t.xp6(6),t.Q6J("formGroup",o.formulario),t.xp6(5),t.Q6J("matDatepicker",r),t.xp6(9),t.Q6J("matDatepicker",c),t.xp6(29),t.Q6J("ngForOf",o.listaEmpresa)}},dependencies:[u.sg,h.Hw,m._Y,m.Fj,m.JJ,m.JL,m.sg,m.u,Z.Mq,Z.hl]}),e})();var g=s(8996),x=s(5861),T=s(4592),S=s(6757);let G=(()=>{class e{constructor(a){this.apiService=a}obtenerListaInformeVenta(){var a=this;return(0,x.Z)(function*(){let o={},r=`${T.xQ.obtenerInformeVenta}`;return yield a.apiService.get(r).toPromise().then(c=>{o=c}),o})()}obtenerListaInformeVentaPorFechas(a,o){var r=this;return(0,x.Z)(function*(){let c={},d=`${T.xQ.obtenerInformeVentaPorFechas}${a}/${o}`;return yield r.apiService.get(d).toPromise().then(b=>{c=b}),c})()}}return e.\u0275fac=function(a){return new(a||e)(t.LFG(S.sM))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var R=s(6980),z=s(2727);function $(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(a);const r=t.oxw();return t.KtG(r.reActivar())}),t._uU(1," Reactivar Informe Validado "),t.qZA()}}function H(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"ReValidar"),t.qZA())}function K(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-icon",42),t.NdJ("click",function(){t.CHM(a);const r=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.revalidacionDeInformeVenta(r.id))}),t.qZA()}}function X(e,n){if(1&e&&(t.TgZ(0,"td",40),t.YNc(1,K,1,0,"mat-icon",41),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Q6J("ngIf","VALIDADO"===a.estado)}}function W(e,n){1&e&&(t.ynx(0,38),t.YNc(1,H,2,0,"th",11),t.YNc(2,X,2,1,"td",12),t.BQk())}function tt(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"#"),t.qZA())}function et(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const a=n.index;t.xp6(1),t.Oqu(a+1)}}function at(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Fecha Venta"),t.qZA())}function nt(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.fecha_creacion||"-")}}function ot(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Empresa"),t.qZA())}function it(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.nombre_empresa||"-")}}function ct(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Informe"),t.qZA())}function rt(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.cantidad_informes||"-")}}function lt(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Equipo"),t.qZA())}function st(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.cantidad_venta_elemento||"-")}}function dt(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Estado"),t.qZA())}function _t(e,n){1&e&&t._UZ(0,"mat-icon",35)}function mt(e,n){1&e&&t._UZ(0,"mat-icon",36)}function pt(e,n){1&e&&t._UZ(0,"mat-icon",33)}function ft(e,n){1&e&&t._UZ(0,"mat-icon",32)}function ut(e,n){1&e&&t._UZ(0,"mat-icon",34)}function ht(e,n){1&e&&t._UZ(0,"mat-icon",37)}function gt(e,n){if(1&e&&(t.TgZ(0,"td",40),t.YNc(1,_t,1,0,"mat-icon",43),t.YNc(2,mt,1,0,"mat-icon",44),t.YNc(3,pt,1,0,"mat-icon",45),t.YNc(4,ft,1,0,"mat-icon",46),t.YNc(5,ut,1,0,"mat-icon",47),t.YNc(6,ht,1,0,"mat-icon",48),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Q6J("ngIf","VALIDADO"===a.estado),t.xp6(1),t.Q6J("ngIf","APROBADO"===a.estado),t.xp6(1),t.Q6J("ngIf","PENDIENTE"===a.estado),t.xp6(1),t.Q6J("ngIf","RECHAZADO"===a.estado),t.xp6(1),t.Q6J("ngIf","REVISADO"===a.estado),t.xp6(1),t.Q6J("ngIf","FINALIZADO"===a.estado)}}function bt(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"GRA"),t.qZA())}function Ct(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.gra||"-")}}function vt(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"GRP"),t.qZA())}function Zt(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.grp||"-")}}function xt(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Factura"),t.qZA())}function Tt(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.importe_total_venta_elemento||"0.00")}}function Vt(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Fec. Descap."),t.qZA())}function jt(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.fecha_baja_sap||"-")}}function At(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Acciones"),t.qZA())}function It(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-icon",52),t.NdJ("click",function(){t.CHM(a);const r=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.dialogVentaBajaEditar(r))}),t.qZA()}}function Bt(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-icon",53),t.NdJ("click",function(){t.CHM(a);const r=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.dialogVentaBajaEditarVer(r))}),t.qZA()}}function wt(e,n){if(1&e&&(t.TgZ(0,"td",40),t.YNc(1,It,1,0,"mat-icon",50),t.YNc(2,Bt,1,0,"mat-icon",51),t.qZA()),2&e){const a=n.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.puedeEditar&&"VALIDADO"===a.estado||"REVISADO"===a.estado),t.xp6(1),t.Q6J("ngIf","VALIDADO"!=a.estado&&"REVISADO"!=a.estado)}}function qt(e,n){1&e&&(t.ynx(0,49),t.YNc(1,At,2,0,"th",11),t.YNc(2,wt,3,2,"td",12),t.BQk())}function kt(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Inventariar"),t.qZA())}function Nt(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-icon",56),t.NdJ("click",function(){t.CHM(a);const r=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.dialogVentaBajaAlmacen(r))}),t.qZA()}}function Lt(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-icon",53),t.NdJ("click",function(){t.CHM(a);const r=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.dialogVentaBajaAlmacenVer(r))}),t.qZA()}}function Pt(e,n){if(1&e&&(t.TgZ(0,"td",40),t.YNc(1,Nt,1,0,"mat-icon",55),t.YNc(2,Lt,1,0,"mat-icon",51),t.qZA()),2&e){const a=n.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.puedeInventariar&&"PENDIENTE"===a.estado),t.xp6(1),t.Q6J("ngIf","PENDIENTE"!=a.estado)}}function Ot(e,n){1&e&&(t.ynx(0,54),t.YNc(1,kt,2,0,"th",11),t.YNc(2,Pt,3,2,"td",12),t.BQk())}function Mt(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Supervisar"),t.qZA())}function Ft(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-icon",59),t.NdJ("click",function(){t.CHM(a);const r=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.dialogVentaBajaSupervisar(r))}),t.qZA()}}function Dt(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-icon",53),t.NdJ("click",function(){t.CHM(a);const r=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.dialogVentaBajaSupervisarVer(r))}),t.qZA()}}function Yt(e,n){if(1&e&&(t.TgZ(0,"td",40),t.YNc(1,Ft,1,0,"mat-icon",58),t.YNc(2,Dt,1,0,"mat-icon",51),t.qZA()),2&e){const a=n.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.puedeSupervisar&&"FINALIZADO"!=a.estado&&"APROBADO"===a.estado),t.xp6(1),t.Q6J("ngIf","FINALIZADO"===a.estado)}}function yt(e,n){1&e&&(t.ynx(0,57),t.YNc(1,Mt,2,0,"th",11),t.YNc(2,Yt,3,2,"td",12),t.BQk())}function Ut(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Aprobar"),t.qZA())}function Et(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-icon",62),t.NdJ("click",function(){t.CHM(a);const r=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.dialogVentaBajaAprobar(r))}),t.qZA()}}function Jt(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-icon",53),t.NdJ("click",function(){t.CHM(a);const r=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.dialogVentaBajaAprobarVer(r))}),t.qZA()}}function Qt(e,n){if(1&e&&(t.TgZ(0,"td",40),t.YNc(1,Et,1,0,"mat-icon",61),t.YNc(2,Jt,1,0,"mat-icon",51),t.qZA()),2&e){const a=n.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.puedeAprobar&&"VALIDADO"===a.estado),t.xp6(1),t.Q6J("ngIf","VALIDADO"!=a.estado)}}function St(e,n){1&e&&(t.ynx(0,60),t.YNc(1,Ut,2,0,"th",11),t.YNc(2,Qt,3,2,"td",12),t.BQk())}function Gt(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Recepcionado"),t.qZA())}function Rt(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-icon",53),t.NdJ("click",function(){t.CHM(a);const r=t.oxw().$implicit,c=t.oxw();return t.KtG(c.irInformeFinalizado(r))}),t.qZA()}}function zt(e,n){if(1&e&&(t.TgZ(0,"td",40),t.YNc(1,Rt,1,0,"mat-icon",51),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Q6J("ngIf","FINALIZADO"===a.estado)}}function $t(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Activar"),t.qZA())}function Ht(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"mat-icon",42),t.NdJ("click",function(){t.CHM(a);const r=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.reActivarInformeVenta(r.id))}),t.qZA()}}function Kt(e,n){if(1&e&&(t.TgZ(0,"td",40),t.YNc(1,Ht,1,0,"mat-icon",41),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Q6J("ngIf","VALIDADO"===a.estado||"REVISADO"===a.estado)}}function Xt(e,n){1&e&&(t.ynx(0,63),t.YNc(1,$t,2,0,"th",11),t.YNc(2,Kt,2,1,"td",12),t.BQk())}function Wt(e,n){1&e&&t._UZ(0,"tr",64)}function te(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"tr",65),t.NdJ("click",function(){const c=t.CHM(a).$implicit,d=t.oxw();return t.KtG(d.detalleInformeVentaElemento(c))}),t.qZA()}if(2&e){const a=n.$implicit,o=t.oxw();t.ekj("elemento-fila-para-collapse-expandido",o.clickedElement===a)}}let V=(()=>{class e{constructor(a,o,r,c,d,b){this.modal=a,this.router=o,this.ventaGetService=r,this.ventaElementoGetService=c,this.ventaElementoPostService=d,this.ventaPostService=b,this.puedeCrear=!(!(0,p.Gs)(i.w3,i.IF,i.sy)&&!(0,p.Gs)(i.w3,i.IF,i.ul)),this.puedeEditar=!(!(0,p.Gs)(i.w3,i.ch,i.sy)&&!(0,p.Gs)(i.w3,i.ch,i.ul)),this.puedeExportar=!(!(0,p.Gs)(i.w3,i.Nw)&&!(0,p.Gs)(i.w3,i.Nw,i.ul)),this.puedeVer=!!(0,p.Gs)(i.w3,i.Vf),this.puedeInventariar=!!(0,p.Gs)(i.w3,i.n5),this.puedeSupervisar=!!(0,p.Gs)(i.w3,i.U1),this.puedeAprobar=!!(0,p.Gs)(i.w3,i.yG),this.tablaCabecera=[],this.tablaCabeceraDetalle=["id","codigo","serie","equipo"],this.sesion=(0,p.l3)(),this.tieneGRAcopio=!1,this.tieneGRProveedor=!1,this.tieneFactura=!1,this.estados=[],this.empresas=[],this.rolAlmacenId=0,this.rol_usuario=0,this.revalidacion=!1}ngOnInit(){this.tablaCabecera.push("id","fechaVenta","empresa","informe","equipo","estado","gra","grp","factura","fechaDescapitalizacion"),this.puedeEditar&&this.tablaCabecera.push("acciones"),this.puedeInventariar&&this.tablaCabecera.push("inventario"),this.puedeSupervisar&&this.tablaCabecera.push("entrega"),this.puedeAprobar&&this.tablaCabecera.push("aprobar"),this.tablaCabecera.push("finalizado"),11===this.sesion.usuario.rol.id&&this.tablaCabecera.push("activar"),this.cargarTablaInformeVenta(),this.rolAlmacenId=i.DT,this.rol_usuario=this.sesion.usuario.rol.id}revalidacionDeInformeVenta(a){this.modal.open(_._,{data:{titulo:i.A9,accion:i.x9+"ReValidar el Informe seleccionado?",opciones:2},disableClose:!0}).afterClosed().subscribe(o=>{o&&this.ventaPostService.RevalidarInformeVenta({id:a,usuario_edicion:this.sesion.usuario.id}).then(r=>{"0"===r.codigo&&(this.modal.open(_._,{data:{titulo:i.A9,accion:i.H1,opciones:1},disableClose:!0}),console.info("response",o),o&&this.cargarTablaInformeVenta())})})}reActivar(){this.modal.open(_._,{data:{titulo:i.A9,accion:i.x9+"que desea entrar en modo ADMIN?",opciones:2},disableClose:!0}).afterClosed().subscribe(a=>{a&&(this.tablaCabecera=[],this.revalidacion=!0,this.tablaCabecera.push("revalidar"),this.tablaCabecera.push("id","fechaVenta","empresa","informe","equipo","estado","gra","grp","factura","fechaDescapitalizacion"),this.puedeEditar&&this.tablaCabecera.push("acciones"),this.puedeInventariar&&this.tablaCabecera.push("inventario"),this.puedeSupervisar&&this.tablaCabecera.push("entrega"),this.puedeAprobar&&this.tablaCabecera.push("aprobar"),this.tablaCabecera.push("finalizado"),this.cargarTablaInformeVenta(),console.info(this.tablaCabecera))})}cargarTablaInformeVenta(){this.consultaInformeVenta({fecha_inicial:"",fecha_final:"",estados:[],empresas:[]})}detalleInformeVentaElemento(a){this.ventaElementoGetService.obtenerListaInformeVentaElementoPorInformeVenta(a.id).then(o=>{this.dataSourceDetalle=new l.by(o.data.lista_informe_venta_elemento),this.clickedElement=this.clickedElement===a?null:a,this.verificarDocumentosInformeVenta(a.id)})}verificarDocumentosInformeVenta(a){this.ventaPostService.verificarDocumentosInformeVenta({informe_venta_id:a}).then(r=>{let c=r.data.lista_informe_venta[0];c.cantidad_elemento_acopiado===c.cantidad_registros_acopio&&0!=c.cantidad_registros_acopio&&(this.tieneGRAcopio=!0),0!=c.cantidad_registros_factura&&(this.tieneFactura=!0),0!=c.cantidad_registros_proveedor&&(this.tieneGRProveedor=!0)})}dialogVentaBajaPendiente(){this.modal.open(y)}dialogVentaBajaCrear(){this.modal.open(_._,{data:{titulo:i.A9,accion:i.x9+"crear?",opciones:2},disableClose:!0}).afterClosed().subscribe(a=>{a&&this.router.navigate(["main/venta-baja/crear"])})}dialogVentaBajaAdjuntar(a){this.modal.open(U.P,{data:{idInformeVenta:a}})}dialogVentaBajaEditar(a){a.estado!=i.Gq?this.router.navigate(["main/venta-baja/editar/",a.id]):this.modal.open(_._,{data:{titulo:i.MF,accion:"No puede editar Informes en estado Aprobado",opciones:1},disableClose:!0})}dialogVentaBajaEditarVer(a){this.router.navigate(["main/venta-baja/editar/",a.id])}dialogVentaBajaAlmacen(a){a.estado!=i.Gq?this.router.navigate(["main/venta-baja/usuario/adjuntar/",a.id,1]):this.modal.open(_._,{data:{titulo:i.MF,accion:"Error al intentar abrir Informe",opciones:1},disableClose:!0})}dialogVentaBajaAlmacenVer(a){this.router.navigate(["main/venta-baja/usuario/adjuntar/",a.id,1])}dialogVentaBajaSupervisar(a){a.estado===i.Gq?this.router.navigate(["main/venta-baja/usuario/adjuntar/supervision/",a.id,1]):this.modal.open(_._,{data:{titulo:i.MF,accion:"Error al intentar abrir Informe",opciones:1},disableClose:!0})}dialogVentaBajaSupervisarVer(a){this.router.navigate(["main/venta-baja/usuario/adjuntar/supervision/",a.id,1])}dialogVentaBajaAprobar(a){a.estado!=i.Gq?this.router.navigate(["main/venta-baja/usuario/aprobar/",a.id]):this.modal.open(_._,{data:{titulo:i.MF,accion:"No puede editar Informes en estado Aprobado",opciones:1},disableClose:!0})}dialogVentaBajaAprobarVer(a){this.router.navigate(["main/venta-baja/usuario/aprobar/",a.id])}irInformeFinalizado(a){this.router.navigate(["main/venta-baja/informe/finalizado",a.id])}exportarExcel(){this.ventaPostService.ObtenerExcelInformeVentaPorFiltros({fecha_inicial:this.fechaInicial||"",fecha_final:this.fechaFinal||"",estados:this.estados||[]}).then(o=>o.blob()).then(o=>{window.open(URL.createObjectURL(o),"_blank")}).catch(o=>{console.info(o)})}exportarPdf(){this.ventaPostService.obtenerPdfInformeVentaPorFiltros({fecha_inicial:this.fechaInicial||"",fecha_final:this.fechaFinal||"",estados:this.estados||[]}).then(o=>o.blob()).then(o=>{window.open(URL.createObjectURL(o),"_blank")}).catch(o=>{console.info(o)})}abrirDialogFiltrar(){this.modal.open(Q,{data:{fechaInicial:this.fechaInicial,fechaFinal:this.fechaFinal},disableClose:!0}).afterClosed().subscribe(o=>{o&&(o.fechaInicial||o.estados||o.empresas)&&(this.fechaInicial=o.fechaInicial,this.fechaFinal=o.fechaFinal,this.estados=o.estados,this.empresas=o.empresas,this.consultaInformeVenta({fecha_inicial:this.fechaInicial,fecha_final:this.fechaFinal,estados:this.estados,empresas:this.empresas}))})}consultaInformeVenta(a){this.ventaPostService.ObtenerInformeVentaPorFiltros(a).then(o=>{o.data.lista_informe_venta.length?this.dataSource=new l.by(o.data.lista_informe_venta):this.modal.open(_._,{data:{titulo:i.MF,accion:"No existe informaci\xf3n solicitada",opciones:1},disableClose:!0}).afterClosed().subscribe(r=>{this.dataSource=new l.by(o.data.lista_informe_venta)})})}reActivarInformeVenta(a){this.modal.open(_._,{data:{titulo:i.in,accion:i.x9+" volver a inventariar?",opciones:2},disableClose:!0}).afterClosed().subscribe(o=>{o&&this.ventaPostService.activarInformeVenta({informe_venta_id:a,usuario_id_edicion:this.sesion.usuario.id}).then(c=>{this.modal.open(_._,{data:{titulo:i.MF,accion:c.mensaje,opciones:1},disableClose:!0}).afterClosed().subscribe(d=>{this.cargarTablaInformeVenta()})})})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(f.uw),t.Y36(g.F0),t.Y36(G),t.Y36(v.m),t.Y36(R.x),t.Y36(z.R))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ne-adm-gact-venta-baja-lista"]],decls:81,vars:16,consts:[[1,"contenedor-acciones"],[1,"contenedor-acciones-derecho"],["class","btn-principal",3,"click",4,"ngIf"],[1,"btn-principal",3,"click"],[1,"btn-principal",3,"disabled","click"],[1,"contenedor-medio"],[1,"contenedor-izquierdo"],[1,"contenedor-izquierdo-cuerpo"],["mat-table","","matSort","","matSortActive","created","matSortDisableClear","","matSortDirection","desc",1,"tabla",3,"dataSource"],["matColumnDef","revalidar",4,"ngIf"],["matColumnDef","id"],["mat-header-cell","","class","tabla-titulo",4,"matHeaderCellDef"],["mat-cell","","class","tabla-valor",4,"matCellDef"],["matColumnDef","fechaVenta"],["matColumnDef","empresa"],["matColumnDef","informe"],["matColumnDef","equipo"],["matColumnDef","estado"],["matColumnDef","gra"],["matColumnDef","grp"],["matColumnDef","factura"],["matColumnDef","fechaDescapitalizacion"],["matColumnDef","acciones",4,"ngIf"],["matColumnDef","inventario",4,"ngIf"],["matColumnDef","entrega",4,"ngIf"],["matColumnDef","aprobar",4,"ngIf"],["matColumnDef","finalizado"],["matColumnDef","activar",4,"ngIf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","elemento-fila-para-collapse",3,"elemento-fila-para-collapse-expandido","click",4,"matRowDef","matRowDefColumns"],[1,"contenedor-izquierdo-pie"],[1,"contenedor-detalle-archivos-estado"],["aria-hidden","false","fontIcon","cancel",1,"icono-rechazado"],["aria-hidden","false","fontIcon","circle",1,"icono-pendiente"],["aria-hidden","false","fontIcon","check",1,"icono-pendiente"],["aria-hidden","false","fontIcon","check_circle",1,"icono-validado"],["aria-hidden","false","fontIcon","check_circle",1,"icono-aprobado"],["aria-hidden","false","fontIcon","library_add_check",1,"icono-aprobado"],["matColumnDef","revalidar"],["mat-header-cell","",1,"tabla-titulo"],["mat-cell","",1,"tabla-valor"],["aria-hidden","false","fontIcon","lock",3,"click",4,"ngIf"],["aria-hidden","false","fontIcon","lock",3,"click"],["aria-hidden","false","fontIcon","check_circle","class","icono-validado",4,"ngIf"],["aria-hidden","false","fontIcon","check_circle","class","icono-aprobado",4,"ngIf"],["aria-hidden","false","fontIcon","circle","class","icono-pendiente",4,"ngIf"],["aria-hidden","false","fontIcon","cancel","class","icono-rechazado",4,"ngIf"],["aria-hidden","false","fontIcon","check","class","icono-pendiente",4,"ngIf"],["aria-hidden","false","fontIcon","library_add_check","class","icono-aprobado",4,"ngIf"],["matColumnDef","acciones"],["aria-hidden","false","fontIcon","edit",3,"click",4,"ngIf"],["aria-hidden","false","fontIcon","visibility",3,"click",4,"ngIf"],["aria-hidden","false","fontIcon","edit",3,"click"],["aria-hidden","false","fontIcon","visibility",3,"click"],["matColumnDef","inventario"],["aria-hidden","false","fontIcon","checklist_rtl",3,"click",4,"ngIf"],["aria-hidden","false","fontIcon","checklist_rtl",3,"click"],["matColumnDef","entrega"],["aria-hidden","false","fontIcon","local_shipping",3,"click",4,"ngIf"],["aria-hidden","false","fontIcon","local_shipping",3,"click"],["matColumnDef","aprobar"],["aria-hidden","false","fontIcon","thumb_up",3,"click",4,"ngIf"],["aria-hidden","false","fontIcon","thumb_up",3,"click"],["matColumnDef","activar"],["mat-header-row",""],["mat-row","",1,"elemento-fila-para-collapse",3,"click"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,$,2,0,"button",2),t.TgZ(3,"button",3),t.NdJ("click",function(){return o.dialogVentaBajaPendiente()}),t._uU(4," Activos pendientes "),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return o.exportarExcel()}),t._uU(6," Exportar Excel "),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return o.dialogVentaBajaCrear()}),t._uU(8," Crear "),t.qZA(),t.TgZ(9,"button",3),t.NdJ("click",function(){return o.abrirDialogFiltrar()}),t._uU(10," Filtrar "),t.qZA()()(),t.TgZ(11,"div",5)(12,"div",6)(13,"div",7)(14,"table",8),t.YNc(15,W,3,0,"ng-container",9),t.ynx(16,10),t.YNc(17,tt,2,0,"th",11),t.YNc(18,et,2,1,"td",12),t.BQk(),t.ynx(19,13),t.YNc(20,at,2,0,"th",11),t.YNc(21,nt,2,1,"td",12),t.BQk(),t.ynx(22,14),t.YNc(23,ot,2,0,"th",11),t.YNc(24,it,2,1,"td",12),t.BQk(),t.ynx(25,15),t.YNc(26,ct,2,0,"th",11),t.YNc(27,rt,2,1,"td",12),t.BQk(),t.ynx(28,16),t.YNc(29,lt,2,0,"th",11),t.YNc(30,st,2,1,"td",12),t.BQk(),t.ynx(31,17),t.YNc(32,dt,2,0,"th",11),t.YNc(33,gt,7,6,"td",12),t.BQk(),t.ynx(34,18),t.YNc(35,bt,2,0,"th",11),t.YNc(36,Ct,2,1,"td",12),t.BQk(),t.ynx(37,19),t.YNc(38,vt,2,0,"th",11),t.YNc(39,Zt,2,1,"td",12),t.BQk(),t.ynx(40,20),t.YNc(41,xt,2,0,"th",11),t.YNc(42,Tt,2,1,"td",12),t.BQk(),t.ynx(43,21),t.YNc(44,Vt,2,0,"th",11),t.YNc(45,jt,2,1,"td",12),t.BQk(),t.YNc(46,qt,3,0,"ng-container",22),t.YNc(47,Ot,3,0,"ng-container",23),t.YNc(48,yt,3,0,"ng-container",24),t.YNc(49,St,3,0,"ng-container",25),t.ynx(50,26),t.YNc(51,Gt,2,0,"th",11),t.YNc(52,zt,2,1,"td",12),t.BQk(),t.YNc(53,Xt,3,0,"ng-container",27),t.YNc(54,Wt,1,0,"tr",28),t.YNc(55,te,1,2,"tr",29),t.qZA()(),t.TgZ(56,"div",30)(57,"div",31)(58,"label"),t._uU(59,"Rechazado"),t.qZA(),t._UZ(60,"mat-icon",32),t.qZA(),t.TgZ(61,"div",31)(62,"label"),t._uU(63,"Pendiente"),t.qZA(),t._UZ(64,"mat-icon",33),t.qZA(),t.TgZ(65,"div",31)(66,"label"),t._uU(67,"Revisado"),t.qZA(),t._UZ(68,"mat-icon",34),t.qZA(),t.TgZ(69,"div",31)(70,"label"),t._uU(71,"Validado"),t.qZA(),t._UZ(72,"mat-icon",35),t.qZA(),t.TgZ(73,"div",31)(74,"label"),t._uU(75,"Aprobado"),t.qZA(),t._UZ(76,"mat-icon",36),t.qZA(),t.TgZ(77,"div",31)(78,"label"),t._uU(79,"Recepcionado"),t.qZA(),t._UZ(80,"mat-icon",37),t.qZA()()()()),2&a&&(t.xp6(2),t.Q6J("ngIf",11===o.rol_usuario),t.xp6(3),t.ekj("btn-principal-off",!o.puedeExportar),t.Q6J("disabled",!o.puedeExportar),t.xp6(2),t.ekj("btn-principal-off",!o.puedeCrear),t.Q6J("disabled",!o.puedeCrear),t.xp6(7),t.Q6J("dataSource",o.dataSource),t.xp6(1),t.Q6J("ngIf",o.revalidacion),t.xp6(31),t.Q6J("ngIf",o.puedeEditar),t.xp6(1),t.Q6J("ngIf",o.puedeInventariar),t.xp6(1),t.Q6J("ngIf",o.puedeSupervisar),t.xp6(1),t.Q6J("ngIf",o.puedeAprobar),t.xp6(4),t.Q6J("ngIf",11===o.sesion.usuario.rol.id),t.xp6(1),t.Q6J("matHeaderRowDef",o.tablaCabecera),t.xp6(1),t.Q6J("matRowDefColumns",o.tablaCabecera))},dependencies:[u.O5,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,h.Hw],styles:[".contenedor-acciones[_ngcontent-%COMP%]{width:calc(100% - 20px);height:8%;background-color:#313135;align-items:center;border-radius:6px;margin-right:10px;margin-left:10px;box-shadow:#0003 0 2px 8px}.contenedor-acciones-derecho[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:flex-end;align-items:center;float:right;width:50%;height:100%;padding-right:1%}.contenedor-acciones-derecho[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1%;width:25%}.contenedor-medio[_ngcontent-%COMP%]{width:100%;margin-top:1%;height:calc(85% - 60px)}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-izquierdo[_ngcontent-%COMP%]{width:100%;height:100%;float:left;border-radius:6px;background-color:#313135;margin-left:10px;box-shadow:#0003 0 2px 8px}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-izquierdo-cuerpo[_ngcontent-%COMP%]{overflow:auto;height:87%}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-izquierdo-cuerpo[_ngcontent-%COMP%]   .tabla[_ngcontent-%COMP%]{width:95%;margin-top:2%}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-izquierdo-cuerpo[_ngcontent-%COMP%]   .tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;left:0}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-izquierdo-cuerpo[_ngcontent-%COMP%]   .tabla[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .contenedor-medio[_ngcontent-%COMP%]   .contenedor-izquierdo-cuerpo[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-izquierdo-cuerpo[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-izquierdo-pie[_ngcontent-%COMP%]{height:10%;display:flex;align-items:center;justify-content:center;border-top-width:1px;border-top-color:#404045;border-top-style:solid}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-izquierdo[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-tabla[_ngcontent-%COMP%]{width:60%;height:100%;float:left;border-radius:6px;background-color:#313135;margin-left:10px;box-shadow:#0003 0 2px 8px;overflow:auto}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-tabla[_ngcontent-%COMP%]   .tabla[_ngcontent-%COMP%]{width:95%;margin-top:2%}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-tabla[_ngcontent-%COMP%]   .tabla[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-detalle[_ngcontent-%COMP%]{width:38%;height:100%;float:right;border-radius:6px;background-color:#313135;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none;margin-right:10px;box-shadow:#0003 0 2px 8px;overflow:auto}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-detalle-tabla[_ngcontent-%COMP%]{width:100%!important;height:85%;overflow-y:auto;margin-left:0}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-detalle-archivos[_ngcontent-%COMP%]{width:100%;height:15%;position:relative;display:flex;align-items:center;justify-content:center;border-top-width:1px;border-top-color:#404045;border-top-style:solid}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-detalle-archivos-estado[_ngcontent-%COMP%]{width:25%;position:relative;display:flex;align-items:center;justify-content:center;flex-flow:column wrap}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-tabla[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-detalle[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}"]}),e})();const ee=[{path:"",component:V}];let ae=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(ee),g.Bz]}),e})();var ne=s(577),oe=s(164);let ie=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e,bootstrap:[V]}),e.\u0275inj=t.cJS({imports:[j.JF,u.ez,m.u5,ae,m.UX,l.p0,h.Ps,f.Is,ne.VentaBajaCrearModule,oe.k]}),e})()}}]);