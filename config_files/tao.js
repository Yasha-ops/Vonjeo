ace.define("ace/theme/tao",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-tao";
exports.cssText = ".ace-tao .ace_gutter {\
background: #EBEBEB;\
color:rgba(255, 251, 209) \
}\
.ace-tao .ace_content {\
background: url('https://cdn.discordapp.com/attachments/988437608369623040/994898365437452398/tao.png');\
}\
.ace-tao .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
.ace-tao {\
background-color: #FFFFFF;\
color: #000000\
}\
.ace-tao .ace_cursor {\
color: #000000\
}\
.ace-tao .ace_marker-layer .ace_selection {\
background: #BDD5FC\
}\
.ace-tao.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
}\
.ace-tao .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0)\
}\
.ace-tao .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #BFBFBF\
}\
.ace-tao .ace_marker-layer .ace_active-line {\
background: #FFFBD1\
}\
.ace-tao .ace_gutter-active-line {\
background-color : #dcdcdc\
}\
.ace-tao .ace_marker-layer .ace_selected-word {\
border: 1px solid #BDD5FC\
}\
.ace-tao .ace_invisible {\
color: #BFBFBF\
}\
.ace-tao .ace_keyword,\
.ace-tao .ace_meta,\
.ace-tao .ace_support.ace_constant.ace_property-value {\
color: #AF956F\
}\
.ace-tao .ace_keyword.ace_operator {\
color: #484848\
}\
.ace-tao .ace_keyword.ace_other.ace_unit {\
color: #96DC5F\
}\
.ace-tao .ace_constant.ace_language {\
color: #39946A\
}\
.ace-tao .ace_constant.ace_numeric {\
color: #46A609\
}\
.ace-tao .ace_constant.ace_character.ace_entity {\
color: #BF78CC\
}\
.ace-tao .ace_invalid {\
background-color: #FF002A\
}\
.ace-tao .ace_fold {\
background-color: #AF956F;\
border-color: #000000\
}\
.ace-tao .ace_storage,\
.ace-tao .ace_support.ace_class,\
.ace-tao .ace_support.ace_function,\
.ace-tao .ace_support.ace_other,\
.ace-tao .ace_support.ace_type {\
color: #C52727\
}\
.ace-tao .ace_string {\
color: #5D90CD\
}\
.ace-tao .ace_comment {\
color: #BCC8BA\
}\
.ace-tao .ace_entity.ace_name.ace_tag,\
.ace-tao .ace_entity.ace_other.ace_attribute-name {\
color: #606060\
}\
.ace-tao .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y\
";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});