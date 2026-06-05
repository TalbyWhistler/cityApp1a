<?php 
    include 'city_db_operations.php';
    $rawInput=file_get_contents('php://input');
    $jsonInput=json_decode($rawInput,true);
    $function=$jsonInput["function"];
    $outputMessage='';

    switch($function)
        {
            case("testFunction"):
            {
                
                $functionParams=$jsonInput["params"];
                $testNumber=$functionParams["testNumber"];
                $outputMessage='Test function control test number is ' .$testNumber;
                break;
            }
            case("fetchCitiesData"):
                {
                    $functionParams=$jsonInput["params"];
                    $testParam=$functionParams["testParam"];
                    $outputMessage='fetchCitiesData control has fired with '.$testParam;
                    $outputMessage=fetchCitiesInfo();

                    break;
                }
          
        }
    


    echo json_encode($outputMessage);


?>