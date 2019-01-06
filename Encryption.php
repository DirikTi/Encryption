<?php

class Cryptional
{

	function EncryptionModule($password)
	{
		include 'LettersNumbers.php';		
		//LettersNumbers

		$count = strlen($password);

		$newPassword = "";

		for($i = 0; $i < $count; $i++){
			for($LetterCount = 0; $LetterCount < count($Uppercase); $LetterCount++){
				switch ($password[$i]) {
					case $Uppercase[$LetterCount]:
						$newPassword = $this -> changeEncry($i,$LetterCount,$EncryptionUppder,$newPassword);

						break;
					case $Lowercase[$LetterCount]:
						$newPassword = $this -> changeEncry($i,$LetterCount,$EncryptionLower,$newPassword);
						
						break;
					case $Number[$LetterCount]:
						$newPassword = $this -> changeEncry($i,$LetterCount,$EncryptionNumber,$newPassword);
						break;
					default:
						break;
				}
			}
		}
		return $newPassword;

	}


	function changeEncry($i,$LetterCounts,$WhichCryption,$newPassword){
		$newPassword = $newPassword.$WhichCryption[$LetterCounts];
		
		//$LetterCount = 25;
		
		return $newPassword;
	}




	//Decryption

	function DecryptionModule($password){
		include 'LettersNumbers.php';

		$count = strlen($password);
		$newPassword = "";
		$isNumeric = true;

		for($i = 0;$i< $count;$i++){
			
			if(ctype_digit($password[$i])){
				$letterPassword = $password[$i].$password[$i+1];
				$i++;
				$isNumeric = false;
			}else{
				$letterPassword = $password[$i];
				$isNumeric = true;
			}

			for($LetterCount = 0;$LetterCount <count($Uppercase);$LetterCount++){
				switch ($letterPassword) {
					case $EncryptionUppder[$LetterCount]:
						$newPassword = $this -> changeEncry($i,$LetterCount,$Uppercase,$newPassword);
						break;
					case $EncryptionLower[$LetterCount]:
						$newPassword = $this -> changeEncry($i,$LetterCount,$Lowercase,$newPassword);
						break;
					case $EncryptionNumber[$LetterCount]:
						$newPassword = $this -> changeEncry($i,$LetterCount,$Number,$newPassword);
						break;
					default:
						# code...
						break;
				}
			}
		}
		return $newPassword;
	}

	function changeDencry($i,$LetterCounts,$WhichCryption,$newPassword){
		$newPassword = $newPassword.$WhichCryption[$LetterCounts];
		//$LetterCount = 25;
		return $newPassword;

	}

	function encryption($password){
		$newPassword = $this -> EncryptionModule($password);
		echo $this -> EncryptionModule($newPassword);
	}

	function decryption($password)
	{
		$newPassword = $this -> DecryptionModule($password);
		echo $this -> DecryptionModule($newPassword);
	}
}
?>