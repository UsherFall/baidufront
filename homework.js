window.addEventListener('load', function () {
    var links = document.querySelectorAll('.link');
    var psn_ct = document.querySelector('.personal-center');
    var inps = document.querySelectorAll('input');
    var sub = document.querySelector('.sign-up-box');
    var cgbs = document.querySelectorAll('.category-box');
    var cs = document.querySelectorAll('.courses');
    var head = document.querySelector('.head h1');
    var siup = document.querySelector('.sign-up');
    var years_inp = document.querySelector('.years-input');
    var years = document.querySelectorAll('.years')
    var years_ul = document.querySelector('.years-ul')
    var border = document.querySelector('.border');
    var school_inp=document.querySelector('.school-input');
    var schools=document.querySelector('.schools');
    var pvb=document.querySelectorAll('.province-box li');
    var scb=document.querySelectorAll('.schools-box');
    var sucbox=document.querySelector('.success-box');
    var change=document.querySelector('.change');
    var message = document.querySelector('.information-verification')
    console.log();
    // 导航栏点击效果
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('mousedown', function () {
            this.style.color = 'rgba(255,255,255,0.6)';
        })
        links[i].addEventListener('mouseup', function () {
            this.style.color = 'rgb(226,226,226)';
        })
    }
    psn_ct.addEventListener('mouseover', function () {
        this.style.backgroundColor = 'rgb(92,92,92)';
    })
    psn_ct.addEventListener('mouseout', function () {
        this.style.backgroundColor = 'grey';
    })
    psn_ct.addEventListener('mousedown', function () {
        this.style.color = 'rgba(255,255,255,0.6)';
        this.style.backgroundColor = 'rgb(75,75,75)';
    })
    psn_ct.addEventListener('mouseup', function () {
        this.style.color = 'rgb(226,266,266)';
        this.style.backgroundColor = 'grey';
    })

    // 输入框焦点在与不在的样式
    // for (var i = 0; i < inps.length; i++) {
    //     // inps[i].addEventListener('focus', function () {
    //     //     this.style.backgroundColor = 'white';
    //     //     this.style.border = '1px solid #00a1d6';
    //     //     this.style.marginTop = 3 + 'px';
    //     // })
    //     // inps[i].addEventListener('blur', function () {
    //     //     this.style.backgroundColor = 'rgb(230, 230, 230)';
    //     //     this.style.border = 0;
    //     //     this.style.marginTop = 5 + 'px';
    //     // })
    // }

    // 报名按钮样式
    head.addEventListener('click', function () {
        siup.style.display = 'flex'
    })
    sub.addEventListener('mouseover', function () {
        this.style.backgroundColor = 'rgb(67, 180, 255)';
    })
    sub.addEventListener('mouseout', function () {
        this.style.backgroundColor = 'rgb(4, 154, 255)';
    })
    sub.addEventListener('mousedown', function () {
        this.style.color = 'rgb(255,255,255,0.6)'
    })
    sub.addEventListener('mouseup', function () {
        this.style.color = 'rgb(255,255,255)'
    })
    
    // 课程处理
    for (var i = 0; i < cgbs.length; i++) {
        cgbs[0].className = 'current';
        cgbs[i].setAttribute('index', i);
        cgbs[i].addEventListener('click', function () {
            // 课程选择
            var index = this.getAttribute('index');
            var a = 1;
            if (index == 0) {
                for (var i = 0; i < cs.length; i++) {
                    cs[i].style.display = 'block'
                }
            } else if (index == 1) {
                for (var i = 0; i < cs.length; i++) {
                    for (var j = 0; j < cs[i].children.length; j++) {
                        if (cs[i].children[j].className == 'HTML') {
                            a = 1;
                            break;
                        } else {
                            a = 0;
                        }
                    }
                    if (a == 1) {
                        cs[i].style.display = 'block';
                    } else {
                        cs[i].style.display = 'none';
                    }
                }
            } else if (index == 2) {
                for (var i = 0; i < cs.length; i++) {
                    for (var j = 0; j < cs[i].children.length; j++) {
                        if (cs[i].children[j].className == 'CSS') {
                            a = 1;
                            break;
                        } else {
                            a = 0;
                        }
                    }
                    if (a == 1) {
                        cs[i].style.display = 'block';
                    } else {
                        cs[i].style.display = 'none';
                    }
                }
            } else if (index == 3) {
                for (var i = 0; i < cs.length; i++) {
                    for (var j = 0; j < cs[i].children.length; j++) {
                        if (cs[i].children[j].className == 'JS') {
                            a = 1;
                            break;
                        } else {
                            a = 0;
                        }
                    }
                    if (a == 1) {
                        cs[i].style.display = 'block';
                    } else {
                        cs[i].style.display = 'none';
                    }
                }
            }
            // 排他法处理课程类别
            for (var i = 0; i < cgbs.length; i++) {
                cgbs[i].className = '';
            }
            this.className = 'current';
        })
    }

    // 年份选择
    years[8].style.fontWeight = 'bold';
    window.onbeforeunload = function () {
        years_inp.value = 2018;
    }
    years_inp.addEventListener('mouseenter', function () {
        this.classList.add('chosen');
        years_ul.style.display = 'block';
        border.style.display = 'block';
    })
    years_inp.addEventListener('mouseleave', function () {
        this.classList.remove('chosen');
        years_ul.style.display = 'none';
        border.style.display = 'none';
    })
    years_ul.addEventListener('mouseenter', function () {
        years_inp.classList.add('chosen');
        this.style.display = 'block';
        border.style.display = 'block';
    })
    years_ul.addEventListener('mouseleave', function () {
        years_inp.classList.remove('chosen');
        this.style.display = 'none';
        border.style.display = 'none';
    })
    // 选择年份后让input框显示对应内容
    for (var i = 0; i < years.length; i++) {
        years[i].addEventListener('click', function () {
            for (var j = 0; j < years.length; j++) {
                years[j].style.fontWeight = 'normal';
            }
            this.style.fontWeight = 'bold';
            years_inp.value = this.innerHTML;
            years_inp.setAttribute('value', this.innerHTML);
            years_ul.style.display='none';
        })
    }

    // 学校选择
    pvb[0].style.fontWeight = 'bold';
    scb[0].style.zIndex=2;
    window.onbeforeunload = function () {
        school_inp.value = '选中示例大学';
    }
    school_inp.addEventListener('mouseenter', function () {
        this.classList.add('chosen');
        schools.style.display = 'block';
    })
    school_inp.addEventListener('mouseleave', function () {
        this.classList.remove('chosen');
        schools.style.display = 'none';
    })
    schools.addEventListener('mouseenter', function () {
        school_inp.classList.add('chosen');
        this.style.display = 'block';
    })
    schools.addEventListener('mouseleave', function () {
        school_inp.classList.remove('chosen');
        this.style.display = 'none';
    })
    var bs=scb[0].querySelectorAll('a');
    for(var l=0;l<bs.length;l++){
        bs[l].addEventListener('click',function(){
            for(var n=0;n<bs.length;n++){
                bs[n].style.fontWeight='normal';
            }
            this.style.fontWeight='bold';
            school_inp.value = this.innerHTML;
            school_inp.setAttribute('value', this.innerHTML);
            schools.style.display='none';
        })
    }
    console.log(bs);
    for(var i=0;i<pvb.length;i++){
        pvb[i].setAttribute('index',i);
        pvb[i].addEventListener('click',function(){
            var index =this.getAttribute('index');
            var as=scb[index].querySelectorAll('a');
            for(var j=0;j<pvb.length;j++){
                pvb[j].style.fontWeight='normal';
            }
            this.style.fontWeight='bold';
            // 点击省份切换到对应省份的学校
            if(index==0){
                for(var k=0;k<scb.length;k++){
                    scb[k].style.zIndex=1;
                }
                scb[index].style.zIndex=2;
            }else if(index==1){
                for(var k=0;k<scb.length;k++){
                    scb[k].style.zIndex=1;
                }
                scb[index].style.zIndex=2;
            }else if(index==2){
                for(var k=0;k<scb.length;k++){
                    scb[k].style.zIndex=1;
                }
                scb[index].style.zIndex=2;
            }else if(index==3){
                for(var k=0;k<scb.length;k++){
                    scb[k].style.zIndex=1;
                }
                scb[index].style.zIndex=2;
            }else if(index==4){
                for(var k=0;k<scb.length;k++){
                    scb[k].style.zIndex=1;
                }
                scb[index].style.zIndex=2;
            }else if(index==5){
                for(var k=0;k<scb.length;k++){
                    scb[k].style.zIndex=1;
                }
                scb[index].style.zIndex=2;
            }else if(index==6){
                for(var k=0;k<scb.length;k++){
                    scb[k].style.zIndex=1;
                }
                scb[index].style.zIndex=2;
            }else if(index==7){
                for(var k=0;k<scb.length;k++){
                    scb[k].style.zIndex=1;
                }
                scb[index].style.zIndex=2;
            }else if(index==8){
                for(var k=0;k<scb.length;k++){
                    scb[k].style.zIndex=1;
                }
                scb[index].style.zIndex=2;
            }else{
                for(var k=0;k<scb.length;k++){
                    scb[k].style.zIndex=1;
                }
                scb[index].style.zIndex=2;
            }
            // 选择学校后让input框显示对应内容
            for(var l=0;l<as.length;l++){
                as[l].addEventListener('click',function(){
                    for(var n=0;n<as.length;n++){
                        as[n].style.fontWeight='normal';
                    }
                    this.style.fontWeight='bold';
                    school_inp.value = this.innerHTML;
                    school_inp.setAttribute('value', this.innerHTML);
                    schools.style.display='none';
                })
            }
        })
    }
    
    // 验证邮箱
    sub.addEventListener('click',function(){
        var inputEmail = document.querySelector('.email-input');
	    let re = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
	    ;
        let scm=school_inp.value;
        let ym=years_inp.value;
        let textBox = inputEmail.value;
        
        // 正则判断
		if (!re.test(textBox)) { 
			message.style.display = 'block';
			message.innerHTML = '邮籍地址不符合要求(yourname@host.com)，请重新输入 ';
			message.style.backgroundColor = 'rgb(230, 118, 118)';
            setTimeout(function(){
                message.style.display = 'none';
            },3000)
		} else { 
			message.style.display = 'block';
			message.style.backgroundColor = 'greenyellow';
            message.innerHTML='恭喜你，来自 '+scm+' '+ym+'级 '+textBox+' 同学，您的报名信息已记录，请关注您的邮件'
            sucbox.style.display='block';
            setTimeout(function(){
                message.style.display = 'none';
            },5000)
		}
    })
    // 重新报名
    change.addEventListener('click',function(){
        this.parentElement.style.display='none'
        message.style.display='none';
    })
})