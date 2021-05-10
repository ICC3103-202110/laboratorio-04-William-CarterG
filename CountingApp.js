function view(counter){
    return(`\n   Count: ${counter}\n\n   (+) (-)\n\n   (q) for quit\n`);
}

function update(msg, counter){

    if (msg ==='+') return counter += 1;
    
    if(msg === '-') return counter -= 1;
    
    else return counter;
    
}

function app(counter){
    var t = 1 ;
    while (t == 1){     
        console.clear();
        console.log(view(counter));

        const prompt = require('prompt-sync')();
        //Wasn't sure if input was a reserved word in JS, so its called inp :)
        const msg = prompt("What would you do: ");
        if (msg === "q"){
            return 0;
        }

        else counter = update(msg, counter);     
    }
}

app(0);

