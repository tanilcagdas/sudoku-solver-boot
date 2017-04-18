package com.sudoku.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.sudoku.beans.Sudoku;
import com.sudoku.service.BrainIF;
import com.sudoku.service.ParserService;

@Component
public class SudokuLineRunner implements CommandLineRunner {
	
	
	@Autowired
	private ParserService parserService;
	
	@Autowired
	private BrainIF brain;

	@Override
	public void run(String... arg0) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("run");
		for (int j = 4; j < 5; j++) {
			
		Sudoku sudoku = parserService.parseWebSudoku(0,j);
		long startTime = System.currentTimeMillis();
		sudoku = brain.solveSudoku(sudoku);
		System.out.println("took" + (System.currentTimeMillis() - startTime));
		System.out.println(sudoku);
		}
		
	}

}
