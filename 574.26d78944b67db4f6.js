"use strict";(self.webpackChunknewport_erp=self.webpackChunknewport_erp||[]).push([[574],{2574:(V,u,r)=>{r.r(u),r.d(u,{BajaReporteGerenciaModule:()=>L});var _=r(5412),j=r(6895),l=r(7155),b=r(7392),g=r(4006),I=r(529),x=r(5017),m=r(4891),f=r(1588),i=r(7800),B=r(7579),e=r(4650),G=r(6703),R=r(9850),h=r(8996),T=r(1791);function v(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"th",16)(1,"input",17),e.NdJ("change",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.seleccionarTodo())}),e.qZA()()}}function E(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"td",18)(1,"input",19),e.NdJ("change",function(c){const d=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.onCheckedInformeBaja(d,c))}),e.qZA()()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("checked",t.selection.hasValue()&&t.selecionarTodos())("indeterminate",t.selection.hasValue()&&!t.selecionarTodos())}}function O(a,o){1&a&&(e.TgZ(0,"th",16),e._uU(1,"Codificaci\xf3n"),e.qZA())}function Z(a,o){if(1&a&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.Oqu((null==t.informe_baja.sitio||null==t.informe_baja.sitio.empresa?null:t.informe_baja.sitio.empresa.nombre_corto)+"-"+(null==t.informe_baja||null==t.informe_baja.departamento||null==t.informe_baja.departamento.area?null:t.informe_baja.departamento.area.nombre_corto)+"-"+(null==t.informe_baja.sitio?null:t.informe_baja.sitio.nombre_corto)+"-"+(null==t.informe_baja?null:t.informe_baja.fecha_creacion)+"-"+(null==t.informe_baja?null:t.informe_baja.id)||"-")}}function M(a,o){1&a&&(e.TgZ(0,"th",16),e._uU(1,"Procedencia"),e.qZA())}function P(a,o){if(1&a&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.Oqu((null==t.informe_baja.sitio?null:t.informe_baja.sitio.nombre)||"-")}}function w(a,o){1&a&&(e.TgZ(0,"th",16),e._uU(1,"Empresa"),e.qZA())}function A(a,o){if(1&a&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.Oqu((null==t.informe_baja.sitio||null==t.informe_baja.sitio.empresa?null:t.informe_baja.sitio.empresa.nombre)||"-")}}function N(a,o){1&a&&(e.TgZ(0,"th",16),e._uU(1,"Estado"),e.qZA())}function k(a,o){1&a&&e._UZ(0,"mat-icon",26)}function y(a,o){1&a&&e._UZ(0,"mat-icon",27)}function D(a,o){1&a&&e._UZ(0,"mat-icon",28)}function S(a,o){1&a&&e._UZ(0,"mat-icon",29)}function J(a,o){1&a&&e._UZ(0,"mat-icon",30)}function Y(a,o){1&a&&e._UZ(0,"mat-icon",31)}function Q(a,o){if(1&a&&(e.TgZ(0,"td",18),e.YNc(1,k,1,0,"mat-icon",20),e.YNc(2,y,1,0,"mat-icon",21),e.YNc(3,D,1,0,"mat-icon",22),e.YNc(4,S,1,0,"mat-icon",23),e.YNc(5,J,1,0,"mat-icon",24),e.YNc(6,Y,1,0,"mat-icon",25),e.qZA()),2&a){const t=o.$implicit;e.xp6(1),e.Q6J("ngIf","APROBADO-1"===t.estado),e.xp6(1),e.Q6J("ngIf","ENVIADO-GG"===t.estado),e.xp6(1),e.Q6J("ngIf","APROBADO-GG"===t.estado),e.xp6(1),e.Q6J("ngIf","VALIDADO"===t.estado),e.xp6(1),e.Q6J("ngIf","PENDIENTE"===t.estado),e.xp6(1),e.Q6J("ngIf","RECHAZADO"===t.estado)}}function H(a,o){1&a&&e._UZ(0,"tr",32)}function U(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"tr",33),e.NdJ("click",function(){const s=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.detalleInformeBajaElemento(s))}),e.qZA()}}let C=(()=>{class a{constructor(t,n,c,s){this.bajaElementoGetService=t,this.bajaPostService=n,this.modal=c,this.router=s,this.listaInformeBajaId=[],this.esBtnGuardarCambiosHabilitado=new B.x,this.filaSeleccionada=!1,this.listaInformeBajaElementoId=[],this.listaInformeBajaElemento=[],this.sesion=(0,f.l3)(),this.tablaCabecera=["id","codificacion","procedencia","empresa","autorizaciones"],this.selection=new x.Ov(!0,[]),this.informeBajaElementoDetalle=new B.x,this.puedeAprobar=!(!(0,f.Gs)(i.K1,i.yG,i.aC)&&!(0,f.Gs)(i.K1,i.yG,i.ul)),this.puedeRechazar=!(!(0,f.Gs)(i.K1,i.wl,i.aC)&&!(0,f.Gs)(i.K1,i.wl,i.ul))}ngOnInit(){this.esBtnGuardarCambiosHabilitado.next(!1),this.reporteGerenciaInformeBaja()}selecionarTodos(){return this.selection.selected.length===this.dataSource.data.length}seleccionarTodo(){this.listaInformeBajaElementoId=[],this.listaInformeBajaId=[],this.selecionarTodos()?this.selection.clear():(this.listaInformeBajaElemento.forEach(t=>{this.listaInformeBajaElementoId.push(t.id),this.listaInformeBajaId.push(t.informe_baja.id)}),this.selection.select(...this.dataSource.data))}editarInformeBajaElemento(t){}reporteGerenciaInformeBaja(){this.bajaElementoGetService.ObtenerListaInformeBajaElementoEnviadosGG().then(t=>{this.listaInformeBajaElemento=t.data.lista_informe_baja_elemento,this.dataSource=new l.by(this.listaInformeBajaElemento),0===this.listaInformeBajaElemento.length&&this.router.navigate(["main/baja"])})}onCheckedInformeBaja(t,n){if(n.target.checked)this.listaInformeBajaElementoId.push(t.id),this.listaInformeBajaId.push(t.informe_baja.id);else{this.listaInformeBajaElementoId.find((d,p)=>{d===t.id&&this.listaInformeBajaElementoId.splice(p,1)});let s=0;this.listaInformeBajaId.find((d,p)=>{0===s&&d===t.informe_baja.id&&(this.listaInformeBajaId.splice(p,1),s=1)})}}aprobar(){this.modal.open(m._,{data:{titulo:i.in,accion:i.x9+i.th,opciones:2},disableClose:!0}).afterClosed().subscribe(t=>{t&&this.bajaPostService.cambiarEstadoGerenciaReporteInformeBaja({estado:i.Zw,lista_informe_baja_elemento_id:this.listaInformeBajaElementoId,lista_informe_baja_id:this.listaInformeBajaId,usuario_id_edicion:this.sesion.usuario.id}).then(c=>{"0"===c.codigo?this.modal.open(m._,{data:{titulo:i.A9,accion:i.H1,opciones:1},disableClose:!0}).afterClosed().subscribe(s=>{this.reporteGerenciaInformeBaja()}):this.modal.open(m._,{data:{titulo:i.MF,accion:c.mensaje,opciones:1},disableClose:!0})})})}rechazar(){this.bajaPostService.cambiarEstadoGerenciaReporteInformeBaja({estado:i.QH,lista_informe_baja_elemento_id:this.listaInformeBajaElementoId,lista_informe_baja_id:this.listaInformeBajaId,usuario_id_edicion:this.sesion.usuario.id}).then(n=>{"0"===n.codigo?this.modal.open(m._,{data:{titulo:i.A9,accion:i.H1,opciones:1},disableClose:!0}).afterClosed().subscribe(c=>{this.reporteGerenciaInformeBaja()}):this.modal.open(m._,{data:{titulo:i.MF,accion:n.mensaje,opciones:1},disableClose:!0})})}detalleInformeBajaElemento(t){this.clickedElement=this.clickedElement===t?null:t,this.validarObjetoSeleccionado===t?(this.bajaElementoGetService.detalleInformeBajaElemento(0).then(n=>{this.informeBajaElementoDetalle.next(n.data.informe_baja_elemento)}),this.validarObjetoSeleccionado=null,this.filaSeleccionada=!1):(this.bajaElementoGetService.detalleInformeBajaElemento(t.id).then(n=>{this.informeBajaElementoDetalle.next(n.data.informe_baja_elemento)}),this.validarObjetoSeleccionado=t,this.filaSeleccionada=!0)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(G.C),e.Y36(R.m),e.Y36(_.uw),e.Y36(h.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["ne-adm-gact-baja-reporte-gerencia"]],decls:27,vars:11,consts:[[1,"contenedor-acciones"],[1,"contenedor-acciones-derecho"],[1,"btn-principal",3,"disabled","click"],[1,"contenedor-medio"],[3,"informeBajaElemento","estaFormularioHabilitado","editarInformeBajaElemento"],[1,"contenedor-lista"],["mat-table","","multiTemplateDataRows","",1,"tabla",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","class","tabla-titulo",4,"matHeaderCellDef"],["mat-cell","","class","tabla-valor",4,"matCellDef"],["matColumnDef","codificacion"],["matColumnDef","procedencia"],["matColumnDef","empresa"],["matColumnDef","autorizaciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",1,"tabla-titulo"],["type","checkbox","name","checkbox2",3,"change"],["mat-cell","",1,"tabla-valor"],["type","checkbox","name","checkbox",3,"checked","indeterminate","change"],["aria-hidden","false","fontIcon","check","class","icono-aprobado",4,"ngIf"],["aria-hidden","false","fontIcon","mark_email_read","class","icono-enviado",4,"ngIf"],["aria-hidden","false","fontIcon","check_circle","class","icono-aprobado",4,"ngIf"],["aria-hidden","false","fontIcon","check_circle","class","icono-validado",4,"ngIf"],["aria-hidden","false","fontIcon","circle","class","icono-pendiente",4,"ngIf"],["aria-hidden","false","fontIcon","cancel","class","icono-rechazado",4,"ngIf"],["aria-hidden","false","fontIcon","check",1,"icono-aprobado"],["aria-hidden","false","fontIcon","mark_email_read",1,"icono-enviado"],["aria-hidden","false","fontIcon","check_circle",1,"icono-aprobado"],["aria-hidden","false","fontIcon","check_circle",1,"icono-validado"],["aria-hidden","false","fontIcon","circle",1,"icono-pendiente"],["aria-hidden","false","fontIcon","cancel",1,"icono-rechazado"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.aprobar()}),e._uU(3," Aprobar "),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return n.rechazar()}),e._uU(5," Rechazar "),e.qZA()()(),e.TgZ(6,"div",3)(7,"ne-adm-gact-baja-detalle",4),e.NdJ("editarInformeBajaElemento",function(s){return n.editarInformeBajaElemento(s)}),e.qZA(),e.TgZ(8,"div",5)(9,"table",6),e.ynx(10,7),e.YNc(11,v,2,0,"th",8),e.YNc(12,E,2,2,"td",9),e.BQk(),e.ynx(13,10),e.YNc(14,O,2,0,"th",8),e.YNc(15,Z,2,1,"td",9),e.BQk(),e.ynx(16,11),e.YNc(17,M,2,0,"th",8),e.YNc(18,P,2,1,"td",9),e.BQk(),e.ynx(19,12),e.YNc(20,w,2,0,"th",8),e.YNc(21,A,2,1,"td",9),e.BQk(),e.ynx(22,13),e.YNc(23,N,2,0,"th",8),e.YNc(24,Q,7,6,"td",9),e.BQk(),e.YNc(25,H,1,0,"tr",14),e.YNc(26,U,1,0,"tr",15),e.qZA()()()),2&t&&(e.xp6(2),e.ekj("btn-principal-off",!n.puedeAprobar),e.Q6J("disabled",!n.puedeAprobar),e.xp6(2),e.ekj("btn-principal-off",!n.puedeRechazar),e.Q6J("disabled",!n.puedeRechazar),e.xp6(3),e.Q6J("informeBajaElemento",n.informeBajaElementoDetalle)("estaFormularioHabilitado",n.esBtnGuardarCambiosHabilitado),e.xp6(2),e.Q6J("dataSource",n.dataSource),e.xp6(16),e.Q6J("matHeaderRowDef",n.tablaCabecera),e.xp6(1),e.Q6J("matRowDefColumns",n.tablaCabecera))},dependencies:[j.O5,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,b.Hw,T._],styles:[".contenedor-acciones[_ngcontent-%COMP%]{width:calc(100% - 20px);height:8%;background-color:#313135;align-items:center;border-radius:6px;margin-right:10px;margin-left:10px;box-shadow:#0003 0 2px 8px}.contenedor-acciones-izquierdo[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:flex-start;align-items:center;float:left;width:50%;height:100%;padding-left:1%}.contenedor-acciones-izquierdo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1%;width:25%}.contenedor-acciones-derecho[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:flex-end;align-items:center;float:right;width:50%;height:100%;padding-right:1%}.contenedor-acciones-derecho[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:1%;width:25%}.contenedor-medio[_ngcontent-%COMP%]{width:100%;margin-top:1%;height:calc(85% - 60px)}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-lista[_ngcontent-%COMP%]{width:38%;height:100%;float:right;border-radius:6px;background-color:#313135;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none;margin-right:10px;box-shadow:#0003 0 2px 8px}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-lista[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:pointer;height:5px!important}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-lista[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .contenedor-medio[_ngcontent-%COMP%]   .contenedor-lista[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-lista[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;left:0}"]}),a})();const z=[{path:"",component:C}];let F=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[h.Bz.forChild(z),h.Bz]}),a})();var K=r(164),$=r(9996);let L=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a,bootstrap:[C]}),a.\u0275inj=e.cJS({imports:[I.JF,j.ez,g.u5,F,g.UX,l.p0,b.Ps,_.Is,K.k,$.b]}),a})()}}]);