var Xray = require('x-ray');
var x = Xray();
var count = 0;
var html = 'http://yourstory.com/ys-stories/';
var selector = '.sectionProfile_postsWrapper ul.gridPostsList li.grid-full';

x(html, selector,[{
  link: 'a.block@href',
  text: '.fl.content .title-small'
//  count: count + 1
}])
  .paginate('a.pagesNav-nextPage@href')
  .limit(100/18)
//inf = inf[1].trim()
//var ref = inf.replace(/^\s+|\s+$/gm,'');
.write('results1.json')