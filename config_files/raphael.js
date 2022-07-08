ace.define("ace/theme/raphael",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-raphael";
exports.cssText = ".ace-raphael .ace_gutter {\
background: #2F3129;\
color: #8F908A\
}\
.ace-raphael .ace_content {\
background: url('https://cdn.discordapp.com/attachments/988437608369623040/994908477594026045/raphael.png');\
}\
.ace-raphael .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace-raphael .ace_line {\
color: #EF4444\
}\
.ace-raphael {\
background-color: #272822;\
color: #F8F8F2\
}\
.ace-raphael .ace_cursor {\
color: #F8F8F0\
}\
.ace-raphael .ace_marker-layer .ace_selection {\
background: #49483E\
}\
.ace-raphael.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-raphael .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-raphael .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-raphael .ace_marker-layer .ace_active-line {\
background: #202020\
}\
.ace-raphael .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-raphael .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-raphael .ace_invisible {\
color: #52524d\
}\
.ace-raphael .ace_entity.ace_name.ace_tag,\
.ace-raphael .ace_keyword,\
.ace-raphael .ace_meta.ace_tag,\
.ace-raphael .ace_storage {\
color: #F92672\
}\
.ace-raphael .ace_punctuation,\
.ace-raphael .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-raphael .ace_constant.ace_character,\
.ace-raphael .ace_constant.ace_language,\
.ace-raphael .ace_constant.ace_numeric,\
.ace-raphael .ace_constant.ace_other {\
color: #AE81FF\
}\
.ace-raphael .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-raphael .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-raphael .ace_support.ace_constant,\
.ace-raphael .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-raphael .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-raphael .ace_storage.ace_type,\
.ace-raphael .ace_support.ace_class,\
.ace-raphael .ace_support.ace_type {\
font-style: italic;\
color: #66D9EF\
}\
.ace-raphael .ace_entity.ace_name.ace_function,\
.ace-raphael .ace_entity.ace_other,\
.ace-raphael .ace_entity.ace_other.ace_attribute-name,\
.ace-raphael .ace_variable {\
color: #A6E22E\
}\
.ace-raphael .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-raphael .ace_string {\
color: #E6DB74\
}\
.ace-raphael .ace_comment {\
color: #75715E\
}\
.ace-raphael .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});