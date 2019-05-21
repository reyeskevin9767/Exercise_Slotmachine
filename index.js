class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Slot Machines</h1>
                <Slotmachine 
                    winCond="You Win"
                    loseCond="You lose"
                    />
            <Slotmachine 
                winCond="You Win"
                loseCond="You lose"
                />
            <Slotmachine 
                winCond="You Win"
                loseCond="You lose"
                />
        </div>
            
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
