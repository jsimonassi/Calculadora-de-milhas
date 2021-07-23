/// <reference path="../../typings/globals/jquery/index.d.ts" />

//Tipos disponívis atualmente.
//Adicionar aqui e nas views caso seja necessário adicionar novos tipos
const SPENT_TYPES = {
   CREDIT_CARD: 'Cartão de crédito',
   BILL_PAYMENT: 'Pagamento de Contas',
   SUPERMARKET: 'Supermercados',
   DRUGSTORE: 'Farmácia',
   GASOLINE: 'Gasolina',
   UBER: 'Uber',
   HOME_APPLIANCES: 'Eletrodomésticos ou celulares',
   CONSTRUCTION_MATERIAL: 'Material de construção',
   HOTEL_RATES: 'Diárias em hotel',
   CAR_RENTAL: 'Aluguel de carros'
};

//Array que controla os gastos atuais
let currentSpents = [{ id: 0, score: 0, type: null, value: null }];

/** 
 * Monta formFields baseado na escolha do usuário
 * @param id Id do componente de formField
*/
function getCardValues(id) {
   resetErros('type', id);
   var spentType = $(`#options_spent_${id}`).val();
   currentSpents[id].type = spentType;
   var valuesSpentObj = $(`#values_spent_${id}`);
   valuesSpentObj.empty();
   generateCardOptions(spentType, valuesSpentObj);
   console.log("Current spents: ", currentSpents);
}

/**
 * Monta segundo form de valores
 * @param id id base para adicionar campos de form
 */
function getScoreValue(id) {
   resetErros('value', id);
   var valuesSpentObj = $(`#values_spent_${id}`).val();
   var valuesSpentObjText = $(`#values_spent_${id} :selected`).text();
   for (let i = 0; i < currentSpents.length; i++) {
      if (currentSpents[i].id === id) {
         currentSpents[i].score = valuesSpentObj != null ? valuesSpentObj : 0;
         currentSpents[i].value = valuesSpentObjText != null ? valuesSpentObjText : '';
      }
   }
}

/**
 * Função auxiliar para montar form dinâmicamente
 */
function generateCardOptions(spentType, valuesSpentObj) {
   valuesSpentObj.append($('<option>', { value: 0, text: 'Selecione uma opção' }));
   switch (spentType) {
      case SPENT_TYPES.CREDIT_CARD:
      case SPENT_TYPES.BILL_PAYMENT:
         valuesSpentObj.append($('<option>', { value: 200, text: 'Até R$: 999,00' }));
         valuesSpentObj.append($('<option>', { value: 480, text: 'Entre R$: 1.000,00 e R$: 1.999,00' }));
         valuesSpentObj.append($('<option>', { value: 1500, text: 'Entre R$: 2.000,00 e R$: 4.999,00' }));
         valuesSpentObj.append($('<option>', { value: 4000, text: 'Entre R$: 5.000,00 e R$: 9.999,00' }));
         valuesSpentObj.append($('<option>', { value: 7500, text: 'Entre R$: 10.000,00 e R$: 14.999,00' }));
         valuesSpentObj.append($('<option>', { value: 10000, text: 'Acima de R$: 15.000,00' })); //TODO: Conferir Valor
         break;

      case SPENT_TYPES.SUPERMARKET:
         valuesSpentObj.append($('<option>', { value: 2400, text: 'Até R$: 799,00' }));
         valuesSpentObj.append($('<option>', { value: 3600, text: 'Entre R$: 800,00 e R$: 1.199,00' }));
         valuesSpentObj.append($('<option>', { value: 4500, text: 'Entre R$: 1.200,00 e R$: 1.499,00' }));
         valuesSpentObj.append($('<option>', { value: 6000, text: 'Entre R$: 1.500,00 e R$: 1.999,00' }));
         valuesSpentObj.append($('<option>', { value: 9000, text: 'Entre R$: 2.000,00 e R$: 2.999,00' }));
         valuesSpentObj.append($('<option>', { value: 12000, text: 'Acima de R$: 3.000,00' })); //TODO: Conferir Valor
         break;

      case SPENT_TYPES.DRUGSTORE:
         valuesSpentObj.append($('<option>', { value: 600, text: 'Até R$: 199,00' }));
         valuesSpentObj.append($('<option>', { value: 900, text: 'Entre R$: 200,00 e R$: 299,00' }));
         valuesSpentObj.append($('<option>', { value: 1200, text: 'Entre R$: 300,00 e R$: 399,00' }));
         valuesSpentObj.append($('<option>', { value: 1800, text: 'Entre R$: 400,00 e R$: 599,00' }));
         valuesSpentObj.append($('<option>', { value: 3000, text: 'Entre R$: 600,00 e R$: 999,00' }));
         valuesSpentObj.append($('<option>', { value: 4500, text: 'Acima de R$: 1.000,00' })); //TODO: Conferir Valor
         break;

      case SPENT_TYPES.GASOLINE:
         valuesSpentObj.append($('<option>', { value: 2400, text: 'Até R$: 99,00' }));
         valuesSpentObj.append($('<option>', { value: 4800, text: 'Entre R$: 100,00 e R$: 199,00' }));
         valuesSpentObj.append($('<option>', { value: 20000, text: 'Entre R$: 200,00 e R$: 499,00' }));
         valuesSpentObj.append($('<option>', { value: 25000, text: 'Entre R$: 500,00 e R$: 799,00' }));
         valuesSpentObj.append($('<option>', { value: 30000, text: 'Entre R$: 800,00 e R$: 999,00' }));
         valuesSpentObj.append($('<option>', { value: 40000, text: 'Acima de R$: 1.000,00' })); //TODO: Conferir Valor
         break;

      case SPENT_TYPES.UBER:
         valuesSpentObj.append($('<option>', { value: 300, text: 'Até R$: 99,00' }));
         valuesSpentObj.append($('<option>', { value: 600, text: 'Entre R$: 100,00 e R$: 199,00' }));
         valuesSpentObj.append($('<option>', { value: 900, text: 'Entre R$: 200,00 e R$: 299,00' }));
         valuesSpentObj.append($('<option>', { value: 1500, text: 'Entre R$: 300,00 e R$: 499,00' }));
         valuesSpentObj.append($('<option>', { value: 2400, text: 'Entre R$: 500,00 e R$: 799,00' }));
         valuesSpentObj.append($('<option>', { value: 3500, text: 'Acima de R$: 800,00' })); //TODO: Conferir Valor
         break;

      case SPENT_TYPES.HOME_APPLIANCES:
      case SPENT_TYPES.CONSTRUCTION_MATERIAL:
         valuesSpentObj.append($('<option>', { value: 40000, text: 'Até R$: 1.999,00' }));
         valuesSpentObj.append($('<option>', { value: 60000, text: 'Entre R$: 2.000,00 e R$: 2.999,00' }));
         valuesSpentObj.append($('<option>', { value: 100000, text: 'Entre R$: 3.000,00 e R$: 4.999,00' }));
         valuesSpentObj.append($('<option>', { value: 140000, text: 'Entre R$: 5.000,00 e R$: 6.999,00' }));
         valuesSpentObj.append($('<option>', { value: 200000, text: 'Entre R$: 7.000,00 e R$: 9.999,00' }));
         valuesSpentObj.append($('<option>', { value: 250000, text: 'Acima de R$: 10.000,00' })); //TODO: Conferir Valor
         break;

      case SPENT_TYPES.HOTEL_RATES:
         valuesSpentObj.append($('<option>', { value: 4000, text: 'Até R$: 799,00' }));
         valuesSpentObj.append($('<option>', { value: 6000, text: 'Entre R$: 800,00 e R$: 1.199,00' }));
         valuesSpentObj.append($('<option>', { value: 10000, text: 'Entre R$: 1.200,00 e R$: 1.999,00' }));
         valuesSpentObj.append($('<option>', { value: 25000, text: 'Entre R$: 2.000,00 e R$: 4.999,00' }));
         valuesSpentObj.append($('<option>', { value: 50000, text: 'Entre R$: 5.000,00 e R$: 9.999,00' }));
         valuesSpentObj.append($('<option>', { value: 80000, text: 'Acima de R$: 10.000,00' })); //TODO: Conferir Valor
         break;

      case SPENT_TYPES.CAR_RENTAL:
         valuesSpentObj.append($('<option>', { value: 2000, text: 'Até R$: 399,00' }));
         valuesSpentObj.append($('<option>', { value: 3000, text: 'Entre R$: 400,00 e R$: 599,00' }));
         valuesSpentObj.append($('<option>', { value: 5000, text: 'Entre R$: 600,00 e R$: 999,00' }));
         valuesSpentObj.append($('<option>', { value: 10000, text: 'Entre R$: 1.000,00 e R$: 1.999,00' }));
         valuesSpentObj.append($('<option>', { value: 15000, text: 'Entre R$: 2.000,00 e R$: 2.999,00' }));
         valuesSpentObj.append($('<option>', { value: 20000, text: 'Acima de R$: 3.000,00' })); //TODO: Conferir Valor
         break;

      default:
         valuesSpentObj.empty();
         break;

   }
}

/**
 * Remove card baseado no id recebido
 */
function removeSpent(id) {
   byebye = currentSpents.findIndex(obj => obj.id === id);
   if (byebye > -1) {
      $(`#spent_${id}`).remove();
      currentSpents.splice(byebye, 1);
   }
}

/**
 * Valida se todos os campos do formulário estão preenchidos
 * @returns true or false baseado na validação
 */
function validateForm() {
   let isAllRight = true;
   currentSpents.forEach(spent => {
      if ($(`#options_spent_${spent.id}`).val() == 'Selecione uma opção') {
         $(`#box1_${spent.id}`).fadeIn(100);
         isAllRight = false;
      } else {
         $(`#box1_${spent.id}`).fadeOut(100);
      }

      if (parseInt(spent.score) == 0) {
         $(`#box2_${spent.id}`).fadeIn(100);
         isAllRight = false;
      } else {
         $(`#box2_${spent.id}`).fadeOut(100);
      }
   });
   return isAllRight;
}

/**
 * Reset mensagem de erro
 * @param {*} formField Box 1 ou Box 2?
 * @param {*} id id do card
 */
function resetErros(formField, id) {
   if (formField == 'type') {
      $(`#box1_${id}`).fadeOut(100);
   } else if (formField == 'value') {
      $(`#box2_${id}`).fadeOut(100);
   }
}

function setTravelsExamples(score) {
   $('#notrip').empty();
   if (score < 4000) {
      return;
   }
   $('#notrip').append(`<hr></hr>`);
   $('#notrip').append(`<strong>Com essa quantidade de milhas você poderia comprar passagens como: </strong><br>`);
   $('#notrip').append(`<hr></hr>`);

   if (score < 5999) {
      $('#notrip').append(`<p>Rio - São Paulo</p>`);
      $('#notrip').append(`<p>Curitiba – Porto Alegre</p>`);
      $('#notrip').append(`<p>Brasília – Goiânia</p>`);
      $('#notrip').append(`<p>Belo Horizonte – Vitória</p>`);
      $('#notrip').append(`<p>Natal – Fortaleza</p>`);
   }

   else if (score < 9999) {
      $('#notrip').append(`<p>Recife - Salvador</p>`);
      $('#notrip').append(`<p>Cuiabá – Campo Grande</p>`);
      $('#notrip').append(`<p>João Pessoa - Aracajú</p>`);
      $('#notrip').append(`<p>São Luiz - Teresina</p>`);
      $('#notrip').append(`<p>Belém – Macapá</p>`);
   }

   else if (score < 19999) {
      $('#notrip').append(`<p>São Paulo – Porto Alegre</p>`);
      $('#notrip').append(`<p>Salvador – Rio</p>`);
      $('#notrip').append(`<p>Manaus – Belém</p>`);
      $('#notrip').append(`<p>Maceió – Palmas</p>`);
      $('#notrip').append(`<p>Porto Velho – Boa Vista</p>`);
   }

   else if (score < 29999) {
      $('#notrip').append(`<p>Rio – Buenos Aires (Argentina)</p>`);
      $('#notrip').append(`<p>São Paulo – Santiago (Chile)</p>`);
      $('#notrip').append(`<p>Belo Horizonte – Assunção (Paraguai)</p>`);
      $('#notrip').append(`<p>Manaus – Orlando (EUA)</p>`);
      $('#notrip').append(`<p>Florianópolis – Machu Picchu (Peru)</p>`);
   }

   else if (score < 44999) {
      $('#notrip').append(`<p>São Paulo – Cancún (México)</p>`);
      $('#notrip').append(`<p>Belo Horizonte – Punta Cana (Rep. Dominicana)</p>`);
      $('#notrip').append(`<p>Belo Horizonte – Assunção (Paraguai)</p>`);
      $('#notrip').append(`<p>Manaus – Orlando (EUA)</p>`);
      $('#notrip').append(`<p>Florianópolis – Machu Picchu (Peru)</p>`);
   }

   else if (score < 69999) {
      $('#notrip').append(`<p>Rio – Londres (Inglaterra)</p>`);
      $('#notrip').append(`<p>São Paulo – Paris (França)</p>`);
      $('#notrip').append(`<p>Belo Horizonte – Dubai (Emirados Árabes)</p>`);
      $('#notrip').append(`<p>Salvador – Lisboa (Portugal)</p>`);
      $('#notrip').append(`<p>Recife – Madrid (Espanha)</p>`);
   }

   else if (score > 70000) {
      $('#notrip').append(`<p>Brasil – Japão</p>`);
      $('#notrip').append(`<p>Brasil - China</p>`);
      $('#notrip').append(`<p>Brasil - Austrália</p>`);
      $('#notrip').append(`<p>Brasil - Maldivas</p>`);
      $('#notrip').append(`<p>Brasil - Bora Bora</p>`);
      $('#notrip').append(`<p>Todo o mundo!</p>`);
   }

   //setTableContent();
}

function setTableContent() {

   $('#table').empty();
   $('#table').append('<thead><tr><th scope="col">#</th><th scope="col">Tipo</th><th scope="col">Valor</th><th scope="col">Milhas</th></tr></thead><tbody>');

   currentSpents.forEach(spent => {
      $('#table').append(`<tr><th scope="row">${spent.id + 1}</th><td>${spent.type}</td><td>${spent.value}</td><td>${parseInt(spent.score).toLocaleString('pt-BR')}</td></tr>`);
   });

   $('#table').append('</tbody>');
}


$(document).ready(function () {

   /**
    * Callback do botão. Calcula resultado final.
    */
   $('#resultBtn').click(function () {
      if (validateForm()) {
         let finalScore = 0;
         currentSpents.forEach(spent => {
            finalScore += parseInt(spent.score);
         });
         $('#result_title').empty();
         $('#result_title').append(`<h1>${finalScore.toLocaleString('pt-BR')}</h1>`)

         $('#result_title_modal').empty();
         $('#result_title_modal').append(`<h1>${finalScore.toLocaleString('pt-BR')}</h1>`)

         setTravelsExamples(finalScore);

         $("#result").fadeIn(600);
         //$("#result").css("display", "block");
         $('#resultModalCenter').modal('show');
         window.location.href = '#result_title';
      };
   });

   /**
    * Adiciona novo card de gasto
    */
   $('#newSpentBtn').click(function () {
      let newSpent = { id: currentSpents[currentSpents.length - 1].id + 1, score: 0 };
      currentSpents.push(newSpent);
      let htmlSpent = $(`<div id=spent_${newSpent.id}><div class=spentcard><div class="row spent_header"><h3 class=spenttitle>Gasto ${newSpent.id + 1}</h3><button id="removeSpent_${newSpent.id}" onclick="removeSpent(${newSpent.id})" class="removeBtn">Remover gasto</a></div><div class="form-group myform"><label class=labelspent for="exampleFormControlSelect1">Tipo de gasto:</label><select class="form-control" id="options_spent_${newSpent.id}" oninput=getCardValues(${newSpent.id})><option selected="selected">Selecione uma opção</option><option>Cartão de crédito</option><option>Pagamento de Contas</option><option>Supermercados</option><option>Farmácia</option><option>Gasolina</option><option>Uber</option><option>Eletrodomésticos ou celulares</option><option>Material de construção</option><option>Diárias em hotel</option><option>Aluguel de carros</option></select><small class=error id=box1_${newSpent.id}>Este campo não pode ser vazio</small></div><div class="form-group myform"><label class=labelspent for="exampleFormControlSelect1">Valor:</label><select class="form-control" id="values_spent_${newSpent.id}" oninput=getScoreValue(${newSpent.id})></select><small class=error id=box2_${newSpent.id} >Este campo não pode ser vazio</small></div></div></div>`)
         .hide()
         .fadeIn(600);
      $('#spents').append(htmlSpent);
   });

   $('#resetPage').click(function(){
      window.location.reload();
   })

});