 // randomize into the Array
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }


class Slotmachine extends React.Component{
    render(){                   
        //randomize number     
        let num = getRandomIntInclusive(0, 2);              
        
        //create another array          
        let slotOutcome = [];
        slotOutcome[0] = num;
        num = getRandomIntInclusive(0, 2); 
        slotOutcome[1] = num;
        num = getRandomIntInclusive(0, 2); 
        slotOutcome[2] = num;


        return(

            // compare each output
            // if else win or lose condition
            <div>                
            {slotOutcome}
            <p>{(slotOutcome[0] === slotOutcome[1]) && slotOutcome[0] === slotOutcome[2] ? this.props.winCond : this.props.loseCond}</p>


            </div>
        )
    }
}