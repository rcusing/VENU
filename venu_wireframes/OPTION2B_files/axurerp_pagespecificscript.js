
var PageName = 'OPTION2B';
var PageId = '341d9f6e6ad5479180c130dad4045508'
var PageUrl = 'OPTION2B.html'
document.title = 'OPTION2B';
var PageNotes = 
{
"pageName":"OPTION2B",
"showNotesNames":"False",
"Default":"<p style=\"text-align:left;\"><span style=\"\">-have to limit how much event info boxes can be moved<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">-keep the venue info shown when mouse hovers over into the box<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">pros: <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">-interactivity<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">-thus more user control<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">-more info in one place: can compare multiple venues<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">-more distribution of information<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">cons: <\/span><\/p><p style=\"text-align:left;\"><span style=\"\">-more challenging map fxns<\/span><\/p>"}
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

if (bIE) document.getElementById('u38').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u38'); });
else {
    document.getElementById('u38').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u38'); }, true);
    document.getElementById('u38').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u38'); }, true);
}

widgetIdToDragFunction['u38'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u38',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

SetGlobalVariableValue('$moved2', 'true');

}

}
if (bIE) document.getElementById('u30').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u30'); });
else {
    document.getElementById('u30').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u30'); }, true);
    document.getElementById('u30').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u30'); }, true);
}

widgetIdToDragFunction['u30'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u30',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

SetGlobalVariableValue('$moved', 'true');

}

}
var u21 = document.getElementById('u21');

var u51 = document.getElementById('u51');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u55 = document.getElementById('u55');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u31 = document.getElementById('u31');

var u38 = document.getElementById('u38');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u23 = document.getElementById('u23');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u53 = document.getElementById('u53');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u27 = document.getElementById('u27');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u30 = document.getElementById('u30');

var u8 = document.getElementById('u8');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u19 = document.getElementById('u19');

var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{
windowEvent = e;


if (true) {

SetWidgetRichText('u69', '<p style="text-align:left;"><span style="font-family:Arial;font-size:40px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">venu2 mang</span></p>');

	SetPanelVisibility('u27','hidden','none',500);

	SetPanelVisibility('u50','','none',500);

}

}
gv_vAlignTable['u49'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u41 = document.getElementById('u41');

var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$clicketed')) != ('true')) {

SetGlobalVariableValue('$clicky', 'true');

	SetPanelVisibility('u30','','none',500);

SetGlobalVariableValue('$clicketed', 'true');

}
else
if ((GetGlobalVariableValue('$clicketed')) == ('true')) {

	SetPanelVisibility('u30','hidden','none',500);

SetGlobalVariableValue('$clicketed', 'false');

SetGlobalVariableValue('$clicky', 'false');

}
else
if ((GetGlobalVariableValue('$moved')) == ('true')) {

	SetPanelVisibility('u30','hidden','none',500);

	MoveWidgetTo('u30', 360,510,'none',500);

SetGlobalVariableValue('$clicketed', 'false');

SetGlobalVariableValue('$clicky', 'false');

}

}

if (bIE) u71.attachEvent("onmouseover", MouseOveru71);
else u71.addEventListener("mouseover", MouseOveru71, true);
function MouseOveru71(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u71',e)) return;
if (true) {

	SetPanelVisibility('u30','','none',500);

}

}

if (bIE) u71.attachEvent("onmouseout", MouseOutu71);
else u71.addEventListener("mouseout", MouseOutu71, true);
function MouseOutu71(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u71',e)) return;
if (((GetGlobalVariableValue('$clicky')) != ('true')) && ((GetWidgetVisibility('u30')) == (true))) {

	SetPanelVisibility('u30','hidden','none',500);

}

}

var u15 = document.getElementById('u15');

var u45 = document.getElementById('u45');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u30','hidden','none',500);

	SetPanelVisibility('u38','hidden','none',500);

	MoveWidgetTo('u30', 360,510,'none',500);

	MoveWidgetTo('u38', 730,360,'none',500);

SetGlobalVariableValue('$clicky', 'false');

}

}

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u27','hidden','none',500);

SetWidgetRichText('u69', '<p style="text-align:left;"><span style="font-family:Arial;font-size:40px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">venu1</span></p>');

	SetPanelVisibility('u50','','none',500);

}

}
gv_vAlignTable['u37'] = 'top';
var u2 = document.getElementById('u2');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u13 = document.getElementById('u13');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u43 = document.getElementById('u43');

var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u47 = document.getElementById('u47');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u38','toggle','none',500);

}

}

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u50 = document.getElementById('u50');

var u28 = document.getElementById('u28');

var u24 = document.getElementById('u24');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u39 = document.getElementById('u39');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u4 = document.getElementById('u4');

var u6 = document.getElementById('u6');

var u61 = document.getElementById('u61');

var u35 = document.getElementById('u35');

var u26 = document.getElementById('u26');

var u65 = document.getElementById('u65');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u33 = document.getElementById('u33');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u63 = document.getElementById('u63');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u67 = document.getElementById('u67');

var u57 = document.getElementById('u57');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u14 = document.getElementById('u14');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u59 = document.getElementById('u59');

if (window.OnLoad) OnLoad();
