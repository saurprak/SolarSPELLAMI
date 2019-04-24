// Garden Gnome Software - Skin
// Pano2VR 5.1 beta2/15706
// Filename: mobileNilpenaVRnoA.ggsk
// Generated Thu Feb 23 14:36:05 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['ht_ani'] = false;
	ggSkinVars['gotosinglevar'] = false;
	ggSkinVars['MasterTimerVar'] = 0;
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
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._crosshair=document.createElement('div');
		this._crosshair__img=document.createElement('img');
		this._crosshair__img.className='ggskin ggskin_image';
		this._crosshair__img.setAttribute('src',basePath + 'images/crosshair.png');
		this._crosshair__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._crosshair__img.className='ggskin ggskin_image';
		this._crosshair__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._crosshair__img);
		this._crosshair.appendChild(this._crosshair__img);
		this._crosshair.ggId="crosshair";
		this._crosshair.ggLeft=-2;
		this._crosshair.ggTop=-2;
		this._crosshair.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._crosshair.ggVisible=true;
		this._crosshair.className='ggskin ggskin_image ';
		this._crosshair.ggType='image';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._crosshair.setAttribute('style',hs);
		this._crosshair.style[domTransform + 'Origin']='50% 50%';
		me._crosshair.ggIsActive=function() {
			return false;
		}
		me._crosshair.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._crosshair.ggUpdatePosition=function (useTransition) {
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
		this.divSkin.appendChild(this._crosshair);
		this._mastertimer=document.createElement('div');
		this._mastertimer.ggTimestamp=this.ggCurrentTime;
		this._mastertimer.ggLastIsActive=true;
		this._mastertimer.ggTimeout=3600000;
		this._mastertimer.ggId="MasterTimer";
		this._mastertimer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mastertimer.ggVisible=true;
		this._mastertimer.className='ggskin ggskin_timer ';
		this._mastertimer.ggType='timer';
		hs ='';
		hs+='height : 43px;';
		hs+='left : 723px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		this._mastertimer.setAttribute('style',hs);
		this._mastertimer.style[domTransform + 'Origin']='50% 50%';
		me._mastertimer.ggIsActive=function() {
			return (me._mastertimer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._mastertimer.ggTimestamp) / me._mastertimer.ggTimeout) % 2 == 0));
		}
		me._mastertimer.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._mastertimer.ggActivate=function () {
			ggSkinVars['MasterTimerVar'] = ggSkinVars['MasterTimerVar'] + Number("1");
		}
		this._mastertimer.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._mastertimer);
		this._nilpenaendcardboard=document.createElement('div');
		this._nilpenaendcardboard.ggMarkerNodeId='{node7}';
		nodeMarker.push(this._nilpenaendcardboard);
		this._nilpenaendcardboard.ggId="NilpenaEndCardboard";
		this._nilpenaendcardboard.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._nilpenaendcardboard.ggVisible=true;
		this._nilpenaendcardboard.className='ggskin ggskin_mark ';
		this._nilpenaendcardboard.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 841px;';
		hs+='position : absolute;';
		hs+='top : 164px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._nilpenaendcardboard.setAttribute('style',hs);
		this._nilpenaendcardboard.style[domTransform + 'Origin']='50% 50%';
		me._nilpenaendcardboard.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._nilpenaendcardboard.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._nilpenaendcardboard.onclick=function (e) {
			me.player.openNext('{node7}');
		}
		this._nilpenaendcardboard.ggActivate=function () {
			ggSkinVars['MasterTimerVar'] = Number("1");
		}
		this._nilpenaendcardboard.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._nilpenaendcardboard);
		this._parvbed_nodemarker=document.createElement('div');
		this._parvbed_nodemarker.ggMarkerNodeId='{node2}';
		nodeMarker.push(this._parvbed_nodemarker);
		this._parvbed_nodemarker.ggId="ParvBed_NodeMarker";
		this._parvbed_nodemarker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._parvbed_nodemarker.ggVisible=true;
		this._parvbed_nodemarker.className='ggskin ggskin_mark ';
		this._parvbed_nodemarker.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 841px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._parvbed_nodemarker.setAttribute('style',hs);
		this._parvbed_nodemarker.style[domTransform + 'Origin']='50% 50%';
		me._parvbed_nodemarker.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._parvbed_nodemarker.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._parvbed_nodemarker.onclick=function (e) {
			me.player.openNext('{node2}');
		}
		this._parvbed_nodemarker.ggActivate=function () {
			ggSkinVars['MasterTimerVar'] = Number("1");
		}
		this._parvbed_nodemarker.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._parvbed_nodemarker);
		this._underwater_nodemarker=document.createElement('div');
		this._underwater_nodemarker.ggMarkerNodeId='{node5}';
		nodeMarker.push(this._underwater_nodemarker);
		this._underwater_nodemarker.ggId="Underwater_NodeMarker";
		this._underwater_nodemarker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._underwater_nodemarker.ggVisible=true;
		this._underwater_nodemarker.className='ggskin ggskin_mark ';
		this._underwater_nodemarker.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 842px;';
		hs+='position : absolute;';
		hs+='top : 69px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._underwater_nodemarker.setAttribute('style',hs);
		this._underwater_nodemarker.style[domTransform + 'Origin']='50% 50%';
		me._underwater_nodemarker.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._underwater_nodemarker.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._underwater_nodemarker.onclick=function (e) {
			me.player.openNext('{node5}');
		}
		this._underwater_nodemarker.ggActivate=function () {
			ggSkinVars['MasterTimerVar'] = Number("1");
		}
		this._underwater_nodemarker.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._underwater_nodemarker);
		this._firstbed_nodemarker=document.createElement('div');
		this._firstbed_nodemarker.ggMarkerNodeId='{node6}';
		nodeMarker.push(this._firstbed_nodemarker);
		this._firstbed_nodemarker.ggId="FirstBed_NodeMarker";
		this._firstbed_nodemarker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._firstbed_nodemarker.ggVisible=true;
		this._firstbed_nodemarker.className='ggskin ggskin_mark ';
		this._firstbed_nodemarker.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 841px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._firstbed_nodemarker.setAttribute('style',hs);
		this._firstbed_nodemarker.style[domTransform + 'Origin']='50% 50%';
		me._firstbed_nodemarker.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._firstbed_nodemarker.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._firstbed_nodemarker.onclick=function (e) {
			me.player.openNext('{node6}');
		}
		this._firstbed_nodemarker.ggActivate=function () {
			ggSkinVars['MasterTimerVar'] = Number("1");
		}
		this._firstbed_nodemarker.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._firstbed_nodemarker);
		this._no_cardboard_to_audio_version=document.createElement('div');
		this._no_cardboard_to_audio_version__img=document.createElement('img');
		this._no_cardboard_to_audio_version__img.className='ggskin ggskin_image';
		this._no_cardboard_to_audio_version__img.setAttribute('src',basePath + 'images/no_cardboard_to_audio_version.png');
		this._no_cardboard_to_audio_version__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._no_cardboard_to_audio_version__img.className='ggskin ggskin_image';
		this._no_cardboard_to_audio_version__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._no_cardboard_to_audio_version__img);
		this._no_cardboard_to_audio_version.appendChild(this._no_cardboard_to_audio_version__img);
		this._no_cardboard_to_audio_version.ggId="No Cardboard_to_Audio_version";
		this._no_cardboard_to_audio_version.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6 };
		this._no_cardboard_to_audio_version.ggVisible=true;
		this._no_cardboard_to_audio_version.className='ggskin ggskin_image ';
		this._no_cardboard_to_audio_version.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 66px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:auto;';
		this._no_cardboard_to_audio_version.setAttribute('style',hs);
		this._no_cardboard_to_audio_version.style[domTransform + 'Origin']='0% 0%';
		this._no_cardboard_to_audio_version.style[domTransform]=parameterToTransform(this._no_cardboard_to_audio_version.ggParameter);
		me._no_cardboard_to_audio_version.ggIsActive=function() {
			return false;
		}
		me._no_cardboard_to_audio_version.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._no_cardboard_to_audio_version.onmouseout=function (e) {
			me.elementMouseDown['no_cardboard_to_audio_version']=false;
		}
		this._no_cardboard_to_audio_version.onmousedown=function (e) {
			me.elementMouseDown['no_cardboard_to_audio_version']=true;
		}
		this._no_cardboard_to_audio_version.onmouseup=function (e) {
			me.elementMouseDown['no_cardboard_to_audio_version']=false;
		}
		this._no_cardboard_to_audio_version.ontouchend=function (e) {
			me.elementMouseDown['no_cardboard_to_audio_version']=false;
		}
		this._no_cardboard_to_audio_version.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._no_cardboard_to_audio_version);
		this._loading_bar=document.createElement('div');
		this._loading_bar.ggId="Loading Bar";
		this._loading_bar.ggLeft=-185;
		this._loading_bar.ggTop=-60;
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
		hs+='left : -185px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 389px;';
		hs+='pointer-events:auto;';
		this._loading_bar.setAttribute('style',hs);
		this._loading_bar.style[domTransform + 'Origin']='50% 50%';
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
		hs+='height : 2px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : inherit;';
		hs+='width : 370px;';
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
		this._nilpenaendcardboard.ggMarkerNormal=null;
		this._nilpenaendcardboard.ggMarkerActive=null;
		this._parvbed_nodemarker.ggMarkerNormal=null;
		this._parvbed_nodemarker.ggMarkerActive=null;
		this._underwater_nodemarker.ggMarkerNormal=null;
		this._underwater_nodemarker.ggMarkerActive=null;
		this._firstbed_nodemarker.ggMarkerNormal=null;
		this._firstbed_nodemarker.ggMarkerActive=null;
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._mastertimer.ggTimestamp=me.ggCurrentTime;
			me._mastertimer.ggTimeout=1000;
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
		if (me._mastertimer.ggLastIsActive!=me._mastertimer.ggIsActive()) {
			me._mastertimer.ggLastIsActive=me._mastertimer.ggIsActive();
			if (me._mastertimer.ggLastIsActive) {
				ggSkinVars['MasterTimerVar'] = ggSkinVars['MasterTimerVar'] + Number("1");
			} else {
			}
		}
		if (me.elementMouseDown['no_cardboard_to_audio_version']) {
			me.player.openUrl("..\/Nilpena2Bed1\/index.html","_self");
		}
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
		
		if (hotspot.skinid=='ht_nodeO') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_nodeO";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 147px;';
			hs+='position : absolute;';
			hs+='top : 255px;';
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
			this._ht_node_imageo=document.createElement('div');
			this._ht_node_imageo__img=document.createElement('img');
			this._ht_node_imageo__img.className='ggskin ggskin_svg';
			this._ht_node_imageo__img.setAttribute('src',basePath + 'images/ht_node_imageo.png');
			this._ht_node_imageo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_node_imageo__img['ondragstart']=function() { return false; };
			this._ht_node_imageo.appendChild(this._ht_node_imageo__img);
			this._ht_node_imageo.ggId="ht_node_imageO";
			this._ht_node_imageo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_node_imageo.ggVisible=true;
			this._ht_node_imageo.className='ggskin ggskin_svg ';
			this._ht_node_imageo.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_node_imageo.setAttribute('style',hs);
			this._ht_node_imageo.style[domTransform + 'Origin']='50% 50%';
			me._ht_node_imageo.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_node_imageo.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._ht_node_imageo.ggCurrentLogicStateScaling = -1;
			this._ht_node_imageo.ggUpdateConditionTimer=function () {
				var newLogicStateScaling;
				if (
					(ggSkinVars['ht_ani'] == true)
				)
				{
					newLogicStateScaling = 0;
				}
				else {
					newLogicStateScaling = -1;
				}
				if (me._ht_node_imageo.ggCurrentLogicStateScaling != newLogicStateScaling) {
					me._ht_node_imageo.ggCurrentLogicStateScaling = newLogicStateScaling;
					me._ht_node_imageo.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
					if (me._ht_node_imageo.ggCurrentLogicStateScaling == 0) {
						me._ht_node_imageo.ggParameter.sx = 1.1;
						me._ht_node_imageo.ggParameter.sy = 1.1;
						me._ht_node_imageo.style[domTransform]=parameterToTransform(me._ht_node_imageo.ggParameter);
					}
					else {
						me._ht_node_imageo.ggParameter.sx = 1;
						me._ht_node_imageo.ggParameter.sy = 1;
						me._ht_node_imageo.style[domTransform]=parameterToTransform(me._ht_node_imageo.ggParameter);
					}
				}
			}
			this._ht_node_imageo.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_node_imageo);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_node_imageo.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='hsDirections') {
			this.__div=document.createElement('div');
			this.__div.ggId="hsDirections";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 443px;';
			hs+='position : absolute;';
			hs+='top : 181px;';
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
			this._placephoneimage=document.createElement('div');
			this._placephoneimage.ggId="PlacePhoneImage";
			this._placephoneimage.ggLeft=-162;
			this._placephoneimage.ggTop=-86;
			this._placephoneimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._placephoneimage.ggVisible=true;
			this._placephoneimage.className='ggskin ggskin_container ';
			this._placephoneimage.ggType='container';
			hs ='';
			hs+='height : 188px;';
			hs+='left : -162px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 338px;';
			hs+='pointer-events:none;';
			this._placephoneimage.setAttribute('style',hs);
			this._placephoneimage.style[domTransform + 'Origin']='50% 50%';
			me._placephoneimage.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._placephoneimage.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._placephoneimage.ggCurrentLogicStateVisible = -1;
			this._placephoneimage.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['removeInstructions'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._placephoneimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._placephoneimage.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._placephoneimage.style[domTransition]='';
					if (me._placephoneimage.ggCurrentLogicStateVisible == 0) {
						me._placephoneimage.style.visibility="hidden";
						me._placephoneimage.ggVisible=false;
					}
					else {
						me._placephoneimage.style.visibility=(Number(me._placephoneimage.style.opacity)>0||!me._placephoneimage.style.opacity)?'inherit':'hidden';
						me._placephoneimage.ggVisible=true;
					}
				}
			}
			this._placephoneimage.ggUpdatePosition=function (useTransition) {
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
			this._placephonewhitebox=document.createElement('div');
			this._placephonewhitebox.ggId="Placephonewhitebox";
			this._placephonewhitebox.ggLeft=-169;
			this._placephonewhitebox.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._placephonewhitebox.ggVisible=true;
			this._placephonewhitebox.className='ggskin ggskin_rectangle ';
			this._placephonewhitebox.ggType='rectangle';
			hs ='';
			hs+='background : #ffffff;';
			hs+='border : 1px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 224px;';
			hs+='left : -169px;';
			hs+='position : absolute;';
			hs+='top : -3px;';
			hs+='visibility : inherit;';
			hs+='width : 337px;';
			hs+='pointer-events:auto;';
			this._placephonewhitebox.setAttribute('style',hs);
			this._placephonewhitebox.style[domTransform + 'Origin']='50% 50%';
			me._placephonewhitebox.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._placephonewhitebox.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._placephonewhitebox.ggUpdatePosition=function (useTransition) {
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
			this._placephoneimage.appendChild(this._placephonewhitebox);
			this._placephoneimage0=document.createElement('div');
			this._placephoneimage0__img=document.createElement('img');
			this._placephoneimage0__img.className='ggskin ggskin_image';
			this._placephoneimage0__img.setAttribute('src',basePath + 'images/placephoneimage0.png');
			this._placephoneimage0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._placephoneimage0__img.className='ggskin ggskin_image';
			this._placephoneimage0__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._placephoneimage0__img);
			this._placephoneimage0.appendChild(this._placephoneimage0__img);
			this._placephoneimage0.ggId="Placephoneimage";
			this._placephoneimage0.ggLeft=-96;
			this._placephoneimage0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._placephoneimage0.ggVisible=true;
			this._placephoneimage0.className='ggskin ggskin_image ';
			this._placephoneimage0.ggType='image';
			hs ='';
			hs+='height : 160px;';
			hs+='left : -96px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 185px;';
			hs+='pointer-events:auto;';
			this._placephoneimage0.setAttribute('style',hs);
			this._placephoneimage0.style[domTransform + 'Origin']='50% 50%';
			me._placephoneimage0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._placephoneimage0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._placephoneimage0.ggUpdatePosition=function (useTransition) {
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
			this._placephoneimage.appendChild(this._placephoneimage0);
			this._placephone=document.createElement('div');
			this._placephone__text=document.createElement('div');
			this._placephone.className='ggskin ggskin_textdiv';
			this._placephone.ggTextDiv=this._placephone__text;
			this._placephone.ggId="placephone";
			this._placephone.ggLeft=-163;
			this._placephone.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._placephone.ggVisible=true;
			this._placephone.className='ggskin ggskin_text ';
			this._placephone.ggType='text';
			hs ='';
			hs+='height : 36px;';
			hs+='left : -163px;';
			hs+='position : absolute;';
			hs+='top : 160px;';
			hs+='visibility : inherit;';
			hs+='width : 325px;';
			hs+='pointer-events:auto;';
			this._placephone.setAttribute('style',hs);
			this._placephone.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 325px;';
			hs+='height: 36px;';
			hs+='border: 0px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._placephone__text.setAttribute('style',hs);
			this._placephone__text.innerHTML="Once your phone is in the headset, look up to \"Begin\"";
			this._placephone.appendChild(this._placephone__text);
			me._placephone.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._placephone.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._placephone.ggUpdatePosition=function (useTransition) {
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
			this._placephoneimage.appendChild(this._placephone);
			this.__div.appendChild(this._placephoneimage);
			this.ggUse3d=true;
			this.gg3dDistance=600;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._placephoneimage.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='EndDirections') {
			this.__div=document.createElement('div');
			this.__div.ggId="EndDirections";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 455px;';
			hs+='position : absolute;';
			hs+='top : 170px;';
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
			me.__div.ggCurrentLogicStateVisible = -1;
			this.__div.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['MasterTimerVar'] >= 1)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me.__div.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me.__div.ggCurrentLogicStateVisible = newLogicStateVisible;
					me.__div.style[domTransition]='';
					if (me.__div.ggCurrentLogicStateVisible == 0) {
						me.__div.style.visibility=(Number(me.__div.style.opacity)>0||!me.__div.style.opacity)?'inherit':'hidden';
						me.__div.ggVisible=true;
					}
					else {
						me.__div.style.visibility=(Number(me.__div.style.opacity)>0||!me.__div.style.opacity)?'inherit':'hidden';
						me.__div.ggVisible=true;
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._removecontainer=document.createElement('div');
			this._removecontainer.ggId="Removecontainer";
			this._removecontainer.ggLeft=-173;
			this._removecontainer.ggTop=-79;
			this._removecontainer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._removecontainer.ggVisible=true;
			this._removecontainer.className='ggskin ggskin_container ';
			this._removecontainer.ggType='container';
			hs ='';
			hs+='height : 188px;';
			hs+='left : -173px;';
			hs+='position : absolute;';
			hs+='top : -79px;';
			hs+='visibility : inherit;';
			hs+='width : 338px;';
			hs+='pointer-events:none;';
			this._removecontainer.setAttribute('style',hs);
			this._removecontainer.style[domTransform + 'Origin']='50% 50%';
			me._removecontainer.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._removecontainer.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._removecontainer.ggCurrentLogicStateVisible = -1;
			this._removecontainer.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['gotosinglevar'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._removecontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._removecontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._removecontainer.style[domTransition]='';
					if (me._removecontainer.ggCurrentLogicStateVisible == 0) {
						me._removecontainer.style.visibility=(Number(me._removecontainer.style.opacity)>0||!me._removecontainer.style.opacity)?'inherit':'hidden';
						me._removecontainer.ggVisible=true;
					}
					else {
						me._removecontainer.style.visibility=(Number(me._removecontainer.style.opacity)>0||!me._removecontainer.style.opacity)?'inherit':'hidden';
						me._removecontainer.ggVisible=true;
					}
				}
			}
			this._removecontainer.ggUpdatePosition=function (useTransition) {
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
			this._placephonewhiteboxend=document.createElement('div');
			this._placephonewhiteboxend.ggId="Placephonewhiteboxend";
			this._placephonewhiteboxend.ggLeft=-170;
			this._placephonewhiteboxend.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._placephonewhiteboxend.ggVisible=true;
			this._placephonewhiteboxend.className='ggskin ggskin_rectangle ';
			this._placephonewhiteboxend.ggType='rectangle';
			hs ='';
			hs+='background : #ffffff;';
			hs+='border : 1px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 224px;';
			hs+='left : -170px;';
			hs+='position : absolute;';
			hs+='top : 1px;';
			hs+='visibility : inherit;';
			hs+='width : 337px;';
			hs+='pointer-events:auto;';
			this._placephonewhiteboxend.setAttribute('style',hs);
			this._placephonewhiteboxend.style[domTransform + 'Origin']='50% 50%';
			me._placephonewhiteboxend.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._placephonewhiteboxend.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._placephonewhiteboxend.ggUpdatePosition=function (useTransition) {
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
			this._removecontainer.appendChild(this._placephonewhiteboxend);
			this._external_1=document.createElement('div');
			this._external_1__img=document.createElement('img');
			this._external_1__img.className='ggskin ggskin_external';
			this._external_1__img.onload=function() {me._external_1.ggUpdatePosition();}
			this._external_1__img.setAttribute('src',basePath + 'media/RemovePhoneani.gif');
			this._external_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._external_1__img);
			hs ='';
			this._external_1.appendChild(this._external_1__img);
			this._external_1.ggId="External 1";
			this._external_1.ggLeft=-155;
			this._external_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._external_1.ggVisible=true;
			this._external_1.className='ggskin ggskin_external ';
			this._external_1.ggType='external';
			hs ='';
			hs+='background : #ffffff;';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 160px;';
			hs+='left : -155px;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 314px;';
			hs+='pointer-events:auto;';
			this._external_1.setAttribute('style',hs);
			this._external_1.style[domTransform + 'Origin']='50% 50%';
			me._external_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._external_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._external_1.ggUpdatePosition=function (useTransition) {
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
				var parentWidth = me._external_1.clientWidth;
				var parentHeight = me._external_1.clientHeight;
				var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
				var aspectRatioImg = me._external_1__img.naturalWidth / me._external_1__img.naturalHeight;
				if (me._external_1__img.naturalWidth < parentWidth) parentWidth = me._external_1__img.naturalWidth;
				if (me._external_1__img.naturalHeight < parentHeight) parentHeight = me._external_1__img.naturalHeight;
				var currentWidth = me._external_1__img.naturalWidth;
				var currentHeight = me._external_1__img.naturalHeight;
				currentWidth = parentWidth; currentHeight = parentHeight;
				me._external_1__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px; height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
			}
			this._removecontainer.appendChild(this._external_1);
			this._text_to_remove=document.createElement('div');
			this._text_to_remove__text=document.createElement('div');
			this._text_to_remove.className='ggskin ggskin_textdiv';
			this._text_to_remove.ggTextDiv=this._text_to_remove__text;
			this._text_to_remove.ggId="Text to remove";
			this._text_to_remove.ggLeft=-161;
			this._text_to_remove.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_to_remove.ggVisible=true;
			this._text_to_remove.className='ggskin ggskin_text ';
			this._text_to_remove.ggType='text';
			hs ='';
			hs+='height : 51px;';
			hs+='left : -161px;';
			hs+='position : absolute;';
			hs+='top : 170px;';
			hs+='visibility : inherit;';
			hs+='width : 287px;';
			hs+='pointer-events:auto;';
			this._text_to_remove.setAttribute('style',hs);
			this._text_to_remove.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 287px;';
			hs+='height: 51px;';
			hs+='border: 0px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: left;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_to_remove__text.setAttribute('style',hs);
			this._text_to_remove__text.innerHTML="Remove phone from headset and <br\/>click the \"no headset\" icon <br\/>in the lower left corner of the screen to continue";
			this._text_to_remove.appendChild(this._text_to_remove__text);
			me._text_to_remove.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._text_to_remove.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._text_to_remove.ggUpdatePosition=function (useTransition) {
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
			this._removecontainer.appendChild(this._text_to_remove);
			this._no_cardboard_small=document.createElement('div');
			this._no_cardboard_small__img=document.createElement('img');
			this._no_cardboard_small__img.className='ggskin ggskin_image';
			this._no_cardboard_small__img.setAttribute('src',basePath + 'images/no_cardboard_small.png');
			this._no_cardboard_small__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._no_cardboard_small__img.className='ggskin ggskin_image';
			this._no_cardboard_small__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._no_cardboard_small__img);
			this._no_cardboard_small.appendChild(this._no_cardboard_small__img);
			this._no_cardboard_small.ggId="No Cardboard small";
			this._no_cardboard_small.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._no_cardboard_small.ggVisible=true;
			this._no_cardboard_small.className='ggskin ggskin_image ';
			this._no_cardboard_small.ggType='image';
			hs ='';
			hs+='height : 42px;';
			hs+='left : 271px;';
			hs+='position : absolute;';
			hs+='top : 172px;';
			hs+='visibility : inherit;';
			hs+='width : 42px;';
			hs+='pointer-events:auto;';
			this._no_cardboard_small.setAttribute('style',hs);
			this._no_cardboard_small.style[domTransform + 'Origin']='50% 50%';
			me._no_cardboard_small.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._no_cardboard_small.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._no_cardboard_small.ggUpdatePosition=function (useTransition) {
			}
			this._removecontainer.appendChild(this._no_cardboard_small);
			this.__div.appendChild(this._removecontainer);
			this.ggUse3d=true;
			this.gg3dDistance=600;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__div.ggUpdateConditionTimer();
				me._removecontainer.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='hsfossil') {
			this.__div=document.createElement('div');
			this.__div.ggId="hsfossil";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 764px;';
			hs+='position : absolute;';
			hs+='top : 372px;';
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
			this._underwater_fossil_names=document.createElement('div');
			this._underwater_fossil_names__text=document.createElement('div');
			this._underwater_fossil_names.className='ggskin ggskin_textdiv';
			this._underwater_fossil_names.ggTextDiv=this._underwater_fossil_names__text;
			this._underwater_fossil_names.ggId="underwater fossil names";
			this._underwater_fossil_names.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._underwater_fossil_names.ggVisible=true;
			this._underwater_fossil_names.className='ggskin ggskin_text ';
			this._underwater_fossil_names.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -66px;';
			hs+='opacity : 0.49999;';
			hs+='position : absolute;';
			hs+='top : -32px;';
			hs+='visibility : inherit;';
			hs+='width : 131px;';
			hs+='pointer-events:none;';
			this._underwater_fossil_names.setAttribute('style',hs);
			this._underwater_fossil_names.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='pointer-events: none;';
			hs+='background: #000000;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._underwater_fossil_names__text.setAttribute('style',hs);
			this._underwater_fossil_names__text.innerHTML=me.hotspot.title;
			this._underwater_fossil_names.appendChild(this._underwater_fossil_names__text);
			me._underwater_fossil_names.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._underwater_fossil_names.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._underwater_fossil_names.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((133-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._underwater_fossil_names);
			this.ggUse3d=true;
			this.gg3dDistance=500;
		} else
		if (hotspot.skinid=='hslinewave') {
			this.__div=document.createElement('div');
			this.__div.ggId="hslinewave";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 446px;';
			hs+='position : absolute;';
			hs+='top : 45px;';
			hs+='visibility : hidden;';
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
			me.__div.ggCurrentLogicStateVisible = -1;
			this.__div.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['MasterTimerVar'] >= 1)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me.__div.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me.__div.ggCurrentLogicStateVisible = newLogicStateVisible;
					me.__div.style[domTransition]='';
					if (me.__div.ggCurrentLogicStateVisible == 0) {
						me.__div.style.visibility=(Number(me.__div.style.opacity)>0||!me.__div.style.opacity)?'inherit':'hidden';
						me.__div.ggVisible=true;
					}
					else {
						me.__div.style.visibility="hidden";
						me.__div.ggVisible=false;
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._linewave_gif=document.createElement('div');
			this._linewave_gif__img=document.createElement('img');
			this._linewave_gif__img.className='ggskin ggskin_external';
			this._linewave_gif__img.onload=function() {me._linewave_gif.ggUpdatePosition();}
			this._linewave_gif__img.setAttribute('src',basePath + 'media/3linewave.gif');
			this._linewave_gif__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._linewave_gif__img);
			hs ='';
			this._linewave_gif.appendChild(this._linewave_gif__img);
			this._linewave_gif.ggId="linewave gif";
			this._linewave_gif.ggLeft=-130;
			this._linewave_gif.ggTop=2;
			this._linewave_gif.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._linewave_gif.ggVisible=true;
			this._linewave_gif.className='ggskin ggskin_external ';
			this._linewave_gif.ggType='external';
			hs ='';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 80px;';
			hs+='left : -130px;';
			hs+='opacity : 0.59999;';
			hs+='position : absolute;';
			hs+='top : 2px;';
			hs+='visibility : inherit;';
			hs+='width : 456px;';
			hs+='pointer-events:none;';
			this._linewave_gif.setAttribute('style',hs);
			this._linewave_gif.style[domTransform + 'Origin']='50% 50%';
			me._linewave_gif.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._linewave_gif.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._linewave_gif.ggUpdatePosition=function (useTransition) {
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
				var parentWidth = me._linewave_gif.clientWidth;
				var parentHeight = me._linewave_gif.clientHeight;
				var aspectRatioDiv = me._linewave_gif.clientWidth / me._linewave_gif.clientHeight;
				var aspectRatioImg = me._linewave_gif__img.naturalWidth / me._linewave_gif__img.naturalHeight;
				if (me._linewave_gif__img.naturalWidth < parentWidth) parentWidth = me._linewave_gif__img.naturalWidth;
				if (me._linewave_gif__img.naturalHeight < parentHeight) parentHeight = me._linewave_gif__img.naturalHeight;
				var currentWidth = me._linewave_gif__img.naturalWidth;
				var currentHeight = me._linewave_gif__img.naturalHeight;
				me._linewave_gif__img.setAttribute('style','position: absolute; left: 0px; top: 0px;-webkit-user-drag:none;pointer-events:none;');
			}
			this.__div.appendChild(this._linewave_gif);
			this.ggUse3d=true;
			this.gg3dDistance=900;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__div.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='hsWavyRippleText') {
			this.__div=document.createElement('div');
			this.__div.ggId="hsWavyRippleText";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 503px;';
			hs+='position : absolute;';
			hs+='top : 139px;';
			hs+='visibility : hidden;';
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
			me.__div.ggCurrentLogicStateVisible = -1;
			this.__div.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['MasterTimerVar'] >= 1)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me.__div.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me.__div.ggCurrentLogicStateVisible = newLogicStateVisible;
					me.__div.style[domTransition]='';
					if (me.__div.ggCurrentLogicStateVisible == 0) {
						me.__div.style.visibility=(Number(me.__div.style.opacity)>0||!me.__div.style.opacity)?'inherit':'hidden';
						me.__div.ggVisible=true;
					}
					else {
						me.__div.style.visibility="hidden";
						me.__div.ggVisible=false;
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._externalwavyripplemarks=document.createElement('div');
			this._externalwavyripplemarks__img=document.createElement('img');
			this._externalwavyripplemarks__img.className='ggskin ggskin_external';
			this._externalwavyripplemarks__img.onload=function() {me._externalwavyripplemarks.ggUpdatePosition();}
			this._externalwavyripplemarks__img.setAttribute('src',basePath + 'media/WavyRippleTextsmBlue.gif');
			this._externalwavyripplemarks__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._externalwavyripplemarks__img);
			hs ='';
			this._externalwavyripplemarks.appendChild(this._externalwavyripplemarks__img);
			this._externalwavyripplemarks.ggId="ExternalWavyRippleMarks";
			this._externalwavyripplemarks.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._externalwavyripplemarks.ggVisible=true;
			this._externalwavyripplemarks.className='ggskin ggskin_external ';
			this._externalwavyripplemarks.ggType='external';
			hs ='';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 86px;';
			hs+='left : -138px;';
			hs+='opacity : 0.79999;';
			hs+='position : absolute;';
			hs+='top : 6px;';
			hs+='visibility : inherit;';
			hs+='width : 282px;';
			hs+='pointer-events:none;';
			this._externalwavyripplemarks.setAttribute('style',hs);
			this._externalwavyripplemarks.style[domTransform + 'Origin']='50% 50%';
			me._externalwavyripplemarks.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._externalwavyripplemarks.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._externalwavyripplemarks.ggUpdatePosition=function (useTransition) {
				var parentWidth = me._externalwavyripplemarks.clientWidth;
				var parentHeight = me._externalwavyripplemarks.clientHeight;
				var aspectRatioDiv = me._externalwavyripplemarks.clientWidth / me._externalwavyripplemarks.clientHeight;
				var aspectRatioImg = me._externalwavyripplemarks__img.naturalWidth / me._externalwavyripplemarks__img.naturalHeight;
				if (me._externalwavyripplemarks__img.naturalWidth < parentWidth) parentWidth = me._externalwavyripplemarks__img.naturalWidth;
				if (me._externalwavyripplemarks__img.naturalHeight < parentHeight) parentHeight = me._externalwavyripplemarks__img.naturalHeight;
				var currentWidth = me._externalwavyripplemarks__img.naturalWidth;
				var currentHeight = me._externalwavyripplemarks__img.naturalHeight;
				me._externalwavyripplemarks__img.setAttribute('style','position: absolute; left: 0px; top: 0px;-webkit-user-drag:none;pointer-events:none;');
			}
			this.__div.appendChild(this._externalwavyripplemarks);
			this.ggUse3d=true;
			this.gg3dDistance=1100;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__div.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_endCardboard') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_endCardboard";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 277px;';
			hs+='position : absolute;';
			hs+='top : 386px;';
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
			this._end_cardboard=document.createElement('div');
			this._end_cardboard__img=document.createElement('img');
			this._end_cardboard__img.className='ggskin ggskin_image';
			this._end_cardboard__img.setAttribute('src',basePath + 'images/end_cardboard.png');
			this._end_cardboard__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._end_cardboard__img.className='ggskin ggskin_image';
			this._end_cardboard__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._end_cardboard__img);
			this._end_cardboard.appendChild(this._end_cardboard__img);
			this._end_cardboard.ggId="End cardboard";
			this._end_cardboard.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._end_cardboard.ggVisible=true;
			this._end_cardboard.className='ggskin ggskin_image ';
			this._end_cardboard.ggType='image';
			hs ='';
			hs+='height : 119px;';
			hs+='left : -57px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 115px;';
			hs+='pointer-events:auto;';
			this._end_cardboard.setAttribute('style',hs);
			this._end_cardboard.style[domTransform + 'Origin']='50% 50%';
			me._end_cardboard.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._end_cardboard.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._end_cardboard.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._end_cardboard);
			this.ggUse3d=true;
			this.gg3dDistance=800;
		} else
		if (hotspot.skinid=='ht_node_fromParvToStart') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node_fromParvToStart";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 171px;';
			hs+='position : absolute;';
			hs+='top : 346px;';
			hs+='visibility : hidden;';
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
			me.__div.ggCurrentLogicStateVisible = -1;
			this.__div.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['MasterTimerVar'] >= 1)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me.__div.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me.__div.ggCurrentLogicStateVisible = newLogicStateVisible;
					me.__div.style[domTransition]='';
					if (me.__div.ggCurrentLogicStateVisible == 0) {
						me.__div.style.visibility=(Number(me.__div.style.opacity)>0||!me.__div.style.opacity)?'inherit':'hidden';
						me.__div.ggVisible=true;
					}
					else {
						me.__div.style.visibility="hidden";
						me.__div.ggVisible=false;
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._circlenodestart0=document.createElement('div');
			this._circlenodestart0__img=document.createElement('img');
			this._circlenodestart0__img.className='ggskin ggskin_image';
			this._circlenodestart0__img.setAttribute('src',basePath + 'images/circlenodestart0.png');
			this._circlenodestart0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._circlenodestart0__img.className='ggskin ggskin_image';
			this._circlenodestart0__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._circlenodestart0__img);
			this._circlenodestart0.appendChild(this._circlenodestart0__img);
			this._circlenodestart0.ggId="circlenodestart";
			this._circlenodestart0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._circlenodestart0.ggVisible=true;
			this._circlenodestart0.className='ggskin ggskin_image ';
			this._circlenodestart0.ggType='image';
			hs ='';
			hs+='height : 119px;';
			hs+='left : -56px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 115px;';
			hs+='pointer-events:auto;';
			this._circlenodestart0.setAttribute('style',hs);
			this._circlenodestart0.style[domTransform + 'Origin']='50% 50%';
			me._circlenodestart0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._circlenodestart0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._circlenodestart0.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._circlenodestart0);
			this.ggUse3d=true;
			this.gg3dDistance=800;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__div.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node_Parv') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node_Parv";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 62px;';
			hs+='position : absolute;';
			hs+='top : 347px;';
			hs+='visibility : hidden;';
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
			me.__div.ggCurrentLogicStateVisible = -1;
			this.__div.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['MasterTimerVar'] >= 1)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me.__div.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me.__div.ggCurrentLogicStateVisible = newLogicStateVisible;
					me.__div.style[domTransition]='';
					if (me.__div.ggCurrentLogicStateVisible == 0) {
						me.__div.style.visibility=(Number(me.__div.style.opacity)>0||!me.__div.style.opacity)?'inherit':'hidden';
						me.__div.ggVisible=true;
					}
					else {
						me.__div.style.visibility="hidden";
						me.__div.ggVisible=false;
					}
				}
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
			this._circlenodeparv.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._circlenodeparv);
			this.ggUse3d=true;
			this.gg3dDistance=800;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__div.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node_start') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node_start";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 59px;';
			hs+='position : absolute;';
			hs+='top : 234px;';
			hs+='visibility : hidden;';
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
			me.__div.ggCurrentLogicStateVisible = -1;
			this.__div.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['MasterTimerVar'] >= 1)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me.__div.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me.__div.ggCurrentLogicStateVisible = newLogicStateVisible;
					me.__div.style[domTransition]='';
					if (me.__div.ggCurrentLogicStateVisible == 0) {
						me.__div.style.visibility=(Number(me.__div.style.opacity)>0||!me.__div.style.opacity)?'inherit':'hidden';
						me.__div.ggVisible=true;
					}
					else {
						me.__div.style.visibility="hidden";
						me.__div.ggVisible=false;
					}
				}
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
			this._circlenodestart.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._circlenodestart);
			this.ggUse3d=true;
			this.gg3dDistance=800;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__div.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node_Underwater') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node_Underwater";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 57px;';
			hs+='position : absolute;';
			hs+='top : 123px;';
			hs+='visibility : hidden;';
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
			me.__div.ggCurrentLogicStateVisible = -1;
			this.__div.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['MasterTimerVar'] >= 1)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me.__div.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me.__div.ggCurrentLogicStateVisible = newLogicStateVisible;
					me.__div.style[domTransition]='';
					if (me.__div.ggCurrentLogicStateVisible == 0) {
						me.__div.style.visibility=(Number(me.__div.style.opacity)>0||!me.__div.style.opacity)?'inherit':'hidden';
						me.__div.ggVisible=true;
					}
					else {
						me.__div.style.visibility="hidden";
						me.__div.ggVisible=false;
					}
				}
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
			this._circlenodeunderwater.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._circlenodeunderwater);
			this.ggUse3d=true;
			this.gg3dDistance=800;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__div.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 206px;';
			hs+='position : absolute;';
			hs+='top : 60px;';
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
			this._look_here_circle2=document.createElement('div');
			this._look_here_circle2__img=document.createElement('img');
			this._look_here_circle2__img.className='ggskin ggskin_image';
			this._look_here_circle2__img.setAttribute('src',basePath + 'images/look_here_circle2.png');
			this._look_here_circle2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._look_here_circle2__img.className='ggskin ggskin_image';
			this._look_here_circle2__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._look_here_circle2__img);
			this._look_here_circle2.appendChild(this._look_here_circle2__img);
			this._look_here_circle2.ggId="Look here circle2";
			this._look_here_circle2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._look_here_circle2.ggVisible=true;
			this._look_here_circle2.className='ggskin ggskin_image ';
			this._look_here_circle2.ggType='image';
			hs ='';
			hs+='height : 119px;';
			hs+='left : -56px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 115px;';
			hs+='pointer-events:auto;';
			this._look_here_circle2.setAttribute('style',hs);
			this._look_here_circle2.style[domTransform + 'Origin']='50% 50%';
			me._look_here_circle2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._look_here_circle2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._look_here_circle2.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._look_here_circle2);
			this.ggUse3d=true;
			this.gg3dDistance=800;
		} else
		if (hotspot.skinid=='hsshowfossilwCircle') {
			this.__div=document.createElement('div');
			this.__div.ggId="hsshowfossilwCircle";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 763px;';
			hs+='position : absolute;';
			hs+='top : 261px;';
			hs+='visibility : hidden;';
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
			me.__div.ggCurrentLogicStateVisible = -1;
			this.__div.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['MasterTimerVar'] >= 1)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me.__div.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me.__div.ggCurrentLogicStateVisible = newLogicStateVisible;
					me.__div.style[domTransition]='';
					if (me.__div.ggCurrentLogicStateVisible == 0) {
						me.__div.style.visibility=(Number(me.__div.style.opacity)>0||!me.__div.style.opacity)?'inherit':'hidden';
						me.__div.ggVisible=true;
					}
					else {
						me.__div.style.visibility="hidden";
						me.__div.ggVisible=false;
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._fossilcirclemarker=document.createElement('div');
			this._fossilcirclemarker__img=document.createElement('img');
			this._fossilcirclemarker__img.className='ggskin ggskin_image';
			this._fossilcirclemarker__img.setAttribute('src',basePath + 'images/fossilcirclemarker.png');
			this._fossilcirclemarker__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._fossilcirclemarker__img.className='ggskin ggskin_image';
			this._fossilcirclemarker__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._fossilcirclemarker__img);
			this._fossilcirclemarker.appendChild(this._fossilcirclemarker__img);
			this._fossilcirclemarker.ggId="Fossilcirclemarker";
			this._fossilcirclemarker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._fossilcirclemarker.ggVisible=true;
			this._fossilcirclemarker.className='ggskin ggskin_image ';
			this._fossilcirclemarker.ggType='image';
			hs ='';
			hs+='height : 75px;';
			hs+='left : -37px;';
			hs+='opacity : 0.89999;';
			hs+='position : absolute;';
			hs+='top : -36px;';
			hs+='visibility : inherit;';
			hs+='width : 75px;';
			hs+='pointer-events:auto;';
			this._fossilcirclemarker.setAttribute('style',hs);
			this._fossilcirclemarker.style[domTransform + 'Origin']='50% 50%';
			me._fossilcirclemarker.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._fossilcirclemarker.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._fossilcirclemarker.ggUpdatePosition=function (useTransition) {
			}
			this._fossilname=document.createElement('div');
			this._fossilname__text=document.createElement('div');
			this._fossilname.className='ggskin ggskin_textdiv';
			this._fossilname.ggTextDiv=this._fossilname__text;
			this._fossilname.ggId="Fossilname";
			this._fossilname.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._fossilname.ggVisible=true;
			this._fossilname.className='ggskin ggskin_text ';
			this._fossilname.ggType='text';
			hs ='';
			hs+='height : 18px;';
			hs+='left : -13px;';
			hs+='opacity : 0.89999;';
			hs+='position : absolute;';
			hs+='top : -14px;';
			hs+='visibility : inherit;';
			hs+='width : 96px;';
			hs+='pointer-events:none;';
			this._fossilname.setAttribute('style',hs);
			this._fossilname.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 96px;';
			hs+='height: 18px;';
			hs+='pointer-events: none;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 4px;';
			hs+=cssPrefix + 'border-radius: 4px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._fossilname__text.setAttribute('style',hs);
			this._fossilname__text.innerHTML="Fossil";
			this._fossilname.appendChild(this._fossilname__text);
			me._fossilname.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._fossilname.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._fossilname.ggUpdatePosition=function (useTransition) {
			}
			this._fossilcirclemarker.appendChild(this._fossilname);
			this.__div.appendChild(this._fossilcirclemarker);
			this.ggUse3d=true;
			this.gg3dDistance=600;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__div.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='hsPOIParv') {
			this.__div=document.createElement('div');
			this.__div.ggId="hsPOIParv";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 187px;';
			hs+='position : absolute;';
			hs+='top : 118px;';
			hs+='visibility : hidden;';
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
			me.__div.ggCurrentLogicStateVisible = -1;
			this.__div.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['MasterTimerVar'] >= 1)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me.__div.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me.__div.ggCurrentLogicStateVisible = newLogicStateVisible;
					me.__div.style[domTransition]='';
					if (me.__div.ggCurrentLogicStateVisible == 0) {
						me.__div.style.visibility=(Number(me.__div.style.opacity)>0||!me.__div.style.opacity)?'inherit':'hidden';
						me.__div.ggVisible=true;
					}
					else {
						me.__div.style.visibility="hidden";
						me.__div.ggVisible=false;
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._parpoi=document.createElement('div');
			this._parpoi__img=document.createElement('img');
			this._parpoi__img.className='ggskin ggskin_image';
			this._parpoi__img.setAttribute('src',basePath + 'images/parpoi.png');
			this._parpoi__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._parpoi__img.className='ggskin ggskin_image';
			this._parpoi__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._parpoi__img);
			this._parpoi.appendChild(this._parpoi__img);
			this._parpoi.ggId="ParPOI";
			this._parpoi.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._parpoi.ggVisible=true;
			this._parpoi.className='ggskin ggskin_image ';
			this._parpoi.ggType='image';
			hs ='';
			hs+='height : 227px;';
			hs+='left : -110px;';
			hs+='position : absolute;';
			hs+='top : -96px;';
			hs+='visibility : inherit;';
			hs+='width : 250px;';
			hs+='pointer-events:auto;';
			this._parpoi.setAttribute('style',hs);
			this._parpoi.style[domTransform + 'Origin']='50% 50%';
			me._parpoi.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._parpoi.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._parpoi.ggUpdatePosition=function (useTransition) {
			}
			this._fossilnameparv=document.createElement('div');
			this._fossilnameparv__text=document.createElement('div');
			this._fossilnameparv.className='ggskin ggskin_textdiv';
			this._fossilnameparv.ggTextDiv=this._fossilnameparv__text;
			this._fossilnameparv.ggId="FossilnameParv";
			this._fossilnameparv.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._fossilnameparv.ggVisible=true;
			this._fossilnameparv.className='ggskin ggskin_text ';
			this._fossilnameparv.ggType='text';
			hs ='';
			hs+='height : 18px;';
			hs+='left : 77px;';
			hs+='opacity : 0.89999;';
			hs+='position : absolute;';
			hs+='top : -12px;';
			hs+='visibility : inherit;';
			hs+='width : 96px;';
			hs+='pointer-events:none;';
			this._fossilnameparv.setAttribute('style',hs);
			this._fossilnameparv.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 96px;';
			hs+='height: 18px;';
			hs+='pointer-events: none;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 4px;';
			hs+=cssPrefix + 'border-radius: 4px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._fossilnameparv__text.setAttribute('style',hs);
			this._fossilnameparv__text.innerHTML="<i>Parvancorina<\/i>";
			this._fossilnameparv.appendChild(this._fossilnameparv__text);
			me._fossilnameparv.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._fossilnameparv.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._fossilnameparv.ggUpdatePosition=function (useTransition) {
			}
			this._parpoi.appendChild(this._fossilnameparv);
			this.__div.appendChild(this._parpoi);
			this.ggUse3d=true;
			this.gg3dDistance=500;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__div.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='hsPOIEoa') {
			this.__div=document.createElement('div');
			this.__div.ggId="hsPOIEoa";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 195px;';
			hs+='position : absolute;';
			hs+='top : 133px;';
			hs+='visibility : hidden;';
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
			me.__div.ggCurrentLogicStateVisible = -1;
			this.__div.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(ggSkinVars['MasterTimerVar'] >= 1)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me.__div.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me.__div.ggCurrentLogicStateVisible = newLogicStateVisible;
					me.__div.style[domTransition]='';
					if (me.__div.ggCurrentLogicStateVisible == 0) {
						me.__div.style.visibility=(Number(me.__div.style.opacity)>0||!me.__div.style.opacity)?'inherit':'hidden';
						me.__div.ggVisible=true;
					}
					else {
						me.__div.style.visibility="hidden";
						me.__div.ggVisible=false;
					}
				}
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._eoapoi=document.createElement('div');
			this._eoapoi__img=document.createElement('img');
			this._eoapoi__img.className='ggskin ggskin_image';
			this._eoapoi__img.setAttribute('src',basePath + 'images/eoapoi.png');
			this._eoapoi__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._eoapoi__img.className='ggskin ggskin_image';
			this._eoapoi__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._eoapoi__img);
			this._eoapoi.appendChild(this._eoapoi__img);
			this._eoapoi.ggId="EoaPOI";
			this._eoapoi.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._eoapoi.ggVisible=true;
			this._eoapoi.className='ggskin ggskin_image ';
			this._eoapoi.ggType='image';
			hs ='';
			hs+='height : 227px;';
			hs+='left : -115px;';
			hs+='position : absolute;';
			hs+='top : -111px;';
			hs+='visibility : inherit;';
			hs+='width : 250px;';
			hs+='pointer-events:auto;';
			this._eoapoi.setAttribute('style',hs);
			this._eoapoi.style[domTransform + 'Origin']='50% 50%';
			me._eoapoi.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._eoapoi.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._eoapoi.ggUpdatePosition=function (useTransition) {
			}
			this._fossilnameeoa=document.createElement('div');
			this._fossilnameeoa__text=document.createElement('div');
			this._fossilnameeoa.className='ggskin ggskin_textdiv';
			this._fossilnameeoa.ggTextDiv=this._fossilnameeoa__text;
			this._fossilnameeoa.ggId="FossilnameEoa";
			this._fossilnameeoa.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._fossilnameeoa.ggVisible=true;
			this._fossilnameeoa.className='ggskin ggskin_text ';
			this._fossilnameeoa.ggType='text';
			hs ='';
			hs+='height : 18px;';
			hs+='left : 78px;';
			hs+='opacity : 0.89999;';
			hs+='position : absolute;';
			hs+='top : -11px;';
			hs+='visibility : inherit;';
			hs+='width : 96px;';
			hs+='pointer-events:none;';
			this._fossilnameeoa.setAttribute('style',hs);
			this._fossilnameeoa.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 96px;';
			hs+='height: 18px;';
			hs+='pointer-events: none;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 4px;';
			hs+=cssPrefix + 'border-radius: 4px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._fossilnameeoa__text.setAttribute('style',hs);
			this._fossilnameeoa__text.innerHTML="<i>Eoandromeda<\/i>";
			this._fossilnameeoa.appendChild(this._fossilnameeoa__text);
			me._fossilnameeoa.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._fossilnameeoa.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._fossilnameeoa.ggUpdatePosition=function (useTransition) {
			}
			this._eoapoi.appendChild(this._fossilnameeoa);
			this.__div.appendChild(this._eoapoi);
			this.ggUse3d=true;
			this.gg3dDistance=500;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me.__div.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='htScientist') {
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
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="htTitle";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 116px;';
			hs+='position : absolute;';
			hs+='top : 210px;';
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
			this._title_text=document.createElement('div');
			this._title_text__text=document.createElement('div');
			this._title_text.className='ggskin ggskin_textdiv';
			this._title_text.ggTextDiv=this._title_text__text;
			this._title_text.ggId="Title text";
			this._title_text.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
			this._title_text.ggVisible=true;
			this._title_text.className='ggskin ggskin_text ';
			this._title_text.ggType='text';
			hs ='';
			hs+='height : 52px;';
			hs+='left : -83px;';
			hs+='opacity : 0.59999;';
			hs+='position : absolute;';
			hs+='top : 11px;';
			hs+='visibility : inherit;';
			hs+='width : 169px;';
			hs+='pointer-events:none;';
			this._title_text.setAttribute('style',hs);
			this._title_text.style[domTransform + 'Origin']='50% 50%';
			this._title_text.style[domTransform]=parameterToTransform(this._title_text.ggParameter);
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='pointer-events: none;';
			hs+='background: #000000;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 6px;';
			hs+=cssPrefix + 'border-radius: 6px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 3px 4px 3px 4px;';
			hs+='overflow: hidden;';
			this._title_text__text.setAttribute('style',hs);
			this._title_text__text.innerHTML="Flinders Ranges, Southern Australia";
			this._title_text.appendChild(this._title_text__text);
			me._title_text.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._title_text.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._title_text.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((171-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._title_text);
			this.ggUse3d=true;
			this.gg3dDistance=900;
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};