
function calcPotT4(){
    let herbT4 = 2000
    let herbT3 = 1000
    let i =0
    let j =0
    let count = 0
    let percent = 25
    let quantCostHerb4 = 8
    let quantCostHerb3 = 4
    let quantPot=0
    let quantPotRslt=0
    let returnCalcHerb4=0
    let returnCalc2Herb4=0
    let returnCalcHerb3=0
    let returnCalc2Herb3=0
    let returnResHerb4=0
    let returnResHerb3=0
    let quantPotRt = 0
    let savert2
    let countCraft = 0

    do{
        countCraft = countCraft + 1

        returnCalcHerb3 = quantCostHerb3*percent
        returnCalc2Herb3 = returnCalcHerb3/100

        returnCalcHerb4 = quantCostHerb4*percent
        returnCalc2Herb4 = returnCalcHerb4/100
        
        returnResHerb4 = returnCalc2Herb4*countCraft
        returnResHerb3 = returnCalc2Herb3*countCraft


        quantPot = quantPot+5

        i=i+quantCostHerb4
        j=j+quantCostHerb3

        if(i>herbT4 && j>herbT3)
        {
            console.log('herbs4 return : '+ returnResHerb4)
            console.log('herbs3 return : '+ returnResHerb3)
            console.log('quantity pot: ' + quantPot)    
        }

        savert2 = returnResHerb4
        
        if(i > herbT4 )
        {
            while(count<=savert2)
            {
                quantPotRt = quantPotRt + 5
                count = count + 8
                if(count >= savert2)
                {
                    console.log('quantity potion return : '+ quantPotRt)
                    quantPotRslt = quantPotRt + quantPot

                    console.log('quantity potions fabricated : ' + quantPotRslt)
                }
            }
        }

    }while(i<=herbT4 && j<=herbT3);
}
calcPotT4()