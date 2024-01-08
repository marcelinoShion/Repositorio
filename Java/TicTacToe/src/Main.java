import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Random;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Mover a iniciacao para a funcao gameStart.
		
		
		gameStart();
	}
	public static void print (String[][] matrix) {
		System.out.println("  " + "123");
		for(int i = 0 ; i < matrix.length ; i++) {
			System.out.print(i + 1 + " ");
			for(int j = 0 ; j < matrix.length ; j++) {
				if(j == 2) {
					System.out.println(matrix[i][j]);
				}else {
					System.out.print(matrix[i][j]);
				}
			}
			
		}
		
	}
	public static void gameStart() {
		// adcionar uma array com todas as posicoes validas  
		//depois remover a posicao ao ser ocupada
		boolean valid = true ;
		while(valid == true) {
			try {
			Scanner choiceSc = new Scanner(System.in);
			
			System.out.println("_______________________________");
			System.out.println("[1] To play with X");
			System.out.println("[2] To play with O");
			System.out.println("_______________________________");
			int choice = choiceSc.nextInt();
			if(choice == 1 || choice == 2) {
				String playerChoice ;
				String machineChoice;
				if(choice == 1) {
					playerChoice = "X";
					machineChoice = "O";
					
				}else {
					playerChoice = "O";
					machineChoice = "X";
				}

				game(playerChoice,machineChoice);
				
				Scanner  playNSc = new Scanner (System.in);
				System.out.println("Press [1] to play again");
				
				int play =  playNSc.nextInt();
				if(play == 1) {
					game(playerChoice,machineChoice);
				}
				System.out.println("Game Over.");
				valid = false ;
				
			}else {
				System.out.println("Wrong number ");
			}
			} catch(Exception e) {
				throw new InputMismatchException("Invalid number");
				
				
			}
		}
		
		
			
	}
	public static void game( String pC , String mC) {
		String [][] matrix = new String [3][3];
		ArrayList <Integer> positions = new ArrayList<Integer>() ;
		int  number = 0 ;
		
		for(int i = 0 ; i < matrix.length ; i++) {
			for(int j = 0 ; j < matrix.length ; j++) {
				matrix[i][j] = String.valueOf(0);
				
				positions.add(number);
				number += 1 ;
			}
		}
		while (positions.size() != 0) {
			Scanner posSc = new Scanner(System.in);
			print(matrix);
			try {
			System.out.println("Insert column :");
			int x =  posSc.nextInt();
			
			System.out.println("Insert row :");
			int y =  posSc.nextInt();
			
			
			// apos receber a posicao da linha e coluna inserir na matrix o elemento x na 
			// posicao valida
			if(checkWinner(matrix,mC)) {
				System.out.println("The machine won"); 
				break ;
			}else if(x > 3 || x < 1 || y > 3 || y < 1 || matrix[y - 1][x -1] == pC  || matrix[y - 1][x -1] == mC  ) {
				System.out.println("Insert a valid position");
			}else {
				// inserindo na matrix 
				matrix[y - 1][x -1] = pC ;
//				System.out.println(matrix[y-1][x-1]);
				// encontrando a posicao
				int playerPosition = 0 ;
				boolean continueG = true ;
				
				for(int i = 0 ;i < 3 && continueG  ; i++) {
					for(int j = 0 ;j < 3 && continueG ; j++) {
						if( i == y -1  && j == x - 1) {
							continueG = false ;
							break;
						}
						else {
							playerPosition += 1;
						}
						
					}
					
				}
				for(int i = 0; i < positions.size() ; i++) {
					if(positions.get(i) == playerPosition) {
						positions.remove(i);
						break;
					}
				}
				
				// turno da maquina
				if(checkWinner(matrix,pC)) {
					System.out.println("The player won");
					break ;
				}else {
					Random choice = new Random();
					int machineChoice = choice.nextInt(positions.size());
					int iteration  =  positions.get(machineChoice);
					
					int searchPos = 0 ;
					boolean continueF = true ;
					
					for(int i = 0 ; i < 3 && continueF; i++) {
						for(int j = 0 ; j < 3 && continueF ; j++) {
							if(iteration == searchPos) {
								matrix[i][j] = mC ;
								continueF = false ;
								break;
							}
							searchPos += 1;
							
						}
					}
					
					positions.remove(machineChoice);
				}
		
			}
			// escolha e posicionamento da maquina
			
			}catch(Exception e){
				
				System.out.println("Insert a valid number ");	
				}
			
		}
		if(positions.size() == 0 && !checkWinner(matrix,mC) && !checkWinner(matrix,pC) ) {
			System.out.println("Draw");
		}
		
	}
	public static boolean checkWinner(String[][] matrix,String peca) {
		boolean won = false;
		int i = 0 ;
		int j = 0 ;
		
		for(int linCol = 0 ; linCol < 3 ; linCol ++) {
			// checar linha e colunas 
			if(matrix[linCol][j] == peca && matrix[linCol][j +1] == peca && matrix[linCol][j + 2] == peca ) {
			   won = true ;
			   return won;
			}
			if(matrix[j][linCol] == peca && matrix[j+1][linCol] == peca && matrix[j+2][linCol] == peca ) {
				won = true ;
				return won ;
			}
		if(matrix[i][j] == peca && matrix[i+1][j+1] == peca && matrix[i+2][j+2] == peca ) {
			won = true ;
		}
		if(matrix[i+2][j] == peca && matrix[i+1][j+1] == peca && matrix[i][j+2] == peca ) {
			won = true ;
		}
		}
		return won;
	}
}
