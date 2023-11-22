"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8885],{6854:(w,L,l)=>{l.d(L,{I:()=>a,T:()=>m});var v=l(5861),g=l(8177);class a{constructor(f){this.southwest=f.southwest,this.center=f.center,this.northeast=f.northeast}contains(f){var d=this;return(0,v.Z)(function*(){return(yield g.S.mapBoundsContains({bounds:d,point:f})).contains})()}extend(f){var d=this;return(0,v.Z)(function*(){const r=yield g.S.mapBoundsExtend({bounds:d,point:f});return d.southwest=r.bounds.southwest,d.center=r.bounds.center,d.northeast=r.bounds.northeast,d})()}}var m=function(i){return i.Normal="Normal",i.Hybrid="Hybrid",i.Satellite="Satellite",i.Terrain="Terrain",i.None="None",i}(m||{})},8177:(w,L,l)=>{l.d(L,{S:()=>g});const g=(0,l(2726).fo)("CapacitorGoogleMaps",{web:()=>l.e(4059).then(l.bind(l,4059)).then(a=>new a.CapacitorGoogleMapsWeb)});g.addListener("isMapInFocus",a=>{var m;const d=document.elementFromPoint(a.x,a.y),Z=(null===(m=d?.dataset)||void 0===m?void 0:m.internalId)===a.mapId;g.dispatchMapEvent({id:a.mapId,focus:Z})})},8885:(w,L,l)=>{l.r(L),l.d(L,{ContactanosPageModule:()=>B});var v=l(6814),g=l(95),a=l(7852),m=l(7168),i=l(5861),f=l(6854),d=l(2726),r=l(8177);class Z extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="","ios"==d.dV.getPlatform()){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const n=document.createElement("div");n.style.height="200%",this.appendChild(n)}}}customElements.define("capacitor-google-map",Z);class b{constructor(n){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=n}static create(n,e){return(0,i.Z)(function*(){const o=new b(n.id);if(!n.element)throw new Error("container element is required");void 0===n.config.androidLiteMode&&(n.config.androidLiteMode=!1),o.element=n.element,o.element.dataset.internalId=n.id;const s=yield b.getElementBounds(n.element);if(n.config.width=s.width,n.config.height=s.height,n.config.x=s.x,n.config.y=s.y,n.config.devicePixelRatio=window.devicePixelRatio,"android"==d.dV.getPlatform()&&o.initScrolling(),d.dV.isNativePlatform()){n.element={};const c=()=>{var C,M;const S=null!==(M=null===(C=o.element)||void 0===C?void 0:C.getBoundingClientRect())&&void 0!==M?M:{};return{x:S.x,y:S.y,width:S.width,height:S.height}},h=()=>{r.S.onDisplay({id:o.id,mapBounds:c()})},y=()=>{r.S.onResize({id:o.id,mapBounds:c()})},p=o.element.closest(".ion-page");"ios"===d.dV.getPlatform()&&p&&(p.addEventListener("ionViewWillEnter",()=>{setTimeout(()=>{h()},100)}),p.addEventListener("ionViewDidEnter",()=>{setTimeout(()=>{h()},100)}));const k={width:s.width,height:s.height,isHidden:!1};o.resizeObserver=new ResizeObserver(()=>{if(null!=o.element){const C=o.element.getBoundingClientRect(),M=0===C.width&&0===C.height;M||(k.isHidden?"ios"===d.dV.getPlatform()&&!p&&h():(k.width!==C.width||k.height!==C.height)&&y()),k.width=C.width,k.height=C.height,k.isHidden=M}}),o.resizeObserver.observe(o.element)}if(yield new Promise((c,h)=>{setTimeout((0,i.Z)(function*(){try{yield r.S.create(n),c(void 0)}catch(y){h(y)}}),200)}),e){const c=yield r.S.addListener("onMapReady",h=>{h.mapId==o.id&&(e(h),c.remove())})}return o})()}static getElementBounds(n){return(0,i.Z)(function*(){return new Promise(e=>{let o=n.getBoundingClientRect();if(0==o.width){let s=0;const c=setInterval(function(){0==o.width&&s<30?(o=n.getBoundingClientRect(),s++):(30==s&&console.warn("Map size could not be determined"),clearInterval(c),e(o))},100)}else e(o)})})()}enableTouch(){var n=this;return(0,i.Z)(function*(){return r.S.enableTouch({id:n.id})})()}disableTouch(){var n=this;return(0,i.Z)(function*(){return r.S.disableTouch({id:n.id})})()}enableClustering(n){var e=this;return(0,i.Z)(function*(){return r.S.enableClustering({id:e.id,minClusterSize:n})})()}disableClustering(){var n=this;return(0,i.Z)(function*(){return r.S.disableClustering({id:n.id})})()}addMarker(n){var e=this;return(0,i.Z)(function*(){return(yield r.S.addMarker({id:e.id,marker:n})).id})()}addMarkers(n){var e=this;return(0,i.Z)(function*(){return(yield r.S.addMarkers({id:e.id,markers:n})).ids})()}removeMarker(n){var e=this;return(0,i.Z)(function*(){return r.S.removeMarker({id:e.id,markerId:n})})()}removeMarkers(n){var e=this;return(0,i.Z)(function*(){return r.S.removeMarkers({id:e.id,markerIds:n})})()}addPolygons(n){var e=this;return(0,i.Z)(function*(){return(yield r.S.addPolygons({id:e.id,polygons:n})).ids})()}addPolylines(n){var e=this;return(0,i.Z)(function*(){return(yield r.S.addPolylines({id:e.id,polylines:n})).ids})()}removePolygons(n){var e=this;return(0,i.Z)(function*(){return r.S.removePolygons({id:e.id,polygonIds:n})})()}addCircles(n){var e=this;return(0,i.Z)(function*(){return(yield r.S.addCircles({id:e.id,circles:n})).ids})()}removeCircles(n){var e=this;return(0,i.Z)(function*(){return r.S.removeCircles({id:e.id,circleIds:n})})()}removePolylines(n){var e=this;return(0,i.Z)(function*(){return r.S.removePolylines({id:e.id,polylineIds:n})})()}destroy(){var n=this;return(0,i.Z)(function*(){var e;return"android"==d.dV.getPlatform()&&n.disableScrolling(),d.dV.isNativePlatform()&&(null===(e=n.resizeObserver)||void 0===e||e.disconnect()),n.removeAllMapListeners(),r.S.destroy({id:n.id})})()}setCamera(n){var e=this;return(0,i.Z)(function*(){return r.S.setCamera({id:e.id,config:n})})()}getMapType(){var n=this;return(0,i.Z)(function*(){const{type:e}=yield r.S.getMapType({id:n.id});return f.T[e]})()}setMapType(n){var e=this;return(0,i.Z)(function*(){return r.S.setMapType({id:e.id,mapType:n})})()}enableIndoorMaps(n){var e=this;return(0,i.Z)(function*(){return r.S.enableIndoorMaps({id:e.id,enabled:n})})()}enableTrafficLayer(n){var e=this;return(0,i.Z)(function*(){return r.S.enableTrafficLayer({id:e.id,enabled:n})})()}enableAccessibilityElements(n){var e=this;return(0,i.Z)(function*(){return r.S.enableAccessibilityElements({id:e.id,enabled:n})})()}enableCurrentLocation(n){var e=this;return(0,i.Z)(function*(){return r.S.enableCurrentLocation({id:e.id,enabled:n})})()}setPadding(n){var e=this;return(0,i.Z)(function*(){return r.S.setPadding({id:e.id,padding:n})})()}getMapBounds(){var n=this;return(0,i.Z)(function*(){return new f.I(yield r.S.getMapBounds({id:n.id}))})()}fitBounds(n,e){var o=this;return(0,i.Z)(function*(){return r.S.fitBounds({id:o.id,bounds:n,padding:e})})()}initScrolling(){const n=document.getElementsByTagName("ion-content");for(let e=0;e<n.length;e++)n[e].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",()=>{setTimeout(this.updateMapBounds,500)}):window.addEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,500)})}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",()=>{setTimeout(this.updateMapBounds,1e3)}):window.removeEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,1e3)})}updateMapBounds(){if(this.element){const n=this.element.getBoundingClientRect();r.S.onScroll({id:this.id,mapBounds:{x:n.x,y:n.y,width:n.width,height:n.height}})}}setOnCameraIdleListener(n){var e=this;return(0,i.Z)(function*(){e.onCameraIdleListener&&e.onCameraIdleListener.remove(),e.onCameraIdleListener=n?yield r.S.addListener("onCameraIdle",e.generateCallback(n)):void 0})()}setOnBoundsChangedListener(n){var e=this;return(0,i.Z)(function*(){e.onBoundsChangedListener&&e.onBoundsChangedListener.remove(),e.onBoundsChangedListener=n?yield r.S.addListener("onBoundsChanged",e.generateCallback(n)):void 0})()}setOnCameraMoveStartedListener(n){var e=this;return(0,i.Z)(function*(){e.onCameraMoveStartedListener&&e.onCameraMoveStartedListener.remove(),e.onCameraMoveStartedListener=n?yield r.S.addListener("onCameraMoveStarted",e.generateCallback(n)):void 0})()}setOnClusterClickListener(n){var e=this;return(0,i.Z)(function*(){e.onClusterClickListener&&e.onClusterClickListener.remove(),e.onClusterClickListener=n?yield r.S.addListener("onClusterClick",e.generateCallback(n)):void 0})()}setOnClusterInfoWindowClickListener(n){var e=this;return(0,i.Z)(function*(){e.onClusterInfoWindowClickListener&&e.onClusterInfoWindowClickListener.remove(),e.onClusterInfoWindowClickListener=n?yield r.S.addListener("onClusterInfoWindowClick",e.generateCallback(n)):void 0})()}setOnInfoWindowClickListener(n){var e=this;return(0,i.Z)(function*(){e.onInfoWindowClickListener&&e.onInfoWindowClickListener.remove(),e.onInfoWindowClickListener=n?yield r.S.addListener("onInfoWindowClick",e.generateCallback(n)):void 0})()}setOnMapClickListener(n){var e=this;return(0,i.Z)(function*(){e.onMapClickListener&&e.onMapClickListener.remove(),e.onMapClickListener=n?yield r.S.addListener("onMapClick",e.generateCallback(n)):void 0})()}setOnPolygonClickListener(n){var e=this;return(0,i.Z)(function*(){e.onPolygonClickListener&&e.onPolygonClickListener.remove(),e.onPolygonClickListener=n?yield r.S.addListener("onPolygonClick",e.generateCallback(n)):void 0})()}setOnCircleClickListener(n){var e=this;return(0,i.Z)(function*(){e.onCircleClickListener&&e.onCircleClickListener.remove(),e.onCircleClickListener=n?yield r.S.addListener("onCircleClick",e.generateCallback(n)):void 0})()}setOnMarkerClickListener(n){var e=this;return(0,i.Z)(function*(){e.onMarkerClickListener&&e.onMarkerClickListener.remove(),e.onMarkerClickListener=n?yield r.S.addListener("onMarkerClick",e.generateCallback(n)):void 0})()}setOnPolylineClickListener(n){var e=this;return(0,i.Z)(function*(){e.onPolylineClickListener&&e.onPolylineClickListener.remove(),e.onPolylineClickListener=n?yield r.S.addListener("onPolylineClick",e.generateCallback(n)):void 0})()}setOnMarkerDragStartListener(n){var e=this;return(0,i.Z)(function*(){e.onMarkerDragStartListener&&e.onMarkerDragStartListener.remove(),e.onMarkerDragStartListener=n?yield r.S.addListener("onMarkerDragStart",e.generateCallback(n)):void 0})()}setOnMarkerDragListener(n){var e=this;return(0,i.Z)(function*(){e.onMarkerDragListener&&e.onMarkerDragListener.remove(),e.onMarkerDragListener=n?yield r.S.addListener("onMarkerDrag",e.generateCallback(n)):void 0})()}setOnMarkerDragEndListener(n){var e=this;return(0,i.Z)(function*(){e.onMarkerDragEndListener&&e.onMarkerDragEndListener.remove(),e.onMarkerDragEndListener=n?yield r.S.addListener("onMarkerDragEnd",e.generateCallback(n)):void 0})()}setOnMyLocationButtonClickListener(n){var e=this;return(0,i.Z)(function*(){e.onMyLocationButtonClickListener&&e.onMyLocationButtonClickListener.remove(),e.onMyLocationButtonClickListener=n?yield r.S.addListener("onMyLocationButtonClick",e.generateCallback(n)):void 0})()}setOnMyLocationClickListener(n){var e=this;return(0,i.Z)(function*(){e.onMyLocationClickListener&&e.onMyLocationClickListener.remove(),e.onMyLocationClickListener=n?yield r.S.addListener("onMyLocationClick",e.generateCallback(n)):void 0})()}removeAllMapListeners(){var n=this;return(0,i.Z)(function*(){n.onBoundsChangedListener&&(n.onBoundsChangedListener.remove(),n.onBoundsChangedListener=void 0),n.onCameraIdleListener&&(n.onCameraIdleListener.remove(),n.onCameraIdleListener=void 0),n.onCameraMoveStartedListener&&(n.onCameraMoveStartedListener.remove(),n.onCameraMoveStartedListener=void 0),n.onClusterClickListener&&(n.onClusterClickListener.remove(),n.onClusterClickListener=void 0),n.onClusterInfoWindowClickListener&&(n.onClusterInfoWindowClickListener.remove(),n.onClusterInfoWindowClickListener=void 0),n.onInfoWindowClickListener&&(n.onInfoWindowClickListener.remove(),n.onInfoWindowClickListener=void 0),n.onMapClickListener&&(n.onMapClickListener.remove(),n.onMapClickListener=void 0),n.onPolylineClickListener&&(n.onPolylineClickListener.remove(),n.onPolylineClickListener=void 0),n.onMarkerClickListener&&(n.onMarkerClickListener.remove(),n.onMarkerClickListener=void 0),n.onPolygonClickListener&&(n.onPolygonClickListener.remove(),n.onPolygonClickListener=void 0),n.onCircleClickListener&&(n.onCircleClickListener.remove(),n.onCircleClickListener=void 0),n.onMarkerDragStartListener&&(n.onMarkerDragStartListener.remove(),n.onMarkerDragStartListener=void 0),n.onMarkerDragListener&&(n.onMarkerDragListener.remove(),n.onMarkerDragListener=void 0),n.onMarkerDragEndListener&&(n.onMarkerDragEndListener.remove(),n.onMarkerDragEndListener=void 0),n.onMyLocationButtonClickListener&&(n.onMyLocationButtonClickListener.remove(),n.onMyLocationButtonClickListener=void 0),n.onMyLocationClickListener&&(n.onMyLocationClickListener.remove(),n.onMyLocationClickListener=void 0)})()}generateCallback(n){const e=this.id;return o=>{o.mapId==e&&n(o)}}}const P=(0,d.fo)("Geolocation",{web:()=>l.e(579).then(l.bind(l,579)).then(u=>new u.GeolocationWeb)});var t=l(6242),_=l(6506);const I=[{path:"",component:(()=>{class u{constructor(e,o,s,c){this.menuCtrl=e,this.router=o,this.alerta=s,this.bd=c,this.msjNombre="",this.msjAsunto="",this.msjCuerpo="",this.nombre="",this.asunto="",this.cuerpo="",this.msj="",this.flag=!0,this.apiKey="AIzaSyDJTdmms9SBC4FoA-p-SzALWmeUReSf4IY",this.mapRef=null,this.latitud=0,this.longitud=0,this.latiDuoc=-33.36329660178706,this.longiDuoc=-70.75316140662984}irHome(){this.router.navigate([""])}abrirSuperior(){this.menuCtrl.enable(!0,"superior"),this.menuCtrl.open("superior")}abrirCategorias(){this.menuCtrl.enable(!0,"categorias"),this.menuCtrl.open("categorias")}limpiar(){this.nombre="",this.asunto="",this.cuerpo=""}obtenerUbicacion(){var e=this;return(0,i.Z)(function*(){const o=yield P.getCurrentPosition();e.latitud=o.coords.latitude,e.longitud=o.coords.longitude})()}envioValido(){this.flag=!0,this.nombreValido(),this.asuntoValido(),this.cuerpoValido(),!0===this.flag&&this.agregar()}nombreValido(){this.msjNombre="",this.nombre.length<=1&&(this.flag=!1,this.msjNombre+="El nombre debe tener al menos dos car\xe1cteres\n"),!0===this.contieneCaracterEspecial(this.nombre)&&(this.flag=!1,this.msjNombre+="Un nombre no contiene car\xe1cteres especiales\n"),!0===this.contieneNumero(this.nombre)&&(this.flag=!1,this.msjNombre+="Un nombre no contiene n\xfameros\n")}asuntoValido(){this.msjAsunto="",this.asunto.length<=10&&(this.flag=!1,this.msjAsunto="El asunto debe tener al menos 10 caracteres")}cuerpoValido(){this.msjCuerpo="",this.cuerpo.length<=10&&(this.flag=!1,this.msjCuerpo="El cuerpo debe tener al menos 10 caracteres")}agregar(){this.bd.agregarConsulta(this.nombre,this.asunto,this.cuerpo),this.bd.presentAlert("Consulta enviada con exito"),this.limpiar()}contieneCaracterEspecial(e){return/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(e)}contieneNumero(e){return/\d/.test(e)}primerCaracterEsMayus(e){const o=e.charAt(0);return/[A-Z]/.test(o)}presentAlert(e){var o=this;return(0,i.Z)(function*(){yield(yield o.alerta.create({header:"Atenci\xf3n",subHeader:"",message:e,buttons:["Vale"]})).present()})()}ngOnInit(){}ngAfterViewInit(){var e=this;return(0,i.Z)(function*(){yield e.obtenerUbicacion(),e.mapRef=document.getElementById("map"),e.mapRef?e.inicializarMapa():console.error("Elemento del mapa no encontrado")})()}inicializarMapa(){var e=this;return(0,i.Z)(function*(){if(e.mapRef){const h=b.create({id:"my-map",element:e.mapRef,apiKey:"AIzaSyDJTdmms9SBC4FoA-p-SzALWmeUReSf4IY",config:{center:{lat:e.latitud,lng:e.longitud},zoom:12}}),y=[{path:[{lat:e.latitud,lng:e.longitud},{lat:e.latiDuoc,lng:e.longiDuoc}],strokeColor:"#55aa58",strokeWeight:5,geodesic:!0}],p={coordinate:{lat:e.latiDuoc,lng:e.longiDuoc},title:"Tienda",snippet:"Sede de Ivan's"};(yield h).addMarker(p),(yield h).addPolylines(y)}})()}static#e=this.\u0275fac=function(o){return new(o||u)(t.Y36(a._q),t.Y36(m.F0),t.Y36(a.Br),t.Y36(_.N))};static#n=this.\u0275cmp=t.Xpm({type:u,selectors:[["app-contactanos"]],decls:59,vars:8,consts:[[1,"cabecera",3,"translucent"],[1,"logo-contenedor"],["src","/assets/logo.png","alt","No hay logo"],["color","paleta",1,"toolbar-c"],["slot","end",1,"boton-guesa"],[3,"click"],[1,"titulo",3,"click"],[1,"content-fondo",3,"fullscreen"],[1,"nombre-pag"],[1,"contenedor-labels"],[1,"contenedor-form"],["labelPlacement","stacked","label","Nombre","placeholder","Nombre","minlength","2","maxlength","15",1,"ion-input-psl",3,"ngModel","ngModelChange"],[1,"validacion"],["labelPlacement","stacked","label","Asunto","placeholder","Asunto","minlength","10","maxlength","50",3,"ngModel","ngModelChange"],["labelPlacement","stacked","label","Mensaje","placeholder","Su mensaje","minlength","10","maxlength","300",3,"ngModel","ngModelChange"],["shape","round",3,"click"],["id","map"]],template:function(o,s){1&o&&(t.TgZ(0,"ion-header",0)(1,"div",1),t._UZ(2,"ion-img",2),t.qZA(),t.TgZ(3,"ion-toolbar",3)(4,"ion-buttons",4)(5,"ion-menu-button",5),t.NdJ("click",function(){return s.abrirSuperior()}),t.qZA()(),t.TgZ(6,"ion-title",6),t.NdJ("click",function(){return s.irHome()}),t._uU(7," Ivan's "),t.qZA()()(),t.TgZ(8,"ion-content",7)(9,"ion-grid")(10,"div")(11,"ion-row")(12,"ion-col")(13,"h1",8),t._uU(14,"Contactanos"),t.qZA()()()(),t._UZ(15,"br"),t.TgZ(16,"div",9)(17,"ion-row")(18,"ion-col")(19,"ion-label"),t._uU(20,"Telefono: +56 9 2950 5843"),t.qZA()()(),t.TgZ(21,"ion-row")(22,"ion-col")(23,"ion-label"),t._uU(24,"E-mail: serviciocliente@ivansbusiness.cl"),t.qZA()()()(),t.TgZ(25,"div",10)(26,"ion-row")(27,"ion-col")(28,"ion-input",11),t.NdJ("ngModelChange",function(h){return s.nombre=h}),t.qZA()()(),t.TgZ(29,"ion-row")(30,"ion-col")(31,"pre",12),t._uU(32),t.qZA()()(),t.TgZ(33,"ion-row")(34,"ion-col")(35,"ion-input",13),t.NdJ("ngModelChange",function(h){return s.asunto=h}),t.qZA()()(),t.TgZ(36,"ion-row")(37,"ion-col")(38,"pre",12),t._uU(39),t.qZA()()(),t.TgZ(40,"ion-row")(41,"ion-col")(42,"ion-textarea",14),t.NdJ("ngModelChange",function(h){return s.cuerpo=h}),t.qZA()()(),t.TgZ(43,"ion-row")(44,"ion-col")(45,"pre",12),t._uU(46),t.qZA()()(),t.TgZ(47,"ion-row")(48,"ion-col")(49,"ion-button",15),t.NdJ("click",function(){return s.limpiar()}),t._uU(50," Limpiar "),t.qZA()(),t.TgZ(51,"ion-col")(52,"ion-button",15),t.NdJ("click",function(){return s.envioValido()}),t._uU(53," Enviar "),t.qZA()()()(),t.TgZ(54,"ion-row"),t._UZ(55,"ion-col"),t.TgZ(56,"ion-col"),t._UZ(57,"capacitor-google-map",16),t.qZA(),t._UZ(58,"ion-col"),t.qZA()()()),2&o&&(t.Q6J("translucent",!0),t.xp6(8),t.Q6J("fullscreen",!0),t.xp6(20),t.Q6J("ngModel",s.nombre),t.xp6(4),t.Oqu(s.msjNombre),t.xp6(3),t.Q6J("ngModel",s.asunto),t.xp6(4),t.Oqu(s.msjAsunto),t.xp6(3),t.Q6J("ngModel",s.cuerpo),t.xp6(4),t.Oqu(s.msjCuerpo))},dependencies:[g.JJ,g.wO,g.nD,g.On,a.YG,a.Sm,a.wI,a.W2,a.jY,a.Gu,a.Xz,a.pK,a.Q$,a.fG,a.Nd,a.g2,a.wd,a.sr,a.j9],styles:[".contenedor-labels[_ngcontent-%COMP%]{color:#000;background:#cc0;border:2px solid #000;border-radius:7px;align-items:center;text-align:left}.contenedor-labels[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.contenedor-form[_ngcontent-%COMP%]{margin-top:25%}.contenedor-form[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{font-size:21px;font-weight:700;height:85%;width:100%;background:#fff;border:2px solid #000;border-radius:7px;text-align:left}capacitor-google-map[_ngcontent-%COMP%]{display:inline-block;width:275px;height:400px}ion-content[_ngcontent-%COMP%]{--background: transparent}.content-fondo[_ngcontent-%COMP%]{--background: transparent}"]})}return u})()}];let E=(()=>{class u{static#e=this.\u0275fac=function(o){return new(o||u)};static#n=this.\u0275mod=t.oAB({type:u});static#t=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(I),m.Bz]})}return u})(),B=(()=>{class u{static#e=this.\u0275fac=function(o){return new(o||u)};static#n=this.\u0275mod=t.oAB({type:u});static#t=this.\u0275inj=t.cJS({imports:[v.ez,g.u5,a.Pc,E]})}return u})()}}]);