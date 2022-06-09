function CHvaKQ(room){
    let cauhoi = '';
    let ketqua = 0;
    const arr = ["+","-","x"]
    const mot0 = Math.floor(Math.random() * 10); //0-9
    const mot1 = Math.floor(Math.random() * 10); //0-9
    const mot2 = Math.floor(Math.random() * 10); //0-9
    const mot3 = Math.floor(Math.random() * 10); //0-9

    cauhoi = mot0 + " " + arr[Math.floor(Math.random() * 3)]  + " "
    + mot1 + " " + arr[Math.floor(Math.random() * 3)]  + " "
    + mot2 + " " + arr[Math.floor(Math.random() * 3)]  + " "
    + mot3

    const phantucauhoi = cauhoi.split(' ')
    
    if(phantucauhoi[1] === 'x' && phantucauhoi[3] === 'x' && phantucauhoi[5] === 'x'){
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === 'x' && phantucauhoi[3] === '+' && phantucauhoi[5] === '+'){
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === 'x' && phantucauhoi[3] === '-' && phantucauhoi[5] === '-'){
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === 'x' && phantucauhoi[3] === '+' && phantucauhoi[5] === '-'){
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === 'x' && phantucauhoi[3] === '-' && phantucauhoi[5] === '+'){
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === 'x' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '+'){
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === 'x' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '-'){
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '+' && phantucauhoi[3] === '+' && phantucauhoi[5] === '+'){
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '+' && phantucauhoi[3] === 'x' && phantucauhoi[5] === 'x'){
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '+' && phantucauhoi[3] === '-' && phantucauhoi[5] === '-'){
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '+' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '-'){
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '+' && phantucauhoi[3] === '-' && phantucauhoi[5] === 'x'){
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '+' && phantucauhoi[3] === '+' && phantucauhoi[5] === 'x'){
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '+' && phantucauhoi[3] === '+' && phantucauhoi[5] === '-'){
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '-' && phantucauhoi[3] === '-' && phantucauhoi[5] === '-'){
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '-' && phantucauhoi[3] === 'x' && phantucauhoi[5] === 'x'){
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '-' && phantucauhoi[3] === '+' && phantucauhoi[5] === '+'){
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '-' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '+'){
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '-' && phantucauhoi[3] === '+' && phantucauhoi[5] === 'x'){
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '-' && phantucauhoi[3] === '-' && phantucauhoi[5] === '+'){
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '-' && phantucauhoi[3] === '-' && phantucauhoi[5] === 'x'){
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === 'x' && phantucauhoi[3] === '+' && phantucauhoi[5] === 'x'){
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === 'x' && phantucauhoi[3] === '-' && phantucauhoi[5] === 'x'){
        ketqua = parseInt(phantucauhoi[0]) * parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) * parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '+' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '+'){
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '+' && phantucauhoi[3] === '-' && phantucauhoi[5] === '+'){
        ketqua = parseInt(phantucauhoi[0]) + parseInt(phantucauhoi[2]) - parseInt(phantucauhoi[4]) + parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '-' && phantucauhoi[3] === '+' && phantucauhoi[5] === '-'){
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) + parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    } else if(phantucauhoi[1] === '-' && phantucauhoi[3] === 'x' && phantucauhoi[5] === '-'){
        ketqua = parseInt(phantucauhoi[0]) - parseInt(phantucauhoi[2]) * parseInt(phantucauhoi[4]) - parseInt(phantucauhoi[6])
    }
    
    let result = {cauhoi, ketqua, room};
    return result;
}

function test(){
    let name = 'quangnhat';
    let ten = "quangnhat";
    let so = '9';
    let newso = parseInt(so);
    if(ten === 'quangnhat' && name === 'quangnhat'){
        console.log(typeof newso)
    } else {
        console.log('ko bang nhau');
    }
}

function CountChar(string){
    const result = [];
    const arrchar = [];
    let arr = [...string]
    arr = arr.filter((a)=>a!==" ");
    arr.map((s)=>{
       if(!arrchar.includes(s)){
          arrchar.push(s);
          result.push({char:s,count:1})
       } else {
          result.map((r)=>{
             if(r.char === s){
                r.count = r.count + 1;
             }
          })
       }
    })
    result.map((s)=>{
       console.log(s.char + "-" + s.count);
    })
 }
CountChar('truong thuy quang nhat');
//CHvaKQ('quangnhatjdeptrai')
//test()