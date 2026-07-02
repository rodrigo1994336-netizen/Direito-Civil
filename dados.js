const bancoQuestoes = [
  {
    "id": 1,
    "enunciado": "A vacatio legis é um período de suspensão da eficácia da lei, sendo que, em regra, se a lei não trouxer previsão expressa, o prazo de vacância será de 45 dias a partir da sua publicação.",
    "gabarito": "Certo",
    "justificativa": "A assertiva está correta de acordo com a LINDB e a LC 95/98. A eficácia da lei fica suspensa durante a vacatio legis, período destinado à adaptação da sociedade à nova norma[cite: 1]. A regra geral, conforme o art. 1º, caput, da LINDB, estabelece que, salvo disposição em contrário, a lei entra em vigor quarenta e cinco dias após sua publicação oficial[cite: 1]. O prazo de vacatio legis tem seu início contado a partir da data da publicação oficial, e não da promulgação[cite: 1].",
    "lei": "Art. 1º Salvo disposição contrária, a lei começa a vigorar em todo o país quarenta e cinco dias depois de oficialmente publicada.",
    "jurisprudencia": "O STJ consolidou entendimento sobre a contagem de prazos em leis que estabelecem período de vacância. A contagem inclui a data da publicação e o último dia do prazo, entrando a lei em vigor no dia subsequente à sua consumação integral (art. 8º, §1º, LC 95/98)[cite: 1]."
  },
  {
    "id": 2,
    "enunciado": "A pessoa jurídica, embora detentora de personalidade jurídica civil, não possui direitos da personalidade, sendo indevida, portanto, a condenação de pessoa jurídica por danos morais.",
    "gabarito": "Errado",
    "justificativa": "A assertiva está incorreta, pois a pessoa jurídica, apesar de não ser titular de direitos da personalidade inerentes à condição humana, possui atributos que se assemelham a eles, como nome, honra objetiva, imagem e reputação[cite: 2]. O Código Civil, em seu art. 52, estabelece que se aplica às pessoas jurídicas, no que couber, a proteção dos direitos da personalidade[cite: 2]. Portanto, a pessoa jurídica pode sofrer dano moral, conforme entendimento sumulado do STJ[cite: 2].",
    "lei": "Art. 52. Aplica-se às pessoas jurídicas, no que couber, a proteção dos direitos da personalidade.",
    "jurisprudencia": "Súmula 227 do STJ: 'A pessoa jurídica pode sofrer dano moral.' Este entendimento reflete a proteção à honra objetiva da PJ, que pode ser atingida por ofensas injustificadas, permitindo a reparação por danos morais[cite: 2]."
  },
  {
    "id": 3,
    "enunciado": "O nascituro, por ser dotado de personalidade jurídica desde a concepção, possui plena capacidade para exercer atos da vida civil, podendo inclusive ser administrador de bens próprios.",
    "gabarito": "Errado",
    "justificativa": "A assertiva está incorreta sob a ótica da teoria natalista adotada pelo Código Civil brasileiro em relação à personalidade jurídica[cite: 2]. A personalidade civil da pessoa natural começa com o nascimento com vida[cite: 2]. O nascituro possui apenas a proteção de seus direitos da personalidade desde a concepção, mas não possui personalidade jurídica plena, não podendo exercer atos da vida civil de administração[cite: 2]. A lei põe a salvo, desde a concepção, os direitos do nascituro, mas estes ficam condicionados ao nascimento com vida[cite: 2].",
    "lei": "Art. 2º A personalidade civil da pessoa começa do nascimento com vida; mas a lei põe a salvo, desde a concepção, os direitos do nascituro.",
    "jurisprudencia": "A doutrina majoritária e a jurisprudência reconhecem que o nascituro não possui personalidade jurídica antes do nascimento com vida, tratando-se de uma expectativa de direito. Sua proteção é focada nos direitos da personalidade, não se confundindo com capacidade de exercício de atos civis[cite: 2]."
  },
  {
    "id": 4,
    "enunciado": "A emancipação voluntária concedida pelos pais, quando o menor possui dezesseis anos completos, exige homologação judicial para produzir efeitos jurídicos.",
    "gabarito": "Errado",
    "justificativa": "A emancipação voluntária realizada pelos pais é um ato de vontade que não depende de homologação judicial[cite: 2]. Conforme o art. 5º, parágrafo único, inciso I, do Código Civil, a emancipação é realizada mediante instrumento público, sendo suficiente a outorga dos pais, independentemente de autorização do juiz[cite: 2]. O registro em cartório é necessário para conferir publicidade e eficácia ao ato em relação a terceiros[cite: 2].",
    "lei": "Art. 5º, parágrafo único, I - pela concessão dos pais, ou de um deles na falta do outro, mediante instrumento público, independentemente de homologação judicial, ou por sentença do juiz, ouvido o tutor, se o menor tiver dezesseis anos completos;",
    "jurisprudencia": "A emancipação voluntária é irrevogável e não admite condições ou termos. O STJ entende que a emancipação não exonera os pais da responsabilidade civil pelos atos praticados pelo filho menor, visando a proteção da vítima em caso de dano[cite: 2]."
  },
  {
    "id": 5,
    "enunciado": "A morte presumida com declaração de ausência é um procedimento complexo que envolve a nomeação de um curador para os bens, seguida de sucessão provisória e, finalmente, a sucessão definitiva, momento em que o ausente é considerado presumidamente morto.",
    "gabarito": "Certo",
    "justificativa": "O procedimento para a morte presumida com declaração de ausência protege o patrimônio de quem desapareceu de seu domicílio sem deixar representante ou notícias[cite: 2]. O processo segue etapas rigorosas: primeiro a nomeação de um curador para administrar os bens, depois, após um ano, os herdeiros são imitidos na posse (sucessão provisória), e, após dez anos de sucessão provisória, ocorre a sucessão definitiva[cite: 2]. Somente com a sucessão definitiva o ausente é considerado morto para fins legais[cite: 2].",
    "lei": "Art. 6º A existência da pessoa natural termina com a morte; presume-se esta, quanto aos ausentes, nos casos em que a lei autoriza a abertura de sucessão definitiva.",
    "jurisprudencia": "O Código Civil e a jurisprudência estabelecem que a ausência é um instituto protetivo do patrimônio. A sentença de sucessão definitiva é o marco temporal que permite a presunção de morte, encerrando a incerteza jurídica e permitindo a transmissão definitiva da herança[cite: 2]."
  },
  {
    "id": 6,
    "enunciado": "A existência de comoriência ocorre quando dois ou mais indivíduos falecem na mesma ocasião, não sendo possível determinar qual deles faleceu primeiro, hipótese em que se presume a simultaneidade das mortes para efeitos sucessórios.",
    "gabarito": "Certo",
    "justificativa": "A comoriência é tratada pelo art. 8º do Código Civil, estabelecendo uma presunção legal de simultaneidade entre mortes ocorridas no mesmo evento quando não há como precisar a ordem cronológica dos falecimentos[cite: 2]. Essa presunção é fundamental para o direito sucessório, pois, na ausência de prova sobre quem morreu primeiro, os comorientes não herdam uns dos outros[cite: 2]. A determinação de quem sobreviveu a quem é crucial para a transmissão patrimonial, e a falta de prova leva à aplicação dessa regra especial para evitar impasses jurídicos na sucessão[cite: 2]. Portanto, para todos os efeitos legais, considera-se que faleceram ao mesmo tempo, impedindo a cadeia sucessória entre os envolvidos no mesmo fato[cite: 2].",
    "lei": "Art. 8º Se dois ou mais indivíduos falecerem na mesma ocasião, não se podendo averiguar se algum dos comorientes precedeu aos outros, presumir-se-ão simultaneamente mortos.",
    "jurisprudencia": "O entendimento consolidado aponta que a comoriência não exige que o local do falecimento seja o mesmo, mas apenas que o evento causador das mortes seja contemporâneo, impedindo a verificação da precedência temporal. A prova da prioridade do óbito é ônus de quem pretende que um dos comorientes seja considerado herdeiro do outro[cite: 2]."
  },
  {
    "id": 7,
    "enunciado": "A emancipação judicial ocorre quando o menor, com 16 anos completos, comprova possuir economia própria suficiente para o seu sustento, prescindindo de anuência dos pais ou tutores.",
    "gabarito": "Certo",
    "justificativa": "A emancipação judicial, prevista no Código Civil, é uma forma de o menor adquirir capacidade civil plena antes da maioridade legal, sendo concedida pelo juiz em situações específicas[cite: 2]. Quando o menor tem 16 anos completos e demonstra ter economia própria, ele pode buscar a emancipação judicial, mesmo que não haja concordância dos pais ou responsáveis[cite: 2]. O objetivo é reconhecer a maturidade e a independência financeira do jovem, permitindo que ele pratique sozinho todos os atos da vida civil[cite: 2]. Diferente da emancipação voluntária, esta exige a intervenção do Poder Judiciário, que avaliará as condições do menor para garantir que ele possui meios de subsistência independentes[cite: 2]. Esse instituto protege o menor ao garantir que sua autonomia seja acompanhada de responsabilidade civil plena[cite: 2].",
    "lei": "Art. 5º, parágrafo único, V - pelo estabelecimento civil ou comercial, ou pela existência de relação de emprego, desde que, em função deles, o menor com dezesseis anos completos tenha economia própria.",
    "jurisprudencia": "A jurisprudência entende que a economia própria deve ser efetiva e capaz de manter o menor sem auxílio de terceiros. A decisão judicial que concede a emancipação é definitiva, não podendo ser revogada pelos pais após a constituição da capacidade plena pelo menor[cite: 2]."
  },
  {
    "id": 8,
    "enunciado": "A fundação, sendo uma pessoa jurídica de direito privado, pode ser instituída por escritura pública ou testamento, tendo por finalidade um propósito social ou altruísta definido pelo instituidor.",
    "gabarito": "Certo",
    "justificativa": "A fundação é um ente personalizado que se distingue das demais pessoas jurídicas por ter seu patrimônio afetado a um fim específico determinado pelo instituidor[cite: 2]. Para sua criação, o instituidor deve realizar uma dotação de bens livres e especificar a finalidade, que deve ser obrigatoriamente de cunho social, religioso, cultural ou assistencial[cite: 2]. O instrumento constitutivo deve ser, necessariamente, por escritura pública ou testamento, garantindo a formalidade exigida pelo ordenamento jurídico[cite: 2]. Uma vez instituída, a fundação passa a ter personalidade jurídica própria, sendo fiscalizada pelo Ministério Público para assegurar o cumprimento das finalidades para as quais foi criada[cite: 2]. Esse controle é essencial para evitar o desvio de finalidade e garantir a proteção do patrimônio destinado aos beneficiários[cite: 2].",
    "lei": "Art. 62. Para criar uma fundação, o instituidor fará, por escritura pública ou testamento, dotação especial de bens livres, especificando o fim a que se destina, e declarando, se quiser, a maneira de administrá-la.",
    "jurisprudencia": "O Superior Tribunal de Justiça reforça que a fiscalização do Ministério Público sobre as fundações é indeclinável, visando a preservação do interesse público. Qualquer alteração no estatuto ou na finalidade da fundação deve seguir rigorosamente o rito legal para não descaracterizar sua natureza altruísta[cite: 2]."
  },
  {
    "id": 9,
    "enunciado": "A desconsideração da personalidade jurídica é medida de exceção, sendo permitida apenas em casos de abuso, desvio de finalidade ou confusão patrimonial, conforme a Teoria Maior adotada pelo Código Civil.",
    "gabarito": "Certo",
    "justificativa": "O Código Civil brasileiro adotou a Teoria Maior para a aplicação da desconsideração da personalidade jurídica, exigindo a comprovação de requisitos específicos para que o patrimônio dos sócios seja alcançado[cite: 2]. Esses requisitos são o desvio de finalidade ou a confusão patrimonial, configurando o abuso da autonomia da pessoa jurídica[cite: 2]. A desconsideração é uma medida excepcional porque visa proteger a autonomia patrimonial da empresa, garantindo que apenas em casos de fraude ou má gestão os sócios respondam pessoalmente[cite: 2]. Diferente da Teoria Menor, que basta a insolvência da pessoa jurídica, a Teoria Maior exige um comportamento ilícito ou fraudulento por parte dos sócios[cite: 2]. A decisão judicial de desconsideração tem eficácia limitada ao caso concreto, não extinguindo a pessoa jurídica, mas apenas tornando ineficaz a proteção patrimonial apenas para aquela obrigação específica[cite: 2].",
    "lei": "Art. 50. Em caso de abuso da personalidade jurídica, caracterizado pelo desvio de finalidade, ou pela confusão patrimonial, pode o juiz, a requerimento da parte, ou do Ministério Público quando lhe couber intervir no processo, desconsiderá-la para que os efeitos de certas e determinadas relações de obrigações sejam estendidos aos bens particulares de administradores ou de sócios da pessoa jurídica.",
    "jurisprudencia": "A jurisprudência é pacífica quanto ao caráter excepcional da medida. O STJ exige prova robusta da confusão patrimonial (como pagamentos de dívidas pessoais com o caixa da empresa ou inversão constante de valores) para autorizar a aplicação do art. 50, sendo vedada a extensão de responsabilidade sem os requisitos legais[cite: 2]."
  },
  {
    "id": 10,
    "enunciado": "O domicílio da pessoa natural é, necessariamente, o lugar onde ela estabelece sua residência com ânimo definitivo, não sendo possível a existência de múltiplos domicílios para a mesma pessoa.",
    "gabarito": "Errado",
    "justificativa": "A afirmação está incorreta, pois o Direito Civil admite a pluralidade de domicílios para a pessoa natural[cite: 2]. O Código Civil estabelece que, se a pessoa natural tiver diversas residências onde alternadamente viva, considerar-se-á domicílio seu qualquer delas[cite: 2]. O domicílio é o centro das relações jurídicas e não se confunde necessariamente com a residência, embora a residência com ânimo definitivo seja o elemento principal para a caracterização[cite: 2]. Além disso, a lei também prevê o domicílio profissional, que é o local onde a pessoa exerce suas atividades, podendo este ser diferente do domicílio de residência[cite: 2]. Portanto, a ideia de domicílio único é uma visão simplista que não contempla a complexidade das relações sociais e profissionais modernas previstas na legislação brasileira[cite: 2].",
    "lei": "Art. 71. Se, porém, a pessoa natural tiver diversas residências, onde, alternadamente, viva, considerar-se-á domicílio seu qualquer delas.",
    "jurisprudencia": "Os tribunais reconhecem que o domicílio não é apenas um fato geográfico, mas um conceito jurídico. A jurisprudência admite que a pessoa escolha um domicílio contratual (elege seu foro), diferenciado de seu domicílio real, sendo perfeitamente válida a pluralidade de domicílios quando as circunstâncias da vida da pessoa assim exigirem[cite: 2]."
  },
  {
    "id": 11,
    "enunciado": "A capacidade de direito é inerente a todo ser humano e é adquirida com o nascimento com vida, enquanto a capacidade de fato é a aptidão para exercer pessoalmente os atos da vida civil, podendo ser plena ou limitada.",
    "gabarito": "Certo",
    "justificativa": "Todo ser humano é dotado de capacidade de direito ou de gozo, que consiste na titularidade de direitos e deveres na ordem civil[cite: 2]. A capacidade de fato, por sua vez, é a aptidão para agir pessoalmente, sem necessidade de representação ou assistência, sendo graduada pela lei de acordo com o discernimento[cite: 2]. A capacidade civil plena resulta da junção da capacidade de direito com a de fato, atingida, em regra, pela maioridade ou emancipação[cite: 2]. A lei estabelece as hipóteses de incapacidade absoluta e relativa justamente para proteger aqueles que não possuem o discernimento necessário para realizar atos jurídicos por si sós[cite: 2]. Portanto, a distinção é fundamental para o entendimento do sistema de proteção do sujeito de direito no ordenamento pátrio[cite: 2].",
    "lei": "Art. 1º Toda pessoa é capaz de direitos e deveres na ordem civil.",
    "jurisprudencia": "O STJ entende que a incapacidade civil deve ser interpretada restritivamente, sendo a capacidade a regra geral. A proteção dada aos incapazes visa garantir sua dignidade e integridade patrimonial, não podendo ser usada para gerar prejuízo a terceiros de boa-fé em negócios jurídicos válidos[cite: 2]."
  },
  {
    "id": 12,
    "enunciado": "A revogação de uma lei por outra lei posterior pode ser expressa, tácita ou global, ocorrendo a revogação tácita quando a nova lei regula inteiramente a matéria da lei anterior.",
    "gabarito": "Certo",
    "justificativa": "A LINDB estabelece as formas de cessação da vigência da lei no tempo[cite: 1]. A revogação expressa ocorre quando a lei nova declara claramente quais dispositivos ou leis anteriores estão sendo eliminados[cite: 1]. A revogação tácita, ou derrogação/ab-rogação, ocorre quando há incompatibilidade entre a lei nova e a anterior, ou quando a nova norma regula completamente a matéria, tornando a anterior obsoleta ou desnecessária[cite: 1]. A repristinação, que é o retorno de uma lei revogada ao mundo jurídico, não é automática, sendo necessária previsão expressa na nova lei[cite: 1]. Este mecanismo assegura a segurança jurídica ao definir com clareza qual norma deve ser aplicada em determinado momento histórico[cite: 1].",
    "lei": "Art. 2º, § 1º A lei posterior revoga a anterior quando expressamente o declare, quando seja com ela incompatível ou quando regule inteiramente a matéria de que tratava a lei anterior.",
    "jurisprudencia": "A jurisprudência reforça que a revogação tácita exige a análise detida sobre a incompatibilidade real entre as normas. Não se admite a presunção de revogação caso as leis possam coexistir de forma harmônica no ordenamento jurídico[cite: 1]."
  },
  {
    "id": 13,
    "enunciado": "Os atos de mera permissão ou tolerância induzem posse, sendo possível, portanto, a aquisição da propriedade por meio de usucapião sobre bens utilizados com a autorização do proprietário.",
    "gabarito": "Errado",
    "justificativa": "A legislação brasileira é clara ao estipular que os atos de mera permissão ou tolerância não induzem posse, tratando-se apenas de detenção[cite: 2]. A posse exige a intenção de agir como dono, e não o simples uso autorizado ou consentido pelo real proprietário[cite: 2]. Como a usucapião é um modo de aquisição da propriedade baseado na posse qualificada (mansa, pacífica e com ânimo de dono), a falta desse elemento possessório impede o preenchimento dos requisitos legais[cite: 2]. Assim, por mais tempo que uma pessoa utilize um bem com permissão do dono, ela nunca será possuidora, mas mera detentora, o que obsta a pretensão aquisitiva da propriedade pelo transcurso do tempo[cite: 2].",
    "lei": "Art. 1.208. Não induzem posse os atos de mera permissão ou tolerância assim como não autorizam a sua aquisição os atos violentos, ou clandestinos, senão depois de cessar a violência ou a clandestinidade.",
    "jurisprudencia": "O entendimento consolidado nos tribunais é de que, para a usucapião, é indispensável a prova da posse ad usucapionem. A ocupação decorrente de contrato de comodato ou mera autorização verbal não transforma o ocupante em possuidor, sendo mera precariedade[cite: 2]."
  },
  {
    "id": 14,
    "enunciado": "A pessoa jurídica de direito privado começa sua existência legal com a criação do ato constitutivo, sendo o registro no órgão competente apenas uma medida de natureza administrativa sem efeitos constitutivos.",
    "gabarito": "Errado",
    "justificativa": "A existência legal da pessoa jurídica de direito privado não decorre apenas da elaboração do estatuto ou contrato social, mas exige o registro dos atos constitutivos no órgão competente (como a Junta Comercial ou Cartório de Registro de Pessoas Jurídicas)[cite: 2]. O registro possui natureza constitutiva, ou seja, é o que confere personalidade jurídica à entidade[cite: 2]. Antes do registro, os sócios podem responder pessoalmente pelas obrigações contraídas em nome da futura sociedade[cite: 2]. Portanto, o registro não é um mero formalismo administrativo, mas a condição sine qua non para que a pessoa jurídica passe a ser um sujeito de direito distinto de seus membros, com patrimônio próprio e autonomia processual[cite: 2].",
    "lei": "Art. 45. Começa a existência legal das pessoas jurídicas de direito privado com a inscrição do ato constitutivo no respectivo registro, precedida, quando necessário, de autorização ou aprovação do Poder Executivo.",
    "jurisprudencia": "A jurisprudência destaca a importância do registro para a limitação da responsabilidade dos sócios. Sem a inscrição no órgão competente, não se pode falar em separação patrimonial entre a pessoa jurídica e os indivíduos que a compõem[cite: 2]."
  },
  {
    "id": 15,
    "enunciado": "Em caso de omissão da lei, o juiz decidirá o caso de acordo com a analogia, os costumes e os princípios gerais de direito, observando a integração normativa para evitar o 'non liquet'.",
    "gabarito": "Certo",
    "justificativa": "O ordenamento jurídico brasileiro veda ao magistrado se escusar de decidir sob alegação de lacuna na lei[cite: 1]. Para integrar essas lacunas, a LINDB estabelece uma ordem de métodos de integração: a analogia, que aplica a uma situação não prevista um dispositivo legal de situação similar; os costumes, que são práticas sociais reiteradas com convicção de obrigatoriedade; e os princípios gerais de direito, que são vetores axiológicos do sistema jurídico[cite: 1]. Esse procedimento garante a aplicação da lei em toda sua extensão e resolve conflitos mesmo onde a letra fria da norma é insuficiente, preservando a paz social e a segurança jurídica[cite: 1].",
    "lei": "Art. 4º Quando a lei for omissa, o juiz decidirá o caso de acordo com a analogia, os costumes e os princípios gerais de direito.",
    "jurisprudencia": "O STJ orienta que a integração deve ser feita com cautela, respeitando a hierarquia das fontes. O uso dos princípios gerais de direito deve estar alinhado aos valores constitucionais, garantindo que a solução encontrada seja justa e adequada às finalidades sociais do Direito[cite: 1]."
  },
  {
    "id": 16,
    "enunciado": "A pessoa jurídica pode ser objeto de transformação, incorporação, fusão ou cisão, sendo que, em todos esses casos, a nova sociedade sucede a anterior em todos os direitos e obrigações, salvo disposição em contrário.",
    "gabarito": "Certo",
    "justificativa": "A reorganização societária é permitida pelo Direito Civil e Comercial como forma de otimizar a estrutura empresarial[cite: 2]. A sucessão universal é a regra, o que significa que a nova sociedade assume integralmente a posição jurídica da sucedida (ativo e passivo), mantendo a continuidade das relações contratuais e deveres perante terceiros[cite: 2]. Essas operações não extinguem os direitos dos credores, que permanecem protegidos pela responsabilidade patrimonial da entidade resultante[cite: 2]. A cisão, especificamente, permite a divisão do patrimônio em parcelas que são transferidas a uma ou mais sociedades, também operando a sucessão na forma da lei, garantindo que não haja prejuízo à solvabilidade das obrigações pré-existentes[cite: 2].",
    "lei": "Art. 1.116. Na cisão, a sociedade transfere parcelas do seu patrimônio para uma ou mais sociedades, constituídas para esse fim ou já existentes, extinguindo-se a sociedade cindida, se a cisão for total, ou dividindo-se o seu capital, se a cisão for parcial.",
    "jurisprudencia": "A jurisprudência entende que, na sucessão societária, a responsabilidade das sociedades decorrentes de fusão ou incorporação é solidária quanto às obrigações anteriores ao ato. Isso assegura maior garantia aos credores, impedindo que a reorganização seja utilizada como manobra fraudulenta para fugir de dívidas[cite: 2]."
  },
  {
    "id": 17,
    "enunciado": "A prova da lei estrangeira é dispensável em juízo, pois o juiz deve conhecer de ofício o direito de qualquer país, independentemente de sua origem.",
    "gabarito": "Errado",
    "justificativa": "Diferente do que ocorre com o direito nacional, a LINDB estabelece que o juiz tem a faculdade de exigir que a parte que alega direito estrangeiro comprove o texto e a vigência da norma estrangeira aplicada ao caso[cite: 1]. Não há presunção de conhecimento do direito de outras nações pelo magistrado brasileiro[cite: 1]. A comprovação deve demonstrar não apenas a existência da lei, mas também sua correta interpretação e vigência no ordenamento de origem[cite: 1]. Caso a parte não prove o conteúdo da norma estrangeira, o juiz poderá decidir o caso com base no direito brasileiro ou em princípios gerais de direito internacional, para evitar a paralisação do processo[cite: 1].",
    "lei": "Art. 14. Não sendo conhecido o direito estrangeiro, poderá o juiz exigir de quem o alega prova do texto e da vigência da lei.",
    "jurisprudencia": "Os tribunais têm reiterado que a prova do direito estrangeiro é um ônus probatório atribuído a quem o invoca como causa de pedir ou defesa. A ausência dessa prova inviabiliza a aplicação da norma estrangeira, levando o magistrado a aplicar a lei nacional por analogia ou preceitos do Direito Internacional Privado[cite: 1]."
  },
  {
    "id": 18,
    "enunciado": "As associações, como pessoas jurídicas de direito privado, não possuem fins econômicos, sendo proibida a distribuição de lucros entre seus associados, instituidores ou administradores.",
    "gabarito": "Certo",
    "justificativa": "As associações são constituídas pela união de pessoas que se organizam para fins não econômicos, como causas culturais, esportivas, religiosas ou assistenciais[cite: 2]. A ausência de finalidade lucrativa é o traço distintivo que as separa das sociedades empresárias[cite: 2]. Embora uma associação possa desenvolver atividades para gerar receita, essa verba deve ser integralmente revertida para a manutenção e o desenvolvimento dos objetivos sociais da entidade, sendo vedada a repartição de dividendos ou lucros entre seus membros[cite: 2]. Essa proibição visa garantir que o patrimônio da associação seja sempre destinado ao interesse comum e social para o qual ela foi criada, impedindo o desvirtuamento do seu propósito estatutário[cite: 2].",
    "lei": "Art. 53. Constituem-se as associações pela união de pessoas que se organizem para fins não econômicos.",
    "jurisprudencia": "A jurisprudência é rígida na proteção da natureza não lucrativa das associações. Caso seja detectada a distribuição disfarçada de rendas ou lucros, os tribunais podem declarar a nulidade de atos administrativos e inclusive determinar a dissolução da entidade por desvio de finalidade[cite: 2]."
  },
  {
    "id": 19,
    "enunciado": "A validade do negócio jurídico requer agente capaz, objeto lícito, possível, determinado ou determinável, e forma prescrita ou não defesa em lei.",
    "gabarito": "Certo",
    "justificativa": "O Código Civil estabelece os requisitos essenciais para a existência e validade dos negócios jurídicos[cite: 2]. O agente deve possuir a capacidade necessária para manifestar sua vontade; o objeto deve ser legal, factível e suficientemente definido; e a forma deve observar as exigências legais, salvo quando a lei permitir a liberdade de forma[cite: 2]. A ausência de qualquer desses elementos gera a invalidade do negócio (nulidade ou anulabilidade), conforme a gravidade do vício[cite: 2]. Esses pilares conferem estabilidade às relações privadas, garantindo que o Estado apenas confira eficácia aos atos que respeitem os parâmetros de segurança jurídica e ordem pública definidos no ordenamento[cite: 2].",
    "lei": "Art. 104. A validade do negócio jurídico requer: I - agente capaz; II - objeto lícito, possível, determinado ou determinável; III - forma prescrita ou não defesa em lei.",
    "jurisprudencia": "A jurisprudência do STJ destaca que a inobservância da forma legal, quando esta é essencial para a validade do ato, torna o negócio nulo. Contudo, em respeito ao princípio da boa-fé e da conservação do negócio, os tribunais muitas vezes buscam interpretar a manifestação de vontade de maneira a preservar o que for possível, desde que não viole normas cogentes[cite: 2]."
  },
  {
    "id": 20,
    "enunciado": "Ocorre a perda da personalidade jurídica da pessoa natural exclusivamente pela morte real, sendo inadmissível o reconhecimento da morte presumida sem a declaração judicial de ausência.",
    "gabarito": "Errado",
    "justificativa": "Além da morte real, o ordenamento jurídico prevê a morte presumida, que pode ocorrer independentemente da declaração de ausência em casos específicos[cite: 2]. O Código Civil admite a morte presumida sem a necessidade de prévio procedimento de ausência quando for extremamente provável a morte de quem estava em perigo de vida ou quando alguém, desaparecido em campanha ou feito prisioneiro, não for encontrado até dois anos após o término da guerra[cite: 2]. Nesses casos, a sentença judicial reconhece a morte e autoriza a abertura da sucessão, sendo essa uma forma de encerrar a incerteza jurídica para os herdeiros e credores de forma mais célere do que o rito da ausência[cite: 2].",
    "lei": "Art. 7º Pode ser declarada a morte presumida, sem decretação de ausência: I - se for extremamente provável a morte de quem estava em perigo de vida; II - se alguém, desaparecido em campanha ou feito prisioneiro, não for encontrado até dois anos após o término da guerra.",
    "jurisprudencia": "Os tribunais reconhecem a natureza declaratória da sentença de morte presumida. O marco temporal para a presunção de morte é fixado pelo juiz com base nas provas das circunstâncias do desaparecimento, sendo fundamental para o direito das sucessões e a extinção de obrigações personalíssimas[cite: 2]."
  },
  {
    "id": 21,
    "enunciado": "A contagem de prazos em direito civil, caso não haja disposição especial em sentido contrário, exclui o dia do começo e inclui o dia do vencimento, prorrogando-se o prazo até o próximo dia útil se o vencimento cair em feriado.",
    "gabarito": "Certo",
    "justificativa": "A regra de contagem de prazos no Código Civil é estabelecida para garantir segurança e clareza nas relações jurídicas. Ao excluir o dia inicial e incluir o final, o sistema evita contagens imprecisas, padronizando a expiração dos prazos. A prorrogação automática para o primeiro dia útil subsequente, caso o vencimento ocorra em dia não útil, é uma medida que preserva o direito das partes, impedindo que o exercício de um direito ou cumprimento de uma obrigação seja inviabilizado pela ausência de expediente. Essa regra aplica-se aos prazos fixados em lei, atos processuais ou negócios jurídicos, salvo norma especial em contrário.",
    "lei": "Art. 132. Salvo disposição legal ou convencional em contrário, computam-se os prazos, excluído o dia do começo, e incluído o do vencimento. § 1º Se o dia do vencimento cair em feriado, considerar-se-á prorrogado o prazo até o seguinte dia útil."
  },
  {
    "id": 22,
    "enunciado": "A lesão, defeito do negócio jurídico, ocorre quando uma pessoa, sob premente necessidade ou por inexperiência, se obriga a prestação manifestamente desproporcional à contraprestação.",
    "gabarito": "Certo",
    "justificativa": "A lesão é um defeito do negócio jurídico que visa proteger a equidade contratual, impedindo que uma das partes se aproveite da vulnerabilidade da outra para obter vantagem excessiva[cite: 2]. O instituto exige dois elementos: um objetivo, que é a desproporção manifesta das prestações, e um subjetivo, que é a premente necessidade ou inexperiência do lesionado[cite: 2]. Diferente do estado de perigo, na lesão não há o risco de dano grave à vida ou à integridade física, mas sim uma desvantagem patrimonial acentuada que contraria a boa-fé objetiva[cite: 2]. O negócio lesivo é passível de anulação, embora o Código Civil permita a conservação do negócio se houver um suplemento suficiente ou se a parte favorecida concordar com a redução do proveito, restabelecendo o equilíbrio[cite: 2].",
    "lei": "Art. 157. Ocorre a lesão quando uma pessoa, sob premente necessidade, ou por inexperiência, se obriga a prestação manifestamente desproporcional ao valor da prestação oposta.",
    "jurisprudencia": "O STJ consolidou o entendimento de que a lesão não exige a prova do dolo da parte contrária (aproveitamento intencional). Basta a comprovação da desproporção objetiva e da vulnerabilidade subjetiva do contratante no momento da celebração do ato[cite: 2]."
  },
  {
    "id": 23,
    "enunciado": "O estado de perigo caracteriza-se pela assunção de obrigação excessivamente onerosa para salvar a si mesmo ou a pessoa de sua família de grave dano conhecido pela outra parte.",
    "gabarito": "Certo",
    "justificativa": "O estado de perigo configura vício de consentimento que atinge a livre manifestação da vontade devido à situação de urgência extrema[cite: 2]. Para a caracterização, é necessário que o perigo seja real, grave e iminente, sendo que a outra parte deve ter conhecimento de tal fato para que o negócio possa ser anulado[cite: 2]. Se a pessoa contratada não conhece a situação de perigo, o negócio permanece válido, pois não houve o aproveitamento da situação de fragilidade do contratante[cite: 2]. O instituto é fundamental para evitar que a situação de desespero seja instrumentalizada para a obtenção de lucro ou vantagens indevidas, protegendo direitos existenciais superiores ao interesse puramente patrimonial[cite: 2].",
    "lei": "Art. 156. Configura-se o estado de perigo quando alguém, premido da necessidade de salvar-se, ou a pessoa de sua família, de grave dano conhecido pela outra parte, assume obrigação excessivamente onerosa.",
    "jurisprudencia": "Os tribunais entendem que a configuração do estado de perigo deve ser analisada com base na razoabilidade. O 'grave dano' não precisa estar limitado à vida, podendo envolver a saúde ou integridade moral, desde que a onerosidade da obrigação seja uma consequência direta do cenário de emergência[cite: 2]."
  },
  {
    "id": 24,
    "enunciado": "O dolo, como causa de anulabilidade do negócio jurídico, pode advir de terceiro, caso em que o negócio será anulado apenas se a parte a quem aproveite dele tivesse ou devesse ter conhecimento.",
    "gabarito": "Certo",
    "justificativa": "O dolo é o artifício ou expediente astucioso empregado para induzir alguém à prática de um ato que o prejudica, e sua ocorrência por parte de terceiro segue regra específica no Código Civil para garantir a segurança jurídica[cite: 2]. Se a parte beneficiada pelo dolo do terceiro não tinha como saber do ardil, não seria justo anular o negócio, pois ela agiu de boa-fé e sem intenção de enganar[cite: 2]. Contudo, se ela sabia ou tinha meios para descobrir a trama do terceiro, a lei permite a anulação, punindo o conluio ou a negligência daquele que se beneficiou de um vício que poderia ter evitado[cite: 2]. A proteção do terceiro de boa-fé é um pilar dos negócios jurídicos no ordenamento brasileiro[cite: 2].",
    "lei": "Art. 148. Pode também ser anulado o negócio jurídico por dolo de terceiro, se a parte a quem aproveite dele tivesse ou devesse ter conhecimento; em caso contrário, ainda que subsista o negócio jurídico, o terceiro responderá por todas as perdas e danos da parte a quem ludibriou.",
    "jurisprudencia": "A jurisprudência aponta que o ônus da prova de que a parte beneficiada tinha conhecimento do dolo de terceiro incumbe a quem alega o vício, sendo necessária prova robusta da ciência ou da possibilidade de conhecimento do vício pelo beneficiário[cite: 2]."
  },
  {
    "id": 25,
    "enunciado": "A simulação é uma causa de nulidade absoluta do negócio jurídico, podendo ser alegada pelas partes contratantes ou por terceiro interessado, e inclusive ser conhecida de ofício pelo juiz.",
    "gabarito": "Certo",
    "justificativa": "A simulação ocorre quando as partes criam um negócio jurídico aparente para ocultar a real intenção, que pode ser inexistente ou diversa da declarada, violando a boa-fé e, muitas vezes, a própria lei[cite: 2]. Diferente da anulabilidade, que protege interesses privados e admite convalidação, a nulidade absoluta visa proteger interesses de ordem pública e a integridade do sistema jurídico[cite: 2]. Como vício grave, a simulação pode ser reconhecida a qualquer tempo pelo juiz, e seus efeitos são retroativos à data da celebração, invalidando todo o conjunto de atos praticados para o engodo[cite: 2]. Não se admite a confirmação ou o suprimento do vício, pois o ato simulado é considerado nulo desde a origem[cite: 2].",
    "lei": "Art. 167. É nulo o negócio jurídico simulado, mas subsistirá o que se dissimulou, se válido for na substância e na forma.",
    "jurisprudencia": "O STJ reforça que a simulação é matéria de ordem pública, permitindo ao magistrado seu reconhecimento de ofício em qualquer grau de jurisdição. A jurisprudência também admite a produção de prova indireta (indícios) para comprovar a existência de simulação em face da dificuldade inerente à prova da vontade oculta das partes[cite: 2]."
  },
  {
    "id": 26,
    "enunciado": "A coação, para ser causa de anulação do negócio jurídico, deve ser grave e incutir na vítima fundado temor de dano iminente e considerável à sua pessoa, família ou bens.",
    "gabarito": "Certo",
    "justificativa": "A coação como vício de consentimento retira a liberdade de escolha do agente, tornando o negócio jurídico anulável porque a vontade declarada não corresponde à vontade real, mas a uma imposição do medo[cite: 2]. A lei exige que a coação seja determinante para a celebração do negócio, ou seja, sem a ameaça, o negócio não teria ocorrido[cite: 2]. Para avaliar a gravidade da coação, o juiz considerará o sexo, a idade, a condição, a saúde e o temperamento da vítima, sendo que a ameaça deve ser de um mal considerável o suficiente para subjugar uma pessoa de discernimento comum[cite: 2]. A coação pode ser física ou moral, sendo a moral (vis compulsiva) a que incute o temor na vítima para que esta pratique o ato, invalidando o negócio pela ausência de voluntariedade plena[cite: 2].",
    "lei": "Art. 151. A coação, para viciar a declaração da vontade, há de ser tal que incuta ao paciente fundado temor de dano iminente e considerável à sua pessoa, à sua família, ou aos seus bens.",
    "jurisprudencia": "Os tribunais decidem que não se considera coação a ameaça do exercício regular de um direito (como a cobrança judicial de uma dívida), salvo se essa ameaça for usada para obter vantagem indevida que não guarda relação com o direito exercido[cite: 2]."
  },
  {
    "id": 27,
    "enunciado": "O erro, para anular o negócio jurídico, deve ser substancial, de tal modo que, se a parte conhecesse a realidade, não teria celebrado o ato, ainda que o erro seja escusável.",
    "gabarito": "Certo",
    "justificativa": "O erro substancial é aquele que recai sobre elementos essenciais do negócio, como sua natureza, o objeto principal ou qualidades essenciais a ele relativas[cite: 2]. O Código Civil brasileiro evoluiu ao exigir, em linha com a doutrina contemporânea, que o erro seja escusável, ou seja, passível de ser cometido por qualquer pessoa diligente de discernimento normal[cite: 2]. Portanto, se o erro for substancial e perceptível, o ordenamento jurídico oferece proteção à parte que declarou sua vontade baseada em uma falsa percepção da realidade, permitindo a anulação para restabelecer a segurança nas relações jurídicas[cite: 2]. A boa-fé objetiva também orienta essa análise, punindo apenas a negligência grosseira que não merece a tutela judicial[cite: 2].",
    "lei": "Art. 138. São anuláveis os negócios jurídicos, quando as declarações de vontade emanarem de erro substancial que poderia ser percebido por pessoa de diligência normal, em face das circunstâncias do negócio.",
    "jurisprudencia": "O STJ entende que a análise da escusabilidade do erro deve ser feita caso a caso, considerando a condição das partes e o grau de conhecimento técnico exigido pelo tipo de negócio, visando equilibrar a proteção da autonomia privada e a segurança das declarações[cite: 2]."
  },
  {
    "id": 28,
    "enunciado": "A condição, termo e encargo são elementos acidentais do negócio jurídico que podem restringir ou ampliar os efeitos da vontade das partes, sendo que o encargo não suspende a aquisição nem o exercício do direito.",
    "gabarito": "Certo",
    "justificativa": "Os elementos acidentais permitem que as partes modifiquem os efeitos naturais do negócio jurídico[cite: 2]. Enquanto a condição subordina o efeito do negócio a evento futuro e incerto, o termo o subordina a evento futuro e certo[cite: 2]. O encargo ou ônus, por sua vez, impõe uma obrigação ao beneficiário de uma liberalidade (como em doações ou testamentos), mas não retira a eficácia imediata do direito adquirido[cite: 2]. Assim, o donatário pode exercer seu direito desde o início, embora esteja vinculado ao cumprimento da tarefa imposta, cujo descumprimento pode levar à revogação do ato em casos específicos previstos em lei[cite: 2].",
    "lei": "Art. 136. O encargo não suspende a aquisição nem o exercício do direito, salvo quando expressamente imposto pelo disponente, pelo modo suspensivo.",
    "jurisprudencia": "A jurisprudência reforça que o encargo é modalidade de restrição da liberalidade, sendo admissível a revogação do ato por inadimplemento (revogação por ingratidão ou inexecução do encargo), garantindo que a vontade do instituidor seja preservada e o benefício não seja transformado em proveito ilícito[cite: 2]."
  },
  {
    "id": 29,
    "enunciado": "A fraude contra credores ocorre quando o devedor insolvente, ou por ela reduzido, pratica atos de disposição patrimonial visando diminuir sua garantia perante os credores, sendo o negócio anulável.",
    "gabarito": "Certo",
    "justificativa": "A fraude contra credores é um vício social que visa proteger o patrimônio do devedor como garantia geral das obrigações[cite: 2]. Para a configuração, exige-se o 'consilium fraudis' (conluio fraudulento entre devedor e terceiro) e o 'eventus damni' (prejuízo ao credor pela insolvência)[cite: 2]. Diferente da fraude à execução, que ocorre no curso de processo judicial, a fraude contra credores ocorre quando a dívida ainda não é objeto de execução, mas já existe[cite: 2]. O instrumento processual para anular tais atos é a ação pauliana, garantindo que os bens doados ou alienados fraudulentamente retornem ao patrimônio do devedor para satisfazer os créditos[cite: 2].",
    "lei": "Art. 158. Os atos de alienação onerosa do devedor insolvente, ou por ela reduzido à insolvência, ainda quando o ignore, poderão ser anulados pelos credores quirografários, desde que o sejam pelo modo pauliano.",
    "jurisprudencia": "Os tribunais entendem que, na alienação onerosa, é imprescindível a prova do conhecimento da insolvência pelo terceiro adquirente (má-fé), protegendo o terceiro que adquire o bem de forma onerosa e sem saber da situação patrimonial do devedor[cite: 2]."
  },
  {
    "id": 30,
    "enunciado": "A celebração de um negócio jurídico por pessoa relativamente incapaz, sem a devida assistência, torna o negócio nulo de pleno direito.",
    "gabarito": "Errado",
    "justificativa": "A ausência de assistência a um relativamente incapaz torna o negócio jurídico apenas anulável, e não nulo de pleno direito[cite: 2]. O sistema civil brasileiro faz uma distinção clara entre nulidade absoluta (para atos de incapazes sem representação ou vícios graves) e anulabilidade (para atos de relativamente incapazes sem assistência ou vícios de consentimento)[cite: 2]. A anulabilidade permite que o ato seja confirmado pelas partes ou convalidado pelo decurso do tempo (decadência), garantindo que atos que não tragam prejuízo grave possam ser mantidos, respeitando o princípio da conservação dos negócios jurídicos[cite: 2]. A representação para os absolutamente incapazes é uma forma de suprir a falta total de discernimento, enquanto a assistência para os relativos é uma forma de acompanhamento para o exercício da autonomia[cite: 2].",
    "lei": "Art. 171. Além dos casos expressamente declarados na lei, é anulável o negócio jurídico: I - por incapacidade relativa do agente; II - por vício resultante de erro, dolo, coação, estado de perigo, lesão ou fraude contra credores.",
    "jurisprudencia": "A jurisprudência consolida que a anulabilidade deve ser pleiteada dentro do prazo decadencial legal. Se o relativamente incapaz, agindo sem assistência, omitir dolosamente sua idade para se eximir de uma obrigação, ele não poderá anular o negócio, em aplicação do princípio da boa-fé objetiva[cite: 2]."
  },
  {
    "id": 31,
    "enunciado": "O negócio jurídico nulo não pode ser confirmado pelas partes, nem convalesce pelo decurso do tempo, tendo seus efeitos declarados retroativamente à data de sua celebração.",
    "gabarito": "Certo",
    "justificativa": "A nulidade absoluta é a sanção mais grave do Direito Civil, aplicada quando o ato viola preceitos de ordem pública ou requisitos essenciais de validade[cite: 2]. Por ser um vício insanável, o ato não possui o condão de produzir efeitos jurídicos válidos e duradouros, motivo pelo qual a lei veda sua confirmação ou convalidação pelo tempo[cite: 2]. A decisão judicial que reconhece a nulidade tem natureza declaratória, ou seja, ela apenas reconhece que o ato nunca foi eficaz ('ex tunc'), devendo as partes retornar ao estado anterior à sua celebração (status quo ante)[cite: 2]. Essa regra visa proteger o sistema jurídico contra atos que atentam contra a moral ou normas cogentes[cite: 2].",
    "lei": "Art. 169. O negócio jurídico nulo não é suscetível de confirmação, nem convalesce pelo decurso do tempo.",
    "jurisprudencia": "O entendimento dos tribunais superiores é que a pretensão de declaração de nulidade absoluta é imprescritível, diferentemente da pretensão anulatória que possui prazo decadencial. A qualquer momento pode ser arguida a nulidade, salvo se já houver consolidada situação fática amparada pela segurança jurídica, conforme interpretação constitucional[cite: 2]."
  },
  {
    "id": 32,
    "enunciado": "A representação pode ser legal ou voluntária, sendo que, na representação voluntária, os poderes são conferidos pelo representado por meio de mandato, e o representante atua em nome próprio, mas por conta e risco do representado.",
    "gabarito": "Errado",
    "justificativa": "Na representação voluntária, o representante atua em nome do representado, e não em nome próprio, dentro dos limites dos poderes que lhe foram conferidos[cite: 2]. O ato jurídico praticado pelo representante, dentro dos limites do mandato, produz efeitos diretamente na esfera jurídica do representado, como se este o tivesse realizado pessoalmente[cite: 2]. O representante, ao agir, torna visível a sua qualidade de representante, desvinculando-se, em regra, das obrigações decorrentes do negócio[cite: 2]. Portanto, a assertiva está incorreta ao afirmar que o representante atua em nome próprio, pois isso caracterizaria uma figura diversa da representação direta, conhecida como interposição de pessoa ou atuação em nome próprio por conta alheia[cite: 2].",
    "lei": "Art. 116. A manifestação de vontade pelo representante, nos limites de seus poderes, produz efeitos em relação ao representado.",
    "jurisprudencia": "A jurisprudência destaca que a representação exige a exteriorização da vontade em nome do representado. A omissão dessa qualidade pode obrigar o representante pessoalmente perante terceiros de boa-fé, em proteção à segurança das relações jurídicas[cite: 2]."
  },
  {
    "id": 33,
    "enunciado": "O negócio jurídico celebrado pelo representante em conflito de interesses com o representado é anulável, se tal fato era ou devia ser do conhecimento de quem com ele tratou.",
    "gabarito": "Certo",
    "justificativa": "O conflito de interesses ocorre quando o representante prioriza seus próprios interesses ou os de terceiros em detrimento dos interesses do representado, violando o dever de fidelidade inerente ao mandato[cite: 2]. Para proteger o representado, a lei permite a anulação do negócio, desde que o terceiro, com quem se tratou, tivesse ciência ou pudesse conhecer a existência do conflito[cite: 2]. A exigência de conhecimento do terceiro visa preservar o negócio jurídico realizado com boa-fé, protegendo quem contratou sem saber do vício na representação[cite: 2]. Esse prazo para pleitear a anulação é de 180 dias, a contar da conclusão do negócio ou da cessação da incapacidade[cite: 2].",
    "lei": "Art. 119. É anulável o negócio concluído pelo representante em conflito de interesses com o representado, se tal fato era ou devia ser do conhecimento de quem com ele tratou.",
    "jurisprudencia": "Os tribunais entendem que o ônus da prova de que o terceiro conhecia ou deveria conhecer o conflito de interesses cabe ao representado, sendo necessária a comprovação de circunstâncias que tornariam evidente o prejuízo ao representado[cite: 2]."
  },
  {
    "id": 34,
    "enunciado": "A suspensão da prescrição impede que o prazo prescricional comece a correr, enquanto a interrupção faz com que o prazo anteriormente decorrido seja desconsiderado e recomece a contagem do zero.",
    "gabarito": "Certo",
    "justificativa": "A distinção entre suspensão e interrupção da prescrição é fundamental no direito civil[cite: 2]. A suspensão (causas previstas nos artigos 197 a 199) apenas 'pausa' o curso do prazo, que retoma seu fluxo de onde parou quando o motivo da suspensão cessa[cite: 2]. Já a interrupção (artigos 202 e seguintes) zera a contagem anterior; após o evento interruptivo, um novo prazo começa a correr integralmente[cite: 2]. A interrupção da prescrição só pode ocorrer uma vez, visando garantir que a incerteza jurídica não se perpetue indefinidamente por meio de sucessivas causas de interrupção[cite: 2].",
    "lei": "Art. 202. A interrupção da prescrição, que somente poderá ocorrer uma vez, dar-se-á: I - por despacho do juiz, mesmo incompetente, que ordenar a citação, se o interessado a promover no prazo e na forma da lei processual.",
    "jurisprudencia": "A jurisprudência é pacífica no sentido de que a interrupção da prescrição produz efeitos apenas uma vez, e que o prazo reiniciado não pode ser inferior ao original, respeitando o princípio da segurança jurídica[cite: 2]."
  },
  {
    "id": 35,
    "enunciado": "O prazo prescricional não corre contra os absolutamente incapazes, mas corre contra os relativamente incapazes e as pessoas jurídicas.",
    "gabarito": "Certo",
    "justificativa": "O ordenamento jurídico estabelece que a prescrição não corre contra os absolutamente incapazes, pois eles não possuem meios de exprimir sua vontade para a defesa de seus direitos[cite: 2]. Essa medida é um imperativo de justiça para evitar que o tempo extinga pretensões de pessoas que estão impossibilitadas de agir[cite: 2]. Por outro lado, os relativamente incapazes, que possuem discernimento parcial e podem ser assistidos, e as pessoas jurídicas, que contam com representantes e estrutura própria, estão sujeitos ao curso dos prazos prescricionais[cite: 2]. Essa regra reflete a necessidade de equilíbrio entre a proteção dos vulneráveis e a estabilidade das relações sociais[cite: 2].",
    "lei": "Art. 198. Também não corre a prescrição: I - contra os incapazes de que trata o art. 3º.",
    "jurisprudencia": "O STJ consolidou que o alcance da norma protetiva da não fluência da prescrição é restrito às hipóteses taxativas da lei, não sendo possível estender tal benefício por analogia a outras situações de incapacidade não previstas expressamente no Código Civil[cite: 2]."
  },
  {
    "id": 36,
    "enunciado": "A decadência legal pode ser conhecida de ofício pelo juiz, enquanto a decadência convencional só pode ser reconhecida se arguida pela parte a quem aproveita.",
    "gabarito": "Certo",
    "justificativa": "A decadência estabelecida por lei é matéria de ordem pública, visando à extinção de direitos potestativos dentro de um prazo prefixado pelo legislador, razão pela qual o juiz deve reconhecê-la de ofício a qualquer tempo[cite: 2]. Já a decadência convencional é aquela instituída por vontade das partes em um negócio jurídico; por decorrer de uma convenção privada, não é imperativa para o sistema, devendo ser provocada pela parte interessada para que o magistrado a declare[cite: 2]. Essa diferenciação protege a autonomia da vontade nos negócios privados e, simultaneamente, confere autoridade ao Estado na aplicação das normas cogentes de interesse público[cite: 2].",
    "lei": "Art. 210. Deve o juiz, de ofício, conhecer da decadência, quando estabelecida por lei.",
    "jurisprudencia": "A jurisprudência reforça a natureza peremptória dos prazos decadenciais legais. Uma vez esgotado o prazo, o direito potestativo perece, sendo o ato de reconhecimento pelo magistrado meramente declaratório de um fato já operado no mundo jurídico[cite: 2]."
  },
  {
    "id": 37,
    "enunciado": "A obrigação de dar coisa certa abrange os seus acessórios, ainda que não mencionados, salvo se o contrário resultar do título ou das circunstâncias do caso.",
    "gabarito": "Certo",
    "justificativa": "O princípio da gravitação jurídica determina que o acessório segue o principal, regra que se aplica à entrega de coisa certa no cumprimento de obrigações[cite: 2]. Quando alguém se compromete a entregar um bem específico, a obrigação engloba não apenas o objeto principal, mas também tudo o que o acompanha (acessórios, pertenças, frutos), visando a completa satisfação do interesse do credor[cite: 2]. A exceção reside na autonomia da vontade: se o contrato ou as circunstâncias indicarem que os acessórios foram excluídos, a obrigação se restringirá ao bem principal, mantendo o equilíbrio contratual pactuado entre as partes[cite: 2].",
    "lei": "Art. 233. A obrigação de dar coisa certa abrange os acessórios dela embora não mencionados, salvo se o contrário resultar do título ou das circunstâncias do caso.",
    "jurisprudencia": "A jurisprudência entende que, na venda de imóveis, a regra do acessório deve ser interpretada conforme a boa-fé. Elementos que integram a funcionalidade ou a estrutura do bem são considerados abrangidos, a menos que haja cláusula expressa em sentido contrário, evitando enriquecimento sem causa do vendedor[cite: 2]."
  },
  {
    "id": 38,
    "enunciado": "Nas obrigações de dar coisa incerta, a escolha pertence ao credor, se o contrário não resultar do título da obrigação.",
    "gabarito": "Errado",
    "justificativa": "Nas obrigações de dar coisa incerta (indicada ao menos pelo gênero e pela quantidade), a regra geral é que a escolha cabe ao devedor, e não ao credor[cite: 2]. O princípio do 'favor debitoris' orienta essa escolha, permitindo que o devedor cumpra a obrigação entregando coisa de qualidade intermediária, não podendo, porém, oferecer a pior nem ser obrigado a entregar a melhor[cite: 2]. A escolha só pertencerá ao credor se as partes assim convencionarem expressamente no título constitutivo da obrigação[cite: 2]. Após a realização da escolha (ato denominado cientificação ou concentração), a obrigação torna-se de dar coisa certa, aplicando-se a partir de então as regras correspondentes[cite: 2].",
    "lei": "Art. 244. Nas coisas determinadas pelo gênero e pela quantidade, a escolha pertence ao devedor, se o contrário não resultar do título da obrigação; mas não poderá dar a coisa pior, nem ser obrigado a entregar a melhor.",
    "jurisprudencia": "Os tribunais reforçam que a concentração (escolha) é indispensável para a perda do objeto e a liberação do devedor. Antes da escolha, o gênero não perece (genus nunquam perit), logo, o devedor não pode alegar caso fortuito ou força maior para se eximir da obrigação[cite: 2]."
  },
  {
    "id": 39,
    "enunciado": "Na obrigação alternativa, a escolha cabe ao devedor, se outra coisa não se estipulou, sendo vedado, contudo, o cumprimento de parte de uma prestação e parte de outra.",
    "gabarito": "Certo",
    "justificativa": "A obrigação alternativa caracteriza-se pela possibilidade de o devedor se liberar mediante o cumprimento de uma entre duas ou mais prestações distintas[cite: 2]. A escolha é, por padrão, do devedor, garantindo-lhe maior flexibilidade no cumprimento da obrigação[cite: 2]. A lei veda a fragmentação da execução, ou seja, o devedor não pode impor ao credor o recebimento de parte de uma prestação e parte de outra, pois a obrigação é una e indivisível em seu objeto alternativo[cite: 2]. Esse princípio protege o credor contra a desnaturação da obrigação e assegura a integridade do cumprimento do negócio jurídico[cite: 2].",
    "lei": "Art. 252. Nas obrigações alternativas, a escolha cabe ao devedor, se o contrário não se estipulou. § 1º Não pode o devedor obrigar o credor a receber parte em uma prestação e parte em outra.",
    "jurisprudencia": "A jurisprudência destaca que, uma vez exercida a escolha (concentração), a obrigação perde o caráter alternativo e torna-se obrigação de prestação simples. O direito de escolha, uma vez manifestado, é irretratável, salvo acordo mútuo das partes[cite: 2]."
  },
  {
    "id": 40,
    "enunciado": "A obrigação de fazer é fungível quando a prestação pode ser executada por terceiro, e infungível (personalíssima) quando apenas o devedor pode realizar o ato.",
    "gabarito": "Certo",
    "justificativa": "A distinção entre obrigações de fazer fungíveis e infungíveis reside na possibilidade de substituição do devedor na execução da prestação[cite: 2]. Se a obrigação for fungível, o credor pode exigir a execução por terceiros às expensas do devedor, caso este não a cumpra voluntariamente[cite: 2]. Na obrigação personalíssima ou infungível, o interesse do credor está ligado exclusivamente às qualidades, habilidades ou à identidade do devedor, sendo inviável a substituição, sob pena de descaracterização do negócio[cite: 2]. Nessas hipóteses, o inadimplemento culposo resolve-se, via de regra, em perdas e danos, pois o Poder Judiciário não pode compelir fisicamente o devedor a realizar o ato sob pena de violação da liberdade individual[cite: 2].",
    "lei": "Art. 247. Incorre na obrigação de indenizar perdas e danos o devedor que recusar a prestação a ele só imposta, ou só por ele exequível.",
    "jurisprudencia": "Os tribunais reconhecem que a execução específica das obrigações personalíssimas é restrita. Embora admitidas astreintes (multa diária) para compelir o devedor, a substituição por terceiro sem anuência do credor é vedada, sob pena de violação da autonomia da vontade[cite: 2]."
  },
  {
    "id": 41,
    "enunciado": "Na solidariedade passiva, o credor tem direito a exigir de qualquer um dos devedores o pagamento da dívida toda, sendo que o pagamento parcial por um dos devedores não extingue a dívida quanto aos demais.",
    "gabarito": "Certo",
    "justificativa": "A solidariedade passiva é um mecanismo de garantia que beneficia o credor, permitindo-lhe buscar a satisfação integral de seu crédito contra qualquer dos devedores solidários[cite: 2]. Se um dos devedores realiza pagamento parcial, essa quantia é abatida da dívida total, mas os demais permanecem responsáveis pelo saldo remanescente, mantendo-se o vínculo solidário até que a dívida seja totalmente quitada[cite: 2]. A solidariedade não se presume, resultando da lei ou da vontade das partes, e sua finalidade é justamente reforçar a segurança do crédito e facilitar a execução das obrigações em caso de pluralidade de devedores[cite: 2].",
    "lei": "Art. 275. O credor tem direito a exigir e receber de um ou de alguns dos devedores, parcial ou totalmente, a dívida comum; havendo pagamento parcial, todos os demais devedores continuam obrigados solidariamente pelo resto.",
    "jurisprudencia": "A jurisprudência reforça que a solidariedade passiva não confere ao devedor que pagou a dívida total o direito de cobrar dos outros o valor total, mas sim o seu quinhão (direito de regresso). Além disso, a renúncia à solidariedade por parte do credor em favor de um devedor não extingue a solidariedade em relação aos demais[cite: 2]."
  },
  {
    "id": 42,
    "enunciado": "A novação é a criação de uma nova obrigação para extinguir e substituir a anterior, exigindo o 'animus novandi' (intenção de novar) expresso ou tácito entre as partes.",
    "gabarito": "Certo",
    "justificativa": "A novação é uma forma de extinção das obrigações que exige a constituição de uma nova dívida com o objetivo de substituir a obrigação precedente, a qual se extingue[cite: 2]. O elemento subjetivo fundamental é o ânimo de novar (animus novandi), que deve ser claro, embora não precise ser obrigatoriamente escrito, podendo ser extraído do comportamento inequívoco das partes[cite: 2]. Sem esse ânimo, a nova obrigação apenas confirma ou modifica a anterior (dívida principal) sem a extinguir[cite: 2]. A novação libera garantias e acessórios da dívida original, salvo estipulação em contrário, o que demonstra a força transformadora deste instituto jurídico na relação obrigacional[cite: 2].",
    "lei": "Art. 360. Dá-se a novação: I - quando o devedor contrai com o credor nova dívida para extinguir e substituir a anterior.",
    "jurisprudencia": "O entendimento consolidado é que a mera renegociação de dívida ou a alteração de prazos de pagamento não implica, automaticamente, em novação, sendo indispensável a demonstração inequívoca da intenção das partes em extinguir a obrigação primitiva para dar lugar a uma nova[cite: 2]."
  },
  {
    "id": 43,
    "enunciado": "A compensação extingue as obrigações até onde se compensarem, quando duas pessoas são, ao mesmo tempo, credora e devedora uma da outra, desde que as dívidas sejam líquidas, vencidas e de coisas fungíveis.",
    "gabarito": "Certo",
    "justificativa": "A compensação é uma forma de extinção das obrigações que opera sem a necessidade de pagamento efetivo, simplificando as relações jurídicas entre pessoas que ocupam simultaneamente as posições de credor e devedor[cite: 2]. Para que a compensação ocorra de pleno direito (compensação legal), é necessário que as dívidas sejam recíprocas, líquidas (com valor certo), vencidas (exigíveis) e fungíveis entre si (da mesma natureza e qualidade)[cite: 2]. Esse instituto protege o devedor contra a insolvência do credor e evita a circulação inútil de moeda, sendo um poderoso mecanismo de economia e eficiência no Direito das Obrigações[cite: 2].",
    "lei": "Art. 368. Se duas pessoas forem ao mesmo tempo credor e devedor uma da outra, as duas obrigações extinguem-se, até onde se compensarem.",
    "jurisprudencia": "Os tribunais entendem que, uma vez preenchidos os requisitos legais, a compensação opera seus efeitos retroativamente à data em que as obrigações se tornaram passíveis de compensação. A sentença que declara a compensação tem caráter declaratório, confirmando a extinção das dívidas desde o momento em que se tornaram recíprocas e exigíveis[cite: 2]."
  },
  {
    "id": 44,
    "enunciado": "A confusão ocorre quando o mesmo sujeito reúne, em si mesmo, as qualidades de credor e devedor de uma mesma obrigação, extinguindo-a integralmente, exceto se a confusão for apenas sobre uma parte da dívida.",
    "gabarito": "Certo",
    "justificativa": "A confusão é um modo de extinção das obrigações que se verifica pela reunião, na mesma pessoa, dos polos ativo e passivo da relação jurídica, o que torna logicamente impossível a existência da dívida[cite: 2]. Como ninguém pode ser credor de si mesmo, a obrigação deixa de existir automaticamente[cite: 2]. Se a confusão for parcial (por exemplo, quando o devedor sucede o credor em apenas uma parte da obrigação), a extinção também será apenas parcial, subsistindo a obrigação pelo remanescente[cite: 2]. Este fenômeno ocorre frequentemente no âmbito do direito das sucessões (quando o devedor herda o crédito de seu credor) ou em fusões empresariais[cite: 2].",
    "lei": "Art. 381. Extingue-se a obrigação, desde que na mesma pessoa se confundam as qualidades de credor e devedor.",
    "jurisprudencia": "A jurisprudência ratifica que a confusão tem natureza extintiva automática. Tratando-se de obrigação solidária, a confusão que ocorre na pessoa de um dos devedores solidários extingue a dívida apenas na medida da quota-parte daquele devedor, mantendo-se a obrigação em relação aos demais coobrigados[cite: 2]."
  },
  {
    "id": 45,
    "enunciado": "A remissão da dívida, ou perdão, é um ato de liberalidade do credor que exige a aceitação do devedor para produzir efeitos extintivos da obrigação.",
    "gabarito": "Certo",
    "justificativa": "A remissão é a renúncia gratuita do credor ao seu crédito, liberando o devedor da obrigação[cite: 2]. Embora seja um ato de liberalidade, a lei exige a aceitação do devedor para que o perdão seja eficaz, pois o ordenamento jurídico protege a liberdade do indivíduo de não ser obrigado a aceitar uma liberalidade, evitando que o perdão seja imposto unilateralmente[cite: 2]. A remissão pode ser expressa ou tácita (quando o credor entrega voluntariamente o título da obrigação ao devedor), sendo uma forma consensual de extinção das obrigações que privilegia a autonomia privada[cite: 2].",
    "lei": "Art. 385. A remissão da dívida, aceita pelo devedor, extingue a obrigação, mas sem prejuízo de terceiro.",
    "jurisprudencia": "Os tribunais entendem que a remissão não se presume. A devolução do título de crédito, contudo, cria uma presunção relativa (iuris tantum) de remissão, que pode ser elidida por prova em contrário produzida pelo credor, garantindo a proteção aos direitos do credor que agiu sem a intenção de perdoar[cite: 2]."
  },
  {
    "id": 46,
    "enunciado": "A cessão de crédito não depende do consentimento do devedor, sendo suficiente, para a sua eficácia perante ele, que o mesmo seja notificado da transferência da obrigação.",
    "gabarito": "Certo",
    "justificativa": "A cessão de crédito é um negócio jurídico bilateral entre o credor original (cedente) e um terceiro (cessionário), mediante o qual o crédito é transferido com todos os seus acessórios, independentemente da vontade do devedor (cedido)[cite: 2]. A lei, contudo, exige que o devedor seja notificado da cessão para que o pagamento feito ao novo credor seja eficaz e para que ele não se libere pagando erroneamente ao credor antigo[cite: 2]. Essa notificação é o ato que vincula o devedor à figura do novo credor, sendo desnecessária a autorização do devedor, pois, para ele, é indiferente a quem paga, desde que a dívida permaneça a mesma[cite: 2].",
    "lei": "Art. 290. A cessão do crédito não tem eficácia em relação ao devedor, senão quando a este notificada; mas por notificado se tem o devedor que, em escrito público ou particular, se declarou ciente da cessão feita.",
    "jurisprudencia": "A jurisprudência destaca que a ausência de notificação não torna a cessão nula, mas a torna ineficaz em relação ao devedor. Se o devedor paga ao cedente sem ter sido notificado da cessão, o pagamento é considerado válido e extingue a dívida, cabendo ao cessionário buscar o valor junto ao cedente, em proteção à boa-fé do devedor[cite: 2]."
  },
  {
    "id": 47,
    "enunciado": "A assunção de dívida é a transferência do débito de um devedor para um terceiro, dependendo, para sua validade, da anuência expressa ou tácita do credor.",
    "gabarito": "Certo",
    "justificativa": "Diferente da cessão de crédito, a assunção de dívida exige o consentimento do credor, pois a solvabilidade do devedor é uma garantia essencial na relação obrigacional[cite: 2]. Sem a autorização do credor, o terceiro não pode assumir o débito de forma a liberar o devedor original, garantindo-se assim a integridade do patrimônio destinado ao pagamento da obrigação[cite: 2]. A anuência pode ser expressa ou tácita (quando o credor aceita o pagamento feito pelo terceiro), sendo este um requisito de validade para que o negócio produza efeitos liberatórios em relação ao devedor primitivo[cite: 2].",
    "lei": "Art. 299. É facultado a terceiro assumir a obrigação do devedor, com o consentimento expresso do credor, ficando exonerado o devedor primitivo, salvo se aquele, ao tempo da assunção, era insolvente e o credor o ignorava.",
    "jurisprudencia": "Os tribunais entendem que, na ausência de consentimento do credor, a assunção de dívida é considerada ineficaz em relação a ele, mantendo-se o devedor primitivo como único responsável pela obrigação, independentemente de qualquer contrato privado entre o devedor e o terceiro[cite: 2]."
  },
  {
    "id": 48,
    "enunciado": "O inadimplemento absoluto ocorre quando a prestação, ainda que possível, tornou-se inútil ao credor, ou quando o devedor recusa o cumprimento, permitindo a resolução do contrato.",
    "gabarito": "Certo",
    "justificativa": "O inadimplemento absoluto caracteriza-se pela impossibilidade de satisfação do interesse do credor, seja porque a prestação não foi realizada no tempo devido (mora convertida em inadimplemento), seja porque, embora possível, perdeu sua utilidade para o destinatário[cite: 2]. A resolução contratual é a medida jurídica que visa desconstituir o vínculo obrigacional quando o inadimplemento frustra a finalidade do contrato, garantindo ao credor a reparação por perdas e danos[cite: 2]. É um mecanismo de preservação da equidade contratual, evitando que a parte prejudicada seja compelida a manter um vínculo inútil ou lesivo[cite: 2].",
    "lei": "Art. 395, parágrafo único. Se a prestação, devido à mora, se tornar inútil ao credor, este poderá enjeitá-la, e exigir a satisfação das perdas e danos.",
    "jurisprudencia": "A jurisprudência destaca que a utilidade da prestação é aferida objetivamente. O atraso no cumprimento, quando o prazo era essencial para o credor (como em contratos de evento ou de entrega de mercadorias sazonais), configura inadimplemento absoluto desde o vencimento[cite: 2]."
  },
  {
    "id": 49,
    "enunciado": "A mora do devedor (mora solvendi) exige que o atraso seja culposo, enquanto a mora do credor (mora accipiendi) configura-se pela recusa injustificada em receber o pagamento.",
    "gabarito": "Certo",
    "justificativa": "A mora representa um retardamento no cumprimento da obrigação ou um cumprimento imperfeito[cite: 2]. Para o devedor, a mora pressupõe a culpa (imputabilidade), pois se o atraso decorre de caso fortuito ou força maior, não há mora[cite: 2]. Já a mora do credor ocorre quando ele se recusa, sem justa causa, a receber o pagamento no tempo, lugar e forma devidos, colocando o devedor em situação de prejuízo[cite: 2]. Nesses casos, a lei garante ao devedor a purgação da mora e a consignação do pagamento, instrumentos fundamentais para garantir a liberação da obrigação e evitar o acúmulo de encargos indevidos[cite: 2].",
    "lei": "Art. 394. Considera-se em mora o devedor que não efetuar o pagamento e o credor que não quiser recebê-lo no tempo, lugar e forma que a lei ou a convenção estabelecer.",
    "jurisprudencia": "Os tribunais reforçam que a purgação da mora pelo devedor exige o pagamento da dívida acrescido de juros, custas e honorários, enquanto a mora do credor inverte os riscos da perda da coisa, fazendo com que o credor suporte a deterioração ou o perecimento do objeto por caso fortuito, desde que não haja dolo do devedor[cite: 2]."
  },
  {
    "id": 50,
    "enunciado": "A responsabilidade civil subjetiva baseia-se na teoria da culpa, exigindo a presença de quatro elementos: conduta, dano, nexo causal e a culpa ou dolo do agente.",
    "gabarito": "Certo",
    "justificativa": "A responsabilidade subjetiva é a regra geral no ordenamento civil, exigindo a demonstração de que o agente agiu com negligência, imprudência ou imperícia (culpa) ou com intenção deliberada (dolo)[cite: 2]. Além da conduta ilícita, deve haver um dano efetivo e um nexo de causalidade entre o comportamento do agente e o prejuízo sofrido pela vítima[cite: 2]. Esse modelo protege tanto a vítima quanto o autor do fato, garantindo que a reparação só seja imposta quando houver um juízo de reprovabilidade sobre a conduta do agente, diferenciando-se da responsabilidade objetiva que prescinde da culpa[cite: 2].",
    "lei": "Art. 186. Aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem, ainda que exclusivamente moral, comete ato ilícito.",
    "jurisprudencia": "A jurisprudência aponta que o ônus da prova na responsabilidade subjetiva cabe à vítima (art. 373, I, CPC), a quem incumbe demonstrar a culpa do agente. Em casos de responsabilidade objetiva, o ônus se inverte ou é mitigado pela teoria do risco da atividade[cite: 2]."
  },
  {
    "id": 51,
    "enunciado": "Na responsabilidade objetiva, o dever de reparar o dano surge independentemente da existência de culpa, baseando-se na teoria do risco criado pelo exercício de atividade econômica.",
    "gabarito": "Certo",
    "justificativa": "A responsabilidade objetiva é uma exceção à regra subjetiva, fundamentada na teoria do risco[cite: 2]. Quando uma atividade cria perigo para terceiros ou é exercida visando lucro, o responsável responde pelos danos causados pelo simples fato do exercício dessa atividade, independentemente de ter agido com imprudência ou negligência[cite: 2]. O objetivo desse instituto é facilitar a reparação da vítima em situações onde a comprovação da culpa seria excessivamente onerosa ou impossível, transferindo o ônus da atividade ao agente que se beneficia dela, garantindo maior justiça social nas relações privadas[cite: 2].",
    "lei": "Art. 927, parágrafo único. Haverá obrigação de reparar o dano, independentemente de culpa, nos casos especificados em lei, ou quando a atividade normalmente desenvolvida pelo autor do dano implicar, por sua natureza, risco para os direitos de outrem.",
    "jurisprudencia": "Os tribunais aplicam a responsabilidade objetiva em diversos cenários, como no Direito do Consumidor e nos danos ambientais, consolidando que o nexo causal é o elemento central, sendo que apenas causas excludentes de responsabilidade (como culpa exclusiva da vítima ou força maior) podem afastar o dever de indenizar[cite: 2]."
  },
  {
    "id": 52,
    "enunciado": "Aquele que ressarce o dano causado por outrem pode reaver o que houver pago nos casos em que o causador do dano for seu descendente absoluto ou relativamente incapaz.",
    "gabarito": "Errado",
    "justificativa": "O Código Civil estabelece uma regra de proteção na relação de regresso. Embora o responsável civil (como pais ou tutores) deva reparar o dano causado por seus filhos incapazes, a lei proíbe expressamente o direito de regresso contra descendentes absolutamente ou relativamente incapazes, visando preservar o patrimônio do menor e garantir a função protetiva da responsabilidade civil[cite: 2]. O fundamento jurídico reside na natureza da relação de cuidado e na proteção especial conferida aos incapazes, que não devem ser onerados pela reparação de danos causados em virtude de sua própria condição de vulnerabilidade[cite: 2].",
    "lei": "Art. 934. Aquele que ressarcir o dano causado por outrem pode reaver o que houver pago daquele por quem pagou, salvo se o causador do dano for descendente seu, absoluta ou relativamente incapaz.",
    "jurisprudencia": "A jurisprudência ratifica a vedação do regresso, entendendo que tal medida é uma limitação legal ao direito de reembolso que visa evitar a transferência do encargo financeiro para o incapaz, que muitas vezes não possui meios de subsistência próprios[cite: 2]."
  },
  {
    "id": 53,
    "enunciado": "O dano moral, em regra, é reparável apenas quando se comprova um prejuízo econômico direto decorrente da ofensa à honra ou imagem da vítima.",
    "gabarito": "Errado",
    "justificativa": "O dano moral caracteriza-se pela violação de direitos da personalidade, como a honra, a intimidade, o nome e a imagem, sendo sua reparação independente da existência de prejuízo econômico direto[cite: 2]. A natureza da compensação por danos morais é duplo-facetada: uma função satisfatória para a vítima e uma função pedagógica-punitiva para o ofensor[cite: 2]. O STJ entende que a dor, o sofrimento e o abalo psicológico são eventos indenizáveis por si mesmos, sem que se exija que a vítima comprove ter sofrido um decréscimo patrimonial, bastando a demonstração do fato ofensivo e do nexo causal[cite: 2].",
    "lei": "Art. 5º, X, da Constituição Federal (aplicado subsidiariamente ao CC): são invioláveis a intimidade, a vida privada, a honra e a imagem das pessoas, assegurado o direito a indenização pelo dano material ou moral decorrente de sua violação.",
    "jurisprudencia": "Súmula 387 do STJ: 'É lícita a cumulação das indenizações de dano estético e dano moral.' A jurisprudência consolidou que o dano moral prescinde de prova documental de prejuízo material, sendo configurado pela própria ofensa aos direitos imateriais da pessoa[cite: 2]."
  },
  {
    "id": 54,
    "enunciado": "A legítima defesa, no âmbito da responsabilidade civil, exclui a antijuridicidade do ato, não gerando, por conseguinte, obrigação de reparar o dano causado ao agressor.",
    "gabarito": "Certo",
    "justificativa": "A legítima defesa é uma causa excludente de ilicitude reconhecida pelo Código Civil brasileiro, configurando uma reação necessária para repelir uma agressão atual ou iminente, injusta e que ameaça direito próprio ou alheio[cite: 2]. Quando o ato é praticado em legítima defesa, o ordenamento jurídico não o considera um ato ilícito, removendo o dever de reparação civil em relação ao agressor[cite: 2]. Essa regra é essencial para garantir o exercício do direito à própria preservação, desde que a defesa seja exercida com moderação e proporcionalidade, evitando excessos que poderiam, eles próprios, gerar um novo dever de indenizar[cite: 2].",
    "lei": "Art. 188. Não constituem atos ilícitos: I - os praticados em legítima defesa ou no exercício regular de um direito reconhecido.",
    "jurisprudencia": "Os tribunais ressaltam que, caso haja excesso na reação, o agente que inicialmente agia em legítima defesa pode ser responsabilizado pela parcela do dano que excedeu o necessário para repelir a agressão, sendo a proporcionalidade o critério de aferição[cite: 2]."
  },
  {
    "id": 55,
    "enunciado": "O estado de necessidade ocorre quando alguém, para remover perigo iminente, deteriora ou destrói coisa alheia, situação que, embora não constitua ato ilícito, pode gerar o dever de indenizar o proprietário da coisa sacrificada.",
    "gabarito": "Certo",
    "justificativa": "O estado de necessidade exclui a ilicitude do ato (não é ato ilícito), mas o Código Civil impõe um dever de reparação em prol da equidade[cite: 2]. Se a vítima do sacrifício da coisa não foi a culpada pela situação de perigo, o agente que destruiu a coisa para se salvar deve indenizar o proprietário, ressalvado o direito de regresso contra o real causador do perigo[cite: 2]. Essa solução harmoniza a proteção da vida e da integridade física (que prevalecem sobre o patrimônio) com a necessidade de não se onerar injustamente o terceiro que teve sua propriedade destruída por fato alheio à sua vontade[cite: 2].",
    "lei": "Art. 929. Se a pessoa lesada, ou o dono da coisa, no caso do inciso II do art. 188, não forem culpados do perigo, assistir-lhes-á direito à indenização do prejuízo que sofreram.",
    "jurisprudencia": "A jurisprudência esclarece que o dono da coisa sacrificada tem o direito de ser indenizado mesmo que o agente tenha agido em estado de necessidade. A lei busca, em última análise, que o prejuízo recaia, em última instância, sobre o verdadeiro causador do perigo, se houver[cite: 2]."
  },
  {
    "id": 56,
    "enunciado": "A responsabilidade pelo fato da coisa prevê que o proprietário ou detentor responde pelos danos causados pelo animal ou pela coisa inanimada sob sua guarda, independentemente de demonstração de culpa.",
    "gabarito": "Certo",
    "justificativa": "A responsabilidade civil pelo fato da coisa ou do animal é baseada na presunção de guarda e vigilância[cite: 2]. O dono do animal ou o proprietário da coisa responde pelos danos que estes causarem, pois o dever de guarda e cuidado é inerente à propriedade ou posse[cite: 2]. Trata-se de hipótese de responsabilidade objetiva (ou baseada em presunção legal de culpa), onde o ônus da prova de causas excludentes, como a força maior ou a culpa exclusiva da vítima, recai sobre o proprietário, garantindo que terceiros prejudicados tenham uma proteção facilitada diante dos riscos inerentes à posse de certos bens[cite: 2].",
    "lei": "Art. 936. O dono, ou detentor, do animal ressarcirá o dano por este causado, se não provar culpa da vítima ou força maior.",
    "jurisprudencia": "Os tribunais aplicam rigorosamente esta norma, entendendo que o dono do animal tem o dever de guarda e proteção, não sendo suficiente a simples alegação de que o animal nunca demonstrou agressividade para afastar a responsabilidade pelo dano causado a terceiros[cite: 2]."
  },
  {
    "id": 57,
    "enunciado": "A responsabilidade civil do empregador por danos causados por seus empregados no exercício do trabalho é objetiva e solidária, não sendo necessário provar a culpa na escolha ou na vigilância (culpa in eligendo ou in vigilando).",
    "gabarito": "Certo",
    "justificativa": "O Código Civil adotou a responsabilidade objetiva do empregador pelos atos danosos praticados por seus empregados, serviçais e prepostos no exercício do trabalho ou em razão dele[cite: 2]. Essa medida visa assegurar a reparação da vítima, que muitas vezes encontra no empregador uma garantia patrimonial mais robusta do que no empregado individualmente[cite: 2]. A responsabilidade é direta e independe de o patrão ter agido com culpa na seleção ou fiscalização de seu funcionário, pois o risco da atividade econômica, que inclui a eventualidade de danos causados pelo preposto, deve ser suportado por quem aufere os lucros do negócio[cite: 2].",
    "lei": "Art. 932, III. São também responsáveis pela reparação civil: III - o empregador ou comitente, por seus empregados, serviçais e prepostos, no exercício do trabalho que lhes competir, ou em razão dele.",
    "jurisprudencia": "A jurisprudência reforça que a responsabilidade do empregador é solidária com o causador direto do dano, permitindo à vítima buscar o ressarcimento diretamente da empresa. O empregador que indenizar a vítima tem, via de regra, direito de regresso contra o empregado causador, desde que este tenha agido com culpa ou dolo[cite: 2]."
  },
  {
    "id": 58,
    "enunciado": "No contrato de seguro, o segurador é obrigado a garantir o interesse legítimo do segurado relativo a pessoa ou coisa, contra riscos predeterminados, mediante o pagamento de prêmio.",
    "gabarito": "Certo",
    "justificativa": "O contrato de seguro é um negócio jurídico bilateral, oneroso e aleatório, pelo qual uma parte (segurador) assume o risco de um evento incerto e futuro, comprometendo-se a pagar uma indenização caso o sinistro ocorra[cite: 2]. O segurado, por sua vez, obriga-se ao pagamento do prêmio, que é o valor necessário para a manutenção da mutualidade do seguro[cite: 2]. A exigência de um 'interesse legítimo' é o limite para a validade do contrato, evitando que o seguro seja utilizado como instrumento de aposta ou especulação ilícita, cumprindo sua função social de proteção patrimonial ou pessoal[cite: 2].",
    "lei": "Art. 757. Pelo contrato de seguro, o segurador se obriga, mediante o pagamento do prêmio, a garantir interesse legítimo do segurado, relativo a pessoa ou a coisa, contra riscos predeterminados.",
    "jurisprudencia": "Os tribunais enfatizam o princípio da boa-fé objetiva nos contratos de seguro. O segurado tem o dever de informar todas as circunstâncias relevantes para a avaliação do risco, e a omissão deliberada (reticência) de informações essenciais autoriza a seguradora a negar o pagamento da indenização em caso de sinistro[cite: 2]."
  },
  {
    "id": 59,
    "enunciado": "A doação é um contrato em que uma pessoa, por liberalidade, transfere do seu patrimônio bens ou vantagens para o de outra, sendo considerada inoficiosa e nula a doação que exceder o limite de que o doador poderia dispor em testamento no momento da liberalidade.",
    "gabarito": "Certo",
    "justificativa": "A doação é um contrato de natureza gratuita que encontra limites na proteção da legítima dos herdeiros necessários[cite: 2]. A doação inoficiosa é aquela que ultrapassa a parte disponível do doador, invadindo a parcela do patrimônio que é reservada por lei aos herdeiros necessários (descendentes, ascendentes e cônjuge)[cite: 2]. Essa restrição existe para evitar que o doador esvazie seu patrimônio através de liberalidades e deixe os herdeiros sem o suporte sucessório que o ordenamento jurídico garante como medida de ordem pública[cite: 2]. A nulidade incide apenas sobre a parte que exceder o limite legal, preservando-se, na medida do possível, a intenção do doador[cite: 2].",
    "lei": "Art. 549. Nula é também a doação quanto à parte que exceder a de que o doador, no momento da liberalidade, poderia dispor em testamento.",
    "jurisprudencia": "A jurisprudência entende que a ação para declarar a nulidade da doação inoficiosa possui prazo decadencial de dez anos, contados da prática do ato de liberalidade. O cálculo para verificar a existência de inoficiosidade deve ser feito com base no patrimônio líquido do doador à época da doação[cite: 2]."
  },
  {
    "id": 60,
    "enunciado": "No contrato de mandato, o mandatário é obrigado a aplicar toda sua diligência habitual na execução do mandato e a indenizar qualquer prejuízo causado por sua culpa ou pela de seu substabelecido, se este for escolhido sem autorização.",
    "gabarito": "Certo",
    "justificativa": "O mandato é um contrato de confiança (intuitu personae) no qual o mandatário assume o compromisso de realizar atos ou administrar interesses do mandante[cite: 2]. A diligência exigida é a habitual do mandatário, o que implica um comportamento cauteloso e eficiente na gestão dos interesses alheios[cite: 2]. Se o mandatário substabelece os poderes sem a devida autorização do mandante, ele torna-se responsável pelos atos praticados por seu substituto, respondendo pessoalmente pelos prejuízos que este vier a causar, pois foi ele quem violou o dever de execução pessoal direta inerente à confiança depositada[cite: 2].",
    "lei": "Art. 667. O mandatário é obrigado a aplicar toda sua diligência habitual na execução do mandato, e a indenizar qualquer prejuízo causado por culpa sua ou daquele a quem substabelecer, sem autorização, poderes que devia exercer pessoalmente.",
    "jurisprudencia": "A jurisprudência destaca que a responsabilidade do mandatário não se limita apenas aos danos diretos, mas abrange os lucros cessantes decorrentes de sua conduta negligente. A confiança é a alma do contrato de mandato, sendo qualquer quebra desse dever sancionada severamente pelo Direito Civil[cite: 2]."
  }
];