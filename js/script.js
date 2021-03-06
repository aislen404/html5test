// JavaScript Document

audioBasic = function () {
	this.value = !!document.createElement('audio').canPlayType;
};
audioMP3 = function () {
	var a = document.createElement('audio');
	this.value = !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
};
audioVorbis = function () {
	var a = document.createElement('audio');
	this.value = !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
};
audioWAV = function () {
	var a = document.createElement('audio');
	this.value = !!(a.canPlayType && a.canPlayType('audio/wav; codecs="1"').replace(/no/, ''));
};
audioAAC = function () {
	var a = document.createElement('audio');
	this.value = !!(a.canPlayType && a.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, ''));
};
canvasBasic = function (){
	this.value = !!document.createElement('canvas').getContext;
};
canvasTextAPI=function (){
	var c = document.createElement('canvas');
	this.value = c.getContext && typeof c.getContext('2d').fillText == 'function';
};
command = function (){
	this.value = 'type' in document.createElement('command');
};
datalist = function (){
	this.value = 'options' in document.createElement('datalist');
};
details = function (){
	this.value = 'open' in document.createElement('details');
};
form = function (){
	this.value = 'noValidate' in document.createElement('form');
};
iframeSandbox = function (){
	this.value = 'sandbox' in document.createElement('iframe');
};
iframeSrcdoc = function (){
	this.value = 'srcdoc' in document.createElement('iframe');
};
inputAutofocus = function (){
	this.value = 'autofocus' in document.createElement('input');
};
inputPlaceholder = function (){
	this.value = 'placeholder' in document.createElement('input');
};
textareaPlaceholder = function (){
	this.value = 'placeholder' in document.createElement('textarea');
};
inputTypeColor = function (){
	this.value = IsInputTypeSupported('color');
};
inputTypeEmail = function (){
	this.value = IsInputTypeSupported('email');
};
inputTypeNumber = function (){
	this.value = IsInputTypeSupported('number');
};
inputTypeRange = function (){
	this.value = IsInputTypeSupported('range');
};
inputTypeSsearch = function (){
	this.value = IsInputTypeSupported('search');
};
inputTypeTel = function (){
	this.value = IsInputTypeSupported('tel');
};
inputTypeUrl = function (){
	this.value = IsInputTypeSupported('url');
};
inputTypeDate = function (){
	this.value = IsInputTypeSupported('date');
};
inputTypeTime = function (){
	this.value = IsInputTypeSupported('time');
};
inputTypeDatetime = function (){
	this.value = IsInputTypeSupported('datetime');
};
inputTypeDatetimeLocal = function (){
	this.value = IsInputTypeSupported('datetime-local');
};
inputTypeMonth = function (){
	this.value = IsInputTypeSupported('month');
};
inputTypeWeek = function (){
	this.value = IsInputTypeSupported('week');
};
meter = function (){
	this.value = 'value' in document.createElement('meter');
};
output = function (){
	this.value = 'value' in document.createElement('output');
};
progress = function (){
	this.value = 'value' in document.createElement('progress');
};
time = function (){
	this.value = 'datetime' in document.createElement('time');
};
videoBasic = function (){
	this.value = !!document.createElement('video').canPlayType;
};
videoCaptions =function (){
	this.value = 'src' in document.createElement('track');
};
videoPoster = function (){
	this.value = 'poster' in document.createElement('video');
};
videoWebM = function (){
	var v = document.createElement('video');
	this.value = !!(v.canPlayType && v.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ''));
};
videoH264 = function (){
	var v = document.createElement('video');
	this.value = !!(v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ''));
};
videoTheora = function (){
	var v = document.createElement('video');
	this.value = !!(v.canPlayType && v.canPlayType('video/ogg; codecs="theora"').replace(/no/, ''));
};
contentEditable = function (){
	this.value = 'isContentEditable' in document.createElement('span');
};
crossDocumentMessaging = function (){ 
	this.value = !!window.postMessage;
};
dragAndDrop = function (){
	this.value = 'draggable' in document.createElement('span');
};
fileAPI = function (){
	this.value = typeof FileReader != 'undefined';
};
geolocation = function (){
	this.value = !!navigator.geolocation;
};
history_f = function (){
	this.value = !!(window.history && window.history.pushState);
};
localStorage_f = function (){
	try {
	  this.value = 'localStorage' in window && window['localStorage'] !== null;
	} catch(e) {
	  this.value = false;
	}
};
microdata = function (){
	this.value = !!document.getItems;
};
offlineWebApplications = function (){
	this.value = !!window.applicationCache;
};
serverSentEvents = function (){
	return typeof EventSource !== 'undefined';
};
sessionStorage_f = function (){
	try {
	  this.value = 'sessionStorage' in window && window['sessionStorage'] !== null;
	} catch(e) {
	  this.value = false;
	}
};
SVGBasic = function (){
	this.value = !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
};
SVGTextHtml = function (){
	var e = document.createElement('div');
	e.innerHTML = '<svg></svg>';
	this.value = !!(window.SVGSVGElement && e.firstChild instanceof window.SVGSVGElement);
};
undo = function (){
	this.value = typeof UndoManager !== 'undefined';
};
IndexedDB = function (){
	this.value = !!window.indexedDB;
};
webSockets = function (){
	this.value = !!window.WebSocket;
};
webSQLDatabase = function (){
	this.value = !!window.openDatabase;
};
webWorkers = function (){
	this.value = !!window.Worker;
};
widgets = function (){
	this.value = typeof widget !== 'undefined';
};
XMLHttpRequestCrossDomain = function (){
	this.value = "withCredentials" in new XMLHttpRequest;
};
XMLHttpRequestSendAsFormData  = function (){
	this.value = !!window.FormData;
};
XMLHttpRequestUploadProgressEvents = function (){
	this.value = "upload" in new XMLHttpRequest;
};

function IsInputTypeSupported(typeName) {
    var input = document.createElement("input");
    input.setAttribute("type", typeName);
    var val = (input.type !== "text");
    delete input;
    return val;
}
