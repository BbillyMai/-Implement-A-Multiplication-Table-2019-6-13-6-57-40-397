function isValue(start, end){
    return start <= end && start >= 1 && end <=1000; 
}
function printMultiplicationTable(start, end){
    var table = '';
    for(var i = start;i<=end;i++){
        for(var j = start;j<=i;j++){
            table += j+"*"+i+"="+(i*j);
            if(i!=j){
                table += "\t";
            }
        }
        if(i!=end){
            table+='\n';
        }
    }
    console.log(table);
    return table;
}

function createMultiplicationTable(start, end){
    
    if(isValue(start, end)){
        return printMultiplicationTable(start, end);
    }else{
        return null;
    }
    
}

module.exports = {
    isValue,
    printMultiplicationTable,
    createMultiplicationTable
}