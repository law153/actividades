"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9263],{9263:(Z,p,l)=>{l.r(p),l.d(p,{RegistrarsePageModule:()=>v});var m=l(6814),c=l(95),r=l(7852),d=l(7168),u=l(5861),e=l(6242),f=l(6506);const _=["ionInputEl"],b=[{path:"",component:(()=>{class s{constructor(t,o,n){this.menuCtrl=t,this.router=o,this.bd=n,this.msj="",this.msjRut="",this.msjNombre="",this.msjApellido="",this.msjFono="",this.msjDirec="",this.msjCorreo="",this.msjClave="",this.msjRepClave="",this.msjPreg="",this.msjResp="",this.rut="",this.dvrut="",this.nombre="",this.apellido="",this.fono="",this.direc="",this.correo="",this.clave="",this.claveRep="",this.pregunta="",this.respuesta="",this.flag=!0}irHome(){this.router.navigate([""])}abrirSuperior(){this.menuCtrl.enable(!0,"superior"),this.menuCtrl.open("superior")}abrirCategorias(){this.menuCtrl.enable(!0,"categorias"),this.menuCtrl.open("categorias")}limpiar(){this.rut="",this.dvrut="",this.nombre="",this.apellido="",this.fono="",this.direc="",this.correo="",this.clave="",this.claveRep="",this.pregunta="",this.respuesta=""}envioValido(){var t=this;return(0,u.Z)(function*(){t.flag=!0,yield t.rutValido(),t.nombreValido(),t.apellidoValido(),yield t.correoValido(),t.claveValida(),t.claveRepValid(),t.respuestValida(),t.direcValida(),t.preguntaValida(),t.fonoValido(),!0===t.flag&&(t.agregar(),yield t.bd.presentAlert("El usuario se ha creado correctamente!"),t.router.navigate(["/ini-sesion"]))})()}rutValido(){var t=this;return(0,u.Z)(function*(){if(t.msjRut="",0===t.rut.length||0===t.dvrut.length)t.flag=!1,t.msjRut+="Debe llenar estos campos";else{!1===t.SoloNumeros(t.rut)&&(t.flag=!1,t.msjRut+="El rut se compone solo de n\xfameros \n"),!1===t.SoloNumerosOk(t.dvrut)&&(t.flag=!1,t.msjRut+="El digito verificador solo se compone de n\xfameros o k\n"),!1===t.validarRut(t.rut,t.dvrut)&&(t.flag=!1,t.msjRut+="Rut invalido\n");try{(yield t.bd.buscarRut(t.rut)).length>0&&(t.flag=!1,t.msjRut="RUT ya ocupado en el sistema\n")}catch(o){console.error("Error al buscar usuario por RUT:",o)}}})()}nombreValido(){this.msjNombre="",0===this.nombre.length?(this.flag=!1,this.msjNombre="Debe llenar este campo"):(!1===this.primerCaracterEsMayus(this.nombre)&&(this.flag=!1,this.msjNombre+="La primera letra de su nombre debe ser may\xfascula\n"),!0===this.contieneNumero(this.nombre)&&(this.flag=!1,this.msjNombre+="Un nombre no debe contener n\xfameros\n"),this.contieneCaracterEspecial(this.nombre)&&(this.flag=!1,this.msjNombre+="Un nombre no debe contener car\xe1cteres especiales\n"))}apellidoValido(){0===this.apellido.length?(this.flag=!1,this.msjApellido="Debe llenar este campo"):!1===this.primerCaracterEsMayus(this.apellido)?(this.flag=!1,this.msjApellido+="La primera letra de su apellido debe ser may\xfascula\n"):!0===this.contieneNumero(this.apellido)?(this.flag=!1,this.msjApellido+="Un apellido no debe contener n\xfameros\n"):1==this.tieneCaracteresApellido(this.apellido)&&(this.flag=!1,this.msjApellido+="Un apellido no debe contener car\xe1cteres especiales\n")}onInput(t){const n=t.target.value.replace(/[^0-9]+/g,"");this.ionInputEl.value=this.fono=n}fonoValido(){this.msjFono="",0===this.fono.length?(this.flag=!1,this.msjFono="Debe llenar este campo"):this.fono.length<8&&(this.flag=!1,this.msjFono+="El tel\xe9fono debe ser de 8 n\xfameros\n")}correoValido(){var t=this;return(0,u.Z)(function*(){if(t.msjCorreo="",0===t.correo.length)t.flag=!1,t.msjCorreo="Debe llenar este campo";else{!1===t.esCorreoValido(t.correo)&&(t.flag=!1,t.msjCorreo+="Su correo no es valido\n");try{(yield t.bd.buscarCorreo(t.correo)).length>0&&(t.flag=!1,t.msjCorreo+="Correo ya ocupado en el sistema\n")}catch(o){console.error("Error al buscar usuario por Correo:",o)}}})()}direcValida(){this.msjDirec="",0===this.direc.length?(this.flag=!1,this.msjDirec="Debe llenar este campo"):(!1===this.primerCaracterEsMayus(this.direc)&&(this.flag=!1,this.msjDirec+="Su direcci\xf3n debe comenzar con una may\xfascula\n"),!1===this.contieneNumero(this.direc)&&(this.flag=!1,this.msjDirec+="Su direcci\xf3n debe contener un n\xfamero\n"))}buscarCorreo(){return(0,u.Z)(function*(){})()}buscarRut(){return(0,u.Z)(function*(){})()}claveValida(){this.msjClave="",0===this.clave.length?(this.flag=!1,this.msjClave="Debe llenar este campo"):(this.contieneMayuscula(this.clave)||(this.flag=!1,this.msjClave+="La contrase\xf1a debe poseer una may\xfascula\n"),this.contieneMinuscula(this.clave)||(this.flag=!1,this.msjClave+="La contrase\xf1a debe poseer una min\xfascula\n"),this.contieneNumero(this.clave)||(this.flag=!1,this.msjClave+="La contrase\xf1a debe poseer un n\xfamero\n"),this.contieneCaracterEspecial(this.clave)||(this.flag=!1,this.msjClave+="La contrase\xf1a debe poseer un car\xe1cter especial\n"),this.clave.length<=8&&(this.flag=!1,this.msjClave+="La contrase\xf1a debe tener al menos 8 caracteres de \nlongitud\n"))}claveRepValid(){this.msjRepClave="",0===this.claveRep.length?(this.flag=!1,this.msjRepClave="Debe llenar este campo"):this.claveRep!=this.clave&&(this.flag=!1,this.msjRepClave+="La contrase\xf1a no se ha repetido correctamente\n")}preguntaValida(){this.msjPreg="",0===this.pregunta.length&&(this.flag=!1,this.msjPreg="No ha seleccionado ninguna pregunta")}respuestValida(){this.msjResp="",0===this.respuesta.length&&(this.flag=!1,this.msjResp="No puede dejar la respuesta vac\xeda")}validarRut(t,o){const n=t.replace(/\D/g,"");return 8===n.length&&this.calcularDigitoVerificador(n)===o.toUpperCase()}calcularDigitoVerificador(t){const o=[2,3,4,5,6,7,2,3];let n=0;for(let h=t.length-1,g=0;h>=0;h--,g++)n+=parseInt(t[h])*o[g],7===g&&(g=0);const i=11-n%11;return 10===i?"K":11===i?"0":i.toString()}contieneMayuscula(t){return/[A-Z]/.test(t)}contieneMinuscula(t){return/[a-z]/.test(t)}contieneCaracterEspecial(t){return/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(t)}contieneNumero(t){return/\d/.test(t)}esCorreoValido(t){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)}primerCaracterEsMayus(t){const o=t.charAt(0);return/[A-Z]/.test(o)}tieneCaracteresApellido(t){return/[!@#$%^&*()_+{}\[\]:;<>,.?~/-]/.test(t)}SoloNumeros(t){return/^[0-9]+$/.test(t)}SoloNumerosOk(t){return/^[0-9Kk]+$/.test(t)}ngOnInit(){}agregar(){let t=0;"pregunta1"===this.pregunta?t=1:"pregunta2"===this.pregunta?t=2:"pregunta3"===this.pregunta&&(t=3),this.bd.agregarUsuario(this.nombre,this.apellido,this.rut,this.dvrut,this.fono,this.correo,this.direc,this.clave,"/assets/icono-perfil.png",this.respuesta,1,t)}static#e=this.\u0275fac=function(o){return new(o||s)(e.Y36(r._q),e.Y36(d.F0),e.Y36(f.N))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-registrarse"]],viewQuery:function(o,n){if(1&o&&e.Gf(_,7),2&o){let a;e.iGM(a=e.CRH())&&(n.ionInputEl=a.first)}},decls:102,vars:23,consts:[[1,"cabecera",3,"translucent"],[1,"logo-contenedor"],["src","/assets/logo.png","alt","No hay logo"],["color","paleta",1,"toolbar-c"],["slot","end",1,"boton-guesa"],[3,"click"],[1,"titulo",3,"click"],[1,"content-fondo",3,"fullscreen"],[1,"nombre-pag"],[1,"contenedor-form"],["labelPlacement","stacked","label","Rut","type","text","placeholder","sin puntos","maxlength","8",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Dvrut","type","text","placeholder","Dvrut","maxlength","1",3,"ngModel","ngModelChange"],[1,"validacion"],["labelPlacement","stacked","label","Nombre","placeholder","Nombre","maxlength","15",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Apellido","placeholder","Apellido","maxlength","15",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Tel\xe9fono","type","tel","placeholder","Sin +56 9","maxlength","8",3,"ngModel","ngModelChange","ionInput"],["ionInputEl",""],["labelPlacement","stacked","label","Direcci\xf3n","placeholder","Necesita mayuscula y n\xfameros","maxlength","20",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Correo","type","email","placeholder","Correo","maxlength","30",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Clave","type","password","placeholder","Clave","maxlength","10",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Repita su clave","type","password","placeholder","Repita su clave","maxlength","10",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Pregunta de Seguridad",3,"ngModel","ngModelChange"],["value","pregunta1","selected",""],["value","pregunta2"],["value","pregunta3"],["labelPlacement","stacked","label","Respuesta","placeholder","Respuesta","maxlength","30",3,"ngModel","ngModelChange"],["shape","round",1,"malo",3,"click"],["shape","round",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header",0)(1,"div",1),e._UZ(2,"ion-img",2),e.qZA(),e.TgZ(3,"ion-toolbar",3)(4,"ion-buttons",4)(5,"ion-menu-button",5),e.NdJ("click",function(){return n.abrirSuperior()}),e.qZA()(),e.TgZ(6,"ion-title",6),e.NdJ("click",function(){return n.irHome()}),e._uU(7," Ivan's "),e.qZA()()(),e.TgZ(8,"ion-content",7)(9,"ion-grid")(10,"div")(11,"ion-row")(12,"ion-col")(13,"h1",8),e._uU(14,"Registro"),e.qZA()()()(),e.TgZ(15,"div",9)(16,"ion-row")(17,"ion-col")(18,"ion-input",10),e.NdJ("ngModelChange",function(i){return n.rut=i}),e.qZA()(),e.TgZ(19,"ion-col")(20,"ion-input",11),e.NdJ("ngModelChange",function(i){return n.dvrut=i}),e.qZA()()(),e.TgZ(21,"ion-row")(22,"ion-col")(23,"pre",12),e._uU(24),e.qZA()()(),e.TgZ(25,"ion-row")(26,"ion-col")(27,"ion-input",13),e.NdJ("ngModelChange",function(i){return n.nombre=i}),e.qZA()()(),e.TgZ(28,"ion-row")(29,"ion-col")(30,"pre",12),e._uU(31),e.qZA()()(),e.TgZ(32,"ion-row")(33,"ion-col")(34,"ion-input",14),e.NdJ("ngModelChange",function(i){return n.apellido=i}),e.qZA()()(),e.TgZ(35,"ion-row")(36,"ion-col")(37,"pre",12),e._uU(38),e.qZA()()(),e.TgZ(39,"ion-row")(40,"ion-col")(41,"ion-input",15,16),e.NdJ("ngModelChange",function(i){return n.fono=i})("ionInput",function(i){return n.onInput(i)}),e.qZA()()(),e.TgZ(43,"ion-row")(44,"ion-col")(45,"pre",12),e._uU(46),e.qZA()()(),e.TgZ(47,"ion-row")(48,"ion-col")(49,"ion-input",17),e.NdJ("ngModelChange",function(i){return n.direc=i}),e.qZA()()(),e.TgZ(50,"ion-row")(51,"ion-col")(52,"pre",12),e._uU(53),e.qZA()()(),e.TgZ(54,"ion-row")(55,"ion-col")(56,"ion-input",18),e.NdJ("ngModelChange",function(i){return n.correo=i}),e.qZA()()(),e.TgZ(57,"ion-row")(58,"ion-col")(59,"pre",12),e._uU(60),e.qZA()()(),e.TgZ(61,"ion-row")(62,"ion-col")(63,"ion-input",19),e.NdJ("ngModelChange",function(i){return n.clave=i}),e.qZA()()(),e.TgZ(64,"ion-row")(65,"ion-col")(66,"pre",12),e._uU(67),e.qZA()()(),e.TgZ(68,"ion-row")(69,"ion-col")(70,"ion-input",20),e.NdJ("ngModelChange",function(i){return n.claveRep=i}),e.qZA()()(),e.TgZ(71,"ion-row")(72,"ion-col")(73,"pre",12),e._uU(74),e.qZA()()(),e.TgZ(75,"ion-row")(76,"ion-col")(77,"ion-select",21),e.NdJ("ngModelChange",function(i){return n.pregunta=i}),e.TgZ(78,"ion-select-option",22),e._uU(79,"Nombre de tu mascota"),e.qZA(),e.TgZ(80,"ion-select-option",23),e._uU(81,"Color favorito"),e.qZA(),e.TgZ(82,"ion-select-option",24),e._uU(83,"Lugar de nacimiento"),e.qZA()()()(),e.TgZ(84,"ion-row")(85,"ion-col")(86,"pre",12),e._uU(87),e.qZA()()(),e.TgZ(88,"ion-row")(89,"ion-col")(90,"ion-input",25),e.NdJ("ngModelChange",function(i){return n.respuesta=i}),e.qZA()()(),e.TgZ(91,"ion-row")(92,"ion-col")(93,"pre",12),e._uU(94),e.qZA()()(),e.TgZ(95,"ion-row")(96,"ion-col")(97,"ion-button",26),e.NdJ("click",function(){return n.limpiar()}),e._uU(98," Limpiar "),e.qZA()(),e.TgZ(99,"ion-col")(100,"ion-button",27),e.NdJ("click",function(){return n.envioValido()}),e._uU(101," Confirmar "),e.qZA()()()()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(8),e.Q6J("fullscreen",!0),e.xp6(10),e.Q6J("ngModel",n.rut),e.xp6(2),e.Q6J("ngModel",n.dvrut),e.xp6(4),e.Oqu(n.msjRut),e.xp6(3),e.Q6J("ngModel",n.nombre),e.xp6(4),e.Oqu(n.msjNombre),e.xp6(3),e.Q6J("ngModel",n.apellido),e.xp6(4),e.Oqu(n.msjApellido),e.xp6(3),e.Q6J("ngModel",n.fono),e.xp6(5),e.Oqu(n.msjFono),e.xp6(3),e.Q6J("ngModel",n.direc),e.xp6(4),e.Oqu(n.msjDirec),e.xp6(3),e.Q6J("ngModel",n.correo),e.xp6(4),e.Oqu(n.msjCorreo),e.xp6(3),e.Q6J("ngModel",n.clave),e.xp6(4),e.Oqu(n.msjClave),e.xp6(3),e.Q6J("ngModel",n.claveRep),e.xp6(4),e.Oqu(n.msjRepClave),e.xp6(3),e.Q6J("ngModel",n.pregunta),e.xp6(10),e.Oqu(n.msjPreg),e.xp6(3),e.Q6J("ngModel",n.respuesta),e.xp6(4),e.Oqu(n.msjResp))},dependencies:[c.JJ,c.nD,c.On,r.YG,r.Sm,r.wI,r.W2,r.jY,r.Gu,r.Xz,r.pK,r.fG,r.Nd,r.t9,r.n0,r.wd,r.sr,r.QI,r.j9],styles:[".malo[_ngcontent-%COMP%]{color:#f55}.bueno[_ngcontent-%COMP%]{color:#0f0}"]})}return s})()}];let C=(()=>{class s{static#e=this.\u0275fac=function(o){return new(o||s)};static#t=this.\u0275mod=e.oAB({type:s});static#n=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(b),d.Bz]})}return s})(),v=(()=>{class s{static#e=this.\u0275fac=function(o){return new(o||s)};static#t=this.\u0275mod=e.oAB({type:s});static#n=this.\u0275inj=e.cJS({imports:[m.ez,c.u5,r.Pc,C]})}return s})()}}]);