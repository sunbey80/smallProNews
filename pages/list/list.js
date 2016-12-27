var newsList = require('../../data/data.js')

Page({
    data:{

    },
    onLoad: function(){
    	this.setData({
    		gotData:newsList
    	})
    },
    onTapToDetail:function(e){
    	var newsId = e.currentTarget.dataset.newsid
    	wx.navigateTo({
    		url: "../detail/detail?id=" + newsId
    	})
    }
})