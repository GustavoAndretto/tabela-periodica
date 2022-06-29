var tableData = {}

function fetchTableData() {
    fetch('./resources/data/elements.json')
        .then(res => res.json())
        .then(data => {
            tableData = data;
            fillTable();
            fillDescription(0);
        })
}

function fillDescription(id) {
    let elList = document.getElementById('dlist');

    let chem = tableData[id];
    let html = '';

    html += `<li><div>Número Atômico:</div><div>${chem.atomicNumber}</div></li>`;
    html += `<li><div>Símbolo:</div><div>${chem.symbol}</div></li>`;
    html += `<li><div>Nome:</div><div>${chem.name}</div></li>`;
    html += `<li><div>Massa Atômica:</div><div>${chem.atomicMass}u</div></li>`;
    html += `<li><div>Configuração Eletrônica:</div><div>${chem.electronicConfiguration}</div></li>`;
    html += `<li><div>Eletronegatividade:</div><div>${chem.electronegativity}</div></li>`;
    html += `<li><div>Raio Atômico:</div><div>${chem.atomicRadius}</div></li>`;
    html += `<li><div>Raio Iônico:</div><div>${chem.ionRadius}${chem.ionRadius == 'unknown' ? '' : ' pm'}</div></li>`;
    html += `<li><div>Raio de Van der Waals:</div><div>${chem.vanDerWaalsRadius}${chem.vanDerWaalsRadius == 'unknown' ? '' : ' pm'}</div></li>`;
    html += `<li><div>Energia de Ionização:</div><div>${chem.ionizationEnergy}${chem.ionizationEnergy == 'unknown' ? '' : ' kJ/mol'}</div></li>`;
    html += `<li><div>Afinidade Eletrônica:</div><div>${chem.electronAffinity}</div></li>`;
    html += `<li><div>Estados de Oxidação:</div><div>${chem.oxidationStates}</div></li>`;
    html += `<li><div>Estado Padrão:</div><div>${chem.standardState}</div></li>`;
    html += `<li><div>Tipo de Ligação:</div><div>${chem.bondingType}</div></li>`;
    html += `<li><div>Ponto de Fusão:</div><div>${chem.meltingPoint}${chem.meltingPoint == 'unknown' ? '' : ' K'}</div></li>`;
    html += `<li><div>Ponto de Ebulição:</div><div>${chem.boilingPoint}${chem.boilingPoint == 'unknown' ? '' : ' K'}</div></li>`;
    html += `<li><div>Densidade:</div><div>${chem.density}${chem.density == 'unknown' ? '' : ' g/cm<sup>-3</sup>'}</div></li>`;
    html += `<li><div>Bloco de Grupo:</div><div>${chem.groupBlock}</div></li>`;
    html += `<li><div>Ano de Descoberta:</div><div>${chem.yearDiscovered}</div></li>`;
    html += `<li><div>Bloco:</div><div>${chem.block}</div></li>`;
    html += `<li><div>Período:</div><div>${chem.period}</div></li>`;
    html += `<li><div>Grupo:</div><div>${chem.group}</div></li>`;

    elList.innerHTML = html;
}

function fillTable() {
    let elTable = document.getElementById('ptable');

    let html = '';

    for (let i = 0; i < tableData.length; i++) {
        let elClass = 'element';

        switch (tableData[i].groupBlock) {
            case 'noble gas':
                elClass += ' noble-gas';
                break;
            case 'nonmetal':
                elClass += ' non-metal';
                break;
            case 'alkali metal':
                elClass += ' alkali-metal';
                break;
            case 'alkaline earth metal':
                elClass += ' alkaline-earth-metal';
                break;
            case 'metalloid':
                elClass += ' metalloid';
                break;
            case 'halogen':
                elClass += ' halogen';
                break;
            case 'metal':
                elClass += ' metal';
                break;
            case 'transition metal':
                elClass += ' transition-metal';
                break;
            case 'lanthanoid':
                elClass += ' lanthanoid';
                break;
            case 'actinoid':
                elClass += ' actinoid';
                break;
            case 'post-transition metal':
                elClass += ' post-transition-metal';
        }

        html += `<li class="${elClass}" onclick="fillDescription(${i})">`;
        html += `<b>${tableData[i].atomicNumber}</b>`;
        html += `<abbr>${tableData[i].symbol}</abbr>`;
        html += `<span>${tableData[i].atomicMass}</span>`;
        html += '</li>';
    }

    elTable.innerHTML = html;
}

function init() {
    fetchTableData();
}

init();
