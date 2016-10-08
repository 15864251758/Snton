//内网搜索页面
window.onload=function(){

//搜索下拉列表
	var search=document.getElementById('search');
	var searchList=document.getElementById('searchList');
	search.onclick=function(){
		if (searchList.style.display=='block') {
			searchList.style.display='none';
		}else{
			searchList.style.display='block';
		}
	}




	//集团群
	var f1=document.getElementById('f1');
	var f11=document.getElementById('f11');
	var f12=document.getElementById('f12');
	f11.style.display='none';
	f1.onclick=function(){
		f11.style.display='block';
	}
	f12.onclick=function(){
		f11.style.display='none';
	}


	//友情链接
	var f2=document.getElementById('f2');
	var f21=document.getElementById('f21');
	var f22=document.getElementById('f22');
	f21.style.display='none';
	f2.onclick=function(){
		f21.style.display='block';
	}
	f22.onclick=function(){
		f21.style.display='none';
	}

	///通讯录
		var f3=document.getElementById('f3');
		var f31=document.getElementById('f31');
		var f32 = document.getElementById('f32');
		f31.style.display="none";
		f3.onclick=function(){
			if (f31.style.display=="none") {
				f31.style.display="block";
			}else{
				f31.style.display="none";
			}
		}
		f32.onclick=function(){
			f31.style.display="none";
		}

		var f3aa=document.getElementById('f3aa');
		var f3bb=document.getElementById('f3bb');
		var f3a=document.getElementById('f3a');
		var f3b=document.getElementById('f3b');
		f3b.style.display="none";
		f3bb.onclick=function(){
			f3b.style.display='block';
			f3a.style.display='none';
			f3bb.style.background='#93CAE0';
			f3bb.style.color='#fff';
			f3aa.style.background='none';
			f3aa.style.color='#333';
		}
		f3aa.onclick=function(){
			f3a.style.display='block';
			f3b.style.display='none';
			f3bb.style.background='none';
			f3bb.style.color='#333';
			f3aa.style.background='#93CAE0';
			f3aa.style.color='#fff';
		}
}