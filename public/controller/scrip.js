 

 function populate(s1,s2) 
{      
   

         var s1= document.getElementById(s1);
          var s2= document.getElementById(s2);

          s2.innerHTML = "";
          
           if (s1.value == "chennai")
           {
                   var optionArray = ["|","annanagar|annanagar","chepaukkam|chepaukkam","Dr.radhakrishnannagar|Dr.radhakrishnannagar","egmore|egmore","harbour|harbour","kolathur|kolathur","mylapore|mylapore","perambur|perambur","royapuram|royapuram","saidapet|saidapet","thiruvikanagar|thiruvikanagar","thousandlights|thousandlights","velachery|velachery","villivakkam|villivakkam","virugampakkam|virugampakkam"];
              } 
           else if (s1.value == "kancipuram") 
           {
                   var optionArray = ["|","alandur|alandur","chengalpattu|chengalpattu","cheyyur|cheyyur","kancheepuram|kancheepuram","madurantakam|madurantakam","pallavaram|pallavaram","shozhinganallur|shozhinganallu","sriperumbudur|sriperumbudur","tambaram|tambaram","thiruporur|thiruporur","uthiramerur|uthiramerur"]; }
             
                   else if (s1.value == "tiruvallur")
            {
                   var optionArray = ["|","ambattur|ambattur","avadi|avadi","gummidipoondi|gummidipoondi","madhavaram|madhavaram","maduravoyal|maduravoyal","ponneri|ponneri","poonmallae|poonmalle","thiruvallur|thiruvallur","thiruvottiyur|thiruvottiyur","tiruttani|tiruttani"];
            }

                 
             else if (s1.value == "cuddalore")
            {
                   var optionArray = ["|","bhuvanagiri|bhuvanagiri","chidambaram|chidambaram","kattumannarkoil|kattumannarkoil","kurinjipadi|kurinjipadi","neyveli|neyveli","panruti|panruti","tittakudi|tittakudi","vriddhachalam|vriddhachalam","cuddalore|cuddalore"];
            }

            else if (s1.value == "villupuram") {
                   var optionArray = ["|","gingee|gingee","kallakurichi|kallakurichi","mailam|mailam",
                   "rishivanthiyam|rishivanthiyam","sankarapuram|sankarapuram","tindivanam|tindivanam","tirukoilur|tirukoilur","ulundurpettai|ulundurpettai","vanur|vanur","vikravandi|vikravandi","villupuram|villupuram"]; }

      


           else if (s1.value == "vellore")
            {
                   var optionArray = ["|","arcot|arcot","ambur|ambur","anaikattu|anaikattu","gudiyattam|gudiyattam","jolarpet|jolarpet","katpadi|katpadi","kilvaithinankuppam|kilvaithinankuppam","ranipet|ranipet","sholingur|sholingur","tirupattur|tirupattur","vaniyambadi|vaniyambadi","vellore|vellore"];
            }
             else if (s1.value == "tiruvannamalai")
            {
                   var optionArray = ["|","arani|arani","chengam|chengam","cheyyar|cheyyar","kalasapakkam|kalasapakkam","polur|polur","tiruvannamalai|tiruvannamalai","vandavasi|vandavasi","kilpennathur|kilpennathur"];
            }

      
            else if (s1.value == "salem")
            {
                   var optionArray = ["|","attur|attur","edappadi|edappadi","gangavalli|gangavalli","mettur|mettur","omalur|omalur","salemnorth|salemnorth","salemsouth|salemsouth","salemwest|salemwest","sankagiri|sankagiri","veerapandi|veerapandi","yercaud|yercaud"];
            }

             else if (s1.value == "namakkal")
            {
                   var optionArray = ["|","kumarapalayam|kumarapalayam","namakkal|namakkal","paramathivelur|paramathivelur","rasipuram|rasipuram","senthamangalam|senthamangalam","tiruchengodu|tiruchengodu"];
            }

      
            
             else if (s1.value == "dharmapuri")
            {
                   var optionArray = ["|","dharmapuri|dharmapuri","harur|harur","palacodu|palacodu","pappireddippatti|pappireddippatti","pennagaram|pennagaram"];
            }

             
             else if (s1.value == "erode")
            {
                   var optionArray = ["|","anthiyur|anthiyur","bhavani|bhavani","bhavanisagar|bhavanisagar","erodeeast|erodeeast","erodewest|erodewest","gobichettipalayam|gobichettipalayam","modakkurichi|modakkurichi","perundurai|perundurai"];
            }

             
             else if (s1.value == "coimbatore")
            {
                   var optionArray = ["|","coimbatorenorth|coimbatorenorth","coimbatoresouth|coimbatoresouth","kavundampalayam|kavundampalayam","kinathukadavu|kinathukadavu","mettuppalayam|mettuppalayam","pollachi|pollachi","singanallur|singanallur","sulur|sulur","thondamuthur|thondamuthur","valparai|valparai"];
            }


             else if (s1.value == "nilgiris")
            {
                   var optionArray = ["|","coonoor|coonoor","gudalur|gudalur","udhagamandalam|udhagamandalam"];
            }

             
             else if (s1.value == "thanjavur")
            {
                   var optionArray = ["|","kumbakonam|kumbakonam","orathanadu|orathanadu","papanasam|papanasam","pattukkottai|pattukkottai","peravurani|peravurani","thanjavur|thanjavur","thiruvaiyaru|thiruvaiyaru","thiruvidaimarudur|thiruvidaimarudur"];
            }

             else if (s1.value == "nagapattinam")
            {
                   var optionArray = ["|","kilvelur|kilvelur","mayiladuthurai|mayiladuthurai","nagapattinam|nagapattinam","poompuhar|poompuhar","sirkazhi|sirkazhi","vedaranyam|vedaranyam"];
            }


             else if (s1.value == "tiruvarur")
            {
                   var optionArray = ["|","mannargudi|mannargudi","nannilam|nannilam","thiruthuraipoondi|thiruthuraipoondi","thiruvarur|thiruvarur"];
            }


             
             else if (s1.value == "tiruchirappalli")
            {
                   var optionArray = ["|","lalgudi|lalgudi","manachanallur|manachanallur","manapparai|manapparai","musiri|musiri","srirangam|srirangam","thiruverumbur|thiruverumbur","thuraiyur|thuraiyur","tiruchirappallieast|tiruchirappallieast","tiruchirappalliwest|tiruchirappalliwest"];
            }

             else if (s1.value == "karur")
            {
                   var optionArray = ["|","aravakurichi|aravakurichi","karur|karur","krishnarayapuram|krishnarayapuram","kulithalai|kulithalai"];
            }

            else if (s1.value == "perambalur")
            {
                   var optionArray = ["|","kunnam|kunnam","perambalur|perambalur"];
            }

               else if (s1.value == "pudukkottai")
            {
                   var optionArray = ["|","alangudi|alangudi","aranthangi|aranthangi","gandharvakottai|gandharvakottai","pudukkottai|pudukkottai","thirumayam|thirumayam","viralimalai|viralimalai"];
            }

            else if (s1.value == "madurai")
            {
                   var optionArray = ["|","maduraicentral|maduraicentral","maduraieast|maduraieast","madurainorth|madurainorth","maduraisouth|maduraisouth","maduraiwest|maduraiwest","melur|melur","sholavandan|sholavandan","thirumangalam|thirumangalam","thiruparankundram|thiruparankundram","usilampatti|usilampatti"];
            }


              else if (s1.value == "theni")
            {
                   var optionArray = ["|","andipatti|andipatti","bodinayakanur|bodinayakanur","cumbum|cumbum","periyakulam|periyakulam"];
            }

               else if (s1.value == "dindigul")
            {
                   var optionArray = ["|","athoor|athoor","dindigul|dindigul","natham|natham","nilakkottai|nilakkottai","oddanchatram|oddanchatram","palani|palani","vedasandur|vedasandur"];

           }
              else if (s1.value == "ramanathapuram")
            {
                   var optionArray = ["|","mudhukulathur|mudhukulathur","paramakudi|paramakudi","ramanathapuram|ramanathapuram","tiruvadanai|tiruvadanai"];
            }

               else if (s1.value == "virudhunagar")
            {
                   var optionArray = ["|","aruppukottai|aruppukottai","rajapalayam|rajapalayam","sattur|sattur","sivakasi|sivakasi","srivilliputhur|srivilliputhur","tiruchuli|tiruchuli","virudhunagar|virudhunagar"];

              }

              else if (s1.value == "sivagangai")
            {
                   var optionArray = ["|","karaikudi|karaikudi","manamadurai|manamadurai","sivagangai|sivagangai","tiruppattur|tiruppattur"];
            }

               else if (s1.value == "tirunelveli")
            {
                   var optionArray = ["|","alangulam|alangulam","ambasamudram|ambasamudram","kadayanallur|kadayanallur","nanguneri|nanguneri","palayamkottai|palayamkottai","radhapuram|radhapuram","sankarankovil|sankarankovil","tenkasi|tenkasi","tirunelveli|tirunelveli","vasudevanallur|vasudevanallur"];

             }
            

              else if (s1.value == "thoothukkudi")
            {
                   var optionArray = ["|","kovilpatti|kovilpatti","ottapidaram|ottapidaram","srivaikuntam|srivaikuntam","thoothukkudi|thoothukkudi","tiruchendur|tiruchendur","vilathikulam|vilathikulam"];
            }

               else if (s1.value == "kanniyakumari")
            {
                   var optionArray = ["|","colachal|colachal","kanniyakumari|kanniyakumari","killiyoor|killiyoor","nagercoil|nagercoil","padmanabhapuram|padmanabhapuram","vilavancode|vilavancode"];

             }
       

              else if (s1.value == "krishnagiri")
            {
                   var optionArray = ["|","bargur|bargur","hosur|hosur","krishnagiri|krishnagiri","thalli|thalli","uthangarai|uthangarai","veppanahalli|veppanahalli"];
            }

               else if (s1.value == "ariyalur")
            {
                   var optionArray = ["|","ariyalur|ariyalur","jayankondam|jayankondam"];

             }


           
              else if (s1.value == "tiruppur")
            {
                   var optionArray = ["|","avinashi|avinashi","dharapuram|dharapuram","kangayam|kangayam","madathukulam|madathukulam","palladam|palladam","tiruppurnorth|tiruppurnorth","tiruppursouth|tiruppursouth","udumalaipettai|udumalaipettai"];
            }





          for(var option in optionArray)
          {
              var pair = optionArray[option].split("|");
              var newOption = document.createElement("option");

              
              newOption.value = pair[0];
              newOption.innerHTML = pair[1];
              
            
              s2.options.add(newOption);
          }


}
