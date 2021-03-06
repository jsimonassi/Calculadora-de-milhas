<?php
/*
Template Name: calculadorademilhas
*/
?>

<?php get_header(); ?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://academilhas.com.br/wp-content/themes/astra/calculadorademilhas/assets/css/bootstrap.css" rel="stylesheet">
    <link href="https://academilhas.com.br/wp-content/themes/astra/calculadorademilhas/assets/css/all.css" rel="stylesheet">
    <link href="https://academilhas.com.br/wp-content/themes/astra/calculadorademilhas/assets/css/styles.css" rel="stylesheet">
    <title>Calculadora de milhas</title>
</head>

<body>
    <div class="imgContainer">
        <div class="webtitle">
            <!-- <h4 class=title>Calculadora de Milhas</h4> -->
        </div>
    </div>
    <div class=container>
        <br>
        <div>
            <div class=title_container>
                <h4 class=title>Calculadora de Milhas</h4>
                <br>
            </div>
            <p class="desc">Descubra quantas milhas você perde por ano, veja quanto dinheiro você está jogando fora e
                quantos países
                está deixando de conhecer.</p>
        </div>
        <br>
        <div id=spents>
            <div class=spentcard>
                <div class="row spent_header">
                    <h3 class=spenttitle>Gasto 1</h3>
                </div>
                <div class="form-group myform">
                    <label class=labelspent for="exampleFormControlSelect1">Tipo de gasto:</label>
                    <select class="form-control" id="options_spent_0" oninput=getCardValues(0)>
                        <option selected="selected">Selecione uma opção</option>
                        <option>Cartão de crédito - Gasto mensal</option>
                        <option>Pagamento de Contas - Gasto mensal</option>
                        <option>Supermercados - Gasto mensal</option>
                        <option>Farmácia - Gasto mensal</option>
                        <option>Gasolina - Gasto mensal</option>
                        <option>Uber - Gasto mensal</option>
                        <option>Eletrodomésticos ou celulares - Gasto anual</option>
                        <option>Material de construção - Gasto anual</option>
                        <option>Diárias em hotel - Gasto anual</option>
                        <option>Aluguel de carros - Gasto anual</option>
                    </select>
                    <small class=error id=box1_0>Este campo não pode ser vazio</small>
                </div>
                <div class="form-group myform">
                    <label class=labelspent for="exampleFormControlSelect1">Valor:</label>
                    <select class="form-control" id="values_spent_0" oninput=getScoreValue(0)>
                    </select>
                    <small class=error id=box2_0>Este campo não pode ser vazio</small>
                </div>
            </div>
        </div>
        <br>
        <div class="buttons">
            <div>
                <button id='newSpentBtn' class="newSpentBtn">Novo gasto</a>
                    <button id='resultBtn' class="resultBtn">CALCULAR</a>
            </div>
        </div>
        <!-- <div class="result" id="result">
            <hr>
            <p>Você está perdendo aproximadamente</p>
            <div class=result_title id=result_title>
            </div>
            <p>milhas.</p>
        </div> -->
    </div>


    <!-- Modal de resultado -->
    <div class="modal fade" id="resultModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body resultModal" id=resultModal>
                    <p>Você está perdendo aproximadamente</p>
                    <div class=result_title id=result_title_modal>
                    </div>
                    <div id="notrip" class="notrip">
                    </div>
                    <!-- <table class="table table-striped" id="table">
                    </table> -->
                    <!-- <div class=parent>
                        <div class='child inline-block-child'> _______________ </div>
                        <div class='child inline-block-child'>OU</div>
                        <div class='child inline-block-child'> _______________ </div>
                    </div> -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button id="resetPage" type="button" class="btn btn-primary" data-dismiss="modal">Calcular
                        novamente</button>
                </div>
            </div>
        </div>
    </div>

    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.4.1/jspdf.debug.js" integrity="sha384-THVO/sM0mFD9h7dfSndI6TS0PgAGavwKvB5hAxRRvc0o9cPLohB0wb/PTA7LdUHs" crossorigin="anonymous"></script> -->
    <script src="https://academilhas.com.br/wp-content/themes/astra/calculadorademilhas/assets/js/jquery-3.5.1.js"></script>
    <script src="https://academilhas.com.br/wp-content/themes/astra/calculadorademilhas/assets/js/popper.js"></script>
    <script src="https://academilhas.com.br/wp-content/themes/astra/calculadorademilhas/assets/js/bootstrap.js"></script>
    <script src="https://academilhas.com.br/wp-content/themes/astra/calculadorademilhas/assets/js/script.js"></script>
</body>

</html>

<?php get_footer(); ?>
