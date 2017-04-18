 app.controller('sudokuCtrl',  ['$scope','SudokuService', 'SudokuCreatorService', function($scope, SudokuService, SudokuCreatorService)  {
 	console.log("Sudoku Controller");

 	$scope.sudoku;


 	function init() {
 		$scope.sudoku = new Sudoku() ;
 		<!--printSudoku($scope.sudoku);-->
 	};

 	$scope.loadDemo = function(){
 		$scope.sudoku  = SudokuService.loadDemoSudoku($scope.sudoku )
 	};

 	$scope.loadFromJava = function(){
 		$scope.sudoku  = parseFromJava($scope.sudoku )
 	};

 	init();


 	res = SudokuService.parse();
 	res.then(function(response) {
 		var finalData = response.data;

 		for (i = 0; i < finalData.length; i++) { 

 			sudokuGroup = $scope.sudoku.rowArray[i].group;
 			restGroup = finalData[i].group;
 			for (j = 0; j < sudokuGroup.length; j++) { 
 				sudokuGroup[j].value = restGroup[j].value;

 			}

 		}

 	}, function errorCallback(response) {
 		console.log(response.status + " : " + response.statusText);
 	});

    $scope.solve = function(){
 	res2 = SudokuService.solveSudoku($scope.sudoku);
 	res2.then(function(response) {
 		var finalData = response.data;

 		for (i = 0; i < finalData.length; i++) { 

 			sudokuGroup = $scope.sudoku.rowArray[i].group;
 			restGroup = finalData[i].group;
 			for (j = 0; j < sudokuGroup.length; j++) { 
 				sudokuGroup[j].value = restGroup[j].value;
 				sudokuGroup[j].color = restGroup[j].color;
 			}

 		}

 		$scope.sudoku.syncThreeByThreeSquaresToRow();

 	}, function errorCallback(response) {
 		console.log(response.status + " : " + response.statusText);
 	});
 };


 	$scope.solveJS = function(){
 		$scope.sudoku  = SudokuService.solveSudokuJS($scope.sudoku );
 	};

 	$scope.solveSudokuStepByStep = function(i){
 		$scope.sudoku  = SudokuService.solveSudokuStepByStep($scope.sudoku, i );
 	};

 	

 	$scope.clear = function(){
 		init();
 	};

 	
 	//$scope.sudoku  = SudokuCreatorService.create()

 	console.log($scope.sudoku);

 }]);


	
	//  var sudokuSolution;

	
	
	

	
	// 	reset();


	// function action(){
	// 	sudokuSolution=solveSudoku(sudoku);
	// 	return "succes";
	// }

	// function solveStepByStep1(){
	// 	solveStepByStep( 1);
	// 	return "succes";
	// }
	// function solveStepByStep2(){
	// 	solveStepByStep( 2);
	// 	return "succes";
	// }
	// function solveStepByStep( algorithm){
	// 	if(!startedSolving()){
	// 		sudokuSolution=solveSudokuStepByStep(sudoku, algorithm);
	// 	}else{
	// 		sudokuSolution=solveSudokuStepByStep(sudokuSolution, algorithm);
	// 	}
	// 	return "succes";
	// }

	// function startedSolving() {
	// 	for ( i = 0; i < 9; i++) {
	// 		for ( j = 0; j < 9; j++) {
	// 			cell = sudokuSolution.getRowArray().get(i).getGroup().get(j);
	// 			if(cell.getValue() != 0){
	// 				return true;
	// 			}
	// 		}
	// 	};
	// 	return false;
 //    };
 //    function reset(){
	// 	sudoku= new Sudoku();
	// 	sudokuSolution = new Sudoku();
	// 	return null;
 //    }
 //    function loadDemoSudoku(){
	// 	reset();
	// 	sudoku = brain.loadDemoSudoku(sudoku);
	// 	return null;
 //    }
 //    function loadWebSudoku() {
	// 	reset();
	// 	sudoku = Parser.parseWebSudoku(0,selectedSudokuLevel);
	// 	return null;
 //    }
 //    function loadCustomWebSudoku() {
	// 	reset();
	// 	sudoku = Parser.parseWebSudoku(getSelectedSudokuId(),getSelectedSudokuLevel());
	// 	return null;
 //    }
 //    function loadUnSolvedSudoku() {
	// 	reset();
	// 	sudoku = NotSolvedWriter.readANonSolvedSudoku();
	// 	return null;
	// }

	// function isSudokuCorrect() {
	// 	if(startedSolving()){
	// 		return 	brain.isSudokuCorrect(sudokuSolution);
	// 	}else {
	// 		return false;
	// 	}
 //    }
    
	// function setSudokuCorrect(sudokuCorrect) {
	// 	this.sudokuCorrect = sudokuCorrect;
	// }

	// function getDemoSudoku() {
	// 	return sudoku;
	// }

	// function setDemoSudoku( demoSudoku) {
	// 	SudokuController.sudoku = demoSudoku;
	// }
	// function getSudokuSolution() {
	// 	return sudokuSolution;
	// }
	// function setSudokuSolution( sudokuSolution) {
	// 	SudokuController.sudokuSolution = sudokuSolution;
	// }

	// function getSelectedSudokuId() {
	// 	return selectedSudokuId;
	// }

	// function setSelectedSudokuId( selectedSudokuId) {
	// 	this.selectedSudokuId = selectedSudokuId;
	// }

	// function getSelectedSudokuLevel() {
	// 	return selectedSudokuLevel;
	// }

	// function setSelectedSudokuLevel( selectedSudokuLevel) {
	// 	this.selectedSudokuLevel = selectedSudokuLevel;
	// } 

