// Garden Gnome Software - Skin
// Pano2VR 5.1 beta2/15706
// Filename: mobileNilpenaSTD1.ggsk
// Generated Thu Feb 23 14:08:57 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['ht_ani'] = false;
	ggSkinVars['gotosinglevar'] = false;
	ggSkinVars['MasterTimerVar'] = 0;
	ggSkinVars['Which_Node_Is_Active'] = 1;
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
		hs+='top : 142px;';
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
			me.player.playSound("_background","1");
			ggSkinVars['Which_Node_Is_Active'] = Number("4");
		}
		this._parvbed_nodemarker.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._parvbed_nodemarker);
		this._startbed2ndtime_nodemarker=document.createElement('div');
		this._startbed2ndtime_nodemarker.ggMarkerNodeId='{node7}';
		nodeMarker.push(this._startbed2ndtime_nodemarker);
		this._startbed2ndtime_nodemarker.ggId="StartBed2ndTIme_NodeMarker";
		this._startbed2ndtime_nodemarker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._startbed2ndtime_nodemarker.ggVisible=true;
		this._startbed2ndtime_nodemarker.className='ggskin ggskin_mark ';
		this._startbed2ndtime_nodemarker.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 841px;';
		hs+='position : absolute;';
		hs+='top : 107px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._startbed2ndtime_nodemarker.setAttribute('style',hs);
		this._startbed2ndtime_nodemarker.style[domTransform + 'Origin']='50% 50%';
		me._startbed2ndtime_nodemarker.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._startbed2ndtime_nodemarker.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._startbed2ndtime_nodemarker.onclick=function (e) {
			me.player.openNext('{node7}');
		}
		this._startbed2ndtime_nodemarker.ggActivate=function () {
			ggSkinVars['MasterTimerVar'] = Number("1");
			me.player.playSound("_background","1");
			ggSkinVars['Which_Node_Is_Active'] = Number("3");
		}
		this._startbed2ndtime_nodemarker.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._startbed2ndtime_nodemarker);
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
			me.player.playSound("_background","1");
			ggSkinVars['Which_Node_Is_Active'] = Number("2");
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
			me.player.playSound("_background","1");
			ggSkinVars['Which_Node_Is_Active'] = Number("1");
		}
		this._firstbed_nodemarker.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._firstbed_nodemarker);
		this._loading_bar=document.createElement('div');
		this._loading_bar.ggId="Loading Bar";
		this._loading_bar.ggLeft=-192;
		this._loading_bar.ggTop=-29;
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
		hs+='left : -192px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -29px;';
		hs+='visibility : inherit;';
		hs+='width : 389px;';
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
		this._audiobuttonscont=document.createElement('div');
		this._audiobuttonscont.ggId="AudioButtonsCont";
		this._audiobuttonscont.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._audiobuttonscont.ggVisible=true;
		this._audiobuttonscont.className='ggskin ggskin_container ';
		this._audiobuttonscont.ggType='container';
		hs ='';
		hs+='height : 171px;';
		hs+='left : -114px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 173px;';
		hs+='pointer-events:none;';
		this._audiobuttonscont.setAttribute('style',hs);
		this._audiobuttonscont.style[domTransform + 'Origin']='50% 50%';
		me._audiobuttonscont.ggIsActive=function() {
			return false;
		}
		me._audiobuttonscont.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._audiobuttonscont.ggUpdatePosition=function (useTransition) {
		}
		this._menubutton=document.createElement('div');
		this._menubutton__img=document.createElement('img');
		this._menubutton__img.className='ggskin ggskin_image';
		this._menubutton__img.setAttribute('src',basePath + 'images/menubutton.png');
		this._menubutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._menubutton__img.className='ggskin ggskin_image';
		this._menubutton__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._menubutton__img);
		this._menubutton.appendChild(this._menubutton__img);
		this._menubutton.ggId="menubutton";
		this._menubutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menubutton.ggVisible=true;
		this._menubutton.className='ggskin ggskin_image ';
		this._menubutton.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 116px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._menubutton.setAttribute('style',hs);
		this._menubutton.style[domTransform + 'Origin']='50% 50%';
		me._menubutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menubutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menubutton.onclick=function (e) {
			var flag=me._audiobuttonscont.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._audiobuttonscont.style[domTransition]='none';
			} else {
				me._audiobuttonscont.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._audiobuttonscont.ggParameter.rx=0;me._audiobuttonscont.ggParameter.ry=0;
				me._audiobuttonscont.style[domTransform]=parameterToTransform(me._audiobuttonscont.ggParameter);
			} else {
				me._audiobuttonscont.ggParameter.rx=114;me._audiobuttonscont.ggParameter.ry=0;
				me._audiobuttonscont.style[domTransform]=parameterToTransform(me._audiobuttonscont.ggParameter);
			}
			me._audiobuttonscont.ggPositonActive=!flag;
		}
		this._menubutton.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._menubutton);
		this._endbutton=document.createElement('div');
		this._endbutton__img=document.createElement('img');
		this._endbutton__img.className='ggskin ggskin_image';
		this._endbutton__img.setAttribute('src',basePath + 'images/endbutton.png');
		this._endbutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._endbutton__img.className='ggskin ggskin_image';
		this._endbutton__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._endbutton__img);
		this._endbutton.appendChild(this._endbutton__img);
		this._endbutton.ggId="endbutton";
		this._endbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._endbutton.ggVisible=true;
		this._endbutton.className='ggskin ggskin_image ';
		this._endbutton.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 112px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._endbutton.setAttribute('style',hs);
		this._endbutton.style[domTransform + 'Origin']='50% 50%';
		me._endbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._endbutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._endbutton.onclick=function (e) {
			me.player.openUrl("..\/Nilpena2Bed1\/index.html","_self");
		}
		this._endbutton.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._endbutton);
		this._fowardbutton_parv_to_new=document.createElement('div');
		this._fowardbutton_parv_to_new__img=document.createElement('img');
		this._fowardbutton_parv_to_new__img.className='ggskin ggskin_image';
		this._fowardbutton_parv_to_new__img.setAttribute('src',basePath + 'images/fowardbutton_parv_to_new.png');
		this._fowardbutton_parv_to_new__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fowardbutton_parv_to_new__img.className='ggskin ggskin_image';
		this._fowardbutton_parv_to_new__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fowardbutton_parv_to_new__img);
		this._fowardbutton_parv_to_new.appendChild(this._fowardbutton_parv_to_new__img);
		this._fowardbutton_parv_to_new.ggId="fowardbutton Parv to new";
		this._fowardbutton_parv_to_new.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fowardbutton_parv_to_new.ggVisible=false;
		this._fowardbutton_parv_to_new.className='ggskin ggskin_image ';
		this._fowardbutton_parv_to_new.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._fowardbutton_parv_to_new.setAttribute('style',hs);
		this._fowardbutton_parv_to_new.style[domTransform + 'Origin']='50% 50%';
		me._fowardbutton_parv_to_new.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fowardbutton_parv_to_new.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fowardbutton_parv_to_new.onclick=function (e) {
			me.player.openUrl("..\/Nilpena2Bed1\/index.html","_self");
		}
		me._fowardbutton_parv_to_new.ggCurrentLogicStateVisible = -1;
		this._fowardbutton_parv_to_new.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 4)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 4)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fowardbutton_parv_to_new.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fowardbutton_parv_to_new.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fowardbutton_parv_to_new.style[domTransition]='';
				if (me._fowardbutton_parv_to_new.ggCurrentLogicStateVisible == 0) {
					me._fowardbutton_parv_to_new.style.visibility=(Number(me._fowardbutton_parv_to_new.style.opacity)>0||!me._fowardbutton_parv_to_new.style.opacity)?'inherit':'hidden';
					me._fowardbutton_parv_to_new.ggVisible=true;
				}
				else if (me._fowardbutton_parv_to_new.ggCurrentLogicStateVisible == 1) {
					me._fowardbutton_parv_to_new.style.visibility="hidden";
					me._fowardbutton_parv_to_new.ggVisible=false;
				}
				else {
					me._fowardbutton_parv_to_new.style.visibility="hidden";
					me._fowardbutton_parv_to_new.ggVisible=false;
				}
			}
		}
		this._fowardbutton_parv_to_new.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._fowardbutton_parv_to_new);
		this._fowardbutton_bed_to_parv=document.createElement('div');
		this._fowardbutton_bed_to_parv__img=document.createElement('img');
		this._fowardbutton_bed_to_parv__img.className='ggskin ggskin_image';
		this._fowardbutton_bed_to_parv__img.setAttribute('src',basePath + 'images/fowardbutton_bed_to_parv.png');
		this._fowardbutton_bed_to_parv__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fowardbutton_bed_to_parv__img.className='ggskin ggskin_image';
		this._fowardbutton_bed_to_parv__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fowardbutton_bed_to_parv__img);
		this._fowardbutton_bed_to_parv.appendChild(this._fowardbutton_bed_to_parv__img);
		this._fowardbutton_bed_to_parv.ggId="fowardbutton Bed to parv";
		this._fowardbutton_bed_to_parv.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fowardbutton_bed_to_parv.ggVisible=false;
		this._fowardbutton_bed_to_parv.className='ggskin ggskin_image ';
		this._fowardbutton_bed_to_parv.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._fowardbutton_bed_to_parv.setAttribute('style',hs);
		this._fowardbutton_bed_to_parv.style[domTransform + 'Origin']='50% 50%';
		me._fowardbutton_bed_to_parv.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fowardbutton_bed_to_parv.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fowardbutton_bed_to_parv.onclick=function (e) {
			me.player.openNext("{node2}","");
		}
		me._fowardbutton_bed_to_parv.ggCurrentLogicStateVisible = -1;
		this._fowardbutton_bed_to_parv.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 3)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 3)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fowardbutton_bed_to_parv.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fowardbutton_bed_to_parv.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fowardbutton_bed_to_parv.style[domTransition]='';
				if (me._fowardbutton_bed_to_parv.ggCurrentLogicStateVisible == 0) {
					me._fowardbutton_bed_to_parv.style.visibility=(Number(me._fowardbutton_bed_to_parv.style.opacity)>0||!me._fowardbutton_bed_to_parv.style.opacity)?'inherit':'hidden';
					me._fowardbutton_bed_to_parv.ggVisible=true;
				}
				else if (me._fowardbutton_bed_to_parv.ggCurrentLogicStateVisible == 1) {
					me._fowardbutton_bed_to_parv.style.visibility="hidden";
					me._fowardbutton_bed_to_parv.ggVisible=false;
				}
				else {
					me._fowardbutton_bed_to_parv.style.visibility="hidden";
					me._fowardbutton_bed_to_parv.ggVisible=false;
				}
			}
		}
		this._fowardbutton_bed_to_parv.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._fowardbutton_bed_to_parv);
		this._fowardbutton_under_to_bed=document.createElement('div');
		this._fowardbutton_under_to_bed__img=document.createElement('img');
		this._fowardbutton_under_to_bed__img.className='ggskin ggskin_image';
		this._fowardbutton_under_to_bed__img.setAttribute('src',basePath + 'images/fowardbutton_under_to_bed.png');
		this._fowardbutton_under_to_bed__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fowardbutton_under_to_bed__img.className='ggskin ggskin_image';
		this._fowardbutton_under_to_bed__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fowardbutton_under_to_bed__img);
		this._fowardbutton_under_to_bed.appendChild(this._fowardbutton_under_to_bed__img);
		this._fowardbutton_under_to_bed.ggId="fowardbutton Under to Bed";
		this._fowardbutton_under_to_bed.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fowardbutton_under_to_bed.ggVisible=false;
		this._fowardbutton_under_to_bed.className='ggskin ggskin_image ';
		this._fowardbutton_under_to_bed.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._fowardbutton_under_to_bed.setAttribute('style',hs);
		this._fowardbutton_under_to_bed.style[domTransform + 'Origin']='50% 50%';
		me._fowardbutton_under_to_bed.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fowardbutton_under_to_bed.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fowardbutton_under_to_bed.onclick=function (e) {
			me.player.openNext("{node7}","");
		}
		me._fowardbutton_under_to_bed.ggCurrentLogicStateVisible = -1;
		this._fowardbutton_under_to_bed.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 2)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 2)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fowardbutton_under_to_bed.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fowardbutton_under_to_bed.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fowardbutton_under_to_bed.style[domTransition]='';
				if (me._fowardbutton_under_to_bed.ggCurrentLogicStateVisible == 0) {
					me._fowardbutton_under_to_bed.style.visibility=(Number(me._fowardbutton_under_to_bed.style.opacity)>0||!me._fowardbutton_under_to_bed.style.opacity)?'inherit':'hidden';
					me._fowardbutton_under_to_bed.ggVisible=true;
				}
				else if (me._fowardbutton_under_to_bed.ggCurrentLogicStateVisible == 1) {
					me._fowardbutton_under_to_bed.style.visibility="hidden";
					me._fowardbutton_under_to_bed.ggVisible=false;
				}
				else {
					me._fowardbutton_under_to_bed.style.visibility="hidden";
					me._fowardbutton_under_to_bed.ggVisible=false;
				}
			}
		}
		this._fowardbutton_under_to_bed.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._fowardbutton_under_to_bed);
		this._fowardbutton_nil_to_under=document.createElement('div');
		this._fowardbutton_nil_to_under__img=document.createElement('img');
		this._fowardbutton_nil_to_under__img.className='ggskin ggskin_image';
		this._fowardbutton_nil_to_under__img.setAttribute('src',basePath + 'images/fowardbutton_nil_to_under.png');
		this._fowardbutton_nil_to_under__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fowardbutton_nil_to_under__img.className='ggskin ggskin_image';
		this._fowardbutton_nil_to_under__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fowardbutton_nil_to_under__img);
		this._fowardbutton_nil_to_under.appendChild(this._fowardbutton_nil_to_under__img);
		this._fowardbutton_nil_to_under.ggId="fowardbutton Nil to Under";
		this._fowardbutton_nil_to_under.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fowardbutton_nil_to_under.ggVisible=true;
		this._fowardbutton_nil_to_under.className='ggskin ggskin_image ';
		this._fowardbutton_nil_to_under.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._fowardbutton_nil_to_under.setAttribute('style',hs);
		this._fowardbutton_nil_to_under.style[domTransform + 'Origin']='50% 50%';
		me._fowardbutton_nil_to_under.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fowardbutton_nil_to_under.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fowardbutton_nil_to_under.onclick=function (e) {
			me.player.openNext("{node5}","");
		}
		me._fowardbutton_nil_to_under.ggCurrentLogicStateVisible = -1;
		this._fowardbutton_nil_to_under.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 1)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fowardbutton_nil_to_under.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fowardbutton_nil_to_under.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fowardbutton_nil_to_under.style[domTransition]='';
				if (me._fowardbutton_nil_to_under.ggCurrentLogicStateVisible == 0) {
					me._fowardbutton_nil_to_under.style.visibility=(Number(me._fowardbutton_nil_to_under.style.opacity)>0||!me._fowardbutton_nil_to_under.style.opacity)?'inherit':'hidden';
					me._fowardbutton_nil_to_under.ggVisible=true;
				}
				else if (me._fowardbutton_nil_to_under.ggCurrentLogicStateVisible == 1) {
					me._fowardbutton_nil_to_under.style.visibility="hidden";
					me._fowardbutton_nil_to_under.ggVisible=false;
				}
				else {
					me._fowardbutton_nil_to_under.style.visibility=(Number(me._fowardbutton_nil_to_under.style.opacity)>0||!me._fowardbutton_nil_to_under.style.opacity)?'inherit':'hidden';
					me._fowardbutton_nil_to_under.ggVisible=true;
				}
			}
		}
		this._fowardbutton_nil_to_under.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._fowardbutton_nil_to_under);
		this._playbutton=document.createElement('div');
		this._playbutton__img=document.createElement('img');
		this._playbutton__img.className='ggskin ggskin_image';
		this._playbutton__img.setAttribute('src',basePath + 'images/playbutton.png');
		this._playbutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._playbutton__img.className='ggskin ggskin_image';
		this._playbutton__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._playbutton__img);
		this._playbutton.appendChild(this._playbutton__img);
		this._playbutton.ggId="playbutton";
		this._playbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._playbutton.ggVisible=true;
		this._playbutton.className='ggskin ggskin_image ';
		this._playbutton.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._playbutton.setAttribute('style',hs);
		this._playbutton.style[domTransform + 'Origin']='50% 50%';
		me._playbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._playbutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._playbutton.onclick=function (e) {
			me.player.playSound("_background","1");
		}
		this._playbutton.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._playbutton);
		this._pausebutton=document.createElement('div');
		this._pausebutton__img=document.createElement('img');
		this._pausebutton__img.className='ggskin ggskin_image';
		this._pausebutton__img.setAttribute('src',basePath + 'images/pausebutton.png');
		this._pausebutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._pausebutton__img.className='ggskin ggskin_image';
		this._pausebutton__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._pausebutton__img);
		this._pausebutton.appendChild(this._pausebutton__img);
		this._pausebutton.ggId="pausebutton";
		this._pausebutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pausebutton.ggVisible=true;
		this._pausebutton.className='ggskin ggskin_image ';
		this._pausebutton.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._pausebutton.setAttribute('style',hs);
		this._pausebutton.style[domTransform + 'Origin']='50% 50%';
		me._pausebutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pausebutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pausebutton.onclick=function (e) {
			me.player.pauseSound("_background");
		}
		this._pausebutton.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._pausebutton);
		this._rewindbutton_parv=document.createElement('div');
		this._rewindbutton_parv__img=document.createElement('img');
		this._rewindbutton_parv__img.className='ggskin ggskin_image';
		this._rewindbutton_parv__img.setAttribute('src',basePath + 'images/rewindbutton_parv.png');
		this._rewindbutton_parv__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._rewindbutton_parv__img.className='ggskin ggskin_image';
		this._rewindbutton_parv__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._rewindbutton_parv__img);
		this._rewindbutton_parv.appendChild(this._rewindbutton_parv__img);
		this._rewindbutton_parv.ggId="rewindbutton Parv";
		this._rewindbutton_parv.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rewindbutton_parv.ggVisible=false;
		this._rewindbutton_parv.className='ggskin ggskin_image ';
		this._rewindbutton_parv.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._rewindbutton_parv.setAttribute('style',hs);
		this._rewindbutton_parv.style[domTransform + 'Origin']='50% 50%';
		me._rewindbutton_parv.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rewindbutton_parv.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rewindbutton_parv.onclick=function (e) {
			me.player.openNext("{node7}","");
		}
		me._rewindbutton_parv.ggCurrentLogicStateVisible = -1;
		this._rewindbutton_parv.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 4)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 4)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rewindbutton_parv.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rewindbutton_parv.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rewindbutton_parv.style[domTransition]='';
				if (me._rewindbutton_parv.ggCurrentLogicStateVisible == 0) {
					me._rewindbutton_parv.style.visibility=(Number(me._rewindbutton_parv.style.opacity)>0||!me._rewindbutton_parv.style.opacity)?'inherit':'hidden';
					me._rewindbutton_parv.ggVisible=true;
				}
				else if (me._rewindbutton_parv.ggCurrentLogicStateVisible == 1) {
					me._rewindbutton_parv.style.visibility="hidden";
					me._rewindbutton_parv.ggVisible=false;
				}
				else {
					me._rewindbutton_parv.style.visibility="hidden";
					me._rewindbutton_parv.ggVisible=false;
				}
			}
		}
		this._rewindbutton_parv.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._rewindbutton_parv);
		this._rewindbutton_bedtoparv=document.createElement('div');
		this._rewindbutton_bedtoparv__img=document.createElement('img');
		this._rewindbutton_bedtoparv__img.className='ggskin ggskin_image';
		this._rewindbutton_bedtoparv__img.setAttribute('src',basePath + 'images/rewindbutton_bedtoparv.png');
		this._rewindbutton_bedtoparv__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._rewindbutton_bedtoparv__img.className='ggskin ggskin_image';
		this._rewindbutton_bedtoparv__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._rewindbutton_bedtoparv__img);
		this._rewindbutton_bedtoparv.appendChild(this._rewindbutton_bedtoparv__img);
		this._rewindbutton_bedtoparv.ggId="rewindbutton BedtoParv";
		this._rewindbutton_bedtoparv.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rewindbutton_bedtoparv.ggVisible=false;
		this._rewindbutton_bedtoparv.className='ggskin ggskin_image ';
		this._rewindbutton_bedtoparv.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._rewindbutton_bedtoparv.setAttribute('style',hs);
		this._rewindbutton_bedtoparv.style[domTransform + 'Origin']='50% 50%';
		me._rewindbutton_bedtoparv.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rewindbutton_bedtoparv.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rewindbutton_bedtoparv.onclick=function (e) {
			me.player.openNext("{node5}","");
		}
		me._rewindbutton_bedtoparv.ggCurrentLogicStateVisible = -1;
		this._rewindbutton_bedtoparv.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 3)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 3)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rewindbutton_bedtoparv.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rewindbutton_bedtoparv.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rewindbutton_bedtoparv.style[domTransition]='';
				if (me._rewindbutton_bedtoparv.ggCurrentLogicStateVisible == 0) {
					me._rewindbutton_bedtoparv.style.visibility=(Number(me._rewindbutton_bedtoparv.style.opacity)>0||!me._rewindbutton_bedtoparv.style.opacity)?'inherit':'hidden';
					me._rewindbutton_bedtoparv.ggVisible=true;
				}
				else if (me._rewindbutton_bedtoparv.ggCurrentLogicStateVisible == 1) {
					me._rewindbutton_bedtoparv.style.visibility="hidden";
					me._rewindbutton_bedtoparv.ggVisible=false;
				}
				else {
					me._rewindbutton_bedtoparv.style.visibility="hidden";
					me._rewindbutton_bedtoparv.ggVisible=false;
				}
			}
		}
		this._rewindbutton_bedtoparv.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._rewindbutton_bedtoparv);
		this._rewindbutton_underwater=document.createElement('div');
		this._rewindbutton_underwater__img=document.createElement('img');
		this._rewindbutton_underwater__img.className='ggskin ggskin_image';
		this._rewindbutton_underwater__img.setAttribute('src',basePath + 'images/rewindbutton_underwater.png');
		this._rewindbutton_underwater__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._rewindbutton_underwater__img.className='ggskin ggskin_image';
		this._rewindbutton_underwater__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._rewindbutton_underwater__img);
		this._rewindbutton_underwater.appendChild(this._rewindbutton_underwater__img);
		this._rewindbutton_underwater.ggId="rewindbutton Underwater";
		this._rewindbutton_underwater.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rewindbutton_underwater.ggVisible=false;
		this._rewindbutton_underwater.className='ggskin ggskin_image ';
		this._rewindbutton_underwater.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._rewindbutton_underwater.setAttribute('style',hs);
		this._rewindbutton_underwater.style[domTransform + 'Origin']='50% 50%';
		me._rewindbutton_underwater.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rewindbutton_underwater.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rewindbutton_underwater.onclick=function (e) {
			me.player.openNext("{node6}","");
		}
		me._rewindbutton_underwater.ggCurrentLogicStateVisible = -1;
		this._rewindbutton_underwater.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 2)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 2)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rewindbutton_underwater.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rewindbutton_underwater.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rewindbutton_underwater.style[domTransition]='';
				if (me._rewindbutton_underwater.ggCurrentLogicStateVisible == 0) {
					me._rewindbutton_underwater.style.visibility=(Number(me._rewindbutton_underwater.style.opacity)>0||!me._rewindbutton_underwater.style.opacity)?'inherit':'hidden';
					me._rewindbutton_underwater.ggVisible=true;
				}
				else if (me._rewindbutton_underwater.ggCurrentLogicStateVisible == 1) {
					me._rewindbutton_underwater.style.visibility="hidden";
					me._rewindbutton_underwater.ggVisible=false;
				}
				else {
					me._rewindbutton_underwater.style.visibility="hidden";
					me._rewindbutton_underwater.ggVisible=false;
				}
			}
		}
		this._rewindbutton_underwater.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._rewindbutton_underwater);
		this._rewindbutton_nil=document.createElement('div');
		this._rewindbutton_nil__img=document.createElement('img');
		this._rewindbutton_nil__img.className='ggskin ggskin_image';
		this._rewindbutton_nil__img.setAttribute('src',basePath + 'images/rewindbutton_nil.png');
		this._rewindbutton_nil__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._rewindbutton_nil__img.className='ggskin ggskin_image';
		this._rewindbutton_nil__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._rewindbutton_nil__img);
		this._rewindbutton_nil.appendChild(this._rewindbutton_nil__img);
		this._rewindbutton_nil.ggId="rewindbutton Nil";
		this._rewindbutton_nil.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rewindbutton_nil.ggVisible=true;
		this._rewindbutton_nil.className='ggskin ggskin_image ';
		this._rewindbutton_nil.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._rewindbutton_nil.setAttribute('style',hs);
		this._rewindbutton_nil.style[domTransform + 'Origin']='50% 50%';
		me._rewindbutton_nil.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rewindbutton_nil.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rewindbutton_nil.onclick=function (e) {
			me.player.openUrl("..\/NilpenaGuidedSTD\/index.html","_self");
		}
		me._rewindbutton_nil.ggCurrentLogicStateVisible = -1;
		this._rewindbutton_nil.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 1)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rewindbutton_nil.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rewindbutton_nil.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rewindbutton_nil.style[domTransition]='';
				if (me._rewindbutton_nil.ggCurrentLogicStateVisible == 0) {
					me._rewindbutton_nil.style.visibility=(Number(me._rewindbutton_nil.style.opacity)>0||!me._rewindbutton_nil.style.opacity)?'inherit':'hidden';
					me._rewindbutton_nil.ggVisible=true;
				}
				else if (me._rewindbutton_nil.ggCurrentLogicStateVisible == 1) {
					me._rewindbutton_nil.style.visibility="hidden";
					me._rewindbutton_nil.ggVisible=false;
				}
				else {
					me._rewindbutton_nil.style.visibility=(Number(me._rewindbutton_nil.style.opacity)>0||!me._rewindbutton_nil.style.opacity)?'inherit':'hidden';
					me._rewindbutton_nil.ggVisible=true;
				}
			}
		}
		this._rewindbutton_nil.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._rewindbutton_nil);
		this._beginbutton=document.createElement('div');
		this._beginbutton__img=document.createElement('img');
		this._beginbutton__img.className='ggskin ggskin_image';
		this._beginbutton__img.setAttribute('src',basePath + 'images/beginbutton.png');
		this._beginbutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._beginbutton__img.className='ggskin ggskin_image';
		this._beginbutton__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._beginbutton__img);
		this._beginbutton.appendChild(this._beginbutton__img);
		this._beginbutton.ggId="beginbutton";
		this._beginbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._beginbutton.ggVisible=true;
		this._beginbutton.className='ggskin ggskin_image ';
		this._beginbutton.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 112px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._beginbutton.setAttribute('style',hs);
		this._beginbutton.style[domTransform + 'Origin']='50% 50%';
		me._beginbutton.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._beginbutton.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._beginbutton.onclick=function (e) {
			me.player.openUrl("..\/NilpenaGuidedSTD\/index.html","_self");
		}
		this._beginbutton.ggUpdatePosition=function (useTransition) {
		}
		this._audiobuttonscont.appendChild(this._beginbutton);
		this.divSkin.appendChild(this._audiobuttonscont);
		this._audiobutton=document.createElement('div');
		this._audiobutton__img=document.createElement('img');
		this._audiobutton__img.className='ggskin ggskin_image';
		this._audiobutton__img.setAttribute('src',basePath + 'images/audiobutton.png');
		this._audiobutton__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._audiobutton__img.className='ggskin ggskin_image';
		this._audiobutton__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._audiobutton__img);
		this._audiobutton.appendChild(this._audiobutton__img);
		this._audiobutton.ggId="audiobutton";
		this._audiobutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._audiobutton.ggVisible=true;
		this._audiobutton.className='ggskin ggskin_image ';
		this._audiobutton.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._audiobutton.setAttribute('style',hs);
		this._audiobutton.style[domTransform + 'Origin']='50% 50%';
		me._audiobutton.ggIsActive=function() {
			return false;
		}
		me._audiobutton.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._audiobutton.onclick=function (e) {
			me.player.playSound("_background","1");
		}
		this._audiobutton.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._audiobutton);
		this._gyro_container=document.createElement('div');
		this._gyro_container.ggId="gyro container";
		this._gyro_container.ggLeft=-59;
		this._gyro_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro_container.ggVisible=true;
		this._gyro_container.className='ggskin ggskin_container ';
		this._gyro_container.ggType='container';
		hs ='';
		hs+='height : 56px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:none;';
		this._gyro_container.setAttribute('style',hs);
		this._gyro_container.style[domTransform + 'Origin']='50% 50%';
		me._gyro_container.ggIsActive=function() {
			return false;
		}
		me._gyro_container.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._gyro_container.ggUpdatePosition=function (useTransition) {
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
		this._gyromode4=document.createElement('div');
		this._gyromode4__img=document.createElement('img');
		this._gyromode4__img.className='ggskin ggskin_image';
		this._gyromode4__img.setAttribute('src',basePath + 'images/gyromode4.png');
		this._gyromode4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gyromode4__img.className='ggskin ggskin_image';
		this._gyromode4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gyromode4__img);
		this._gyromode4.appendChild(this._gyromode4__img);
		this._gyromode4.ggId="gyromode4";
		this._gyromode4.ggLeft=-56;
		this._gyromode4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyromode4.ggVisible=false;
		this._gyromode4.className='ggskin ggskin_image ';
		this._gyromode4.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : -56px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._gyromode4.setAttribute('style',hs);
		this._gyromode4.style[domTransform + 'Origin']='50% 50%';
		me._gyromode4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyromode4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gyromode4.onclick=function (e) {
			me.player.openUrl("..\/NilpenaGuidedGYR\/index.html#node2","_self");
		}
		me._gyromode4.ggCurrentLogicStateVisible = -1;
		this._gyromode4.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 4)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 4)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyromode4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyromode4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyromode4.style[domTransition]='';
				if (me._gyromode4.ggCurrentLogicStateVisible == 0) {
					me._gyromode4.style.visibility=(Number(me._gyromode4.style.opacity)>0||!me._gyromode4.style.opacity)?'inherit':'hidden';
					me._gyromode4.ggVisible=true;
				}
				else if (me._gyromode4.ggCurrentLogicStateVisible == 1) {
					me._gyromode4.style.visibility="hidden";
					me._gyromode4.ggVisible=false;
				}
				else {
					me._gyromode4.style.visibility="hidden";
					me._gyromode4.ggVisible=false;
				}
			}
		}
		this._gyromode4.ggUpdatePosition=function (useTransition) {
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
		this._gyro_container.appendChild(this._gyromode4);
		this._gyromode3=document.createElement('div');
		this._gyromode3__img=document.createElement('img');
		this._gyromode3__img.className='ggskin ggskin_image';
		this._gyromode3__img.setAttribute('src',basePath + 'images/gyromode3.png');
		this._gyromode3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gyromode3__img.className='ggskin ggskin_image';
		this._gyromode3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gyromode3__img);
		this._gyromode3.appendChild(this._gyromode3__img);
		this._gyromode3.ggId="gyromode3";
		this._gyromode3.ggLeft=-56;
		this._gyromode3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyromode3.ggVisible=false;
		this._gyromode3.className='ggskin ggskin_image ';
		this._gyromode3.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : -56px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._gyromode3.setAttribute('style',hs);
		this._gyromode3.style[domTransform + 'Origin']='50% 50%';
		me._gyromode3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyromode3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gyromode3.onclick=function (e) {
			me.player.openUrl("..\/NilpenaGuidedGYR\/index.html#node7","_self");
		}
		me._gyromode3.ggCurrentLogicStateVisible = -1;
		this._gyromode3.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 3)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 3)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyromode3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyromode3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyromode3.style[domTransition]='';
				if (me._gyromode3.ggCurrentLogicStateVisible == 0) {
					me._gyromode3.style.visibility=(Number(me._gyromode3.style.opacity)>0||!me._gyromode3.style.opacity)?'inherit':'hidden';
					me._gyromode3.ggVisible=true;
				}
				else if (me._gyromode3.ggCurrentLogicStateVisible == 1) {
					me._gyromode3.style.visibility="hidden";
					me._gyromode3.ggVisible=false;
				}
				else {
					me._gyromode3.style.visibility="hidden";
					me._gyromode3.ggVisible=false;
				}
			}
		}
		this._gyromode3.ggUpdatePosition=function (useTransition) {
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
		this._gyro_container.appendChild(this._gyromode3);
		this._gyromode2=document.createElement('div');
		this._gyromode2__img=document.createElement('img');
		this._gyromode2__img.className='ggskin ggskin_image';
		this._gyromode2__img.setAttribute('src',basePath + 'images/gyromode2.png');
		this._gyromode2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gyromode2__img.className='ggskin ggskin_image';
		this._gyromode2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gyromode2__img);
		this._gyromode2.appendChild(this._gyromode2__img);
		this._gyromode2.ggId="gyromode2";
		this._gyromode2.ggLeft=-56;
		this._gyromode2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyromode2.ggVisible=false;
		this._gyromode2.className='ggskin ggskin_image ';
		this._gyromode2.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : -56px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._gyromode2.setAttribute('style',hs);
		this._gyromode2.style[domTransform + 'Origin']='50% 50%';
		me._gyromode2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyromode2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gyromode2.onclick=function (e) {
			me.player.openUrl("..\/NilpenaGuidedGYR\/index.html#node5","_self");
		}
		me._gyromode2.ggCurrentLogicStateVisible = -1;
		this._gyromode2.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 2)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 2)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyromode2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyromode2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyromode2.style[domTransition]='';
				if (me._gyromode2.ggCurrentLogicStateVisible == 0) {
					me._gyromode2.style.visibility=(Number(me._gyromode2.style.opacity)>0||!me._gyromode2.style.opacity)?'inherit':'hidden';
					me._gyromode2.ggVisible=true;
				}
				else if (me._gyromode2.ggCurrentLogicStateVisible == 1) {
					me._gyromode2.style.visibility="hidden";
					me._gyromode2.ggVisible=false;
				}
				else {
					me._gyromode2.style.visibility="hidden";
					me._gyromode2.ggVisible=false;
				}
			}
		}
		this._gyromode2.ggUpdatePosition=function (useTransition) {
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
		this._gyro_container.appendChild(this._gyromode2);
		this._gyromode1=document.createElement('div');
		this._gyromode1__img=document.createElement('img');
		this._gyromode1__img.className='ggskin ggskin_image';
		this._gyromode1__img.setAttribute('src',basePath + 'images/gyromode1.png');
		this._gyromode1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gyromode1__img.className='ggskin ggskin_image';
		this._gyromode1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gyromode1__img);
		this._gyromode1.appendChild(this._gyromode1__img);
		this._gyromode1.ggId="gyromode1";
		this._gyromode1.ggLeft=-56;
		this._gyromode1.ggTop=-56;
		this._gyromode1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyromode1.ggVisible=false;
		this._gyromode1.className='ggskin ggskin_image ';
		this._gyromode1.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : -56px;';
		hs+='position : absolute;';
		hs+='top : -56px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._gyromode1.setAttribute('style',hs);
		this._gyromode1.style[domTransform + 'Origin']='50% 50%';
		me._gyromode1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyromode1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gyromode1.onclick=function (e) {
			me.player.openUrl("..\/NilpenaGuidedGYR\/index.html#node6","_self");
		}
		me._gyromode1.ggCurrentLogicStateVisible = -1;
		this._gyromode1.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['Which_Node_Is_Active'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['Which_Node_Is_Active'] != 1)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyromode1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyromode1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyromode1.style[domTransition]='';
				if (me._gyromode1.ggCurrentLogicStateVisible == 0) {
					me._gyromode1.style.visibility=(Number(me._gyromode1.style.opacity)>0||!me._gyromode1.style.opacity)?'inherit':'hidden';
					me._gyromode1.ggVisible=true;
				}
				else if (me._gyromode1.ggCurrentLogicStateVisible == 1) {
					me._gyromode1.style.visibility="hidden";
					me._gyromode1.ggVisible=false;
				}
				else {
					me._gyromode1.style.visibility="hidden";
					me._gyromode1.ggVisible=false;
				}
			}
		}
		this._gyromode1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gyro_container.appendChild(this._gyromode1);
		this.divSkin.appendChild(this._gyro_container);
		this._parvbed_nodemarker.ggMarkerNormal=null;
		this._parvbed_nodemarker.ggMarkerActive=null;
		this._startbed2ndtime_nodemarker.ggMarkerNormal=null;
		this._startbed2ndtime_nodemarker.ggMarkerActive=null;
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
		me._fowardbutton_parv_to_new.ggUpdateConditionTimer();
		me._fowardbutton_bed_to_parv.ggUpdateConditionTimer();
		me._fowardbutton_under_to_bed.ggUpdateConditionTimer();
		me._fowardbutton_nil_to_under.ggUpdateConditionTimer();
		me._rewindbutton_parv.ggUpdateConditionTimer();
		me._rewindbutton_bedtoparv.ggUpdateConditionTimer();
		me._rewindbutton_underwater.ggUpdateConditionTimer();
		me._rewindbutton_nil.ggUpdateConditionTimer();
		me._gyromode4.ggUpdateConditionTimer();
		me._gyromode3.ggUpdateConditionTimer();
		me._gyromode2.ggUpdateConditionTimer();
		me._gyromode1.ggUpdateConditionTimer();
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
					(ggSkinVars['MasterTimerVar'] >= 38)
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
					(ggSkinVars['MasterTimerVar'] >= 32)
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
		if (hotspot.skinid=='ht_node_fromParvToStart') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node_fromParvToStart";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 357px;';
			hs+='position : absolute;';
			hs+='top : 289px;';
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
					(ggSkinVars['MasterTimerVar'] >= 15)
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
			this._circlenodestart2=document.createElement('div');
			this._circlenodestart2__img=document.createElement('img');
			this._circlenodestart2__img.className='ggskin ggskin_image';
			this._circlenodestart2__img.setAttribute('src',basePath + 'images/circlenodestart2.png');
			this._circlenodestart2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._circlenodestart2__img.className='ggskin ggskin_image';
			this._circlenodestart2__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._circlenodestart2__img);
			this._circlenodestart2.appendChild(this._circlenodestart2__img);
			this._circlenodestart2.ggId="circlenodestart2";
			this._circlenodestart2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._circlenodestart2.ggVisible=true;
			this._circlenodestart2.className='ggskin ggskin_image ';
			this._circlenodestart2.ggType='image';
			hs ='';
			hs+='height : 119px;';
			hs+='left : -56px;';
			hs+='position : absolute;';
			hs+='top : -58px;';
			hs+='visibility : inherit;';
			hs+='width : 115px;';
			hs+='pointer-events:auto;';
			this._circlenodestart2.setAttribute('style',hs);
			this._circlenodestart2.style[domTransform + 'Origin']='50% 50%';
			me._circlenodestart2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._circlenodestart2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._circlenodestart2.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._circlenodestart2);
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
			hs+='left : 300px;';
			hs+='position : absolute;';
			hs+='top : 188px;';
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
					(ggSkinVars['MasterTimerVar'] >= 12)
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
			hs+='left : 217px;';
			hs+='position : absolute;';
			hs+='top : 88px;';
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
					(ggSkinVars['MasterTimerVar'] >= 30)
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
			hs+='left : 90px;';
			hs+='position : absolute;';
			hs+='top : 91px;';
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
					(ggSkinVars['MasterTimerVar'] >= 40)
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
					(ggSkinVars['MasterTimerVar'] >= 10)
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
			hs+='left : 117px;';
			hs+='position : absolute;';
			hs+='top : 119px;';
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
					(ggSkinVars['MasterTimerVar'] >= 10)
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
			hs+='pointer-events:none;';
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
			hs+='left : 125px;';
			hs+='position : absolute;';
			hs+='top : 129px;';
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
					(ggSkinVars['MasterTimerVar'] >= 13)
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