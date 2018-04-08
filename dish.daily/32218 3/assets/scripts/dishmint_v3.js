function make2Darray(rows, cols, fill = 0){
var arr = new Array(rows).fill(new Array(cols).fill(fill))

arr.map(x => x.map(y => random([0,1])))
return arr
}
