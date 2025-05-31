let bulbon = document.getElementById("On").addEventListener("click" , function() {
    
 document.getElementById('bulb').src='pic_bulbon.gif'

} )

 let bulboff = document.getElementById("off").addEventListener("click" , function() {
  document.getElementById('bulb').src='pic_bulboff.gif'

 } )



let num = ["1" , "2" , "3" , "4" ,"5" ,"6"]
function dice() {
         let ramdon = Math.floor( Math.random() * num.length)+1
        
         document.getElementById('image').src=`${ramdon}.png`


}
