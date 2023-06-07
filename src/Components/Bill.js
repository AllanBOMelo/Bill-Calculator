function Bill (props) {

    let clients = props.array
    
    function billGenerator () {
        
    }

    return (
        <div>
            <button onClick={billGenerator}>Gerar Conta</button>
            <div className="billGenerator" id='billGenerator'>
                
            </div>
        </div>
    )
}

export default Bill