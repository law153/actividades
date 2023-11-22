"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5949],{5949:(M,h,c)=>{c.r(h),c.d(h,{CarritoPageModule:()=>A});var l=c(6814),u=c(95),a=c(7852),p=c(7168),d=c(5861),t=c(6242),b=c(6506),m=c(5619);let f=(()=>{class r{constructor(){this.detallesSubject=new m.X([]),this.detalles$=this.detallesSubject.asObservable()}actualizarDetalles(o){this.detallesSubject.next(o)}static#t=this.\u0275fac=function(e){return new(e||r)};static#o=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),_=(()=>{class r{constructor(o){this.bd=o,this.nombreProd="",this.imagenProd="",this.precioProd="",this.cantidadProd=0,this.subtotal="",this.iddetalle=0,this.idventa=0,this.idprod=0,this.totalOld=0,this.idUser=0,this.detalles=[],this.detalle={iddetalle:"",cantidad:"",subtotal:"",ventad:"",productod:"",nombreprod:"",precio:"",stock:"",foto:""},this.subtotal2=0,this.flag=!0,this.totalNew=0,this.producto={}}aprobarCambio(){this.flag=!0,this.cantidadValida(),this.flag&&(this.cambiarCantidad(),this.bd.presentAlert("La cantidad se ha cambiado con exito"))}cambiarCantidad(){var o=this;return(0,d.Z)(function*(){console.log("Total viejo: "+o.totalOld),o.subtotal2=parseInt(o.precioProd)*o.cantidadProd,console.log("Subtotal nuevo: "+o.subtotal2),console.log("Subtotal viejo: "+o.subtotal),o.totalNew=o.totalOld-parseInt(o.subtotal)+o.subtotal2,console.log("Total nuevo: "+o.totalNew),yield o.bd.modificarDetalle(o.iddetalle,o.subtotal2,o.cantidadProd,o.idventa),yield o.bd.modificarTotal(o.idventa,o.totalNew)})()}cantidadValida(){this.cantidadProd<=0&&(this.bd.presentAlert("La cantidad definida no es valida"),this.flag=!1),this.cantidadProd>this.producto.stock&&(this.bd.presentAlert("La cantidad definida es mayor al stock disponible"),this.flag=!1)}borrarDetalle(){var o=this;return(0,d.Z)(function*(){o.totalNew=o.totalOld-parseInt(o.subtotal),yield o.bd.eliminarDetalle(o.iddetalle,o.idventa),o.bd.modificarTotal(o.idventa,o.totalNew),o.bd.presentAlert("Se ha borrado el producto de su carrito"),o.bd.buscarDetallesVenta(o.idventa).subscribe(e=>{e.length<=0&&o.bd.modificarEstadoVenta(o.idventa,"Inactivo")})})()}ngOnInit(){var o=this;return(0,d.Z)(function*(){o.idUser=localStorage.getItem("usuario");try{const e=yield o.bd.buscarProducto2(o.idprod);o.producto=e[0]}catch(e){console.error("Error al buscar el producto",e)}})()}static#t=this.\u0275fac=function(e){return new(e||r)(t.Y36(b.N))};static#o=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-prod-carrito"]],inputs:{nombreProd:"nombreProd",imagenProd:"imagenProd",precioProd:"precioProd",cantidadProd:"cantidadProd",subtotal:"subtotal",iddetalle:"iddetalle",idventa:"idventa",idprod:"idprod",totalOld:"totalOld"},decls:19,vars:15,consts:[[1,"producto"],[1,"contenedor-imagen"],["alt","No hay imagen :c",3,"src"],[1,"detalles"],[1,"nom-prod"],[1,"precio-prod"],[1,"cantidad"],["type","number",3,"ngModel","ngModelChange"],[1,"iconos"],["name","checkmark-outline","aria-label","Favorite",3,"click"],["name","trash-outline","aria-label","Favorite",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-row",0)(1,"ion-col")(2,"div",1),t._UZ(3,"ion-img",2),t.qZA()(),t.TgZ(4,"ion-col",3)(5,"h3",4),t._uU(6),t.qZA(),t.TgZ(7,"h3",5),t._uU(8),t.ALo(9,"currency"),t.qZA()(),t.TgZ(10,"ion-col",6)(11,"ion-input",7),t.NdJ("ngModelChange",function(g){return i.cantidadProd=g}),t.qZA()(),t.TgZ(12,"ion-col",8)(13,"ion-icon",9),t.NdJ("click",function(){return i.aprobarCambio()}),t.qZA(),t.TgZ(14,"ion-icon",10),t.NdJ("click",function(){return i.borrarDetalle()}),t.qZA()(),t.TgZ(15,"ion-col",8)(16,"h3",5),t._uU(17),t.ALo(18,"currency"),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("src",i.imagenProd),t.xp6(3),t.Oqu(i.nombreProd),t.xp6(2),t.hij(" ",t.gM2(9,5,i.precioProd,"$",!0,"4.0-0")," "),t.xp6(3),t.Q6J("ngModel",i.cantidadProd),t.xp6(6),t.hij("",t.gM2(18,10,i.subtotal,"$",!0,"4.0-0")," "))},dependencies:[u.JJ,u.On,a.wI,a.gu,a.Xz,a.pK,a.Nd,a.as,l.H9],styles:[".producto[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:2px solid #999}.monto[_ngcontent-%COMP%]{color:#000;text-align:center}.contenedor-imagen[_ngcontent-%COMP%]{width:100px;height:100px;border:2px solid #000}.contenedor-imagen[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%;height:100%}.detalles[_ngcontent-%COMP%]{color:#000;font-size:15px}.cantidad[_ngcontent-%COMP%]{color:#000}.cantidad[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{width:60%;text-align:right}.iconos[_ngcontent-%COMP%]{color:#000;font-size:25px}"]})}return r})();function P(r,s){if(1&r&&t._UZ(0,"app-prod-carrito",14),2&r){const o=s.$implicit,e=t.oxw(2);t.Q6J("nombreProd",o.nombreprod)("precioProd",o.precio)("imagenProd",o.foto)("cantidadProd",o.cantidad)("subtotal",o.subtotal)("iddetalle",o.iddetalle)("idventa",e.carrito.idventa)("idprod",o.productod)("totalOld",e.carrito.total)}}function C(r,s){if(1&r&&(t.TgZ(0,"ion-row")(1,"ion-col",15)(2,"h2"),t._uU(3,"Monto total:"),t.qZA()(),t.TgZ(4,"ion-col",15)(5,"h2"),t._uU(6),t.ALo(7,"currency"),t.qZA()()()),2&r){const o=t.oxw(2);t.xp6(6),t.Oqu(t.gM2(7,1,o.carrito.total,"$",!0,"4.0-0"))}}function v(r,s){if(1&r){const o=t.EpF();t.TgZ(0,"ion-row"),t._UZ(1,"ion-col"),t.TgZ(2,"ion-col",11)(3,"ion-button",5),t.NdJ("click",function(){t.CHM(o);const i=t.oxw(2);return t.KtG(i.Pagar())}),t._uU(4,"Pagar"),t.qZA()(),t._UZ(5,"ion-col"),t.qZA()}}function Z(r,s){if(1&r&&(t.TgZ(0,"div"),t.YNc(1,P,1,9,"app-prod-carrito",13)(2,C,8,6,"ion-row",12)(3,v,6,0,"ion-row",12),t.qZA()),2&r){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.detalles),t.xp6(1),t.Q6J("ngIf","Activo"===o.carrito.estado),t.xp6(1),t.Q6J("ngIf","Activo"===o.carrito.estado)}}const O=[{path:"",component:(()=>{class r{constructor(o,e,i,n,g){this.router=o,this.menuCtrl=e,this.alerta=i,this.bd=n,this.carro=g,this.cantidad="0",this.flag=!0,this.msj="",this.total="",this.detallesSer=[],this.fechaActual=new Date,this.fechaEntrega=new Date(this.fechaActual),this.diasSumar=3,this.stock=0,this.idUser=0,this.idVenta=0,this.carrito={},this.producto=[{codprod:"",nombreprod:"",descripcion:"",precio:"",stock:"",foto:"",unidadmedida:"",categoriap:""}],this.detalles=[{iddetalle:"",cantidad:"",subtotal:"",ventad:"",productod:"",nombreprod:"",precio:"",stock:"",foto:""}],this.hayCarrito=!0,this.idusuario=0}irHomeCli(){this.router.navigate([""])}abrirSuperior(){this.menuCtrl.enable(!0,"superior"),this.menuCtrl.open("superior")}abrirCategorias(){this.menuCtrl.enable(!0,"categorias"),this.menuCtrl.open("categorias")}Pagar(){var o=this;return(0,d.Z)(function*(){o.fechaEntrega.setDate(o.fechaActual.getDate()+o.diasSumar),o.bd.modificarFechaEntrega(o.carrito.idventa,o.fechaEntrega),o.bd.modificarEstadoVenta(o.carrito.idventa,"Comprado");for(let e of o.detalles){o.bd.restarStock(e.productod,e.cantidad);try{const i=yield o.bd.buscarProducto2(e.productod);o.producto=i[0],o.bd.agregarDetalleCompra(o.producto.nombreprod,o.producto.foto,e.cantidad,e.subtotal,e.ventad)}catch(i){console.error("Error al buscar el producto",i)}}yield o.presentAlert("Grac\xedas por su compra"),o.hayCarrito=!1})()}irHistorial(){this.router.navigate(["historial-compra"])}presentAlert(o){var e=this;return(0,d.Z)(function*(){yield(yield e.alerta.create({header:"Atenci\xf3n",subHeader:"Mensaje importante",message:o,buttons:["Vale"]})).present()})()}suscribirObservables(){var o=this;return(0,d.Z)(function*(){o.bd.buscarVentaCarrito3(o.idUser,"Activo"),o.bd.fetchVenta().subscribe(e=>{o.carrito=e[0],o.idVenta=o.carrito.idventa,o.bd.buscarDetallesVenta3(o.carrito.idventa),o.bd.fetchDetallesVenta().subscribe(i=>{o.detalles=i})})})()}ngOnInit(){var o=this;return(0,d.Z)(function*(){o.idUser=localStorage.getItem("usuario"),o.bd.dbState().subscribe(function(){var e=(0,d.Z)(function*(i){if(i)try{(yield o.bd.buscarVentaCarrito2(o.idUser,"Activo")).length>0?(o.hayCarrito=!0,yield o.suscribirObservables()):(o.hayCarrito=!1,o.bd.presentAlert("No hay un carrito activo!"))}catch(n){console.error("Error al buscar el carrito",n)}});return function(i){return e.apply(this,arguments)}}())})()}static#t=this.\u0275fac=function(e){return new(e||r)(t.Y36(p.F0),t.Y36(a._q),t.Y36(a.Br),t.Y36(b.N),t.Y36(f))};static#o=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-carrito"]],decls:26,vars:2,consts:[[1,"cabecera",3,"translucent"],[1,"logo-contenedor"],["src","/assets/logo.png","alt","No hay logo"],["color","paleta",1,"toolbar-c"],["slot","end",1,"boton-guesa"],[3,"click"],[1,"titulo",3,"click"],[1,"categorias"],["fill","clear",3,"click"],[1,"cuerpo"],[1,"nombre-pag"],[1,"contenedor-boton"],[4,"ngIf"],[3,"nombreProd","precioProd","imagenProd","cantidadProd","subtotal","iddetalle","idventa","idprod","totalOld",4,"ngFor","ngForOf"],[3,"nombreProd","precioProd","imagenProd","cantidadProd","subtotal","iddetalle","idventa","idprod","totalOld"],[1,"monto"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header",0)(1,"div",1),t._UZ(2,"ion-img",2),t.qZA(),t.TgZ(3,"ion-toolbar",3)(4,"ion-buttons",4)(5,"ion-menu-button",5),t.NdJ("click",function(){return i.abrirSuperior()}),t.qZA()(),t.TgZ(6,"ion-title",6),t.NdJ("click",function(){return i.irHomeCli()}),t._uU(7," Ivan's "),t.qZA()(),t.TgZ(8,"div",7)(9,"ion-button",8),t.NdJ("click",function(){return i.abrirCategorias()}),t._uU(10,"Categorias"),t.qZA()()(),t.TgZ(11,"ion-content",9)(12,"ion-grid")(13,"ion-row")(14,"ion-col")(15,"h1",10),t._uU(16,"Carrito"),t.qZA()()(),t._UZ(17,"br"),t.TgZ(18,"ion-row")(19,"ion-col",11)(20,"ion-button",5),t.NdJ("click",function(){return i.irHistorial()}),t._uU(21,"Ver historial de compras"),t.qZA()(),t._UZ(22,"ion-col")(23,"ion-col"),t.qZA(),t._UZ(24,"br"),t.YNc(25,Z,4,3,"div",12),t.qZA()()),2&e&&(t.Q6J("translucent",!0),t.xp6(25),t.Q6J("ngIf",!0===i.hayCarrito))},dependencies:[l.sg,l.O5,a.YG,a.Sm,a.wI,a.W2,a.jY,a.Gu,a.Xz,a.fG,a.Nd,a.wd,a.sr,_,l.H9],styles:[".cuerpo[_ngcontent-%COMP%]{--background: #fff}.producto[_ngcontent-%COMP%]{display:flex;align-items:center}.monto[_ngcontent-%COMP%]{color:#000;text-align:center}.contenedor-imagen[_ngcontent-%COMP%]{width:100px;height:100px;border:2px solid #000}.contenedor-imagen[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%;height:100%}.detalles[_ngcontent-%COMP%]{color:#000;font-size:20px}.cantidad[_ngcontent-%COMP%]{color:#000}.cantidad[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{width:60%;text-align:right}.iconos[_ngcontent-%COMP%]{color:#000;font-size:25px}.contenedor-boton[_ngcontent-%COMP%]{height:70px;width:220px;display:flex;align-items:center}.contenedor-boton[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;height:100%;--background: #cc0;--color: #000;font-size:17px;--border-radius: 100px}"]})}return r})()}];let y=(()=>{class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#o=this.\u0275mod=t.oAB({type:r});static#e=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(O),p.Bz]})}return r})(),A=(()=>{class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#o=this.\u0275mod=t.oAB({type:r});static#e=this.\u0275inj=t.cJS({imports:[l.ez,u.u5,a.Pc,y]})}return r})()}}]);