ace.define("ace/theme/karim",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

    exports.isDark = true;
    exports.cssClass = "ace-karim";
    exports.cssText = ".ace-karim .ace_gutter {\
    background: #011e3a;\
    color: rgb(128,145,160)\
    }\
    .ace-karim .ace_content {\
    background: url('https://cdn.discordapp.com/attachments/988437608369623040/994904782957449226/karim.png');\
    }\
    .ace-karim .ace_line {\
    color: #EF4444\
    }\
    .ace-karim .ace_print-margin {\
    width: 1px;\
    background: #555555\
    }\
    .ace-karim {\
    background-color: #002240;\
    color: #FFFFFF\
    }\
    .ace-karim .ace_cursor {\
    color: #FFFFFF\
    }\
    .ace-karim .ace_marker-layer .ace_selection {\
    background: rgba(179, 101, 57, 0.75)\
    }\
    .ace-karim.ace_multiselect .ace_selection.ace_start {\
    box-shadow: 0 0 3px 0px #002240;\
    }\
    .ace-karim .ace_marker-layer .ace_step {\
    background: rgb(127, 111, 19)\
    }\
    .ace-karim .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid rgba(255, 255, 255, 0.15)\
    }\
    .ace-karim .ace_marker-layer .ace_active-line {\
    background: rgba(0, 0, 0, 0.35)\
    }\
    .ace-karim .ace_gutter-active-line {\
    background-color: rgba(0, 0, 0, 0.35)\
    }\
    .ace-karim .ace_marker-layer .ace_selected-word {\
    border: 1px solid rgba(179, 101, 57, 0.75)\
    }\
    .ace-karim .ace_invisible {\
    color: rgba(255, 255, 255, 0.15)\
    }\
    .ace-karim .ace_keyword,\
    .ace-karim .ace_meta {\
    color: #FF9D00\
    }\
    .ace-karim .ace_constant,\
    .ace-karim .ace_constant.ace_character,\
    .ace-karim .ace_constant.ace_character.ace_escape,\
    .ace-karim .ace_constant.ace_other {\
    color: #FF628C\
    }\
    .ace-karim .ace_invalid {\
    color: #F8F8F8;\
    background-color: #800F00\
    }\
    .ace-karim .ace_support {\
    color: #80FFBB\
    }\
    .ace-karim .ace_support.ace_constant {\
    color: #EB939A\
    }\
    .ace-karim .ace_fold {\
    background-color: #FF9D00;\
    border-color: #FFFFFF\
    }\
    .ace-karim .ace_support.ace_function {\
    color: #FFB054\
    }\
    .ace-karim .ace_storage {\
    color: #FFEE80\
    }\
    .ace-karim .ace_entity {\
    color: #FFDD00\
    }\
    .ace-karim .ace_string {\
    color: #3AD900\
    }\
    .ace-karim .ace_string.ace_regexp {\
    color: #80FFC2\
    }\
    .ace-karim .ace_comment {\
    font-style: italic;\
    color: #0088FF\
    }\
    .ace-karim .ace_heading,\
    .ace-karim .ace_markup.ace_heading {\
    color: #C8E4FD;\
    background-color: #001221\
    }\
    .ace-karim .ace_list,\
    .ace-karim .ace_markup.ace_list {\
    background-color: #130D26\
    }\
    .ace-karim .ace_variable {\
    color: #CCCCCC\
    }\
    .ace-karim .ace_variable.ace_language {\
    color: #FF80E1\
    }\
    .ace-karim .ace_meta.ace_tag {\
    color: #9EFFFF\
    }\
    .ace-karim .ace_indent-guide {\
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHCLSvkPAAP3AgSDTRd4AAAAAElFTkSuQmCC) right repeat-y\
    }\
    ";
    
    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
    });
    