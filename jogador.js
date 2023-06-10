class jogador{

constructor(){
this.nome=null    
this.hp=100
this.posx=420
this.posy=150
this.index=0
this.ranking=0





}
pegainfo(){

    database.ref("contador").on("value",data=>{contador=data.val()})

}
update(count){
database.ref("/").update({contador:count})    
}
addinfojogador(){
database.ref("jogadores/jogador"+this.index).update({nome:this.nome,hp:this.hp,posx:this.posx,posy:this.posy,index:this.index,ranking:this.ranking})  

}



}