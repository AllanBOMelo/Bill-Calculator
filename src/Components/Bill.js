function Bill (props) {

    let clients = props.array
    
    function billGenerator () {

        const mainDiv = document.getElementById('billGenerator')
        clear()   

        clients.forEach(element => {
            let div = document.createElement('div')

            let p = document.createElement('p')
            p.textContent = element.name + ': '

            let label = document.createElement('label')
            label.textContent = '$ ' + element.value

            div.appendChild(p)
            div.appendChild(label)

            mainDiv.appendChild(div)
        });
    }

    function clear () {

        const mainDiv = document.getElementById('billGenerator')

        mainDiv.innerHTML = '';
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