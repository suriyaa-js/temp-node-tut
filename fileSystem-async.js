const {readFile,writeFile}=require('fs');

readFile('./content/first.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    const first=data;

    readFile('./content/second.txt','utf8',(err,data)=>{
        if(err){
            console.log(err);
        }
        const second=data;

        writeFile('./content/result-sync.txt',
        `Here new Result :${first} ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    
    });
    

});