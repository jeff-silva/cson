<template>
  <nuxt-layout name="site">
    <v-text-field v-model="faq.filter" label="Filter content" prepend-inner-icon="mdi-magnify" />

    <v-sheet class="pa-3" v-if="faq.filteredData.length == 0"> Nenhum item encontrado </v-sheet>

    <v-expansion-panels>
      <v-expansion-panel :title="f.question" v-for="f in faq.filteredData" :key="f.question">
        <v-expansion-panel-text>
          {{ f.answer }}
          <div>
            <div v-for="link in f.links">
              <a :href="link" target="_blank" v-if="link.startsWith('https')">View</a>
              <nuxt-link :to="link" v-else>View</nuxt-link>
            </div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </nuxt-layout>
</template>

<script setup>
import { ref, computed } from "vue";

useHead({
  title: "FAQ",
});

const faq = ref({
  filter: "",
  filteredData: computed(() => {
    const filter = faq.value.filter.toLowerCase();
    return faq.value.data.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(filter);
    });
  }),
  data: [
    {
      question: "O jogo é grátis?",
      answer: "Sim, mas no futuro os serviços pagos podem ser adicionados sem obter benefícios no jogo.",
      links: [],
    },
    {
      question: "Em que país os servidores estão localizados?",
      answer:
        "Os servidores estão localizados em todo o mundo, a fim de garantir a qualidade da comunicação para todos os jogadores.",
      links: [],
    },
    {
      question: "Por que este jogo é necessário se houver uma versão para desktop?",
      answer:
        "A vantagem deste produto em sua disponibilidade em locais onde o jogo desktop não funciona ou então (trabalho, laboratório de informática).",
      links: [],
    },
    {
      question: "Existe uma versão móvel do jogo?",
      answer: "No momento, não, está em desenvolvimento.",
      links: [],
    },
    {
      question: "Por que o botão Ctrl não está funcionando ou está funcionando incorretamente?",
      answer: "O botão Ctrl funciona corretamente apenas no modo de tela cheia; caso contrário, use o botão C.",
      links: [],
    },
    {
      question: "O que acontecerá com minhas estatísticas após o registro no site?",
      answer: "Novas estatísticas pessoais serão criadas para o usuário registrado.",
      links: [],
    },
    {
      question: "Jogando muito, mas minha habilidade diminui o tempo todo.",
      answer:
        "Sua habilidade é reduzida porque você muitas vezes morre e mata jogadores fracos. Para jogadores fracos, menos habilidade é dada do que para jogadores fortes, tente observar a habilidade média dos jogadores na entrada do servidor e sempre jogue com oponentes mais fortes.",
      links: [],
    },
    {
      question: "Minha classificação está indisponível.",
      answer: "Você deve jogar no jogo algum tempo para atualizar suas estatísticas.",
      links: [],
    },
    {
      question: "Qual é o estoque de munição quando pego armas no chão?",
      answer:
        "Você terá apenas 1 carregador de munição restante se você pegar a arma de outra pessoa. Você terá tantas munições quantas sobraram antes de ser largada, se for sua arma ou se você a recebeu após a morte do inimigo.",
      links: [],
    },
    {
      question: "Com que frequência as estatísticas são atualizadas?",
      answer:
        "As estatísticas são atualizadas a cada 1 minuto ou mais rápido. As classificações dos jogadores são atualizadas à noite pelo horário do servidor.",
      links: [],
    },
    {
      question: "Por que minhas mortes por faca não aumentam?",
      answer: "Você precisa jogar em um servidor de classificação com 4 ou mais jogadores.",
      links: [],
    },
    {
      question: "Qual é a velocidade da conexão com a Internet necessária para o jogo?",
      answer: "Você precisa de uma conexão à Internet com uma velocidade de pelo menos 10 Mbps.",
      links: [],
    },
    {
      question: "Como minhas estatísticas do jogo são calculadas?",
      answer:
        "Elo Rating System. Stats are counted only on Rating Maps (icon plus) and only when more than 4 people play on them. Rating Maps are classic modes like cs_, de_ (except cs_untitled and cs_16fighter).",
      links: ["/rating"],
    },
    {
      question: "How to get a knife?",
      answer:
        "We have several ways to get a knife: Holiday Events, Achievements, For killing with a knife (Level System).",
      links: ["https://play-cs.com/forum/viewtopic.php?t=111"],
    },
    {
      question: "What is the Premium Status?",
      answer: "Premium have a lot of features. You can check it in the topic.",
      links: ["https://play-cs.com/forum/viewtopic.php?t=686"],
    },
    {
      question: "Why has my rating dropped?",
      answer: "For each day you skip, 10 skill points will be deducted from you.",
      links: [],
    },
    {
      question: "Como alterar os controles no jogo?",
      answer: "Some control keys can be changed in the Settings.",
      links: ["/controls"],
    },
    {
      question: "Como mudar o apelido?",
      answer: "You must be registered and then your nickname can be changed in the lobby settings.",
      links: ["/settings"],
    },
    {
      question: "Como acompanhar o progresso do meu jogo?",
      answer:
        "As estatísticas do jogo são atualizadas a cada hora. Complete as tarefas do jogo e você pode aumentar sua posição.",
      links: ["/rating"],
    },
    {
      question: "Como entrar em contato com os desenvolvedores do jogo?",
      answer: "Communication is through Discord. You can find the link in the upper right corner.",
      links: ["https://discord.gg/HW5XRA"],
    },
    {
      question: "Como iniciar meu próprio servidor?",
      answer: "You need to rent a server using the Rent Server tab.",
      links: ["/rent"],
    },
    {
      question: "Como colocar meu anúncio neste site?",
      answer: "Você deve entrar em contato com os administradores do site via aplicativo Discord.",
      links: ["https://discord.gg/HW5XRA"],
    },
    {
      question: "Meu cliente do jogo está atrasado.",
      answer:
        "Make sure your don't have any VPN or CDN plugins in browser activated, for example: friGate. Also you can to tune Network Optimization. You should try it both on and off",
      links: ["/settings"],
    },
    {
      question: "Como jogar um duelo com um amigo para que ninguém se incomode?",
      answer: "You can choose the game mode Duel or you can rent the server.",
      links: ["/rent"],
    },
    {
      question: "Por que os servidores às vezes me enviam para a página principal?",
      answer:
        "Servidores clássicos permitem que você jogue por 20 rodadas, após o que o jogador vai para a página principal. Não existem restrições em servidores privados, você pode alugá-los em uma página especial ou encontrá-los na página principal.",
      links: [],
    },
    {
      question: "As skins de armas serão adicionadas?",
      answer:
        "We add them sometimes during Events, but mostly we use classic models. You can also select models from other CS versions in the settings.",
      links: ["/settings"],
    },
    {
      question: "O console funciona?",
      answer:
        'It works, but not completely, you can try to enter console commands into the game chat using the Y key, where the ";" symbol is needed at the beginning',
      links: [],
    },
    {
      question: "How to add my map?",
      answer:
        "You can offer your card to the administrator in Discord or by email. We will check and decide if we can add it.",
      links: ["https://discord.gg/HW5XRA"],
    },
    {
      question: "How to promote server so everyone can see it and join?",
      answer:
        "Click on button in the top right corner of the screen when you are in the game and your current server will appear in the right block on the website and in Discord.",
      links: ["https://play-cs.com/forum/viewtopic.php?f=2&t=683"],
    },
    {
      question: "Como medir o FPS no jogo?",
      answer: "Install FPS extension for Google Chrome by the link below. We have cap of FPS at 60.",
      links: ["https://chrome.google.com/webstore/detail/fps-extension/gdkkmimldhefhmmmlalioafomdlahco"],
    },
    {
      question: "Where is the cs-online.club?",
      answer:
        "Our project has moved to a new Domain. Please tell your friends! Old domain is not working. It is no longer supported by us.",
      links: ["/"],
    },
    {
      question: "The problem with the rented server!",
      answer:
        "If you have any problems with the server, please contact the Project Administration in the Discord or by e-mail.",
      links: ["https://discord.gg/HW5XRA"],
    },
    {
      question: "How to earn Gold?",
      answer: "You can purchase Gold through the Donation system.",
      links: ["/gold"],
    },
    {
      question: "How to earn Gold for free?",
      answer: "You can take advantage of an offer from our partners, during which you can earn Gold.",
      links: ["/offers"],
    },
    {
      question: "Why was I banned by the admin on the server?",
      answer:
        "There may be many reasons, it is possible that you played too well or poorly. Anyway, we can't interfere in the affairs of private servers.",
      links: [],
    },
    {
      question: "How do I open a server in my country?",
      answer:
        "We can try to open a server in your country if you can bring enough people from there. In other words, the server will be closed soon.",
      links: [],
    },
    {
      question: "I can't register",
      answer:
        "Try to turn off AdBlock or alternative plugins in your browser. If this did not help, then write to us in the Discord or by E-mail",
      links: ["https://discord.gg/HW5XRA"],
    },
    {
      question: "Why is the sound of footsteps wrong?",
      answer: "Unfortunately, this is one of the bugs of the engine that we have to fix.",
      links: [],
    },
    {
      question: "How can I complain about a player?",
      answer:
        "If a player really behaves inappropriately, you can create a Vote on this player's Kick from the server.",
      links: [],
    },
    {
      question: "Do you have tournaments?",
      answer:
        "Sometimes players hold big tournaments, and we contribute to this with prizes. Follow the news of the project.",
      links: ["/forum"],
    },
  ],
});
</script>
