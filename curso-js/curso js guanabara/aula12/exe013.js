var agora = new Date()
var week = agora.getDay()

/* 
monday
tuesday
wednesday
thursday
friday
saturday
sunday
*/

switch (week) {
    case 0:
        console.log("Sunday")
        break
       
    case 1:
        console.log("Monday")
        break

    case 2:
         console.log("Tuesday")
         break
    
    case 3: 
          console.log("Wednesday")
         break

    case 4: 
         console.log("Thursday")
        break     

    case 5: 
        console.log("Friday")
       break  
       
    case 6: 
       console.log("Saturday")
      break   

    default:
        console.log("Error code")
      break
}