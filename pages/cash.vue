<template>
  <h2 class="text-h4">What is cash and Exp?</h2>
  <br>
  
  <p>
    Cash is needed to purchase skins and perks in the website Shop.
    Exp is needed to level up your account. Higher level - higher respect from other players.
    Both Exp and Cash are issued in the same way, the only difference is that the Cash can be spent and the Exp is not.
  </p>
  <br>

  <h2 class="text-h4">Como conseguir cash e exp?</h2>
  <br>

  <p>
    Cash and Exp can be gained for these game actions: <br>
    Also, Premium will double amount of Cash and Exp receiving from game actions.
  </p>
  <br>

  <v-table>
    <thead>
      <tr>
        <th>Ação</th>
        <th>Cash/Exp</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Kill</td><td>1</td><td>Matar no servidor Ranqueado</td></tr>
      <tr><td>Headshot</td><td>1</td><td>Recompensa adicional por um tiro na cabeça no servidor Ranqueado</td></tr>
      <tr><td>Bomb Defuse</td><td>5</td><td>Recompensa por cada bomba desativada no servidor Ranqueado</td></tr>
      <tr><td>Bomb Explode</td><td>4</td><td>Recompensa por cada bomba explodida no servidor Ranqueado</td></tr>
      <tr><td>Bomb Plant</td><td>1</td><td>Plante uma bomba - estrague tudo no servidor Ranqueado</td></tr>
      <tr><td>Hostage Rescue</td><td>2</td><td>Recompensa por cada refém resgatado no servidor Ranqueado</td></tr>
      <tr><td>Hostage Kill</td><td>0</td><td>Kill a hostage</td></tr>
      <tr><td>Kill VIP</td><td>3</td><td>Recompensa por cada VIP morto</td></tr>
      <tr><td>VIP Escape</td><td>3</td><td>Recompensa para cada fuga sendo VIP</td></tr>
      <tr><td>Kill Chicken</td><td>1</td><td>Reward for each Chicken</td></tr>
      <tr><td>Kill Сash Bag</td><td>5</td><td>Reward for each Bag</td></tr>
      <tr><td>Hide and Seek Win</td><td>2</td><td>Recompensa para todos os jogadores vencedores</td></tr>
      <tr><td>Gun Game Win</td><td>5</td><td>Recompensa total para o vencedor e meia recompensa para os membros de sua equipe</td></tr>
      <tr><td>Deathmatch (FFA) Win</td><td>10</td><td>Apenas um vencedor, apenas uma recompensa</td></tr>
      <tr><td>Death Run Win</td><td>2</td><td>Recompensa total para Terroristas vencidos ou meia recompensa para todos os Contra-Terroristas se vencerem</td></tr>
      <tr><td>Bonus</td><td>∞</td><td>Gift or compensation from the admins team.</td></tr>
    </tbody>
  </v-table>
  <br>

  <h2 class="text-h4">Regras</h2>
  <br>

  <ul>
    <li>Para usar o sistema, você deve estar jogador registrado</li>
    <li>O crédito ocorre quase imediatamente, a última atualização de dados foi 2023-04-14 20:00:52</li>
  </ul>
  <br>

  <h2 class="text-h4">Equilíbrio e história</h2>
  <br>
  
  <p>Seu balanço: 26 Cash</p>
  <a href="javascript:;">Visualizar histórico de cash</a>

</template>

<script setup>
  definePageMeta({
    layout: 'site'
  });

  useHead({
    title: 'Cash',
  });
</script>