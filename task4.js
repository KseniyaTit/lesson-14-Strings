function func(sent, word){
    let words = sent.split(' ')
    for(let i = 0; i<sent.length; i++){
        
        if (i === word){
           return (sent - word)
        }
    }
    
}

//пока в процессе эта задача