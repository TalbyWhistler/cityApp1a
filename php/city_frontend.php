<?php        
    $cityPageId="cityPage";
    $panelClass="cityInputPanel";
    $panelInputsClass="cityPanelInputs";
    $titleClass="cityTitle";
   
    $submitButtonId="citySubmitButton";
    
    // components
    $titleBox=
    '
        <h1 class='.$titleClass.'>Cities</h1>
    ';
    $cityInput=
    '
        <label for="cityCityInput">City:</label>
        </br>
        <input class='.$panelInputsClass.'name="cityCityInput" id="cityCityInput">
    ';

    $coOrdsInput=
    '
        </br>
        <label for="coordsCityInput">CoOrdinates:</label>
        </br>
        <input class='.$panelInputsClass.'name="coordsCityInput" id="coordsCityInput">
    ';
    
    $citySubmitButton=
    '
        </br>
        <button onclick="handleCitySubmit()" id='.$submitButtonId.'>Submit</button>   
    ';
    $statusIndicator='<div id="cityStatusIndicatorBox"><p id="cityStatusIndicator">Ready</p></div>';
    $inputBox=
    '
        <div id="cityInputBox" class='.$panelClass.'>
        '.$cityInput.$coOrdsInput.$citySubmitButton.$statusIndicator.'
        </div>
    ';
    
    $middleBand='
        <div id="cityMiddleBand">
            '.'
        </div>';
    $infoOutputArea='<div id="cityInfoOutputArea"></div>';
    $scriptLink='<script src="js/cityScripts.js"></script>';

    $fullOutput='<div id='.$cityPageId.'>'.
        $titleBox
        .$inputBox
        //.$scriptTestButton 
        .$scriptLink
        .$middleBand
        .$infoOutputArea.'</div>';

 
    
    echo
         
        $fullOutput;
?>