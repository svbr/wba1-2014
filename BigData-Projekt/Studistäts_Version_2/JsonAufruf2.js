$(window).ready(function(){
    $("#button1").click(function(){
        // Vorherige Daten löschen um Überschneidung der Charts zu vermeiden
        $("#chart-area-LineChart").remove();
        // Danach den leeren Container wieder hinzufügen für die neuen Daten
        $("#canvas-holder-10").append('<canvas id="chart-area-LineChart" height="300" width="800"/>');
        
        var jsLang = $('#Bundes_LineChart :selected').val();
            switch (jsLang) {
        case "baden_wurttemberg":
            var index1 = $('#Stud_LineChart :selected').val();
            var index3 = $('#Bundes2_LineChart :selected').val();
            var neu = index3;
            ChartActive15();
            // getJSON-Funktion holt die Daten aus der .json-Datei, Aufruf der Daten mit übergebenen Parameter data0
            $.getJSON("../JSON/baden_wurttemberg.json", function(data0){
                 $.getJSON("../JSON/studienanfanger_bundeslander.json", function(data1){
                     //Switch für die Auswahl in der studienanfanger_bundeslander, ineu wird als Index beim Objekt benutzt
                     var jsLang3 = $('#Bundes2_LineChart :selected').val();
                     switch(jsLang3){
                     case "baden_wurttemberg":
                             var neu = 0;
                             break;
                    case "bayern":
                             var neu = 16;
                             break;
                    case "berlin":
                             var neu = 32;
                             break;
                    case "brandenburg":
                             var neu = 48;
                             break;
                    case "bremen":
                             var neu = 64;
                             break;
                    case "hamburg":
                             var neu = 80;
                             break;
                    case "hessen":
                             var neu = 96;
                             break;
                    case "mecklenburg_vorpopmmern":
                             var neu = 112;
                             break;
                    case "niedersachsen":
                             var neu = 128;
                             break;
                    case "nordrhein_westfalen":
                             var neu = 144;
                             break;
                    case "rheinland_pfalz":
                             var neu = 160;
                             break;
                    case "saarland":
                             var neu = 176;
                             break;
                    case "sachsen_anhalt":
                             var neu = 191;
                             break;
                    case "sachsen":
                             var neu = 211;
                             break;
                    case "schleswig_holstein":
                             var neu = 221;
                             break;
                    case "thuringen":
                             var neu = 236;
                             break;
                    }
                     console.log(neu);
                     // Initialisierung der Variablen und Verwendung vom Index neu
                         var a = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)]["Insgesamt"]);
                         var b = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(1)]["Insgesamt"]);
                         var c = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(2)]["Insgesamt"]);
                         var d = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(3)]["Insgesamt"]);
                         var e = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(4)]["Insgesamt"]);
                         var f = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(5)]["Insgesamt"]);
                         var g = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(6)]["Insgesamt"]);
                         var h = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(7)]["Insgesamt"]);
                         var i = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(8)]["Insgesamt"]);
                         var j = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(9)]["Insgesamt"]);
                         var k = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(10)]["Insgesamt"]);
                         var l = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(11)]["Insgesamt"]);
                         var m = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(12)]["Insgesamt"]);
                         var n = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(13)]["Insgesamt"]);
                         var o = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(14)]["Insgesamt"]);
                         var p = parseInt(data1.Studienanfaenger_Bundesland[parseInt(neu)+parseInt(15)]["Insgesamt"]);
                        console.log(a);
                     console.log(b);
                     //Switch für das zweite BundesLand
                         var jslang1 = index3;
                        switch(jslang1){ 
                         case "baden_wurttemberg":
                            var hu = parseInt(index1+14);
                            
                            // Index setzt sich aus index1 aus der Studiengang Selectbox zusammen und der Stellen in der JSON-Datei
                            $.getJSON("../JSON/baden_wurttemberg.json", function(data2){
                                console.log(data2.baden_wurttemberg[parseInt(index1+3)]["Insgesamt"]);
                            var ws1 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(7)]["Insgesamt"]); 
                                console.log(data2.baden_wurttemberg[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                            var ws3 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                            var ws4 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(21)]["Insgesamt"]); 
                            var ws5 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(28)]["Insgesamt"]);
                            var ws6 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(35)]["Insgesamt"]);
                            var ws7 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(42)]["Insgesamt"]); 
                            var ws8 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(49)]["Insgesamt"]); 
                            var ws9 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(56)]["Insgesamt"]); 
                            var ws10 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(63)]["Insgesamt"]); 
                            var ws11 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(70)]["Insgesamt"]); 
                            var ws12 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(77)]["Insgesamt"]); 
                            var ws13 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(84)]["Insgesamt"]); 
                            var ws14 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(91)]["Insgesamt"]); 
                            var ws15 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(98)]["Insgesamt"]); 
                            var ws16 = parseInt(data2.baden_wurttemberg[parseInt(index1)+parseInt(105)]["Insgesamt"]);
                                console.log(ws2);
                                // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 2. Datensatz geladen 
                                myLineChart.datasets[1].points[0].value = parseInt(((ws1 * 100) / a));
                                myLineChart.datasets[1].points[1].value = parseInt(((ws2 * 100) / b));
                                myLineChart.datasets[1].points[2].value = parseInt(((ws3 * 100) / c));
                                myLineChart.datasets[1].points[3].value = parseInt(((ws4 * 100) / d));
                                myLineChart.datasets[1].points[4].value = parseInt(((ws5 * 100) / e));
                                myLineChart.datasets[1].points[5].value = parseInt(((ws6 * 100) / f));
                                myLineChart.datasets[1].points[6].value = parseInt(((ws7 * 100) / g));
                                myLineChart.datasets[1].points[7].value = parseInt(((ws8 * 100) / h));
                                myLineChart.datasets[1].points[8].value = parseInt(((ws9 * 100) / i));
                                myLineChart.datasets[1].points[9].value = parseInt(((ws10 * 100) / j));
                                myLineChart.datasets[1].points[10].value = parseInt(((ws11 * 100) / k));
                                myLineChart.datasets[1].points[11].value = parseInt(((ws12 * 100) / l));
                                myLineChart.datasets[1].points[12].value = parseInt(((ws13 * 100) / m));
                                myLineChart.datasets[1].points[13].value = parseInt(((ws14 * 100) / n));
                                myLineChart.datasets[1].points[14].value = parseInt(((ws15 * 100) / o));
                                myLineChart.datasets[1].points[15].value = parseInt(((ws16 * 100) / p));
                            });
                         break;
                         case "bayern":
                            $.getJSON("../JSON/bayern.json", function(data2){
                            // Index setzt sich aus index1 aus der Studiengang Selectbox zusammen und der Stellen in der JSON-Datei
                            var ws1 = parseInt(data2.bayern[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.bayern[parseInt(index1)+parseInt(7)]["Insgesamt"]); 
                            var ws3 = parseInt(data2.bayern[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                            var ws4 = parseInt(data2.bayern[parseInt(index1)+parseInt(21)]["Insgesamt"]); 
                            var ws5 = parseInt(data2.bayern[parseInt(index1)+parseInt(28)]["Insgesamt"]);
                            var ws6 = parseInt(data2.bayern[parseInt(index1)+parseInt(35)]["Insgesamt"]);
                            var ws7 = parseInt(data2.bayern[parseInt(index1)+parseInt(42)]["Insgesamt"]); 
                            var ws8 = parseInt(data2.bayern[parseInt(index1)+parseInt(49)]["Insgesamt"]); 
                            var ws9 = parseInt(data2.bayern[parseInt(index1)+parseInt(56)]["Insgesamt"]); 
                            var ws10 = parseInt(data2.bayern[parseInt(index1)+parseInt(63)]["Insgesamt"]); 
                            var ws11 = parseInt(data2.bayern[parseInt(index1)+parseInt(70)]["Insgesamt"]); 
                            var ws12 = parseInt(data2.bayern[parseInt(index1)+parseInt(77)]["Insgesamt"]); 
                            var ws13 = parseInt(data2.bayern[parseInt(index1)+parseInt(84)]["Insgesamt"]); 
                            var ws14 = parseInt(data2.bayern[parseInt(index1)+parseInt(91)]["Insgesamt"]); 
                            var ws15 = parseInt(data2.bayern[parseInt(index1)+parseInt(98)]["Insgesamt"]); 
                            var ws16 = parseInt(data2.bayern[parseInt(index1)+parseInt(105)]["Insgesamt"]);
                            console.log(ws2);    
                            // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 2. Datensatz geladen 
                                myLineChart.datasets[1].points[0].value = parseFloat(((ws1 * 100) / a));
                                myLineChart.datasets[1].points[1].value = parseFloat(((ws2 * 100) / b));
                                myLineChart.datasets[1].points[2].value = parseFloat(((ws3 * 100) / c));
                                myLineChart.datasets[1].points[3].value = parseFloat(((ws4 * 100) / d));
                                myLineChart.datasets[1].points[4].value = parseFloat(((ws5 * 100) / e));
                                myLineChart.datasets[1].points[5].value = parseFloat(((ws6 * 100) / f));
                                myLineChart.datasets[1].points[6].value = parseFloat(((ws7 * 100) / g));
                                myLineChart.datasets[1].points[7].value = parseFloat(((ws8 * 100) / h));
                                myLineChart.datasets[1].points[8].value = parseFloat(((ws9 * 100) / i));
                                myLineChart.datasets[1].points[9].value = parseFloat(((ws10 * 100) / j));
                                myLineChart.datasets[1].points[10].value = parseFloat(((ws11 * 100) / k));
                                myLineChart.datasets[1].points[11].value = parseFloat(((ws12 * 100) / l));
                                myLineChart.datasets[1].points[12].value = parseFloat(((ws13 * 100) / m));
                                myLineChart.datasets[1].points[13].value = parseFloat(((ws14 * 100) / n));
                                myLineChart.datasets[1].points[14].value = parseFloat(((ws15 * 100) / o));
                                myLineChart.datasets[1].points[15].value = parseFloat(((ws16 * 100) / p));
                            });
                         break;
                         case "berlin":
                            // Index setzt sich aus index1 aus der Studiengang Selectbox zusammen und der Stellen in der JSON-Datei
                            $.getJSON("../JSON/berlin.json", function(data2){
                            var ws1 = parseInt(data2.berlin[parseInt(index1)]["Insgesamt"]); 
                            var ws2 = parseInt(data2.berlin[parseInt(index1)+parseInt(7)]["Insgesamt"]); 
                            var ws3 = parseInt(data2.berlin[parseInt(index1+14)]["Insgesamt"]);
                            var ws4 = parseInt(data2.berlin[parseInt(index1+21)]["Insgesamt"]); 
                            var ws5 = parseInt(data2.berlin[parseInt(index1+28)]["Insgesamt"]);
                            var ws6 = parseInt(data2.berlin[parseInt(index1+35)]["Insgesamt"]);
                            var ws7 = parseInt(data2.berlin[parseInt(index1+42)]["Insgesamt"]); 
                            var ws8 = parseInt(data2.berlin[parseInt(index1+49)]["Insgesamt"]); 
                            var ws9 = parseInt(data2.berlin[parseInt(index1+56)]["Insgesamt"]); 
                            var ws10 = parseInt(data2.berlin[parseInt(index1+63)]["Insgesamt"]); 
                            var ws11 = parseInt(data2.berlin[parseInt(index1+70)]["Insgesamt"]); 
                            var ws12 = parseInt(data2.berlin[parseInt(index1+77)]["Insgesamt"]); 
                            var ws13 = parseInt(data2.berlin[parseInt(index1+84)]["Insgesamt"]); 
                            var ws14 = parseInt(data2.berlin[parseInt(index1+91)]["Insgesamt"]); 
                            var ws15 = parseInt(data2.berlin[parseInt(index1+98)]["Insgesamt"]); 
                            var ws16 = parseInt(data2.berlin[parseInt(index1+105)]["Insgesamt"]);
                                // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 2. Datensatz geladen 
                                myLineChart.datasets[1].points[0].value = parseInt(((ws1 * 100) / a));
                                myLineChart.datasets[1].points[1].value = parseInt(((ws2 * 100) / b));
                                myLineChart.datasets[1].points[2].value = parseInt(((ws3 * 100) / c));
                                myLineChart.datasets[1].points[3].value = parseInt(((ws4 * 100) / d));
                                myLineChart.datasets[1].points[4].value = parseInt(((ws5 * 100) / e));
                                myLineChart.datasets[1].points[5].value = parseInt(((ws6 * 100) / f));
                                myLineChart.datasets[1].points[6].value = parseInt(((ws7 * 100) / g));
                                myLineChart.datasets[1].points[7].value = parseInt(((ws8 * 100) / h));
                                myLineChart.datasets[1].points[8].value = parseInt(((ws9 * 100) / i));
                                myLineChart.datasets[1].points[9].value = parseInt(((ws10 * 100) / j));
                                myLineChart.datasets[1].points[10].value = parseInt(((ws11 * 100) / k));
                                myLineChart.datasets[1].points[11].value = parseInt(((ws12 * 100) / l));
                                myLineChart.datasets[1].points[12].value = parseInt(((ws13 * 100) / m));
                                myLineChart.datasets[1].points[13].value = parseInt(((ws14 * 100) / n));
                                myLineChart.datasets[1].points[14].value = parseInt(((ws15 * 100) / o));
                                myLineChart.datasets[1].points[15].value = parseInt(((ws16 * 100) / p));
                            });
                         break;
                         case "brandenburg":
                            var ws1 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws3 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws4 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws5 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws6 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws7 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws8 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws9 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws10 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws11 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws12 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws13 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws14 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws15 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws16 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                         break;
                         case "bremen":
                            var ws1 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws3 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws4 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws5 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws6 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws7 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws8 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws9 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws10 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws11 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws12 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws13 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws14 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws15 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws16 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                         break;
                         case "hamburg":
                            var ws1 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws3 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws4 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws5 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws6 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws7 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws8 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws9 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws10 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws11 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws12 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws13 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws14 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws15 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws16 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                         break;
                         case "hessen":
                            var ws1 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws3 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws4 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws5 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws6 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws7 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws8 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws9 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws10 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws11 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws12 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws13 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws14 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws15 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws16 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                         break;
                         case "mecklenburg_vorpommern":
                            var ws1 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws3 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws4 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws5 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws6 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                            var ws7 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws8 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws9 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws10 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws11 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws12 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws13 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws14 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws15 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]); 
                            var ws16 = parseInt(data2.baden_wurttemberg[index1]["Insgesamt"]);
                         break;
                         case "niedersachsen":
                            // Index setzt sich aus index1 aus der Studiengang Selectbox zusammen und der Stellen in der JSON-Datei
                            $.getJSON("../JSON/niedersachsen.json", function(data2){
                            var ws1 = parseInt(data2.niedersachsen[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(7)]["Insgesamt"]); 
                                console.log(data2.niedersachsen[parseInt(index1+parseInt(7))]["Insgesamt"]);
                            var ws3 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                            var ws4 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(21)]["Insgesamt"]); 
                            var ws5 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(28)]["Insgesamt"]);
                            var ws6 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(35)]["Insgesamt"]);
                            var ws7 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(42)]["Insgesamt"]); 
                            var ws8 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(49)]["Insgesamt"]); 
                            var ws9 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(56)]["Insgesamt"]); 
                            var ws10 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(63)]["Insgesamt"]); 
                            var ws11 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(70)]["Insgesamt"]); 
                            var ws12 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(77)]["Insgesamt"]); 
                            var ws13 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(84)]["Insgesamt"]); 
                            var ws14 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(91)]["Insgesamt"]); 
                            var ws15 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(98)]["Insgesamt"]); 
                            var ws16 = parseInt(data2.niedersachsen[parseInt(index1)+parseInt(105)]["Insgesamt"]);
                                // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 2. Datensatz geladen 
                                myLineChart.datasets[1].points[0].value = parseInt(((ws1 * 100) / a));
                                myLineChart.datasets[1].points[1].value = parseInt(((ws2 * 100) / b));
                                myLineChart.datasets[1].points[2].value = parseInt(((ws3 * 100) / c));
                                myLineChart.datasets[1].points[3].value = parseInt(((ws4 * 100) / d));
                                myLineChart.datasets[1].points[4].value = parseInt(((ws5 * 100) / e));
                                myLineChart.datasets[1].points[5].value = parseInt(((ws6 * 100) / f));
                                myLineChart.datasets[1].points[6].value = parseInt(((ws7 * 100) / g));
                                myLineChart.datasets[1].points[7].value = parseInt(((ws8 * 100) / h));
                                myLineChart.datasets[1].points[8].value = parseInt(((ws9 * 100) / i));
                                myLineChart.datasets[1].points[9].value = parseInt(((ws10 * 100) / j));
                                myLineChart.datasets[1].points[10].value = parseInt(((ws11 * 100) / k));
                                myLineChart.datasets[1].points[11].value = parseInt(((ws12 * 100) / l));
                                myLineChart.datasets[1].points[12].value = parseInt(((ws13 * 100) / m));
                                myLineChart.datasets[1].points[13].value = parseInt(((ws14 * 100) / n));
                                myLineChart.datasets[1].points[14].value = parseInt(((ws15 * 100) / o));
                                myLineChart.datasets[1].points[15].value = parseInt(((ws16 * 100) / p));
                            });
                         break;
                         case "nordrhein_westfalen":
                            // Index setzt sich aus index1 aus der Studiengang Selectbox zusammen und der Stellen in der JSON-Datei
                            $.getJSON("../JSON/nordrhein_westfalen.json", function(data2){
                            var ws1 = parseInt(data2.nordrhein_westfalen[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.nordrhein_westfalen[parseInt(index1+parseInt(7))]["Insgesamt"]); 
                            var ws3 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                            var ws4 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(21)]["Insgesamt"]); 
                            var ws5 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(28)]["Insgesamt"]);
                            var ws6 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(35)]["Insgesamt"]);
                            var ws7 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(42)]["Insgesamt"]); 
                            var ws8 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(49)]["Insgesamt"]); 
                            var ws9 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(56)]["Insgesamt"]); 
                            var ws10 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(63)]["Insgesamt"]); 
                            var ws11 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(70)]["Insgesamt"]); 
                            var ws12 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(77)]["Insgesamt"]); 
                            var ws13 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(84)]["Insgesamt"]); 
                            var ws14 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(91)]["Insgesamt"]); 
                            var ws15 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(98)]["Insgesamt"]); 
                            var ws16 = parseInt(data2.nordrhein_westfalen[parseInt(index1)+parseInt(105)]["Insgesamt"]);
                                // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 2. Datensatz geladen 
                                myLineChart.datasets[1].points[0].value = parseInt(((ws1 * 100) / a));
                                myLineChart.datasets[1].points[1].value = parseInt(((ws2 * 100) / b));
                                myLineChart.datasets[1].points[2].value = parseInt(((ws3 * 100) / c));
                                myLineChart.datasets[1].points[3].value = parseInt(((ws4 * 100) / d));
                                myLineChart.datasets[1].points[4].value = parseInt(((ws5 * 100) / e));
                                myLineChart.datasets[1].points[5].value = parseInt(((ws6 * 100) / f));
                                myLineChart.datasets[1].points[6].value = parseInt(((ws7 * 100) / g));
                                myLineChart.datasets[1].points[7].value = parseInt(((ws8 * 100) / h));
                                myLineChart.datasets[1].points[8].value = parseInt(((ws9 * 100) / i));
                                myLineChart.datasets[1].points[9].value = parseInt(((ws10 * 100) / j));
                                myLineChart.datasets[1].points[10].value = parseInt(((ws11 * 100) / k));
                                myLineChart.datasets[1].points[11].value = parseInt(((ws12 * 100) / l));
                                myLineChart.datasets[1].points[12].value = parseInt(((ws13 * 100) / m));
                                myLineChart.datasets[1].points[13].value = parseInt(((ws14 * 100) / n));
                                myLineChart.datasets[1].points[14].value = parseInt(((ws15 * 100) / o));
                                myLineChart.datasets[1].points[15].value = parseInt(((ws16 * 100) / p));
                            });
                         break;
                         case "rheinland_pfalz":
                            // Index setzt sich aus index1 aus der Studiengang Selectbox zusammen und der Stellen in der JSON-Datei
                            $.getJSON("../JSON/rheinland_pfalz.json", function(data2){
                            var ws1 = parseInt(data2.rheinland_pfalz[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.rheinland_pfalz[parseInt(index1+parseInt(7))]["Insgesamt"]); 
                            var ws3 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                            var ws4 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(21)]["Insgesamt"]); 
                            var ws5 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(28)]["Insgesamt"]);
                            var ws6 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(35)]["Insgesamt"]);
                            var ws7 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(42)]["Insgesamt"]); 
                            var ws8 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(49)]["Insgesamt"]); 
                            var ws9 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(56)]["Insgesamt"]); 
                            var ws10 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(63)]["Insgesamt"]); 
                            var ws11 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(70)]["Insgesamt"]); 
                            var ws12 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(77)]["Insgesamt"]); 
                            var ws13 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(84)]["Insgesamt"]); 
                            var ws14 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(91)]["Insgesamt"]); 
                            var ws15 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(98)]["Insgesamt"]); 
                            var ws16 = parseInt(data2.rheinland_pfalz[parseInt(index1)+parseInt(105)]["Insgesamt"]);
                                // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 2. Datensatz geladen 
                                myLineChart.datasets[1].points[0].value = parseInt(((ws1 * 100) / a));
                                myLineChart.datasets[1].points[1].value = parseInt(((ws2 * 100) / b));
                                myLineChart.datasets[1].points[2].value = parseInt(((ws3 * 100) / c));
                                myLineChart.datasets[1].points[3].value = parseInt(((ws4 * 100) / d));
                                myLineChart.datasets[1].points[4].value = parseInt(((ws5 * 100) / e));
                                myLineChart.datasets[1].points[5].value = parseInt(((ws6 * 100) / f));
                                myLineChart.datasets[1].points[6].value = parseInt(((ws7 * 100) / g));
                                myLineChart.datasets[1].points[7].value = parseInt(((ws8 * 100) / h));
                                myLineChart.datasets[1].points[8].value = parseInt(((ws9 * 100) / i));
                                myLineChart.datasets[1].points[9].value = parseInt(((ws10 * 100) / j));
                                myLineChart.datasets[1].points[10].value = parseInt(((ws11 * 100) / k));
                                myLineChart.datasets[1].points[11].value = parseInt(((ws12 * 100) / l));
                                myLineChart.datasets[1].points[12].value = parseInt(((ws13 * 100) / m));
                                myLineChart.datasets[1].points[13].value = parseInt(((ws14 * 100) / n));
                                myLineChart.datasets[1].points[14].value = parseInt(((ws15 * 100) / o));
                                myLineChart.datasets[1].points[15].value = parseInt(((ws16 * 100) / p));
                            });
                         break;
                         case "saarland":
                            // Index setzt sich aus index1 aus der Studiengang Selectbox zusammen und der Stellen in der JSON-Datei
                            $.getJSON("../JSON/saarland.json", function(data2){
                            var ws1 = parseInt(data2.saarland[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.saarland[parseInt(index1)+parseInt(7)]["Insgesamt"]); 
                            var ws3 = parseInt(data2.saarland[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                            var ws4 = parseInt(data2.saarland[parseInt(index1)+parseInt(21)]["Insgesamt"]); 
                            var ws5 = parseInt(data2.saarland[parseInt(index1)+parseInt(28)]["Insgesamt"]);
                            var ws6 = parseInt(data2.saarland[parseInt(index1)+parseInt(35)]["Insgesamt"]);
                            var ws7 = parseInt(data2.saarland[parseInt(index1)+parseInt(42)]["Insgesamt"]); 
                            var ws8 = parseInt(data2.saarland[parseInt(index1)+parseInt(49)]["Insgesamt"]); 
                            var ws9 = parseInt(data2.saarland[parseInt(index1)+parseInt(56)]["Insgesamt"]); 
                            var ws10 = parseInt(data2.saarland[parseInt(index1)+parseInt(63)]["Insgesamt"]); 
                            var ws11 = parseInt(data2.saarland[parseInt(index1)+parseInt(70)]["Insgesamt"]); 
                            var ws12 = parseInt(data2.saarland[parseInt(index1)+parseInt(77)]["Insgesamt"]); 
                            var ws13 = parseInt(data2.saarland[parseInt(index1)+parseInt(84)]["Insgesamt"]); 
                            var ws14 = parseInt(data2.saarland[parseInt(index1)+parseInt(91)]["Insgesamt"]); 
                            var ws15 = parseInt(data2.saarland[parseInt(index1)+parseInt(98)]["Insgesamt"]); 
                            var ws16 = parseInt(data2.saarland[parseInt(index1)+parseInt(105)]["Insgesamt"]);
                                // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 2. Datensatz geladen 
                                myLineChart.datasets[1].points[0].value = parseInt(((ws1 * 100) / a));
                                myLineChart.datasets[1].points[1].value = parseInt(((ws2 * 100) / b));
                                myLineChart.datasets[1].points[2].value = parseInt(((ws3 * 100) / c));
                                myLineChart.datasets[1].points[3].value = parseInt(((ws4 * 100) / d));
                                myLineChart.datasets[1].points[4].value = parseInt(((ws5 * 100) / e));
                                myLineChart.datasets[1].points[5].value = parseInt(((ws6 * 100) / f));
                                myLineChart.datasets[1].points[6].value = parseInt(((ws7 * 100) / g));
                                myLineChart.datasets[1].points[7].value = parseInt(((ws8 * 100) / h));
                                myLineChart.datasets[1].points[8].value = parseInt(((ws9 * 100) / i));
                                myLineChart.datasets[1].points[9].value = parseInt(((ws10 * 100) / j));
                                myLineChart.datasets[1].points[10].value = parseInt(((ws11 * 100) / k));
                                myLineChart.datasets[1].points[11].value = parseInt(((ws12 * 100) / l));
                                myLineChart.datasets[1].points[12].value = parseInt(((ws13 * 100) / m));
                                myLineChart.datasets[1].points[13].value = parseInt(((ws14 * 100) / n));
                                myLineChart.datasets[1].points[14].value = parseInt(((ws15 * 100) / o));
                                myLineChart.datasets[1].points[15].value = parseInt(((ws16 * 100) / p));
                            });
                         break;
                         case "sachsen_anhalt":
                             // Index setzt sich aus index1 aus der Studiengang Selectbox zusammen und der Stellen in der JSON-Datei
                            $.getJSON("../JSON/sachsen_anhalt.json", function(data2){
                            var ws1 = parseInt(data2.sachsen_anhalt[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(7)]["Insgesamt"]); 
                            var ws3 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                            var ws4 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(21)]["Insgesamt"]); 
                            var ws5 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(28)]["Insgesamt"]);
                            var ws6 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(35)]["Insgesamt"]);
                            var ws7 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(42)]["Insgesamt"]); 
                            var ws8 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(49)]["Insgesamt"]); 
                            var ws9 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(56)]["Insgesamt"]); 
                            var ws10 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(63)]["Insgesamt"]); 
                            var ws11 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(70)]["Insgesamt"]); 
                            var ws12 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(77)]["Insgesamt"]); 
                            var ws13 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(84)]["Insgesamt"]); 
                            var ws14 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(91)]["Insgesamt"]); 
                            var ws15 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(98)]["Insgesamt"]); 
                            var ws16 = parseInt(data2.sachsen_anhalt[parseInt(index1)+parseInt(105)]["Insgesamt"]);
                                // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 2. Datensatz geladen 
                                myLineChart.datasets[1].points[0].value = parseInt(((ws1 * 100) / a));
                                myLineChart.datasets[1].points[1].value = parseInt(((ws2 * 100) / b));
                                myLineChart.datasets[1].points[2].value = parseInt(((ws3 * 100) / c));
                                myLineChart.datasets[1].points[3].value = parseInt(((ws4 * 100) / d));
                                myLineChart.datasets[1].points[4].value = parseInt(((ws5 * 100) / e));
                                myLineChart.datasets[1].points[5].value = parseInt(((ws6 * 100) / f));
                                myLineChart.datasets[1].points[6].value = parseInt(((ws7 * 100) / g));
                                myLineChart.datasets[1].points[7].value = parseInt(((ws8 * 100) / h));
                                myLineChart.datasets[1].points[8].value = parseInt(((ws9 * 100) / i));
                                myLineChart.datasets[1].points[9].value = parseInt(((ws10 * 100) / j));
                                myLineChart.datasets[1].points[10].value = parseInt(((ws11 * 100) / k));
                                myLineChart.datasets[1].points[11].value = parseInt(((ws12 * 100) / l));
                                myLineChart.datasets[1].points[12].value = parseInt(((ws13 * 100) / m));
                                myLineChart.datasets[1].points[13].value = parseInt(((ws14 * 100) / n));
                                myLineChart.datasets[1].points[14].value = parseInt(((ws15 * 100) / o));
                                myLineChart.datasets[1].points[15].value = parseInt(((ws16 * 100) / p));
                            });                       
                         break;
                         case "schleswig_holstein":
                            // Index setzt sich aus index1 aus der Studiengang Selectbox zusammen und der Stellen in der JSON-Datei
                            $.getJSON("../JSON/schleswig_holstein.json", function(data2){
                            var ws1 = parseInt(data2.schleswig_holstein[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(7)]["Insgesamt"]); 
                            var ws3 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                            var ws4 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(21)]["Insgesamt"]); 
                            var ws5 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(28)]["Insgesamt"]);
                            var ws6 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(35)]["Insgesamt"]);
                            var ws7 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(42)]["Insgesamt"]); 
                            var ws8 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(49)]["Insgesamt"]); 
                            var ws9 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(56)]["Insgesamt"]); 
                            var ws10 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(63)]["Insgesamt"]); 
                            var ws11 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(70)]["Insgesamt"]); 
                            var ws12 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(77)]["Insgesamt"]); 
                            var ws13 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(84)]["Insgesamt"]); 
                            var ws14 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(91)]["Insgesamt"]); 
                            var ws15 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(98)]["Insgesamt"]); 
                            var ws16 = parseInt(data2.schleswig_holstein[parseInt(index1)+parseInt(105)]["Insgesamt"]);
                                // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 2. Datensatz geladen 
                                myLineChart.datasets[1].points[0].value = parseInt(((ws1 * 100) / a));
                                myLineChart.datasets[1].points[1].value = parseInt(((ws2 * 100) / b));
                                myLineChart.datasets[1].points[2].value = parseInt(((ws3 * 100) / c));
                                myLineChart.datasets[1].points[3].value = parseInt(((ws4 * 100) / d));
                                myLineChart.datasets[1].points[4].value = parseInt(((ws5 * 100) / e));
                                myLineChart.datasets[1].points[5].value = parseInt(((ws6 * 100) / f));
                                myLineChart.datasets[1].points[6].value = parseInt(((ws7 * 100) / g));
                                myLineChart.datasets[1].points[7].value = parseInt(((ws8 * 100) / h));
                                myLineChart.datasets[1].points[8].value = parseInt(((ws9 * 100) / i));
                                myLineChart.datasets[1].points[9].value = parseInt(((ws10 * 100) / j));
                                myLineChart.datasets[1].points[10].value = parseInt(((ws11 * 100) / k));
                                myLineChart.datasets[1].points[11].value = parseInt(((ws12 * 100) / l));
                                myLineChart.datasets[1].points[12].value = parseInt(((ws13 * 100) / m));
                                myLineChart.datasets[1].points[13].value = parseInt(((ws14 * 100) / n));
                                myLineChart.datasets[1].points[14].value = parseInt(((ws15 * 100) / o));
                                myLineChart.datasets[1].points[15].value = parseInt(((ws16 * 100) / p));
                            }); 
                         break;
                         case "thuringen":
                            // Index setzt sich aus index1 aus der Studiengang Selectbox zusammen und der Stellen in der JSON-Datei
                            $.getJSON("../JSON/schleswig_holstein.json", function(data2){
                            var ws1 = parseInt(data2.thuringen[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.thuringen[parseInt(index1)+parseInt(7)]["Insgesamt"]); 
                            var ws3 = parseInt(data2.thuringen[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                            var ws4 = parseInt(data2.thuringen[parseInt(index1)+parseInt(21)]["Insgesamt"]); 
                            var ws5 = parseInt(data2.thuringen[parseInt(index1)+parseInt(28)]["Insgesamt"]);
                            var ws6 = parseInt(data2.thuringen[parseInt(index1)+parseInt(35)]["Insgesamt"]);
                            var ws7 = parseInt(data2.thuringen[parseInt(index1)+parseInt(42)]["Insgesamt"]); 
                            var ws8 = parseInt(data2.thuringen[parseInt(index1)+parseInt(49)]["Insgesamt"]); 
                            var ws9 = parseInt(data2.thuringen[parseInt(index1)+parseInt(56)]["Insgesamt"]); 
                            var ws10 = parseInt(data2.thuringen[parseInt(index1)+parseInt(63)]["Insgesamt"]); 
                            var ws11 = parseInt(data2.thuringen[parseInt(index1)+parseInt(70)]["Insgesamt"]); 
                            var ws12 = parseInt(data2.thuringen[parseInt(index1)+parseInt(77)]["Insgesamt"]); 
                            var ws13 = parseInt(data2.thuringen[parseInt(index1)+parseInt(84)]["Insgesamt"]); 
                            var ws14 = parseInt(data2.thuringen[parseInt(index1)+parseInt(91)]["Insgesamt"]); 
                            var ws15 = parseInt(data2.thuringen[parseInt(index1)+parseInt(98)]["Insgesamt"]); 
                            var ws16 = parseInt(data2.thuringen[parseInt(index1)+parseInt(105)]["Insgesamt"]);
                                // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 2. Datensatz geladen 
                                myLineChart.datasets[1].points[0].value = parseInt(((ws1 * 100) / a));
                                myLineChart.datasets[1].points[1].value = parseInt(((ws2 * 100) / b));
                                myLineChart.datasets[1].points[2].value = parseInt(((ws3 * 100) / c));
                                myLineChart.datasets[1].points[3].value = parseInt(((ws4 * 100) / d));
                                myLineChart.datasets[1].points[4].value = parseInt(((ws5 * 100) / e));
                                myLineChart.datasets[1].points[5].value = parseInt(((ws6 * 100) / f));
                                myLineChart.datasets[1].points[6].value = parseInt(((ws7 * 100) / g));
                                myLineChart.datasets[1].points[7].value = parseInt(((ws8 * 100) / h));
                                myLineChart.datasets[1].points[8].value = parseInt(((ws9 * 100) / i));
                                myLineChart.datasets[1].points[9].value = parseInt(((ws10 * 100) / j));
                                myLineChart.datasets[1].points[10].value = parseInt(((ws11 * 100) / k));
                                myLineChart.datasets[1].points[11].value = parseInt(((ws12 * 100) / l));
                                myLineChart.datasets[1].points[12].value = parseInt(((ws13 * 100) / m));
                                myLineChart.datasets[1].points[13].value = parseInt(((ws14 * 100) / n));
                                myLineChart.datasets[1].points[14].value = parseInt(((ws15 * 100) / o));
                                myLineChart.datasets[1].points[15].value = parseInt(((ws16 * 100) / p));
                            }); 
                         break;
                         case "sachsen":
                            // Index setzt sich aus index1 aus der Studiengang Selectbox zusammen und der Stellen in der JSON-Datei
                            $.getJSON("../JSON/sachsen.json", function(data2){
                            var ws1 = parseInt(data2.sachsen[index1]["Insgesamt"]); 
                            var ws2 = parseInt(data2.sachsen[parseInt(index1)+parseInt(7)]["Insgesamt"]); 
                            var ws3 = parseInt(data2.sachsen[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                            var ws4 = parseInt(data2.sachsen[parseInt(index1)+parseInt(21)]["Insgesamt"]); 
                            var ws5 = parseInt(data2.sachsen[parseInt(index1)+parseInt(28)]["Insgesamt"]);
                            var ws6 = parseInt(data2.sachsen[parseInt(index1)+parseInt(35)]["Insgesamt"]);
                            var ws7 = parseInt(data2.sachsen[parseInt(index1)+parseInt(42)]["Insgesamt"]); 
                            var ws8 = parseInt(data2.sachsen[parseInt(index1)+parseInt(49)]["Insgesamt"]); 
                            var ws9 = parseInt(data2.sachsen[parseInt(index1)+parseInt(56)]["Insgesamt"]); 
                            var ws10 = parseInt(data2.sachsen[parseInt(index1)+parseInt(63)]["Insgesamt"]); 
                            var ws11 = parseInt(data2.sachsen[parseInt(index1)+parseInt(70)]["Insgesamt"]); 
                            var ws12 = parseInt(data2.sachsen[parseInt(index1)+parseInt(77)]["Insgesamt"]); 
                            var ws13 = parseInt(data2.sachsen[parseInt(index1)+parseInt(84)]["Insgesamt"]); 
                            var ws14 = parseInt(data2.sachsen[parseInt(index1)+parseInt(91)]["Insgesamt"]); 
                            var ws15 = parseInt(data2.sachsen[parseInt(index1)+parseInt(98)]["Insgesamt"]); 
                            var ws16 = parseInt(data2.sachsen[parseInt(index1)+parseInt(105)]["Insgesamt"]);
                                // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 2. Datensatz geladen 
                                myLineChart.datasets[1].points[0].value = parseInt(((ws1 * 100) / a));
                                myLineChart.datasets[1].points[1].value = parseInt(((ws2 * 100) / b));
                                myLineChart.datasets[1].points[2].value = parseInt(((ws3 * 100) / c));
                                myLineChart.datasets[1].points[3].value = parseInt(((ws4 * 100) / d));
                                myLineChart.datasets[1].points[4].value = parseInt(((ws5 * 100) / e));
                                myLineChart.datasets[1].points[5].value = parseInt(((ws6 * 100) / f));
                                myLineChart.datasets[1].points[6].value = parseInt(((ws7 * 100) / g));
                                myLineChart.datasets[1].points[7].value = parseInt(((ws8 * 100) / h));
                                myLineChart.datasets[1].points[8].value = parseInt(((ws9 * 100) / i));
                                myLineChart.datasets[1].points[9].value = parseInt(((ws10 * 100) / j));
                                myLineChart.datasets[1].points[10].value = parseInt(((ws11 * 100) / k));
                                myLineChart.datasets[1].points[11].value = parseInt(((ws12 * 100) / l));
                                myLineChart.datasets[1].points[12].value = parseInt(((ws13 * 100) / m));
                                myLineChart.datasets[1].points[13].value = parseInt(((ws14 * 100) / n));
                                myLineChart.datasets[1].points[14].value = parseInt(((ws15 * 100) / o));
                                myLineChart.datasets[1].points[15].value = parseInt(((ws16 * 100) / p));
                            }); 
                         break;
                         default:
                                
                         break;
                        }
                         var erste = parseInt(data0.baden_wurttemberg[index1]["Insgesamt"]);
                         var zweite = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(7)]["Insgesamt"]);
                         var dritte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(14)]["Insgesamt"]);
                         var vierte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(21)]["Insgesamt"]);
                         var funfte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(28)]["Insgesamt"]);
                         var sechste = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(35)]["Insgesamt"]);
                         var siebte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(42)]["Insgesamt"]);
                         var achte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(49)]["Insgesamt"]);
                         var neunte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(56)]["Insgesamt"]);
                         var zehnte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(63)]["Insgesamt"]);
                         var elfte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(70)]["Insgesamt"]);
                         var zwolfte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(77)]["Insgesamt"]);
                         var dreizehnte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(84)]["Insgesamt"]);
                         var vierzehnte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(91)]["Insgesamt"]);
                         var funfzehnte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(98)]["Insgesamt"]);
                         var sechzehnte = parseInt(data0.baden_wurttemberg[parseInt(index1)+parseInt(105)]["Insgesamt"]);
                         // Daten der LineChart werden aktualisiert: Umrechnung in Prozent und in den 1. Datensatz geladen 
                            myLineChart.datasets[0].points[0].value = parseFloat(((erste * 100) / a));
                            myLineChart.datasets[0].points[1].value = parseFloat(((zweite * 100) / b));
                            myLineChart.datasets[0].points[2].value = parseFloat(((dritte * 100) / c));
                            myLineChart.datasets[0].points[3].value = parseFloat(((vierte * 100) / d));
                            myLineChart.datasets[0].points[4].value = parseFloat(((funfte * 100) / e));
                            myLineChart.datasets[0].points[5].value = parseFloat(((sechste * 100) / f));
                            myLineChart.datasets[0].points[6].value = parseFloat(((siebte * 100) / g));
                            myLineChart.datasets[0].points[7].value = parseFloat(((achte * 100) / h));
                            myLineChart.datasets[0].points[8].value = parseFloat(((neunte * 100) / i));
                            myLineChart.datasets[0].points[9].value = parseFloat(((zehnte * 100) / j));
                            myLineChart.datasets[0].points[10].value = parseFloat(((elfte * 100) / k));
                            myLineChart.datasets[0].points[11].value = parseFloat(((zwolfte * 100) / l));
                            myLineChart.datasets[0].points[12].value = parseFloat(((dreizehnte * 100) / m));
                            myLineChart.datasets[0].points[13].value = parseFloat(((vierzehnte * 100) / n));
                            myLineChart.datasets[0].points[14].value = parseFloat(((funfzehnte * 100) / o));
                            myLineChart.datasets[0].points[15].value = parseFloat(((sechzehnte * 100) / p));
                      
  
                        // Aktualisiert die Line-Chart
                         myLineChart.update();
                     
                     });
                 });
            break;
        case "bayern":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/bayern.json", function(data0){
            if(data0.Bayern[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Bayern[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Bayern[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Bayern[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;            
        case "Berlin":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/berlin.json", function(data0){
            if(data0.Berlin[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Berlin[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Berlin[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Berlin[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Brandenburg":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/brandenburg.json", function(data0){
            if(data0.Brandenburg[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Brandenburg[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Brandenburg[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Brandenburg[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Bremen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/bremen.json", function(data0){
            if(data0.Bremen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Bremen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Bremen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Bremen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;   
        case "Hamburg":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/hamburg.json", function(data0){
            if(data0.Hamburg[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Hamburg[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Hamburg[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Hamburg[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Hessen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/hessen.json", function(data0){
            if(data0.Hessen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Hessen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Hessen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Hessen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Mecklenburg-Vorpommern":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/mecklenburg-vorpommern.json", function(data0){
            if(data0.Mecklenburg_Vorpommern[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Mecklenburg_Vorpommern[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Mecklenburg_Vorpommern[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Mecklenburg_Vorpommern[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Niedersachsen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/niedersachsen.json", function(data0){
            if(data0.Niedersachsen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Niedersachsen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Niedersachsen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Niedersachsen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Nordrhein-Westfalen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/nordrhein-westfalen.json", function(data0){
            if(data0.Nordrhein_Westfalen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Nordrhein_Westfalen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Nordrhein_Westfalen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Nordrhein_Westfalen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Rheinland-Pfalz":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/rheinland-pfalz.json", function(data0){
            if(data0.Rheinland_Pfalz[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Rheinland_Pfalz[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Rheinland_Pfalz[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Rheinland_Pfalz[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Saarland":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/saarland.json", function(data0){
            if(data0.Saarland[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Saarland[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Saarland[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Saarland[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Sachsen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/sachsen.json", function(data0){
            if(data0.Sachsen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Sachsen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Sachsen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Sachsen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Sachsen-Anhalt":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/sachsen-anhalt.json", function(data0){
            if(data0.Sachsen_Anhalt[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Sachsen_Anhalt[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Sachsen_Anhalt[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Sachsen_Anhalt[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Schleswig-Holstein":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/schleswig-holstein.json", function(data0){
            if(data0.Schleswig_Holstein[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Schleswig_Holstein[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Schleswig_Holstein[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Schleswig_Holstein[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        case "Thüringen":
            var index3 = $('#selectDiv2 :selected').val();
            var index4 = $('#selectDiv3 :selected').val();
            var neu = parseInt(index3) + parseInt(index4);
            console.log(neu);
            console.log(index3+index4);
            $.getJSON("../JSON/thuringen.json", function(data0){
            if(data0.Thüringen[neu]["Deutsche Männlich"]=="-") alert("Keine Daten vorhanden!");
            else {ChartActive();
            myDoughnut.segments[0].value = parseInt(data0.Thüringen[neu]["Deutsche Männlich"]);
            myDoughnut.segments[1].value = parseInt(data0.Thüringen[neu]["Deutsche Weiblich"]);
            myDoughnut.segments[2].value = parseInt(data0.Thüringen[neu]["Deutsche Insgesamt"]);
            myDoughnut.segments[0].label = "Deutsche Männlich";
            myDoughnut.segments[1].label = "Deutsche Weiblich";
            myDoughnut.segments[2].label = "Deutsche Insgesamt";
            
            myDoughnut.update();}
            });
            break;
        default:
            alert('Keine Datenbank vorhanden!');
        }

    });
});