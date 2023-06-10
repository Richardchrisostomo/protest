class button{
 constructor(){
    this.fundo=createImg("./fundo1.jpg")
this.reset=createButton("restarte")


//cria a caixa para loga o nome do player
this.retangle=createInput("digite seu nome")
//criao botao para cobina os players
this.retangle2=createImg("./start.png")
//tamanho ds fonte das letras
this.cobinanojogadores=createElement("h2")
 }

hide(){
this.cobinanojogadores.hide()
this.fundo.hide()
}


//carrega as imagens dos botoes
display(){
//posisiçao da caixa de nome
this.retangle.position(width/2-100,height/2)   
//posiçao do start
this.retangle2.position(width/2-120,height/3)
//tamanho da caixa de nome
this.retangle.size(100,10)
//tamanho do start
this.retangle2.size(150,100)
this.fundo.position(335,0)   
this.fundo.size(700,660)

this.reset.position(100,200)   
this.reset.size(100,50)
this.reset.mousePressed(()=>{
database.ref("/").update({
contador:0,estado:0,jogadores:{}    
})
window.location.reload()

})



    //
this.retangle2.mousePressed(()=>{
//esconde a caixa de nome 
this.retangle.hide()    
//esconde o botao dde start
this.retangle2.hide()
//esconde os botoes de login depois de concluir o estagio 0 que e logando 
//e emtra no estagio 1 que e esperando
this.cobinanojogadores.html("aguarde")
//posiçao da palavra aguarde 
this.cobinanojogadores.position(width/2-100,height/3)  

this.cobinanojogadores.class("button")
contador+=1
player.nome=this.retangle.value()
player.index=contador
player.update(contador)
player.addinfojogador()
})

}    

} 


