window.onload=function(){

x=[1,1,0];
w=[1,1,1];
n=0.5;
b=1;
w_b=1;
e = x[0]*w[0]+x[1]*w[1]+x[2]*w[2];

function sigmoid(e){
return 1/(1+Math.pow(Math.E,-e)) ;
}

alert(Math.tanh(e))
};
