disp = document.getElementById("display")

        disp2 = document.getElementById("display2")

        btn = document.getElementsByClassName("numero")

        Array.prototype.forEach.call (btn, (button) => {
            button.addEventListener("click", () => {
                if(disp.value=="0") disp.value = button.innerText;
                else disp.value+=button.innerText;
            })
        }) //writing numbers on the display

        /*Calcolo delle operazioni. L'idea è quella di aggiungere la cifra scritta
        sul display inferiore a quello superiore ad ogni operatore cliccato. Se al momento
        dell'aggiunta sul diplay superiore c'è già una cifra con un operatore selezionato,
        verrà fatta l'operazione con la cifra ricavata dal display sotto, in base all'operatore
        presente sul display superiore.*/

        function op(operatore) // calculating and displaying +, -, *, / operations
        {
            if (disp2.value == "0")
            {
                disp2.value=display.value+operatore;
                display.value="0";
            }

            else
            {
                switch(disp2.value.slice(disp2.value.length-1, disp2.value.length))
                {
                    case "+":
                        {
                            let somma = Number(disp.value) + Number(disp2.value.slice(0, disp2.value.length-1));
                            disp2.value=String(somma)+operatore;
                            disp.value="0";
                            break;
                        }

                    case "-":
                        {
                            let diff = Number(disp2.value.slice(0, disp2.value.length-1)) - Number(disp.value);
                            disp2.value=String(diff)+operatore;
                            disp.value="0";
                            break;
                        }

                    case "x":
                        {
                            let molt = Number(disp.value) * Number(disp2.value.slice(0, disp2.value.length-1));
                            disp2.value=String(molt)+operatore;
                            display.value="0";
                            break;
                        }
                    case "/":
                        {
                            let div = Number(disp2.value.slice(0, disp2.value.length-1)) / Number(disp.value);
                            disp2.value=String(div)+operatore;
                            display.value="";
                            break;
                        }
                }
            }
        }

        function sr() //square root
        {
            let sqrtNum = Math.sqrt(Number(disp.value));
            disp.value = String(sqrtNum);
        }

        function sq() //number^2
        {
            let sqrNum = (Number(disp.value))**2;
            disp.value = String(sqrNum);
        }

        function onedivx() //1/x
        {
            let odxNum = 1/(Number(disp.value));
            disp.value = String(odxNum);
        }

        function changeSign() //changes num sign
        {
            let cs = (Number(disp.value))*(-1);
            disp.value = String(cs);
        }

        function addComma()
        {
            if (disp.value.includes(".")==false) disp.value += ".";
        }

        function del() //delete the last number in the first display
        {
            if (disp.value.length > 1) disp.value = disp.value.slice(0, -1);
            else disp.value = "0";
        }

        function canc()
        {
            disp.value = "0";
        }

        function cancEv()
        {
            disp.value = "0";
            disp2.value = "0";
        }