import styles from './Program.module.css';
import Bill from './Bill';

function Program() {


    let clients = [];
    let items = [];
    let productChose = 'none';
    let clientsChoose = [];
    let counter = 0;

    function ClientRegister (nameInput) {
        let client = {};

        if (nameInput !== '') {
            client.name = nameInput;
            client.value = 0;
            client.id = 'client' + counter;

            clients.push(client);

            let input = document.createElement('input');
            input.type = 'checkbox';
            input.id = client.name;
            input.name = client.name;
            input.value = client.name;
            input.onchange = () => {selectClient(input.id)};

            let label = document.createElement('label');
            label.htmlFor = input.value;
            label.innerHTML = input.value;

            let div = document.createElement('div');
            div.id = 'client' + counter;
            div.appendChild(input);
            div.appendChild(label);
            document.getElementById('selectClients').appendChild(div);

            counter += 1;
        };
        
    };

    function ItemRegister (itemInput, valueInput) {
        let itemObject = {};

        if (itemInput !== '' && valueInput !== '') {
            itemObject.name = itemInput;
            itemObject.value = valueInput;
            itemObject.id = counter;

            items.push(itemObject);

            let input = document.createElement('input');
            input.type = 'radio';
            input.id = itemObject.name ;
            input.name = 'optionItem';
            input.value = itemObject.name;
            input.onclick = () => {productChose = itemObject.name};

            let label = document.createElement('label');
            label.htmlFor = input.id;
            label.innerHTML = input.value + ": $ " + itemObject.value;

            let div = document.createElement('div');
            div.id = 'item' + counter;
            div.appendChild(input);
            div.appendChild(label);
            document.getElementById('selectItem').appendChild(div);
            
        };

        counter += 1;
    };

    function selectClient (idGet) {
        let id = document.getElementById(idGet).id;

        if (document.getElementById(idGet).checked === true) {
            clientsChoose.push(id);
        };

        if (document.getElementById(idGet).checked === false) {
            let index = clientsChoose.indexOf(id);
            clientsChoose.splice(index,1);
        };
    };

    function makeBill () {
        if (productChose !== 'none' && clientsChoose.length !== 0) {
            let valueForPay = 0;

            for (let i = 0; i< items.length; i++) {
                if (productChose === items[i].name) {
                    valueForPay = items[i].value / clientsChoose.length;

                }
            }

            for (let i =0; i< clientsChoose.length; i++) {
                for (let j =0; j< clients.length; j++) {
                    if (clientsChoose[i] === clients[j].name) {
                        clients[j].value += valueForPay;

                        let client = document.getElementById(clients[j].name);
                        client.checked = false;
                    }
                }
            }

            clientsChoose = [];

        }
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className={styles.registerContainer}>

                <div className={styles.clientRegisterContainer}>
                    <input type="text" id='clientInput' placeholder='Nome do Cliente...' autoComplete='off' />
                    <button type='submit' onClick={() => {
                        let input = document.getElementById('clientInput');

                        ClientRegister(input.value)

                        input.value = ''
                    }}>Cadastrar Cliente</button>
                </div>
                
                <div className={styles.itemRegisterContainer}>
                    <div>
                        <input type="text" id='itemInput' placeholder='Nome do produto...' autoComplete='off' />
                        <input type="number" id='itemvalueInput' placeholder='Valor do produto...' autoComplete='off' />
                    </div>
                    
                    <button type='submit' onClick={() => {
                        let input = document.getElementById('itemInput');
                        let value = document.getElementById('itemvalueInput')

                        ItemRegister(input.value, value.value)

                        input.value = ''
                        value.value = ''
                    }}>Cadastrar Produto</button>
                </div>
                
            </form>

            <div className={styles.registerDisplay}>

                <form onSubmit={(e) => e.preventDefault()} className={styles.selectItem}>

                <p>Selecione o Produto</p>
                <div id="selectItem">

                </div>

                </form>

                <form onSubmit={(e) => e.preventDefault()} id="selectClients" className={styles.selectClients}>

                <p>Selecione os clientes</p>


                </form>

            </div>

            <button onClick={makeBill} className={styles.makeBill}>Cadastrar valor</button>
        
            <Bill array ={clients} />
        </div>
    );
};

export default Program;