const button1 = document.getElementById("button-calculate");
const button2 = document.getElementById("button-save");
const button3 = document.getElementById("button-reset");

const inputF = document.getElementById("inputF");
const inputC = document.getElementById("inputC");
const inputK = document.getElementById("inputK");
const alert = document.getElementById("alert");

let tableRef = document.getElementById("mytable");

button2.hidden = true;
button3.hidden = true;
alert.hidden = true;

let valueF = [1, 2, "fahrenheit1", 3, 4, 5, 6, "fahrenheit2", 44, 55, 66, 77, 88, 99, "fahrenheit3"];
valueF.push(8);

let valueC = [10, 20, 30, 40, 50, "celcius1", 60, 70, "celcius2"]
valueC.push(80);

let valueK = [100, 200, 300, 400, 500, "celcius1", 600, 700, "celcius2"]
valueK.push(800);


/* Value conversions */

  const value_CF = valueF.map(element => Math.round((element - 32) * 5/9));
  const value_CK = valueK.map(element => Math.round(element - 273));
  const value_FC = valueC.map(element => Math.round(element * 9/5 + 32));
  const value_FK = valueK.map(element => Math.round((element - 273) * 9/5 + 32));
  const value_KC = valueC.map(element => element + 273);
  const value_KF = valueF.map(element => Math.round((element - 32) * 5/9 + 273));


/* Button calculate */

const random = Math.floor(Math.random() * 3);
let i = 0;

/* 0 is fahrenheit
   1 is celcius
   2 is kelvin
*/

if(random === 0){
    inputF.innerHTML = valueF[i];
  }else if(random === 1){
    inputC.innerHTML = valueC[i];
  }else{
    inputK.innerHTML = valueK[i];
  };

  const tempConvert = event => {
    button1.hidden = true;
    button2.hidden = false;
    button3.hidden = false;

      if(random === 0){
        if(Number.isInteger(valueF[i])) {
          inputC.innerHTML = value_CF[i];
          inputK.innerHTML = value_KF[i];
        }else{
          inputC.innerHTML = "Please insert a number";
          inputK.innerHTML = "Please insert a number";
          alert.hidden = false;
        };
      };

      if(random === 1){
        if(Number.isInteger(valueC[i])) {
          inputK.innerHTML = value_KC[i];
          inputF.innerHTML = value_FC[i];
        }else{
          inputK.innerHTML = "Please insert a number";
          inputF.innerHTML = "Please insert a number";
          alert.hidden = false;
        };
      };

      if(random === 2){
        if(Number.isInteger(valueK[i])) {
          inputC.innerHTML = value_CK[i];
          inputF.innerHTML = value_FK[i];
        }else{
          inputC.innerHTML = "Please insert a number";
          inputF.innerHTML = "Please insert a number";
          alert.hidden = false;
        };
      };
  };


/* Button save */
/*
  const tempSave = event => {
    button1.hidden = false;
    button2.hidden = true;
    button3.hidden = true;
    alert.hidden = true;

    const random2 = Math.floor(Math.random() * 3);

    // 0 is fahrenheit
    // 1 is celcius
    // 2 is kelvin

    if(random === 0){
      inputC.innerHTML = '';
      inputK.innerHTML = '';
      valueF[i] = valueF[i++];
      inputF.innerHTML = valueF[i];
    };

    if(random === 1){
      inputF.innerHTML = '';
      inputK.innerHTML = '';
      valueC[i] = valueC[i++];
      inputC.innerHTML = valueC[i];
    };

    if(random === 2){
      inputF.innerHTML = '';
      inputC.innerHTML = '';
      valueK[i] = valueK[i++];
      inputK.innerHTML = valueK[i];
    };


    //table
    let countRows = 0;
    let rows = 10;

    function addRow() {
      if(countRows <= rows) {

        let newRow = tableRef.insertRow(-1);

          const newcell_0 = newRow.insertCell(0);
          newcell_0.innerHTML = valueF[i-1];
          newcell_0.className = 'newcell';

          const newcell_1 = newRow.insertCell(1);
          newcell_1.innerHTML = valueC[i-1];
          newcell_1.className = 'newcell';

          const newcell_2 = newRow.insertCell(2)
          newcell_2.innerHTML = valueC[i-1];
          newcell_2.className = 'newcell';

          const newcell_3 = newRow.insertCell(3)
          newcell_3.innerHTML = icon();
          newcell_3.className = 'newcellSymbol';

          function icon() {
            if(valueC[i-1]<-9) {return '<i class="fa fa-snowflake-o" aria-hidden="true"></i>';
              }else if(valueC[i-1]<15){
                return '<i class="fa fa-tint" aria-hidden="true"></i>';
              }else if(valueC[i-1]<22){
                return '<i class="fa fa-cloud" aria-hidden="true"></i>';
              }else if(valueC[i-1]>=22){
                return '<i class="fa fa-sun-o" aria-hidden="true"></i>';
              }else{
                return 'Error!';
              };
          };


      }else{
        for (let k = rows; k > 0; k--){
          tableRef.rows[k].cells[0].innerHTML = valueF[i-1-rows+k];
          tableRef.rows[k].cells[1].innerHTML = valueC[i-1-rows+k];
          tableRef.rows[k].cells[2].innerHTML = valueC[i-1-rows+k];
          tableRef.rows[k].cells[3].innerHTML = icon2();

          function icon2() {
            if(valueC[i-1-rows+k]<-9) {return '<i class="fa fa-snowflake-o" aria-hidden="true"></i>';
              }else if(valueC[i-1-rows+k]<15){
                return '<i class="fa fa-tint" aria-hidden="true"></i>';
              }else if(valueC[i-1-rows+k]<22){
                return '<i class="fa fa-cloud" aria-hidden="true"></i>';
              }else if(valueC[i-1-rows+k]>=22){
                return '<i class="fa fa-sun-o" aria-hidden="true"></i>';
              }else{
                return 'Error!';
              };
            };
        };
      };
    };
    countRows = countRows + i;
    addRow();
  };
*/

/* Button reset */

  const tempReturn = event => {
    button1.hidden = false;
    button2.hidden = true;
    button3.hidden = true;
    alert.hidden = true;

    const random = Math.floor(Math.random() * 3);

    /* 0 is fahrenheit
       1 is celcius
       2 is kelvin
    */

    if(random === 0){
      inputC.innerHTML = '';
      inputK.innerHTML = '';
      valueF[i] = valueF[i++];
      inputF.innerHTML = valueF[i];
    };

    if(random === 1){
      inputF.innerHTML = '';
      inputK.innerHTML = '';
      valueC[i] = valueC[i++];
      inputC.innerHTML = valueC[i];
    };

    if(random === 2){
      inputC.innerHTML = '';
      inputF.innerHTML = '';
      valueK[i] = valueK[i++];
      inputK.innerHTML = valueK[i];
    };
  };


/* Action buttons on click */

  button1.addEventListener('click', tempConvert);
  //button2.addEventListener('click', tempSave);
  button3.addEventListener('click', tempReturn);
