window.onload=function() {

    //alert(document.body.clientWidth);   //gives the width of the current screen

    //General variables
    //IDs
    var slider =document.getElementById('slider')
    var menu_icon =document.getElementById('menu_icon')
    var logo =document.getElementById('logo')
    var picture =document.getElementById('picture')
    var title =document.getElementById('title')
    var data =document.getElementById('data')
    var l_arrow =document.getElementById('left_arrow')
    var r_arrow =document.getElementById('right_arrow')
    var img =document.getElementById('img')
    var bar_content =document.getElementById('bar_content')
    var c0 =document.getElementById('c0')
    //Classes
    var circle=document.getElementsByClassName('circle')
    var bar=document.getElementsByClassName('bar')
    var article=document.getElementsByClassName('article') 
    
    //===============================================================

    var order=1;
    bar_content.innerHTML=document.getElementsByClassName( 'bar' )[0].outerHTML;

        //LEFT ARROW FUNCTION 
        l_arrow.onclick=function() { //lowers the order for arrow in first slider
            if (order==1) {
                order=3;  //has to corralate with number of input IDs in slider1
            }
            else { //all 3 coomands below mean the same
                //order=order-1;
                //order-- ;
                order -=1;
            }
            
            slider.style.backgroundImage= 'url('+ document.getElementById( order ).getAttribute('img') + ')';
            bar_content.innerHTML=document.getElementById( 'b' + order ).outerHTML; 
            img.setAttribute( "src", document.getElementById( order ).getAttribute('img') ) ;
            c0.innerHTML=document.getElementById( 'c' + order ).innerHTML;
        }   
            //src="./images/snow_leopard.jpeg"
            //src="./images/red_panda.jpeg"
            //src="./images/asian_elephants.jpeg"
    

        //RIGHT ARROW FUNCTION
        r_arrow.onclick=function() { //raises the order for arrow in first slider 
            if (order==3 ) {
                order=1;
            }
            else {
                //order=order+1;
                //order++ ;
                order +=1;
            }
            slider.style.backgroundImage= 'url('+ document.getElementById( order ).getAttribute('img') + ')';
            bar_content.innerHTML=document.getElementById( 'b' + order ).outerHTML; 
            img.setAttribute( "src", document.getElementById( order ).getAttribute('img') ) ;
            c0.innerHTML=document.getElementById( 'c' + order ).innerHTML;

            //article.innerHTML=document.getElementById( 'c' + order ).innerHTML;
            //article.innerHTML=data[order-1].innerHTML;
        }



    //slider TIMER defined below (first slider)
    var mover=setInterval(move_slider,3000);   //starts the cycle (3seconds)

    function move_slider() {
        if(order>circle.length){ //so when reached number 3 goes back to 1
            order=1;
        }

        slider.style.backgroundImage = 'url('+ document.getElementById( order ).getAttribute('img') + ')'; //assigns new background
        bar_content.innerHTML=document.getElementById( 'b' + order ).outerHTML; 
        
        
        for(var i=0; i<=circle.length-1; i++) {
            if(i+1==order) {
                circle[i].innerHTML="<i class='fa fa-circle'></i>"; 
            }
            else {
                circle[i].innerHTML="<i class='fa fa-square'></i>";
            }
        }
        article.innerHTML=data[order-1].innerHTML; //the div containing to-be-appended-elements is hidden
        order++; //adds to active order of the iterating picture 
    } //Move_Slider END


    
    //iterates circles in first slider
    for(var i=0; i<circle.length; i++) { 
        circle[i].onclick=function() {
            var order=this.getAttribute('order');
            
            slider.style.backgroundImage='url('+ document.getElementById( order ).getAttribute('img') + ')';
            for(var j=0; j<circle.length; j++) {  //first changes all other circles to osquare
                circle[j].innerHTML= "<i class='fa fa-square'></i>";
                
            }
            this.innerHTML= "<i class='fa fa-circle'></i>"; //changes the active square to filled related circle
            article.innerHTML=data.article.innerHTML;
            
        }
        
    }




} //window.onload END