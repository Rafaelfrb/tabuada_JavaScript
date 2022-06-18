function multiply(){
    let input = document.getElementById("inputnumber");
    let result = document.getElementById("tabuada");

    if (input.value.length == 0) {
        window.alert('Selecione um número.')
    } else {
        let inputnumber = Number(input.value);
        result.innerHTML = ''
        for (c = 1; c <= 10; c++){
            let item = document.createElement('option');
            item.text = `${c} x ${inputnumber} = ${c*inputnumber}`
            result.appendChild(item);
        }
    }
}