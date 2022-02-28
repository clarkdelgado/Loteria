var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src =  'firstCard.png' 

imgArray[1] = new Image();
imgArray[1].src = 'secondCard.png'

imgArray[2] = new Image();
imgArray[2].src = 'thirdCard.png'

document.getElementById('drawBtn').onclick = function () {nextImage()};

function nextImage(){
    n = Math.floor(Math.random()*3)
    document.getElementById('currentCard').src = imgArray[n].src;
    console.log('imgArray #'+n+ ' = '+ 'card '+(n+1));
}


//  function nextImage(element){
//     var img = document.getElementById(element);

//     for(var i = 0; i < imgArray.length; i++){
//         if(imgArray[i].src == img.src){
//             if(i === imgArray.length){
//                 document.getElementById(element).src = imgArray[0].src;
//                 console.log('i===imgArray');
//                 break;
                
//             }
//             document.getElementById(element).src = imgArray[i+1].src;
//             console.log('imgArray[i].src == img.src');
//             break;
//         }
//     }
// }

