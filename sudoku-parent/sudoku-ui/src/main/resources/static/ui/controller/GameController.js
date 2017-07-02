 app.controller('gameCtrl',  ['$rootScope', '$scope','SudokuService', 'SudokuCreatorService', function($rootScope,$scope, SudokuService, SudokuCreatorService)  {
 	console.log("Game Controller");

 	$rootScope.sudoku;
 	
 	$scope.inputChange = function (cell,keyEvent) {
 		if ( isNaN(String.fromCharCode(keyEvent.keyCode) )) {
 			return false;
 		}
 		var cell1 = {
 			'rowIndex':cell.row.index,
 			'columnIndex':cell.column.index,
 			'value':keyEvent.key,
 			'user':$rootScope.user
 		}
	    stompClient.send("/app/move", {}, JSON.stringify({'cell':cell1}));
	}


 	function init() {
 		$rootScope.sudoku = new SimpleSudoku() ;
 		$scope.loadDemo();
 	};

 	$scope.loadDemo = function(){
 		$rootScope.sudoku  = SudokuService.loadDemoSudoku($rootScope.sudoku )
 	};

 	init();

 	console.log($rootScope.sudoku);

 }]);
