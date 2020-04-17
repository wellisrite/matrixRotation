
function Matrix(numbers = []) {
	this.numbers = numbers,
	this.getNumbers = () => {
		let array = []

		let nums = []
		for (let i = 1; i <= 25; i++) {
		    array.push(i)
		    if (i % 5 === 0) {
		      nums.push(array)
		      array = []
		    }
		}

		this.numbers = nums
		this.print()
	},
	this.rotate = (direction = "left") => {
	    console.log(`Rotating matrix to ${direction}`)
	    newMatrix = []
	    len = this.numbers.length
	    rowLen = this.numbers[0].length
	    
            fillArray = (array, i) => {
		if (direction === 'left') {
			for (let j = 0; j < rowLen ; j++) {
				array.push(this.numbers[j][i])
			}
		} else {
			for (let j = rowLen - 1; j >= 0 ; j--) {
				array.push(this.numbers[j][i])	
			}
		}
	    }

	    if (direction === "left") {
		    for (let i = len - 1; i >= 0; i--) {
				array = []			
				fillArray(array, i)
				newMatrix.push(array)
		    }
		} else {
			for (let i = 0; i < len; i++) {
				array = []			
				fillArray(array, i)
				newMatrix.push(array)
		    }
		}


	    this.numbers = newMatrix
	    this.print()
	},
	this.print = () => {
		console.log(this.numbers)
	}
}

matrix = new Matrix()

module.exports = matrix
