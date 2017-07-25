/*
Contains a bunch of "if's" which works from choosing width and height of selects
Unfortunately can'generet this values automaticly.

Also contains contains a functions which can help you find HTML elemenets by id's and classes

developed by this guy : https://www.linkedin.com/in/vladimir-shaitan-0a717b108/
*/

function id_s(t_id){return document.getElementById(t_id)}
function cl_s(t_cl){return document.getElementsByClassName(t_cl)}


function changePrice(){
if (cl_s('width_item')[0].selected === true){   
//Height price if width =  600    
    cl_s('height_item')[0].value = 965;
    cl_s('height_item')[1].value = 1070;
    cl_s('height_item')[2].value = 1120;
    
//Depth price 4shelvs if width =  600  
    cl_s('4shelv')[0].value = 726;
    cl_s('4shelv')[1].value = 693;
    cl_s('4shelv')[2].value = 759;
    cl_s('4shelv')[3].value = 660;
    cl_s('4shelv')[4].value = 792;

//Depth price 5shelvs if width =  600  
    cl_s('5shelv')[0].value = 396;
    cl_s('5shelv')[1].value = 858;
    cl_s('5shelv')[2].value = 924;
    cl_s('5shelv')[3].value = 957;
    cl_s('5shelv')[4].value = 825;    
    cl_s('5shelv')[5].value = 990;    
    
}else if (cl_s('width_item')[1].selected === true){
//Height price if width =  750  
    cl_s('height_item')[0].value = 1040;
    cl_s('height_item')[1].value = 1157;
    cl_s('height_item')[2].value = 1208;

//Depth price 4shelvs if width =  750     
    cl_s('4shelv')[0].value = 749;
    cl_s('4shelv')[1].value = 757;
    cl_s('4shelv')[2].value = 831;
    cl_s('4shelv')[3].value = 720;
    cl_s('4shelv')[4].value = 868;
    
//Depth price 5shelvs if width =  750  
    cl_s('5shelv')[0].value = 974;
    cl_s('5shelv')[1].value = 937;
    cl_s('5shelv')[2].value = 1011;
    cl_s('5shelv')[3].value = 1048;
    cl_s('5shelv')[4].value = 900;     
    cl_s('5shelv')[5].value = 1085;     
    
}else if (cl_s('width_item')[2].selected === true){
//Height price if width =  950  
    cl_s('height_item')[0].value = 1138;
    cl_s('height_item')[1].value = 1261;
    cl_s('height_item')[2].value = 1320;
    
//Depth price 4shelvs if width =  950
    cl_s('4shelv')[0].value = 874;
    cl_s('4shelv')[1].value = 829;
    cl_s('4shelv')[2].value = 919;
    cl_s('4shelv')[3].value = 784;
    cl_s('4shelv')[4].value = 964;
    
//Depth price 5shelvs if width =  950  
    cl_s('5shelv')[0].value = 1070;
    cl_s('5shelv')[1].value = 1025;
    cl_s('5shelv')[2].value = 1115;
    cl_s('5shelv')[3].value = 1160;
    cl_s('5shelv')[4].value = 980;     
    cl_s('5shelv')[5].value = 1205;     
    
}else if (cl_s('width_item')[3].selected === true){
//Height price if width =  1200 
    cl_s('height_item')[0].value = 1305;
    cl_s('height_item')[1].value = 1458;
    cl_s('height_item')[2].value = 1521;
    
//Depth price 4shelvs if width =  1200  
    cl_s('4shelv')[0].value = 1018;
    cl_s('4shelv')[1].value = 987;
    cl_s('4shelv')[2].value = 1067;
    cl_s('4shelv')[3].value = 920;
    cl_s('4shelv')[4].value = 1116;
    
//Depth price 5shelvs if width =  1200  
    cl_s('5shelv')[0].value = 1248;
    cl_s('5shelv')[1].value = 1199;
    cl_s('5shelv')[2].value = 1297;
    cl_s('5shelv')[3].value = 1346;
    cl_s('5shelv')[4].value = 1150;     
    cl_s('5shelv')[5].value = 1395;     
    
}
//------------------------------------------------------------//    
    if (cl_s('height_item')[0].selected === true){
        //leg height if height = 1900
       id_s('sh_leg_height').value = 356;
    } else if (cl_s('height_item')[1].selected === true){
        //leg height if height = 2100
        id_s('sh_leg_height').value = 388;
    } else if (cl_s('height_item')[2].selected === true){
        //leg height if height = 2350
        id_s('sh_leg_height').value = 395;
    }
//------------------------------------------------------------//    
    

    
    
}