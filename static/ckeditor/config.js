/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
  // Define changes to default configuration here. For example:
  // config.language = 'fr';
  // config.uiColor = '#AADC6E';
 config.extraPlugins += (config.extraPlugins ? ',lineheight' : 'lineheight');

  config.toolbar_Full = [
    ['Bold', 'Italic', 'Underline', 'Strike'],
    ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
    ['Image', 'Table', 'HorizontalRule'],
    ['Styles', 'Format', 'Font', 'FontSize','lineheight'],
    ['TextColor', 'BGColor'],
    ['Link', 'Unlink', 'Anchor'],
    ['Print', 'Preview', 'Source'],
  ];
  //中文字体
  config.font_names = '宋体/宋体;黑体/黑体;仿宋/仿宋_GB2312;楷体/楷体_GB2312;隶书/隶书;幼圆/幼圆;微软雅黑/微软雅黑;' + config.font_names;
  //设置快捷键
  config.keystrokes = [
    [CKEDITOR.ALT + 121 /*F10*/, 'toolbarFocus'],  //获取焦点
    [CKEDITOR.ALT + 122 /*F11*/, 'elementsPathFocus'],  //元素焦点
    [CKEDITOR.SHIFT + 121 /*F10*/, 'contextMenu'],  //文本菜单
    [CKEDITOR.CTRL + 90 /*Z*/, 'undo'],  //撤销
    [CKEDITOR.CTRL + 89 /*Y*/, 'redo'],  //重做
    [CKEDITOR.CTRL + CKEDITOR.SHIFT + 90 /*Z*/, 'redo'],  //
    [CKEDITOR.CTRL + 76 /*L*/, 'link'],  //链接
    [CKEDITOR.CTRL + 66 /*B*/, 'bold'],  //粗体
    [CKEDITOR.CTRL + 73 /*I*/, 'italic'],  //斜体
    [CKEDITOR.CTRL + 85 /*U*/, 'underline'],  //下划线
    [CKEDITOR.ALT + 109 /*-*/, 'toolbarCollapse']
  ],
    //设置快捷键 可能与浏览器快捷键冲突 plugins/keystrokes/plugin.js.
    config.blockedKeystrokes = [
      CKEDITOR.CTRL + 66 /*B*/,
      CKEDITOR.CTRL + 73 /*I*/,
      CKEDITOR.CTRL + 85 /*U*/
    ],
    //字体默认大小 plugins/font/plugin.js
    config.fontSize_defaultLabel = '12px';
  //字体编辑时可选的字体大小 plugins/font/plugin.js
  config.fontSize_sizes = '8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px'
//设置字体大小时 使用的式样 plugins/font/plugin.js
  config.fontSize_style = {
    element: 'span',
    styles: {'font-size': '#(size)'},
    overrides: [{element: 'font', attributes: {'size': null}}]
  };
  // 上传图片
  config.image_previewText = ' ';
  config.fileUploadUrl = 'http://118.126.92.157/szzj_server/upload_img.do',
    config.filebrowserUploadUrl = 'http://118.126.92.157/szzj_server/upload_img.do',
    config.removeDialogTabs = 'image:advanced'
};
