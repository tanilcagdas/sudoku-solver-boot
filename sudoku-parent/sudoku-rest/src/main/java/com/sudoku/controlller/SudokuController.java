package com.sudoku.controlller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sudoku.beans.Cell;
import com.sudoku.beans.Row;
import com.sudoku.beans.Sudoku;
import com.sudoku.service.BrainIF;
import com.sudoku.service.ParserService;

@RestController
public class SudokuController {
	
	@Autowired
	private BrainIF brain;
	
	@Autowired
	private ParserService parserService;
	
	@RequestMapping("/solve")
    public List<Row> solve(@RequestBody RowArrayModel rowArrayModel) {
        return clearRecusionAndGetRowArray(brain.solveSudoku(rowArrayModel.getRowArray().get(0).getSudoku()));
    }
	
	@RequestMapping("/solveWebSudoku")
    public List<Row> solveRandom() {
		Sudoku sudoku = null;
		try {
			sudoku = parserService.parseWebSudoku();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		sudoku = brain.solveSudoku(sudoku);
		return clearRecusionAndGetRowArray(sudoku);
    }
	
	@RequestMapping("/parseWebSudoku")
    public List<Row> parseRandom() {
		Sudoku sudoku = null;
		try {
			sudoku = parserService.parseWebSudoku(0,4);
//			sudoku = brain.solveSudoku(sudoku);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return clearRecusionAndGetRowArray(sudoku);
    }
	
	 @MessageMapping("/hello")
	    @SendTo("/topic/greetings")
	    public  String greeting(String message) throws Exception {
	        Thread.sleep(1000); // simulated delay
	        return message;
	    }

	private List<Row> clearRecusionAndGetRowArray(Sudoku sudoku) {
		List<Row> rowArray = sudoku.getRowArray();
		for (Row row : rowArray) {
			row.setSudoku(null);
			for (Cell cell : row.getGroup()) {
				cell.setRow(null);
				cell.setColumn(null);
				cell.setThreeByThreeSquare(null);
			}
		}
		return rowArray;
	}
	
	

}
