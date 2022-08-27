const path=require('path');
const file=require('fs');

//console.log(path.sep);


const pathname=path.join('/content','subfolder','test.txt');
//console.log(pathname);

const base=path.basename(pathname);
//console.log(base);
//console.log(path.dirname(pathname));

const absolute=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);


file.read(pathname,'r',function(err,data){
    if(err){
        return console.log.err;
    }
    console.log(data);
});