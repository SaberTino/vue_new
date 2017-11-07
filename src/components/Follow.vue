<template>
	<div class="content mt40">
	    <div class="newsList">
	    	<ul>
	            <li v-for="(item, key) in arrList">
	            	<a href="javascript:;">
	                    <h2>{{key+1}} .{{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </a>
	            </li>
	            
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrList:[]
			}
		},
		mounted(){
			this.fetchData()
		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get('src/data/follow.data').then(function(res){
					//console.log( res.data);
					//setTimeout(function(){
						_this.arrList=res.data;
					//},1000);
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>
<style scoped>
/*scoped==局部样式*/
	.mt40{
		margin-top:40px;
	}
</style>