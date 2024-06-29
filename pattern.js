function createPattern(rows, cols) {
    cols=parseInt(cols/2+1)
    console.log(cols);
    let pattern = '';
pattern += ' ___    '.repeat(cols) + '\n';


pattern += '/   \\___'.repeat(cols-1) ;
pattern+='/   \\'+ '\n'
  
    
    for (let row = 0; row < rows; row++) {
    
        for (let col = 0; col < cols; col++) {
            pattern += '\\___/';
            if (col < cols - 1) {
                pattern += '   ';
            }
            else if(col===cols-2 && row<rows-2){
                pattern+='   \\'
            }
        }
        
        if (row < rows - 1) {
            pattern += '\n';
            for (let col = 0; col < cols-1; col++) {
                pattern += '/   \\___';
                if(col===cols-2){
                    pattern += '/';
                    pattern+='   \\\n'
                }
                
            }
            
            
            // pattern += '/\n';
        } else {
            pattern += '\n';
        }
    }

    return pattern;
}

const rows = 4; // Number of rows
const cols =7; // Number of columns
console.log(createPattern(rows, cols));
