class Matrix{

	constructor(rows, cols, values){
		this.rows = rows;
		this.cols = cols;
		
		if(values == undefined){
			this.values =[];
			for (let i = 0; i < this.rows * this.cols; i++){
				this.values.push(0);
			}
				
		}else{
			if(values.length == this.rows*this.cols){
				this.values = values;
			}else{
				throw "A quantidade de elementos é incompatível com o tamanho da matriz.";
			}
			
		}
		
	}
	
	get(i,j){
		return this.values[this.getIndex(i,j)];
		
	}
	
	set(i,j,values){
		this.values[this.getIndex(i,j)] = values;
	}
	
	getIndex(i,j){
		if(i < 1 || i > this.rows) throw "O índice da linha não corresponde ao tamanho da matriz" 
		if(j < 1 || j > this.cols) throw "O índice da coluna não corresponde ao tamanho da matriz" 
		return (j - 1) + (i - 1) * this.cols;
	}
	
	show(){
       let string = "";
		for(let i = 1; i <= this.rows; i++){
          string += "[ "
          for(let j = 1; j <= this.cols;j++){
             string += this.get(i,j) + " ";
            }
          string += "]"
          string += "\n"
        }
        console.log(string);
    }
	
	
}