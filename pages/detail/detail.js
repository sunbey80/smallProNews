var newsList = require('../../data/data.js')

Page({
	data:{
		
	},
	onLoad: function(e){
		var newsId = e.id
		this.setData({
			newsId: newsId
		})
		var newsItem = newsList[newsId]
		this.setData({
			newsItem: newsItem
		})

		var newsCollected = wx.getStorageSync('newsCollected') //从缓存中读取是否收藏数组
		if(newsCollected){
			var collected = newsCollected[newsId] //当前新闻收藏与否

			this.setData({
				collected: collected
			})
		}else{
			var newsCollected = {}
			newsCollected[newsId] = false
			wx.setStorageSync('newsCollected',newsCollected)
		}
	},
	switchCollected: function(){
		var newsCollected = wx.getStorageSync('newsCollected')
		var collected = newsCollected[this.data.newsId]

		collected = !collected
		newsCollected[this.data.newsId] = collected
		wx.setStorageSync('newsCollected',newsCollected)

		this.setData({
			collected: collected
		})
	}
})