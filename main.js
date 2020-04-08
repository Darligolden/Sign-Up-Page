let data = [
{principal:2500, time:1.8},
{principal: 1000, time:5},
{principal: 3000, time:1},
{principal: 2000, time:3}

];
function intrestCalculator(data);
{let intrestData=[]}


let mainIntrest=3;
let rate=0;
let principal=data[x].principal;
let time=data[x].time;
//conditions

if (data[x].principal>=2500 && data.time>1<3){
    let rate=3
}
 else if (data.principal>=2500 && data.time >=3){
    let rate=4
 }

else if (data.principal <2500 || data.time <=1){
    let rate=2
}else{
let rate=1


intrest=(principal*rate*time)/100;

newData=(principal:principal, rate:rate, time:time, intrest:intrest);
intrestData.push(newData);

}

console.log(intrestData);
return intrestData
intrestCalculator(data)