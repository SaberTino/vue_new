<template>
	<div class="banner">
        <ul class="clearfix">
            <li><img src="../assets/images/img_1.jpg" alt=""/>
            	<div class="text-box">
                	<h2>新时代要有新气象更要有新作为</h2>
                    <p>十九大 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_2.jpg" alt=""/>
            	<div class="text-box">
                	<h2>有啥东西比买不起800万学区房更可怕？</h2>
                    <p>房产 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_3.jpg" alt=""/>
            	<div class="text-box">
                	<h2>照亮全面屏时代 vivo X20 上手体验</h2>
                    <p>科技 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_4.jpg" alt=""/>
            	<div class="text-box">
                	<h2>女大学生用银杏叶做“土豪金”时装</h2>
                    <p>大学生 / 文</p>
                </div>
            </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>
<script>
	export default {
		mounted(){
			this.fnSlider();
		},
		watch:{
			// '$route':function(){
			// 	alert(1);
			// }
		},
		methods:{
			fnSlider(){
				$(function (){
					var mySwipe=new Swipe($('.banner')[0],{
						auto:1500,
						continuous:true,
						stopPropation:true,
						callback:function (index,element){
							$('.banner ol li').removeClass('active');
							$('.banner ol li').eq(index).addClass('active');
						}
					});
				});
			}
		}
	}
</script>