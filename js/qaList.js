const qaList = [
  {
    patterns: ['qual o horário de atendimento', 'me diga o horário de atendimento', 'horário de atendimento'],
    response: 'Nosso horário de atendimento é de segunda a sexta, das 8h às 18h.'
  },
  {
    patterns: ['vocês atendem aos sábados', 'atendimento aos sábados', 'posso ser atendido no sábado'],
    response: 'Sim, nosso atendimento aos sábados vai das 8h às 12h.'
  },
  {
    patterns: ['como entro em contato', 'quero contato', 'me passa o contato'],
    response: 'Você pode entrar em contato pelo nosso e-mail: suporte@empresa.com.'
  },
  {
    patterns: ['tem suporte pelo whatsapp', 'whatsapp de vocês', 'vocês possuem whatsapp'],
    response: 'Sim! Nosso WhatsApp é (11) 99999-9999.'
  },
  {
    patterns: ['como falar com atendente', 'quero falar com atendente', 'atendente disponível'],
    response: 'Aguarde um momento e um atendente estará com você.'
  },
  {
    patterns: ['qual o telefone de vocês', 'telefone de contato', 'me passa o telefone'],
    response: 'Nosso telefone é (11) 3333-3333.'
  },
  {
    patterns: ['tem atendimento 24 horas', 'atendimento 24h', 'vocês funcionam o dia todo'],
    response: 'Atualmente não temos atendimento 24h. Nosso horário é das 8h às 18h.'
  },
  {
    patterns: ['qual o e-mail de suporte', 'email de atendimento', 'como envio e-mail pra vocês'],
    response: 'O e-mail do nosso suporte é suporte@empresa.com.'
  },
  {
    patterns: ['quero falar com o suporte', 'preciso do suporte', 'acesso ao suporte', 'suporte'],
    response: 'Claro! Um momento enquanto conecto você com o suporte.'
  },
  {
    patterns: ['quero ajuda', 'preciso de ajuda', 'me ajuda', 'ajuda'],
    response: 'Claro! Em que posso te ajudar?'
  },
  {
    patterns: ['vocês atendem feriados', 'atendimento em feriados', 'feriado vocês funcionam'],
    response: 'Não, não atendemos em feriados.'
  },
  {
    patterns: ['qual o horário da loja', 'horário loja', 'loja abre que horas'],
    response: 'A loja funciona das 9h às 17h, de segunda a sábado.'
  },
  {
    patterns: ['tem suporte técnico', 'suporte técnico disponível', 'ajuda técnica'],
    response: 'Sim, temos uma equipe técnica pronta para ajudar!'
  },
  {
    patterns: ['como abrir um chamado', 'abrir chamado suporte', 'quero registrar chamado'],
    response: 'Você pode abrir um chamado pelo nosso site, na aba Suporte.'
  },
  {
    patterns: ['posso falar com alguém', 'tem alguém aí', 'falar com pessoa'],
    response: 'Claro! Um atendente estará disponível em instantes.'
  },
  {
    patterns: ['tem atendimento online', 'atendimento via chat', 'suporte online'],
    response: 'Sim, este é nosso atendimento online! Pode perguntar.'
  },
  {
    patterns: ['vocês respondem por e-mail', 'tempo de resposta e-mail', 'quanto tempo para responderem'],
    response: 'Sim, respondemos em até 24h úteis após o envio.'
  },
  {
    patterns: ['o suporte funciona agora', 'nosso suporte funciona das 8h às 18h', 'suporte funciona que horas'],
    response: 'Nosso suporte funciona das 8h às 18h. Está dentro do horário agora?'
  },
  {
    patterns: ['posso ligar para suporte', 'telefone do suporte', 'ligação para suporte'],
    response: 'Sim! Ligue para (11) 3333-3333.'
  },
  {
    patterns: ['tem atendimento por chat', 'chat de suporte', 'posso falar no chat'],
    response: 'Sim, este é nosso chat de atendimento. Como posso ajudar?'
  },
  {
    patterns: ['preciso do suporte', 'quero acessar o suporte', 'acesso ao suporte'],
    response: 'Claro! Nosso time de suporte está aqui para ajudar.'
  },
  {
    patterns: ['como funciona o atendimento', 'forma de atendimento', 'atendimento funciona como'],
    response: 'Nosso atendimento funciona via chat, telefone e e-mail.'
  },
  {
    patterns: ['qual o horário do suporte', 'suporte funciona que horas', 'que horas abre o suporte'],
    response: 'O suporte funciona das 8h às 18h em dias úteis.'
  },
  {
    patterns: ['como falar com alguém', 'tem alguém aí', 'falar com pessoa', 'humano'],
    response: 'Sim! Um atendente humano estará com você em breve.'
  },
  {
    patterns: ['como pedir ajuda', 'preciso de ajuda agora', 'me ajuda por favor'],
    response: 'Estou aqui para ajudar! Me diga o que precisa.'
  },
  {
    patterns: ['como fazer uma reclamação', 'quero reclamar', 'reclamação sobre atendimento', 'reclamação'],
    response: 'Você pode registrar sua reclamação no e-mail ou via formulário em nosso site.'
  },
  {
    patterns: ['vocês têm ouvidoria', 'como falar com a ouvidoria', 'tem canal de ouvidoria'],
    response: 'Sim, temos ouvidoria. Você pode acessá-la através do site na aba "Contato".'
  },
  {
    patterns: ['demora no atendimento', 'está demorando ser atendido', 'tempo de espera'],
    response: 'Pedimos desculpas! Em breve alguém estará com você.'
  },
  {
    patterns: ['meu atendimento caiu', 'a conversa foi encerrada', 'perdi o atendimento'],
    response: 'Sinto muito! Você pode começar novamente por aqui.'
  },
  {
    patterns: ['pode me ligar', 'me liguem', 'chamada telefônica'],
    response: 'Claro! Envie seu número e entraremos em contato.'
  },
  {
    patterns: ['preciso de atendimento urgente', 'urgente por favor', 'preciso de ajuda urgente'],
    response: 'Entendi! Um atendente será direcionado com prioridade.'
  },
  {
    patterns: ['pode mandar e-mail', 'me mandem por e-mail', 'responde por e-mail'],
    response: 'Claro! Nossos atendentes enviarão uma resposta por e-mail em até 24h úteis.'
  },
  {
    patterns: ['quero cancelar atendimento', 'encerrar conversa', 'não preciso mais de ajuda'],
    response: 'Tudo bem. Estarei por aqui caso precise de algo mais!'
  },
  {
    patterns: ['tem fila de espera', 'estou em fila', 'tempo de espera grande'],
    response: 'Pode haver fila dependendo da demanda, mas você será atendido em breve.'
  },
  {
    patterns: ['preciso do protocolo', 'qual o número do protocolo', 'protocolo do atendimento'],
    response: 'Você receberá seu número de protocolo assim que a conversa for encerrada.'
  },
  {
    patterns: ['como saber se fui atendido', 'já fui atendido', 'estou em atendimento'],
    response: 'Se você recebeu resposta de um atendente, está sendo atendido :)'
  },
  {
    patterns: ['quero agendar atendimento', 'como agendar atendimento', 'agendar suporte'],
    response: 'Você pode agendar um horário através do nosso site na aba "Atendimento".'
  },
  {
    patterns: ['tem suporte em outro idioma', 'falam inglês', 'atendimento multilíngue'],
    response: 'Atualmente atendemos apenas em português, mas estamos trabalhando nisso.'
  },
  {
    patterns: ['posso falar com gerente', 'falar com responsável', 'quero falar com superior'],
    response: 'Claro, vamos escalar sua solicitação para um responsável.'
  },
  {
    patterns: ['demora na resposta', 'ninguém respondeu ainda', 'está demorando muito'],
    response: 'Pedimos desculpas! Vamos agilizar seu atendimento.'
  },
  {
    patterns: ['pode repetir a informação', 'não entendi a resposta', 'repete por favor'],
    response: 'Claro! Pode me dizer o que você gostaria que eu repetisse?'
  },
  {
    patterns: ['qual o canal de atendimento', 'formas de contato', 'como posso falar com vocês'],
    response: 'Você pode falar conosco por e-mail, telefone, WhatsApp ou aqui mesmo no chat.'
  },
  {
    patterns: ['vocês respondem rápido', 'tempo médio de resposta', 'quanto tempo para responderem'],
    response: 'Nosso tempo médio de resposta é de até 2 minutos no chat e 24h por e-mail.'
  },
  {
    patterns: ['tem atendimento para empresas', 'suporte empresarial', 'empresa pode falar com vocês'],
    response: 'Sim, temos um canal exclusivo para empresas. Entre em contato pelo comercial@empresa.com.'
  },
  {
    patterns: ['o atendimento é gratuito', 'preciso pagar para atendimento', 'tem custo para suporte'],
    response: 'Nosso atendimento ao cliente é totalmente gratuito.'
  },
  {
    patterns: ['meu atendimento foi cortado', 'perdi a conversa', 'desconectei do chat'],
    response: 'Sinto muito por isso. Pode iniciar novamente por aqui mesmo.'
  },
  {
    patterns: ['tem atendimento presencial', 'posso ir até vocês', 'local de atendimento físico'],
    response: 'Atualmente, nosso atendimento é 100% online.'
  },
  {
    patterns: ['qual o endereço de vocês', 'endereço da empresa', 'onde fica a empresa'],
    response: 'Estamos localizados em São Paulo, mas o atendimento é totalmente remoto.'
  },
  {
    patterns: ['o suporte é humano', 'fala com pessoa real', 'tem alguém de verdade aí'],
    response: 'Sim! Nossos atendentes humanos estão prontos para te atender se necessário.'
  },
  {
    patterns: ['esse atendimento é seguro', 'os dados são protegidos', 'informações estão seguras'],
    response: 'Sim, seguimos todas as normas da LGPD para garantir sua segurança.'
  },
  {
    patterns: ['como acompanho meu atendimento', 'ver status do atendimento', 'já fui respondido'],
    response: 'Você pode acompanhar sua solicitação via e-mail ou pelo nosso portal de atendimento.'
  },
  {
    patterns: ['como finalizo o atendimento', 'encerrar atendimento', 'sair da conversa'],
    response: 'Você pode simplesmente fechar a janela ou digitar "encerrar".'
  },
  {
    patterns: ['vocês têm suporte técnico', 'problemas técnicos', 'ajuda com tecnologia'],
    response: 'Temos uma equipe técnica à disposição para te ajudar!'
  },
  {
    patterns: ['o suporte é 24 horas', 'posso falar a qualquer hora', 'tem plantão de atendimento'],
    response: 'Nosso suporte não é 24h, mas atendemos das 8h às 18h, de segunda a sexta.'
  },
  {
    patterns: ['tem fila de atendimento', 'estou esperando há muito tempo', 'ninguém me respondeu ainda'],
    response: 'Desculpe pela demora! Já estamos verificando sua solicitação.'
  },
  {
    patterns: ['como atualizo meu cadastro', 'atualizar dados', 'mudar minhas informações'],
    response: 'Você pode atualizar seus dados pelo nosso painel do cliente, no site.'
  },
  {
    patterns: ['me dá o protocolo', 'protocolo da conversa', 'número do atendimento'],
    response: 'Você receberá o número de protocolo ao final da conversa.'
  },
  {
    patterns: ['como faço uma sugestão', 'sugestão de melhoria', 'quero dar uma sugestão'],
    response: 'Ficamos felizes com sugestões! Pode enviar pelo formulário de feedback no site.'
  },
  {
    patterns: ['onde vejo meu histórico', 'histórico de atendimentos', 'minhas conversas anteriores'],
    response: 'Seu histórico pode ser acessado pelo portal do cliente após login.'
  },
  {
    patterns: ['como altero meu e-mail', 'trocar e-mail cadastrado', 'meu e-mail está errado'],
    response: 'Você pode alterar seu e-mail acessando o painel de configurações no site.'
  },
  {
    patterns: ['posso reabrir atendimento', 'atendimento encerrado posso voltar', 'abrir de novo atendimento'],
    response: 'Sim! Você pode reabrir o atendimento aqui mesmo pelo chat.'
  },
  {
    patterns: ['como reclamo do atendimento', 'reclamar de atendente', 'quero registrar reclamação'],
    response: 'Você pode registrar sua reclamação pelo nosso canal de ouvidoria.'
  },
  {
    patterns: ['meu problema não foi resolvido', 'continua com erro', 'não resolveram meu caso'],
    response: 'Sentimos muito! Vamos redirecionar sua solicitação para análise imediata.'
  },
  {
    patterns: ['vocês têm atendimento preferencial', 'atendem idosos', 'prioridade no atendimento'],
    response: 'Sim, seguimos normas de atendimento prioritário para quem tem direito.'
  },
  {
    patterns: ['como alterar meu telefone', 'trocar número de celular', 'atualizar telefone'],
    response: 'Você pode atualizar seu número acessando sua conta no nosso site.'
  },
  {
    patterns: ['me dá o número do chamado', 'qual o número da solicitação', 'número do ticket'],
    response: 'Você receberá um número de chamado ao finalizar a conversa.'
  },
  {
    patterns: ['esse chat é oficial', 'esse canal é verdadeiro', 'estou falando com a empresa mesmo'],
    response: 'Sim! Este é o canal oficial de atendimento da nossa empresa.'
  },
  {
    patterns: ['tem outro canal de suporte', 'outros contatos', 'formas alternativas de atendimento'],
    response: 'Você também pode nos contatar por telefone, e-mail ou WhatsApp.'
  },
  {
    patterns: ['como falo com o financeiro', 'setor financeiro', 'contato com financeiro'],
    response: 'Encaminharemos você ao setor financeiro. Um momento!'
  },
  {
    patterns: ['me chamem depois', 'quero ser atendido mais tarde', 'agendar atendimento'],
    response: 'Sem problemas! Podemos agendar um horário mais conveniente pra você.'
  },
  {
    patterns: ['o atendimento é personalizado', 'é atendimento automático', 'quem está falando comigo'],
    response: 'Você está falando com um assistente virtual, mas posso te redirecionar para um humano.'
  },
  {
    patterns: ['como faço elogio', 'quero elogiar atendimento', 'parabenizar o atendente'],
    response: 'Agradecemos pelo carinho! Você pode deixar seu elogio no formulário do site.'
  },
  {
    patterns: ['quero encerrar conta', 'cancelar conta', 'apagar meus dados'],
    response: 'Para questões sobre exclusão de dados, envie um e-mail para privacidade@empresa.com.'
  },
  {
    patterns: ['vocês seguem a lgpd', 'meus dados são seguros', 'privacidade dos dados'],
    response: 'Sim, estamos em conformidade com a LGPD e protegemos seus dados com seriedade.'
  },
  {
    patterns: ['quanto tempo demora atendimento', 'espera média', 'tempo de resposta'],
    response: 'O tempo médio de espera é de até 2 minutos no chat.'
  },
  {
    patterns: ['como altero minha senha', 'trocar senha', 'esqueci minha senha'],
    response: 'Você pode alterar sua senha na área do cliente em nosso site.'
  },
  {
    patterns: ['como falo com outro setor', 'quero falar com outro departamento', 'redirecionar para outro setor'],
    response: 'Claro! Qual setor deseja falar? Posso transferir agora.'
  },
  {
    patterns: ['atendimento por videochamada', 'tem suporte por vídeo', 'vocês fazem videochamada'],
    response: 'No momento, não oferecemos suporte via videochamada.'
  },
  {
    patterns: ['tem atendimento em libras', 'vocês atendem em libras', 'suporte para surdos'],
    response: 'Sim, temos atendimento acessível com intérpretes de Libras sob agendamento.'
  },
  {
    patterns: ['tem suporte fora do brasil', 'estou fora do país', 'posso ser atendido do exterior'],
    response: 'Sim, oferecemos atendimento online para clientes fora do Brasil também.'
  },
  {
    patterns: ['o chat está funcionando', 'chat fora do ar', 'o chat está online'],
    response: 'Sim, o chat está funcionando normalmente. Pode mandar sua dúvida!'
  },
  {
    patterns: ['vocês salvam a conversa', 'histórico de mensagens', 'as conversas ficam salvas'],
    response: 'Sim, armazenamos as conversas para fins de atendimento e segurança.'
  },
  {
    patterns: ['como consulto chamados antigos', 'ver chamados anteriores', 'meus atendimentos passados'],
    response: 'Você pode consultar o histórico de chamados acessando sua conta no nosso portal.'
  },
  {
    patterns: ['esse atendimento é cobrado', 'tem algum custo', 'vou pagar pelo atendimento'],
    response: 'Nosso atendimento é gratuito para todos os clientes.'
  },
  {
    patterns: ['como falo com suporte técnico', 'quero suporte técnico', 'ajuda com problemas técnicos'],
    response: 'Claro! Você está sendo redirecionado para o suporte técnico.'
  },
  {
    patterns: ['tenho problema com boleto', 'erro no pagamento', 'ajuda com cobrança'],
    response: 'Nosso setor financeiro pode te ajudar com isso. Já estou te redirecionando!'
  },
  {
    patterns: ['quero mudar de plano', 'alterar plano', 'trocar tipo de serviço'],
    response: 'Você pode solicitar a mudança de plano pelo painel ou aqui mesmo com o suporte.'
  },
  {
    patterns: ['como falo com comercial', 'quero falar com vendas', 'interesse em contratar'],
    response: 'Vamos te encaminhar para o setor comercial agora mesmo.'
  },
  {
    patterns: ['meu problema é urgente', 'preciso de atenção urgente', 'caso urgente'],
    response: 'Vamos priorizar seu caso. Um atendente será alocado o quanto antes.'
  },
  {
    patterns: ['posso mandar arquivo', 'quero enviar print', 'como envio documento'],
    response: 'Você pode anexar arquivos diretamente aqui no chat.'
  },
  {
    patterns: ['vocês têm app', 'tem aplicativo para celular', 'onde baixo o app'],
    response: 'Sim! Nosso aplicativo está disponível na Play Store e App Store.'
  },
  {
    patterns: ['me dá um retorno depois', 'aguardo retorno por e-mail', 'pode me responder depois'],
    response: 'Combinado! Responderemos em breve por e-mail.'
  },
  {
    patterns: ['não consigo acessar a conta', 'erro no login', 'meu acesso está bloqueado'],
    response: 'Vamos te ajudar a recuperar o acesso. Pode confirmar seu e-mail cadastrado?'
  },
  {
    patterns: ['quero alterar meus dados', 'mudar informações cadastrais', 'dados incorretos no sistema'],
    response: 'Você pode alterar seus dados pelo portal ou com nosso suporte agora.'
  },
  {
    patterns: ['como envio sugestão', 'dar feedback', 'opinião sobre serviço'],
    response: 'Adoramos ouvir você! Mande seu feedback pelo formulário de satisfação.'
  },
  {
    patterns: ['o atendimento é gravado', 'vocês gravam as conversas', 'conversa é registrada'],
    response: 'Sim, para sua segurança, todas as conversas são registradas.'
  },
  {
    patterns: ['como cancelo uma solicitação', 'cancelar chamado', 'não quero mais ajuda'],
    response: 'Sem problemas! O chamado pode ser encerrado a qualquer momento.'
  },
  {
    patterns: ['tem suporte via redes sociais', 'posso falar no instagram', 'atendimento pelo facebook'],
    response: 'Sim, também atendemos pelo Instagram e Facebook. Nos siga por lá!'
  },
  {
    patterns: ['como falo com ouvidoria', 'canal de reclamação oficial', 'contato da ouvidoria'],
    response: 'Você pode acessar a ouvidoria pelo nosso site, na aba "Fale Conosco".'
  },
  {
    patterns: ['esse canal é seguro', 'é seguro passar meus dados aqui', 'posso confiar nesse atendimento'],
    response: 'Sim! Este é um canal oficial com criptografia e proteção de dados garantida.'
  },
  {
    patterns: ['tem suporte para empresas', 'atendimento empresarial', 'empresa pode ser atendida'],
    response: 'Sim! Temos suporte exclusivo para empresas. Entre em contato pelo nosso canal corporativo.'
  },
  {
    patterns: ['posso atualizar meu cadastro', 'alterar informações pessoais', 'como editar meus dados'],
    response: 'Você pode atualizar seus dados acessando sua conta no portal do cliente.'
  },
  {
    patterns: ['como pedir suporte por e-mail', 'enviar e-mail de ajuda', 'contato por e-mail'],
    response: 'Envie um e-mail para suporte@empresa.com com seu nome e a descrição do problema.'
  },
  {
    patterns: ['tenho dúvida sobre plano', 'informações sobre o plano contratado', 'meu plano atual'],
    response: 'Você pode verificar os detalhes do seu plano no painel do cliente ou aqui mesmo com o suporte.'
  },
  {
    patterns: ['como troco a forma de pagamento', 'mudar forma de cobrança', 'alterar pagamento'],
    response: 'Você pode alterar sua forma de pagamento acessando a área financeira no portal.'
  },
  {
    patterns: ['pode me ajudar com problema técnico', 'tô com erro aqui', 'está com defeito'],
    response: 'Claro! Me diga o erro que você está enfrentando para que eu possa te ajudar.'
  },
  {
    patterns: ['o atendimento está demorando muito', 'já faz tempo que tô esperando', 'ninguém respondeu ainda'],
    response: 'Desculpe pela demora! Já estamos tratando seu atendimento com prioridade.'
  },
  {
    patterns: ['tenho sugestão para o serviço', 'sugestão de melhoria', 'ideia nova para vocês'],
    response: 'Adoramos ouvir sugestões! Pode mandar aqui mesmo ou pelo nosso formulário.'
  },
  {
    patterns: ['quero feedback do meu atendimento', 'como foi minha avaliação', 'retorno da minha experiência'],
    response: 'Você pode ver o status da sua avaliação no histórico da sua conta.'
  },
  {
    patterns: ['preciso de nota fiscal', 'como obter nf', 'quero a nota da compra'],
    response: 'Você pode gerar a nota fiscal no painel do cliente, na seção "Financeiro".'
  },
  {
    patterns: ['como atualizo endereço', 'mudar local de entrega', 'atualizar endereço residencial'],
    response: 'Acesse sua conta e vá até "Dados cadastrais" para atualizar seu endereço.'
  },
  {
    patterns: ['minha dúvida não está aqui', 'não respondeu minha pergunta', 'não era isso que eu queria'],
    response: 'Desculpe! Pode reformular a pergunta ou pedir para falar com um atendente.'
  },
  {
    patterns: ['vocês têm número 0800', 'tem número gratuito', 'ligação sem custo'],
    response: 'Sim! Nosso número gratuito é 0800 123 456.'
  },
  {
    patterns: ['como envio comprovante', 'comprovante de pagamento', 'onde mando o comprovante'],
    response: 'Você pode enviar o comprovante diretamente aqui no chat ou por e-mail.'
  },
  {
    patterns: ['tem atendimento fora do horário', 'fora do expediente', 'suporte fora do horário'],
    response: 'Fora do horário, você pode enviar e-mail e responderemos no próximo dia útil.'
  },
  {
    patterns: ['como pausar minha conta', 'suspender temporariamente', 'pausar meus serviços'],
    response: 'Entre em contato com nosso suporte e solicite a suspensão temporária da conta.'
  },
  {
    patterns: ['qual a previsão de retorno', 'quando vão responder', 'tempo de retorno'],
    response: 'Nosso tempo médio de retorno é de até 24 horas úteis, dependendo do canal.'
  },
  {
    patterns: ['vocês atendem domingo', 'tem suporte no domingo', 'abrem aos domingos'],
    response: 'Não temos atendimento aos domingos no momento.'
  },
  {
    patterns: ['onde vejo meus chamados', 'consulta de atendimento', 'minhas solicitações anteriores'],
    response: 'Acesse o painel do cliente e vá até a seção de chamados para acompanhar.'
  },
  {
    patterns: ['quem pode me ajudar com minha conta', 'problema no acesso', 'ajuda com conta'],
    response: 'Nosso suporte técnico pode te ajudar com sua conta. Vamos resolver isso juntos!'
  },
  {
    patterns: ['Olá', 'oi', 'ola'],
    response: 'Olá! Em que posso ajudá-lo?'
  },
    {
    patterns: ['Bom dia', 'bomdia', 'bo mdia'],
    response: 'Bom dia! Em que posso ajudá-lo?'
  },
];
