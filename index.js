
function calcPotT4(){
    let herbT4 = 2000;
    let herbT3 = 1000;
    let i =0;
    let count = 0
    let percent = 25;
    let quantCost = 8
    let quantPot=0
    let quantPotRslt=0
    let retornoCalc=0
    let retornoCalc2=0
    let retornoRes=0
    let quantPotRt = 0
    let savert2
    let countCraft = 0

    do{
        countCraft = countCraft + 1

        retornoCalc = quantCost*percent
        retornoCalc2 = retornoCalc/100
        
        retornoRes = retornoCalc2*countCraft
        
        quantPot = quantPot+5

        i=i+8

        if(i>herbT4)
        {
            console.log('herbs return : '+ retornoRes)
            console.log('quantity pot: ' + quantPot)    
        }

        savert2 = retornoRes
        
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

    }while(i<=herbT4);
}
calc()