// const superagent = require('superagent');
// const cheerio = require('cheerio');
const page = require('webpage').create();
  phantom.outputEncoding="utf-8";
  page.open("http://www.cwl.gov.cn/", function(status) {
    if ( status === "success" ) {
      const arrs = page.evaluate(function() {
        var d = '';
        //匹配 DOM 查询语句
        var pattern = '.containerHome .kjGg.wL .kjgg0 .kjxx .jChi span';
        var c = document.querySelectorAll(pattern);//查询
        const l = c.length
        for (var i = 0;i< l;i ++) {
          d = d + c[i].innerHTML + '\n'
        }
        return d
        }
      )
        console.log(arrs);//输出网页标题
    } else {
        console.log("Page failed to load."); 
    }
    phantom.exit(0);
  });