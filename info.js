class info{

constructor(){
}
update(count){
database.ref("/").update({estado:count})    
}
  


pegainfo(){
database.ref("estado").on("value",data=>{estadojogo=data.val()})
    
}
move(){
if (keyDown("w")) {
    
}



}
}

