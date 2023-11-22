"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9987],{9987:(P,d,l)=>{l.r(d),l.d(d,{AgregarProdPageModule:()=>b});var u=l(6814),c=l(95),t=l(7852),g=l(7168),h=l(5861),e=l(6242),m=l(6506),p=l(6370);function f(i,M){if(1&i&&(e.TgZ(0,"ion-row")(1,"ion-col")(2,"div",36),e._UZ(3,"ion-img",37),e.qZA()()()),2&i){const n=e.oxw();e.xp6(3),e.Q6J("src",n.foto)}}const Z=[{path:"",component:(()=>{class i{constructor(n,a,o,s,r){this.router=n,this.alerta=a,this.menuCtrl=o,this.bd=s,this.camara=r,this.msjNombre="",this.msjDesc="",this.msjPrecio="",this.msjStock="",this.msjMedida="",this.msjCate="",this.msjFoto="",this.nombre="",this.desc="",this.precio="",this.stock=1,this.medida="",this.categoria="",this.flag=!0,this.msj="",this.productos=[{nombreProd:"",descripcion:"",precio:"",stock:"",foto:"",unidadMedida:"",categoriaP:""}]}abrirSuperior(){this.menuCtrl.enable(!0,"superior"),this.menuCtrl.open("superior")}abrirCategorias(){this.menuCtrl.enable(!0,"categorias"),this.menuCtrl.open("categorias")}irHomeAdm(){this.router.navigate(["home-adm"])}envioValido(){this.flag=!0,this.nombreValido(),this.descValida(),this.precioValido(),this.stockValido(),this.medidaValido(),this.categoriaValido(),this.fotoValida(),!0===this.flag&&(this.agregar(),this.bd.presentAlert("Producto agregado correctamente"),this.router.navigate(["home-adm"]))}nombreValido(){this.msjNombre="",0===this.nombre.length?(this.flag=!1,this.msjNombre="Debe llenar este campo"):(this.primerCaracterEsMayus(this.nombre)||(this.flag=!1,this.msjNombre+="La primera letra del nombre debe ser\n mayuscula\n"),this.nombre.length<=9&&(this.flag=!1,this.msjNombre+="La longitud del nombre debe ser \nmayor a 10 caracteres\n"))}descValida(){this.msjDesc="",0===this.desc.length?(this.flag=!1,this.msjDesc="Debe llenar este campo"):this.primerCaracterEsMayus(this.desc)?this.desc.length<=19&&(this.flag=!1,this.msjDesc+="La longitud de la descripci\xf3n debe ser \nmayor a 20 caracteres\n"):(this.flag=!1,this.msjDesc+="La primera letra de la descripci\xf3n debe ser\n mayuscula\n")}precioValido(){this.msjPrecio="",0===this.precio.length?(this.flag=!1,this.msjPrecio="Debe llenar este campo"):this.SoloNumeros(this.precio)?parseInt(this.precio)<=0&&(this.flag=!1,this.msjPrecio+="El precio no puede ser igual o menor a 0\n"):(this.flag=!1,this.msjPrecio+="El precio debe estar compuesto solo de n\xfameros\n")}stockValido(){this.msjStock="",0===String(this.stock).length?(this.flag=!1,this.msjStock="Debe llenar este campo"):this.stock<=0&&(this.flag=!1,this.msjStock+="El stock no puede ser igual o menor a 0\n")}medidaValido(){this.msjMedida="",0===this.medida.length&&(this.flag=!1,this.msjMedida+="Debe seleccionar una unidad de medida\n")}categoriaValido(){this.msjCate="",0===this.medida.length&&(this.flag=!1,this.msjCate+="Debe seleccionar una categor\xeda\n")}fotoValida(){this.msjFoto="",void 0===this.foto&&(this.flag=!1,this.msjFoto+="Debe seleccionar una imagen\n")}capturarImagen(){var n=this;return(0,h.Z)(function*(){n.foto=yield n.camara.takePicture()})()}primerCaracterEsMayus(n){const a=n.charAt(0);return/[A-Z]/.test(a)}SoloNumeros(n){return/^[0-9]+$/.test(n)}presentAlert(n){var a=this;return(0,h.Z)(function*(){yield(yield a.alerta.create({header:"Alerta",subHeader:"Mensaje importante",message:n,buttons:["Vale"]})).present()})()}ngOnInit(){}agregar(){this.bd.agregarProducto(this.nombre,this.desc,parseInt(this.precio),this.stock,this.foto,this.medida,parseInt(this.categoria))}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(g.F0),e.Y36(t.Br),e.Y36(t._q),e.Y36(m.N),e.Y36(p.Y))};static#o=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-agregar-prod"]],decls:101,vars:16,consts:[[1,"cabecera",3,"translucent"],[1,"logo-contenedor"],["src","/assets/logo.png","alt","No hay logo"],["color","paleta",1,"toolbar-c"],["slot","end",1,"boton-guesa"],[3,"click"],[1,"titulo",3,"click"],[1,"categorias"],["fill","clear",3,"click"],[1,"content-fondo",3,"fullscreen"],[1,"nombre-pag"],[4,"ngIf"],[2,"text-align","center","margin","auto"],[1,"boton-subir",2,"text-align","center",3,"click"],["name","cloud-upload"],[1,"validacion"],[1,"contenedor-form"],["labelPlacement","stacked","label","Nombre","type","text","placeholder","Nombre","minheight","10","maxheigth","30",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Categoria",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["value","7"],["labelPlacement","stacked","label","Descripcion","type","text","placeholder","Descripcion","minlength","20","maxlength","200",2,"text-align","center",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Precio","type","text","placeholder","Precio","minlength","4",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Stock","type","number","placeholder","Stock","minlength","1","maxlength","6",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Unidad Medida",3,"ngModel","ngModelChange"],["value","unidad1"],["value","unidad2"],["value","unidad3"],["value","unidad4"],["shape","round"],["shape","round",3,"click"],[1,"contenedor-imagen"],["alt","No hay imagen :C",3,"src"]],template:function(a,o){1&a&&(e.TgZ(0,"ion-header",0)(1,"div",1),e._UZ(2,"ion-img",2),e.qZA(),e.TgZ(3,"ion-toolbar",3)(4,"ion-buttons",4)(5,"ion-menu-button",5),e.NdJ("click",function(){return o.abrirSuperior()}),e.qZA()(),e.TgZ(6,"ion-title",6),e.NdJ("click",function(){return o.irHomeAdm()}),e._uU(7," Ivan's "),e.qZA()(),e.TgZ(8,"div",7)(9,"ion-button",8),e.NdJ("click",function(){return o.abrirCategorias()}),e._uU(10,"Categorias"),e.qZA()()(),e.TgZ(11,"ion-content",9)(12,"ion-grid")(13,"div")(14,"ion-row")(15,"ion-col")(16,"h1",10),e._uU(17,"Agregar Productos"),e.qZA()()()(),e.YNc(18,f,4,1,"ion-row",11),e.TgZ(19,"ion-row"),e._UZ(20,"ion-col"),e.TgZ(21,"ion-col",12)(22,"ion-button",13),e.NdJ("click",function(){return o.capturarImagen()}),e._UZ(23,"ion-icon",14),e._uU(24,"Subir imagen "),e.qZA()(),e._UZ(25,"ion-col"),e.qZA(),e.TgZ(26,"ion-row")(27,"ion-col")(28,"pre",15),e._uU(29),e.qZA()()(),e.TgZ(30,"div",16)(31,"ion-row")(32,"ion-col")(33,"ion-input",17),e.NdJ("ngModelChange",function(r){return o.nombre=r}),e.qZA()()(),e.TgZ(34,"ion-row")(35,"ion-col")(36,"pre",15),e._uU(37),e.qZA()()(),e.TgZ(38,"ion-row")(39,"ion-col")(40,"ion-select",18),e.NdJ("ngModelChange",function(r){return o.categoria=r}),e.TgZ(41,"ion-select-option",19),e._uU(42,"Herramientas"),e.qZA(),e.TgZ(43,"ion-select-option",20),e._uU(44,"Electricidad"),e.qZA(),e.TgZ(45,"ion-select-option",21),e._uU(46,"Fijaciones"),e.qZA(),e.TgZ(47,"ion-select-option",22),e._uU(48,"Seguridad"),e.qZA(),e.TgZ(49,"ion-select-option",23),e._uU(50,"Ropa"),e.qZA(),e.TgZ(51,"ion-select-option",24),e._uU(52,"Gasfiteria"),e.qZA(),e.TgZ(53,"ion-select-option",25),e._uU(54,"Kits"),e.qZA()()()(),e.TgZ(55,"ion-row")(56,"ion-col")(57,"pre",15),e._uU(58),e.qZA()()(),e.TgZ(59,"ion-row")(60,"ion-col")(61,"ion-textarea",26),e.NdJ("ngModelChange",function(r){return o.desc=r}),e.qZA()()(),e.TgZ(62,"ion-row")(63,"ion-col")(64,"pre",15),e._uU(65),e.qZA()()(),e.TgZ(66,"ion-row")(67,"ion-col")(68,"ion-input",27),e.NdJ("ngModelChange",function(r){return o.precio=r}),e.qZA()()(),e.TgZ(69,"ion-row")(70,"ion-col")(71,"pre",15),e._uU(72),e.qZA()()(),e.TgZ(73,"ion-row")(74,"ion-col")(75,"ion-input",28),e.NdJ("ngModelChange",function(r){return o.stock=r}),e.qZA()(),e.TgZ(76,"ion-col")(77,"ion-select",29),e.NdJ("ngModelChange",function(r){return o.medida=r}),e.TgZ(78,"ion-select-option",30),e._uU(79,"Por unidad"),e.qZA(),e.TgZ(80,"ion-select-option",31),e._uU(81,"Por par"),e.qZA(),e.TgZ(82,"ion-select-option",32),e._uU(83,"Por metro"),e.qZA(),e.TgZ(84,"ion-select-option",33),e._uU(85,"Por docena"),e.qZA()()()(),e.TgZ(86,"ion-row")(87,"ion-col")(88,"pre",15),e._uU(89),e.qZA()()(),e.TgZ(90,"ion-row")(91,"ion-col")(92,"pre",15),e._uU(93),e.qZA()()(),e.TgZ(94,"ion-row")(95,"ion-col")(96,"ion-button",34),e._uU(97," Limpiar "),e.qZA()(),e.TgZ(98,"ion-col")(99,"ion-button",35),e.NdJ("click",function(){return o.envioValido()}),e._uU(100," Agregar "),e.qZA()()()()()()),2&a&&(e.Q6J("translucent",!0),e.xp6(11),e.Q6J("fullscreen",!0),e.xp6(7),e.Q6J("ngIf",void 0!==o.foto),e.xp6(11),e.Oqu(o.msjFoto),e.xp6(4),e.Q6J("ngModel",o.nombre),e.xp6(4),e.Oqu(o.msjNombre),e.xp6(3),e.Q6J("ngModel",o.categoria),e.xp6(18),e.Oqu(o.msjCate),e.xp6(3),e.Q6J("ngModel",o.desc),e.xp6(4),e.Oqu(o.msjDesc),e.xp6(3),e.Q6J("ngModel",o.precio),e.xp6(4),e.Oqu(o.msjPrecio),e.xp6(3),e.Q6J("ngModel",o.stock),e.xp6(2),e.Q6J("ngModel",o.medida),e.xp6(12),e.Oqu(o.msjMedida),e.xp6(4),e.Oqu(o.msjStock))},dependencies:[u.O5,c.JJ,c.wO,c.nD,c.On,t.YG,t.Sm,t.wI,t.W2,t.jY,t.Gu,t.gu,t.Xz,t.pK,t.fG,t.Nd,t.t9,t.n0,t.g2,t.wd,t.sr,t.as,t.QI,t.j9],styles:[".contenedor-form[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{font-size:21px;font-weight:700;height:85%;width:100%;background:#fff;border:2px solid #000;border-radius:7px;text-align:center}.contenedor-imagen[_ngcontent-%COMP%]{width:250px;height:250px;text-align:center;margin:auto}.contenedor-imagen[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%;height:100%;border:2px solid #000}"]})}return i})()}];let _=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#o=this.\u0275mod=e.oAB({type:i});static#t=this.\u0275inj=e.cJS({imports:[g.Bz.forChild(Z),g.Bz]})}return i})(),b=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#o=this.\u0275mod=e.oAB({type:i});static#t=this.\u0275inj=e.cJS({imports:[u.ez,c.u5,t.Pc,_]})}return i})()}}]);