ace.define("ace/theme/pov",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-pov";
exports.cssText = ".ace-pov .ace_gutter {\
background: #ebebeb;\
color: #333\
}\
.ace-pov .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
.ace-pov .ace_content {\
background: url('https://cdn.discordapp.com/attachments/943865859473023066/995004133364989992/pov.png');\
}\
.ace-pov .ace_line {\
color: #EF4444\
}\
.ace-pov {\
background-color: #FFFFFF;\
color: #000000\
}\
.ace-pov .ace_cursor {\
color: #000000\
}\
.ace-pov .ace_marker-layer .ace_selection {\
background: #BDD5FC\
}\
.ace-pov.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
}\
.ace-pov .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0)\
}\
.ace-pov .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #BFBFBF\
}\
.ace-pov .ace_marker-layer .ace_active-line {\
background: #FFFBD1\
}\
.ace-pov .ace_gutter-active-line {\
background-color : #dcdcdc\
}\
.ace-pov .ace_marker-layer .ace_selected-word {\
border: 1px solid #BDD5FC\
}\
.ace-pov .ace_invisible {\
color: #BFBFBF\
}\
.ace-pov .ace_keyword,\
.ace-pov .ace_meta,\
.ace-pov .ace_support.ace_constant.ace_property-value {\
color: #AF956F\
}\
.ace-pov .ace_keyword.ace_operator {\
color: #484848\
}\
.ace-pov .ace_keyword.ace_other.ace_unit {\
color: #96DC5F\
}\
.ace-pov .ace_constant.ace_language {\
color: #39946A\
}\
.ace-pov .ace_constant.ace_numeric {\
color: #46A609\
}\
.ace-pov .ace_constant.ace_character.ace_entity {\
color: #BF78CC\
}\
.ace-pov .ace_invalid {\
background-color: #FF002A\
}\
.ace-pov .ace_fold {\
background-color: #AF956F;\
border-color: #000000\
}\
.ace-pov .ace_storage,\
.ace-pov .ace_support.ace_class,\
.ace-pov .ace_support.ace_function,\
.ace-pov .ace_support.ace_other,\
.ace-pov .ace_support.ace_type {\
color: #C52727\
}\
.ace-pov .ace_string {\
color: #5D90CD\
}\
.ace-pov .ace_comment {\
color: #BCC8BA\
}\
.ace-pov .ace_entity.ace_name.ace_tag,\
.ace-pov .ace_entity.ace_other.ace_attribute-name {\
color: #606060\
}\
.ace-pov .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});

