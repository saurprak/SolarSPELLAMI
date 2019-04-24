// Garden Gnome Software - Skin
// Pano2VR 5.1 beta2/15706
// Filename: mobileNilpenaBed1sm.ggsk
// Generated Thu Feb 23 14:16:49 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['viewmarker'] = false;
	ggSkinVars['LessoncontVar'] = 0;
	ggSkinVars['bottomBarVar'] = false;
	ggSkinVars['MasterQtextBox'] = 0;
	ggSkinVars['MasterQAvisiblity'] = 0;
	ggSkinVars['node'] = 1;
	ggSkinVars['VideoVisible'] = false;
	ggSkinVars['WhichObjectVar'] = '0';
	ggSkinVars['ObjectVideoVisible'] = false;
	ggSkinVars['IsObjectVisible'] = false;
	ggSkinVars['ImageVisible'] = false;
	ggSkinVars['ObjContVisible'] = false;
	ggSkinVars['TextContVisible'] = false;
	ggSkinVars['AnswerButtonPushed'] = false;
	ggSkinVars['BeginnerButtonPushed'] = false;
	ggSkinVars['IntermButtonPushed'] = false;
	ggSkinVars['AdvButtonPushed'] = false;
	var me=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/audiooffbutton2__o.png';
		preLoadImg.src=basePath + 'images/audiooffbutton2__a.png';
		preLoadImg.src=basePath + 'images/audioonbutton2__o.png';
		preLoadImg.src=basePath + 'images/audioonbutton2__a.png';
		preLoadImg.src=basePath + 'images/rotateautoon__o.png';
		preLoadImg.src=basePath + 'images/rotateautoon__a.png';
		preLoadImg.src=basePath + 'images/rotateautooff__o.png';
		preLoadImg.src=basePath + 'images/rotateautooff__a.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._to_cardboard_view=document.createElement('div');
		this._to_cardboard_view__img=document.createElement('img');
		this._to_cardboard_view__img.className='ggskin ggskin_image';
		this._to_cardboard_view__img.setAttribute('src',basePath + 'images/to_cardboard_view.png');
		this._to_cardboard_view__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._to_cardboard_view__img.className='ggskin ggskin_image';
		this._to_cardboard_view__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._to_cardboard_view__img);
		this._to_cardboard_view.appendChild(this._to_cardboard_view__img);
		this._to_cardboard_view.ggId="To_Cardboard_view";
		this._to_cardboard_view.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._to_cardboard_view.ggVisible=true;
		this._to_cardboard_view.className='ggskin ggskin_image ';
		this._to_cardboard_view.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33px;';
		hs+='left : 65px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		this._to_cardboard_view.setAttribute('style',hs);
		this._to_cardboard_view.style[domTransform + 'Origin']='50% 50%';
		me._to_cardboard_view.ggIsActive=function() {
			return false;
		}
		me._to_cardboard_view.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._to_cardboard_view.onclick=function (e) {
			me.player.openUrl("..\/NilpenaVR\/index.html","_self");
		}
		this._to_cardboard_view.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._to_cardboard_view);
		this._audiotour=document.createElement('div');
		this._audiotour__img=document.createElement('img');
		this._audiotour__img.className='ggskin ggskin_image';
		this._audiotour__img.setAttribute('src',basePath + 'images/audiotour.png');
		this._audiotour__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._audiotour__img.className='ggskin ggskin_image';
		this._audiotour__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._audiotour__img);
		this._audiotour.appendChild(this._audiotour__img);
		this._audiotour.ggId="AudioTour";
		this._audiotour.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._audiotour.ggVisible=true;
		this._audiotour.className='ggskin ggskin_image ';
		this._audiotour.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._audiotour.setAttribute('style',hs);
		this._audiotour.style[domTransform + 'Origin']='50% 50%';
		me._audiotour.ggIsActive=function() {
			return false;
		}
		me._audiotour.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._audiotour.onclick=function (e) {
			me.player.openUrl("..\/NilpenaGuidedSTD\/index.html","_self");
		}
		this._audiotour.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._audiotour);
		this._mapcontainer=document.createElement('div');
		this._mapcontainer.ggId="MapContainer";
		this._mapcontainer.ggLeft=21;
		this._mapcontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapcontainer.ggVisible=true;
		this._mapcontainer.className='ggskin ggskin_container ';
		this._mapcontainer.ggType='container';
		hs ='';
		hs+='height : 266px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : -8px;';
		hs+='visibility : inherit;';
		hs+='width : 333px;';
		hs+='pointer-events:none;';
		this._mapcontainer.setAttribute('style',hs);
		this._mapcontainer.style[domTransform + 'Origin']='50% 50%';
		me._mapcontainer.ggIsActive=function() {
			return false;
		}
		me._mapcontainer.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._mapcontainer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._container_1.ggVisible=true;
		this._container_1.className='ggskin ggskin_container ';
		this._container_1.ggType='container';
		hs ='';
		hs+='height : 150px;';
		hs+='left : -165px;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		this._container_1.setAttribute('style',hs);
		this._container_1.style[domTransform + 'Origin']='50% 50%';
		this._container_1.style[domTransform]=parameterToTransform(this._container_1.ggParameter);
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._container_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._container_1.ggUpdatePosition=function (useTransition) {
		}
		this._compass=document.createElement('div');
		this._compass.ggId="compass";
		this._compass.ggLeft=-115;
		this._compass.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._compass.ggVisible=true;
		this._compass.className='ggskin ggskin_container ';
		this._compass.ggType='container';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -115px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 71px;';
		hs+='pointer-events:none;';
		this._compass.setAttribute('style',hs);
		this._compass.style[domTransform + 'Origin']='50% 50%';
		me._compass.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._compass.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._compass.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._nsew=document.createElement('div');
		this._nsew__img=document.createElement('img');
		this._nsew__img.className='ggskin ggskin_image';
		this._nsew__img.setAttribute('src',basePath + 'images/nsew.png');
		this._nsew__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._nsew__img.className='ggskin ggskin_image';
		this._nsew__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._nsew__img);
		this._nsew.appendChild(this._nsew__img);
		this._nsew.ggId="NSEW";
		this._nsew.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._nsew.ggVisible=true;
		this._nsew.className='ggskin ggskin_image ';
		this._nsew.ggType='image';
		hs ='';
		hs+='height : 150px;';
		hs+='left : -34px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._nsew.setAttribute('style',hs);
		this._nsew.style[domTransform + 'Origin']='50% 50%';
		me._nsew.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._nsew.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._nsew.ggUpdatePosition=function (useTransition) {
		}
		this._compass.appendChild(this._nsew);
		this._compass0=document.createElement('div');
		this._compass0__img=document.createElement('img');
		this._compass0__img.className='ggskin ggskin_image';
		this._compass0__img.setAttribute('src',basePath + 'images/compass0.png');
		this._compass0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._compass0__img.className='ggskin ggskin_image';
		this._compass0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._compass0__img);
		this._compass0.appendChild(this._compass0__img);
		this._compass0.ggId="compass";
		this._compass0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._compass0.ggVisible=true;
		this._compass0.className='ggskin ggskin_image ';
		this._compass0.ggType='image';
		hs ='';
		hs+='height : 85px;';
		hs+='left : -2px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		this._compass0.setAttribute('style',hs);
		this._compass0.style[domTransform + 'Origin']='50% 50%';
		me._compass0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._compass0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._compass0.ggUpdatePosition=function (useTransition) {
		}
		this._compass.appendChild(this._compass0);
		this._tilt=document.createElement('div');
		this._tilt__text=document.createElement('div');
		this._tilt.className='ggskin ggskin_textdiv';
		this._tilt.ggTextDiv=this._tilt__text;
		this._tilt.ggId="tilt";
		this._tilt.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		this._tilt.ggVisible=true;
		this._tilt.className='ggskin ggskin_text ';
		this._tilt.ggType='text';
		hs ='';
		hs+='height : 16px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		this._tilt.setAttribute('style',hs);
		this._tilt.style[domTransform + 'Origin']='50% 50%';
		this._tilt.style[domTransform]=parameterToTransform(this._tilt.ggParameter);
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 36px;';
		hs+='height: 16px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(207,207,207,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tilt__text.setAttribute('style',hs);
		this._tilt__text.innerHTML="Tilt";
		this._tilt.appendChild(this._tilt__text);
		me._tilt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tilt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tilt.ggUpdatePosition=function (useTransition) {
		}
		this._compass.appendChild(this._tilt);
		this.__90_tilt=document.createElement('div');
		this.__90_tilt__text=document.createElement('div');
		this.__90_tilt.className='ggskin ggskin_textdiv';
		this.__90_tilt.ggTextDiv=this.__90_tilt__text;
		this.__90_tilt.ggId="90 tilt";
		this.__90_tilt.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this.__90_tilt.ggVisible=true;
		this.__90_tilt.className='ggskin ggskin_text ';
		this.__90_tilt.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		this.__90_tilt.setAttribute('style',hs);
		this.__90_tilt.style[domTransform + 'Origin']='50% 50%';
		this.__90_tilt.style[domTransform]=parameterToTransform(this.__90_tilt.ggParameter);
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 38px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(203,203,203,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this.__90_tilt__text.setAttribute('style',hs);
		this.__90_tilt.ggUpdateText=function() {
			var hs=me.player.getTilt().toFixed(1)+"<br\/>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__90_tilt.ggUpdateText();
		this.__90_tilt.appendChild(this.__90_tilt__text);
		me.__90_tilt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__90_tilt.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__90_tilt.ggUpdatePosition=function (useTransition) {
		}
		this._compass.appendChild(this.__90_tilt);
		this._container_1.appendChild(this._compass);
		this._mapcontainer.appendChild(this._container_1);
		this._toolbar=document.createElement('div');
		this._toolbar.ggId="toolbar";
		this._toolbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toolbar.ggVisible=true;
		this._toolbar.className='ggskin ggskin_container ';
		this._toolbar.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -356px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 187px;';
		hs+='pointer-events:none;';
		this._toolbar.setAttribute('style',hs);
		this._toolbar.style[domTransform + 'Origin']='50% 50%';
		me._toolbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._toolbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._toolbar.ggUpdatePosition=function (useTransition) {
		}
		this._audiooffbutton2=document.createElement('div');
		this._audiooffbutton2__img=document.createElement('img');
		this._audiooffbutton2__img.className='ggskin ggskin_button';
		this._audiooffbutton2__img.setAttribute('src',basePath + 'images/audiooffbutton2.png');
		this._audiooffbutton2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._audiooffbutton2__img.className='ggskin ggskin_button';
		this._audiooffbutton2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._audiooffbutton2__img);
		this._audiooffbutton2.appendChild(this._audiooffbutton2__img);
		this._audiooffbutton2.ggId="audioOffButton2";
		this._audiooffbutton2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._audiooffbutton2.ggVisible=true;
		this._audiooffbutton2.className='ggskin ggskin_button ';
		this._audiooffbutton2.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 142px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._audiooffbutton2.setAttribute('style',hs);
		this._audiooffbutton2.style[domTransform + 'Origin']='50% 50%';
		me._audiooffbutton2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._audiooffbutton2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._audiooffbutton2.onclick=function (e) {
			me.player.playSound("_background","0");
			me._audiooffbutton2.style[domTransition]='none';
			me._audiooffbutton2.style.visibility='hidden';
			me._audiooffbutton2.ggVisible=false;
			me._audioonbutton2.style[domTransition]='none';
			me._audioonbutton2.style.visibility=(Number(me._audioonbutton2.style.opacity)>0||!me._audioonbutton2.style.opacity)?'inherit':'hidden';
			me._audioonbutton2.ggVisible=true;
		}
		this._audiooffbutton2.onmouseover=function (e) {
			me._audiooffbutton2__img.src=basePath + 'images/audiooffbutton2__o.png';
		}
		this._audiooffbutton2.onmouseout=function (e) {
			me._audiooffbutton2__img.src=basePath + 'images/audiooffbutton2.png';
		}
		this._audiooffbutton2.onmousedown=function (e) {
			me._audiooffbutton2__img.src=basePath + 'images/audiooffbutton2__a.png';
		}
		this._audiooffbutton2.onmouseup=function (e) {
			me._audiooffbutton2__img.src=basePath + 'images/audiooffbutton2.png';
		}
		this._audiooffbutton2.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._audiooffbutton2);
		this._audioonbutton2=document.createElement('div');
		this._audioonbutton2__img=document.createElement('img');
		this._audioonbutton2__img.className='ggskin ggskin_button';
		this._audioonbutton2__img.setAttribute('src',basePath + 'images/audioonbutton2.png');
		this._audioonbutton2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._audioonbutton2__img.className='ggskin ggskin_button';
		this._audioonbutton2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._audioonbutton2__img);
		this._audioonbutton2.appendChild(this._audioonbutton2__img);
		this._audioonbutton2.ggId="audioOnButton2";
		this._audioonbutton2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._audioonbutton2.ggVisible=true;
		this._audioonbutton2.className='ggskin ggskin_button ';
		this._audioonbutton2.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 142px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._audioonbutton2.setAttribute('style',hs);
		this._audioonbutton2.style[domTransform + 'Origin']='50% 50%';
		me._audioonbutton2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._audioonbutton2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._audioonbutton2.onclick=function (e) {
			me.player.pauseSound("_background");
			me._audiooffbutton2.style[domTransition]='none';
			me._audiooffbutton2.style.visibility=(Number(me._audiooffbutton2.style.opacity)>0||!me._audiooffbutton2.style.opacity)?'inherit':'hidden';
			me._audiooffbutton2.ggVisible=true;
			me._audioonbutton2.style[domTransition]='none';
			me._audioonbutton2.style.visibility='hidden';
			me._audioonbutton2.ggVisible=false;
		}
		this._audioonbutton2.onmouseover=function (e) {
			me._audioonbutton2__img.src=basePath + 'images/audioonbutton2__o.png';
		}
		this._audioonbutton2.onmouseout=function (e) {
			me._audioonbutton2__img.src=basePath + 'images/audioonbutton2.png';
		}
		this._audioonbutton2.onmousedown=function (e) {
			me._audioonbutton2__img.src=basePath + 'images/audioonbutton2__a.png';
		}
		this._audioonbutton2.onmouseup=function (e) {
			me._audioonbutton2__img.src=basePath + 'images/audioonbutton2.png';
		}
		this._audioonbutton2.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._audioonbutton2);
		this._rotateautoon=document.createElement('div');
		this._rotateautoon__img=document.createElement('img');
		this._rotateautoon__img.className='ggskin ggskin_button';
		this._rotateautoon__img.setAttribute('src',basePath + 'images/rotateautoon.png');
		this._rotateautoon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._rotateautoon__img.className='ggskin ggskin_button';
		this._rotateautoon__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._rotateautoon__img);
		this._rotateautoon.appendChild(this._rotateautoon__img);
		this._rotateautoon.ggId="RotateAutoOn";
		this._rotateautoon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rotateautoon.ggVisible=true;
		this._rotateautoon.className='ggskin ggskin_button ';
		this._rotateautoon.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 184px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._rotateautoon.setAttribute('style',hs);
		this._rotateautoon.style[domTransform + 'Origin']='50% 50%';
		me._rotateautoon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rotateautoon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rotateautoon.onclick=function (e) {
			me._rotateautooff.style[domTransition]='none';
			me._rotateautooff.style.visibility=(Number(me._rotateautooff.style.opacity)>0||!me._rotateautooff.style.opacity)?'inherit':'hidden';
			me._rotateautooff.ggVisible=true;
			me._rotateautoon.style[domTransition]='none';
			me._rotateautoon.style.visibility='hidden';
			me._rotateautoon.ggVisible=false;
			me.player.stopAutorotate();
		}
		this._rotateautoon.onmouseover=function (e) {
			me._rotateautoon__img.src=basePath + 'images/rotateautoon__o.png';
		}
		this._rotateautoon.onmouseout=function (e) {
			me._rotateautoon__img.src=basePath + 'images/rotateautoon.png';
		}
		this._rotateautoon.onmousedown=function (e) {
			me._rotateautoon__img.src=basePath + 'images/rotateautoon__a.png';
		}
		this._rotateautoon.onmouseup=function (e) {
			me._rotateautoon__img.src=basePath + 'images/rotateautoon.png';
		}
		this._rotateautoon.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._rotateautoon);
		this._rotateautooff=document.createElement('div');
		this._rotateautooff__img=document.createElement('img');
		this._rotateautooff__img.className='ggskin ggskin_button';
		this._rotateautooff__img.setAttribute('src',basePath + 'images/rotateautooff.png');
		this._rotateautooff__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._rotateautooff__img.className='ggskin ggskin_button';
		this._rotateautooff__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._rotateautooff__img);
		this._rotateautooff.appendChild(this._rotateautooff__img);
		this._rotateautooff.ggId="RotateAutoOff";
		this._rotateautooff.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rotateautooff.ggVisible=true;
		this._rotateautooff.className='ggskin ggskin_button ';
		this._rotateautooff.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 184px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._rotateautooff.setAttribute('style',hs);
		this._rotateautooff.style[domTransform + 'Origin']='50% 50%';
		me._rotateautooff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rotateautooff.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rotateautooff.onclick=function (e) {
			me._rotateautoon.style[domTransition]='none';
			me._rotateautoon.style.visibility=(Number(me._rotateautoon.style.opacity)>0||!me._rotateautoon.style.opacity)?'inherit':'hidden';
			me._rotateautoon.ggVisible=true;
			me._rotateautooff.style[domTransition]='none';
			me._rotateautooff.style.visibility='hidden';
			me._rotateautooff.ggVisible=false;
			me.player.startAutorotate(".05");
		}
		this._rotateautooff.onmouseover=function (e) {
			me._rotateautooff__img.src=basePath + 'images/rotateautooff__o.png';
		}
		this._rotateautooff.onmouseout=function (e) {
			me._rotateautooff__img.src=basePath + 'images/rotateautooff.png';
		}
		this._rotateautooff.onmousedown=function (e) {
			me._rotateautooff__img.src=basePath + 'images/rotateautooff__a.png';
		}
		this._rotateautooff.onmouseup=function (e) {
			me._rotateautooff__img.src=basePath + 'images/rotateautooff.png';
		}
		this._rotateautooff.ggUpdatePosition=function (useTransition) {
		}
		this._toolbar.appendChild(this._rotateautooff);
		this._mapcontainer.appendChild(this._toolbar);
		this.divSkin.appendChild(this._mapcontainer);
		this._lesson_bar_node_1=document.createElement('div');
		this._lesson_bar_node_1.ggId="lesson bar node 1";
		this._lesson_bar_node_1.ggTop=40;
		this._lesson_bar_node_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._lesson_bar_node_1.ggVisible=true;
		this._lesson_bar_node_1.className='ggskin ggskin_container ';
		this._lesson_bar_node_1.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 288px;';
		hs+='pointer-events:none;';
		this._lesson_bar_node_1.setAttribute('style',hs);
		this._lesson_bar_node_1.style[domTransform + 'Origin']='50% 50%';
		me._lesson_bar_node_1.ggIsActive=function() {
			return false;
		}
		me._lesson_bar_node_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._lesson_bar_node_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._master_question_container=document.createElement('div');
		this._master_question_container.ggId="Master Question Container";
		this._master_question_container.ggTop=-356;
		this._master_question_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._master_question_container.ggVisible=false;
		this._master_question_container.className='ggskin ggskin_container ';
		this._master_question_container.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : -356px;';
		hs+='visibility : hidden;';
		hs+='width : 450px;';
		hs+='pointer-events:none;';
		this._master_question_container.setAttribute('style',hs);
		this._master_question_container.style[domTransform + 'Origin']='50% 50%';
		me._master_question_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._master_question_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._master_question_container.ggCurrentLogicStateVisible = -1;
		this._master_question_container.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['MasterQtextBox'] == 1) || 
				(ggSkinVars['MasterQtextBox'] == 2) || 
				(ggSkinVars['MasterQtextBox'] == 3)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 0)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._master_question_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._master_question_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._master_question_container.style[domTransition]='';
				if (me._master_question_container.ggCurrentLogicStateVisible == 0) {
					me._master_question_container.style.visibility=(Number(me._master_question_container.style.opacity)>0||!me._master_question_container.style.opacity)?'inherit':'hidden';
					me._master_question_container.ggVisible=true;
				}
				else if (me._master_question_container.ggCurrentLogicStateVisible == 1) {
					me._master_question_container.style.visibility="hidden";
					me._master_question_container.ggVisible=false;
				}
				else {
					me._master_question_container.style.visibility="hidden";
					me._master_question_container.ggVisible=false;
				}
			}
		}
		this._master_question_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._masterquestiontextbox=document.createElement('div');
		this._masterquestiontextbox__text=document.createElement('div');
		this._masterquestiontextbox.className='ggskin ggskin_textdiv';
		this._masterquestiontextbox.ggTextDiv=this._masterquestiontextbox__text;
		this._masterquestiontextbox.ggId="MasterQuestionTextBox";
		this._masterquestiontextbox.ggTop=-350;
		this._masterquestiontextbox.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._masterquestiontextbox.ggVisible=true;
		this._masterquestiontextbox.className='ggskin ggskin_text ';
		this._masterquestiontextbox.ggType='text';
		hs ='';
		hs+='height : 347px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -350px;';
		hs+='visibility : inherit;';
		hs+='width : 445px;';
		hs+='pointer-events:auto;';
		this._masterquestiontextbox.setAttribute('style',hs);
		this._masterquestiontextbox.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 445px;';
		hs+='height: 347px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 21px 7px 21px 7px;';
		hs+='overflow: hidden;';
		this._masterquestiontextbox__text.setAttribute('style',hs);
		this._masterquestiontextbox__text.innerHTML="";
		this._masterquestiontextbox.appendChild(this._masterquestiontextbox__text);
		me._masterquestiontextbox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._masterquestiontextbox.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._masterquestiontextbox.ggCurrentLogicStateVisible = -1;
		me._masterquestiontextbox.ggCurrentLogicStateBackgroundColor = -1;
		me._masterquestiontextbox.ggCurrentLogicStateText = -1;
		this._masterquestiontextbox.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['MasterQAvisiblity'] == 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['MasterQAvisiblity'] == 1)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._masterquestiontextbox.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._masterquestiontextbox.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._masterquestiontextbox.style[domTransition]='background-color none';
				if (me._masterquestiontextbox.ggCurrentLogicStateVisible == 0) {
					me._masterquestiontextbox.style.visibility=(Number(me._masterquestiontextbox.style.opacity)>0||!me._masterquestiontextbox.style.opacity)?'inherit':'hidden';
					me._masterquestiontextbox.ggVisible=true;
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateVisible == 1) {
					me._masterquestiontextbox.style.visibility="hidden";
					me._masterquestiontextbox.ggVisible=false;
				}
				else {
					me._masterquestiontextbox.style.visibility=(Number(me._masterquestiontextbox.style.opacity)>0||!me._masterquestiontextbox.style.opacity)?'inherit':'hidden';
					me._masterquestiontextbox.ggVisible=true;
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['MasterQtextBox'] == 1)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 2)
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 3)
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 0)
			)
			{
				newLogicStateBackgroundColor = 3;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._masterquestiontextbox.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._masterquestiontextbox.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._masterquestiontextbox__text.style[domTransition]='background-color none';
				if (me._masterquestiontextbox.ggCurrentLogicStateBackgroundColor == 0) {
					me._masterquestiontextbox__text.style.backgroundColor="rgba(141,170,137,1)";
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateBackgroundColor == 1) {
					me._masterquestiontextbox__text.style.backgroundColor="rgba(246,247,181,1)";
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateBackgroundColor == 2) {
					me._masterquestiontextbox__text.style.backgroundColor="rgba(255,187,188,1)";
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateBackgroundColor == 3) {
					me._masterquestiontextbox__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._masterquestiontextbox__text.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
			var newLogicStateText;
			if (
				(ggSkinVars['MasterQtextBox'] == 1) && 
				(ggSkinVars['node'] == 1)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 2) && 
				(ggSkinVars['node'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 3) && 
				(ggSkinVars['node'] == 1)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 0)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 1) && 
				(ggSkinVars['node'] == 2)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 2) && 
				(ggSkinVars['node'] == 2)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 3) && 
				(ggSkinVars['node'] == 2)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 1) && 
				(ggSkinVars['node'] == 3)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 2) && 
				(ggSkinVars['node'] == 3)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 3) && 
				(ggSkinVars['node'] == 3)
			)
			{
				newLogicStateText = 9;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._masterquestiontextbox.ggCurrentLogicStateText != newLogicStateText) {
				me._masterquestiontextbox.ggCurrentLogicStateText = newLogicStateText;
				me._masterquestiontextbox.style[domTransition]='background-color none';
				if (me._masterquestiontextbox.ggCurrentLogicStateText == 0) {
					me._masterquestiontextbox.ggText="<b>What are sedimentary rocks?<\/b>";
					me._masterquestiontextbox__text.innerHTML=me._masterquestiontextbox.ggText;
					if (me._masterquestiontextbox.ggUpdateText) {
					me._masterquestiontextbox.ggUpdateText=function() {
						var hs="<b>What are sedimentary rocks?<\/b>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masterquestiontextbox.ggUpdatePosition) me._masterquestiontextbox.ggUpdatePosition();
					}
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateText == 1) {
					me._masterquestiontextbox.ggText="<b>What can ripple marks in sedimentary rocks tell us about ancient environments? <\/b>";
					me._masterquestiontextbox__text.innerHTML=me._masterquestiontextbox.ggText;
					if (me._masterquestiontextbox.ggUpdateText) {
					me._masterquestiontextbox.ggUpdateText=function() {
						var hs="<b>What can ripple marks in sedimentary rocks tell us about ancient environments? <\/b>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masterquestiontextbox.ggUpdatePosition) me._masterquestiontextbox.ggUpdatePosition();
					}
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateText == 2) {
					me._masterquestiontextbox.ggText="<b>What major process can move continents into different climatic zones?<b>";
					me._masterquestiontextbox__text.innerHTML=me._masterquestiontextbox.ggText;
					if (me._masterquestiontextbox.ggUpdateText) {
					me._masterquestiontextbox.ggUpdateText=function() {
						var hs="<b>What major process can move continents into different climatic zones?<b>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masterquestiontextbox.ggUpdatePosition) me._masterquestiontextbox.ggUpdatePosition();
					}
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateText == 3) {
					me._masterquestiontextbox.ggText="";
					me._masterquestiontextbox__text.innerHTML=me._masterquestiontextbox.ggText;
					if (me._masterquestiontextbox.ggUpdateText) {
					me._masterquestiontextbox.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masterquestiontextbox.ggUpdatePosition) me._masterquestiontextbox.ggUpdatePosition();
					}
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateText == 4) {
					me._masterquestiontextbox.ggText="<b>How do scientists recognize fossils in sedimentary rock?<\/b> ";
					me._masterquestiontextbox__text.innerHTML=me._masterquestiontextbox.ggText;
					if (me._masterquestiontextbox.ggUpdateText) {
					me._masterquestiontextbox.ggUpdateText=function() {
						var hs="<b>How do scientists recognize fossils in sedimentary rock?<\/b> ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masterquestiontextbox.ggUpdatePosition) me._masterquestiontextbox.ggUpdatePosition();
					}
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateText == 5) {
					me._masterquestiontextbox.ggText="<b>How can the layers in sedimentary rocks tell time? <\/b> ";
					me._masterquestiontextbox__text.innerHTML=me._masterquestiontextbox.ggText;
					if (me._masterquestiontextbox.ggUpdateText) {
					me._masterquestiontextbox.ggUpdateText=function() {
						var hs="<b>How can the layers in sedimentary rocks tell time? <\/b> ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masterquestiontextbox.ggUpdatePosition) me._masterquestiontextbox.ggUpdatePosition();
					}
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateText == 6) {
					me._masterquestiontextbox.ggText="<b>How did once living organisms become fossils?  <\/b>";
					me._masterquestiontextbox__text.innerHTML=me._masterquestiontextbox.ggText;
					if (me._masterquestiontextbox.ggUpdateText) {
					me._masterquestiontextbox.ggUpdateText=function() {
						var hs="<b>How did once living organisms become fossils?  <\/b>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masterquestiontextbox.ggUpdatePosition) me._masterquestiontextbox.ggUpdatePosition();
					}
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateText == 7) {
					me._masterquestiontextbox.ggText="<b>What did Ediacarans eat? <\/b> ";
					me._masterquestiontextbox__text.innerHTML=me._masterquestiontextbox.ggText;
					if (me._masterquestiontextbox.ggUpdateText) {
					me._masterquestiontextbox.ggUpdateText=function() {
						var hs="<b>What did Ediacarans eat? <\/b> ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masterquestiontextbox.ggUpdatePosition) me._masterquestiontextbox.ggUpdatePosition();
					}
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateText == 8) {
					me._masterquestiontextbox.ggText="<b>Were some Ediacarans predators, preying on other organisms? <\/b> ";
					me._masterquestiontextbox__text.innerHTML=me._masterquestiontextbox.ggText;
					if (me._masterquestiontextbox.ggUpdateText) {
					me._masterquestiontextbox.ggUpdateText=function() {
						var hs="<b>Were some Ediacarans predators, preying on other organisms? <\/b> ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masterquestiontextbox.ggUpdatePosition) me._masterquestiontextbox.ggUpdatePosition();
					}
				}
				else if (me._masterquestiontextbox.ggCurrentLogicStateText == 9) {
					me._masterquestiontextbox.ggText="<b>How do scientists reconstruct ancient organisms?  <\/b> ";
					me._masterquestiontextbox__text.innerHTML=me._masterquestiontextbox.ggText;
					if (me._masterquestiontextbox.ggUpdateText) {
					me._masterquestiontextbox.ggUpdateText=function() {
						var hs="<b>How do scientists reconstruct ancient organisms?  <\/b> ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masterquestiontextbox.ggUpdatePosition) me._masterquestiontextbox.ggUpdatePosition();
					}
				}
				else {
					me._masterquestiontextbox.ggText="";
					me._masterquestiontextbox__text.innerHTML=me._masterquestiontextbox.ggText;
					if (me._masterquestiontextbox.ggUpdateText) {
					me._masterquestiontextbox.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masterquestiontextbox.ggUpdatePosition) me._masterquestiontextbox.ggUpdatePosition();
					}
				}
			}
		}
		this._masterquestiontextbox.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._master_question_container.appendChild(this._masterquestiontextbox);
		this._masteranswertextbox=document.createElement('div');
		this._masteranswertextbox__text=document.createElement('div');
		this._masteranswertextbox.className='ggskin ggskin_textdiv';
		this._masteranswertextbox.ggTextDiv=this._masteranswertextbox__text;
		this._masteranswertextbox.ggId="MasterAnswerTextBox";
		this._masteranswertextbox.ggTop=-350;
		this._masteranswertextbox.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._masteranswertextbox.ggVisible=true;
		this._masteranswertextbox.className='ggskin ggskin_text ';
		this._masteranswertextbox.ggType='text';
		hs ='';
		hs+='height : 347px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -350px;';
		hs+='visibility : inherit;';
		hs+='width : 445px;';
		hs+='pointer-events:auto;';
		this._masteranswertextbox.setAttribute('style',hs);
		this._masteranswertextbox.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 445px;';
		hs+='height: 347px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 21px 7px 21px 7px;';
		hs+='overflow: hidden;';
		this._masteranswertextbox__text.setAttribute('style',hs);
		this._masteranswertextbox__text.innerHTML="";
		this._masteranswertextbox.appendChild(this._masteranswertextbox__text);
		me._masteranswertextbox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._masteranswertextbox.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._masteranswertextbox.ggCurrentLogicStateVisible = -1;
		me._masteranswertextbox.ggCurrentLogicStateBackgroundColor = -1;
		me._masteranswertextbox.ggCurrentLogicStateText = -1;
		this._masteranswertextbox.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['MasterQAvisiblity'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['MasterQAvisiblity'] == 0)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._masteranswertextbox.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._masteranswertextbox.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._masteranswertextbox.style[domTransition]='background-color none';
				if (me._masteranswertextbox.ggCurrentLogicStateVisible == 0) {
					me._masteranswertextbox.style.visibility=(Number(me._masteranswertextbox.style.opacity)>0||!me._masteranswertextbox.style.opacity)?'inherit':'hidden';
					me._masteranswertextbox.ggVisible=true;
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateVisible == 1) {
					me._masteranswertextbox.style.visibility="hidden";
					me._masteranswertextbox.ggVisible=false;
				}
				else {
					me._masteranswertextbox.style.visibility=(Number(me._masteranswertextbox.style.opacity)>0||!me._masteranswertextbox.style.opacity)?'inherit':'hidden';
					me._masteranswertextbox.ggVisible=true;
				}
			}
			var newLogicStateBackgroundColor;
			if (
				(ggSkinVars['MasterQtextBox'] == 1)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 2)
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 3)
			)
			{
				newLogicStateBackgroundColor = 2;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 0)
			)
			{
				newLogicStateBackgroundColor = 3;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._masteranswertextbox.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._masteranswertextbox.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._masteranswertextbox__text.style[domTransition]='background-color none';
				if (me._masteranswertextbox.ggCurrentLogicStateBackgroundColor == 0) {
					me._masteranswertextbox__text.style.backgroundColor="rgba(141,170,137,1)";
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateBackgroundColor == 1) {
					me._masteranswertextbox__text.style.backgroundColor="rgba(246,247,181,1)";
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateBackgroundColor == 2) {
					me._masteranswertextbox__text.style.backgroundColor="rgba(255,187,188,1)";
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateBackgroundColor == 3) {
					me._masteranswertextbox__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._masteranswertextbox__text.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
			var newLogicStateText;
			if (
				(ggSkinVars['MasterQtextBox'] == 1) && 
				(ggSkinVars['node'] == 1)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 2) && 
				(ggSkinVars['node'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 3) && 
				(ggSkinVars['node'] == 1)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 0)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 1) && 
				(ggSkinVars['node'] == 2)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 2) && 
				(ggSkinVars['node'] == 2)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 3) && 
				(ggSkinVars['node'] == 2)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 1) && 
				(ggSkinVars['node'] == 3)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 2) && 
				(ggSkinVars['node'] == 3)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['MasterQtextBox'] == 3) && 
				(ggSkinVars['node'] == 3)
			)
			{
				newLogicStateText = 9;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._masteranswertextbox.ggCurrentLogicStateText != newLogicStateText) {
				me._masteranswertextbox.ggCurrentLogicStateText = newLogicStateText;
				me._masteranswertextbox.style[domTransition]='background-color none';
				if (me._masteranswertextbox.ggCurrentLogicStateText == 0) {
					me._masteranswertextbox.ggText="<b>What are sedimentary rocks?<\/b><br>\nSedimentary rocks, like sandstone, are formed by the deposition of sediments (like sand grains) by water, wind or ice.  Over millions of years, the sediments get deeply buried, compacted and turned to rock (such as sandstone).  ";
					me._masteranswertextbox__text.innerHTML=me._masteranswertextbox.ggText;
					if (me._masteranswertextbox.ggUpdateText) {
					me._masteranswertextbox.ggUpdateText=function() {
						var hs="<b>What are sedimentary rocks?<\/b><br>\nSedimentary rocks, like sandstone, are formed by the deposition of sediments (like sand grains) by water, wind or ice.  Over millions of years, the sediments get deeply buried, compacted and turned to rock (such as sandstone).  ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masteranswertextbox.ggUpdatePosition) me._masteranswertextbox.ggUpdatePosition();
					}
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateText == 1) {
					me._masteranswertextbox.ggText="<b>What can ripple marks in sedimentary rocks tell us about ancient environments?<\/b> <br>\nThe action of waves and currents in water are what forms ripples. \nRipple marks in rock, like those seen in the sandstones, can give us information on the type of environment where the rock formed. The ripple marks on this surface indicate that the ocean was sandy and very shallow.  ";
					me._masteranswertextbox__text.innerHTML=me._masteranswertextbox.ggText;
					if (me._masteranswertextbox.ggUpdateText) {
					me._masteranswertextbox.ggUpdateText=function() {
						var hs="<b>What can ripple marks in sedimentary rocks tell us about ancient environments?<\/b> <br>\nThe action of waves and currents in water are what forms ripples. \nRipple marks in rock, like those seen in the sandstones, can give us information on the type of environment where the rock formed. The ripple marks on this surface indicate that the ocean was sandy and very shallow.  ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masteranswertextbox.ggUpdatePosition) me._masteranswertextbox.ggUpdatePosition();
					}
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateText == 2) {
					me._masteranswertextbox.ggText="<b>What major process can move continents into different climatic zones?<\/b><br>\nEnvironments can change dramatically due to the movement of continents over time. The Earth\u2019s crust is divided into crustal plates that contain the continents and that move relative to one another. This movement is called plate tectonics. \n550 million years ago, this area was located on the equator and was partially covered by a tropical ocean. Today this area is located well south of the equator (35 degrees) giving it a much hotter and drier climate.  ";
					me._masteranswertextbox__text.innerHTML=me._masteranswertextbox.ggText;
					if (me._masteranswertextbox.ggUpdateText) {
					me._masteranswertextbox.ggUpdateText=function() {
						var hs="<b>What major process can move continents into different climatic zones?<\/b><br>\nEnvironments can change dramatically due to the movement of continents over time. The Earth\u2019s crust is divided into crustal plates that contain the continents and that move relative to one another. This movement is called plate tectonics. \n550 million years ago, this area was located on the equator and was partially covered by a tropical ocean. Today this area is located well south of the equator (35 degrees) giving it a much hotter and drier climate.  ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masteranswertextbox.ggUpdatePosition) me._masteranswertextbox.ggUpdatePosition();
					}
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateText == 3) {
					me._masteranswertextbox.ggText="";
					me._masteranswertextbox__text.innerHTML=me._masteranswertextbox.ggText;
					if (me._masteranswertextbox.ggUpdateText) {
					me._masteranswertextbox.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masteranswertextbox.ggUpdatePosition) me._masteranswertextbox.ggUpdatePosition();
					}
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateText == 4) {
					me._masteranswertextbox.ggText="<b>How do scientists recognize fossils in sedimentary rock?<\/b><br>\nSedimentary rocks, like sandstone, are formed by the deposition of sediments (like sand grains) by water, wind or ice.  Over millions of years, the sediments get deeply buried, compacted and turned to rock (such as sandstone).  \n\n";
					me._masteranswertextbox__text.innerHTML=me._masteranswertextbox.ggText;
					if (me._masteranswertextbox.ggUpdateText) {
					me._masteranswertextbox.ggUpdateText=function() {
						var hs="<b>How do scientists recognize fossils in sedimentary rock?<\/b><br>\nSedimentary rocks, like sandstone, are formed by the deposition of sediments (like sand grains) by water, wind or ice.  Over millions of years, the sediments get deeply buried, compacted and turned to rock (such as sandstone).  \n\n";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masteranswertextbox.ggUpdatePosition) me._masteranswertextbox.ggUpdatePosition();
					}
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateText == 5) {
					me._masteranswertextbox.ggText="<b>How can the layers in sedimentary rocks tell time? <\/b> <br>\nIn a stack or sequence of sedimentary rocks, the oldest rocks are found at the bottom because they formed first.  The youngest rocks are found at the top because they formed more recently. This is called superposition and helps scientists get an idea of the general age of different rock layers within a sequence.   \n\n";
					me._masteranswertextbox__text.innerHTML=me._masteranswertextbox.ggText;
					if (me._masteranswertextbox.ggUpdateText) {
					me._masteranswertextbox.ggUpdateText=function() {
						var hs="<b>How can the layers in sedimentary rocks tell time? <\/b> <br>\nIn a stack or sequence of sedimentary rocks, the oldest rocks are found at the bottom because they formed first.  The youngest rocks are found at the top because they formed more recently. This is called superposition and helps scientists get an idea of the general age of different rock layers within a sequence.   \n\n";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masteranswertextbox.ggUpdatePosition) me._masteranswertextbox.ggUpdatePosition();
					}
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateText == 6) {
					me._masteranswertextbox.ggText="<b>How did once living organisms become fossils?  <\/b><br>\nSome shapes and patterns found in sedimentary rocks are more likely to be made by organisms rather than by natural processes. Scientists will look for repeating shapes such as discs, tubes or fronds (leaf-like shapes). Other clues can be the presence of features such as a head, limbs, or segments. Fossils of very simple organisms can be difficult to recognize in extremely old sedimentary rocks. Only through comparison with other locations around the world can some fossils be recognized.    ";
					me._masteranswertextbox__text.innerHTML=me._masteranswertextbox.ggText;
					if (me._masteranswertextbox.ggUpdateText) {
					me._masteranswertextbox.ggUpdateText=function() {
						var hs="<b>How did once living organisms become fossils?  <\/b><br>\nSome shapes and patterns found in sedimentary rocks are more likely to be made by organisms rather than by natural processes. Scientists will look for repeating shapes such as discs, tubes or fronds (leaf-like shapes). Other clues can be the presence of features such as a head, limbs, or segments. Fossils of very simple organisms can be difficult to recognize in extremely old sedimentary rocks. Only through comparison with other locations around the world can some fossils be recognized.    ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masteranswertextbox.ggUpdatePosition) me._masteranswertextbox.ggUpdatePosition();
					}
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateText == 7) {
					me._masteranswertextbox.ggText="<b>What did Ediacarans eat? <\/b><br>\nScientists think that the slimy microbial (bacterial) mats that covered the bottoms of oceans during the Ediacaran Period were the main food source for most organisms. ";
					me._masteranswertextbox__text.innerHTML=me._masteranswertextbox.ggText;
					if (me._masteranswertextbox.ggUpdateText) {
					me._masteranswertextbox.ggUpdateText=function() {
						var hs="<b>What did Ediacarans eat? <\/b><br>\nScientists think that the slimy microbial (bacterial) mats that covered the bottoms of oceans during the Ediacaran Period were the main food source for most organisms. ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masteranswertextbox.ggUpdatePosition) me._masteranswertextbox.ggUpdatePosition();
					}
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateText == 8) {
					me._masteranswertextbox.ggText="<b>Were some Ediacarans predators, preying on other organisms? <\/b><br>\nThere is no evidence in the fossil record for Ediacaran predators, which is not surprising since these organisms did not have hard teeth and skeletons.  ";
					me._masteranswertextbox__text.innerHTML=me._masteranswertextbox.ggText;
					if (me._masteranswertextbox.ggUpdateText) {
					me._masteranswertextbox.ggUpdateText=function() {
						var hs="<b>Were some Ediacarans predators, preying on other organisms? <\/b><br>\nThere is no evidence in the fossil record for Ediacaran predators, which is not surprising since these organisms did not have hard teeth and skeletons.  ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masteranswertextbox.ggUpdatePosition) me._masteranswertextbox.ggUpdatePosition();
					}
				}
				else if (me._masteranswertextbox.ggCurrentLogicStateText == 9) {
					me._masteranswertextbox.ggText="<b>How do scientists reconstruct ancient organisms?  <\/b><br>\nScientists work closely with artists to reconstruct or \u201cfleshout\u201d what fossil organisms may have looked like. They not only study the fossils very carefully, but draw information from the types of organisms living today. ";
					me._masteranswertextbox__text.innerHTML=me._masteranswertextbox.ggText;
					if (me._masteranswertextbox.ggUpdateText) {
					me._masteranswertextbox.ggUpdateText=function() {
						var hs="<b>How do scientists reconstruct ancient organisms?  <\/b><br>\nScientists work closely with artists to reconstruct or \u201cfleshout\u201d what fossil organisms may have looked like. They not only study the fossils very carefully, but draw information from the types of organisms living today. ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masteranswertextbox.ggUpdatePosition) me._masteranswertextbox.ggUpdatePosition();
					}
				}
				else {
					me._masteranswertextbox.ggText="";
					me._masteranswertextbox__text.innerHTML=me._masteranswertextbox.ggText;
					if (me._masteranswertextbox.ggUpdateText) {
					me._masteranswertextbox.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._masteranswertextbox.ggUpdatePosition) me._masteranswertextbox.ggUpdatePosition();
					}
				}
			}
		}
		this._masteranswertextbox.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._master_question_container.appendChild(this._masteranswertextbox);
		this._close_x=document.createElement('div');
		this._close_x__img=document.createElement('img');
		this._close_x__img.className='ggskin ggskin_image';
		this._close_x__img.setAttribute('src',basePath + 'images/close_x.png');
		this._close_x__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._close_x__img.className='ggskin ggskin_image';
		this._close_x__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._close_x__img);
		this._close_x.appendChild(this._close_x__img);
		this._close_x.ggId="Close x";
		this._close_x.ggTop=-347;
		this._close_x.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		this._close_x.ggVisible=true;
		this._close_x.className='ggskin ggskin_image ';
		this._close_x.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 425px;';
		hs+='position : absolute;';
		hs+='top : -347px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._close_x.setAttribute('style',hs);
		this._close_x.style[domTransform + 'Origin']='100% 0%';
		this._close_x.style[domTransform]=parameterToTransform(this._close_x.ggParameter);
		me._close_x.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._close_x.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._close_x.onclick=function (e) {
			ggSkinVars['MasterQtextBox'] = Number("0");
			ggSkinVars['viewmarker'] = true;
		}
		this._close_x.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._master_question_container.appendChild(this._close_x);
		this._answer_button=document.createElement('div');
		this._answer_button__text=document.createElement('div');
		this._answer_button.className='ggskin ggskin_textdiv';
		this._answer_button.ggTextDiv=this._answer_button__text;
		this._answer_button.ggId="Answer button";
		this._answer_button.ggTop=-100;
		this._answer_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._answer_button.ggVisible=true;
		this._answer_button.className='ggskin ggskin_text ';
		this._answer_button.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : 322px;';
		hs+='position : absolute;';
		hs+='top : -100px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		this._answer_button.setAttribute('style',hs);
		this._answer_button.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 110px;';
		hs+='height: 21px;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._answer_button__text.setAttribute('style',hs);
		this._answer_button__text.innerHTML="<font size=\"4\">Answer<\/font>";
		this._answer_button.appendChild(this._answer_button__text);
		me._answer_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._answer_button.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._answer_button.onclick=function (e) {
			ggSkinVars['MasterQAvisiblity'] = Number("1");
			ggSkinVars['AnswerButtonPushed'] = true;
		}
		this._answer_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._master_question_container.appendChild(this._answer_button);
		this._lesson_bar_node_1.appendChild(this._master_question_container);
		this._bottom_bar_shadow=document.createElement('div');
		this._bottom_bar_shadow__text=document.createElement('div');
		this._bottom_bar_shadow.className='ggskin ggskin_textdiv';
		this._bottom_bar_shadow.ggTextDiv=this._bottom_bar_shadow__text;
		this._bottom_bar_shadow.ggId="Bottom bar shadow";
		this._bottom_bar_shadow.ggTop=-74;
		this._bottom_bar_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bottom_bar_shadow.ggVisible=true;
		this._bottom_bar_shadow.className='ggskin ggskin_text ';
		this._bottom_bar_shadow.ggType='text';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -21px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -74px;';
		hs+='visibility : inherit;';
		hs+='width : 2993px;';
		hs+='pointer-events:auto;';
		this._bottom_bar_shadow.setAttribute('style',hs);
		this._bottom_bar_shadow.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 2993px;';
		hs+='height: 35px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._bottom_bar_shadow__text.setAttribute('style',hs);
		this._bottom_bar_shadow__text.innerHTML="TEMPORARY DATA CONTAINER<br\/><FONT COLOR=\"#993300\">When rolling over data <br>click to temporarily store data here<\/font><br\/>";
		this._bottom_bar_shadow.appendChild(this._bottom_bar_shadow__text);
		me._bottom_bar_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._bottom_bar_shadow.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._bottom_bar_shadow.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._lesson_bar_node_1.appendChild(this._bottom_bar_shadow);
		this._nil1question=document.createElement('div');
		this._nil1question__text=document.createElement('div');
		this._nil1question.className='ggskin ggskin_textdiv';
		this._nil1question.ggTextDiv=this._nil1question__text;
		this._nil1question.ggId="Nil1Question";
		this._nil1question.ggTop=-69;
		this._nil1question.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._nil1question.ggVisible=true;
		this._nil1question.className='ggskin ggskin_text ';
		this._nil1question.ggType='text';
		hs ='';
		hs+='height : 70px;';
		hs+='left : -21px;';
		hs+='position : absolute;';
		hs+='top : -69px;';
		hs+='visibility : inherit;';
		hs+='width : 2993px;';
		hs+='pointer-events:auto;';
		this._nil1question.setAttribute('style',hs);
		this._nil1question.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 2993px;';
		hs+='height: 70px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._nil1question__text.setAttribute('style',hs);
		this._nil1question__text.innerHTML="";
		this._nil1question.appendChild(this._nil1question__text);
		me._nil1question.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._nil1question.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._nil1question.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._lesson_bar_node_1.appendChild(this._nil1question);
		this.__3_button_container=document.createElement('div');
		this.__3_button_container.ggId="3 button container";
		this.__3_button_container.ggTop=-49;
		this.__3_button_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3_button_container.ggVisible=true;
		this.__3_button_container.className='ggskin ggskin_container ';
		this.__3_button_container.ggType='container';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 46px;';
		hs+='position : absolute;';
		hs+='top : -49px;';
		hs+='visibility : inherit;';
		hs+='width : 523px;';
		hs+='pointer-events:none;';
		this.__3_button_container.setAttribute('style',hs);
		this.__3_button_container.style[domTransform + 'Origin']='50% 50%';
		me.__3_button_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__3_button_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__3_button_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._advanced_button=document.createElement('div');
		this._advanced_button__text=document.createElement('div');
		this._advanced_button.className='ggskin ggskin_textdiv';
		this._advanced_button.ggTextDiv=this._advanced_button__text;
		this._advanced_button.ggId="Advanced button";
		this._advanced_button.ggTop=-54;
		this._advanced_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._advanced_button.ggVisible=true;
		this._advanced_button.className='ggskin ggskin_text ';
		this._advanced_button.ggType='text';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 455px;';
		hs+='position : absolute;';
		hs+='top : -54px;';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:auto;';
		this._advanced_button.setAttribute('style',hs);
		this._advanced_button.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 125px;';
		hs+='height: 21px;';
		hs+='background: #ffbbbc;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._advanced_button__text.setAttribute('style',hs);
		this._advanced_button__text.innerHTML="<font size=\"3\">Advanced<\/font>";
		this._advanced_button.appendChild(this._advanced_button__text);
		me._advanced_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._advanced_button.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._advanced_button.onclick=function (e) {
			ggSkinVars['MasterQtextBox'] = Number("3");
			ggSkinVars['MasterQAvisiblity'] = Number("0");
			ggSkinVars['VideoVisible'] = false;
			ggSkinVars['ObjectVideoVisible'] = false;
			ggSkinVars['ObjContVisible'] = false;
			ggSkinVars['viewmarker'] = false;
			ggSkinVars['ImageVisible'] = false;
			ggSkinVars['AdvButtonPushed'] = true;
			ggSkinVars['AnswerButtonPushed'] = false;
		}
		this._advanced_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.__3_button_container.appendChild(this._advanced_button);
		this._intermediate_button=document.createElement('div');
		this._intermediate_button__text=document.createElement('div');
		this._intermediate_button.className='ggskin ggskin_textdiv';
		this._intermediate_button.ggTextDiv=this._intermediate_button__text;
		this._intermediate_button.ggId="Intermediate button";
		this._intermediate_button.ggTop=-54;
		this._intermediate_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._intermediate_button.ggVisible=true;
		this._intermediate_button.className='ggskin ggskin_text ';
		this._intermediate_button.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : 312px;';
		hs+='position : absolute;';
		hs+='top : -54px;';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:auto;';
		this._intermediate_button.setAttribute('style',hs);
		this._intermediate_button.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 125px;';
		hs+='height: 21px;';
		hs+='background: #f6f7b5;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._intermediate_button__text.setAttribute('style',hs);
		this._intermediate_button__text.innerHTML="<font size=\"3\">Intermediate<\/font>";
		this._intermediate_button.appendChild(this._intermediate_button__text);
		me._intermediate_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._intermediate_button.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._intermediate_button.onclick=function (e) {
			ggSkinVars['MasterQtextBox'] = Number("2");
			ggSkinVars['MasterQAvisiblity'] = Number("0");
			ggSkinVars['VideoVisible'] = false;
			ggSkinVars['ObjectVideoVisible'] = false;
			ggSkinVars['ObjContVisible'] = false;
			ggSkinVars['viewmarker'] = false;
			ggSkinVars['ImageVisible'] = false;
			ggSkinVars['IntermButtonPushed'] = true;
			ggSkinVars['AnswerButtonPushed'] = false;
		}
		this._intermediate_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.__3_button_container.appendChild(this._intermediate_button);
		this._beginner_button=document.createElement('div');
		this._beginner_button__text=document.createElement('div');
		this._beginner_button.className='ggskin ggskin_textdiv';
		this._beginner_button.ggTextDiv=this._beginner_button__text;
		this._beginner_button.ggId="Beginner button";
		this._beginner_button.ggTop=-54;
		this._beginner_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._beginner_button.ggVisible=true;
		this._beginner_button.className='ggskin ggskin_text ';
		this._beginner_button.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : 170px;';
		hs+='position : absolute;';
		hs+='top : -54px;';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:auto;';
		this._beginner_button.setAttribute('style',hs);
		this._beginner_button.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 125px;';
		hs+='height: 21px;';
		hs+='background: #8daa89;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._beginner_button__text.setAttribute('style',hs);
		this._beginner_button__text.innerHTML="<font size=\"3\">Beginner<\/font>";
		this._beginner_button.appendChild(this._beginner_button__text);
		me._beginner_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._beginner_button.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._beginner_button.onclick=function (e) {
			ggSkinVars['MasterQtextBox'] = Number("1");
			ggSkinVars['MasterQAvisiblity'] = Number("0");
			ggSkinVars['VideoVisible'] = false;
			ggSkinVars['ObjectVideoVisible'] = false;
			ggSkinVars['ObjContVisible'] = false;
			ggSkinVars['viewmarker'] = false;
			ggSkinVars['ImageVisible'] = false;
			ggSkinVars['BeginnerButtonPushed'] = true;
			ggSkinVars['AnswerButtonPushed'] = false;
		}
		this._beginner_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.__3_button_container.appendChild(this._beginner_button);
		this._node3checkmarks=document.createElement('div');
		this._node3checkmarks.ggId="Node3checkmarks";
		this._node3checkmarks.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._node3checkmarks.ggVisible=false;
		this._node3checkmarks.className='ggskin ggskin_container ';
		this._node3checkmarks.ggType='container';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		this._node3checkmarks.setAttribute('style',hs);
		this._node3checkmarks.style[domTransform + 'Origin']='50% 50%';
		me._node3checkmarks.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._node3checkmarks.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._node3checkmarks.ggCurrentLogicStateVisible = -1;
		this._node3checkmarks.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['node'] == 3)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['node'] != 3)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node3checkmarks.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node3checkmarks.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node3checkmarks.style[domTransition]='';
				if (me._node3checkmarks.ggCurrentLogicStateVisible == 0) {
					me._node3checkmarks.style.visibility=(Number(me._node3checkmarks.style.opacity)>0||!me._node3checkmarks.style.opacity)?'inherit':'hidden';
					me._node3checkmarks.ggVisible=true;
				}
				else if (me._node3checkmarks.ggCurrentLogicStateVisible == 1) {
					me._node3checkmarks.style.visibility="hidden";
					me._node3checkmarks.ggVisible=false;
				}
				else {
					me._node3checkmarks.style.visibility="hidden";
					me._node3checkmarks.ggVisible=false;
				}
			}
		}
		this._node3checkmarks.ggUpdatePosition=function (useTransition) {
		}
		this._checka3=document.createElement('div');
		this._checka3__img=document.createElement('img');
		this._checka3__img.className='ggskin ggskin_image';
		this._checka3__img.setAttribute('src',basePath + 'images/checka3.png');
		this._checka3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checka3__img.className='ggskin ggskin_image';
		this._checka3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._checka3__img);
		this._checka3.appendChild(this._checka3__img);
		this._checka3.ggId="checkA3";
		this._checka3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checka3.ggVisible=true;
		this._checka3.className='ggskin ggskin_image ';
		this._checka3.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 413px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._checka3.setAttribute('style',hs);
		this._checka3.style[domTransform + 'Origin']='50% 50%';
		me._checka3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checka3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checka3.ggCurrentLogicStateAlpha = -1;
		this._checka3.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(ggSkinVars['AnswerButtonPushed'] == true) && 
				(ggSkinVars['AdvButtonPushed'] == true) && 
				(ggSkinVars['node'] == 3)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checka3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checka3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checka3.style[domTransition]='opacity none, visibility none';
				if (me._checka3.ggCurrentLogicStateAlpha == 0) {
					me._checka3.style.visibility=me._checka3.ggVisible?'inherit':'hidden';
					me._checka3.style.opacity=1;
				}
				else {
					me._checka3.style.visibility=me._checka3.ggVisible?'inherit':'hidden';
					me._checka3.style.opacity=1;
				}
			}
		}
		this._checka3.ggUpdatePosition=function (useTransition) {
		}
		this._node3checkmarks.appendChild(this._checka3);
		this._checki3=document.createElement('div');
		this._checki3__img=document.createElement('img');
		this._checki3__img.className='ggskin ggskin_image';
		this._checki3__img.setAttribute('src',basePath + 'images/checki3.png');
		this._checki3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checki3__img.className='ggskin ggskin_image';
		this._checki3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._checki3__img);
		this._checki3.appendChild(this._checki3__img);
		this._checki3.ggId="checkI3";
		this._checki3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checki3.ggVisible=true;
		this._checki3.className='ggskin ggskin_image ';
		this._checki3.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._checki3.setAttribute('style',hs);
		this._checki3.style[domTransform + 'Origin']='50% 50%';
		me._checki3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checki3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checki3.ggCurrentLogicStateAlpha = -1;
		this._checki3.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(ggSkinVars['AnswerButtonPushed'] == true) && 
				(ggSkinVars['IntermButtonPushed'] == true) && 
				(ggSkinVars['node'] == 3)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checki3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checki3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checki3.style[domTransition]='opacity none, visibility none';
				if (me._checki3.ggCurrentLogicStateAlpha == 0) {
					me._checki3.style.visibility=me._checki3.ggVisible?'inherit':'hidden';
					me._checki3.style.opacity=1;
				}
				else {
					me._checki3.style.visibility=me._checki3.ggVisible?'inherit':'hidden';
					me._checki3.style.opacity=1;
				}
			}
		}
		this._checki3.ggUpdatePosition=function (useTransition) {
		}
		this._node3checkmarks.appendChild(this._checki3);
		this._checkb3=document.createElement('div');
		this._checkb3__img=document.createElement('img');
		this._checkb3__img.className='ggskin ggskin_image';
		this._checkb3__img.setAttribute('src',basePath + 'images/checkb3.png');
		this._checkb3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checkb3__img.className='ggskin ggskin_image';
		this._checkb3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._checkb3__img);
		this._checkb3.appendChild(this._checkb3__img);
		this._checkb3.ggId="checkB3";
		this._checkb3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checkb3.ggVisible=true;
		this._checkb3.className='ggskin ggskin_image ';
		this._checkb3.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._checkb3.setAttribute('style',hs);
		this._checkb3.style[domTransform + 'Origin']='50% 50%';
		me._checkb3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkb3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkb3.ggCurrentLogicStateAlpha = -1;
		this._checkb3.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(ggSkinVars['BeginnerButtonPushed'] == true) && 
				(ggSkinVars['AnswerButtonPushed'] == true) && 
				(ggSkinVars['node'] == 3)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkb3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkb3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkb3.style[domTransition]='opacity none, visibility none';
				if (me._checkb3.ggCurrentLogicStateAlpha == 0) {
					me._checkb3.style.visibility=me._checkb3.ggVisible?'inherit':'hidden';
					me._checkb3.style.opacity=1;
				}
				else {
					me._checkb3.style.visibility=me._checkb3.ggVisible?'inherit':'hidden';
					me._checkb3.style.opacity=1;
				}
			}
		}
		this._checkb3.ggUpdatePosition=function (useTransition) {
		}
		this._node3checkmarks.appendChild(this._checkb3);
		this.__3_button_container.appendChild(this._node3checkmarks);
		this._node2checkmarks=document.createElement('div');
		this._node2checkmarks.ggId="Node2checkmarks";
		this._node2checkmarks.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._node2checkmarks.ggVisible=false;
		this._node2checkmarks.className='ggskin ggskin_container ';
		this._node2checkmarks.ggType='container';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		this._node2checkmarks.setAttribute('style',hs);
		this._node2checkmarks.style[domTransform + 'Origin']='50% 50%';
		me._node2checkmarks.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._node2checkmarks.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._node2checkmarks.ggCurrentLogicStateVisible = -1;
		this._node2checkmarks.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['node'] == 2)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['node'] != 2)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node2checkmarks.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node2checkmarks.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node2checkmarks.style[domTransition]='';
				if (me._node2checkmarks.ggCurrentLogicStateVisible == 0) {
					me._node2checkmarks.style.visibility=(Number(me._node2checkmarks.style.opacity)>0||!me._node2checkmarks.style.opacity)?'inherit':'hidden';
					me._node2checkmarks.ggVisible=true;
				}
				else if (me._node2checkmarks.ggCurrentLogicStateVisible == 1) {
					me._node2checkmarks.style.visibility="hidden";
					me._node2checkmarks.ggVisible=false;
				}
				else {
					me._node2checkmarks.style.visibility="hidden";
					me._node2checkmarks.ggVisible=false;
				}
			}
		}
		this._node2checkmarks.ggUpdatePosition=function (useTransition) {
		}
		this._checka2=document.createElement('div');
		this._checka2__img=document.createElement('img');
		this._checka2__img.className='ggskin ggskin_image';
		this._checka2__img.setAttribute('src',basePath + 'images/checka2.png');
		this._checka2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checka2__img.className='ggskin ggskin_image';
		this._checka2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._checka2__img);
		this._checka2.appendChild(this._checka2__img);
		this._checka2.ggId="checkA2";
		this._checka2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checka2.ggVisible=true;
		this._checka2.className='ggskin ggskin_image ';
		this._checka2.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 413px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._checka2.setAttribute('style',hs);
		this._checka2.style[domTransform + 'Origin']='50% 50%';
		me._checka2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checka2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checka2.ggCurrentLogicStateAlpha = -1;
		this._checka2.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(ggSkinVars['AnswerButtonPushed'] == true) && 
				(ggSkinVars['AdvButtonPushed'] == true) && 
				(ggSkinVars['node'] == 2)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checka2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checka2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checka2.style[domTransition]='opacity none, visibility none';
				if (me._checka2.ggCurrentLogicStateAlpha == 0) {
					me._checka2.style.visibility=me._checka2.ggVisible?'inherit':'hidden';
					me._checka2.style.opacity=1;
				}
				else {
					me._checka2.style.visibility=me._checka2.ggVisible?'inherit':'hidden';
					me._checka2.style.opacity=1;
				}
			}
		}
		this._checka2.ggUpdatePosition=function (useTransition) {
		}
		this._node2checkmarks.appendChild(this._checka2);
		this._checki2=document.createElement('div');
		this._checki2__img=document.createElement('img');
		this._checki2__img.className='ggskin ggskin_image';
		this._checki2__img.setAttribute('src',basePath + 'images/checki2.png');
		this._checki2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checki2__img.className='ggskin ggskin_image';
		this._checki2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._checki2__img);
		this._checki2.appendChild(this._checki2__img);
		this._checki2.ggId="checkI2";
		this._checki2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checki2.ggVisible=true;
		this._checki2.className='ggskin ggskin_image ';
		this._checki2.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._checki2.setAttribute('style',hs);
		this._checki2.style[domTransform + 'Origin']='50% 50%';
		me._checki2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checki2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checki2.ggCurrentLogicStateAlpha = -1;
		this._checki2.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(ggSkinVars['AnswerButtonPushed'] == true) && 
				(ggSkinVars['IntermButtonPushed'] == true) && 
				(ggSkinVars['node'] == 2)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checki2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checki2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checki2.style[domTransition]='opacity none, visibility none';
				if (me._checki2.ggCurrentLogicStateAlpha == 0) {
					me._checki2.style.visibility=me._checki2.ggVisible?'inherit':'hidden';
					me._checki2.style.opacity=1;
				}
				else {
					me._checki2.style.visibility=me._checki2.ggVisible?'inherit':'hidden';
					me._checki2.style.opacity=1;
				}
			}
		}
		this._checki2.ggUpdatePosition=function (useTransition) {
		}
		this._node2checkmarks.appendChild(this._checki2);
		this._checkb2=document.createElement('div');
		this._checkb2__img=document.createElement('img');
		this._checkb2__img.className='ggskin ggskin_image';
		this._checkb2__img.setAttribute('src',basePath + 'images/checkb2.png');
		this._checkb2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checkb2__img.className='ggskin ggskin_image';
		this._checkb2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._checkb2__img);
		this._checkb2.appendChild(this._checkb2__img);
		this._checkb2.ggId="checkB2";
		this._checkb2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checkb2.ggVisible=true;
		this._checkb2.className='ggskin ggskin_image ';
		this._checkb2.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._checkb2.setAttribute('style',hs);
		this._checkb2.style[domTransform + 'Origin']='50% 50%';
		me._checkb2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkb2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkb2.ggCurrentLogicStateAlpha = -1;
		this._checkb2.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(ggSkinVars['BeginnerButtonPushed'] == true) && 
				(ggSkinVars['AnswerButtonPushed'] == true) && 
				(ggSkinVars['node'] == 2)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkb2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkb2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkb2.style[domTransition]='opacity none, visibility none';
				if (me._checkb2.ggCurrentLogicStateAlpha == 0) {
					me._checkb2.style.visibility=me._checkb2.ggVisible?'inherit':'hidden';
					me._checkb2.style.opacity=1;
				}
				else {
					me._checkb2.style.visibility=me._checkb2.ggVisible?'inherit':'hidden';
					me._checkb2.style.opacity=1;
				}
			}
		}
		this._checkb2.ggUpdatePosition=function (useTransition) {
		}
		this._node2checkmarks.appendChild(this._checkb2);
		this.__3_button_container.appendChild(this._node2checkmarks);
		this._node1checkmarks=document.createElement('div');
		this._node1checkmarks.ggId="Node1checkmarks";
		this._node1checkmarks.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._node1checkmarks.ggVisible=false;
		this._node1checkmarks.className='ggskin ggskin_container ';
		this._node1checkmarks.ggType='container';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		this._node1checkmarks.setAttribute('style',hs);
		this._node1checkmarks.style[domTransform + 'Origin']='50% 50%';
		me._node1checkmarks.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._node1checkmarks.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._node1checkmarks.ggCurrentLogicStateVisible = -1;
		this._node1checkmarks.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['node'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['node'] != 1)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node1checkmarks.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node1checkmarks.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node1checkmarks.style[domTransition]='';
				if (me._node1checkmarks.ggCurrentLogicStateVisible == 0) {
					me._node1checkmarks.style.visibility=(Number(me._node1checkmarks.style.opacity)>0||!me._node1checkmarks.style.opacity)?'inherit':'hidden';
					me._node1checkmarks.ggVisible=true;
				}
				else if (me._node1checkmarks.ggCurrentLogicStateVisible == 1) {
					me._node1checkmarks.style.visibility="hidden";
					me._node1checkmarks.ggVisible=false;
				}
				else {
					me._node1checkmarks.style.visibility="hidden";
					me._node1checkmarks.ggVisible=false;
				}
			}
		}
		this._node1checkmarks.ggUpdatePosition=function (useTransition) {
		}
		this._checka1=document.createElement('div');
		this._checka1__img=document.createElement('img');
		this._checka1__img.className='ggskin ggskin_image';
		this._checka1__img.setAttribute('src',basePath + 'images/checka1.png');
		this._checka1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checka1__img.className='ggskin ggskin_image';
		this._checka1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._checka1__img);
		this._checka1.appendChild(this._checka1__img);
		this._checka1.ggId="checkA1";
		this._checka1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checka1.ggVisible=true;
		this._checka1.className='ggskin ggskin_image ';
		this._checka1.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 413px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._checka1.setAttribute('style',hs);
		this._checka1.style[domTransform + 'Origin']='50% 50%';
		me._checka1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checka1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checka1.ggCurrentLogicStateAlpha = -1;
		this._checka1.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(ggSkinVars['AnswerButtonPushed'] == true) && 
				(ggSkinVars['AdvButtonPushed'] == true) && 
				(ggSkinVars['node'] == 1)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checka1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checka1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checka1.style[domTransition]='opacity none, visibility none';
				if (me._checka1.ggCurrentLogicStateAlpha == 0) {
					me._checka1.style.visibility=me._checka1.ggVisible?'inherit':'hidden';
					me._checka1.style.opacity=1;
				}
				else {
					me._checka1.style.visibility=me._checka1.ggVisible?'inherit':'hidden';
					me._checka1.style.opacity=1;
				}
			}
		}
		this._checka1.ggUpdatePosition=function (useTransition) {
		}
		this._node1checkmarks.appendChild(this._checka1);
		this._checki1=document.createElement('div');
		this._checki1__img=document.createElement('img');
		this._checki1__img.className='ggskin ggskin_image';
		this._checki1__img.setAttribute('src',basePath + 'images/checki1.png');
		this._checki1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checki1__img.className='ggskin ggskin_image';
		this._checki1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._checki1__img);
		this._checki1.appendChild(this._checki1__img);
		this._checki1.ggId="checkI1";
		this._checki1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checki1.ggVisible=true;
		this._checki1.className='ggskin ggskin_image ';
		this._checki1.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._checki1.setAttribute('style',hs);
		this._checki1.style[domTransform + 'Origin']='50% 50%';
		me._checki1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checki1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checki1.ggCurrentLogicStateAlpha = -1;
		this._checki1.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(ggSkinVars['AnswerButtonPushed'] == true) && 
				(ggSkinVars['IntermButtonPushed'] == true) && 
				(ggSkinVars['node'] == 1)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checki1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checki1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checki1.style[domTransition]='opacity none, visibility none';
				if (me._checki1.ggCurrentLogicStateAlpha == 0) {
					me._checki1.style.visibility=me._checki1.ggVisible?'inherit':'hidden';
					me._checki1.style.opacity=1;
				}
				else {
					me._checki1.style.visibility=me._checki1.ggVisible?'inherit':'hidden';
					me._checki1.style.opacity=1;
				}
			}
		}
		this._checki1.ggUpdatePosition=function (useTransition) {
		}
		this._node1checkmarks.appendChild(this._checki1);
		this._checkb1=document.createElement('div');
		this._checkb1__img=document.createElement('img');
		this._checkb1__img.className='ggskin ggskin_image';
		this._checkb1__img.setAttribute('src',basePath + 'images/checkb1.png');
		this._checkb1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checkb1__img.className='ggskin ggskin_image';
		this._checkb1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._checkb1__img);
		this._checkb1.appendChild(this._checkb1__img);
		this._checkb1.ggId="checkB1";
		this._checkb1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checkb1.ggVisible=true;
		this._checkb1.className='ggskin ggskin_image ';
		this._checkb1.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._checkb1.setAttribute('style',hs);
		this._checkb1.style[domTransform + 'Origin']='50% 50%';
		me._checkb1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkb1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkb1.ggCurrentLogicStateAlpha = -1;
		this._checkb1.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(ggSkinVars['BeginnerButtonPushed'] == true) && 
				(ggSkinVars['AnswerButtonPushed'] == true) && 
				(ggSkinVars['node'] == 1)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkb1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkb1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkb1.style[domTransition]='opacity none, visibility none';
				if (me._checkb1.ggCurrentLogicStateAlpha == 0) {
					me._checkb1.style.visibility=me._checkb1.ggVisible?'inherit':'hidden';
					me._checkb1.style.opacity=1;
				}
				else {
					me._checkb1.style.visibility=me._checkb1.ggVisible?'inherit':'hidden';
					me._checkb1.style.opacity=1;
				}
			}
		}
		this._checkb1.ggUpdatePosition=function (useTransition) {
		}
		this._node1checkmarks.appendChild(this._checkb1);
		this.__3_button_container.appendChild(this._node1checkmarks);
		this._lesson_bar_node_1.appendChild(this.__3_button_container);
		this._discover_more_text=document.createElement('div');
		this._discover_more_text__text=document.createElement('div');
		this._discover_more_text.className='ggskin ggskin_textdiv';
		this._discover_more_text.ggTextDiv=this._discover_more_text__text;
		this._discover_more_text.ggId="Discover more text";
		this._discover_more_text.ggTop=-66;
		this._discover_more_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._discover_more_text.ggVisible=true;
		this._discover_more_text.className='ggskin ggskin_text ';
		this._discover_more_text.ggType='text';
		hs ='';
		hs+='height : 16px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : -66px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:none;';
		this._discover_more_text.setAttribute('style',hs);
		this._discover_more_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 215px;';
		hs+='height: 16px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(85,85,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._discover_more_text__text.setAttribute('style',hs);
		this._discover_more_text__text.innerHTML=" Discover more - MAIN BEDS";
		this._discover_more_text.appendChild(this._discover_more_text__text);
		me._discover_more_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._discover_more_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._discover_more_text.ggCurrentLogicStateText = -1;
		this._discover_more_text.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['node'] == 1)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['node'] == 2)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['node'] == 3)
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._discover_more_text.ggCurrentLogicStateText != newLogicStateText) {
				me._discover_more_text.ggCurrentLogicStateText = newLogicStateText;
				me._discover_more_text.style[domTransition]='';
				if (me._discover_more_text.ggCurrentLogicStateText == 0) {
					me._discover_more_text.ggText=" Discover more - MAIN BEDS";
					me._discover_more_text__text.innerHTML=me._discover_more_text.ggText;
					if (me._discover_more_text.ggUpdateText) {
					me._discover_more_text.ggUpdateText=function() {
						var hs=" Discover more - MAIN BEDS";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._discover_more_text.ggUpdatePosition) me._discover_more_text.ggUpdatePosition();
					}
				}
				else if (me._discover_more_text.ggCurrentLogicStateText == 1) {
					me._discover_more_text.ggText=" Discover more - PARV BED";
					me._discover_more_text__text.innerHTML=me._discover_more_text.ggText;
					if (me._discover_more_text.ggUpdateText) {
					me._discover_more_text.ggUpdateText=function() {
						var hs=" Discover more - PARV BED";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._discover_more_text.ggUpdatePosition) me._discover_more_text.ggUpdatePosition();
					}
				}
				else if (me._discover_more_text.ggCurrentLogicStateText == 2) {
					me._discover_more_text.ggText=" Discover more - Ediacaran";
					me._discover_more_text__text.innerHTML=me._discover_more_text.ggText;
					if (me._discover_more_text.ggUpdateText) {
					me._discover_more_text.ggUpdateText=function() {
						var hs=" Discover more - Ediacaran";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._discover_more_text.ggUpdatePosition) me._discover_more_text.ggUpdatePosition();
					}
				}
				else {
					me._discover_more_text.ggText=" Discover more - MAIN BEDS";
					me._discover_more_text__text.innerHTML=me._discover_more_text.ggText;
					if (me._discover_more_text.ggUpdateText) {
					me._discover_more_text.ggUpdateText=function() {
						var hs=" Discover more - MAIN BEDS";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._discover_more_text.ggUpdatePosition) me._discover_more_text.ggUpdatePosition();
					}
				}
			}
		}
		this._discover_more_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._lesson_bar_node_1.appendChild(this._discover_more_text);
		this.divSkin.appendChild(this._lesson_bar_node_1);
		this._intro_text_folder=document.createElement('div');
		this._intro_text_folder.ggId="Intro text folder";
		this._intro_text_folder.ggLeft=-90;
		this._intro_text_folder.ggTop=-35;
		this._intro_text_folder.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._intro_text_folder.ggVisible=true;
		this._intro_text_folder.className='ggskin ggskin_container ';
		this._intro_text_folder.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		this._intro_text_folder.setAttribute('style',hs);
		this._intro_text_folder.style[domTransform + 'Origin']='50% 50%';
		me._intro_text_folder.ggIsActive=function() {
			return false;
		}
		me._intro_text_folder.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._intro_text_folder.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._introwhitebox1=document.createElement('div');
		this._introwhitebox1.ggId="IntroWhiteBox1";
		this._introwhitebox1.ggLeft=-251;
		this._introwhitebox1.ggTop=-184;
		this._introwhitebox1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introwhitebox1.ggVisible=false;
		this._introwhitebox1.className='ggskin ggskin_rectangle ';
		this._introwhitebox1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 257px;';
		hs+='left : -251px;';
		hs+='opacity : 0.93;';
		hs+='position : absolute;';
		hs+='top : -184px;';
		hs+='visibility : hidden;';
		hs+='width : 518px;';
		hs+='pointer-events:auto;';
		this._introwhitebox1.setAttribute('style',hs);
		this._introwhitebox1.style[domTransform + 'Origin']='50% 50%';
		me._introwhitebox1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._introwhitebox1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._introwhitebox1.ggCurrentLogicStateVisible = -1;
		this._introwhitebox1.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['LessoncontVar'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['LessoncontVar'] == 0)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._introwhitebox1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._introwhitebox1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._introwhitebox1.style[domTransition]='';
				if (me._introwhitebox1.ggCurrentLogicStateVisible == 0) {
					me._introwhitebox1.style.visibility=(Number(me._introwhitebox1.style.opacity)>0||!me._introwhitebox1.style.opacity)?'inherit':'hidden';
					me._introwhitebox1.ggVisible=true;
				}
				else if (me._introwhitebox1.ggCurrentLogicStateVisible == 1) {
					me._introwhitebox1.style.visibility="hidden";
					me._introwhitebox1.ggVisible=false;
				}
				else {
					me._introwhitebox1.style.visibility="hidden";
					me._introwhitebox1.ggVisible=false;
				}
			}
		}
		this._introwhitebox1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._intro_text_folder.appendChild(this._introwhitebox1);
		this._lessoncont1=document.createElement('div');
		this._lessoncont1.ggId="LessonCont1";
		this._lessoncont1.ggLeft=-67;
		this._lessoncont1.ggTop=-45;
		this._lessoncont1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._lessoncont1.ggVisible=false;
		this._lessoncont1.className='ggskin ggskin_container ';
		this._lessoncont1.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : -45px;';
		hs+='visibility : hidden;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		this._lessoncont1.setAttribute('style',hs);
		this._lessoncont1.style[domTransform + 'Origin']='50% 50%';
		me._lessoncont1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._lessoncont1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._lessoncont1.ggCurrentLogicStateVisible = -1;
		this._lessoncont1.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['LessoncontVar'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['LessoncontVar'] == 0)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._lessoncont1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._lessoncont1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._lessoncont1.style[domTransition]='';
				if (me._lessoncont1.ggCurrentLogicStateVisible == 0) {
					me._lessoncont1.style.visibility=(Number(me._lessoncont1.style.opacity)>0||!me._lessoncont1.style.opacity)?'inherit':'hidden';
					me._lessoncont1.ggVisible=true;
				}
				else if (me._lessoncont1.ggCurrentLogicStateVisible == 1) {
					me._lessoncont1.style.visibility="hidden";
					me._lessoncont1.ggVisible=false;
				}
				else {
					me._lessoncont1.style.visibility="hidden";
					me._lessoncont1.ggVisible=false;
				}
			}
		}
		this._lessoncont1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._intro=document.createElement('div');
		this._intro__text=document.createElement('div');
		this._intro.className='ggskin ggskin_textdiv';
		this._intro.ggTextDiv=this._intro__text;
		this._intro.ggId="Intro";
		this._intro.ggLeft=-239;
		this._intro.ggTop=-170;
		this._intro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._intro.ggVisible=true;
		this._intro.className='ggskin ggskin_text ';
		this._intro.ggType='text';
		hs ='';
		hs+='height : 223px;';
		hs+='left : -239px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : inherit;';
		hs+='width : 490px;';
		hs+='pointer-events:auto;';
		this._intro.setAttribute('style',hs);
		this._intro.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 490px;';
		hs+='height: 223px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: justify;';
		hs+='white-space: normal;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._intro__text.setAttribute('style',hs);
		this._intro__text.innerHTML="<font size=\"3\">You have just been introduced to some of the exciting features seen throughout this location.<br><br\/>Next, you will see several icons that will enable you to uncover additional information and explore all the different locations here at Nilpena.   You can test your knowledge by using the <i>\"Discover more\"<\/i> questions that will appear at the bottom of the screen.<br\/><br\/><b><i>Explore your world!<\/i><\/b><\/font>";
		this._intro.appendChild(this._intro__text);
		me._intro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._intro.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._intro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._lessoncont1.appendChild(this._intro);
		this._nextbeginbutton=document.createElement('div');
		this._nextbeginbutton__text=document.createElement('div');
		this._nextbeginbutton.className='ggskin ggskin_textdiv';
		this._nextbeginbutton.ggTextDiv=this._nextbeginbutton__text;
		this._nextbeginbutton.ggId="Nextbeginbutton";
		this._nextbeginbutton.ggLeft=118;
		this._nextbeginbutton.ggTop=29;
		this._nextbeginbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._nextbeginbutton.ggVisible=true;
		this._nextbeginbutton.className='ggskin ggskin_text ';
		this._nextbeginbutton.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 118px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 127px;';
		hs+='pointer-events:auto;';
		this._nextbeginbutton.setAttribute('style',hs);
		this._nextbeginbutton.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 127px;';
		hs+='height: 23px;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 6px 2px 6px 2px;';
		hs+='overflow: hidden;';
		this._nextbeginbutton__text.setAttribute('style',hs);
		this._nextbeginbutton__text.innerHTML="<font size=\"4\">CONTINUE<\/font>";
		this._nextbeginbutton.appendChild(this._nextbeginbutton__text);
		me._nextbeginbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._nextbeginbutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._nextbeginbutton.onclick=function (e) {
			ggSkinVars['LessoncontVar'] = Number("0");
			ggSkinVars['viewmarker'] = true;
			if (me.player.transitionsDisabled) {
				me._lesson_bar_node_1.style[domTransition]='none';
			} else {
				me._lesson_bar_node_1.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._lesson_bar_node_1.ggParameter.rx+=0;me._lesson_bar_node_1.ggParameter.ry+=-50;
			me._lesson_bar_node_1.style[domTransform]=parameterToTransform(me._lesson_bar_node_1.ggParameter);
			me.player.enterFullscreen();
		}
		this._nextbeginbutton.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._lessoncont1.appendChild(this._nextbeginbutton);
		this._intro_text_folder.appendChild(this._lessoncont1);
		this.divSkin.appendChild(this._intro_text_folder);
		this._poitextcontainer=document.createElement('div');
		this._poitextcontainer.ggId="POITextContainer";
		this._poitextcontainer.ggLeft=-27;
		this._poitextcontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._poitextcontainer.ggVisible=false;
		this._poitextcontainer.className='ggskin ggskin_container ';
		this._poitextcontainer.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -27px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:none;';
		this._poitextcontainer.setAttribute('style',hs);
		this._poitextcontainer.style[domTransform + 'Origin']='50% 50%';
		me._poitextcontainer.ggIsActive=function() {
			return false;
		}
		me._poitextcontainer.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._poitextcontainer.ggCurrentLogicStateVisible = -1;
		this._poitextcontainer.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['TextContVisible'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['TextContVisible'] == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._poitextcontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._poitextcontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._poitextcontainer.style[domTransition]='';
				if (me._poitextcontainer.ggCurrentLogicStateVisible == 0) {
					me._poitextcontainer.style.visibility=(Number(me._poitextcontainer.style.opacity)>0||!me._poitextcontainer.style.opacity)?'inherit':'hidden';
					me._poitextcontainer.ggVisible=true;
				}
				else if (me._poitextcontainer.ggCurrentLogicStateVisible == 1) {
					me._poitextcontainer.style.visibility="hidden";
					me._poitextcontainer.ggVisible=false;
				}
				else {
					me._poitextcontainer.style.visibility="hidden";
					me._poitextcontainer.ggVisible=false;
				}
			}
		}
		this._poitextcontainer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._blacktextbackground=document.createElement('div');
		this._blacktextbackground.ggId="Blacktextbackground";
		this._blacktextbackground.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._blacktextbackground.ggVisible=true;
		this._blacktextbackground.className='ggskin ggskin_rectangle ';
		this._blacktextbackground.ggType='rectangle';
		hs ='';
		hs+='background : #181818;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 246px;';
		hs+='left : -203px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -33px;';
		hs+='visibility : inherit;';
		hs+='width : 437px;';
		hs+='pointer-events:auto;';
		this._blacktextbackground.setAttribute('style',hs);
		this._blacktextbackground.style[domTransform + 'Origin']='50% 50%';
		me._blacktextbackground.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._blacktextbackground.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._blacktextbackground.ggUpdatePosition=function (useTransition) {
		}
		this._poitextcontainer.appendChild(this._blacktextbackground);
		this._text_from_location=document.createElement('div');
		this._text_from_location__text=document.createElement('div');
		this._text_from_location.className='ggskin ggskin_textdiv';
		this._text_from_location.ggTextDiv=this._text_from_location__text;
		this._text_from_location.ggId="Text_from_Location";
		this._text_from_location.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_from_location.ggVisible=true;
		this._text_from_location.className='ggskin ggskin_text ';
		this._text_from_location.ggType='text';
		hs ='';
		hs+='height : 236px;';
		hs+='left : -199px;';
		hs+='position : absolute;';
		hs+='top : -28px;';
		hs+='visibility : inherit;';
		hs+='width : 396px;';
		hs+='pointer-events:auto;';
		this._text_from_location.setAttribute('style',hs);
		this._text_from_location.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 396px;';
		hs+='height: 236px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		this._text_from_location__text.setAttribute('style',hs);
		this._text_from_location__text.innerHTML="";
		this._text_from_location.appendChild(this._text_from_location__text);
		me._text_from_location.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_from_location.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_from_location.ggUpdatePosition=function (useTransition) {
		}
		this._poitextcontainer.appendChild(this._text_from_location);
		this._introvideoxi0=document.createElement('div');
		this._introvideoxi0__img=document.createElement('img');
		this._introvideoxi0__img.className='ggskin ggskin_image';
		this._introvideoxi0__img.setAttribute('src',basePath + 'images/introvideoxi0.png');
		this._introvideoxi0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._introvideoxi0__img.className='ggskin ggskin_image';
		this._introvideoxi0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._introvideoxi0__img);
		this._introvideoxi0.appendChild(this._introvideoxi0__img);
		this._introvideoxi0.ggId="IntroVideoXi";
		this._introvideoxi0.ggLeft=182;
		this._introvideoxi0.ggTop=-50;
		this._introvideoxi0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introvideoxi0.ggVisible=true;
		this._introvideoxi0.className='ggskin ggskin_image ';
		this._introvideoxi0.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._introvideoxi0.setAttribute('style',hs);
		this._introvideoxi0.style[domTransform + 'Origin']='50% 50%';
		me._introvideoxi0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._introvideoxi0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._introvideoxi0.onclick=function (e) {
			ggSkinVars['viewmarker'] = true;
			ggSkinVars['TextContVisible'] = false;
		}
		this._introvideoxi0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._poitextcontainer.appendChild(this._introvideoxi0);
		this.divSkin.appendChild(this._poitextcontainer);
		this._poiimagecontainer=document.createElement('div');
		this._poiimagecontainer.ggId="POIImageContainer";
		this._poiimagecontainer.ggLeft=-5;
		this._poiimagecontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._poiimagecontainer.ggVisible=false;
		this._poiimagecontainer.className='ggskin ggskin_container ';
		this._poiimagecontainer.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='top : 98px;';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:none;';
		this._poiimagecontainer.setAttribute('style',hs);
		this._poiimagecontainer.style[domTransform + 'Origin']='50% 50%';
		me._poiimagecontainer.ggIsActive=function() {
			return false;
		}
		me._poiimagecontainer.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._poiimagecontainer.ggCurrentLogicStateVisible = -1;
		this._poiimagecontainer.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['ImageVisible'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['ImageVisible'] == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._poiimagecontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._poiimagecontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._poiimagecontainer.style[domTransition]='';
				if (me._poiimagecontainer.ggCurrentLogicStateVisible == 0) {
					me._poiimagecontainer.style.visibility=(Number(me._poiimagecontainer.style.opacity)>0||!me._poiimagecontainer.style.opacity)?'inherit':'hidden';
					me._poiimagecontainer.ggVisible=true;
				}
				else if (me._poiimagecontainer.ggCurrentLogicStateVisible == 1) {
					me._poiimagecontainer.style.visibility="hidden";
					me._poiimagecontainer.ggVisible=false;
				}
				else {
					me._poiimagecontainer.style.visibility="hidden";
					me._poiimagecontainer.ggVisible=false;
				}
			}
		}
		this._poiimagecontainer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._imagewhitebackground=document.createElement('div');
		this._imagewhitebackground__text=document.createElement('div');
		this._imagewhitebackground.className='ggskin ggskin_textdiv';
		this._imagewhitebackground.ggTextDiv=this._imagewhitebackground__text;
		this._imagewhitebackground.ggId="ImageWhitebackground";
		this._imagewhitebackground.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._imagewhitebackground.ggVisible=true;
		this._imagewhitebackground.className='ggskin ggskin_text ';
		this._imagewhitebackground.ggType='text';
		hs ='';
		hs+='height : 268px;';
		hs+='left : -241px;';
		hs+='position : absolute;';
		hs+='top : -78px;';
		hs+='visibility : inherit;';
		hs+='width : 489px;';
		hs+='pointer-events:auto;';
		this._imagewhitebackground.setAttribute('style',hs);
		this._imagewhitebackground.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 489px;';
		hs+='height: 268px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._imagewhitebackground__text.setAttribute('style',hs);
		this._imagewhitebackground__text.innerHTML="";
		this._imagewhitebackground.appendChild(this._imagewhitebackground__text);
		me._imagewhitebackground.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._imagewhitebackground.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._imagewhitebackground.ggUpdatePosition=function (useTransition) {
		}
		this._poiimagecontainer.appendChild(this._imagewhitebackground);
		this._imagetext_and_white_background=document.createElement('div');
		this._imagetext_and_white_background__text=document.createElement('div');
		this._imagetext_and_white_background.className='ggskin ggskin_textdiv';
		this._imagetext_and_white_background.ggTextDiv=this._imagetext_and_white_background__text;
		this._imagetext_and_white_background.ggId="ImageText and White background";
		this._imagetext_and_white_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._imagetext_and_white_background.ggVisible=true;
		this._imagetext_and_white_background.className='ggskin ggskin_text ';
		this._imagetext_and_white_background.ggType='text';
		hs ='';
		hs+='height : 258px;';
		hs+='left : -231px;';
		hs+='position : absolute;';
		hs+='top : -72px;';
		hs+='visibility : inherit;';
		hs+='width : 235px;';
		hs+='pointer-events:auto;';
		this._imagetext_and_white_background.setAttribute('style',hs);
		this._imagetext_and_white_background.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 235px;';
		hs+='height: 258px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 6px 0px 6px;';
		hs+='overflow: hidden;';
		this._imagetext_and_white_background__text.setAttribute('style',hs);
		this._imagetext_and_white_background__text.innerHTML="";
		this._imagetext_and_white_background.appendChild(this._imagetext_and_white_background__text);
		me._imagetext_and_white_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._imagetext_and_white_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._imagetext_and_white_background.ggUpdatePosition=function (useTransition) {
		}
		this._poiimagecontainer.appendChild(this._imagetext_and_white_background);
		this._externalimage=document.createElement('div');
		this._externalimage__img=document.createElement('img');
		this._externalimage__img.className='ggskin ggskin_external';
		this._externalimage__img.onload=function() {me._externalimage.ggUpdatePosition();}
		this._externalimage__img.setAttribute('src',basePath + '');
		this._externalimage__img['ondragstart']=function() { return false; };
		hs ='';
		this._externalimage.appendChild(this._externalimage__img);
		this._externalimage.ggId="externalImage";
		this._externalimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._externalimage.ggVisible=true;
		this._externalimage.className='ggskin ggskin_external ';
		this._externalimage.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 249px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : -68px;';
		hs+='visibility : inherit;';
		hs+='width : 199px;';
		hs+='pointer-events:auto;';
		this._externalimage.setAttribute('style',hs);
		this._externalimage.style[domTransform + 'Origin']='50% 50%';
		me._externalimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._externalimage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._externalimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._externalimage.clientWidth;
			var parentHeight = me._externalimage.clientHeight;
			var aspectRatioDiv = me._externalimage.clientWidth / me._externalimage.clientHeight;
			var aspectRatioImg = me._externalimage__img.naturalWidth / me._externalimage__img.naturalHeight;
			if (me._externalimage__img.naturalWidth < parentWidth) parentWidth = me._externalimage__img.naturalWidth;
			if (me._externalimage__img.naturalHeight < parentHeight) parentHeight = me._externalimage__img.naturalHeight;
			var currentWidth = me._externalimage__img.naturalWidth;
			var currentHeight = me._externalimage__img.naturalHeight;
			me._externalimage__img.setAttribute('style','position: absolute; left: 0px; top: 0px;-webkit-user-drag:none;pointer-events:none;');
		}
		this._poiimagecontainer.appendChild(this._externalimage);
		this._introvideoximage=document.createElement('div');
		this._introvideoximage__img=document.createElement('img');
		this._introvideoximage__img.className='ggskin ggskin_image';
		this._introvideoximage__img.setAttribute('src',basePath + 'images/introvideoximage.png');
		this._introvideoximage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._introvideoximage__img.className='ggskin ggskin_image';
		this._introvideoximage__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._introvideoximage__img);
		this._introvideoximage.appendChild(this._introvideoximage__img);
		this._introvideoximage.ggId="IntroVideoXImage";
		this._introvideoximage.ggLeft=198;
		this._introvideoximage.ggTop=-91;
		this._introvideoximage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introvideoximage.ggVisible=true;
		this._introvideoximage.className='ggskin ggskin_image ';
		this._introvideoximage.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 198px;';
		hs+='position : absolute;';
		hs+='top : -91px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._introvideoximage.setAttribute('style',hs);
		this._introvideoximage.style[domTransform + 'Origin']='50% 50%';
		me._introvideoximage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._introvideoximage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._introvideoximage.onclick=function (e) {
			ggSkinVars['ImageVisible'] = false;
			ggSkinVars['viewmarker'] = true;
		}
		this._introvideoximage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._poiimagecontainer.appendChild(this._introvideoximage);
		this.divSkin.appendChild(this._poiimagecontainer);
		this._poiobjectcontainer=document.createElement('div');
		this._poiobjectcontainer.ggId="POIObjectContainer";
		this._poiobjectcontainer.ggLeft=0;
		this._poiobjectcontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._poiobjectcontainer.ggVisible=false;
		this._poiobjectcontainer.className='ggskin ggskin_container ';
		this._poiobjectcontainer.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 105px;';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:none;';
		this._poiobjectcontainer.setAttribute('style',hs);
		this._poiobjectcontainer.style[domTransform + 'Origin']='50% 50%';
		me._poiobjectcontainer.ggIsActive=function() {
			return false;
		}
		me._poiobjectcontainer.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._poiobjectcontainer.ggCurrentLogicStateVisible = -1;
		this._poiobjectcontainer.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['ObjContVisible'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['ObjContVisible'] == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._poiobjectcontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._poiobjectcontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._poiobjectcontainer.style[domTransition]='';
				if (me._poiobjectcontainer.ggCurrentLogicStateVisible == 0) {
					me._poiobjectcontainer.style.visibility=(Number(me._poiobjectcontainer.style.opacity)>0||!me._poiobjectcontainer.style.opacity)?'inherit':'hidden';
					me._poiobjectcontainer.ggVisible=true;
				}
				else if (me._poiobjectcontainer.ggCurrentLogicStateVisible == 1) {
					me._poiobjectcontainer.style.visibility="hidden";
					me._poiobjectcontainer.ggVisible=false;
				}
				else {
					me._poiobjectcontainer.style.visibility="hidden";
					me._poiobjectcontainer.ggVisible=false;
				}
			}
		}
		this._poiobjectcontainer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._dicwhitebackground=document.createElement('div');
		this._dicwhitebackground__text=document.createElement('div');
		this._dicwhitebackground.className='ggskin ggskin_textdiv';
		this._dicwhitebackground.ggTextDiv=this._dicwhitebackground__text;
		this._dicwhitebackground.ggId="DicWhitebackground";
		this._dicwhitebackground.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dicwhitebackground.ggVisible=true;
		this._dicwhitebackground.className='ggskin ggskin_text ';
		this._dicwhitebackground.ggType='text';
		hs ='';
		hs+='height : 268px;';
		hs+='left : -256px;';
		hs+='position : absolute;';
		hs+='top : -94px;';
		hs+='visibility : inherit;';
		hs+='width : 494px;';
		hs+='pointer-events:auto;';
		this._dicwhitebackground.setAttribute('style',hs);
		this._dicwhitebackground.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 494px;';
		hs+='height: 268px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._dicwhitebackground__text.setAttribute('style',hs);
		this._dicwhitebackground__text.innerHTML="";
		this._dicwhitebackground.appendChild(this._dicwhitebackground__text);
		me._dicwhitebackground.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dicwhitebackground.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dicwhitebackground.ggUpdatePosition=function (useTransition) {
		}
		this._poiobjectcontainer.appendChild(this._dicwhitebackground);
		this._dicobjecttextwindow=document.createElement('div');
		this._dicobjecttextwindow__text=document.createElement('div');
		this._dicobjecttextwindow.className='ggskin ggskin_textdiv';
		this._dicobjecttextwindow.ggTextDiv=this._dicobjecttextwindow__text;
		this._dicobjecttextwindow.ggId="DicObjectTextWindow";
		this._dicobjecttextwindow.ggLeft=-228;
		this._dicobjecttextwindow.ggTop=-625;
		this._dicobjecttextwindow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dicobjecttextwindow.ggVisible=false;
		this._dicobjecttextwindow.className='ggskin ggskin_text ';
		this._dicobjecttextwindow.ggType='text';
		hs ='';
		hs+='height : 266px;';
		hs+='left : -228px;';
		hs+='position : absolute;';
		hs+='top : -625px;';
		hs+='visibility : hidden;';
		hs+='width : 438px;';
		hs+='pointer-events:auto;';
		this._dicobjecttextwindow.setAttribute('style',hs);
		this._dicobjecttextwindow.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 438px;';
		hs+='height: 266px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._dicobjecttextwindow__text.setAttribute('style',hs);
		this._dicobjecttextwindow__text.innerHTML="";
		this._dicobjecttextwindow.appendChild(this._dicobjecttextwindow__text);
		me._dicobjecttextwindow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dicobjecttextwindow.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._dicobjecttextwindow.ggCurrentLogicStatePosition = -1;
		me._dicobjecttextwindow.ggCurrentLogicStateVisible = -1;
		this._dicobjecttextwindow.ggUpdateConditionTimer=function () {
			var newLogicStatePosition;
			if (
				(ggSkinVars['IsObjectVisible'] == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(ggSkinVars['IsObjectVisible'] == false)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._dicobjecttextwindow.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._dicobjecttextwindow.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._dicobjecttextwindow.style[domTransition]='left none, top none';
				if (me._dicobjecttextwindow.ggCurrentLogicStatePosition == 0) {
					me._dicobjecttextwindow.ggLeft=-228;
					me._dicobjecttextwindow.ggTop=-113;
					me._dicobjecttextwindow.ggUpdatePosition(true);
				}
				else if (me._dicobjecttextwindow.ggCurrentLogicStatePosition == 1) {
					me._dicobjecttextwindow.ggLeft=-228;
					me._dicobjecttextwindow.ggTop=-625;
					me._dicobjecttextwindow.ggUpdatePosition(true);
				}
				else {
					me._dicobjecttextwindow.ggLeft=-228;
					me._dicobjecttextwindow.ggTop=-625;
					me._dicobjecttextwindow.ggUpdatePosition(true);
				}
			}
			var newLogicStateVisible;
			if (
				(ggSkinVars['IsObjectVisible'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['IsObjectVisible'] == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dicobjecttextwindow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dicobjecttextwindow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dicobjecttextwindow.style[domTransition]='left none, top none';
				if (me._dicobjecttextwindow.ggCurrentLogicStateVisible == 0) {
					me._dicobjecttextwindow.style.visibility=(Number(me._dicobjecttextwindow.style.opacity)>0||!me._dicobjecttextwindow.style.opacity)?'inherit':'hidden';
					me._dicobjecttextwindow.ggVisible=true;
				}
				else if (me._dicobjecttextwindow.ggCurrentLogicStateVisible == 1) {
					me._dicobjecttextwindow.style.visibility="hidden";
					me._dicobjecttextwindow.ggVisible=false;
				}
				else {
					me._dicobjecttextwindow.style.visibility="hidden";
					me._dicobjecttextwindow.ggVisible=false;
				}
			}
		}
		this._dicobjecttextwindow.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._poiobjectcontainer.appendChild(this._dicobjecttextwindow);
		this._blackvideobackground_obj=document.createElement('div');
		this._blackvideobackground_obj.ggId="Blackvideobackground_obj";
		this._blackvideobackground_obj.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._blackvideobackground_obj.ggVisible=false;
		this._blackvideobackground_obj.className='ggskin ggskin_rectangle ';
		this._blackvideobackground_obj.ggType='rectangle';
		hs ='';
		hs+='background : #181818;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 263px;';
		hs+='left : -210px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -93px;';
		hs+='visibility : hidden;';
		hs+='width : 449px;';
		hs+='pointer-events:auto;';
		this._blackvideobackground_obj.setAttribute('style',hs);
		this._blackvideobackground_obj.style[domTransform + 'Origin']='50% 50%';
		me._blackvideobackground_obj.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._blackvideobackground_obj.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._blackvideobackground_obj.ggCurrentLogicStateVisible = -1;
		this._blackvideobackground_obj.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['ObjectVideoVisible'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['ObjectVideoVisible'] == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._blackvideobackground_obj.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._blackvideobackground_obj.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._blackvideobackground_obj.style[domTransition]='';
				if (me._blackvideobackground_obj.ggCurrentLogicStateVisible == 0) {
					me._blackvideobackground_obj.style.visibility=(Number(me._blackvideobackground_obj.style.opacity)>0||!me._blackvideobackground_obj.style.opacity)?'inherit':'hidden';
					me._blackvideobackground_obj.ggVisible=true;
				}
				else if (me._blackvideobackground_obj.ggCurrentLogicStateVisible == 1) {
					me._blackvideobackground_obj.style.visibility="hidden";
					me._blackvideobackground_obj.ggVisible=false;
				}
				else {
					me._blackvideobackground_obj.style.visibility="hidden";
					me._blackvideobackground_obj.ggVisible=false;
				}
			}
		}
		this._blackvideobackground_obj.ggUpdatePosition=function (useTransition) {
		}
		this._poiobjectcontainer.appendChild(this._blackvideobackground_obj);
		this._dicvideo=document.createElement('div');
		this._dicvideo.seekbars = [];
		this._dicvideo.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._dicvideo.seekbars.length; i++) {
					var seekbar = me.findElements(me._dicvideo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._dicvideo.hasChildNodes()) {
				me._dicvideo.removeChild(me._dicvideo.lastChild);
			}
			if (me._dicvideo__vid) {
				me._dicvideo__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				me._dicvideo.ggVideoNotLoaded = true;
				return;
			}
			me._dicvideo.ggVideoNotLoaded = false;
			me._dicvideo__vid=document.createElement('video');
			me._dicvideo__vid.className='ggskin ggskin_video';
			me._dicvideo__vid.setAttribute('width', '100%');
			me._dicvideo__vid.setAttribute('height', '100%');
			me._dicvideo__vid.setAttribute('controls', '');
			me._dicvideo__source=document.createElement('source');
			me._dicvideo__source.setAttribute('src', media);
			me._dicvideo__vid.setAttribute('playsinline', 'playsinline');
			me._dicvideo__vid.appendChild(me._dicvideo__source);
			me._dicvideo.appendChild(me._dicvideo__vid);
			var videoEl = me.player.registerVideoElement('DicVideo', me._dicvideo__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			me._dicvideo.ggVideoSource = media;
		}
		this._dicvideo.ggId="DicVideo";
		this._dicvideo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dicvideo.ggVisible=false;
		this._dicvideo.className='ggskin ggskin_video ';
		this._dicvideo.ggType='video';
		hs ='';
		hs+='height : 263px;';
		hs+='left : -209px;';
		hs+='position : absolute;';
		hs+='top : -605px;';
		hs+='visibility : hidden;';
		hs+='width : 449px;';
		hs+='pointer-events:auto;';
		this._dicvideo.setAttribute('style',hs);
		this._dicvideo.style[domTransform + 'Origin']='50% 50%';
		me._dicvideo.ggIsActive=function() {
			if (me._dicvideo__vid != null) {
				return (me._dicvideo__vid.currentTime > 0 && me._dicvideo__vid.paused == false && me._dicvideo__vid.ended == false);
			} else {
				return false;
			}
		}
		me._dicvideo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._dicvideo.ggCurrentLogicStatePosition = -1;
		me._dicvideo.ggCurrentLogicStateVisible = -1;
		this._dicvideo.ggUpdateConditionTimer=function () {
			var newLogicStatePosition;
			if (
				(ggSkinVars['ObjectVideoVisible'] == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(ggSkinVars['ObjectVideoVisible'] == false)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._dicvideo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._dicvideo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._dicvideo.style[domTransition]='left none, top none';
				if (me._dicvideo.ggCurrentLogicStatePosition == 0) {
					me._dicvideo.style.left='-209px';
					me._dicvideo.style.top='-93px';
				}
				else if (me._dicvideo.ggCurrentLogicStatePosition == 1) {
					me._dicvideo.style.left='-209px';
					me._dicvideo.style.top='-605px';
				}
				else {
					me._dicvideo.style.left='-209px';
					me._dicvideo.style.top='-605px';
				}
			}
			var newLogicStateVisible;
			if (
				(ggSkinVars['ObjectVideoVisible'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['ObjectVideoVisible'] == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dicvideo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dicvideo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dicvideo.style[domTransition]='left none, top none';
				if (me._dicvideo.ggCurrentLogicStateVisible == 0) {
					me._dicvideo.style.visibility=(Number(me._dicvideo.style.opacity)>0||!me._dicvideo.style.opacity)?'inherit':'hidden';
					if (me._dicvideo.ggVideoNotLoaded) {
						me._dicvideo.ggInitMedia(me._dicvideo.ggVideoSource);
					}
					me._dicvideo.ggVisible=true;
				}
				else if (me._dicvideo.ggCurrentLogicStateVisible == 1) {
					me._dicvideo.style.visibility="hidden";
					me._dicvideo.ggInitMedia('');
					me._dicvideo.ggVisible=false;
				}
				else {
					me._dicvideo.style.visibility="hidden";
					me._dicvideo.ggInitMedia('');
					me._dicvideo.ggVisible=false;
				}
			}
		}
		this._dicvideo.ggUpdatePosition=function (useTransition) {
		}
		this._poiobjectcontainer.appendChild(this._dicvideo);
		this._dicinfo=document.createElement('div');
		this._dicinfo__text=document.createElement('div');
		this._dicinfo.className='ggskin ggskin_textdiv';
		this._dicinfo.ggTextDiv=this._dicinfo__text;
		this._dicinfo.ggId="DicInfo";
		this._dicinfo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dicinfo.ggVisible=false;
		this._dicinfo.className='ggskin ggskin_text ';
		this._dicinfo.ggType='text';
		hs ='';
		hs+='height : 246px;';
		hs+='left : -203px;';
		hs+='position : absolute;';
		hs+='top : -84px;';
		hs+='visibility : hidden;';
		hs+='width : 425px;';
		hs+='pointer-events:auto;';
		this._dicinfo.setAttribute('style',hs);
		this._dicinfo.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 425px;';
		hs+='height: 246px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 9px 10px 9px 10px;';
		hs+='overflow: hidden;';
		this._dicinfo__text.setAttribute('style',hs);
		this._dicinfo__text.innerHTML="";
		this._dicinfo.appendChild(this._dicinfo__text);
		me._dicinfo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dicinfo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._dicinfo.ggCurrentLogicStateText = -1;
		this._dicinfo.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['WhichObjectVar'] == 'dic')
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'par')
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'asp')
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'tri')
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'med')
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'eoa')
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'spr')
			)
			{
				newLogicStateText = 6;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._dicinfo.ggCurrentLogicStateText != newLogicStateText) {
				me._dicinfo.ggCurrentLogicStateText = newLogicStateText;
				me._dicinfo.style[domTransition]='';
				if (me._dicinfo.ggCurrentLogicStateText == 0) {
					me._dicinfo.ggText="<font size=\"2\">A fossil of the Ediacaran organism <i>\"Dickinsonia costata\".<\/i> This species is generally oval in shape, with a segmented body divided down the middle with a very small ridge. The smallest specimens are less than a centimeter in diameter with 6 to 10 segments; larger specimens can get up to 20 cm in diameter with more than 50 segments. These fossils are abundant in South Australia and are also found in Russia and the Ukraine.<\/font>";
					me._dicinfo__text.innerHTML=me._dicinfo.ggText;
					if (me._dicinfo.ggUpdateText) {
					me._dicinfo.ggUpdateText=function() {
						var hs="<font size=\"2\">A fossil of the Ediacaran organism <i>\"Dickinsonia costata\".<\/i> This species is generally oval in shape, with a segmented body divided down the middle with a very small ridge. The smallest specimens are less than a centimeter in diameter with 6 to 10 segments; larger specimens can get up to 20 cm in diameter with more than 50 segments. These fossils are abundant in South Australia and are also found in Russia and the Ukraine.<\/font>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicinfo.ggUpdatePosition) me._dicinfo.ggUpdatePosition();
					}
				}
				else if (me._dicinfo.ggCurrentLogicStateText == 1) {
					me._dicinfo.ggText="<font size=\"2\">A fossil of the Ediacaran organism <i>Parvancorina minchami.<\/i> The name of this small anchor-shaped organism actually means small anchor! It has two differentiated ends with a middle ridge joining the head arc to the tail end. Specimens can be quite tiny, and the shape of the fossil changes somewhat according to the size of the fossil. This species is found in South Australia as well as in Russia. <\/font> ";
					me._dicinfo__text.innerHTML=me._dicinfo.ggText;
					if (me._dicinfo.ggUpdateText) {
					me._dicinfo.ggUpdateText=function() {
						var hs="<font size=\"2\">A fossil of the Ediacaran organism <i>Parvancorina minchami.<\/i> The name of this small anchor-shaped organism actually means small anchor! It has two differentiated ends with a middle ridge joining the head arc to the tail end. Specimens can be quite tiny, and the shape of the fossil changes somewhat according to the size of the fossil. This species is found in South Australia as well as in Russia. <\/font> ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicinfo.ggUpdatePosition) me._dicinfo.ggUpdatePosition();
					}
				}
				else if (me._dicinfo.ggCurrentLogicStateText == 2) {
					me._dicinfo.ggText="<font size=\"2\">Fossil of the Ediacaran organism <i>\"Aspidella terranovica\". <\/i> This species is disc-shaped and preserved in convex (sticking out) relief on the undersides of beds. Most specimens have smaller circles inside the larger perimeter. They are thought to be the holdfasts, or bases, of larger frond-like organisms. The bases would attach the fronds to the seafloor; in most cases, we only see the holdfast fossil and not an attached frond. These fossils are found in South Australia as well as in the rocks of Mistaken Point, Newfoundland.<\/font> ";
					me._dicinfo__text.innerHTML=me._dicinfo.ggText;
					if (me._dicinfo.ggUpdateText) {
					me._dicinfo.ggUpdateText=function() {
						var hs="<font size=\"2\">Fossil of the Ediacaran organism <i>\"Aspidella terranovica\". <\/i> This species is disc-shaped and preserved in convex (sticking out) relief on the undersides of beds. Most specimens have smaller circles inside the larger perimeter. They are thought to be the holdfasts, or bases, of larger frond-like organisms. The bases would attach the fronds to the seafloor; in most cases, we only see the holdfast fossil and not an attached frond. These fossils are found in South Australia as well as in the rocks of Mistaken Point, Newfoundland.<\/font> ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicinfo.ggUpdatePosition) me._dicinfo.ggUpdatePosition();
					}
				}
				else if (me._dicinfo.ggCurrentLogicStateText == 3) {
					me._dicinfo.ggText="<font size=\"2\">This small three-armed Ediacaran fossil called <i>\u201cTribrachidium heraldicum\u201d<\/i> is an \"enigmatic\" organism. This means we aren't sure what modern groups, if any, it might be closely related to. Three-part symmetry, as seen in the fossil above, is very rare in living organisms today. \u201c<i>T. heraldicum\u201d<\/i> is also found in the White Sea region of Russia, and in the Ukraine. The average diameter of these fossils is 5 centimeters; the specimen seen in this photo is only about 2.5 centimeters (the coin shown for scale is 2 cm in diameter).<\/font> ";
					me._dicinfo__text.innerHTML=me._dicinfo.ggText;
					if (me._dicinfo.ggUpdateText) {
					me._dicinfo.ggUpdateText=function() {
						var hs="<font size=\"2\">This small three-armed Ediacaran fossil called <i>\u201cTribrachidium heraldicum\u201d<\/i> is an \"enigmatic\" organism. This means we aren't sure what modern groups, if any, it might be closely related to. Three-part symmetry, as seen in the fossil above, is very rare in living organisms today. \u201c<i>T. heraldicum\u201d<\/i> is also found in the White Sea region of Russia, and in the Ukraine. The average diameter of these fossils is 5 centimeters; the specimen seen in this photo is only about 2.5 centimeters (the coin shown for scale is 2 cm in diameter).<\/font> ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicinfo.ggUpdatePosition) me._dicinfo.ggUpdatePosition();
					}
				}
				else if (me._dicinfo.ggCurrentLogicStateText == 4) {
					me._dicinfo.ggText="<font size=\"2\">A fossil of the Ediacaran organism referred to as a Medusoid and is similar to a jellyfish\".  This species is generally oval in shape with long tentacles and is very rare.<\/font> ";
					me._dicinfo__text.innerHTML=me._dicinfo.ggText;
					if (me._dicinfo.ggUpdateText) {
					me._dicinfo.ggUpdateText=function() {
						var hs="<font size=\"2\">A fossil of the Ediacaran organism referred to as a Medusoid and is similar to a jellyfish\".  This species is generally oval in shape with long tentacles and is very rare.<\/font> ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicinfo.ggUpdatePosition) me._dicinfo.ggUpdatePosition();
					}
				}
				else if (me._dicinfo.ggCurrentLogicStateText == 5) {
					me._dicinfo.ggText="<font size=\"2\"><i>Eoandromeda<\/i> is an Ediacaran organism consisting of eight radial spiral arms. A few dozen fossil specimens are known, ranging from about 1 to 4 cm in diameter; they are circular in outline and their eight arms, with closed ends, spiral either clockwise or counterclockwise. Ridges cut across both the inside and outside of the spiral arms.<\/font> ";
					me._dicinfo__text.innerHTML=me._dicinfo.ggText;
					if (me._dicinfo.ggUpdateText) {
					me._dicinfo.ggUpdateText=function() {
						var hs="<font size=\"2\"><i>Eoandromeda<\/i> is an Ediacaran organism consisting of eight radial spiral arms. A few dozen fossil specimens are known, ranging from about 1 to 4 cm in diameter; they are circular in outline and their eight arms, with closed ends, spiral either clockwise or counterclockwise. Ridges cut across both the inside and outside of the spiral arms.<\/font> ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicinfo.ggUpdatePosition) me._dicinfo.ggUpdatePosition();
					}
				}
				else if (me._dicinfo.ggCurrentLogicStateText == 6) {
					me._dicinfo.ggText="<font size=\"2\">A fossil of the Ediacaran organism <i>\u201cSpriggina floundersi.\u201d<\/i> This species is segmented and elongate, with a \u201chead\u201d end and a \u201ctail\u201d end that look different from each other. The head-end has a U-shaped shield around it, and there is a central groove that runs along the length of the organism. Some scientists believe this fossil represents an animal, while others are not so sure. These fossils are only found in rocks in South Australia.<\/font> ";
					me._dicinfo__text.innerHTML=me._dicinfo.ggText;
					if (me._dicinfo.ggUpdateText) {
					me._dicinfo.ggUpdateText=function() {
						var hs="<font size=\"2\">A fossil of the Ediacaran organism <i>\u201cSpriggina floundersi.\u201d<\/i> This species is segmented and elongate, with a \u201chead\u201d end and a \u201ctail\u201d end that look different from each other. The head-end has a U-shaped shield around it, and there is a central groove that runs along the length of the organism. Some scientists believe this fossil represents an animal, while others are not so sure. These fossils are only found in rocks in South Australia.<\/font> ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicinfo.ggUpdatePosition) me._dicinfo.ggUpdatePosition();
					}
				}
				else {
					me._dicinfo.ggText="";
					me._dicinfo__text.innerHTML=me._dicinfo.ggText;
					if (me._dicinfo.ggUpdateText) {
					me._dicinfo.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicinfo.ggUpdatePosition) me._dicinfo.ggUpdatePosition();
					}
				}
			}
		}
		this._dicinfo.ggUpdatePosition=function (useTransition) {
		}
		this._poiobjectcontainer.appendChild(this._dicinfo);
		this._compareimages_for_objects=document.createElement('div');
		this._compareimages_for_objects.ggId="CompareImages_for_Objects";
		this._compareimages_for_objects.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._compareimages_for_objects.ggVisible=false;
		this._compareimages_for_objects.className='ggskin ggskin_container ';
		this._compareimages_for_objects.ggType='container';
		hs ='';
		hs+='height : 265px;';
		hs+='left : -209px;';
		hs+='position : absolute;';
		hs+='top : -92px;';
		hs+='visibility : hidden;';
		hs+='width : 449px;';
		hs+='pointer-events:none;';
		this._compareimages_for_objects.setAttribute('style',hs);
		this._compareimages_for_objects.style[domTransform + 'Origin']='50% 50%';
		me._compareimages_for_objects.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._compareimages_for_objects.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._compareimages_for_objects.ggUpdatePosition=function (useTransition) {
		}
		this._diccomparecontainer=document.createElement('div');
		this._diccomparecontainer.ggId="DicCompareContainer";
		this._diccomparecontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._diccomparecontainer.ggVisible=false;
		this._diccomparecontainer.className='ggskin ggskin_container ';
		this._diccomparecontainer.ggType='container';
		hs ='';
		hs+='height : 248px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 432px;';
		hs+='pointer-events:none;';
		this._diccomparecontainer.setAttribute('style',hs);
		this._diccomparecontainer.style[domTransform + 'Origin']='50% 50%';
		me._diccomparecontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._diccomparecontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._diccomparecontainer.ggCurrentLogicStateVisible = -1;
		this._diccomparecontainer.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'dic')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'dic')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._diccomparecontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._diccomparecontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._diccomparecontainer.style[domTransition]='';
				if (me._diccomparecontainer.ggCurrentLogicStateVisible == 0) {
					me._diccomparecontainer.style.visibility=(Number(me._diccomparecontainer.style.opacity)>0||!me._diccomparecontainer.style.opacity)?'inherit':'hidden';
					me._diccomparecontainer.ggVisible=true;
				}
				else if (me._diccomparecontainer.ggCurrentLogicStateVisible == 1) {
					me._diccomparecontainer.style.visibility="hidden";
					me._diccomparecontainer.ggVisible=false;
				}
				else {
					me._diccomparecontainer.style.visibility="hidden";
					me._diccomparecontainer.ggVisible=false;
				}
			}
		}
		this._diccomparecontainer.ggUpdatePosition=function (useTransition) {
		}
		this._dicimagecomp=document.createElement('div');
		this._dicimagecomp__img=document.createElement('img');
		this._dicimagecomp__img.className='ggskin ggskin_image';
		this._dicimagecomp__img.setAttribute('src',basePath + 'images/dicimagecomp.png');
		this._dicimagecomp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dicimagecomp__img.className='ggskin ggskin_image';
		this._dicimagecomp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._dicimagecomp__img);
		this._dicimagecomp.appendChild(this._dicimagecomp__img);
		this._dicimagecomp.ggId="DicImagecomp";
		this._dicimagecomp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dicimagecomp.ggVisible=true;
		this._dicimagecomp.className='ggskin ggskin_image ';
		this._dicimagecomp.ggType='image';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 266px;';
		hs+='position : absolute;';
		hs+='top : 104px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._dicimagecomp.setAttribute('style',hs);
		this._dicimagecomp.style[domTransform + 'Origin']='50% 50%';
		me._dicimagecomp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dicimagecomp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dicimagecomp.ggUpdatePosition=function (useTransition) {
		}
		this._diccomparecontainer.appendChild(this._dicimagecomp);
		this._diccompare=document.createElement('div');
		this._diccompare__img=document.createElement('img');
		this._diccompare__img.className='ggskin ggskin_image';
		this._diccompare__img.setAttribute('src',basePath + 'images/diccompare.png');
		this._diccompare__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._diccompare__img.className='ggskin ggskin_image';
		this._diccompare__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._diccompare__img);
		this._diccompare.appendChild(this._diccompare__img);
		this._diccompare.ggId="DicCompare";
		this._diccompare.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._diccompare.ggVisible=true;
		this._diccompare.className='ggskin ggskin_image ';
		this._diccompare.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 432px;';
		hs+='pointer-events:auto;';
		this._diccompare.setAttribute('style',hs);
		this._diccompare.style[domTransform + 'Origin']='50% 50%';
		me._diccompare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._diccompare.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._diccompare.ggUpdatePosition=function (useTransition) {
		}
		this._diccomparecontainer.appendChild(this._diccompare);
		this._dicstamp=document.createElement('div');
		this._dicstamp__img=document.createElement('img');
		this._dicstamp__img.className='ggskin ggskin_image';
		this._dicstamp__img.setAttribute('src',basePath + 'images/dicstamp.png');
		this._dicstamp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dicstamp__img.className='ggskin ggskin_image';
		this._dicstamp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._dicstamp__img);
		this._dicstamp.appendChild(this._dicstamp__img);
		this._dicstamp.ggId="DicStamp";
		this._dicstamp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dicstamp.ggVisible=true;
		this._dicstamp.className='ggskin ggskin_image ';
		this._dicstamp.ggType='image';
		hs ='';
		hs+='height : 143px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 105px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		this._dicstamp.setAttribute('style',hs);
		this._dicstamp.style[domTransform + 'Origin']='50% 50%';
		me._dicstamp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dicstamp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dicstamp.ggUpdatePosition=function (useTransition) {
		}
		this._diccomparecontainer.appendChild(this._dicstamp);
		this._compareimages_for_objects.appendChild(this._diccomparecontainer);
		this._aspcomparecontainer=document.createElement('div');
		this._aspcomparecontainer.ggId="AspCompareContainer";
		this._aspcomparecontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._aspcomparecontainer.ggVisible=false;
		this._aspcomparecontainer.className='ggskin ggskin_container ';
		this._aspcomparecontainer.ggType='container';
		hs ='';
		hs+='height : 248px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 432px;';
		hs+='pointer-events:none;';
		this._aspcomparecontainer.setAttribute('style',hs);
		this._aspcomparecontainer.style[domTransform + 'Origin']='50% 50%';
		me._aspcomparecontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._aspcomparecontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._aspcomparecontainer.ggCurrentLogicStateVisible = -1;
		this._aspcomparecontainer.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'asp')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'asp')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._aspcomparecontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._aspcomparecontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._aspcomparecontainer.style[domTransition]='';
				if (me._aspcomparecontainer.ggCurrentLogicStateVisible == 0) {
					me._aspcomparecontainer.style.visibility=(Number(me._aspcomparecontainer.style.opacity)>0||!me._aspcomparecontainer.style.opacity)?'inherit':'hidden';
					me._aspcomparecontainer.ggVisible=true;
				}
				else if (me._aspcomparecontainer.ggCurrentLogicStateVisible == 1) {
					me._aspcomparecontainer.style.visibility="hidden";
					me._aspcomparecontainer.ggVisible=false;
				}
				else {
					me._aspcomparecontainer.style.visibility="hidden";
					me._aspcomparecontainer.ggVisible=false;
				}
			}
		}
		this._aspcomparecontainer.ggUpdatePosition=function (useTransition) {
		}
		this._aspimagecomp=document.createElement('div');
		this._aspimagecomp__img=document.createElement('img');
		this._aspimagecomp__img.className='ggskin ggskin_image';
		this._aspimagecomp__img.setAttribute('src',basePath + 'images/aspimagecomp.png');
		this._aspimagecomp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._aspimagecomp__img.className='ggskin ggskin_image';
		this._aspimagecomp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._aspimagecomp__img);
		this._aspimagecomp.appendChild(this._aspimagecomp__img);
		this._aspimagecomp.ggId="aspImagecomp";
		this._aspimagecomp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._aspimagecomp.ggVisible=true;
		this._aspimagecomp.className='ggskin ggskin_image ';
		this._aspimagecomp.ggType='image';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 266px;';
		hs+='position : absolute;';
		hs+='top : 104px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._aspimagecomp.setAttribute('style',hs);
		this._aspimagecomp.style[domTransform + 'Origin']='50% 50%';
		me._aspimagecomp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._aspimagecomp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._aspimagecomp.ggUpdatePosition=function (useTransition) {
		}
		this._aspcomparecontainer.appendChild(this._aspimagecomp);
		this._aspcompare=document.createElement('div');
		this._aspcompare__img=document.createElement('img');
		this._aspcompare__img.className='ggskin ggskin_image';
		this._aspcompare__img.setAttribute('src',basePath + 'images/aspcompare.png');
		this._aspcompare__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._aspcompare__img.className='ggskin ggskin_image';
		this._aspcompare__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._aspcompare__img);
		this._aspcompare.appendChild(this._aspcompare__img);
		this._aspcompare.ggId="aspCompare";
		this._aspcompare.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._aspcompare.ggVisible=true;
		this._aspcompare.className='ggskin ggskin_image ';
		this._aspcompare.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 432px;';
		hs+='pointer-events:auto;';
		this._aspcompare.setAttribute('style',hs);
		this._aspcompare.style[domTransform + 'Origin']='50% 50%';
		me._aspcompare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._aspcompare.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._aspcompare.ggUpdatePosition=function (useTransition) {
		}
		this._aspcomparecontainer.appendChild(this._aspcompare);
		this._aspstamp=document.createElement('div');
		this._aspstamp__img=document.createElement('img');
		this._aspstamp__img.className='ggskin ggskin_image';
		this._aspstamp__img.setAttribute('src',basePath + 'images/aspstamp.png');
		this._aspstamp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._aspstamp__img.className='ggskin ggskin_image';
		this._aspstamp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._aspstamp__img);
		this._aspstamp.appendChild(this._aspstamp__img);
		this._aspstamp.ggId="aspStamp";
		this._aspstamp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._aspstamp.ggVisible=true;
		this._aspstamp.className='ggskin ggskin_image ';
		this._aspstamp.ggType='image';
		hs ='';
		hs+='height : 143px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 105px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		this._aspstamp.setAttribute('style',hs);
		this._aspstamp.style[domTransform + 'Origin']='50% 50%';
		me._aspstamp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._aspstamp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._aspstamp.ggUpdatePosition=function (useTransition) {
		}
		this._aspcomparecontainer.appendChild(this._aspstamp);
		this._compareimages_for_objects.appendChild(this._aspcomparecontainer);
		this._eoacomparecontainer=document.createElement('div');
		this._eoacomparecontainer.ggId="eoaCompareContainer";
		this._eoacomparecontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._eoacomparecontainer.ggVisible=false;
		this._eoacomparecontainer.className='ggskin ggskin_container ';
		this._eoacomparecontainer.ggType='container';
		hs ='';
		hs+='height : 248px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 432px;';
		hs+='pointer-events:none;';
		this._eoacomparecontainer.setAttribute('style',hs);
		this._eoacomparecontainer.style[domTransform + 'Origin']='50% 50%';
		me._eoacomparecontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._eoacomparecontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._eoacomparecontainer.ggCurrentLogicStateVisible = -1;
		this._eoacomparecontainer.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'eoa')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'eoa')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._eoacomparecontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._eoacomparecontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._eoacomparecontainer.style[domTransition]='';
				if (me._eoacomparecontainer.ggCurrentLogicStateVisible == 0) {
					me._eoacomparecontainer.style.visibility=(Number(me._eoacomparecontainer.style.opacity)>0||!me._eoacomparecontainer.style.opacity)?'inherit':'hidden';
					me._eoacomparecontainer.ggVisible=true;
				}
				else if (me._eoacomparecontainer.ggCurrentLogicStateVisible == 1) {
					me._eoacomparecontainer.style.visibility="hidden";
					me._eoacomparecontainer.ggVisible=false;
				}
				else {
					me._eoacomparecontainer.style.visibility="hidden";
					me._eoacomparecontainer.ggVisible=false;
				}
			}
		}
		this._eoacomparecontainer.ggUpdatePosition=function (useTransition) {
		}
		this._ediccompare=document.createElement('div');
		this._ediccompare__img=document.createElement('img');
		this._ediccompare__img.className='ggskin ggskin_image';
		this._ediccompare__img.setAttribute('src',basePath + 'images/ediccompare.png');
		this._ediccompare__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ediccompare__img.className='ggskin ggskin_image';
		this._ediccompare__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._ediccompare__img);
		this._ediccompare.appendChild(this._ediccompare__img);
		this._ediccompare.ggId="eDicCompare";
		this._ediccompare.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ediccompare.ggVisible=true;
		this._ediccompare.className='ggskin ggskin_image ';
		this._ediccompare.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 432px;';
		hs+='pointer-events:auto;';
		this._ediccompare.setAttribute('style',hs);
		this._ediccompare.style[domTransform + 'Origin']='50% 50%';
		me._ediccompare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ediccompare.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ediccompare.ggUpdatePosition=function (useTransition) {
		}
		this._eoacomparecontainer.appendChild(this._ediccompare);
		this._edicstamp=document.createElement('div');
		this._edicstamp__img=document.createElement('img');
		this._edicstamp__img.className='ggskin ggskin_image';
		this._edicstamp__img.setAttribute('src',basePath + 'images/edicstamp.png');
		this._edicstamp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._edicstamp__img.className='ggskin ggskin_image';
		this._edicstamp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._edicstamp__img);
		this._edicstamp.appendChild(this._edicstamp__img);
		this._edicstamp.ggId="eDicStamp";
		this._edicstamp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._edicstamp.ggVisible=true;
		this._edicstamp.className='ggskin ggskin_image ';
		this._edicstamp.ggType='image';
		hs ='';
		hs+='height : 143px;';
		hs+='left : 74px;';
		hs+='position : absolute;';
		hs+='top : 105px;';
		hs+='visibility : inherit;';
		hs+='width : 277px;';
		hs+='pointer-events:auto;';
		this._edicstamp.setAttribute('style',hs);
		this._edicstamp.style[domTransform + 'Origin']='50% 50%';
		me._edicstamp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._edicstamp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._edicstamp.ggUpdatePosition=function (useTransition) {
		}
		this._eoacomparecontainer.appendChild(this._edicstamp);
		this._compareimages_for_objects.appendChild(this._eoacomparecontainer);
		this._spicomparecontainer=document.createElement('div');
		this._spicomparecontainer.ggId="spiCompareContainer";
		this._spicomparecontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._spicomparecontainer.ggVisible=false;
		this._spicomparecontainer.className='ggskin ggskin_container ';
		this._spicomparecontainer.ggType='container';
		hs ='';
		hs+='height : 248px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 432px;';
		hs+='pointer-events:none;';
		this._spicomparecontainer.setAttribute('style',hs);
		this._spicomparecontainer.style[domTransform + 'Origin']='50% 50%';
		me._spicomparecontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._spicomparecontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._spicomparecontainer.ggCurrentLogicStateVisible = -1;
		this._spicomparecontainer.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'spr')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'spr')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._spicomparecontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._spicomparecontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._spicomparecontainer.style[domTransition]='';
				if (me._spicomparecontainer.ggCurrentLogicStateVisible == 0) {
					me._spicomparecontainer.style.visibility=(Number(me._spicomparecontainer.style.opacity)>0||!me._spicomparecontainer.style.opacity)?'inherit':'hidden';
					me._spicomparecontainer.ggVisible=true;
				}
				else if (me._spicomparecontainer.ggCurrentLogicStateVisible == 1) {
					me._spicomparecontainer.style.visibility="hidden";
					me._spicomparecontainer.ggVisible=false;
				}
				else {
					me._spicomparecontainer.style.visibility="hidden";
					me._spicomparecontainer.ggVisible=false;
				}
			}
		}
		this._spicomparecontainer.ggUpdatePosition=function (useTransition) {
		}
		this._sdicimagecomp=document.createElement('div');
		this._sdicimagecomp__img=document.createElement('img');
		this._sdicimagecomp__img.className='ggskin ggskin_image';
		this._sdicimagecomp__img.setAttribute('src',basePath + 'images/sdicimagecomp.png');
		this._sdicimagecomp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._sdicimagecomp__img.className='ggskin ggskin_image';
		this._sdicimagecomp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._sdicimagecomp__img);
		this._sdicimagecomp.appendChild(this._sdicimagecomp__img);
		this._sdicimagecomp.ggId="sdicImagecomp";
		this._sdicimagecomp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sdicimagecomp.ggVisible=true;
		this._sdicimagecomp.className='ggskin ggskin_image ';
		this._sdicimagecomp.ggType='image';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 266px;';
		hs+='position : absolute;';
		hs+='top : 104px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._sdicimagecomp.setAttribute('style',hs);
		this._sdicimagecomp.style[domTransform + 'Origin']='50% 50%';
		me._sdicimagecomp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sdicimagecomp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._sdicimagecomp.ggUpdatePosition=function (useTransition) {
		}
		this._spicomparecontainer.appendChild(this._sdicimagecomp);
		this._sdiccompare=document.createElement('div');
		this._sdiccompare__img=document.createElement('img');
		this._sdiccompare__img.className='ggskin ggskin_image';
		this._sdiccompare__img.setAttribute('src',basePath + 'images/sdiccompare.png');
		this._sdiccompare__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._sdiccompare__img.className='ggskin ggskin_image';
		this._sdiccompare__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._sdiccompare__img);
		this._sdiccompare.appendChild(this._sdiccompare__img);
		this._sdiccompare.ggId="sDicCompare";
		this._sdiccompare.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sdiccompare.ggVisible=true;
		this._sdiccompare.className='ggskin ggskin_image ';
		this._sdiccompare.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 432px;';
		hs+='pointer-events:auto;';
		this._sdiccompare.setAttribute('style',hs);
		this._sdiccompare.style[domTransform + 'Origin']='50% 50%';
		me._sdiccompare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sdiccompare.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._sdiccompare.ggUpdatePosition=function (useTransition) {
		}
		this._spicomparecontainer.appendChild(this._sdiccompare);
		this._sdicstamp=document.createElement('div');
		this._sdicstamp__img=document.createElement('img');
		this._sdicstamp__img.className='ggskin ggskin_image';
		this._sdicstamp__img.setAttribute('src',basePath + 'images/sdicstamp.png');
		this._sdicstamp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._sdicstamp__img.className='ggskin ggskin_image';
		this._sdicstamp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._sdicstamp__img);
		this._sdicstamp.appendChild(this._sdicstamp__img);
		this._sdicstamp.ggId="sDicStamp";
		this._sdicstamp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sdicstamp.ggVisible=true;
		this._sdicstamp.className='ggskin ggskin_image ';
		this._sdicstamp.ggType='image';
		hs ='';
		hs+='height : 143px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 105px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		this._sdicstamp.setAttribute('style',hs);
		this._sdicstamp.style[domTransform + 'Origin']='50% 50%';
		me._sdicstamp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sdicstamp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._sdicstamp.ggUpdatePosition=function (useTransition) {
		}
		this._spicomparecontainer.appendChild(this._sdicstamp);
		this._compareimages_for_objects.appendChild(this._spicomparecontainer);
		this._parcomparecontainer=document.createElement('div');
		this._parcomparecontainer.ggId="parCompareContainer";
		this._parcomparecontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._parcomparecontainer.ggVisible=false;
		this._parcomparecontainer.className='ggskin ggskin_container ';
		this._parcomparecontainer.ggType='container';
		hs ='';
		hs+='height : 248px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 432px;';
		hs+='pointer-events:none;';
		this._parcomparecontainer.setAttribute('style',hs);
		this._parcomparecontainer.style[domTransform + 'Origin']='50% 50%';
		me._parcomparecontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._parcomparecontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._parcomparecontainer.ggCurrentLogicStateVisible = -1;
		this._parcomparecontainer.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'par')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'par')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._parcomparecontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._parcomparecontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._parcomparecontainer.style[domTransition]='';
				if (me._parcomparecontainer.ggCurrentLogicStateVisible == 0) {
					me._parcomparecontainer.style.visibility=(Number(me._parcomparecontainer.style.opacity)>0||!me._parcomparecontainer.style.opacity)?'inherit':'hidden';
					me._parcomparecontainer.ggVisible=true;
				}
				else if (me._parcomparecontainer.ggCurrentLogicStateVisible == 1) {
					me._parcomparecontainer.style.visibility="hidden";
					me._parcomparecontainer.ggVisible=false;
				}
				else {
					me._parcomparecontainer.style.visibility="hidden";
					me._parcomparecontainer.ggVisible=false;
				}
			}
		}
		this._parcomparecontainer.ggUpdatePosition=function (useTransition) {
		}
		this._pdicimagecomp=document.createElement('div');
		this._pdicimagecomp__img=document.createElement('img');
		this._pdicimagecomp__img.className='ggskin ggskin_image';
		this._pdicimagecomp__img.setAttribute('src',basePath + 'images/pdicimagecomp.png');
		this._pdicimagecomp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._pdicimagecomp__img.className='ggskin ggskin_image';
		this._pdicimagecomp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pdicimagecomp__img);
		this._pdicimagecomp.appendChild(this._pdicimagecomp__img);
		this._pdicimagecomp.ggId="pDicImagecomp";
		this._pdicimagecomp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pdicimagecomp.ggVisible=true;
		this._pdicimagecomp.className='ggskin ggskin_image ';
		this._pdicimagecomp.ggType='image';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 266px;';
		hs+='position : absolute;';
		hs+='top : 104px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._pdicimagecomp.setAttribute('style',hs);
		this._pdicimagecomp.style[domTransform + 'Origin']='50% 50%';
		me._pdicimagecomp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pdicimagecomp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pdicimagecomp.ggUpdatePosition=function (useTransition) {
		}
		this._parcomparecontainer.appendChild(this._pdicimagecomp);
		this._pdiccompare=document.createElement('div');
		this._pdiccompare__img=document.createElement('img');
		this._pdiccompare__img.className='ggskin ggskin_image';
		this._pdiccompare__img.setAttribute('src',basePath + 'images/pdiccompare.png');
		this._pdiccompare__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._pdiccompare__img.className='ggskin ggskin_image';
		this._pdiccompare__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pdiccompare__img);
		this._pdiccompare.appendChild(this._pdiccompare__img);
		this._pdiccompare.ggId="pDicCompare";
		this._pdiccompare.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pdiccompare.ggVisible=true;
		this._pdiccompare.className='ggskin ggskin_image ';
		this._pdiccompare.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 432px;';
		hs+='pointer-events:auto;';
		this._pdiccompare.setAttribute('style',hs);
		this._pdiccompare.style[domTransform + 'Origin']='50% 50%';
		me._pdiccompare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pdiccompare.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pdiccompare.ggUpdatePosition=function (useTransition) {
		}
		this._parcomparecontainer.appendChild(this._pdiccompare);
		this._pdicstamp=document.createElement('div');
		this._pdicstamp__img=document.createElement('img');
		this._pdicstamp__img.className='ggskin ggskin_image';
		this._pdicstamp__img.setAttribute('src',basePath + 'images/pdicstamp.png');
		this._pdicstamp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._pdicstamp__img.className='ggskin ggskin_image';
		this._pdicstamp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pdicstamp__img);
		this._pdicstamp.appendChild(this._pdicstamp__img);
		this._pdicstamp.ggId="pDicStamp";
		this._pdicstamp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pdicstamp.ggVisible=true;
		this._pdicstamp.className='ggskin ggskin_image ';
		this._pdicstamp.ggType='image';
		hs ='';
		hs+='height : 143px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 105px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		this._pdicstamp.setAttribute('style',hs);
		this._pdicstamp.style[domTransform + 'Origin']='50% 50%';
		me._pdicstamp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pdicstamp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pdicstamp.ggUpdatePosition=function (useTransition) {
		}
		this._parcomparecontainer.appendChild(this._pdicstamp);
		this._compareimages_for_objects.appendChild(this._parcomparecontainer);
		this._tricomparecontainer=document.createElement('div');
		this._tricomparecontainer.ggId="triCompareContainer";
		this._tricomparecontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tricomparecontainer.ggVisible=false;
		this._tricomparecontainer.className='ggskin ggskin_container ';
		this._tricomparecontainer.ggType='container';
		hs ='';
		hs+='height : 248px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 432px;';
		hs+='pointer-events:none;';
		this._tricomparecontainer.setAttribute('style',hs);
		this._tricomparecontainer.style[domTransform + 'Origin']='50% 50%';
		me._tricomparecontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tricomparecontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tricomparecontainer.ggCurrentLogicStateVisible = -1;
		this._tricomparecontainer.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'tri')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'tri')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tricomparecontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tricomparecontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tricomparecontainer.style[domTransition]='';
				if (me._tricomparecontainer.ggCurrentLogicStateVisible == 0) {
					me._tricomparecontainer.style.visibility=(Number(me._tricomparecontainer.style.opacity)>0||!me._tricomparecontainer.style.opacity)?'inherit':'hidden';
					me._tricomparecontainer.ggVisible=true;
				}
				else if (me._tricomparecontainer.ggCurrentLogicStateVisible == 1) {
					me._tricomparecontainer.style.visibility="hidden";
					me._tricomparecontainer.ggVisible=false;
				}
				else {
					me._tricomparecontainer.style.visibility="hidden";
					me._tricomparecontainer.ggVisible=false;
				}
			}
		}
		this._tricomparecontainer.ggUpdatePosition=function (useTransition) {
		}
		this._tdicimagecomp=document.createElement('div');
		this._tdicimagecomp__img=document.createElement('img');
		this._tdicimagecomp__img.className='ggskin ggskin_image';
		this._tdicimagecomp__img.setAttribute('src',basePath + 'images/tdicimagecomp.png');
		this._tdicimagecomp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._tdicimagecomp__img.className='ggskin ggskin_image';
		this._tdicimagecomp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tdicimagecomp__img);
		this._tdicimagecomp.appendChild(this._tdicimagecomp__img);
		this._tdicimagecomp.ggId="tDicImagecomp";
		this._tdicimagecomp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tdicimagecomp.ggVisible=true;
		this._tdicimagecomp.className='ggskin ggskin_image ';
		this._tdicimagecomp.ggType='image';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 266px;';
		hs+='position : absolute;';
		hs+='top : 104px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._tdicimagecomp.setAttribute('style',hs);
		this._tdicimagecomp.style[domTransform + 'Origin']='50% 50%';
		me._tdicimagecomp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tdicimagecomp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tdicimagecomp.ggUpdatePosition=function (useTransition) {
		}
		this._tricomparecontainer.appendChild(this._tdicimagecomp);
		this._tdiccompare=document.createElement('div');
		this._tdiccompare__img=document.createElement('img');
		this._tdiccompare__img.className='ggskin ggskin_image';
		this._tdiccompare__img.setAttribute('src',basePath + 'images/tdiccompare.png');
		this._tdiccompare__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._tdiccompare__img.className='ggskin ggskin_image';
		this._tdiccompare__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tdiccompare__img);
		this._tdiccompare.appendChild(this._tdiccompare__img);
		this._tdiccompare.ggId="tDicCompare";
		this._tdiccompare.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tdiccompare.ggVisible=true;
		this._tdiccompare.className='ggskin ggskin_image ';
		this._tdiccompare.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 432px;';
		hs+='pointer-events:auto;';
		this._tdiccompare.setAttribute('style',hs);
		this._tdiccompare.style[domTransform + 'Origin']='50% 50%';
		me._tdiccompare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tdiccompare.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tdiccompare.ggUpdatePosition=function (useTransition) {
		}
		this._tricomparecontainer.appendChild(this._tdiccompare);
		this._ticstamp=document.createElement('div');
		this._ticstamp__img=document.createElement('img');
		this._ticstamp__img.className='ggskin ggskin_image';
		this._ticstamp__img.setAttribute('src',basePath + 'images/ticstamp.png');
		this._ticstamp__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ticstamp__img.className='ggskin ggskin_image';
		this._ticstamp__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._ticstamp__img);
		this._ticstamp.appendChild(this._ticstamp__img);
		this._ticstamp.ggId="ticStamp";
		this._ticstamp.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ticstamp.ggVisible=true;
		this._ticstamp.className='ggskin ggskin_image ';
		this._ticstamp.ggType='image';
		hs ='';
		hs+='height : 143px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 105px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		this._ticstamp.setAttribute('style',hs);
		this._ticstamp.style[domTransform + 'Origin']='50% 50%';
		me._ticstamp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ticstamp.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ticstamp.ggUpdatePosition=function (useTransition) {
		}
		this._tricomparecontainer.appendChild(this._ticstamp);
		this._compareimages_for_objects.appendChild(this._tricomparecontainer);
		this._medcomparecontainer=document.createElement('div');
		this._medcomparecontainer.ggId="medCompareContainer";
		this._medcomparecontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._medcomparecontainer.ggVisible=false;
		this._medcomparecontainer.className='ggskin ggskin_container ';
		this._medcomparecontainer.ggType='container';
		hs ='';
		hs+='height : 248px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 432px;';
		hs+='pointer-events:none;';
		this._medcomparecontainer.setAttribute('style',hs);
		this._medcomparecontainer.style[domTransform + 'Origin']='50% 50%';
		me._medcomparecontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._medcomparecontainer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._medcomparecontainer.ggCurrentLogicStateVisible = -1;
		this._medcomparecontainer.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'med')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'med')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._medcomparecontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._medcomparecontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._medcomparecontainer.style[domTransition]='';
				if (me._medcomparecontainer.ggCurrentLogicStateVisible == 0) {
					me._medcomparecontainer.style.visibility=(Number(me._medcomparecontainer.style.opacity)>0||!me._medcomparecontainer.style.opacity)?'inherit':'hidden';
					me._medcomparecontainer.ggVisible=true;
				}
				else if (me._medcomparecontainer.ggCurrentLogicStateVisible == 1) {
					me._medcomparecontainer.style.visibility="hidden";
					me._medcomparecontainer.ggVisible=false;
				}
				else {
					me._medcomparecontainer.style.visibility="hidden";
					me._medcomparecontainer.ggVisible=false;
				}
			}
		}
		this._medcomparecontainer.ggUpdatePosition=function (useTransition) {
		}
		this._mdiccompare=document.createElement('div');
		this._mdiccompare__img=document.createElement('img');
		this._mdiccompare__img.className='ggskin ggskin_image';
		this._mdiccompare__img.setAttribute('src',basePath + 'images/mdiccompare.png');
		this._mdiccompare__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mdiccompare__img.className='ggskin ggskin_image';
		this._mdiccompare__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._mdiccompare__img);
		this._mdiccompare.appendChild(this._mdiccompare__img);
		this._mdiccompare.ggId="mDicCompare";
		this._mdiccompare.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mdiccompare.ggVisible=true;
		this._mdiccompare.className='ggskin ggskin_image ';
		this._mdiccompare.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 432px;';
		hs+='pointer-events:auto;';
		this._mdiccompare.setAttribute('style',hs);
		this._mdiccompare.style[domTransform + 'Origin']='50% 50%';
		me._mdiccompare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mdiccompare.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._mdiccompare.ggUpdatePosition=function (useTransition) {
		}
		this._medcomparecontainer.appendChild(this._mdiccompare);
		this._compareimages_for_objects.appendChild(this._medcomparecontainer);
		this._poiobjectcontainer.appendChild(this._compareimages_for_objects);
		this._objectmainimage_container=document.createElement('div');
		this._objectmainimage_container.ggId="ObjectMainImage_container";
		this._objectmainimage_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._objectmainimage_container.ggVisible=true;
		this._objectmainimage_container.className='ggskin ggskin_container ';
		this._objectmainimage_container.ggType='container';
		hs ='';
		hs+='height : 269px;';
		hs+='left : -209px;';
		hs+='position : absolute;';
		hs+='top : -95px;';
		hs+='visibility : inherit;';
		hs+='width : 449px;';
		hs+='pointer-events:none;';
		this._objectmainimage_container.setAttribute('style',hs);
		this._objectmainimage_container.style[domTransform + 'Origin']='50% 50%';
		me._objectmainimage_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._objectmainimage_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._objectmainimage_container.ggUpdatePosition=function (useTransition) {
		}
		this._aspimage=document.createElement('div');
		this._aspimage__img=document.createElement('img');
		this._aspimage__img.className='ggskin ggskin_image';
		this._aspimage__img.setAttribute('src',basePath + 'images/aspimage.png');
		this._aspimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._aspimage__img.className='ggskin ggskin_image';
		this._aspimage__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._aspimage__img);
		this._aspimage.appendChild(this._aspimage__img);
		this._aspimage.ggId="aspImage";
		this._aspimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._aspimage.ggVisible=true;
		this._aspimage.className='ggskin ggskin_image ';
		this._aspimage.ggType='image';
		hs ='';
		hs+='height : 250px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 440px;';
		hs+='pointer-events:auto;';
		this._aspimage.setAttribute('style',hs);
		this._aspimage.style[domTransform + 'Origin']='50% 50%';
		me._aspimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._aspimage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._aspimage.ggCurrentLogicStateVisible = -1;
		this._aspimage.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'asp')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'asp')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._aspimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._aspimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._aspimage.style[domTransition]='';
				if (me._aspimage.ggCurrentLogicStateVisible == 0) {
					me._aspimage.style.visibility=(Number(me._aspimage.style.opacity)>0||!me._aspimage.style.opacity)?'inherit':'hidden';
					me._aspimage.ggVisible=true;
				}
				else if (me._aspimage.ggCurrentLogicStateVisible == 1) {
					me._aspimage.style.visibility="hidden";
					me._aspimage.ggVisible=false;
				}
				else {
					me._aspimage.style.visibility=(Number(me._aspimage.style.opacity)>0||!me._aspimage.style.opacity)?'inherit':'hidden';
					me._aspimage.ggVisible=true;
				}
			}
		}
		this._aspimage.ggUpdatePosition=function (useTransition) {
		}
		this._objectmainimage_container.appendChild(this._aspimage);
		this._triimage=document.createElement('div');
		this._triimage__img=document.createElement('img');
		this._triimage__img.className='ggskin ggskin_image';
		this._triimage__img.setAttribute('src',basePath + 'images/triimage.png');
		this._triimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._triimage__img.className='ggskin ggskin_image';
		this._triimage__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._triimage__img);
		this._triimage.appendChild(this._triimage__img);
		this._triimage.ggId="triImage";
		this._triimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._triimage.ggVisible=true;
		this._triimage.className='ggskin ggskin_image ';
		this._triimage.ggType='image';
		hs ='';
		hs+='height : 250px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 440px;';
		hs+='pointer-events:auto;';
		this._triimage.setAttribute('style',hs);
		this._triimage.style[domTransform + 'Origin']='50% 50%';
		me._triimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._triimage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._triimage.ggCurrentLogicStateVisible = -1;
		this._triimage.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'tri')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'tri')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._triimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._triimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._triimage.style[domTransition]='';
				if (me._triimage.ggCurrentLogicStateVisible == 0) {
					me._triimage.style.visibility=(Number(me._triimage.style.opacity)>0||!me._triimage.style.opacity)?'inherit':'hidden';
					me._triimage.ggVisible=true;
				}
				else if (me._triimage.ggCurrentLogicStateVisible == 1) {
					me._triimage.style.visibility="hidden";
					me._triimage.ggVisible=false;
				}
				else {
					me._triimage.style.visibility=(Number(me._triimage.style.opacity)>0||!me._triimage.style.opacity)?'inherit':'hidden';
					me._triimage.ggVisible=true;
				}
			}
		}
		this._triimage.ggUpdatePosition=function (useTransition) {
		}
		this._objectmainimage_container.appendChild(this._triimage);
		this._sprimage=document.createElement('div');
		this._sprimage__img=document.createElement('img');
		this._sprimage__img.className='ggskin ggskin_image';
		this._sprimage__img.setAttribute('src',basePath + 'images/sprimage.png');
		this._sprimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._sprimage__img.className='ggskin ggskin_image';
		this._sprimage__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._sprimage__img);
		this._sprimage.appendChild(this._sprimage__img);
		this._sprimage.ggId="sprImage";
		this._sprimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sprimage.ggVisible=true;
		this._sprimage.className='ggskin ggskin_image ';
		this._sprimage.ggType='image';
		hs ='';
		hs+='height : 250px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 440px;';
		hs+='pointer-events:auto;';
		this._sprimage.setAttribute('style',hs);
		this._sprimage.style[domTransform + 'Origin']='50% 50%';
		me._sprimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sprimage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._sprimage.ggCurrentLogicStateVisible = -1;
		this._sprimage.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'spr')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'spr')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sprimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sprimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sprimage.style[domTransition]='';
				if (me._sprimage.ggCurrentLogicStateVisible == 0) {
					me._sprimage.style.visibility=(Number(me._sprimage.style.opacity)>0||!me._sprimage.style.opacity)?'inherit':'hidden';
					me._sprimage.ggVisible=true;
				}
				else if (me._sprimage.ggCurrentLogicStateVisible == 1) {
					me._sprimage.style.visibility="hidden";
					me._sprimage.ggVisible=false;
				}
				else {
					me._sprimage.style.visibility=(Number(me._sprimage.style.opacity)>0||!me._sprimage.style.opacity)?'inherit':'hidden';
					me._sprimage.ggVisible=true;
				}
			}
		}
		this._sprimage.ggUpdatePosition=function (useTransition) {
		}
		this._objectmainimage_container.appendChild(this._sprimage);
		this._parimage=document.createElement('div');
		this._parimage__img=document.createElement('img');
		this._parimage__img.className='ggskin ggskin_image';
		this._parimage__img.setAttribute('src',basePath + 'images/parimage.png');
		this._parimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._parimage__img.className='ggskin ggskin_image';
		this._parimage__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._parimage__img);
		this._parimage.appendChild(this._parimage__img);
		this._parimage.ggId="parImage";
		this._parimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._parimage.ggVisible=true;
		this._parimage.className='ggskin ggskin_image ';
		this._parimage.ggType='image';
		hs ='';
		hs+='height : 250px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 440px;';
		hs+='pointer-events:auto;';
		this._parimage.setAttribute('style',hs);
		this._parimage.style[domTransform + 'Origin']='50% 50%';
		me._parimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._parimage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._parimage.ggCurrentLogicStateVisible = -1;
		this._parimage.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'par')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'par')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._parimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._parimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._parimage.style[domTransition]='';
				if (me._parimage.ggCurrentLogicStateVisible == 0) {
					me._parimage.style.visibility=(Number(me._parimage.style.opacity)>0||!me._parimage.style.opacity)?'inherit':'hidden';
					me._parimage.ggVisible=true;
				}
				else if (me._parimage.ggCurrentLogicStateVisible == 1) {
					me._parimage.style.visibility="hidden";
					me._parimage.ggVisible=false;
				}
				else {
					me._parimage.style.visibility=(Number(me._parimage.style.opacity)>0||!me._parimage.style.opacity)?'inherit':'hidden';
					me._parimage.ggVisible=true;
				}
			}
		}
		this._parimage.ggUpdatePosition=function (useTransition) {
		}
		this._objectmainimage_container.appendChild(this._parimage);
		this._eoaimage=document.createElement('div');
		this._eoaimage__img=document.createElement('img');
		this._eoaimage__img.className='ggskin ggskin_image';
		this._eoaimage__img.setAttribute('src',basePath + 'images/eoaimage.png');
		this._eoaimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._eoaimage__img.className='ggskin ggskin_image';
		this._eoaimage__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._eoaimage__img);
		this._eoaimage.appendChild(this._eoaimage__img);
		this._eoaimage.ggId="eoaImage";
		this._eoaimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._eoaimage.ggVisible=true;
		this._eoaimage.className='ggskin ggskin_image ';
		this._eoaimage.ggType='image';
		hs ='';
		hs+='height : 250px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 440px;';
		hs+='pointer-events:auto;';
		this._eoaimage.setAttribute('style',hs);
		this._eoaimage.style[domTransform + 'Origin']='50% 50%';
		me._eoaimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._eoaimage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._eoaimage.ggCurrentLogicStateVisible = -1;
		this._eoaimage.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'eoa')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'eoa')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._eoaimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._eoaimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._eoaimage.style[domTransition]='';
				if (me._eoaimage.ggCurrentLogicStateVisible == 0) {
					me._eoaimage.style.visibility=(Number(me._eoaimage.style.opacity)>0||!me._eoaimage.style.opacity)?'inherit':'hidden';
					me._eoaimage.ggVisible=true;
				}
				else if (me._eoaimage.ggCurrentLogicStateVisible == 1) {
					me._eoaimage.style.visibility="hidden";
					me._eoaimage.ggVisible=false;
				}
				else {
					me._eoaimage.style.visibility=(Number(me._eoaimage.style.opacity)>0||!me._eoaimage.style.opacity)?'inherit':'hidden';
					me._eoaimage.ggVisible=true;
				}
			}
		}
		this._eoaimage.ggUpdatePosition=function (useTransition) {
		}
		this._objectmainimage_container.appendChild(this._eoaimage);
		this._medimage=document.createElement('div');
		this._medimage__img=document.createElement('img');
		this._medimage__img.className='ggskin ggskin_image';
		this._medimage__img.setAttribute('src',basePath + 'images/medimage.png');
		this._medimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._medimage__img.className='ggskin ggskin_image';
		this._medimage__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._medimage__img);
		this._medimage.appendChild(this._medimage__img);
		this._medimage.ggId="MedImage";
		this._medimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._medimage.ggVisible=true;
		this._medimage.className='ggskin ggskin_image ';
		this._medimage.ggType='image';
		hs ='';
		hs+='height : 250px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 440px;';
		hs+='pointer-events:auto;';
		this._medimage.setAttribute('style',hs);
		this._medimage.style[domTransform + 'Origin']='50% 50%';
		me._medimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._medimage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._medimage.ggCurrentLogicStateVisible = -1;
		this._medimage.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'med')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'med')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._medimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._medimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._medimage.style[domTransition]='';
				if (me._medimage.ggCurrentLogicStateVisible == 0) {
					me._medimage.style.visibility=(Number(me._medimage.style.opacity)>0||!me._medimage.style.opacity)?'inherit':'hidden';
					me._medimage.ggVisible=true;
				}
				else if (me._medimage.ggCurrentLogicStateVisible == 1) {
					me._medimage.style.visibility="hidden";
					me._medimage.ggVisible=false;
				}
				else {
					me._medimage.style.visibility=(Number(me._medimage.style.opacity)>0||!me._medimage.style.opacity)?'inherit':'hidden';
					me._medimage.ggVisible=true;
				}
			}
		}
		this._medimage.ggUpdatePosition=function (useTransition) {
		}
		this._objectmainimage_container.appendChild(this._medimage);
		this._dicimage=document.createElement('div');
		this._dicimage__img=document.createElement('img');
		this._dicimage__img.className='ggskin ggskin_image';
		this._dicimage__img.setAttribute('src',basePath + 'images/dicimage.png');
		this._dicimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dicimage__img.className='ggskin ggskin_image';
		this._dicimage__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._dicimage__img);
		this._dicimage.appendChild(this._dicimage__img);
		this._dicimage.ggId="DicImage";
		this._dicimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dicimage.ggVisible=true;
		this._dicimage.className='ggskin ggskin_image ';
		this._dicimage.ggType='image';
		hs ='';
		hs+='height : 250px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 440px;';
		hs+='pointer-events:auto;';
		this._dicimage.setAttribute('style',hs);
		this._dicimage.style[domTransform + 'Origin']='50% 50%';
		me._dicimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dicimage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._dicimage.ggCurrentLogicStateVisible = -1;
		this._dicimage.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'dic')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'dic')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dicimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dicimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dicimage.style[domTransition]='';
				if (me._dicimage.ggCurrentLogicStateVisible == 0) {
					me._dicimage.style.visibility=(Number(me._dicimage.style.opacity)>0||!me._dicimage.style.opacity)?'inherit':'hidden';
					me._dicimage.ggVisible=true;
				}
				else if (me._dicimage.ggCurrentLogicStateVisible == 1) {
					me._dicimage.style.visibility="hidden";
					me._dicimage.ggVisible=false;
				}
				else {
					me._dicimage.style.visibility=(Number(me._dicimage.style.opacity)>0||!me._dicimage.style.opacity)?'inherit':'hidden';
					me._dicimage.ggVisible=true;
				}
			}
		}
		this._dicimage.ggUpdatePosition=function (useTransition) {
		}
		this._objectmainimage_container.appendChild(this._dicimage);
		this._whiteimage=document.createElement('div');
		this._whiteimage.ggId="WhiteImage";
		this._whiteimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._whiteimage.ggVisible=true;
		this._whiteimage.className='ggskin ggskin_rectangle ';
		this._whiteimage.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 249px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 439px;';
		hs+='pointer-events:auto;';
		this._whiteimage.setAttribute('style',hs);
		this._whiteimage.style[domTransform + 'Origin']='50% 50%';
		me._whiteimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._whiteimage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._whiteimage.ggCurrentLogicStateVisible = -1;
		this._whiteimage.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['WhichObjectVar'] == 'white')
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] != 'white')
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._whiteimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._whiteimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._whiteimage.style[domTransition]='';
				if (me._whiteimage.ggCurrentLogicStateVisible == 0) {
					me._whiteimage.style.visibility=(Number(me._whiteimage.style.opacity)>0||!me._whiteimage.style.opacity)?'inherit':'hidden';
					me._whiteimage.ggVisible=true;
				}
				else if (me._whiteimage.ggCurrentLogicStateVisible == 1) {
					me._whiteimage.style.visibility="hidden";
					me._whiteimage.ggVisible=false;
				}
				else {
					me._whiteimage.style.visibility=(Number(me._whiteimage.style.opacity)>0||!me._whiteimage.style.opacity)?'inherit':'hidden';
					me._whiteimage.ggVisible=true;
				}
			}
		}
		this._whiteimage.ggUpdatePosition=function (useTransition) {
		}
		this._objectmainimage_container.appendChild(this._whiteimage);
		this._poiobjectcontainer.appendChild(this._objectmainimage_container);
		this._objectbuttons=document.createElement('div');
		this._objectbuttons.ggId="Objectbuttons";
		this._objectbuttons.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._objectbuttons.ggVisible=true;
		this._objectbuttons.className='ggskin ggskin_container ';
		this._objectbuttons.ggType='container';
		hs ='';
		hs+='height : 261px;';
		hs+='left : -254px;';
		hs+='position : absolute;';
		hs+='top : -92px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		this._objectbuttons.setAttribute('style',hs);
		this._objectbuttons.style[domTransform + 'Origin']='50% 50%';
		me._objectbuttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._objectbuttons.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._objectbuttons.ggUpdatePosition=function (useTransition) {
		}
		this._objectr=document.createElement('div');
		this._objectr__img=document.createElement('img');
		this._objectr__img.className='ggskin ggskin_image';
		this._objectr__img.setAttribute('src',basePath + 'images/objectr.png');
		this._objectr__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._objectr__img.className='ggskin ggskin_image';
		this._objectr__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._objectr__img);
		this._objectr.appendChild(this._objectr__img);
		this._objectr.ggId="OBJECTr";
		this._objectr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._objectr.ggVisible=true;
		this._objectr.className='ggskin ggskin_image ';
		this._objectr.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 222px;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		this._objectr.setAttribute('style',hs);
		this._objectr.style[domTransform + 'Origin']='50% 50%';
		me._objectr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._objectr.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._objectr.onclick=function (e) {
			ggSkinVars['IsObjectVisible'] = true;
			me._objectmainimage_container.style[domTransition]='none';
			me._objectmainimage_container.style.visibility='hidden';
			me._objectmainimage_container.ggVisible=false;
			me._compareimages_for_objects.style[domTransition]='none';
			me._compareimages_for_objects.style.visibility='hidden';
			me._compareimages_for_objects.ggVisible=false;
			me._dicinfo.style[domTransition]='none';
			me._dicinfo.style.visibility='hidden';
			me._dicinfo.ggVisible=false;
			ggSkinVars['ObjectVideoVisible'] = false;
		}
		this._objectr.ggUpdatePosition=function (useTransition) {
		}
		this._objectbuttons.appendChild(this._objectr);
		this._objectco=document.createElement('div');
		this._objectco__img=document.createElement('img');
		this._objectco__img.className='ggskin ggskin_image';
		this._objectco__img.setAttribute('src',basePath + 'images/objectco.png');
		this._objectco__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._objectco__img.className='ggskin ggskin_image';
		this._objectco__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._objectco__img);
		this._objectco.appendChild(this._objectco__img);
		this._objectco.ggId="OBJECTco";
		this._objectco.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._objectco.ggVisible=true;
		this._objectco.className='ggskin ggskin_image ';
		this._objectco.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 177px;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		this._objectco.setAttribute('style',hs);
		this._objectco.style[domTransform + 'Origin']='50% 50%';
		me._objectco.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._objectco.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._objectco.onclick=function (e) {
			me._compareimages_for_objects.style[domTransition]='none';
			me._compareimages_for_objects.style.visibility=(Number(me._compareimages_for_objects.style.opacity)>0||!me._compareimages_for_objects.style.opacity)?'inherit':'hidden';
			me._compareimages_for_objects.ggVisible=true;
			me._objectmainimage_container.style[domTransition]='none';
			me._objectmainimage_container.style.visibility='hidden';
			me._objectmainimage_container.ggVisible=false;
			me._dicinfo.style[domTransition]='none';
			me._dicinfo.style.visibility='hidden';
			me._dicinfo.ggVisible=false;
			ggSkinVars['ObjectVideoVisible'] = false;
			ggSkinVars['IsObjectVisible'] = false;
		}
		this._objectco.ggUpdatePosition=function (useTransition) {
		}
		this._objectbuttons.appendChild(this._objectco);
		this._objecti=document.createElement('div');
		this._objecti__img=document.createElement('img');
		this._objecti__img.className='ggskin ggskin_image';
		this._objecti__img.setAttribute('src',basePath + 'images/objecti.png');
		this._objecti__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._objecti__img.className='ggskin ggskin_image';
		this._objecti__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._objecti__img);
		this._objecti.appendChild(this._objecti__img);
		this._objecti.ggId="OBJECTi";
		this._objecti.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._objecti.ggVisible=true;
		this._objecti.className='ggskin ggskin_image ';
		this._objecti.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 132px;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		this._objecti.setAttribute('style',hs);
		this._objecti.style[domTransform + 'Origin']='50% 50%';
		me._objecti.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._objecti.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._objecti.onclick=function (e) {
			me._dicinfo.style[domTransition]='none';
			me._dicinfo.style.visibility=(Number(me._dicinfo.style.opacity)>0||!me._dicinfo.style.opacity)?'inherit':'hidden';
			me._dicinfo.ggVisible=true;
			me._objectmainimage_container.style[domTransition]='none';
			me._objectmainimage_container.style.visibility='hidden';
			me._objectmainimage_container.ggVisible=false;
			me._compareimages_for_objects.style[domTransition]='none';
			me._compareimages_for_objects.style.visibility='hidden';
			me._compareimages_for_objects.ggVisible=false;
			ggSkinVars['ObjectVideoVisible'] = false;
			ggSkinVars['IsObjectVisible'] = false;
		}
		this._objecti.ggUpdatePosition=function (useTransition) {
		}
		this._objectbuttons.appendChild(this._objecti);
		this._objectc=document.createElement('div');
		this._objectc__img=document.createElement('img');
		this._objectc__img.className='ggskin ggskin_image';
		this._objectc__img.setAttribute('src',basePath + 'images/objectc.png');
		this._objectc__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._objectc__img.className='ggskin ggskin_image';
		this._objectc__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._objectc__img);
		this._objectc.appendChild(this._objectc__img);
		this._objectc.ggId="OBJECTc";
		this._objectc.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._objectc.ggVisible=true;
		this._objectc.className='ggskin ggskin_image ';
		this._objectc.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 87px;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		this._objectc.setAttribute('style',hs);
		this._objectc.style[domTransform + 'Origin']='50% 50%';
		me._objectc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._objectc.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._objectc.onclick=function (e) {
			me._objectmainimage_container.style[domTransition]='none';
			me._objectmainimage_container.style.visibility=(Number(me._objectmainimage_container.style.opacity)>0||!me._objectmainimage_container.style.opacity)?'inherit':'hidden';
			me._objectmainimage_container.ggVisible=true;
			me._compareimages_for_objects.style[domTransition]='none';
			me._compareimages_for_objects.style.visibility='hidden';
			me._compareimages_for_objects.ggVisible=false;
			me._dicinfo.style[domTransition]='none';
			me._dicinfo.style.visibility='hidden';
			me._dicinfo.ggVisible=false;
			ggSkinVars['ObjectVideoVisible'] = false;
			ggSkinVars['IsObjectVisible'] = false;
		}
		this._objectc.ggUpdatePosition=function (useTransition) {
		}
		this._objectbuttons.appendChild(this._objectc);
		this._objectv=document.createElement('div');
		this._objectv__img=document.createElement('img');
		this._objectv__img.className='ggskin ggskin_image';
		this._objectv__img.setAttribute('src',basePath + 'images/objectv.png');
		this._objectv__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._objectv__img.className='ggskin ggskin_image';
		this._objectv__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._objectv__img);
		this._objectv.appendChild(this._objectv__img);
		this._objectv.ggId="OBJECTv";
		this._objectv.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._objectv.ggVisible=true;
		this._objectv.className='ggskin ggskin_image ';
		this._objectv.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 42px;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		this._objectv.setAttribute('style',hs);
		this._objectv.style[domTransform + 'Origin']='50% 50%';
		me._objectv.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._objectv.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._objectv.onclick=function (e) {
			ggSkinVars['IsObjectVisible'] = false;
			me._objectmainimage_container.style[domTransition]='none';
			me._objectmainimage_container.style.visibility='hidden';
			me._objectmainimage_container.ggVisible=false;
			me._compareimages_for_objects.style[domTransition]='none';
			me._compareimages_for_objects.style.visibility='hidden';
			me._compareimages_for_objects.ggVisible=false;
			me._dicinfo.style[domTransition]='none';
			me._dicinfo.style.visibility='hidden';
			me._dicinfo.ggVisible=false;
			ggSkinVars['ObjectVideoVisible'] = true;
		}
		this._objectv.ggUpdatePosition=function (useTransition) {
		}
		this._objectbuttons.appendChild(this._objectv);
		this._introvideox=document.createElement('div');
		this._introvideox__img=document.createElement('img');
		this._introvideox__img.className='ggskin ggskin_image';
		this._introvideox__img.setAttribute('src',basePath + 'images/introvideox.png');
		this._introvideox__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._introvideox__img.className='ggskin ggskin_image';
		this._introvideox__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._introvideox__img);
		this._introvideox.appendChild(this._introvideox__img);
		this._introvideox.ggId="IntroVideoX";
		this._introvideox.ggLeft=-19;
		this._introvideox.ggTop=-128;
		this._introvideox.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introvideox.ggVisible=true;
		this._introvideox.className='ggskin ggskin_image ';
		this._introvideox.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -19px;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._introvideox.setAttribute('style',hs);
		this._introvideox.style[domTransform + 'Origin']='50% 50%';
		me._introvideox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._introvideox.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._introvideox.onclick=function (e) {
			ggSkinVars['WhichObjectVar'] = "white";
			ggSkinVars['ObjContVisible'] = false;
			ggSkinVars['viewmarker'] = true;
			me._objectmainimage_container.style[domTransition]='none';
			me._objectmainimage_container.style.visibility=(Number(me._objectmainimage_container.style.opacity)>0||!me._objectmainimage_container.style.opacity)?'inherit':'hidden';
			me._objectmainimage_container.ggVisible=true;
			ggSkinVars['ObjectVideoVisible'] = false;
			ggSkinVars['IsObjectVisible'] = false;
		}
		this._introvideox.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._objectbuttons.appendChild(this._introvideox);
		this._poiobjectcontainer.appendChild(this._objectbuttons);
		this._dicname=document.createElement('div');
		this._dicname__text=document.createElement('div');
		this._dicname.className='ggskin ggskin_textdiv';
		this._dicname.ggTextDiv=this._dicname__text;
		this._dicname.ggId="DicName";
		this._dicname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dicname.ggVisible=true;
		this._dicname.className='ggskin ggskin_text ';
		this._dicname.ggType='text';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -206px;';
		hs+='position : absolute;';
		hs+='top : -142px;';
		hs+='visibility : inherit;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		this._dicname.setAttribute('style',hs);
		this._dicname.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 98px;';
		hs+='height: 33px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._dicname__text.setAttribute('style',hs);
		this._dicname__text.innerHTML="";
		this._dicname.appendChild(this._dicname__text);
		me._dicname.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dicname.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._dicname.ggCurrentLogicStateText = -1;
		this._dicname.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['WhichObjectVar'] == 'dic')
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'par')
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'asp')
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'tri')
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'med')
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'eoa')
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['WhichObjectVar'] == 'spr')
			)
			{
				newLogicStateText = 6;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._dicname.ggCurrentLogicStateText != newLogicStateText) {
				me._dicname.ggCurrentLogicStateText = newLogicStateText;
				me._dicname.style[domTransition]='';
				if (me._dicname.ggCurrentLogicStateText == 0) {
					me._dicname.ggText="<i>Dickinsonia costata<\/i>";
					me._dicname__text.innerHTML=me._dicname.ggText;
					if (me._dicname.ggUpdateText) {
					me._dicname.ggUpdateText=function() {
						var hs="<i>Dickinsonia costata<\/i>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicname.ggUpdatePosition) me._dicname.ggUpdatePosition();
					}
				}
				else if (me._dicname.ggCurrentLogicStateText == 1) {
					me._dicname.ggText=" <i>Parvancorina minchami  <\/i>";
					me._dicname__text.innerHTML=me._dicname.ggText;
					if (me._dicname.ggUpdateText) {
					me._dicname.ggUpdateText=function() {
						var hs=" <i>Parvancorina minchami  <\/i>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicname.ggUpdatePosition) me._dicname.ggUpdatePosition();
					}
				}
				else if (me._dicname.ggCurrentLogicStateText == 2) {
					me._dicname.ggText=" <i>Aspidella terranovica <\/i>";
					me._dicname__text.innerHTML=me._dicname.ggText;
					if (me._dicname.ggUpdateText) {
					me._dicname.ggUpdateText=function() {
						var hs=" <i>Aspidella terranovica <\/i>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicname.ggUpdatePosition) me._dicname.ggUpdatePosition();
					}
				}
				else if (me._dicname.ggCurrentLogicStateText == 3) {
					me._dicname.ggText=" <i>Tribrachidium heraldicum <\/i>";
					me._dicname__text.innerHTML=me._dicname.ggText;
					if (me._dicname.ggUpdateText) {
					me._dicname.ggUpdateText=function() {
						var hs=" <i>Tribrachidium heraldicum <\/i>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicname.ggUpdatePosition) me._dicname.ggUpdatePosition();
					}
				}
				else if (me._dicname.ggCurrentLogicStateText == 4) {
					me._dicname.ggText="Medusoid (jellyfish)";
					me._dicname__text.innerHTML=me._dicname.ggText;
					if (me._dicname.ggUpdateText) {
					me._dicname.ggUpdateText=function() {
						var hs="Medusoid (jellyfish)";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicname.ggUpdatePosition) me._dicname.ggUpdatePosition();
					}
				}
				else if (me._dicname.ggCurrentLogicStateText == 5) {
					me._dicname.ggText=" <i>Eoandromeda <\/i>";
					me._dicname__text.innerHTML=me._dicname.ggText;
					if (me._dicname.ggUpdateText) {
					me._dicname.ggUpdateText=function() {
						var hs=" <i>Eoandromeda <\/i>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicname.ggUpdatePosition) me._dicname.ggUpdatePosition();
					}
				}
				else if (me._dicname.ggCurrentLogicStateText == 6) {
					me._dicname.ggText=" <i>Spriggina floundersi <\/i>";
					me._dicname__text.innerHTML=me._dicname.ggText;
					if (me._dicname.ggUpdateText) {
					me._dicname.ggUpdateText=function() {
						var hs=" <i>Spriggina floundersi <\/i>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicname.ggUpdatePosition) me._dicname.ggUpdatePosition();
					}
				}
				else {
					me._dicname.ggText="";
					me._dicname__text.innerHTML=me._dicname.ggText;
					if (me._dicname.ggUpdateText) {
					me._dicname.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._dicname.ggUpdatePosition) me._dicname.ggUpdatePosition();
					}
				}
			}
		}
		this._dicname.ggUpdatePosition=function (useTransition) {
		}
		this._poiobjectcontainer.appendChild(this._dicname);
		this.divSkin.appendChild(this._poiobjectcontainer);
		this._poivideocontainer=document.createElement('div');
		this._poivideocontainer.ggId="POIVideoContainer";
		this._poivideocontainer.ggLeft=-27;
		this._poivideocontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._poivideocontainer.ggVisible=true;
		this._poivideocontainer.className='ggskin ggskin_container ';
		this._poivideocontainer.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -27px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:none;';
		this._poivideocontainer.setAttribute('style',hs);
		this._poivideocontainer.style[domTransform + 'Origin']='50% 50%';
		me._poivideocontainer.ggIsActive=function() {
			return false;
		}
		me._poivideocontainer.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._poivideocontainer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._blackvideobackground=document.createElement('div');
		this._blackvideobackground.ggId="Blackvideobackground";
		this._blackvideobackground.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._blackvideobackground.ggVisible=false;
		this._blackvideobackground.className='ggskin ggskin_rectangle ';
		this._blackvideobackground.ggType='rectangle';
		hs ='';
		hs+='background : #181818;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 246px;';
		hs+='left : -203px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -33px;';
		hs+='visibility : hidden;';
		hs+='width : 437px;';
		hs+='pointer-events:auto;';
		this._blackvideobackground.setAttribute('style',hs);
		this._blackvideobackground.style[domTransform + 'Origin']='50% 50%';
		me._blackvideobackground.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._blackvideobackground.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._blackvideobackground.ggCurrentLogicStateVisible = -1;
		this._blackvideobackground.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['VideoVisible'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['VideoVisible'] == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._blackvideobackground.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._blackvideobackground.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._blackvideobackground.style[domTransition]='';
				if (me._blackvideobackground.ggCurrentLogicStateVisible == 0) {
					me._blackvideobackground.style.visibility=(Number(me._blackvideobackground.style.opacity)>0||!me._blackvideobackground.style.opacity)?'inherit':'hidden';
					me._blackvideobackground.ggVisible=true;
				}
				else if (me._blackvideobackground.ggCurrentLogicStateVisible == 1) {
					me._blackvideobackground.style.visibility="hidden";
					me._blackvideobackground.ggVisible=false;
				}
				else {
					me._blackvideobackground.style.visibility="hidden";
					me._blackvideobackground.ggVisible=false;
				}
			}
		}
		this._blackvideobackground.ggUpdatePosition=function (useTransition) {
		}
		this._poivideocontainer.appendChild(this._blackvideobackground);
		this._videotitle=document.createElement('div');
		this._videotitle__text=document.createElement('div');
		this._videotitle.className='ggskin ggskin_textdiv';
		this._videotitle.ggTextDiv=this._videotitle__text;
		this._videotitle.ggId="videotitle";
		this._videotitle.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._videotitle.ggVisible=false;
		this._videotitle.className='ggskin ggskin_text ';
		this._videotitle.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -40px;';
		hs+='position : absolute;';
		hs+='top : -54px;';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		this._videotitle.setAttribute('style',hs);
		this._videotitle.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._videotitle__text.setAttribute('style',hs);
		this._videotitle__text.innerHTML="";
		this._videotitle.appendChild(this._videotitle__text);
		me._videotitle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._videotitle.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._videotitle.ggCurrentLogicStateVisible = -1;
		this._videotitle.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['VideoVisible'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['VideoVisible'] == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._videotitle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._videotitle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._videotitle.style[domTransition]='';
				if (me._videotitle.ggCurrentLogicStateVisible == 0) {
					me._videotitle.style.visibility=(Number(me._videotitle.style.opacity)>0||!me._videotitle.style.opacity)?'inherit':'hidden';
					me._videotitle.ggVisible=true;
				}
				else if (me._videotitle.ggCurrentLogicStateVisible == 1) {
					me._videotitle.style.visibility="hidden";
					me._videotitle.ggVisible=false;
				}
				else {
					me._videotitle.style.visibility="hidden";
					me._videotitle.ggVisible=false;
				}
			}
		}
		this._videotitle.ggUpdatePosition=function (useTransition) {
		}
		this._poivideocontainer.appendChild(this._videotitle);
		this._poiexternalvideo=document.createElement('div');
		this._poiexternalvideo.seekbars = [];
		this._poiexternalvideo.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._poiexternalvideo.seekbars.length; i++) {
					var seekbar = me.findElements(me._poiexternalvideo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._poiexternalvideo.hasChildNodes()) {
				me._poiexternalvideo.removeChild(me._poiexternalvideo.lastChild);
			}
			if (me._poiexternalvideo__vid) {
				me._poiexternalvideo__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				me._poiexternalvideo.ggVideoNotLoaded = true;
				return;
			}
			me._poiexternalvideo.ggVideoNotLoaded = false;
			me._poiexternalvideo__vid=document.createElement('video');
			me._poiexternalvideo__vid.className='ggskin ggskin_video';
			me._poiexternalvideo__vid.setAttribute('width', '100%');
			me._poiexternalvideo__vid.setAttribute('height', '100%');
			me._poiexternalvideo__vid.setAttribute('controls', '');
			me._poiexternalvideo__source=document.createElement('source');
			me._poiexternalvideo__source.setAttribute('src', media);
			me._poiexternalvideo__vid.setAttribute('playsinline', 'playsinline');
			me._poiexternalvideo__vid.appendChild(me._poiexternalvideo__source);
			me._poiexternalvideo.appendChild(me._poiexternalvideo__vid);
			var videoEl = me.player.registerVideoElement('POIexternalvideo', me._poiexternalvideo__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			me._poiexternalvideo.ggVideoSource = media;
		}
		this._poiexternalvideo.ggId="POIexternalvideo";
		this._poiexternalvideo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._poiexternalvideo.ggVisible=false;
		this._poiexternalvideo.className='ggskin ggskin_video ';
		this._poiexternalvideo.ggType='video';
		hs ='';
		hs+='height : 246px;';
		hs+='left : -204px;';
		hs+='position : absolute;';
		hs+='top : -555px;';
		hs+='visibility : hidden;';
		hs+='width : 437px;';
		hs+='pointer-events:auto;';
		this._poiexternalvideo.setAttribute('style',hs);
		this._poiexternalvideo.style[domTransform + 'Origin']='50% 50%';
		me._poiexternalvideo.ggIsActive=function() {
			if (me._poiexternalvideo__vid != null) {
				return (me._poiexternalvideo__vid.currentTime > 0 && me._poiexternalvideo__vid.paused == false && me._poiexternalvideo__vid.ended == false);
			} else {
				return false;
			}
		}
		me._poiexternalvideo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._poiexternalvideo.ggCurrentLogicStatePosition = -1;
		me._poiexternalvideo.ggCurrentLogicStateVisible = -1;
		this._poiexternalvideo.ggUpdateConditionTimer=function () {
			var newLogicStatePosition;
			if (
				(ggSkinVars['VideoVisible'] == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(ggSkinVars['VideoVisible'] == false)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._poiexternalvideo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._poiexternalvideo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._poiexternalvideo.style[domTransition]='left none, top none';
				if (me._poiexternalvideo.ggCurrentLogicStatePosition == 0) {
					me._poiexternalvideo.style.left='-204px';
					me._poiexternalvideo.style.top='-33px';
				}
				else if (me._poiexternalvideo.ggCurrentLogicStatePosition == 1) {
					me._poiexternalvideo.style.left='-204px';
					me._poiexternalvideo.style.top='-555px';
				}
				else {
					me._poiexternalvideo.style.left='-204px';
					me._poiexternalvideo.style.top='-555px';
				}
			}
			var newLogicStateVisible;
			if (
				(ggSkinVars['VideoVisible'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['VideoVisible'] == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._poiexternalvideo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._poiexternalvideo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._poiexternalvideo.style[domTransition]='left none, top none';
				if (me._poiexternalvideo.ggCurrentLogicStateVisible == 0) {
					me._poiexternalvideo.style.visibility=(Number(me._poiexternalvideo.style.opacity)>0||!me._poiexternalvideo.style.opacity)?'inherit':'hidden';
					if (me._poiexternalvideo.ggVideoNotLoaded) {
						me._poiexternalvideo.ggInitMedia(me._poiexternalvideo.ggVideoSource);
					}
					me._poiexternalvideo.ggVisible=true;
				}
				else if (me._poiexternalvideo.ggCurrentLogicStateVisible == 1) {
					me._poiexternalvideo.style.visibility="hidden";
					me._poiexternalvideo.ggInitMedia('');
					me._poiexternalvideo.ggVisible=false;
				}
				else {
					me._poiexternalvideo.style.visibility="hidden";
					me._poiexternalvideo.ggInitMedia('');
					me._poiexternalvideo.ggVisible=false;
				}
			}
		}
		this._poiexternalvideo.ggUpdatePosition=function (useTransition) {
		}
		this._poivideocontainer.appendChild(this._poiexternalvideo);
		this._introvideoxi=document.createElement('div');
		this._introvideoxi__img=document.createElement('img');
		this._introvideoxi__img.className='ggskin ggskin_image';
		this._introvideoxi__img.setAttribute('src',basePath + 'images/introvideoxi.png');
		this._introvideoxi__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._introvideoxi__img.className='ggskin ggskin_image';
		this._introvideoxi__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._introvideoxi__img);
		this._introvideoxi.appendChild(this._introvideoxi__img);
		this._introvideoxi.ggId="IntroVideoXi";
		this._introvideoxi.ggLeft=182;
		this._introvideoxi.ggTop=-50;
		this._introvideoxi.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introvideoxi.ggVisible=false;
		this._introvideoxi.className='ggskin ggskin_image ';
		this._introvideoxi.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : -50px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._introvideoxi.setAttribute('style',hs);
		this._introvideoxi.style[domTransform + 'Origin']='50% 50%';
		me._introvideoxi.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._introvideoxi.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._introvideoxi.onclick=function (e) {
			ggSkinVars['viewmarker'] = true;
			ggSkinVars['VideoVisible'] = false;
		}
		me._introvideoxi.ggCurrentLogicStateVisible = -1;
		this._introvideoxi.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['VideoVisible'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['VideoVisible'] == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._introvideoxi.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._introvideoxi.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._introvideoxi.style[domTransition]='';
				if (me._introvideoxi.ggCurrentLogicStateVisible == 0) {
					me._introvideoxi.style.visibility=(Number(me._introvideoxi.style.opacity)>0||!me._introvideoxi.style.opacity)?'inherit':'hidden';
					me._introvideoxi.ggVisible=true;
				}
				else if (me._introvideoxi.ggCurrentLogicStateVisible == 1) {
					me._introvideoxi.style.visibility="hidden";
					me._introvideoxi.ggVisible=false;
				}
				else {
					me._introvideoxi.style.visibility="hidden";
					me._introvideoxi.ggVisible=false;
				}
			}
		}
		this._introvideoxi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._poivideocontainer.appendChild(this._introvideoxi);
		this.divSkin.appendChild(this._poivideocontainer);
		this._nilpenastart_node1=document.createElement('div');
		this._nilpenastart_node1.ggMarkerNodeId='{node1}';
		nodeMarker.push(this._nilpenastart_node1);
		this._nilpenastart_node1.ggId="NilpenaStart_node1";
		this._nilpenastart_node1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._nilpenastart_node1.ggVisible=true;
		this._nilpenastart_node1.className='ggskin ggskin_mark ';
		this._nilpenastart_node1.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 734px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._nilpenastart_node1.setAttribute('style',hs);
		this._nilpenastart_node1.style[domTransform + 'Origin']='50% 50%';
		me._nilpenastart_node1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._nilpenastart_node1.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._nilpenastart_node1.onclick=function (e) {
			me.player.openNext('{node1}');
		}
		this._nilpenastart_node1.ggActivate=function () {
			ggSkinVars['node'] = Number("1");
			ggSkinVars['AnswerButtonPushed'] = false;
			ggSkinVars['BeginnerButtonPushed'] = false;
			ggSkinVars['IntermButtonPushed'] = false;
			ggSkinVars['AdvButtonPushed'] = false;
		}
		this._nilpenastart_node1.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._nilpenastart_node1);
		this._parvbed_node2=document.createElement('div');
		this._parvbed_node2.ggMarkerNodeId='{node2}';
		nodeMarker.push(this._parvbed_node2);
		this._parvbed_node2.ggId="ParvBed_node2";
		this._parvbed_node2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._parvbed_node2.ggVisible=true;
		this._parvbed_node2.className='ggskin ggskin_mark ';
		this._parvbed_node2.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 737px;';
		hs+='position : absolute;';
		hs+='top : 52px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._parvbed_node2.setAttribute('style',hs);
		this._parvbed_node2.style[domTransform + 'Origin']='50% 50%';
		me._parvbed_node2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._parvbed_node2.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._parvbed_node2.onclick=function (e) {
			me.player.openNext('{node2}');
		}
		this._parvbed_node2.ggActivate=function () {
			ggSkinVars['node'] = Number("2");
			ggSkinVars['AnswerButtonPushed'] = false;
			ggSkinVars['BeginnerButtonPushed'] = false;
			ggSkinVars['IntermButtonPushed'] = false;
			ggSkinVars['AdvButtonPushed'] = false;
		}
		this._parvbed_node2.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._parvbed_node2);
		this._underwater_node3=document.createElement('div');
		this._underwater_node3.ggMarkerNodeId='{node5}';
		nodeMarker.push(this._underwater_node3);
		this._underwater_node3.ggId="Underwater_node3";
		this._underwater_node3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._underwater_node3.ggVisible=true;
		this._underwater_node3.className='ggskin ggskin_mark ';
		this._underwater_node3.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 737px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._underwater_node3.setAttribute('style',hs);
		this._underwater_node3.style[domTransform + 'Origin']='50% 50%';
		me._underwater_node3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._underwater_node3.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._underwater_node3.onclick=function (e) {
			me.player.openNext('{node5}');
		}
		this._underwater_node3.ggActivate=function () {
			ggSkinVars['node'] = Number("3");
			ggSkinVars['AnswerButtonPushed'] = false;
			ggSkinVars['BeginnerButtonPushed'] = false;
			ggSkinVars['IntermButtonPushed'] = false;
			ggSkinVars['AdvButtonPushed'] = false;
		}
		this._underwater_node3.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._underwater_node3);
		this._loading_bar=document.createElement('div');
		this._loading_bar.ggId="Loading Bar";
		this._loading_bar.ggLeft=-271;
		this._loading_bar.ggTop=-111;
		this._loading_bar.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75 };
		this._loading_bar.ggVisible=true;
		this._loading_bar.className='ggskin ggskin_rectangle ';
		this._loading_bar.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 123px;';
		hs+='left : -271px;';
		hs+='position : absolute;';
		hs+='top : -111px;';
		hs+='visibility : inherit;';
		hs+='width : 515px;';
		hs+='pointer-events:auto;';
		this._loading_bar.setAttribute('style',hs);
		this._loading_bar.style[domTransform + 'Origin']='50% 0%';
		this._loading_bar.style[domTransform]=parameterToTransform(this._loading_bar.ggParameter);
		me._loading_bar.ggIsActive=function() {
			return false;
		}
		me._loading_bar.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading_bar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loading_bar0=document.createElement('div');
		this._loading_bar0.ggId="loading bar";
		this._loading_bar0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_bar0.ggVisible=true;
		this._loading_bar0.className='ggskin ggskin_rectangle ';
		this._loading_bar0.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(26,97,32,0.682353);';
		hs+='border : 10px solid #005500;';
		hs+='cursor : default;';
		hs+='height : 3px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : inherit;';
		hs+='width : 492px;';
		hs+='pointer-events:auto;';
		this._loading_bar0.setAttribute('style',hs);
		this._loading_bar0.style[domTransform + 'Origin']='0% 50%';
		me._loading_bar0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_bar0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_bar0.ggUpdatePosition=function (useTransition) {
		}
		this._loading_bar.appendChild(this._loading_bar0);
		this._percentage_text=document.createElement('div');
		this._percentage_text__text=document.createElement('div');
		this._percentage_text.className='ggskin ggskin_textdiv';
		this._percentage_text.ggTextDiv=this._percentage_text__text;
		this._percentage_text.ggId="percentage text";
		this._percentage_text.ggTop=-9;
		this._percentage_text.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		this._percentage_text.ggVisible=true;
		this._percentage_text.className='ggskin ggskin_text ';
		this._percentage_text.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		this._percentage_text.setAttribute('style',hs);
		this._percentage_text.style[domTransform + 'Origin']='0% 50%';
		this._percentage_text.style[domTransform]=parameterToTransform(this._percentage_text.ggParameter);
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 54px;';
		hs+='height: 19px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._percentage_text__text.setAttribute('style',hs);
		this._percentage_text.ggUpdateText=function() {
			var hs="<b>"+(me.player.getPercentLoaded()*100.0).toFixed(0)+"<\/b>%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._percentage_text.ggUpdateText();
		this._percentage_text.appendChild(this._percentage_text__text);
		me._percentage_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._percentage_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._percentage_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loading_bar.appendChild(this._percentage_text);
		this._loading_text=document.createElement('div');
		this._loading_text__text=document.createElement('div');
		this._loading_text.className='ggskin ggskin_textdiv';
		this._loading_text.ggTextDiv=this._loading_text__text;
		this._loading_text.ggId="loading text";
		this._loading_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_text.ggVisible=true;
		this._loading_text.className='ggskin ggskin_text ';
		this._loading_text.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 166px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		this._loading_text.setAttribute('style',hs);
		this._loading_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 130px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loading_text__text.setAttribute('style',hs);
		this._loading_text__text.innerHTML="<b>Loading...<\/b>";
		this._loading_text.appendChild(this._loading_text__text);
		me._loading_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_text.ggUpdatePosition=function (useTransition) {
		}
		this._loading_bar.appendChild(this._loading_text);
		this.divSkin.appendChild(this._loading_bar);
		me._audiooffbutton2.style[domTransition]='none';
		me._audiooffbutton2.style.visibility='hidden';
		me._audiooffbutton2.ggVisible=false;
		me._audiooffbutton2.style[domTransition]='none';
		me._audiooffbutton2.style.visibility='hidden';
		me._audiooffbutton2.ggVisible=false;
		me._audioonbutton2.style[domTransition]='none';
		me._audioonbutton2.style.visibility='hidden';
		me._audioonbutton2.ggVisible=false;
		me._rotateautoon.style[domTransition]='none';
		me._rotateautoon.style.visibility='hidden';
		me._rotateautoon.ggVisible=false;
		me.player.stopAutorotate();
		me._rotateautooff.style[domTransition]='none';
		me._rotateautooff.style.visibility='hidden';
		me._rotateautooff.ggVisible=false;
		me._checka3.style[domTransition]='none';
		me._checka3.style.opacity='0';
		me._checka3.style.visibility='hidden';
		me._checki3.style[domTransition]='none';
		me._checki3.style.opacity='0';
		me._checki3.style.visibility='hidden';
		me._checkb3.style[domTransition]='none';
		me._checkb3.style.opacity='0';
		me._checkb3.style.visibility='hidden';
		me._checka2.style[domTransition]='none';
		me._checka2.style.opacity='0';
		me._checka2.style.visibility='hidden';
		me._checki2.style[domTransition]='none';
		me._checki2.style.opacity='0';
		me._checki2.style.visibility='hidden';
		me._checkb2.style[domTransition]='none';
		me._checkb2.style.opacity='0';
		me._checkb2.style.visibility='hidden';
		me._checka1.style[domTransition]='none';
		me._checka1.style.opacity='0';
		me._checka1.style.visibility='hidden';
		me._checki1.style[domTransition]='none';
		me._checki1.style.opacity='0';
		me._checki1.style.visibility='hidden';
		me._checkb1.style[domTransition]='none';
		me._checkb1.style.opacity='0';
		me._checkb1.style.visibility='hidden';
		ggSkinVars['LessoncontVar'] = Number("1");
		me._dicvideo.ggVideoSource = '';
		me._dicvideo.ggVideoNotLoaded = true;
		me._poiexternalvideo.ggVideoSource = '';
		me._poiexternalvideo.ggVideoNotLoaded = true;
		this._nilpenastart_node1.ggMarkerNormal=null;
		this._nilpenastart_node1.ggMarkerActive=null;
		this._parvbed_node2.ggMarkerNormal=null;
		this._parvbed_node2.ggMarkerActive=null;
		this._underwater_node3.ggMarkerNormal=null;
		this._underwater_node3.ggMarkerActive=null;
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			if (me.player.transitionsDisabled) {
				me._loading_bar.style[domTransition]='none';
			} else {
				me._loading_bar.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loading_bar.style.opacity='0';
			me._loading_bar.style.visibility='hidden';
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		var newMarker=[];
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._compass0.ggParameter) {
			hs+=parameterToTransform(me._compass0.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._compass0.style[domTransform]=hs;
		me.__90_tilt.ggUpdateText();
		me._master_question_container.ggUpdateConditionTimer();
		me._masterquestiontextbox.ggUpdateConditionTimer();
		me._masteranswertextbox.ggUpdateConditionTimer();
		me._node3checkmarks.ggUpdateConditionTimer();
		me._checka3.ggUpdateConditionTimer();
		me._checki3.ggUpdateConditionTimer();
		me._checkb3.ggUpdateConditionTimer();
		me._node2checkmarks.ggUpdateConditionTimer();
		me._checka2.ggUpdateConditionTimer();
		me._checki2.ggUpdateConditionTimer();
		me._checkb2.ggUpdateConditionTimer();
		me._node1checkmarks.ggUpdateConditionTimer();
		me._checka1.ggUpdateConditionTimer();
		me._checki1.ggUpdateConditionTimer();
		me._checkb1.ggUpdateConditionTimer();
		me._discover_more_text.ggUpdateConditionTimer();
		me._introwhitebox1.ggUpdateConditionTimer();
		me._lessoncont1.ggUpdateConditionTimer();
		me._poitextcontainer.ggUpdateConditionTimer();
		me._poiimagecontainer.ggUpdateConditionTimer();
		me._poiobjectcontainer.ggUpdateConditionTimer();
		me._dicobjecttextwindow.ggUpdateConditionTimer();
		me._blackvideobackground_obj.ggUpdateConditionTimer();
		me._dicvideo.ggUpdateConditionTimer();
		me._dicinfo.ggUpdateConditionTimer();
		me._diccomparecontainer.ggUpdateConditionTimer();
		me._aspcomparecontainer.ggUpdateConditionTimer();
		me._eoacomparecontainer.ggUpdateConditionTimer();
		me._spicomparecontainer.ggUpdateConditionTimer();
		me._parcomparecontainer.ggUpdateConditionTimer();
		me._tricomparecontainer.ggUpdateConditionTimer();
		me._medcomparecontainer.ggUpdateConditionTimer();
		me._aspimage.ggUpdateConditionTimer();
		me._triimage.ggUpdateConditionTimer();
		me._sprimage.ggUpdateConditionTimer();
		me._parimage.ggUpdateConditionTimer();
		me._eoaimage.ggUpdateConditionTimer();
		me._medimage.ggUpdateConditionTimer();
		me._dicimage.ggUpdateConditionTimer();
		me._whiteimage.ggUpdateConditionTimer();
		me._dicname.ggUpdateConditionTimer();
		me._blackvideobackground.ggUpdateConditionTimer();
		me._videotitle.ggUpdateConditionTimer();
		me._poiexternalvideo.ggUpdateConditionTimer();
		me._introvideoxi.ggUpdateConditionTimer();
		var hs='';
		if (me._loading_bar0.ggParameter) {
			hs+=parameterToTransform(me._loading_bar0.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loading_bar0.style[domTransform]=hs;
		me._percentage_text.ggUpdateText();
		var hs='';
		if (me._percentage_text.ggParameter) {
			hs+=parameterToTransform(me._percentage_text.ggParameter) + ' ';
		}
		hs+='translate(' + (88 * me.player.getPercentLoaded() + 0) + 'px,0px) ';
		me._percentage_text.style[domTransform]=hs;
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='hsG') {
			this.__div=document.createElement('div');
			this.__div.ggId="hsG";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 843px;';
			hs+='position : absolute;';
			hs+='top : 178px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._spinning_explore_logo=document.createElement('div');
			this._spinning_explore_logo__img=document.createElement('img');
			this._spinning_explore_logo__img.className='ggskin ggskin_external';
			this._spinning_explore_logo__img.onload=function() {me._spinning_explore_logo.ggUpdatePosition();}
			this._spinning_explore_logo__img.setAttribute('src',basePath + '../../../images/zoom.gif');
			this._spinning_explore_logo__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._spinning_explore_logo__img);
			hs ='';
			this._spinning_explore_logo.appendChild(this._spinning_explore_logo__img);
			this._spinning_explore_logo.ggId="Spinning explore logo";
			this._spinning_explore_logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._spinning_explore_logo.ggVisible=true;
			this._spinning_explore_logo.className='ggskin ggskin_external ';
			this._spinning_explore_logo.ggType='external';
			hs ='';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 38px;';
			hs+='left : -59px;';
			hs+='opacity : 0;';
			hs+='position : absolute;';
			hs+='top : -53px;';
			hs+='visibility : hidden;';
			hs+='width : 130px;';
			hs+='pointer-events:auto;';
			this._spinning_explore_logo.setAttribute('style',hs);
			this._spinning_explore_logo.style[domTransform + 'Origin']='50% 50%';
			me._spinning_explore_logo.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._spinning_explore_logo.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._spinning_explore_logo.ggUpdatePosition=function (useTransition) {
				var parentWidth = me._spinning_explore_logo.clientWidth;
				var parentHeight = me._spinning_explore_logo.clientHeight;
				var aspectRatioDiv = me._spinning_explore_logo.clientWidth / me._spinning_explore_logo.clientHeight;
				var aspectRatioImg = me._spinning_explore_logo__img.naturalWidth / me._spinning_explore_logo__img.naturalHeight;
				var currentWidth = me._spinning_explore_logo__img.naturalWidth;
				var currentHeight = me._spinning_explore_logo__img.naturalHeight;
				me._spinning_explore_logo__img.setAttribute('style','position: absolute; left: 0px; top: 0px;-webkit-user-drag:none;pointer-events:none;');
			}
			this.__div.appendChild(this._spinning_explore_logo);
			this._gigicony=document.createElement('div');
			this._gigicony__img=document.createElement('img');
			this._gigicony__img.className='ggskin ggskin_button';
			this._gigicony__img.setAttribute('src',basePath + 'images/gigicony.png');
			this._gigicony__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._gigicony__img.className='ggskin ggskin_button';
			this._gigicony__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._gigicony__img);
			this._gigicony.appendChild(this._gigicony__img);
			this._gigicony.ggId="gigiconY";
			this._gigicony.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._gigicony.ggVisible=true;
			this._gigicony.className='ggskin ggskin_button ';
			this._gigicony.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 38px;';
			hs+='left : -17px;';
			hs+='opacity : 0.7;';
			hs+='position : absolute;';
			hs+='top : -17px;';
			hs+='visibility : inherit;';
			hs+='width : 46px;';
			hs+='pointer-events:auto;';
			this._gigicony.setAttribute('style',hs);
			this._gigicony.style[domTransform + 'Origin']='50% 50%';
			me._gigicony.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._gigicony.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._gigicony.onmouseover=function (e) {
				me._gigicony.style[domTransition]='none';
				me._gigicony.style.opacity='1';
				me._gigicony.style.visibility=me._gigicony.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spinning_explore_logo.style.opacity='1';
				me._spinning_explore_logo.style.visibility=me._spinning_explore_logo.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 1000ms ease-out 0ms';
				}
				me._spinning_explore_logo.ggParameter.rx=0;me._spinning_explore_logo.ggParameter.ry=-10;
				me._spinning_explore_logo.style[domTransform]=parameterToTransform(me._spinning_explore_logo.ggParameter);
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spinning_explore_logo.ggParameter.sx=1;me._spinning_explore_logo.ggParameter.sy=1;
				me._spinning_explore_logo.style[domTransform]=parameterToTransform(me._spinning_explore_logo.ggParameter);
				if (me.player.transitionsDisabled) {
					me._hsgigiconlabeltext.style[domTransition]='none';
				} else {
					me._hsgigiconlabeltext.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsgigiconlabeltext.style.opacity='1';
				me._hsgigiconlabeltext.style.visibility=me._hsgigiconlabeltext.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._hsgigiconlabeltext.style[domTransition]='none';
				} else {
					me._hsgigiconlabeltext.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsgigiconlabeltext.ggParameter.sx=1;me._hsgigiconlabeltext.ggParameter.sy=1;
				me._hsgigiconlabeltext.style[domTransform]=parameterToTransform(me._hsgigiconlabeltext.ggParameter);
				me._gigicony__img.src=basePath + 'images/gigicony__o.png';
			}
			this._gigicony.onmouseout=function (e) {
				me._gigicony.style[domTransition]='none';
				me._gigicony.style.opacity='0.7';
				me._gigicony.style.visibility=me._gigicony.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spinning_explore_logo.style.opacity='0';
				me._spinning_explore_logo.style.visibility='hidden';
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 1000ms ease-out 0ms';
				}
				me._spinning_explore_logo.ggParameter.rx=0;me._spinning_explore_logo.ggParameter.ry=10;
				me._spinning_explore_logo.style[domTransform]=parameterToTransform(me._spinning_explore_logo.ggParameter);
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spinning_explore_logo.ggParameter.sx=0.5;me._spinning_explore_logo.ggParameter.sy=0.5;
				me._spinning_explore_logo.style[domTransform]=parameterToTransform(me._spinning_explore_logo.ggParameter);
				if (me.player.transitionsDisabled) {
					me._hsgigiconlabeltext.style[domTransition]='none';
				} else {
					me._hsgigiconlabeltext.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsgigiconlabeltext.ggParameter.sx=0.5;me._hsgigiconlabeltext.ggParameter.sy=0.5;
				me._hsgigiconlabeltext.style[domTransform]=parameterToTransform(me._hsgigiconlabeltext.ggParameter);
				if (me.player.transitionsDisabled) {
					me._hsgigiconlabeltext.style[domTransition]='none';
				} else {
					me._hsgigiconlabeltext.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsgigiconlabeltext.style.opacity='0.5';
				me._hsgigiconlabeltext.style.visibility=me._hsgigiconlabeltext.ggVisible?'inherit':'hidden';
				me._gigicony__img.src=basePath + 'images/gigicony.png';
			}
			this._gigicony.onmousedown=function (e) {
				me._gigicony__img.src=basePath + 'images/gigicony__a.png';
			}
			this._gigicony.onmouseup=function (e) {
				me._gigicony__img.src=basePath + 'images/gigicony.png';
			}
			this._gigicony.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._gigicony);
			this._gigicon=document.createElement('div');
			this._gigicon__img=document.createElement('img');
			this._gigicon__img.className='ggskin ggskin_button';
			this._gigicon__img.setAttribute('src',basePath + 'images/gigicon.png');
			this._gigicon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._gigicon__img.className='ggskin ggskin_button';
			this._gigicon__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._gigicon__img);
			this._gigicon.appendChild(this._gigicon__img);
			this._gigicon.ggId="gigicon";
			this._gigicon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._gigicon.ggVisible=true;
			this._gigicon.className='ggskin ggskin_button ';
			this._gigicon.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 38px;';
			hs+='left : -17px;';
			hs+='opacity : 0.7;';
			hs+='position : absolute;';
			hs+='top : -17px;';
			hs+='visibility : inherit;';
			hs+='width : 46px;';
			hs+='pointer-events:auto;';
			this._gigicon.setAttribute('style',hs);
			this._gigicon.style[domTransform + 'Origin']='50% 50%';
			me._gigicon.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._gigicon.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._gigicon.onclick=function (e) {
				me._gigicon.style[domTransition]='none';
				me._gigicon.ggParameter.sx=0;me._gigicon.ggParameter.sy=0;
				me._gigicon.style[domTransform]=parameterToTransform(me._gigicon.ggParameter);
				me._gigicony.style[domTransition]='none';
				me._gigicony.ggParameter.sx=1;me._gigicony.ggParameter.sy=1;
				me._gigicony.style[domTransform]=parameterToTransform(me._gigicony.ggParameter);
			}
			this._gigicon.onmouseover=function (e) {
				me._gigicon.style[domTransition]='none';
				me._gigicon.style.opacity='1';
				me._gigicon.style.visibility=me._gigicon.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spinning_explore_logo.style.opacity='1';
				me._spinning_explore_logo.style.visibility=me._spinning_explore_logo.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 1000ms ease-out 0ms';
				}
				me._spinning_explore_logo.ggParameter.rx=0;me._spinning_explore_logo.ggParameter.ry=-10;
				me._spinning_explore_logo.style[domTransform]=parameterToTransform(me._spinning_explore_logo.ggParameter);
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spinning_explore_logo.ggParameter.sx=1;me._spinning_explore_logo.ggParameter.sy=1;
				me._spinning_explore_logo.style[domTransform]=parameterToTransform(me._spinning_explore_logo.ggParameter);
				if (me.player.transitionsDisabled) {
					me._hsgigiconlabeltext.style[domTransition]='none';
				} else {
					me._hsgigiconlabeltext.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsgigiconlabeltext.style.opacity='1';
				me._hsgigiconlabeltext.style.visibility=me._hsgigiconlabeltext.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._hsgigiconlabeltext.style[domTransition]='none';
				} else {
					me._hsgigiconlabeltext.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsgigiconlabeltext.ggParameter.sx=1;me._hsgigiconlabeltext.ggParameter.sy=1;
				me._hsgigiconlabeltext.style[domTransform]=parameterToTransform(me._hsgigiconlabeltext.ggParameter);
				me._gigicon__img.src=basePath + 'images/gigicon__o.png';
			}
			this._gigicon.onmouseout=function (e) {
				me._gigicon.style[domTransition]='none';
				me._gigicon.style.opacity='0.7';
				me._gigicon.style.visibility=me._gigicon.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spinning_explore_logo.style.opacity='0';
				me._spinning_explore_logo.style.visibility='hidden';
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 1000ms ease-out 0ms';
				}
				me._spinning_explore_logo.ggParameter.rx=0;me._spinning_explore_logo.ggParameter.ry=10;
				me._spinning_explore_logo.style[domTransform]=parameterToTransform(me._spinning_explore_logo.ggParameter);
				if (me.player.transitionsDisabled) {
					me._spinning_explore_logo.style[domTransition]='none';
				} else {
					me._spinning_explore_logo.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._spinning_explore_logo.ggParameter.sx=0.5;me._spinning_explore_logo.ggParameter.sy=0.5;
				me._spinning_explore_logo.style[domTransform]=parameterToTransform(me._spinning_explore_logo.ggParameter);
				if (me.player.transitionsDisabled) {
					me._hsgigiconlabeltext.style[domTransition]='none';
				} else {
					me._hsgigiconlabeltext.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsgigiconlabeltext.ggParameter.sx=0.5;me._hsgigiconlabeltext.ggParameter.sy=0.5;
				me._hsgigiconlabeltext.style[domTransform]=parameterToTransform(me._hsgigiconlabeltext.ggParameter);
				if (me.player.transitionsDisabled) {
					me._hsgigiconlabeltext.style[domTransition]='none';
				} else {
					me._hsgigiconlabeltext.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsgigiconlabeltext.style.opacity='0.5';
				me._hsgigiconlabeltext.style.visibility=me._hsgigiconlabeltext.ggVisible?'inherit':'hidden';
				me._gigicon__img.src=basePath + 'images/gigicon.png';
			}
			this._gigicon.onmousedown=function (e) {
				me._gigicon__img.src=basePath + 'images/gigicon__a.png';
			}
			this._gigicon.onmouseup=function (e) {
				me._gigicon__img.src=basePath + 'images/gigicon.png';
			}
			this._gigicon.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._gigicon);
			this._hsgigiconlabeltext=document.createElement('div');
			this._hsgigiconlabeltext__text=document.createElement('div');
			this._hsgigiconlabeltext.className='ggskin ggskin_textdiv';
			this._hsgigiconlabeltext.ggTextDiv=this._hsgigiconlabeltext__text;
			this._hsgigiconlabeltext.ggId="hsGigIconLabelText";
			this._hsgigiconlabeltext.ggParameter={ rx:0,ry:0,a:0,sx:1.15,sy:1.15 };
			this._hsgigiconlabeltext.ggVisible=true;
			this._hsgigiconlabeltext.className='ggskin ggskin_text ';
			this._hsgigiconlabeltext.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -209px;';
			hs+='position : absolute;';
			hs+='top : 22px;';
			hs+='visibility : inherit;';
			hs+='width : 421px;';
			hs+='pointer-events:auto;';
			this._hsgigiconlabeltext.setAttribute('style',hs);
			this._hsgigiconlabeltext.style[domTransform + 'Origin']='50% 0%';
			this._hsgigiconlabeltext.style[domTransform]=parameterToTransform(this._hsgigiconlabeltext.ggParameter);
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #d2ffc1;';
			hs+='border: 2px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hsgigiconlabeltext__text.setAttribute('style',hs);
			this._hsgigiconlabeltext__text.innerHTML=me.hotspot.url;
			this._hsgigiconlabeltext.appendChild(this._hsgigiconlabeltext__text);
			me._hsgigiconlabeltext.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsgigiconlabeltext.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hsgigiconlabeltext.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((427-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hsgigiconlabeltext);
			me._gigicony.style[domTransition]='none';
			me._gigicony.ggParameter.sx=0;me._gigicony.ggParameter.sy=0;
			me._gigicony.style[domTransform]=parameterToTransform(me._gigicony.ggParameter);
			me._hsgigiconlabeltext.style[domTransition]='none';
			me._hsgigiconlabeltext.ggParameter.sx=0.5;me._hsgigiconlabeltext.ggParameter.sy=0.5;
			me._hsgigiconlabeltext.style[domTransform]=parameterToTransform(me._hsgigiconlabeltext.ggParameter);
			me._hsgigiconlabeltext.style[domTransition]='none';
			me._hsgigiconlabeltext.style.opacity='0.5';
			me._hsgigiconlabeltext.style.visibility=me._hsgigiconlabeltext.ggVisible?'inherit':'hidden';
		} else
		if (hotspot.skinid=='ht_video_file') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_file";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 71px;';
			hs+='position : absolute;';
			hs+='top : 453px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._poivmarker1=document.createElement('div');
			this._poivmarker1__img=document.createElement('img');
			this._poivmarker1__img.className='ggskin ggskin_image';
			this._poivmarker1__img.setAttribute('src',basePath + 'images/poivmarker1.png');
			this._poivmarker1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._poivmarker1__img.className='ggskin ggskin_image';
			this._poivmarker1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._poivmarker1__img);
			this._poivmarker1.appendChild(this._poivmarker1__img);
			this._poivmarker1.ggId="POIvMarker1";
			this._poivmarker1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._poivmarker1.ggVisible=false;
			this._poivmarker1.className='ggskin ggskin_image ';
			this._poivmarker1.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 89px;';
			hs+='left : -44px;';
			hs+='position : absolute;';
			hs+='top : -80px;';
			hs+='visibility : hidden;';
			hs+='width : 89px;';
			hs+='pointer-events:auto;';
			this._poivmarker1.setAttribute('style',hs);
			this._poivmarker1.style[domTransform + 'Origin']='50% 50%';
			me._poivmarker1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._poivmarker1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._poivmarker1.onclick=function (e) {
				ggSkinVars['VideoVisible'] = !ggSkinVars['VideoVisible'];
				me.skin._videotitle.ggVisible = !me.skin._videotitle.ggVisible;
				var flag=me.skin._videotitle.ggVisible;
				me.skin._videotitle.style[domTransition]='none';
				me.skin._videotitle.style.visibility=((flag)&&(Number(me.skin._videotitle.style.opacity)>0||!me.skin._videotitle.style.opacity))?'inherit':'hidden';
				me.skin._poiexternalvideo.ggInitMedia(me.hotspot.url);
				me.skin._videotitle.ggText=me.hotspot.title;
				me.skin._videotitle.ggTextDiv.innerHTML=me.skin._videotitle.ggText;
				if (me.skin._videotitle.ggUpdateText) {
					me.skin._videotitle.ggUpdateText=function() {
						var hs=me.hotspot.title;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._videotitle.ggUpdatePosition) {
					me.skin._videotitle.ggUpdatePosition();
				}
				me.skin._videotitle.ggTextDiv.scrollTop = 0;
				ggSkinVars['viewmarker'] = false;
			}
			me._poivmarker1.ggCurrentLogicStateVisible = -1;
			this._poivmarker1.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['viewmarker'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else if (
					(ggSkinVars['viewmarker'] == false)
				)
				{
					newLogicStateVisible = 1;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._poivmarker1.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._poivmarker1.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._poivmarker1.style[domTransition]='';
					if (me._poivmarker1.ggCurrentLogicStateVisible == 0) {
						me._poivmarker1.style.visibility=(Number(me._poivmarker1.style.opacity)>0||!me._poivmarker1.style.opacity)?'inherit':'hidden';
						me._poivmarker1.ggVisible=true;
					}
					else if (me._poivmarker1.ggCurrentLogicStateVisible == 1) {
						me._poivmarker1.style.visibility="hidden";
						me._poivmarker1.ggVisible=false;
					}
					else {
						me._poivmarker1.style.visibility="hidden";
						me._poivmarker1.ggVisible=false;
					}
				}
			}
			this._poivmarker1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._poivmarker1);
			this.ggUse3d=true;
			this.gg3dDistance=800;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._poivmarker1.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='hsPOIt') {
			this.__div=document.createElement('div');
			this.__div.ggId="hsPOIt";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 109px;';
			hs+='position : absolute;';
			hs+='top : 197px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._poitmarker=document.createElement('div');
			this._poitmarker__img=document.createElement('img');
			this._poitmarker__img.className='ggskin ggskin_image';
			this._poitmarker__img.setAttribute('src',basePath + 'images/poitmarker.png');
			this._poitmarker__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._poitmarker__img.className='ggskin ggskin_image';
			this._poitmarker__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._poitmarker__img);
			this._poitmarker.appendChild(this._poitmarker__img);
			this._poitmarker.ggId="POItMarker";
			this._poitmarker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._poitmarker.ggVisible=true;
			this._poitmarker.className='ggskin ggskin_image ';
			this._poitmarker.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 89px;';
			hs+='left : -45px;';
			hs+='position : absolute;';
			hs+='top : -84px;';
			hs+='visibility : inherit;';
			hs+='width : 89px;';
			hs+='pointer-events:auto;';
			this._poitmarker.setAttribute('style',hs);
			this._poitmarker.style[domTransform + 'Origin']='50% 50%';
			me._poitmarker.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._poitmarker.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._poitmarker.onclick=function (e) {
				me._poitext.ggVisible = !me._poitext.ggVisible;
				var flag=me._poitext.ggVisible;
				me._poitext.style[domTransition]='none';
				me._poitext.style.visibility=((flag)&&(Number(me._poitext.style.opacity)>0||!me._poitext.style.opacity))?'inherit':'hidden';
				ggSkinVars['VideoVisible'] = false;
				me.skin._text_from_location.ggText="<font size=\"3\">"+me.hotspot.description+"<\/font>";
				me.skin._text_from_location.ggTextDiv.innerHTML=me.skin._text_from_location.ggText;
				if (me.skin._text_from_location.ggUpdateText) {
					me.skin._text_from_location.ggUpdateText=function() {
						var hs="<font size=\"3\">"+me.hotspot.description+"<\/font>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._text_from_location.ggUpdatePosition) {
					me.skin._text_from_location.ggUpdatePosition();
				}
				me.skin._text_from_location.ggTextDiv.scrollTop = 0;
			}
			me._poitmarker.ggCurrentLogicStateVisible = -1;
			this._poitmarker.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['viewmarker'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else if (
					(ggSkinVars['viewmarker'] == false)
				)
				{
					newLogicStateVisible = 1;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._poitmarker.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._poitmarker.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._poitmarker.style[domTransition]='';
					if (me._poitmarker.ggCurrentLogicStateVisible == 0) {
						me._poitmarker.style.visibility=(Number(me._poitmarker.style.opacity)>0||!me._poitmarker.style.opacity)?'inherit':'hidden';
						me._poitmarker.ggVisible=true;
					}
					else if (me._poitmarker.ggCurrentLogicStateVisible == 1) {
						me._poitmarker.style.visibility="hidden";
						me._poitmarker.ggVisible=false;
					}
					else {
						me._poitmarker.style.visibility=(Number(me._poitmarker.style.opacity)>0||!me._poitmarker.style.opacity)?'inherit':'hidden';
						me._poitmarker.ggVisible=true;
					}
				}
			}
			this._poitmarker.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._poitmarker);
			this._poitext=document.createElement('div');
			this._poitext__text=document.createElement('div');
			this._poitext.className='ggskin ggskin_textdiv';
			this._poitext.ggTextDiv=this._poitext__text;
			this._poitext.ggId="POItext";
			this._poitext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._poitext.ggVisible=false;
			this._poitext.className='ggskin ggskin_text ';
			this._poitext.ggType='text';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 185px;';
			hs+='left : 35px;';
			hs+='opacity : 0.8;';
			hs+='position : absolute;';
			hs+='top : -133px;';
			hs+='visibility : hidden;';
			hs+='width : 296px;';
			hs+='pointer-events:auto;';
			this._poitext.setAttribute('style',hs);
			this._poitext.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 296px;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 6px;';
			hs+=cssPrefix + 'border-radius: 6px;';
			hs+='color: rgba(254,254,254,1);';
			hs+='text-align: left;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 11px 12px 11px 12px;';
			hs+='overflow: hidden;';
			this._poitext__text.setAttribute('style',hs);
			this._poitext__text.innerHTML="<font size=\"3\">"+me.hotspot.description+"<\/font>";
			this._poitext.appendChild(this._poitext__text);
			me._poitext.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._poitext.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._poitext.onclick=function (e) {
				ggSkinVars['TextContVisible'] = true;
				ggSkinVars['viewmarker'] = false;
			}
			me._poitext.ggCurrentLogicStateVisible = -1;
			this._poitext.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['viewmarker'] == false)
				)
				{
					newLogicStateVisible = 0;
				}
				else if (
					(ggSkinVars['TextContVisible'] == true)
				)
				{
					newLogicStateVisible = 1;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._poitext.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._poitext.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._poitext.style[domTransition]='';
					if (me._poitext.ggCurrentLogicStateVisible == 0) {
						me._poitext.style.visibility="hidden";
						me._poitext.ggVisible=false;
					}
					else if (me._poitext.ggCurrentLogicStateVisible == 1) {
						me._poitext.style.visibility="hidden";
						me._poitext.ggVisible=false;
					}
					else {
						me._poitext.style.visibility="hidden";
						me._poitext.ggVisible=false;
					}
				}
			}
			this._poitext.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._poitext);
			this.ggUse3d=true;
			this.gg3dDistance=800;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._poitmarker.ggUpdateConditionTimer();
				me._poitext.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='hsPOIp_image') {
			this.__div=document.createElement('div');
			this.__div.ggId="hsPOIp_image";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 68px;';
			hs+='position : absolute;';
			hs+='top : 356px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._poipmarker_forimage=document.createElement('div');
			this._poipmarker_forimage__img=document.createElement('img');
			this._poipmarker_forimage__img.className='ggskin ggskin_image';
			this._poipmarker_forimage__img.setAttribute('src',basePath + 'images/poipmarker_forimage.png');
			this._poipmarker_forimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._poipmarker_forimage__img.className='ggskin ggskin_image';
			this._poipmarker_forimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._poipmarker_forimage__img);
			this._poipmarker_forimage.appendChild(this._poipmarker_forimage__img);
			this._poipmarker_forimage.ggId="POIpMarker_forImage";
			this._poipmarker_forimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._poipmarker_forimage.ggVisible=true;
			this._poipmarker_forimage.className='ggskin ggskin_image ';
			this._poipmarker_forimage.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 89px;';
			hs+='left : -44px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 89px;';
			hs+='pointer-events:auto;';
			this._poipmarker_forimage.setAttribute('style',hs);
			this._poipmarker_forimage.style[domTransform + 'Origin']='50% 50%';
			me._poipmarker_forimage.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._poipmarker_forimage.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._poipmarker_forimage.onclick=function (e) {
				me.skin._externalimage.ggText=me.player.getBasePath()+""+me.hotspot.title;
				me.skin._externalimage__img.src=me.skin._externalimage.ggText;
				ggSkinVars['VideoVisible'] = false;
				ggSkinVars['ImageVisible'] = true;
				me.skin._imagetext_and_white_background.ggText=me.hotspot.description;
				me.skin._imagetext_and_white_background.ggTextDiv.innerHTML=me.skin._imagetext_and_white_background.ggText;
				if (me.skin._imagetext_and_white_background.ggUpdateText) {
					me.skin._imagetext_and_white_background.ggUpdateText=function() {
						var hs=me.hotspot.description;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._imagetext_and_white_background.ggUpdatePosition) {
					me.skin._imagetext_and_white_background.ggUpdatePosition();
				}
				me.skin._imagetext_and_white_background.ggTextDiv.scrollTop = 0;
				ggSkinVars['viewmarker'] = false;
			}
			me._poipmarker_forimage.ggCurrentLogicStateVisible = -1;
			this._poipmarker_forimage.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['viewmarker'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else if (
					(ggSkinVars['viewmarker'] == false)
				)
				{
					newLogicStateVisible = 1;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._poipmarker_forimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._poipmarker_forimage.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._poipmarker_forimage.style[domTransition]='';
					if (me._poipmarker_forimage.ggCurrentLogicStateVisible == 0) {
						me._poipmarker_forimage.style.visibility=(Number(me._poipmarker_forimage.style.opacity)>0||!me._poipmarker_forimage.style.opacity)?'inherit':'hidden';
						me._poipmarker_forimage.ggVisible=true;
					}
					else if (me._poipmarker_forimage.ggCurrentLogicStateVisible == 1) {
						me._poipmarker_forimage.style.visibility="hidden";
						me._poipmarker_forimage.ggVisible=false;
					}
					else {
						me._poipmarker_forimage.style.visibility=(Number(me._poipmarker_forimage.style.opacity)>0||!me._poipmarker_forimage.style.opacity)?'inherit':'hidden';
						me._poipmarker_forimage.ggVisible=true;
					}
				}
			}
			this._poipmarker_forimage.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._poipmarker_forimage);
			this.ggUse3d=true;
			this.gg3dDistance=800;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._poipmarker_forimage.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='htObjects') {
			this.__div=document.createElement('div');
			this.__div.ggId="htObjects";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 352px;';
			hs+='position : absolute;';
			hs+='top : 1004px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._poipmarker=document.createElement('div');
			this._poipmarker__img=document.createElement('img');
			this._poipmarker__img.className='ggskin ggskin_image';
			this._poipmarker__img.setAttribute('src',basePath + 'images/poipmarker.png');
			this._poipmarker__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._poipmarker__img.className='ggskin ggskin_image';
			this._poipmarker__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._poipmarker__img);
			this._poipmarker.appendChild(this._poipmarker__img);
			this._poipmarker.ggId="POIpMarker";
			this._poipmarker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._poipmarker.ggVisible=true;
			this._poipmarker.className='ggskin ggskin_image ';
			this._poipmarker.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 89px;';
			hs+='left : -44px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 89px;';
			hs+='pointer-events:auto;';
			this._poipmarker.setAttribute('style',hs);
			this._poipmarker.style[domTransform + 'Origin']='50% 50%';
			me._poipmarker.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._poipmarker.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._poipmarker.onclick=function (e) {
				ggSkinVars['WhichObjectVar'] = me.hotspot.title;
				me.skin._dicobjecttextwindow.ggText=me.hotspot.description;
				me.skin._dicobjecttextwindow.ggTextDiv.innerHTML=me.skin._dicobjecttextwindow.ggText;
				if (me.skin._dicobjecttextwindow.ggUpdateText) {
					me.skin._dicobjecttextwindow.ggUpdateText=function() {
						var hs=me.hotspot.description;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._dicobjecttextwindow.ggUpdatePosition) {
					me.skin._dicobjecttextwindow.ggUpdatePosition();
				}
				me.skin._dicobjecttextwindow.ggTextDiv.scrollTop = 0;
				me.skin._dicvideo.ggInitMedia(me.hotspot.url);
				ggSkinVars['viewmarker'] = false;
				ggSkinVars['VideoVisible'] = false;
				ggSkinVars['ObjectVideoVisible'] = false;
				ggSkinVars['ObjContVisible'] = true;
			}
			me._poipmarker.ggCurrentLogicStateVisible = -1;
			this._poipmarker.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['viewmarker'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else if (
					(ggSkinVars['viewmarker'] == false)
				)
				{
					newLogicStateVisible = 1;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._poipmarker.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._poipmarker.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._poipmarker.style[domTransition]='';
					if (me._poipmarker.ggCurrentLogicStateVisible == 0) {
						me._poipmarker.style.visibility=(Number(me._poipmarker.style.opacity)>0||!me._poipmarker.style.opacity)?'inherit':'hidden';
						me._poipmarker.ggVisible=true;
					}
					else if (me._poipmarker.ggCurrentLogicStateVisible == 1) {
						me._poipmarker.style.visibility="hidden";
						me._poipmarker.ggVisible=false;
					}
					else {
						me._poipmarker.style.visibility=(Number(me._poipmarker.style.opacity)>0||!me._poipmarker.style.opacity)?'inherit':'hidden';
						me._poipmarker.ggVisible=true;
					}
				}
			}
			this._poipmarker.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._poipmarker);
			this.ggUse3d=true;
			this.gg3dDistance=800;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._poipmarker.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node_Parv') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node_Parv";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 65px;';
			hs+='position : absolute;';
			hs+='top : 101px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				ggSkinVars['MasterQtextBox'] = Number("0");
				ggSkinVars['VideoVisible'] = false;
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._circlenodeparv=document.createElement('div');
			this._circlenodeparv__img=document.createElement('img');
			this._circlenodeparv__img.className='ggskin ggskin_image';
			this._circlenodeparv__img.setAttribute('src',basePath + 'images/circlenodeparv.png');
			this._circlenodeparv__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._circlenodeparv__img.className='ggskin ggskin_image';
			this._circlenodeparv__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._circlenodeparv__img);
			this._circlenodeparv.appendChild(this._circlenodeparv__img);
			this._circlenodeparv.ggId="circlenodeParv";
			this._circlenodeparv.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._circlenodeparv.ggVisible=true;
			this._circlenodeparv.className='ggskin ggskin_image ';
			this._circlenodeparv.ggType='image';
			hs ='';
			hs+='height : 119px;';
			hs+='left : -56px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 115px;';
			hs+='pointer-events:auto;';
			this._circlenodeparv.setAttribute('style',hs);
			this._circlenodeparv.style[domTransform + 'Origin']='50% 50%';
			me._circlenodeparv.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._circlenodeparv.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._circlenodeparv.ggCurrentLogicStateVisible = -1;
			this._circlenodeparv.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['viewmarker'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else if (
					(ggSkinVars['viewmarker'] == false)
				)
				{
					newLogicStateVisible = 1;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._circlenodeparv.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._circlenodeparv.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._circlenodeparv.style[domTransition]='';
					if (me._circlenodeparv.ggCurrentLogicStateVisible == 0) {
						me._circlenodeparv.style.visibility=(Number(me._circlenodeparv.style.opacity)>0||!me._circlenodeparv.style.opacity)?'inherit':'hidden';
						me._circlenodeparv.ggVisible=true;
					}
					else if (me._circlenodeparv.ggCurrentLogicStateVisible == 1) {
						me._circlenodeparv.style.visibility="hidden";
						me._circlenodeparv.ggVisible=false;
					}
					else {
						me._circlenodeparv.style.visibility=(Number(me._circlenodeparv.style.opacity)>0||!me._circlenodeparv.style.opacity)?'inherit':'hidden';
						me._circlenodeparv.ggVisible=true;
					}
				}
			}
			this._circlenodeparv.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._circlenodeparv);
			this.ggUse3d=true;
			this.gg3dDistance=800;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._circlenodeparv.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node_MainBed') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node_MainBed";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 65px;';
			hs+='position : absolute;';
			hs+='top : 101px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				ggSkinVars['MasterQtextBox'] = Number("0");
				ggSkinVars['VideoVisible'] = false;
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._circlenodestart=document.createElement('div');
			this._circlenodestart__img=document.createElement('img');
			this._circlenodestart__img.className='ggskin ggskin_image';
			this._circlenodestart__img.setAttribute('src',basePath + 'images/circlenodestart.png');
			this._circlenodestart__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._circlenodestart__img.className='ggskin ggskin_image';
			this._circlenodestart__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._circlenodestart__img);
			this._circlenodestart.appendChild(this._circlenodestart__img);
			this._circlenodestart.ggId="circlenodestart";
			this._circlenodestart.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._circlenodestart.ggVisible=true;
			this._circlenodestart.className='ggskin ggskin_image ';
			this._circlenodestart.ggType='image';
			hs ='';
			hs+='height : 119px;';
			hs+='left : -56px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 115px;';
			hs+='pointer-events:auto;';
			this._circlenodestart.setAttribute('style',hs);
			this._circlenodestart.style[domTransform + 'Origin']='50% 50%';
			me._circlenodestart.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._circlenodestart.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._circlenodestart.ggCurrentLogicStateVisible = -1;
			this._circlenodestart.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['viewmarker'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else if (
					(ggSkinVars['viewmarker'] == false)
				)
				{
					newLogicStateVisible = 1;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._circlenodestart.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._circlenodestart.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._circlenodestart.style[domTransition]='';
					if (me._circlenodestart.ggCurrentLogicStateVisible == 0) {
						me._circlenodestart.style.visibility=(Number(me._circlenodestart.style.opacity)>0||!me._circlenodestart.style.opacity)?'inherit':'hidden';
						me._circlenodestart.ggVisible=true;
					}
					else if (me._circlenodestart.ggCurrentLogicStateVisible == 1) {
						me._circlenodestart.style.visibility="hidden";
						me._circlenodestart.ggVisible=false;
					}
					else {
						me._circlenodestart.style.visibility=(Number(me._circlenodestart.style.opacity)>0||!me._circlenodestart.style.opacity)?'inherit':'hidden';
						me._circlenodestart.ggVisible=true;
					}
				}
			}
			this._circlenodestart.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._circlenodestart);
			this.ggUse3d=true;
			this.gg3dDistance=800;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._circlenodestart.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node_Underwater') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node_Underwater";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 65px;';
			hs+='position : absolute;';
			hs+='top : 101px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				ggSkinVars['MasterQtextBox'] = Number("0");
				ggSkinVars['VideoVisible'] = false;
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._circlenodeunderwater=document.createElement('div');
			this._circlenodeunderwater__img=document.createElement('img');
			this._circlenodeunderwater__img.className='ggskin ggskin_image';
			this._circlenodeunderwater__img.setAttribute('src',basePath + 'images/circlenodeunderwater.png');
			this._circlenodeunderwater__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._circlenodeunderwater__img.className='ggskin ggskin_image';
			this._circlenodeunderwater__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._circlenodeunderwater__img);
			this._circlenodeunderwater.appendChild(this._circlenodeunderwater__img);
			this._circlenodeunderwater.ggId="circlenodeUnderwater";
			this._circlenodeunderwater.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._circlenodeunderwater.ggVisible=true;
			this._circlenodeunderwater.className='ggskin ggskin_image ';
			this._circlenodeunderwater.ggType='image';
			hs ='';
			hs+='height : 119px;';
			hs+='left : -56px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 115px;';
			hs+='pointer-events:auto;';
			this._circlenodeunderwater.setAttribute('style',hs);
			this._circlenodeunderwater.style[domTransform + 'Origin']='50% 50%';
			me._circlenodeunderwater.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._circlenodeunderwater.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._circlenodeunderwater.ggCurrentLogicStateVisible = -1;
			this._circlenodeunderwater.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['viewmarker'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else if (
					(ggSkinVars['viewmarker'] == false)
				)
				{
					newLogicStateVisible = 1;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._circlenodeunderwater.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._circlenodeunderwater.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._circlenodeunderwater.style[domTransition]='';
					if (me._circlenodeunderwater.ggCurrentLogicStateVisible == 0) {
						me._circlenodeunderwater.style.visibility=(Number(me._circlenodeunderwater.style.opacity)>0||!me._circlenodeunderwater.style.opacity)?'inherit':'hidden';
						me._circlenodeunderwater.ggVisible=true;
					}
					else if (me._circlenodeunderwater.ggCurrentLogicStateVisible == 1) {
						me._circlenodeunderwater.style.visibility="hidden";
						me._circlenodeunderwater.ggVisible=false;
					}
					else {
						me._circlenodeunderwater.style.visibility=(Number(me._circlenodeunderwater.style.opacity)>0||!me._circlenodeunderwater.style.opacity)?'inherit':'hidden';
						me._circlenodeunderwater.ggVisible=true;
					}
				}
			}
			this._circlenodeunderwater.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._circlenodeunderwater);
			this.ggUse3d=true;
			this.gg3dDistance=800;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._circlenodeunderwater.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="htScientist";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 82px;';
			hs+='position : absolute;';
			hs+='top : 310px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:none;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._scientist_text=document.createElement('div');
			this._scientist_text__text=document.createElement('div');
			this._scientist_text.className='ggskin ggskin_textdiv';
			this._scientist_text.ggTextDiv=this._scientist_text__text;
			this._scientist_text.ggId="Scientist text";
			this._scientist_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._scientist_text.ggVisible=true;
			this._scientist_text.className='ggskin ggskin_text ';
			this._scientist_text.ggType='text';
			hs ='';
			hs+='height : 52px;';
			hs+='left : -51px;';
			hs+='opacity : 0.59999;';
			hs+='position : absolute;';
			hs+='top : 13px;';
			hs+='visibility : inherit;';
			hs+='width : 103px;';
			hs+='pointer-events:none;';
			this._scientist_text.setAttribute('style',hs);
			this._scientist_text.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='pointer-events: none;';
			hs+='background: #000000;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 7px;';
			hs+=cssPrefix + 'border-radius: 7px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 3px 4px 3px 4px;';
			hs+='overflow: hidden;';
			this._scientist_text__text.setAttribute('style',hs);
			this._scientist_text__text.innerHTML=me.hotspot.description;
			this._scientist_text.appendChild(this._scientist_text__text);
			me._scientist_text.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._scientist_text.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._scientist_text.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((105-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._scientist_text);
			this.ggUse3d=true;
			this.gg3dDistance=900;
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};