function testFunction0city()
{
    console.log("city scripts");
   
}

function printCitiesInfo(data)
{
    let outputArea=document.getElementById('cityInfoOutputArea');
    let statusArea=document.getElementById('cityStatusIndicator');
    try 
    {
        if (data.length==0)
        {
            outputArea.innerHTML='';
            statusArea.innerHTML='No data';
            return false;
        }
    }
    catch(e)
    {
        outputArea.innerHTML='';
        statusArea.innerHTML='No data';
        return false;
    }
    let tableOpener=
    `
        <table id="cityInfoTable"><tbody>
    `;
    let tableCloser=
    `
        </tbody></table>
    `;
    let tableHeader=
    `
        <tr>
            <th>City</th><th>CoOrdinates</th>
        </tr>
    `;
    let middleRows='';
    for (let i=0;i<data.length;i++)
    {
        middleRows=middleRows+
        `
            <tr>
                <td>${data[i]["city"]}</td>
                <td>${data[i]["coordinates"]}</td>
            </tr>
        `;
    };
    let fullOutput=
    tableOpener+tableHeader+middleRows+tableCloser;
    outputArea.innerHTML=fullOutput;
    statusArea.innerHTML='Ready';
}

function citiesCallBackend(inputFunction,parameters,callback)
{
    let fetchTarget='php/city_backend_0.php';
    let inputPackage={function:inputFunction,params:parameters};
    inputPackage=JSON.stringify(inputPackage);
    fetch(fetchTarget, 
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:inputPackage
        }
    )
    .then(response=>response.json())
    .then(data=>callback(data));
}

function isAlpha(input)
{
    const contained='abcdefghijklmnoqrstuvwxyz ';
    for(let i=0;i<input.length;i++)
    {
        if (contained.indexOf(input[i])==-1)
        {
            return false;
        }
    }
    return true;
}

function isNumber(input)
{
    const contained='0123456789';
    for (let i=0;i<input.length;i++)
    {
        if(contained.indexOf(input[i])==-1)
        {
            return false;
        }
    }
    return true;
}

function testPrint(data)
{
    console.log(data);
}

function fetchCitiesData()
{
    let functionName='fetchCitiesData';
    let params={'testParam':'Yes please all the data'};
    citiesCallBackend(functionName,params,printCitiesInfo);
}




function handleCitySubmit()
{
    console.log('js city submit button');
}

function cityInit()
{
    console.log("city widget init");
    cityAttachStyleSheet();
    fetchCitiesData();
}

function cityAttachStyleSheet()
{
    const styleSheetLocation='css/cityStyles.css';
    const styleLink=document.createElement('link');
    styleLink.rel='stylesheet';
    styleLink.type='text/css';
    styleLink.href=styleSheetLocation;
    document.head.appendChild(styleLink);
    
}


cityInit();