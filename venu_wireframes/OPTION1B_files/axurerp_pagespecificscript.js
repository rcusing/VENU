
var PageName = 'OPTION1B';
var PageId = 'c1ae3ae7e6694f1e8e02284780f40451'
var PageUrl = 'OPTION1B.html'
document.title = 'OPTION1B';
var PageNotes = 
{
"pageName":"OPTION1B",
"showNotesNames":"False",
"Default":"<p style=\"text-align:left;\"><span style=\"\">pros: <\/span><\/p>"}
var $OnLoadVariable = '';

var $clicky = '';

var $clicketed = '';

var $moved = '';

var $moved2 = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&clicky=' + encodeURIComponent($clicky) + '&clicketed=' + encodeURIComponent($clicketed) + '&moved=' + encodeURIComponent($moved) + '&moved2=' + encodeURIComponent($moved2) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[clicky\]\]/g, $clicky);
  value = value.replace(/\[\[clicketed\]\]/g, $clicketed);
  value = value.replace(/\[\[moved\]\]/g, $moved);
  value = value.replace(/\[\[moved2\]\]/g, $moved2);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '29');
  value = value.replace(/\[\[GenMonth\]\]/g, '2');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'February');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Wednesday');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

if (bIE) document.getElementById('u78').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u78'); });
else {
    document.getElementById('u78').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u78'); }, true);
    document.getElementById('u78').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u78'); }, true);
}

widgetIdToDragFunction['u78'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u78',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

SetGlobalVariableValue('$moved2', 'true');

}

}
if (bIE) document.getElementById('u70').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u70'); });
else {
    document.getElementById('u70').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u70'); }, true);
    document.getElementById('u70').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u70'); }, true);
}

widgetIdToDragFunction['u70'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u70',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

SetGlobalVariableValue('$moved', 'true');

}

}
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u51 = document.getElementById('u51');

var u25 = document.getElementById('u25');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u55 = document.getElementById('u55');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u48','hidden','none',500);

SetWidgetRichText('u21', '<p style="text-align:left;"><span style="font-family:Arial;font-size:40px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">event details. bam.</span></p>');

	SetPanelVisibility('u2','','none',500);

}

}
gv_vAlignTable['u77'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u23 = document.getElementById('u23');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u53 = document.getElementById('u53');

var u87 = document.getElementById('u87');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u27 = document.getElementById('u27');

var u7 = document.getElementById('u7');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{
windowEvent = e;


if (true) {

SetWidgetRichText('u21', '<p style="text-align:left;"><span style="font-family:Arial;font-size:40px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">MOAR</span></p>');

	SetPanelVisibility('u48','hidden','none',500);

	SetPanelVisibility('u2','','none',500);

}

}
gv_vAlignTable['u89'] = 'top';
var u34 = document.getElementById('u34');

var u17 = document.getElementById('u17');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u19 = document.getElementById('u19');

var u49 = document.getElementById('u49');

var u79 = document.getElementById('u79');

var u81 = document.getElementById('u81');

var u85 = document.getElementById('u85');

var u11 = document.getElementById('u11');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u71 = document.getElementById('u71');

var u15 = document.getElementById('u15');

var u45 = document.getElementById('u45');

var u36 = document.getElementById('u36');

var u75 = document.getElementById('u75');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u2 = document.getElementById('u2');

var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u78','toggle','none',500);

}

}

var u83 = document.getElementById('u83');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u13 = document.getElementById('u13');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');

var u47 = document.getElementById('u47');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$clicketed')) != ('true')) {

SetGlobalVariableValue('$clicky', 'true');

	SetPanelVisibility('u70','','none',500);

SetGlobalVariableValue('$clicketed', 'true');

}
else
if ((GetGlobalVariableValue('$clicketed')) == ('true')) {

	SetPanelVisibility('u70','hidden','none',500);

SetGlobalVariableValue('$clicketed', 'false');

SetGlobalVariableValue('$clicky', 'false');

}
else
if ((GetGlobalVariableValue('$moved')) == ('true')) {

	SetPanelVisibility('u70','hidden','none',500);

	MoveWidgetTo('u70', 360,510,'none',500);

SetGlobalVariableValue('$clicketed', 'false');

SetGlobalVariableValue('$clicky', 'false');

}

}

if (bIE) u90.attachEvent("onmouseover", MouseOveru90);
else u90.addEventListener("mouseover", MouseOveru90, true);
function MouseOveru90(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u90',e)) return;
if (true) {

	SetPanelVisibility('u70','','none',500);

}

}

if (bIE) u90.attachEvent("onmouseout", MouseOutu90);
else u90.addEventListener("mouseout", MouseOutu90, true);
function MouseOutu90(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u90',e)) return;
if (((GetGlobalVariableValue('$clicky')) != ('true')) && ((GetWidgetVisibility('u70')) == (true))) {

	SetPanelVisibility('u70','hidden','none',500);

}

}

var u73 = document.getElementById('u73');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u78 = document.getElementById('u78');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u70','hidden','none',500);

	SetPanelVisibility('u78','hidden','none',500);

	MoveWidgetTo('u70', 360,510,'none',500);

	MoveWidgetTo('u78', 730,360,'none',500);

SetGlobalVariableValue('$clicky', 'false');

}

}

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u61 = document.getElementById('u61');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u35 = document.getElementById('u35');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u65 = document.getElementById('u65');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u5 = document.getElementById('u5');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u9 = document.getElementById('u9');

var u42 = document.getElementById('u42');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u63 = document.getElementById('u63');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u48 = document.getElementById('u48');

var u67 = document.getElementById('u67');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u57 = document.getElementById('u57');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u40 = document.getElementById('u40');

var u70 = document.getElementById('u70');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u44 = document.getElementById('u44');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u29 = document.getElementById('u29');

var u59 = document.getElementById('u59');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
if (window.OnLoad) OnLoad();
