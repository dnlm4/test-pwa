"use strict";(self.webpackChunknewport_erp=self.webpackChunknewport_erp||[]).push([[268],{8268:(Q,h,l)=>{l.r(h),l.d(h,{PerfilModule:()=>j});var m=l(5412),s=l(6895),a=l(7155),d=l(7392),n=l(4006),f=l(529),p=l(1588),o=l(4650),_=l(4068);function P(e,i){1&e&&(o.TgZ(0,"th",12),o._uU(1,"#"),o.qZA())}function w(e,i){if(1&e&&(o.TgZ(0,"td",13),o._uU(1),o.qZA()),2&e){const t=i.$implicit;o.xp6(1),o.Oqu(t.modulo.id)}}function C(e,i){1&e&&(o.TgZ(0,"th",12),o._uU(1,"Modulos"),o.qZA())}function M(e,i){if(1&e&&(o.TgZ(0,"td",13),o._uU(1),o.qZA()),2&e){const t=i.$implicit;o.xp6(1),o.Oqu(t.modulo.nombre)}}function x(e,i){1&e&&(o.TgZ(0,"th",12),o._uU(1,"Permisos"),o.qZA())}function y(e,i){1&e&&(o.TgZ(0,"label",15),o._uU(1,","),o.qZA())}function v(e,i){1&e&&(o.TgZ(0,"label",15),o._uU(1,"\xa0"),o.qZA())}function Z(e,i){1&e&&(o.TgZ(0,"label",15),o._uU(1,"."),o.qZA())}function O(e,i){if(1&e&&(o.TgZ(0,"label",15),o._uU(1),o.YNc(2,y,2,0,"label",16),o.YNc(3,v,2,0,"label",16),o.YNc(4,Z,2,0,"label",16),o.qZA()),2&e){const t=i.$implicit,r=i.last;o.xp6(1),o.Oqu(t.nombre),o.xp6(1),o.Q6J("ngIf",!1===r),o.xp6(1),o.Q6J("ngIf",!1===r),o.xp6(1),o.Q6J("ngIf",!0===r)}}function T(e,i){if(1&e&&(o.TgZ(0,"td",13),o.YNc(1,O,5,4,"label",14),o.qZA()),2&e){const t=i.$implicit;o.xp6(1),o.Q6J("ngForOf",t.lista_permiso)}}function I(e,i){1&e&&o._UZ(0,"tr",17)}function U(e,i){1&e&&o._UZ(0,"tr",18)}let u=(()=>{class e{constructor(t,r){this.modal=t,this.rolPermisoGetService=r,this.tablaCabecera=["id","modulo","permisos"],this.sesion=(0,p.l3)()}ngOnInit(){this.cargarTablaPermisoPorModulo()}cargarTablaPermisoPorModulo(){this.rolPermisoGetService.obtenerListaRolPermisoAgrupadaPorModulo(this.sesion.usuario.rol.id).then(t=>{this.dataSource=new a.by(t.data.lista_permiso_agrupada_por_rol)})}aceptar(){this.modal.closeAll()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(m.uw),o.Y36(_.G))},e.\u0275cmp=o.Xpm({type:e,selectors:[["ne-adm-gact-perfil-permisos"]],decls:18,vars:3,consts:[[1,"contenedor-principal"],[1,"contenedor-superior"],[1,"contenedor-medio"],[1,"contenedor-tabla"],["mat-table","","multiTemplateDataRows","",1,"tabla-informacion",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","class","tabla-titulo",4,"matHeaderCellDef"],["mat-cell","","class","tabla-valor",4,"matCellDef"],["matColumnDef","modulo"],["matColumnDef","permisos"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",1,"tabla-titulo"],["mat-cell","",1,"tabla-valor"],["class","tabla-valor",4,"ngFor","ngForOf"],[1,"tabla-valor"],["class","tabla-valor",4,"ngIf"],["mat-header-row",""],["mat-row",""]],template:function(t,r){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h3"),o._uU(3,"Mis permisos"),o.qZA()(),o.TgZ(4,"div",2)(5,"div",3)(6,"table",4),o.ynx(7,5),o.YNc(8,P,2,0,"th",6),o.YNc(9,w,2,1,"td",7),o.BQk(),o.ynx(10,8),o.YNc(11,C,2,0,"th",6),o.YNc(12,M,2,1,"td",7),o.BQk(),o.ynx(13,9),o.YNc(14,x,2,0,"th",6),o.YNc(15,T,2,1,"td",7),o.BQk(),o.YNc(16,I,1,0,"tr",10),o.YNc(17,U,1,0,"tr",11),o.qZA()()()()),2&t&&(o.xp6(6),o.Q6J("dataSource",r.dataSource),o.xp6(10),o.Q6J("matHeaderRowDef",r.tablaCabecera),o.xp6(1),o.Q6J("matRowDefColumns",r.tablaCabecera))},dependencies:[s.sg,s.O5,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk],styles:['@font-face{font-family:Material Icons;font-style:normal;font-weight:400;font-display:block;src:url(material-icons.59322316b3fd6063.woff2) format("woff2"),url(material-icons.4ad034d2c499d9b6.woff) format("woff")}.material-icons[_ngcontent-%COMP%]{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}@font-face{font-family:Material Icons Outlined;font-style:normal;font-weight:400;font-display:block;src:url(material-icons-outlined.f86cb7b0aa53f0fe.woff2) format("woff2"),url(material-icons-outlined.78a93b2079680a08.woff) format("woff")}.material-icons-outlined[_ngcontent-%COMP%]{font-family:Material Icons Outlined;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}@font-face{font-family:Material Icons Round;font-style:normal;font-weight:400;font-display:block;src:url(material-icons-round.b10ec9db5b7fbc74.woff2) format("woff2"),url(material-icons-round.92dc7ca2f4c591e7.woff) format("woff")}.material-icons-round[_ngcontent-%COMP%]{font-family:Material Icons Round;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}@font-face{font-family:Material Icons Sharp;font-style:normal;font-weight:400;font-display:block;src:url(material-icons-sharp.3885863ee4746422.woff2) format("woff2"),url(material-icons-sharp.a71cb2bf66c604de.woff) format("woff")}.material-icons-sharp[_ngcontent-%COMP%]{font-family:Material Icons Sharp;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}@font-face{font-family:Material Icons Two Tone;font-style:normal;font-weight:400;font-display:block;src:url(material-icons-two-tone.675bd578bd14533e.woff2) format("woff2"),url(material-icons-two-tone.588d63134de807a7.woff) format("woff")}.material-icons-two-tone[_ngcontent-%COMP%]{font-family:Material Icons Two Tone;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}.contenedor-detalle[_ngcontent-%COMP%]{width:59%;height:100%;float:right;align-items:center;justify-content:center;background-color:#313135;border-radius:6px;box-shadow:#0003 0 2px 8px}.contenedor-detalle-ver-info[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.contenedor-principal[_ngcontent-%COMP%]{width:45vw;height:100%;max-height:900px;background-color:#313135;border-radius:6px}.contenedor-principal[_ngcontent-%COMP%]   .contenedor-superior[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:flex-start;width:100%;height:50px;align-items:center}.contenedor-principal[_ngcontent-%COMP%]   .contenedor-superior[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#8a8894;font-size:1rem;font-weight:600;font-family:Montserrat,sans-serif;margin-bottom:0;margin-left:5%}.contenedor-principal[_ngcontent-%COMP%]   .contenedor-medio[_ngcontent-%COMP%]{width:100%;height:75%;padding-left:5%;padding-right:5%;border-bottom-width:1px;border-bottom-color:#404045;border-bottom-style:solid;border-top-width:1px;border-top-color:#404045;border-top-style:solid}.contenedor-principal[_ngcontent-%COMP%]   .contenedor-medio[_ngcontent-%COMP%]   .contenedor-lista[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.centrar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.icon[_ngcontent-%COMP%]{width:50px;height:50px;font-size:50px}.form-group-tabla[_ngcontent-%COMP%]{max-height:18vh}.tabla-informacion[_ngcontent-%COMP%]{width:100%;background-color:#313135}.contenedor-tabla[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:6px;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none;border-collapse:collapse}.contenedor-tabla[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:5px!important}.contenedor-tabla[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center;height:30px;font-size:18px;border-bottom:2px solid #222225}.contenedor-tabla[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:2px solid #222225;text-align:center}.contenedor-tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;left:0}.contenedor-tabla[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}']}),e})();var A=l(9562);let g=(()=>{class e{constructor(t,r){this.formBuilder=t,this.usuarioGetService=r,this.rolSeleccionado="",this.areaSeleccionada="",this.departamentoSeleccionado="",this.sesion=(0,p.l3)(),this.usuario={}}ngOnInit(){this.construirFormulario(),this.cargarFormulario()}construirFormulario(){this.formulario=this.formBuilder.group({usuario:new n.NI({value:"",disabled:!1},n.kI.required),clave:new n.NI({value:"",disabled:!1},n.kI.required),nombre:new n.NI({value:"",disabled:!1},n.kI.required),apellidoPaterno:new n.NI({value:"",disabled:!1},n.kI.required),apellidoMaterno:new n.NI({value:"",disabled:!1},n.kI.required),correo:new n.NI({value:"",disabled:!1},n.kI.required),estado:new n.NI({value:"",disabled:!1},n.kI.required),rolId:new n.NI({value:"",disabled:!1},n.kI.required),areaId:new n.NI({value:"",disabled:!1},n.kI.required),departamentoId:new n.NI({value:"",disabled:!1},n.kI.required)}),this.formulario.disable()}cargarFormulario(){this.usuarioGetService.obtenerUsuarioPorId(this.sesion.usuario.id).then(t=>{this.usuario=t.data.usuario||[],this.formulario.patchValue({usuario:this.usuario.usuario,nombre:this.usuario.nombre,clave:this.usuario.clave,apellidoPaterno:this.usuario.apellido_paterno,apellidoMaterno:this.usuario.apellido_materno,correo:this.usuario.correo,estado:this.usuario.estado,rol:this.usuario.rol.nombre,rolId:this.usuario.rol.id,areaId:this.usuario.departamento.area.id,departamentoId:this.usuario.departamento.id}),this.rolSeleccionado=this.usuario.rol.nombre,this.areaSeleccionada=this.usuario.departamento.area.nombre,this.departamentoSeleccionado=this.usuario.departamento.nombre})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(n.qu),o.Y36(A.R))},e.\u0275cmp=o.Xpm({type:e,selectors:[["ne-adm-gact-perfil-datos"]],decls:77,vars:4,consts:[[1,"contenedor-principal"],[1,"contenedor-superior"],[1,"contenedor-medio"],[1,"formulario-cuerpo"],[1,"formulario",3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-6"],["for","user",1,"label-common"],[1,"fondoInput"],["type","text","formControlName","usuario",1,"form-control","colorFondo"],[1,"labelIcono"],["aria-hidden","false","fontIcon","person"],[1,"label-common"],["type","text","formControlName","clave",1,"form-control","colorFondo"],["aria-hidden","false","fontIcon","lock"],[1,"form-group","col-md-4"],["for","name",1,"label-common"],["id","name","type","text","formControlName","nombre",1,"form-control","colorFondo"],["for","lastName1"],["id","lastName1","type","text","formControlName","apellidoPaterno",1,"form-control","colorFondo"],["for","lastName2"],["id","lastName2","type","text","formControlName","apellidoMaterno",1,"form-control","colorFondo"],["for","email"],["id","email","type","email","formControlName","correo",1,"form-control","colorFondo"],["aria-hidden","false","fontIcon","mail"],["for","speciality"],[1,"multiselect"],["tabindex","0","role","combobox",1,"multiselect-wrapper","colorFondo"],[1,"multiselect-single-label"],[1,"multiselect-single-label-text"],["tabindex","0","aria-placeholder","Select a control type","aria-expanded","false","aria-multiselectable","false","role","combobox",1,"multiselect-wrapper","colorFondo"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h3"),o._uU(3,"Mi Informaci\xf3n"),o.qZA()(),o.TgZ(4,"div",2)(5,"div",3)(6,"form",4)(7,"div",5)(8,"div",6)(9,"label",7),o._uU(10," Usuario:"),o.qZA(),o.TgZ(11,"div",8),o._UZ(12,"input",9),o.TgZ(13,"label",10),o._UZ(14,"mat-icon",11),o.qZA()()(),o.TgZ(15,"div",6)(16,"label",12),o._uU(17,"Contrase\xf1a:"),o.qZA(),o.TgZ(18,"div",8),o._UZ(19,"input",13),o.TgZ(20,"label",10),o._UZ(21,"mat-icon",14),o.qZA()()()(),o.TgZ(22,"div",5)(23,"div",15)(24,"label",16),o._uU(25,"Nombre:"),o.qZA(),o.TgZ(26,"div",8),o._UZ(27,"input",17),o.TgZ(28,"label",10),o._UZ(29,"mat-icon",11),o.qZA()()(),o.TgZ(30,"div",15)(31,"label",18),o._uU(32,"Apellido paterno:"),o.qZA(),o.TgZ(33,"div",8),o._UZ(34,"input",19),o.TgZ(35,"label",10),o._UZ(36,"mat-icon",11),o.qZA()()(),o.TgZ(37,"div",15)(38,"label",20),o._uU(39,"Apellido materno:"),o.qZA(),o.TgZ(40,"div",8),o._UZ(41,"input",21),o.TgZ(42,"label",10),o._UZ(43,"mat-icon",11),o.qZA()()()(),o.TgZ(44,"div",5)(45,"div",6)(46,"label",22),o._uU(47,"Correo:"),o.qZA(),o.TgZ(48,"div",8),o._UZ(49,"input",23),o.TgZ(50,"label",10),o._UZ(51,"mat-icon",24),o.qZA()()(),o.TgZ(52,"div",6)(53,"label",25),o._uU(54,"Rol"),o.qZA(),o.TgZ(55,"div",26)(56,"div",27)(57,"div",28)(58,"span",29),o._uU(59),o.qZA()()()()()(),o.TgZ(60,"div",5)(61,"div",6)(62,"label",25),o._uU(63,"Area"),o.qZA(),o.TgZ(64,"div",26)(65,"div",30)(66,"div",28)(67,"span",29),o._uU(68),o.qZA()()()()(),o.TgZ(69,"div",6)(70,"label",25),o._uU(71,"Departamento"),o.qZA(),o.TgZ(72,"div",26)(73,"div",30)(74,"div",28)(75,"span",29),o._uU(76),o.qZA()()()()()()()()()()),2&t&&(o.xp6(6),o.Q6J("formGroup",r.formulario),o.xp6(53),o.Oqu(r.rolSeleccionado),o.xp6(9),o.Oqu(r.areaSeleccionada),o.xp6(8),o.Oqu(r.departamentoSeleccionado))},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,d.Hw],styles:[".contenedor-detalle[_ngcontent-%COMP%]{width:59%;height:100%;float:right;align-items:center;justify-content:center;background-color:#313135;border-radius:6px;box-shadow:#0003 0 2px 8px}.contenedor-detalle-ver-info[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.contenedor-principal[_ngcontent-%COMP%]{width:45vw;height:100%;max-height:900px;background-color:#313135;border-radius:6px}.contenedor-principal[_ngcontent-%COMP%]   .contenedor-superior[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:flex-start;width:100%;height:50px;align-items:center}.contenedor-principal[_ngcontent-%COMP%]   .contenedor-superior[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#8a8894;font-size:1rem;font-weight:600;font-family:Montserrat,sans-serif;margin-bottom:0;margin-left:5%}.formulario[_ngcontent-%COMP%]{padding:3%}.formulario-cabecera[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:10%}.formulario-cabecera[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#8a8894;font-size:1.25rem;margin-bottom:.75rem;font-family:Montserrat,sans-serif;margin:0}.formulario-cuerpo[_ngcontent-%COMP%]{margin-top:1.5%}.formulario-text[_ngcontent-%COMP%]{width:500!important;background-color:#0ff!important}.fondoInput[_ngcontent-%COMP%]{box-sizing:border-box;clear:both;font-size:1rem;position:relative;text-align:inherit}.fondoInput[_ngcontent-%COMP%]   .labelIcono[_ngcontent-%COMP%]{position:absolute;top:0;inset-inline-start:0;height:38px;width:38px;display:flex;justify-content:center;align-items:center}.colorFondo[_ngcontent-%COMP%]{background-color:#222225!important;padding-left:35px!important}"]}),e})();function q(e,i){1&e&&o._UZ(0,"ne-adm-gact-perfil-datos")}function k(e,i){1&e&&o._UZ(0,"ne-adm-gact-perfil-permisos")}let b=(()=>{class e{constructor(){this.mostrarPermisos=!1,this.sesion=(0,p.l3)()}Permisos(t){this.mostrarPermisos=1!==t}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-perfil"]],decls:23,vars:6,consts:[[1,"contenedor-medio","centrar"],[1,"contenedor-lista"],[1,"perfil"],[1,"formulario-cuerpo"],[1,"form-row"],[1,"form-group","col-md-4"],["aria-hidden","false","fontIcon","account_circle",1,"icon"],[1,"form-group","col-md-8"],[1,"perfil-detalle"],[1,"cursor",3,"click"],[4,"ngIf"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),o._UZ(6,"mat-icon",6),o.qZA(),o.TgZ(7,"div",7)(8,"h3"),o._uU(9),o.qZA(),o.TgZ(10,"label"),o._uU(11),o.qZA()()()()(),o.TgZ(12,"div",8)(13,"div",4)(14,"div",5)(15,"span",9),o.NdJ("click",function(){return r.Permisos(1)}),o._uU(16,"Mi Informaci\xf3n"),o.qZA()()(),o.TgZ(17,"div",4)(18,"div",5)(19,"span",9),o.NdJ("click",function(){return r.Permisos(2)}),o._uU(20,"Mis Permisos"),o.qZA()()()()(),o.YNc(21,q,1,0,"ne-adm-gact-perfil-datos",10),o.YNc(22,k,1,0,"ne-adm-gact-perfil-permisos",10),o.qZA()),2&t&&(o.xp6(9),o.lnq("",r.sesion.usuario.nombre," ",r.sesion.usuario.apellido_paterno," ",r.sesion.usuario.apellido_materno," "),o.xp6(2),o.hij("",r.sesion.usuario.rol.nombre," "),o.xp6(10),o.Q6J("ngIf",!r.mostrarPermisos),o.xp6(1),o.Q6J("ngIf",r.mostrarPermisos))},dependencies:[s.O5,d.Hw,u,g],styles:[".contenedor-medio[_ngcontent-%COMP%]{width:80%;margin-top:1%;height:calc(85% - 60px)}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-lista[_ngcontent-%COMP%]{width:40%;height:50%;float:left;border-radius:6px;background-color:#313135;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none;align-items:center;padding-left:10px;box-shadow:#0003 0 2px 8px;margin-right:15px}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-lista[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:pointer;height:5px!important}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-lista[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .contenedor-medio[_ngcontent-%COMP%]   .contenedor-lista[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center}.contenedor-medio[_ngcontent-%COMP%]   .contenedor-lista[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.icon[_ngcontent-%COMP%]{width:100px;height:100px;font-size:100px}h3[_ngcontent-%COMP%]{padding-top:8px;color:#8a8894;font-size:1.25rem;font-weight:700;margin-bottom:0!important;font-family:Montserrat,sans-serif;margin:0}.centrar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.cursor[_ngcontent-%COMP%]{cursor:pointer;margin-left:10px}.perfil-detalle[_ngcontent-%COMP%]{width:100%;height:100%}"]}),e})();var c=l(8996);const N=[{path:"",component:b}];let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[c.Bz.forChild(N),c.Bz]}),e})();const F=[{path:"",component:u}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[c.Bz.forChild(F),c.Bz]}),e})(),J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e,bootstrap:[u]}),e.\u0275inj=o.cJS({imports:[s.ez,n.u5,n.UX,S,a.p0,d.Ps,f.JF,m.Is,n.u5,n.UX]}),e})();const D=[{path:"",component:g}];let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[c.Bz.forChild(D),c.Bz]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e,bootstrap:[g]}),e.\u0275inj=o.cJS({imports:[s.ez,n.u5,n.UX,R,a.p0,d.Ps,f.JF,m.Is,n.u5,n.UX]}),e})(),j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e,bootstrap:[b]}),e.\u0275inj=o.cJS({imports:[s.ez,n.u5,n.UX,z,a.p0,d.Ps,f.JF,m.Is,J,Y,n.u5,n.UX]}),e})()}}]);