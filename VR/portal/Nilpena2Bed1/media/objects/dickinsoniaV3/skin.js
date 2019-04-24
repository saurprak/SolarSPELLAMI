// Garden Gnome Software - Skin
// Object2VR 3.1.2/10759
// Filename: vftObjectSolarSpell.ggsk
// Generated Sat Feb 18 12:33:57 2017

function object2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
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
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
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
		var r=new Array();
		var stack=new Array();
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
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._image_1=document.createElement('div');
		this._image_1.ggId="Image 1";
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image';
		this._image_1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 377px;';
		hs+='top:  3px;';
		hs+='width: 41px;';
		hs+='height: 37px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._image_1.setAttribute('style',hs);
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.onmouseout=function () {
			me.elementMouseDown['image_1']=false;
		}
		this._image_1.onmousedown=function () {
			me.elementMouseDown['image_1']=true;
		}
		this._image_1.onmouseup=function () {
			me.elementMouseDown['image_1']=false;
		}
		this._image_1.ontouchend=function () {
			me.elementMouseDown['image_1']=false;
		}
		this.divSkin.appendChild(this._image_1);
		this._image_2=document.createElement('div');
		this._image_2.ggId="Image 2";
		this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_2.ggVisible=true;
		this._image_2.className='ggskin ggskin_image';
		this._image_2.ggType='image';
		hs ='position:absolute;';
		hs+='left: 332px;';
		hs+='top:  3px;';
		hs+='width: 41px;';
		hs+='height: 37px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._image_2.setAttribute('style',hs);
		this._image_2__img=document.createElement('img');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
		this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_2__img);
		this._image_2.appendChild(this._image_2__img);
		this._image_2.onmouseout=function () {
			me.elementMouseDown['image_2']=false;
		}
		this._image_2.onmousedown=function () {
			me.elementMouseDown['image_2']=true;
		}
		this._image_2.onmouseup=function () {
			me.elementMouseDown['image_2']=false;
		}
		this._image_2.ontouchend=function () {
			me.elementMouseDown['image_2']=false;
		}
		this.divSkin.appendChild(this._image_2);
		this._directions=document.createElement('div');
		this._directions__text=document.createElement('div');
		this._directions.className='ggskin ggskin_textdiv';
		this._directions.ggTextDiv=this._directions__text;
		this._directions.ggId="Directions";
		this._directions.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._directions.ggVisible=true;
		this._directions.className='ggskin ggskin_text';
		this._directions.ggType='text';
		this._directions.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-27 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 23px;';
		hs+='top:  -27px;';
		hs+='width: 414px;';
		hs+='height: 28px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		this._directions.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 414px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._directions__text.setAttribute('style',hs);
		this._directions.ggTextDiv.innerHTML="Click and drag the object to rotate";
		this._directions.appendChild(this._directions__text);
		this.divSkin.appendChild(this._directions);
		this._image_3=document.createElement('div');
		this._image_3.ggId="Image 3";
		this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._image_3.ggVisible=true;
		this._image_3.className='ggskin ggskin_image';
		this._image_3.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  110px;';
		hs+='width: 41px;';
		hs+='height: 37px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_3.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._image_3.setAttribute('style',hs);
		this._image_3__img=document.createElement('img');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
		this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_3__img);
		this._image_3.appendChild(this._image_3__img);
		this._image_3.onmouseout=function () {
			me.elementMouseDown['image_3']=false;
		}
		this._image_3.onmousedown=function () {
			me.elementMouseDown['image_3']=true;
		}
		this._image_3.onmouseup=function () {
			me.elementMouseDown['image_3']=false;
		}
		this._image_3.ontouchend=function () {
			me.elementMouseDown['image_3']=false;
		}
		this.divSkin.appendChild(this._image_3);
		this._image_4=document.createElement('div');
		this._image_4.ggId="Image 4";
		this._image_4.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._image_4.ggVisible=true;
		this._image_4.className='ggskin ggskin_image';
		this._image_4.ggType='image';
		hs ='position:absolute;';
		hs+='left: 378px;';
		hs+='top:  110px;';
		hs+='width: 41px;';
		hs+='height: 37px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_4.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._image_4.setAttribute('style',hs);
		this._image_4__img=document.createElement('img');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img.setAttribute('src',basePath + 'images/image_4.png');
		this._image_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_4__img);
		this._image_4.appendChild(this._image_4__img);
		this._image_4.onmouseout=function () {
			me.elementMouseDown['image_4']=false;
		}
		this._image_4.onmousedown=function () {
			me.elementMouseDown['image_4']=true;
		}
		this._image_4.onmouseup=function () {
			me.elementMouseDown['image_4']=false;
		}
		this._image_4.ontouchend=function () {
			me.elementMouseDown['image_4']=false;
		}
		this.divSkin.appendChild(this._image_4);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
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
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
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
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['image_1']) {
			me.player.changeFovLog(-0.5,true);
		}
		if (me.elementMouseDown['image_2']) {
			me.player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['image_3']) {
			me.player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['image_4']) {
			me.player.changePanLog(-0.5,true);
		}
	};
	this.addSkin();
};