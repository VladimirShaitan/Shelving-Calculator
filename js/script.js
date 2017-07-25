function id_s(t_id){return document.getElementById(t_id)}
function cl_s(t_cl){return document.getElementsByClassName(t_cl)}

function changePrice(){
if (cl_s('width_item')[0].selected === true){   
//Height price if width =  600    
    cl_s('height_item')[0].value = 965;
    cl_s('height_item')[1].value = 1070;
    cl_s('height_item')[2].value = 1120;
    
//Depth price if width =  600  
    cl_s('depth_item')[0].value = 165;
    cl_s('depth_item')[1].value = 198;
    
}else if (cl_s('width_item')[1].selected === true){
//Height price if width =  750  
    cl_s('height_item')[0].value = 1040;
    cl_s('height_item')[1].value = 1157;
    cl_s('height_item')[2].value = 1208;

//Depth price if width =  750     
    cl_s('depth_item')[0].value = 180;
    cl_s('depth_item')[1].value = 217;
    
}else if (cl_s('width_item')[2].selected === true){
//Height price if width =  950  
    cl_s('height_item')[0].value = 1138;
    cl_s('height_item')[1].value = 1261;
    cl_s('height_item')[2].value = 1320;
    
//Depth price if width =  950
    cl_s('depth_item')[0].value = 196;
    cl_s('depth_item')[1].value = 241;
    
}else if (cl_s('width_item')[3].selected === true){
//Height price if width =  1200 
    cl_s('height_item')[0].value = 1305;
    cl_s('height_item')[1].value = 1458;
    cl_s('height_item')[2].value = 1521;
    
//Depth price if width =  1200  
    cl_s('depth_item')[0].value = 230;
    cl_s('depth_item')[1].value = 279;
}
    
    if (cl_s('height_item')[0].selected === true){
       id_s('sh_leg_height').value = 356;
    } else if (cl_s('height_item')[1].selected === true){
        id_s('sh_leg_height').value = 388;
    } else if (cl_s('height_item')[2].selected === true){
        id_s('sh_leg_height').value = 395;
    }

}



function findPrice(whd){
   for(var i = 0; i < whd.length; i++){
       if(whd[i].selected === true){
            return whd[i];
            break;
        } else {continue}
   }
}
function showPrice(){
    var h = parseInt(findPrice(cl_s('height_item')).value);
    var d = parseInt(findPrice(cl_s('depth_item')).value);
    alert(h+d);
}











id_s('sh_width').addEventListener('change', changePrice);
id_s('sh_height').addEventListener('change', changePrice);
id_s('getPrice').addEventListener('click', showPrice);