ace.define("ace/theme/sorcier",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-sorcier";
exports.cssText = ".ace-sorcier .ace_gutter {\
background: #EBEBEB;\
color:rgba(255, 251, 209) \
}\
.ace-sorcier .ace_content {\
background: url('https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dd954a1b3a4ba5ac93f8a6e58ef6e5b7c798e0e156af9991116dd2caba18837b._RI_V_TTW_.jpg');\
}\
.ace-sorcier .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
.ace-sorcier {\
background-color: #FFFFFF;\
color: #000000\
}\
.ace-sorcier .ace_cursor {\
color: #CCC9A7\
}\
.ace-clouds .ace_marker-layer .ace_selection {\
background: #BDD5FC\
}\
.ace-clouds.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
}\
.ace-sorcier .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0)\
}\
.ace-sorcier .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #81aac1\
}\
.ace-sorcier .ace_marker-layer .ace_active-line {\
background: #FFFBD1\
}\
.ace-sorcier .ace_gutter-active-line {\
background-color :#DCDCDC\
}\
.ace-sorcier .ace_marker-layer .ace_selected-word {\
border: 1px solid #81aac1\
}\
.ace-sorcier .ace_invisible {\
color: #81aac1\
}\
.ace-clouds .ace_keyword,\
.ace-clouds .ace_meta,\
.ace-clouds .ace_support.ace_constant.ace_property-value {\
color: #AF956F\
}\
.ace-clouds .ace_keyword.ace_operator {\
color: #484848\
}\
.ace-clouds .ace_keyword.ace_other.ace_unit {\
color: #96DC5F\
}\
.ace-clouds .ace_constant.ace_language {\
color: #39946A\
}\
.ace-clouds .ace_constant.ace_numeric {\
color: #46A609\
}\
.ace-clouds .ace_constant.ace_character.ace_entity {\
color: #BF78CC\
}\
.ace-clouds .ace_fold {\
background-color: #AF956F;\
border-color: #000000\
}\
.ace-clouds .ace_invalid {\
background-color: #FF002A\
}\
.ace-clouds .ace_storage,\
.ace-clouds .ace_support.ace_class,\
.ace-clouds .ace_support.ace_function,\
.ace-clouds .ace_support.ace_other,\
.ace-clouds .ace_support.ace_type {\
color: #C52727\
}\
.ace-sorcier .ace_string {\
color: #5D90CD\
}\
.ace-sorcier .ace_comment {\
font-style: italic;\
color: #BCC8BA\
}\
.ace-sorcier .ace_heading,\
.ace-sorcier .ace_markup.ace_heading {\
color: #000000\
}\
.ace-sorcier .ace_variable {\
color: #C52727\
}\
.ace-sorcier .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYLh/5+x/AAizA4hxNNsZAAAAAElFTkSuQmCC) right repeat-y\
}\
";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
