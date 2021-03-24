class LinearAlgebra{
	
	transpose(a){
		
		let c;
		
		if(a instanceof Vector){
			 c = new Vector(a.size)
			 c.rows = a.cols;
			 c.cols = a.rows;
			 
			 for(let i = 1; i <= c.size; i++){
				 
				 c.set(i, a.get(i));
			 }
			
		}else if(a instanceof Matrix){
			
			c = new Matrix(a.cols, a.rows)
			
			for(let i = 1; i <= c.rows;i++){
				
				for(let j = 1; j <= c.cols; j++){
				
					c.set(i,j, a.get(j,i));
				
				}
			
			}
		} else{
			
			throw"O parâmetro deve um ser um objeto do tipo vetor ou matriz"
		}
		
		return c;
		
	}
	
	plus(a,b){
		
		if( typeof a == "object" && a instanceof Matrix){
			
			if(typeof b != "object" || !(b instanceof Matrix)){
				
				throw"O parâmetro b deve ser uma Matrix"
			};
			
			if(a.rows != b.rows || a.cols != b.cols){ 
				
				throw "As matrizes passadas como parâmetros são incompatíveis"
			};
			
			let c = new Matrix(a.rows, a.cols)
			
			for(let i = 1; i <= c.rows;i++){
				for(let j = 1; j <= c.cols; j++){
					c.set(i,j, a.get(i,j) + b.get(i,j))
				}
			}
				
			return c
		
		} else{	
			
			throw"O parâmetro a deve ser uma Matrix"
			
		} 
		
	}
	
	times(a,b){
		
		if(typeof b != "object" || !(b instanceof Matrix)){
			
			throw"O parâmetro b deve ser uma Matrix"
		}
		
		let c = new Matrix(b.rows, b.cols);
		
		if(typeof a == "number"){
			
			for(let i = 1; i <= c.rows;i++){
				for(let j = 1; j <= c.cols; j++){
					c.set(i,j, a * b.get(i,j))
				}
			}
		
		} else if(typeof a == "object" && a instanceof Matrix){
			
			if(a.rows != b.rows || a.cols != b.cols) throw "As matrizes passadas como parâmetros são incompatíveis";
		
			for(let i = 1; i <= c.rows;i++){
				for(let j = 1; j <= c.cols; j++){
					
					c.set(i,j, a.get(i,j) * b.get(i,j))
				}
			
			}
		 
		} else{
			
			throw"O parâmetro deve  ser um escalar número ou uma matriz.";
		}
	
		return c
		
	}
	
	div(a,b){
		
		if( typeof a == "object" && a instanceof Matrix){
			
			if( typeof b != "object" || !(b instanceof Matrix)){
				throw"O parâmetro b deve ser uma Matrix"
			}
			
			if(a.rows != b.rows || a.cols != b.cols){ 
				throw "As matrizes passadas como parâmetros são incompatíveis"
			}			
			
			for(var x = 0;x <= b.values.length;x++){
                if(b.values[x] == 0) throw "Existe um elemento zerado";
			}
			
			let c = new Matrix(a.rows, a.cols)
		
			for(let i = 1; i <= c.rows;i++){
				for(let j = 1; j <= c.cols; j++){
					c.set(i,j, a.get(i,j) / b.get(i,j))
				}
				
			}
			
			return c
		
		}else{
			
			throw"O parâmetro a deve ser matrix.";
		}
			
	}
	
	dot(a,b){
		
		if( typeof a == "object" && a instanceof Matrix){
			
			if( typeof b != "object" || !(b instanceof Matrix)){
				throw"O parâmetro b deve ser uma Matrix"
			}
		
			if(a.cols != b.rows){
				throw "As matrizes passadas como parâmetros são incompatíveis"
			}

			let c = new Matrix(a.rows, b.cols)
			
			for(let i = 1; i <= a.rows; i++){
				for(let j = 1; j <= b.cols; j++){
					for(let k = 1; k <= a.cols; k++){
						c.set(i,j, a.get(i,k) * b.get(k,j) + c.get(i,j))
					} 
				}
			}
			
			return c
			
		}else{
				throw"O parâmetro a deve ser matrix.";
			}
		
	};
	
	Troca(a){
		let aux = a.get(1 , 1);
		let linhaMaior = 1;
            
			for(let i = 2;i <= a.rows;i++){
                
				if(aux < a.get(i , 1)){
                    aux = a.get(i , 1);
                    linhaMaior = i;
            }
        }

         for(let j = 1;j<=a.cols;j++){
            
			MatrixAux.set(1 , j,a.get(1 , j));
            
			a.set(1 , j,a.get(linhaMaior , j));
            
			a.set(linhaMaior , j,MatrixAux.get(1 , j));
        }
        
	}
	
	TrocaLinha(a, ri, rk){
		
		for(let k = 1; k <= a.cols; k++){
			let aux = a.get(ri, k);
			a.set(ri,k, a.get(rk, k));
			a.set(rk, k, aux);		
		}
	}
	
	MultiplicaLinha(a, rj, k ){
		for(let i = 1; i <= a.cols; i++){
			a.set(rj, i, k * a.get(rj, i))
		}	
	}
	
    DiagonalBaixo(a){
		let dist = a.rows - 1;
            
			for(let i = 0;i < dist;i++){
				
				for(let k = 0; k < dist - i;k++){
                    
					let constante = (-1 * a.get(2 + k + i , 1 + i)) / a.get(1 + i,1 + i);
                       
					   for(let j = 1;j <= a.cols;j++){
							
							let c = (constante * a.get(1 + i, j)) + a.get(2 + k + i, j);
                               
							   a.set(2 + k + i , j , c);
						}
				}
			}
	}
	
	DiagonalCima(a){
     
     	let dist = a.rows - 1;
            
			for(let i = 0; i < dist; i++){
				
				for(let k = 0;k < i + 1;k++){
                    
					let constante = (-1 * a.get(2 + i - k - 1 , 2 + i)) / a.get(2 + i, 2 + i);
                       
					   for(let j = 1;j <= a.cols;j++){
                            
							let c = constante * a.get(2 + i, j) + a.get(2 + i - 1 - k, j);
                           
								a.set(2 + i - 1 - k , j, c);
						}
				}
			}
	}
	
	DiagonalPrincipal(a){
		
		for(let j = 1; j <= a.cols - 1; j++){
			this.MultiplicaLinha(a, j, 1 / a.get(j, j))
		}	
	}
	
	Solve(a){
		this.Troca(a)
		this.DiagonalBaixo(a);		
		this.DiagonalCima(a);
	}
	
	Gauss(a){
		
		if(typeof a != "object" || !(a instanceof Matrix)){
			
			throw"O parâmetro a deve ser uma Matrix"
		}
		
		if(a.cols < a.rows){
			
			throw"A matriz passada como parâmetro possui menos colunas do que linhas"
		}
		
		let resp = {
			matrix: new Matrix(a.rows, a.cols, a.values.slice()),
			coef: 1
		}
		
		let dist = resp.matrix.rows - 1;
            
			for(let i = 0;i < dist;i++){
				
				for(let k = 0; k < dist - i;k++){
					
					if(resp.matrix.get( i + 1, i + 1) == 0){
						for( let h = 1; h <= resp.matrix.rows ; h++){
							if(resp.matrix.get(h + 1,i + 1) !=0){
								this.TrocaLinha(resp.matrix, i + 1, h + 1 );
								resp.coef *= -1;
								break;
							}
							
						}
						
					}
                   
					let constante = -1 * resp.matrix.get(2 + k + i , 1 + i) / resp.matrix.get(1 + i,1 + i);
                       
					   for(let j = 1;j <= a.cols;j++){
							
							let c = constante * resp.matrix.get(1 + i,j) + resp.matrix.get(2 + k + i,j);
                               
							   resp.matrix.set(2 + k + i , j , c);
						}
				}
			}
			
			return resp;
	}
	
	Det(a){
		if(typeof a != "object" || !(a instanceof Matrix)){
				
			throw"O parâmetro deve ser uma matrix"
		}
		let resp = this.Gauss(a)
		let det = resp.coef;
		
		for(let i = 1; i <= resp.matrix.rows; i++){
			
			det *= resp.matrix.get(i,i);
		}
		return det;
	}
	
	SolveDet(a){
		
		if(typeof a != "object" || !(a instanceof Matrix)){
			throw"O parâmetro deve ser uma matriz"
		}
		
		if(a.cols != a.rows + 1){
			
			throw"Matriz com parâmetros incompatíveis"
		}
		
		let c = this.Gauss(a).matrix;
		
		this.DiagonalCima(c);
		this.DiagonalPrincipal(c);
		
		let vector = new Vector(c.rows);
		
		for(let i = 1; i <= vector.size; i++){
			
			vector.set(i, c.get( i, c.cols)); 
		}
		
		return vector;
	}
		
	Inverse(a){
		
		if(typeof a != "object" || !(a instanceof Matrix)){
			
			throw"O parâmetro a deve ser uma Matrix"
		}
		
		if(a.rows != a.cols){
			
			throw"Os parâmetros passados são incompatíveis"
		}
		
		
		let c = new Matrix(a.rows, (a.cols * 2))
		let m = new Matrix(a.rows, a. cols);
		let k = a.cols;
		
		
		for(let i = 1; i <= a.rows;i++){
				m.set(i,i,1);
			}
		

		for(let i = 1; i <= a.rows;i++){
			
			for(let j = 1; j <= a.cols; j++){
				
				c.set(i,j, a.get(i,j));
			}
		}
	
		
		for(let i = 1; i <= c.rows; i++){
			for(let j = c.rows + 1; j <= c.cols; j++){
				
				c.set(i,j, m.get(i, j - k));
			}	
		}	
			
		this.DiagonalBaixo(c);
		this.DiagonalCima(c);
		
		
		for(let j = 1; j <= c.cols - k; j++){
			this.MultiplicaLinha(c, j, 1 / c.get(j, j))
		}	
		
		let inverse = new Matrix(a.rows, a.cols)
		
		for(let i = 1; i <= c.rows; i++){
			for(let j = c.rows + 1; j <= c.cols; j++){
				
				inverse.set(i, (j - k), c.get(i,j));
			}	
		}
		
		return inverse;
		
	}
		
	Resposta(a,b){
        document.write("-------------------------------------------------------------" + "<br>");
        document.write("arquivo " + b + ":" + "<br>");
            for(let i = 1;i <= a.rows;i++){
                document.write("x" + i + " vale: " + a.get(i,a.cols)/a.get(i,i) + "<br>");
            }
        
        document.write("-------------------------------------------------------------" + "<br>");
   
    }
	
}