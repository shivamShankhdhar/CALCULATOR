function input(x){
			// var value = document.getElementsByTagName('button').value;
			document.getElementById('screen').value += x;
		}
		function blank_screen(){
			// var value = document.getElementsByTagName('button').value;
			document.getElementById('screen').value = '';
		}
		function evaluatethis(){
			// var evaluate = 0;
			var v = document.getElementById('screen').value;
			var evaluate = eval(v);
			document.getElementById('screen').value = evaluate;
		}
		function removeLast(){
			var v = document.getElementById('screen').value;
			var t = v.slice(0,-1);
			document.getElementById('screen').value = t;
		}
