window.onload = function(){
		var money = document.getElementById('money')
		
		var minus = document.getElementById('minus');
		var plus = document.getElementById('plus');
		var our = document.getElementById('our');
		var bank = document.getElementById('bank');
		var percent = document.getElementById('percent');
		var percents = parseInt(percent.innerText);	
		function addNum(number){
			var n = parseInt(money.innerText);
			number = n + number;
			expects = number*percents/36500;
			banks = number*0.04/365;
			banks = banks.toFixed(2);
			expects = expects.toFixed(2);
			money.innerHTML = number;
			our.innerHTML = expects;
			bank.innerHTML = banks;
			
		}
		
		minus.onclick = function(){
			addNum(-1000);
		}
		plus.onclick = function(){
			addNum(1000);
		}
		var open = document.getElementById('openDiv');
		var close = document.getElementById('closeDiv');
		var div = document.getElementById('hiddenBox');
		open.onclick = function(){
			div.style.display = 'block';
		}
		close.onclick = function(){
			div.style.display = 'none';
		}
	}