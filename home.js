window.onload = function(){
		var list = document.getElementById('list');
		var prev = document.getElementById('prev');
		var next = document.getElementById('next');
		var lists = list.getElementsByTagName('li');
		var index = 3;
		var width=document.body.scrollWidth;
		list.style.left = -Math.round(1050-width/2) + 'px';
		function move(dist) {
			var pos = parseInt(list.style.left)+dist; 
			list.style.left = pos + "px";
		
		}
		next.onclick = function(){
			if (index <= 4){
				index += 1;
				move(-300);
				Active();
			}
		}
		prev.onclick = function(){
			if(index > 1){
				index -= 1;
				move(300);
				Active();
			}
		}
		
		
		
		function Active() {
			for(var i=0;i<lists.length;i++){
				lists[i].className = " ";
			}
			lists[index - 1].className = "at";
			lists[index].className = "at";
			lists[index + 1].className = "at";
			
		}
		
		var rotate = document.getElementById('animate');
		var rotateImgs = rotate.getElementsByTagName('li');
		var deg = 0;
		var nineIcon = document.getElementById("nine-icon").getElementsByTagName('li');
		var fourIcon = document.getElementById("four-icon").getElementsByTagName('li');
		var grid = document.getElementById("grid").getElementsByTagName('span');
		function setImg(arr,str){
			for( var i=0;i<arr.length;i++){
				arr[i].style.background = "url(images/" + str + (i+1) +".png)";
				arr[i].style.backgroundSize = "cover";
			}
		}
		setImg(nineIcon,"i-");
		setImg(grid,"m_");
		setImg(fourIcon,"four-icon-");
		setImg(rotateImgs,"icon_");
		setInterval(function(){
				deg += 0.1;
				for( var i=0;i<rotateImgs.length;i++){
				    rotateImgs[i].style.transform = "rotate("+deg+"deg)";
				}
				if (parseInt(deg) == 360){
					deg = 0;
				}
			},0.2);
		
	}
	window.onscroll = function(){
			var t = document.documentElement.scrollTop || document.body.scrollTop; 
			var icon = document.getElementById("nine-icon"); 
			var icon2 = document.getElementById("four-icon"); 
			var icons = icon.getElementsByTagName('li');
			var theIcons = icon2.getElementsByTagName('li');
			if(t>910){
				var i = 0;
				var timer = setInterval(function(){
					icons[i].className = "icon-"+i;
					i += 1;
					if(i == icons.length) {
						clearInterval(timer);
					}
				},100);
			
			}
			if(t>1600){
				var j = 0;
				var timer2 = setInterval(function(){
					theIcons[j].className = "icon-2-"+j;
					j += 1;
					if(j == theIcons.length) {
						clearInterval(timer2);
					}
				},200);
			}
			
	}
	window.onresize = function(){
		var width=document.body.scrollWidth;
		
		if( width > 1260 ){
			var list = document.getElementById('list');
			var lists = list.getElementsByTagName('li');
			var n = 0;
			for( var i = 0; i<lists.length; i++){
				if(lists[i].className == 'at'){
					n=i+2;
					break;
				}
			}
			
			
			list.style.left = -Math.round(n*300-140-width/2) + 'px';
	    }
	}
	
	


	