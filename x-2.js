var a;   
var b;
var c;
var delta;
var sqrt;
var x;
var x1;
var x2;

function sqrtdelta() {
    
    a = prompt("enter a!");
    b = prompt("enter b!");
    c = prompt("enter c!");
    
    delta = b ** 2 - 4 * a * c;
        
    sqrt = Math.sqrt(delta);
        
    document.write(" delta = " + delta.toFixed(4) + "<br />") 
} 

sqrtdelta();



function equ() {
        
        x = (-b) / 2 * a; 
        x1 = ( (-b) + sqrt ) / 2 * a;
        x2 = ( (-b) - sqrt ) / 2 * a;
    
            
        if(delta>=0) {
                      if(delta>0) {
                                   document.write(" x1 = " + x1.toFixed(4)  + "<br />") 
                                   document.write(" x2 = " + x2.toFixed(4)  + "<br />") 
                                   } else {
                                           document.write("  x = " + x.toFixed(4)  + "<br />") 
                                           }       
            
                      } else {
                             document.write(" No solution "  + "<br />") 
                             }
        
        
        
                 }
    
    equ();