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
(function (err, obj) {
	//var inf = obj.replace(/^\s+|\s+$/gm,'');
//	console.log(err);

	for (count = 0; count < obj.length; count++){
		formatTitle[count] = obj[count]['text'].trim()
		UpdatedTitle[count] = {
		'link-count': count + 1, 
		'link': obj[count]['link'], 
		'title': formatTitle[count] 
		}
	}
	console.log(UpdatedTitle)
	//obj['text'].trim().write('results2.json')
})
//obj[2]['text'].write('results2.json')
//.write('results1.json')