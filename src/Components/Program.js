import './Program.css'


function Program() {


    let clients = [];
    let items = [];
    let productChose = 'none';
    let clientsChoose = [];

    function ClientRegister (nameInput) {
        let client = {};

        if (nameInput !== '') {
            client.name = nameInput;
            client.value = 0;

            clients.push(client)

            let input = document.createElement('input')
            input.type = 'checkbox'
            input.id = client.name
            input.name = client.name
            input.value = client.name
            input.onchange = () => {selectClient(input.id)}

            let label = document.createElement('label')
            label.htmlFor = input.value
            label.innerHTML = input.value

            let div = document.createElement('div')
            div.appendChild(input)
            div.appendChild(label)
            document.getElementById('selectClients').appendChild(div)

        }
        
    };

    function selectClient (idGet) {
        let id = document.getElementById(idGet).id

        if (document.getElementById(idGet).checked === true) {
            clientsChoose.push(id)
            console.log(clientsChoose)
        }

        if (document.getElementById(idGet).checked === false) {
            let index = clientsChoose.indexOf(id)
            clientsChoose.splice(index,1)
            console.log(clientsChoose)
        }
    }

    function ItemRegister (itemInput, valueInput) {
        let itemObject = {};

        if (itemInput !== '' && valueInput !== '') {
            itemObject.name = itemInput;
            itemObject.value = valueInput;
            itemObject.clients = '';

            items.push(itemObject)

            console.log(items) 

            let input = document.createElement('input')
            input.type = 'radio'
            input.id = itemObject.name
            input.name = 'optionItem'
            input.value = itemObject.name
            input.onclick = () => {productChose = itemObject.name}

            let label = document.createElement('label')
            label.htmlFor = input.id
            label.innerHTML = input.value

            let div = document.createElement('div')
            div.appendChild(input)
            div.appendChild(label)
            document.getElementById('selectItem').appendChild(div)
            
        }
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Cliente</label>
                <input type="text" id='clientInput' />
                <button type='submit' onClick={() => {
                    let input = document.getElementById('clientInput');

                    ClientRegister(input.value)

                    input.value = ''
                }}>submit client</button>

                <label>Produto</label>
                <input type="text" id='itemInput' />
                <input type="number" id='itemvalueInput' />
                <button type='submit' onClick={() => {
                    let input = document.getElementById('itemInput');
                    let value = document.getElementById('itemvalueInput')

                    ItemRegister(input.value, value.value)

                    input.value = ''
                }}>submit produto</button>
            </form>

            <form onSubmit={(e) => e.preventDefault()} id="selectItem">

            <p>Selecione o Produto</p>
            
            
            </form>

            <form onSubmit={(e) => e.preventDefault()} id="selectClients">

            <p>Selecione os clientes</p>
            
            
            </form>
        
            
        </div>
    )
}

export default Program;