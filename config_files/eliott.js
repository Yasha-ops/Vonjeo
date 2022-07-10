ace.define("ace/theme/eliott",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-eliott";
exports.cssText = ".ace-eliott .ace_gutter {\
background: #3b3b3b;\
color: rgb(153,153,153)\
}\
.ace-eliott .ace_content {\
background: url('https://cdn.discordapp.com/attachments/988437608369623040/994970977710637178/eliott.png');\
}\
.ace-eliott .ace_print-margin {\
width: 1px;\
background: #3b3b3b\
}\
.ace-eliott .ace_line {\
color: #000000\
}\
.ace-eliott {\
background-color: #323232;\
color: #FFFFFF\
}\
.ace-eliott .ace_cursor {\
color: #91FF00\
}\
.ace-eliott .ace_marker-layer .ace_selection {\
background: rgba(90, 100, 126, 0.88)\
}\
.ace-eliott.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #323232;\
}\
.ace-eliott .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-eliott .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #404040\
}\
.ace-eliott .ace_marker-layer .ace_active-line {\
background: #353637\
}\
.ace-eliott .ace_gutter-active-line {\
background-color: #353637\
}\
.ace-eliott .ace_marker-layer .ace_selected-word {\
border: 1px solid rgba(90, 100, 126, 0.88)\
}\
.ace-eliott .ace_invisible {\
color: #404040\
}\
.ace-eliott .ace_keyword,\
.ace-eliott .ace_meta {\
color: #CC7833\
}\
.ace-eliott .ace_constant,\
.ace-eliott .ace_constant.ace_character,\
.ace-eliott .ace_constant.ace_character.ace_escape,\
.ace-eliott .ace_constant.ace_other,\
.ace-eliott .ace_support.ace_constant {\
color: #6C99BB\
}\
.ace-eliott .ace_invalid {\
color: #FFFFFF;\
background-color: #FF0000\
}\
.ace-eliott .ace_fold {\
background-color: #CC7833;\
border-color: #FFFFFF\
}\
.ace-eliott .ace_support.ace_function {\
color: #B83426\
}\
.ace-eliott .ace_variable.ace_parameter {\
font-style: italic\
}\
.ace-eliott .ace_string {\
color: #A5C261\
}\
.ace-eliott .ace_string.ace_regexp {\
color: #CCCC33\
}\
.ace-eliott .ace_comment {\
font-style: italic;\
color: #BC9458\
}\
.ace-eliott .ace_meta.ace_tag {\
color: #FFE5BB\
}\
.ace-eliott .ace_entity.ace_name {\
color: #FFC66D\
}\
.ace-eliott .ace_collab.ace_user1 {\
color: #323232;\
background-color: #FFF980\
}\
.ace-eliott .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMwMjLyZYiPj/8PAAreAwAI1+g0AAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});

