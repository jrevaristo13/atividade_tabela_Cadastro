
    form.addEventListener('submit',function(e){
        e.preventDefault();
    
    });
                function inserirRegistro(){


                    var tabela = document.getElementById('registros');
                    var nome = document.getElementById('inputNome').value;
                    var tel = document.getElementById('inputTel').value;
                    var linhasTotais = tabela.rows.length;
                    var novaLinha = tabela.insertRow(linhasTotais);
                    var novaCelulaNome=novaLinha.insertCell(0);
                    var novaCelulaCPF=novaLinha.insertCell(1);
                    novaCelulaNome.innerHTML= nome;
                    novaCelulaCPF.innerHTML= tel;
                   
                }