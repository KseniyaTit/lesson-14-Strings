
function words(str){
    let allSymbols =0;
    let symbolsWithoutSpace = 0;
    let quentityOfWords =0;
   let sentenceType
 for (let i=0; i < str.length; i++){
        allSymbols +=1;
        if (str[i] !== ' '){
            symbolsWithoutSpace +=1;
       }
    }
  
    let c = str.split(' ')
    quentityOfWords = c.length
    let d  = str[str.length-1]
    if (d ==="!"){
       sentenceType = 'imperative'
    }else if(d ==="?"){
        sentenceType = "question"
    }else if(d==="."){
        sentenceType ="narrative"
    }else if(d === undefined){
        sentenceType = 'null'
    }

    return ({allSymbols,
         sentenceType,
         symbolsWithoutSpace,
         quentityOfWords})


} 
