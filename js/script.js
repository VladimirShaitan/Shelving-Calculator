//serchilng for selected option
function findPrice(whd){
   for(var i = 0; i < whd.length; i++){
       if(whd[i].selected === true){
            return whd[i];
            break;
        } else {continue}
   }
}

//toogling selects in shelving variety
function shelvVariety(){
    if(findPrice(cl_s('sehv_quantity')) === cl_s('sehv_quantity')[0]){
        id_s('sh_shelv_variety1').setAttribute ('data-calc', 'on');
        id_s('sh_shelv_variety2').setAttribute ('data-calc', 'off');
        id_s('sh_shelv_variety1').style.display = 'inline-block';
        id_s('sh_shelv_variety2').style.display = 'none';
    } else {
        id_s('sh_shelv_variety2').setAttribute ('data-calc', 'on');
        id_s('sh_shelv_variety1').setAttribute ('data-calc', 'off');
        id_s('sh_shelv_variety2').style.display = 'inline-block';
        id_s('sh_shelv_variety1').style.display = 'none';
    }  
}

//Searching for selected option in shelving variety and getting integer value 
function findVariety() {
        if(id_s('sh_shelv_variety1').getAttribute('data-calc') === 'on'){
            return parseInt(findPrice(cl_s('4shelv')).value)
        } else if(id_s('sh_shelv_variety2').getAttribute('data-calc') === 'on'){
            return parseInt(findPrice(cl_s('5shelv')).value)
        }
    }

//caculating ang displaying latest price function
function showPrice(){
    let stelajQuantity = parseInt(id_s('stelaj_quantity').value);
    let legHeight = parseInt(id_s('sh_leg_height').value)
    let h = parseInt(findPrice(cl_s('height_item')).value);
    let sh_v = findVariety();
   // console.log(legHeight, h, sh_v);
    
    if(stelajQuantity === 1){
        alert(h+sh_v+(legHeight*2))
    } else if (stelajQuantity > 1){
        alert(((h+sh_v+legHeight)*stelajQuantity+legHeight))
    } else(alert('Введите точное количество стеллажей'))
    
    //console.log(stelajQuantity)
    
}
id_s('sh_width').addEventListener('change', changePrice);
id_s('sh_height').addEventListener('change', changePrice);
id_s('getPrice').addEventListener('click', showPrice);
id_s('sh_sehv_quantity').addEventListener('change', shelvVariety);