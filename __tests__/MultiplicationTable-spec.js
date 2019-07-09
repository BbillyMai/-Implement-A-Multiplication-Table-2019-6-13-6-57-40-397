const MuliplicationTable = require("../MultiplicationTable");

it ('should return true when invoke isValue given start is smaller than end', ()=>{

    expect(MuliplicationTable.isValue(1,4)).toBe(true);

});

it ('should return false when invoke isValue given start is bigger than end', ()=>{

    expect(MuliplicationTable.isValue(4,1)).toBe(false);

});

it ('should return false when invoke isValue given start 1 and end is', ()=>{

    expect(MuliplicationTable.isValue(1,1003)).toBe(false);

});

it ('should return table when invoke printMultiplicationTable given start and end', ()=>{

    expect(MuliplicationTable.printMultiplicationTable(2,4)).toBe(
        "2*2=4\n"
        +"2*3=6\t3*3=9\n"
        +"2*4=8\t3*4=12\t4*4=16");

});
