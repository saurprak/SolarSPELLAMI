// Garden Gnome Software - Skin
// Pano2VR 5.1 beta2/15706
// Filename: mobileNilpenaStart.ggsk
// Generated Thu Feb 23 13:24:49 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['viewmarker'] = false;
	ggSkinVars['IntroContVar'] = 0;
	ggSkinVars['IntroVideoVar'] = 0;
	ggSkinVars['IntroTimer'] = false;
	var me=this;
	var flag=false;
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
		this._intro_text_folder=document.createElement('div');
		this._intro_text_folder.ggId="Intro text folder";
		this._intro_text_folder.ggLeft=-86;
		this._intro_text_folder.ggTop=2;
		this._intro_text_folder.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._intro_text_folder.ggVisible=true;
		this._intro_text_folder.className='ggskin ggskin_container ';
		this._intro_text_folder.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -86px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
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
		me._intro_text_folder.ggCurrentLogicStateAlpha = -1;
		this._intro_text_folder.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(ggSkinVars['IntroTimer'] == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._intro_text_folder.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._intro_text_folder.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._intro_text_folder.style[domTransition]='opacity 2000ms ease 0ms, visibility 2000ms ease 0ms';
				if (me._intro_text_folder.ggCurrentLogicStateAlpha == 0) {
					me._intro_text_folder.style.visibility=me._intro_text_folder.ggVisible?'inherit':'hidden';
					me._intro_text_folder.style.opacity=1;
				}
				else {
					me._intro_text_folder.style.visibility="hidden";
					me._intro_text_folder.style.opacity=0;
				}
			}
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
				(ggSkinVars['IntroContVar'] == 1) || 
				(ggSkinVars['IntroContVar'] == 2) || 
				(ggSkinVars['IntroContVar'] == 3) || 
				(ggSkinVars['IntroContVar'] == 4)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['IntroContVar'] == 0)
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
		this._introcont4=document.createElement('div');
		this._introcont4.ggId="IntroCont4";
		this._introcont4.ggLeft=-67;
		this._introcont4.ggTop=-45;
		this._introcont4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introcont4.ggVisible=false;
		this._introcont4.className='ggskin ggskin_container ';
		this._introcont4.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : -45px;';
		hs+='visibility : hidden;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		this._introcont4.setAttribute('style',hs);
		this._introcont4.style[domTransform + 'Origin']='50% 50%';
		me._introcont4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._introcont4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._introcont4.ggCurrentLogicStateVisible = -1;
		this._introcont4.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['IntroContVar'] == 4)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['IntroContVar'] != 4)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._introcont4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._introcont4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._introcont4.style[domTransition]='';
				if (me._introcont4.ggCurrentLogicStateVisible == 0) {
					me._introcont4.style.visibility=(Number(me._introcont4.style.opacity)>0||!me._introcont4.style.opacity)?'inherit':'hidden';
					me._introcont4.ggVisible=true;
				}
				else if (me._introcont4.ggCurrentLogicStateVisible == 1) {
					me._introcont4.style.visibility="hidden";
					me._introcont4.ggVisible=false;
				}
				else {
					me._introcont4.style.visibility="hidden";
					me._introcont4.ggVisible=false;
				}
			}
		}
		this._introcont4.ggUpdatePosition=function (useTransition) {
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
		this._begin_button0=document.createElement('div');
		this._begin_button0__text=document.createElement('div');
		this._begin_button0.className='ggskin ggskin_textdiv';
		this._begin_button0.ggTextDiv=this._begin_button0__text;
		this._begin_button0.ggId="Begin button";
		this._begin_button0.ggLeft=-26;
		this._begin_button0.ggTop=31;
		this._begin_button0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._begin_button0.ggVisible=true;
		this._begin_button0.className='ggskin ggskin_text ';
		this._begin_button0.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : -26px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		this._begin_button0.setAttribute('style',hs);
		this._begin_button0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 70px;';
		hs+='height: 23px;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 6px 2px 6px 2px;';
		hs+='overflow: hidden;';
		this._begin_button0__text.setAttribute('style',hs);
		this._begin_button0__text.innerHTML="<font size=\"4\">BEGIN<\/font>";
		this._begin_button0.appendChild(this._begin_button0__text);
		me._begin_button0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._begin_button0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._begin_button0.onclick=function (e) {
			me.player.openUrl("..\/NilpenaGuidedSTD\/index.html","_self");
		}
		this._begin_button0.ggUpdatePosition=function (useTransition) {
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
		this._introcont4.appendChild(this._begin_button0);
		this._guided_intro_text=document.createElement('div');
		this._guided_intro_text__text=document.createElement('div');
		this._guided_intro_text.className='ggskin ggskin_textdiv';
		this._guided_intro_text.ggTextDiv=this._guided_intro_text__text;
		this._guided_intro_text.ggId="Guided intro text";
		this._guided_intro_text.ggLeft=-244;
		this._guided_intro_text.ggTop=-181;
		this._guided_intro_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._guided_intro_text.ggVisible=true;
		this._guided_intro_text.className='ggskin ggskin_text ';
		this._guided_intro_text.ggType='text';
		hs ='';
		hs+='height : 213px;';
		hs+='left : -244px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : -181px;';
		hs+='visibility : inherit;';
		hs+='width : 403px;';
		hs+='pointer-events:auto;';
		this._guided_intro_text.setAttribute('style',hs);
		this._guided_intro_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 403px;';
		hs+='height: 213px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: justify;';
		hs+='white-space: normal;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._guided_intro_text__text.setAttribute('style',hs);
		this._guided_intro_text__text.innerHTML="<font size=\"3\"><b>Guided tour<\/b><\/font><br><br\/>During your tour, you can choose how you interact with the screen by selecting either the <b>Click-n-Drag<\/b> icon or the <b>Gyro<\/b> icon that will appear in the right side of the screen.<br\/><font size=\"1\"><i>(Note: If you change modes, you may need to click the sound button to resume the audio.)<\/i><\/font><br\/><br\/>If a <b>VR Headset<\/b> icon appears on the screen, and you have a headset such as Google Cardboard, click on the icon, put on the headset, and use it to explore the area.<br\/>";
		this._guided_intro_text.appendChild(this._guided_intro_text__text);
		me._guided_intro_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._guided_intro_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._guided_intro_text.ggUpdatePosition=function (useTransition) {
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
		this._introcont4.appendChild(this._guided_intro_text);
		this._vrtextoptionyes=document.createElement('div');
		this._vrtextoptionyes__text=document.createElement('div');
		this._vrtextoptionyes.className='ggskin ggskin_textdiv';
		this._vrtextoptionyes.ggTextDiv=this._vrtextoptionyes__text;
		this._vrtextoptionyes.ggId="VRtextoptionYES";
		this._vrtextoptionyes.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6 };
		this._vrtextoptionyes.ggVisible=true;
		this._vrtextoptionyes.className='ggskin ggskin_text ';
		this._vrtextoptionyes.ggType='text';
		hs ='';
		hs+='height : 42px;';
		hs+='left : 224px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		this._vrtextoptionyes.setAttribute('style',hs);
		this._vrtextoptionyes.style[domTransform + 'Origin']='50% 50%';
		this._vrtextoptionyes.style[domTransform]=parameterToTransform(this._vrtextoptionyes.ggParameter);
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 124px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._vrtextoptionyes__text.setAttribute('style',hs);
		this._vrtextoptionyes__text.innerHTML="VR headset<br\/>such as Google Cardboard";
		this._vrtextoptionyes.appendChild(this._vrtextoptionyes__text);
		me._vrtextoptionyes.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vrtextoptionyes.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vrtextoptionyes.ggUpdatePosition=function (useTransition) {
		}
		this._introcont4.appendChild(this._vrtextoptionyes);
		this._image_1=document.createElement('div');
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.ggId="Image 1";
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image ';
		this._image_1.ggType='image';
		hs ='';
		hs+='height : 64px;';
		hs+='left : 237px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		this._image_1.setAttribute('style',hs);
		this._image_1.style[domTransform + 'Origin']='50% 100%';
		this._image_1.style[domTransform]=parameterToTransform(this._image_1.ggParameter);
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_1.ggUpdatePosition=function (useTransition) {
		}
		this._introcont4.appendChild(this._image_1);
		this._clickdrag_icon=document.createElement('div');
		this._clickdrag_icon__img=document.createElement('img');
		this._clickdrag_icon__img.className='ggskin ggskin_image';
		this._clickdrag_icon__img.setAttribute('src',basePath + 'images/clickdrag_icon.png');
		this._clickdrag_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._clickdrag_icon__img.className='ggskin ggskin_image';
		this._clickdrag_icon__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._clickdrag_icon__img);
		this._clickdrag_icon.appendChild(this._clickdrag_icon__img);
		this._clickdrag_icon.ggId="clickdrag icon";
		this._clickdrag_icon.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._clickdrag_icon.ggVisible=true;
		this._clickdrag_icon.className='ggskin ggskin_image ';
		this._clickdrag_icon.ggType='image';
		hs ='';
		hs+='height : 55px;';
		hs+='left : 229px;';
		hs+='position : absolute;';
		hs+='top : -111px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._clickdrag_icon.setAttribute('style',hs);
		this._clickdrag_icon.style[domTransform + 'Origin']='100% 100%';
		this._clickdrag_icon.style[domTransform]=parameterToTransform(this._clickdrag_icon.ggParameter);
		me._clickdrag_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._clickdrag_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._clickdrag_icon.ggUpdatePosition=function (useTransition) {
		}
		this._introcont4.appendChild(this._clickdrag_icon);
		this._gyro_icon=document.createElement('div');
		this._gyro_icon__img=document.createElement('img');
		this._gyro_icon__img.className='ggskin ggskin_image';
		this._gyro_icon__img.setAttribute('src',basePath + 'images/gyro_icon.png');
		this._gyro_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gyro_icon__img.className='ggskin ggskin_image';
		this._gyro_icon__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gyro_icon__img);
		this._gyro_icon.appendChild(this._gyro_icon__img);
		this._gyro_icon.ggId="gyro icon";
		this._gyro_icon.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._gyro_icon.ggVisible=true;
		this._gyro_icon.className='ggskin ggskin_image ';
		this._gyro_icon.ggType='image';
		hs ='';
		hs+='height : 55px;';
		hs+='left : 283px;';
		hs+='position : absolute;';
		hs+='top : -111px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._gyro_icon.setAttribute('style',hs);
		this._gyro_icon.style[domTransform + 'Origin']='0% 100%';
		this._gyro_icon.style[domTransform]=parameterToTransform(this._gyro_icon.ggParameter);
		me._gyro_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyro_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gyro_icon.ggUpdatePosition=function (useTransition) {
		}
		this._introcont4.appendChild(this._gyro_icon);
		this._soundicon=document.createElement('div');
		this._soundicon__img=document.createElement('img');
		this._soundicon__img.className='ggskin ggskin_image';
		this._soundicon__img.setAttribute('src',basePath + 'images/soundicon.png');
		this._soundicon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._soundicon__img.className='ggskin ggskin_image';
		this._soundicon__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._soundicon__img);
		this._soundicon.appendChild(this._soundicon__img);
		this._soundicon.ggId="soundicon";
		this._soundicon.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6 };
		this._soundicon.ggVisible=true;
		this._soundicon.className='ggskin ggskin_image ';
		this._soundicon.ggType='image';
		hs ='';
		hs+='height : 55px;';
		hs+='left : 256px;';
		hs+='position : absolute;';
		hs+='top : -62px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		this._soundicon.setAttribute('style',hs);
		this._soundicon.style[domTransform + 'Origin']='50% 100%';
		this._soundicon.style[domTransform]=parameterToTransform(this._soundicon.ggParameter);
		me._soundicon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._soundicon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._soundicon.ggUpdatePosition=function (useTransition) {
		}
		this._introcont4.appendChild(this._soundicon);
		this._intro_text_folder.appendChild(this._introcont4);
		this._introcont3=document.createElement('div');
		this._introcont3.ggId="IntroCont3";
		this._introcont3.ggLeft=-67;
		this._introcont3.ggTop=-45;
		this._introcont3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introcont3.ggVisible=false;
		this._introcont3.className='ggskin ggskin_container ';
		this._introcont3.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : -45px;';
		hs+='visibility : hidden;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		this._introcont3.setAttribute('style',hs);
		this._introcont3.style[domTransform + 'Origin']='50% 50%';
		me._introcont3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._introcont3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._introcont3.ggCurrentLogicStateVisible = -1;
		this._introcont3.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['IntroContVar'] == 3)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['IntroContVar'] != 3)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._introcont3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._introcont3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._introcont3.style[domTransition]='';
				if (me._introcont3.ggCurrentLogicStateVisible == 0) {
					me._introcont3.style.visibility=(Number(me._introcont3.style.opacity)>0||!me._introcont3.style.opacity)?'inherit':'hidden';
					me._introcont3.ggVisible=true;
				}
				else if (me._introcont3.ggCurrentLogicStateVisible == 1) {
					me._introcont3.style.visibility="hidden";
					me._introcont3.ggVisible=false;
				}
				else {
					me._introcont3.style.visibility="hidden";
					me._introcont3.ggVisible=false;
				}
			}
		}
		this._introcont3.ggUpdatePosition=function (useTransition) {
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
		this._intro_objectives=document.createElement('div');
		this._intro_objectives__text=document.createElement('div');
		this._intro_objectives.className='ggskin ggskin_textdiv';
		this._intro_objectives.ggTextDiv=this._intro_objectives__text;
		this._intro_objectives.ggId="Intro objectives";
		this._intro_objectives.ggLeft=-242;
		this._intro_objectives.ggTop=-163;
		this._intro_objectives.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._intro_objectives.ggVisible=true;
		this._intro_objectives.className='ggskin ggskin_text ';
		this._intro_objectives.ggType='text';
		hs ='';
		hs+='height : 221px;';
		hs+='left : -242px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : -163px;';
		hs+='visibility : inherit;';
		hs+='width : 494px;';
		hs+='pointer-events:auto;';
		this._intro_objectives.setAttribute('style',hs);
		this._intro_objectives.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 494px;';
		hs+='height: 221px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: justify;';
		hs+='white-space: normal;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._intro_objectives__text.setAttribute('style',hs);
		this._intro_objectives__text.innerHTML="<font size=\"4\"><b>EXPLORATION OBJECTIVES FOR NILPENA<\/b><\/font><br\/><br><br\/>1. Explore and identify the oldest complex animals.<br\/>2. Understand how early organisms were fossilized.<br\/>3. Examine the first animal communities.<br\/>4. Experience a 560 million-year-old ecosystem.<br\/><br\/>It's time to <b>\"Explore Your World\"!<\/b>";
		this._intro_objectives.appendChild(this._intro_objectives__text);
		me._intro_objectives.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._intro_objectives.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._intro_objectives.ggUpdatePosition=function (useTransition) {
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
		this._introcont3.appendChild(this._intro_objectives);
		this._begin_button=document.createElement('div');
		this._begin_button__text=document.createElement('div');
		this._begin_button.className='ggskin ggskin_textdiv';
		this._begin_button.ggTextDiv=this._begin_button__text;
		this._begin_button.ggId="Begin button";
		this._begin_button.ggLeft=-19;
		this._begin_button.ggTop=22;
		this._begin_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._begin_button.ggVisible=true;
		this._begin_button.className='ggskin ggskin_text ';
		this._begin_button.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : -19px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		this._begin_button.setAttribute('style',hs);
		this._begin_button.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 70px;';
		hs+='height: 23px;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 6px 2px 6px 2px;';
		hs+='overflow: hidden;';
		this._begin_button__text.setAttribute('style',hs);
		this._begin_button__text.innerHTML="<font size=\"4\">NEXT<\/font>";
		this._begin_button.appendChild(this._begin_button__text);
		me._begin_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._begin_button.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._begin_button.onclick=function (e) {
			ggSkinVars['IntroContVar'] = Number("0");
			ggSkinVars['IntroVideoVar'] = Number("1");
		}
		this._begin_button.ggUpdatePosition=function (useTransition) {
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
		this._introcont3.appendChild(this._begin_button);
		this._intro_text_folder.appendChild(this._introcont3);
		this._introcont2=document.createElement('div');
		this._introcont2.ggId="IntroCont2";
		this._introcont2.ggLeft=-67;
		this._introcont2.ggTop=-45;
		this._introcont2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introcont2.ggVisible=false;
		this._introcont2.className='ggskin ggskin_container ';
		this._introcont2.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : -45px;';
		hs+='visibility : hidden;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		this._introcont2.setAttribute('style',hs);
		this._introcont2.style[domTransform + 'Origin']='50% 50%';
		me._introcont2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._introcont2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._introcont2.ggCurrentLogicStateVisible = -1;
		this._introcont2.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['IntroContVar'] == 2)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['IntroContVar'] != 2)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._introcont2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._introcont2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._introcont2.style[domTransition]='';
				if (me._introcont2.ggCurrentLogicStateVisible == 0) {
					me._introcont2.style.visibility=(Number(me._introcont2.style.opacity)>0||!me._introcont2.style.opacity)?'inherit':'hidden';
					me._introcont2.ggVisible=true;
				}
				else if (me._introcont2.ggCurrentLogicStateVisible == 1) {
					me._introcont2.style.visibility="hidden";
					me._introcont2.ggVisible=false;
				}
				else {
					me._introcont2.style.visibility="hidden";
					me._introcont2.ggVisible=false;
				}
			}
		}
		this._introcont2.ggUpdatePosition=function (useTransition) {
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
		this._intro.ggTop=-83;
		this._intro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._intro.ggVisible=true;
		this._intro.className='ggskin ggskin_text ';
		this._intro.ggType='text';
		hs ='';
		hs+='height : 133px;';
		hs+='left : -239px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : -83px;';
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
		hs+='height: 133px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: justify;';
		hs+='white-space: normal;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._intro__text.setAttribute('style',hs);
		this._intro__text.innerHTML="<font size=\"4\"><b>Welcome to Nilpena!<\/b><\/font><br\/><br\/>Located in the Flinders Ranges of southern Australia and home to some of the oldest evidence of animal life on Earth.  Nilpena is a site within this mountain range made of layered sedimentary rocks where scientists from all over the world travel to study the fossils found here.  ";
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
		this._introcont2.appendChild(this._intro);
		this._nextbeginbutton0=document.createElement('div');
		this._nextbeginbutton0__text=document.createElement('div');
		this._nextbeginbutton0.className='ggskin ggskin_textdiv';
		this._nextbeginbutton0.ggTextDiv=this._nextbeginbutton0__text;
		this._nextbeginbutton0.ggId="Nextbeginbutton";
		this._nextbeginbutton0.ggLeft=175;
		this._nextbeginbutton0.ggTop=29;
		this._nextbeginbutton0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._nextbeginbutton0.ggVisible=true;
		this._nextbeginbutton0.className='ggskin ggskin_text ';
		this._nextbeginbutton0.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		this._nextbeginbutton0.setAttribute('style',hs);
		this._nextbeginbutton0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 70px;';
		hs+='height: 23px;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 6px 2px 6px 2px;';
		hs+='overflow: hidden;';
		this._nextbeginbutton0__text.setAttribute('style',hs);
		this._nextbeginbutton0__text.innerHTML="<font size=\"4\">NEXT<\/font>";
		this._nextbeginbutton0.appendChild(this._nextbeginbutton0__text);
		me._nextbeginbutton0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._nextbeginbutton0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._nextbeginbutton0.onclick=function (e) {
			ggSkinVars['IntroContVar'] = Number("3");
		}
		this._nextbeginbutton0.ggUpdatePosition=function (useTransition) {
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
		this._introcont2.appendChild(this._nextbeginbutton0);
		this._intro_text_folder.appendChild(this._introcont2);
		this._introcont1=document.createElement('div');
		this._introcont1.ggId="IntroCont1";
		this._introcont1.ggLeft=-67;
		this._introcont1.ggTop=-45;
		this._introcont1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introcont1.ggVisible=false;
		this._introcont1.className='ggskin ggskin_container ';
		this._introcont1.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : -45px;';
		hs+='visibility : hidden;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		this._introcont1.setAttribute('style',hs);
		this._introcont1.style[domTransform + 'Origin']='50% 50%';
		me._introcont1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._introcont1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._introcont1.ggCurrentLogicStateVisible = -1;
		this._introcont1.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['IntroContVar'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['IntroContVar'] != 1)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._introcont1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._introcont1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._introcont1.style[domTransition]='';
				if (me._introcont1.ggCurrentLogicStateVisible == 0) {
					me._introcont1.style.visibility=(Number(me._introcont1.style.opacity)>0||!me._introcont1.style.opacity)?'inherit':'hidden';
					me._introcont1.ggVisible=true;
				}
				else if (me._introcont1.ggCurrentLogicStateVisible == 1) {
					me._introcont1.style.visibility="hidden";
					me._introcont1.ggVisible=false;
				}
				else {
					me._introcont1.style.visibility="hidden";
					me._introcont1.ggVisible=false;
				}
			}
		}
		this._introcont1.ggUpdatePosition=function (useTransition) {
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
		this._nextbeginbutton=document.createElement('div');
		this._nextbeginbutton__text=document.createElement('div');
		this._nextbeginbutton.className='ggskin ggskin_textdiv';
		this._nextbeginbutton.ggTextDiv=this._nextbeginbutton__text;
		this._nextbeginbutton.ggId="Nextbeginbutton";
		this._nextbeginbutton.ggLeft=175;
		this._nextbeginbutton.ggTop=29;
		this._nextbeginbutton.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._nextbeginbutton.ggVisible=true;
		this._nextbeginbutton.className='ggskin ggskin_text ';
		this._nextbeginbutton.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		this._nextbeginbutton.setAttribute('style',hs);
		this._nextbeginbutton.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 70px;';
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
		this._nextbeginbutton__text.innerHTML="<font size=\"4\">NEXT<\/font>";
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
			ggSkinVars['IntroContVar'] = Number("2");
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
		this._introcont1.appendChild(this._nextbeginbutton);
		this._inst_rotate=document.createElement('div');
		this._inst_rotate__img=document.createElement('img');
		this._inst_rotate__img.className='ggskin ggskin_image';
		this._inst_rotate__img.setAttribute('src',basePath + 'images/inst_rotate.png');
		this._inst_rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._inst_rotate__img.className='ggskin ggskin_image';
		this._inst_rotate__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._inst_rotate__img);
		this._inst_rotate.appendChild(this._inst_rotate__img);
		this._inst_rotate.ggId="Inst rotate";
		this._inst_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._inst_rotate.ggVisible=true;
		this._inst_rotate.className='ggskin ggskin_image ';
		this._inst_rotate.ggType='image';
		hs ='';
		hs+='height : 61px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		hs+='pointer-events:auto;';
		this._inst_rotate.setAttribute('style',hs);
		this._inst_rotate.style[domTransform + 'Origin']='50% 50%';
		me._inst_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._inst_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._inst_rotate.ggUpdatePosition=function (useTransition) {
		}
		this._introcont1.appendChild(this._inst_rotate);
		this._intro_text_folder.appendChild(this._introcont1);
		this._eoa_animation=document.createElement('div');
		this._eoa_animation__img=document.createElement('img');
		this._eoa_animation__img.className='ggskin ggskin_external';
		this._eoa_animation__img.onload=function() {me._eoa_animation.ggUpdatePosition();}
		this._eoa_animation__img.setAttribute('src',basePath + 'media/Emergenceofanimal.gif');
		this._eoa_animation__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._eoa_animation__img);
		hs ='';
		this._eoa_animation.appendChild(this._eoa_animation__img);
		this._eoa_animation.ggId="EOA animation";
		this._eoa_animation.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._eoa_animation.ggVisible=true;
		this._eoa_animation.className='ggskin ggskin_external ';
		this._eoa_animation.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : -174px;';
		hs+='position : absolute;';
		hs+='top : -133px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		this._eoa_animation.setAttribute('style',hs);
		this._eoa_animation.style[domTransform + 'Origin']='50% 50%';
		me._eoa_animation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._eoa_animation.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._eoa_animation.ggCurrentLogicStateVisible = -1;
		this._eoa_animation.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['IntroContVar'] == 1) || 
				(ggSkinVars['IntroContVar'] == 2)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['IntroContVar'] != 1) || 
				(ggSkinVars['IntroContVar'] != 2)
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				(ggSkinVars['IntroContVar'] == 0)
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._eoa_animation.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._eoa_animation.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._eoa_animation.style[domTransition]='';
				if (me._eoa_animation.ggCurrentLogicStateVisible == 0) {
					me._eoa_animation.style.visibility=(Number(me._eoa_animation.style.opacity)>0||!me._eoa_animation.style.opacity)?'inherit':'hidden';
					me._eoa_animation.ggVisible=true;
				}
				else if (me._eoa_animation.ggCurrentLogicStateVisible == 1) {
					me._eoa_animation.style.visibility="hidden";
					me._eoa_animation.ggVisible=false;
				}
				else if (me._eoa_animation.ggCurrentLogicStateVisible == 2) {
					me._eoa_animation.style.visibility="hidden";
					me._eoa_animation.ggVisible=false;
				}
				else {
					me._eoa_animation.style.visibility=(Number(me._eoa_animation.style.opacity)>0||!me._eoa_animation.style.opacity)?'inherit':'hidden';
					me._eoa_animation.ggVisible=true;
				}
			}
		}
		this._eoa_animation.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._eoa_animation.clientWidth;
			var parentHeight = me._eoa_animation.clientHeight;
			var aspectRatioDiv = me._eoa_animation.clientWidth / me._eoa_animation.clientHeight;
			var aspectRatioImg = me._eoa_animation__img.naturalWidth / me._eoa_animation__img.naturalHeight;
			if (me._eoa_animation__img.naturalWidth < parentWidth) parentWidth = me._eoa_animation__img.naturalWidth;
			if (me._eoa_animation__img.naturalHeight < parentHeight) parentHeight = me._eoa_animation__img.naturalHeight;
			var currentWidth = me._eoa_animation__img.naturalWidth;
			var currentHeight = me._eoa_animation__img.naturalHeight;
			me._eoa_animation__img.setAttribute('style','position: absolute; left: 0px; top: 0px;-webkit-user-drag:none;pointer-events:none;');
		}
		this._intro_text_folder.appendChild(this._eoa_animation);
		this.divSkin.appendChild(this._intro_text_folder);
		this._introvideocont=document.createElement('div');
		this._introvideocont.ggId="IntroVideoCont";
		this._introvideocont.ggLeft=-90;
		this._introvideocont.ggTop=-60;
		this._introvideocont.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introvideocont.ggVisible=false;
		this._introvideocont.className='ggskin ggskin_container ';
		this._introvideocont.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : hidden;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		this._introvideocont.setAttribute('style',hs);
		this._introvideocont.style[domTransform + 'Origin']='50% 50%';
		me._introvideocont.ggIsActive=function() {
			return false;
		}
		me._introvideocont.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._introvideocont.ggCurrentLogicStateVisible = -1;
		this._introvideocont.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['IntroVideoVar'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['IntroVideoVar'] == 0)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._introvideocont.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._introvideocont.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._introvideocont.style[domTransition]='';
				if (me._introvideocont.ggCurrentLogicStateVisible == 0) {
					me._introvideocont.style.visibility=(Number(me._introvideocont.style.opacity)>0||!me._introvideocont.style.opacity)?'inherit':'hidden';
					me._introvideocont.ggVisible=true;
				}
				else if (me._introvideocont.ggCurrentLogicStateVisible == 1) {
					me._introvideocont.style.visibility="hidden";
					me._introvideocont.ggVisible=false;
				}
				else {
					me._introvideocont.style.visibility="hidden";
					me._introvideocont.ggVisible=false;
				}
			}
		}
		this._introvideocont.ggUpdatePosition=function (useTransition) {
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
		this._introvideoblackbox=document.createElement('div');
		this._introvideoblackbox.ggId="IntrovideoBlackbox";
		this._introvideoblackbox.ggLeft=-200;
		this._introvideoblackbox.ggTop=-122;
		this._introvideoblackbox.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introvideoblackbox.ggVisible=false;
		this._introvideoblackbox.className='ggskin ggskin_rectangle ';
		this._introvideoblackbox.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 245px;';
		hs+='left : -200px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -122px;';
		hs+='visibility : hidden;';
		hs+='width : 436px;';
		hs+='pointer-events:auto;';
		this._introvideoblackbox.setAttribute('style',hs);
		this._introvideoblackbox.style[domTransform + 'Origin']='50% 50%';
		me._introvideoblackbox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._introvideoblackbox.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._introvideoblackbox.ggCurrentLogicStateVisible = -1;
		this._introvideoblackbox.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['IntroVideoVar'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['IntroVideoVar'] == 0)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._introvideoblackbox.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._introvideoblackbox.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._introvideoblackbox.style[domTransition]='';
				if (me._introvideoblackbox.ggCurrentLogicStateVisible == 0) {
					me._introvideoblackbox.style.visibility=(Number(me._introvideoblackbox.style.opacity)>0||!me._introvideoblackbox.style.opacity)?'inherit':'hidden';
					me._introvideoblackbox.ggVisible=true;
				}
				else if (me._introvideoblackbox.ggCurrentLogicStateVisible == 1) {
					me._introvideoblackbox.style.visibility="hidden";
					me._introvideoblackbox.ggVisible=false;
				}
				else {
					me._introvideoblackbox.style.visibility="hidden";
					me._introvideoblackbox.ggVisible=false;
				}
			}
		}
		this._introvideoblackbox.ggUpdatePosition=function (useTransition) {
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
		this._introvideocont.appendChild(this._introvideoblackbox);
		this._loadingvideotext=document.createElement('div');
		this._loadingvideotext__text=document.createElement('div');
		this._loadingvideotext.className='ggskin ggskin_textdiv';
		this._loadingvideotext.ggTextDiv=this._loadingvideotext__text;
		this._loadingvideotext.ggId="LoadingvideoText";
		this._loadingvideotext.ggLeft=-124;
		this._loadingvideotext.ggTop=-75;
		this._loadingvideotext.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
		this._loadingvideotext.ggVisible=true;
		this._loadingvideotext.className='ggskin ggskin_text ';
		this._loadingvideotext.ggType='text';
		hs ='';
		hs+='height : 80px;';
		hs+='left : -124px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -75px;';
		hs+='visibility : inherit;';
		hs+='width : 287px;';
		hs+='pointer-events:auto;';
		this._loadingvideotext.setAttribute('style',hs);
		this._loadingvideotext.style[domTransform + 'Origin']='50% 50%';
		this._loadingvideotext.style[domTransform]=parameterToTransform(this._loadingvideotext.ggParameter);
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 287px;';
		hs+='height: 80px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(198,213,24,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingvideotext__text.setAttribute('style',hs);
		this._loadingvideotext__text.innerHTML="LOADING...";
		this._loadingvideotext.appendChild(this._loadingvideotext__text);
		me._loadingvideotext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingvideotext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingvideotext.ggUpdatePosition=function (useTransition) {
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
		this._introvideocont.appendChild(this._loadingvideotext);
		this._introvideo=document.createElement('div');
		this._introvideo.seekbars = [];
		this._introvideo.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._introvideo.seekbars.length; i++) {
					var seekbar = me.findElements(me._introvideo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._introvideo.hasChildNodes()) {
				me._introvideo.removeChild(me._introvideo.lastChild);
			}
			if (me._introvideo__vid) {
				me._introvideo__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				me._introvideo.ggVideoNotLoaded = true;
				return;
			}
			me._introvideo.ggVideoNotLoaded = false;
			me._introvideo__vid=document.createElement('video');
			me._introvideo__vid.className='ggskin ggskin_video';
			me._introvideo__vid.setAttribute('width', '100%');
			me._introvideo__vid.setAttribute('height', '100%');
			me._introvideo__vid.setAttribute('autoplay', '');
			me._introvideo__vid.setAttribute('controls', '');
			me._introvideo__source=document.createElement('source');
			me._introvideo__source.setAttribute('src', media);
			me._introvideo__vid.setAttribute('playsinline', 'playsinline');
			me._introvideo__vid.appendChild(me._introvideo__source);
			me._introvideo.appendChild(me._introvideo__vid);
			var videoEl = me.player.registerVideoElement('IntroVideo', me._introvideo__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._introvideo.ggVideoSource = media;
		}
		this._introvideo.ggId="IntroVideo";
		this._introvideo.ggLeft=-200;
		this._introvideo.ggTop=-122;
		this._introvideo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introvideo.ggVisible=false;
		this._introvideo.className='ggskin ggskin_video ';
		this._introvideo.ggType='video';
		hs ='';
		hs+='height : 246px;';
		hs+='left : -200px;';
		hs+='position : absolute;';
		hs+='top : -122px;';
		hs+='visibility : hidden;';
		hs+='width : 437px;';
		hs+='pointer-events:auto;';
		this._introvideo.setAttribute('style',hs);
		this._introvideo.style[domTransform + 'Origin']='50% 50%';
		me._introvideo.ggIsActive=function() {
			if (me._introvideo__vid != null) {
				return (me._introvideo__vid.currentTime > 0 && me._introvideo__vid.paused == false && me._introvideo__vid.ended == false);
			} else {
				return false;
			}
		}
		me._introvideo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._introvideo.ggCurrentLogicStateVisible = -1;
		this._introvideo.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['IntroVideoVar'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['IntroVideoVar'] == 0)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._introvideo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._introvideo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._introvideo.style[domTransition]='';
				if (me._introvideo.ggCurrentLogicStateVisible == 0) {
					me._introvideo.style.visibility=(Number(me._introvideo.style.opacity)>0||!me._introvideo.style.opacity)?'inherit':'hidden';
					if (me._introvideo.ggVideoNotLoaded) {
						me._introvideo.ggInitMedia(me._introvideo.ggVideoSource);
					}
					me._introvideo.ggVisible=true;
				}
				else if (me._introvideo.ggCurrentLogicStateVisible == 1) {
					me._introvideo.style.visibility="hidden";
					me._introvideo.ggInitMedia('');
					me._introvideo.ggVisible=false;
				}
				else {
					me._introvideo.style.visibility="hidden";
					me._introvideo.ggInitMedia('');
					me._introvideo.ggVisible=false;
				}
			}
		}
		this._introvideo.ggUpdatePosition=function (useTransition) {
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
		this._introvideocont.appendChild(this._introvideo);
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
		this._introvideox.ggLeft=-196;
		this._introvideox.ggTop=-118;
		this._introvideox.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._introvideox.ggVisible=false;
		this._introvideox.className='ggskin ggskin_image ';
		this._introvideox.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -196px;';
		hs+='position : absolute;';
		hs+='top : -118px;';
		hs+='visibility : hidden;';
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
			ggSkinVars['IntroVideoVar'] = Number("0");
			ggSkinVars['IntroContVar'] = Number("4");
		}
		me._introvideox.ggCurrentLogicStateVisible = -1;
		this._introvideox.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['IntroVideoVar'] == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(ggSkinVars['IntroVideoVar'] == 0)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._introvideox.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._introvideox.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._introvideox.style[domTransition]='';
				if (me._introvideox.ggCurrentLogicStateVisible == 0) {
					me._introvideox.style.visibility=(Number(me._introvideox.style.opacity)>0||!me._introvideox.style.opacity)?'inherit':'hidden';
					me._introvideox.ggVisible=true;
				}
				else if (me._introvideox.ggCurrentLogicStateVisible == 1) {
					me._introvideox.style.visibility="hidden";
					me._introvideox.ggVisible=false;
				}
				else {
					me._introvideox.style.visibility="hidden";
					me._introvideox.ggVisible=false;
				}
			}
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
		this._introvideocont.appendChild(this._introvideox);
		this.divSkin.appendChild(this._introvideocont);
		this._loading_bar=document.createElement('div');
		this._loading_bar.ggId="Loading Bar";
		this._loading_bar.ggLeft=-192;
		this._loading_bar.ggTop=-54;
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
		hs+='top : -54px;';
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
		this._timer_1=document.createElement('div');
		this._timer_1.ggTimestamp=this.ggCurrentTime;
		this._timer_1.ggLastIsActive=true;
		this._timer_1.ggTimeout=3600000;
		this._timer_1.ggId="Timer 1";
		this._timer_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._timer_1.ggVisible=true;
		this._timer_1.className='ggskin ggskin_timer ';
		this._timer_1.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 774px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		this._timer_1.setAttribute('style',hs);
		this._timer_1.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp + me._timer_1.ggTimeout) >= me.ggCurrentTime;
		}
		me._timer_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._timer_1.ggDeactivate=function () {
			ggSkinVars['IntroTimer'] = true;
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		this._timer_1.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me._timer_1.ggIsActive() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style[domTransition]='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		this._timer_1.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._timer_1);
		ggSkinVars['IntroContVar'] = Number("1");
		me._introvideo.ggVideoSource = 'media/NilpenaIntro.mp4';
		me._introvideo.ggVideoNotLoaded = true;
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
			me._timer_1.ggTimestamp=me.ggCurrentTime;
			me._timer_1.ggTimeout=2000;
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
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._intro_text_folder.ggUpdateConditionTimer();
		me._introwhitebox1.ggUpdateConditionTimer();
		me._introcont4.ggUpdateConditionTimer();
		me._introcont3.ggUpdateConditionTimer();
		me._introcont2.ggUpdateConditionTimer();
		me._introcont1.ggUpdateConditionTimer();
		me._eoa_animation.ggUpdateConditionTimer();
		me._introvideocont.ggUpdateConditionTimer();
		me._introvideoblackbox.ggUpdateConditionTimer();
		me._introvideo.ggUpdateConditionTimer();
		me._introvideox.ggUpdateConditionTimer();
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
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
			} else {
				ggSkinVars['IntroTimer'] = true;
			}
		}
		me._timer_1.ggUpdateConditionTimer();
	};
	this.addSkin();
};