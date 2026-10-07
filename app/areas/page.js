"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
  ShieldCheck, 
  Building2, 
  Scale, 
  Receipt, 
  Briefcase, 
  Home, 
  Users, 
  FileText, 
  ArrowRight, 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2,
  Compass,
  Award,
  Lock,
  Sparkles
} from 'lucide-react';

const WHATSAPP_BASE = 'https://api.whatsapp.com/send/?phone=5573998249898';

const AREAS_DATA = [
  {
    id: 'previdenciario',
    label: 'Previdenciário',
    title: 'Direito Previdenciário',
    badge: 'Especialidade Central do Escritório',
    image: '/assets/direito_previdencial.png',
    icon: ShieldCheck,
    heroDesc: 'Defesa incansável e técnica na concessão, restabelecimento e revisão dos melhores benefícios previdenciários. Nossa equipe analisa minuciosamente a vida laboral de cada segurado para assegurar que nenhum direito seja perdido diante das constantes alterações legislativas e exigências do INSS.',
    shortDesc: 'Aposentadorias, benefícios por incapacidade, revisões de alto valor e planejamento preventivo perante o INSS e a Justiça Federal.',
    causes: [
      {
        id: 'regras-transicao',
        tag: 'Aposentadorias & Transição',
        title: 'Aposentadorias e Regras de Transição (EC 103/2019)',
        desc: 'Cálculo aprofundado entre todas as regras de transição da Reforma (pedágio de 50%, pedágio de 100%, idade mínima progressiva e pontos). Identificamos qual modalidade garante o valor mensal mais vantajoso, evitando aposentadorias precipitadas e prejudiciais.',
        when: 'Se você já contribuía antes de nov/2019 e deseja saber qual regra gera o maior benefício líquido.',
        ctaText: 'Analisar regra de transição'
      },
      {
        id: 'aposentadoria-especial',
        tag: 'Insalubridade & Periculosidade',
        title: 'Aposentadoria Especial & Conversão de Tempo',
        desc: 'Reconhecimento de tempo trabalhado com exposição a agentes nocivos à saúde (físicos, químicos e biológicos). Atuamos na comprovação de PPPs e LTCATs para profissionais da saúde (médicos, dentistas, enfermeiros), vigilantes armados, frentistas, mecânicos e industriais.',
        when: 'Se você atuou em ambientes insalubres ou perigosos e busca aposentar-se aos 25 anos de atividade ou converter tempo especial.',
        ctaText: 'Consultar aposentadoria especial'
      },
      {
        id: 'beneficios-incapacidade',
        tag: 'Saúde & Perícia Médica',
        title: 'Benefícios por Incapacidade (Auxílio-Doença e Invalidez)',
        desc: 'Ações judiciais com perícia médica independente para reverter indeferimentos e altas programadas indevidas do INSS. Transformação de auxílio temporário em aposentadoria por invalidez permanente e concessão de Auxílio-Acidente indenizatório.',
        when: 'Quando o INSS negar o benefício ou der alta médica enquanto você ainda está incapacitado para o trabalho.',
        ctaText: 'Reverter negativa do INSS'
      },
      {
        id: 'bpc-loas',
        tag: 'Assistencial & Vulnerabilidade',
        title: 'BPC / LOAS (Idosos e Pessoas com Deficiência)',
        desc: 'Concessão do benefício assistencial mensal de 1 salário mínimo para idosos (65+) e pessoas de qualquer idade com impedimento de longo prazo, mesmo sem histórico de contribuição ao INSS, afastando exigências abusivas de renda.',
        when: 'Para famílias em situação de vulnerabilidade que tiveram o benefício negado pelo critério econômico do INSS.',
        ctaText: 'Solicitar BPC / LOAS'
      },
      {
        id: 'revisoes-beneficios',
        tag: 'Revisões de Valor',
        title: 'Revisões de Benefícios & Teses Judiciais de Aumento',
        desc: 'Ações revisionais para corrigir erros de cálculo do INSS, inclusão de períodos trabalhados sem registro, tempo de serviço militar, atividade rural na infância/juventude e teses favoráveis consolidadas pelo STF e STJ.',
        when: 'Se você se aposentou nos últimos 10 anos e desconfia que o valor recebido é menor do que você de fato contribuiu.',
        ctaText: 'Calcular revisão de benefício'
      },
      {
        id: 'planejamento-previdenciario',
        tag: 'Prevenção & Economia',
        title: 'Planejamento Previdenciário Estratégico',
        desc: 'Diagnóstico atuarial completo do extrato CNIS, regularização prévia de indicadores de pendência, projeção de recolhimentos futuros e simulação exata de quanto e quando você deve se aposentar para obter o teto máximo.',
        when: 'Recomendado para segurados a partir dos 40 anos ou que estejam a 1 a 5 anos de solicitar o benefício.',
        ctaText: 'Iniciar meu planejamento'
      }
    ]
  },
  {
    id: 'empresarial',
    label: 'Empresarial & Societário',
    title: 'Direito Empresarial & Societário',
    badge: 'Segurança Corporativa & Governança',
    image: '/assets/direito_empresarial.png',
    icon: Building2,
    heroDesc: 'Assessoria jurídica estratégica para empresas em todas as fases do negócio: desde a constituição e estruturação societária até a expansão, proteção do patrimônio dos sócios e renegociação de passivos corporativos.',
    shortDesc: 'Contratos comerciais, governança societária, acordos de sócios, recuperação judicial e proteção patrimonial de holdings.',
    causes: [
      {
        id: 'acordo-socios',
        tag: 'Governança & Sociedade',
        title: 'Estruturação Societária & Acordo de Sócios',
        desc: 'Redação de acordos de quotistas/acionistas com cláusulas de governança, resolução de impasses (deadlock), critérios de saída de sócios, apuração de haveres, tag-along e não concorrência, prevenindo disputas que paralisem o negócio.',
        when: 'Na fundação da empresa, entrada de investidores ou para blindar a relação entre os sócios.',
        ctaText: 'Estruturar acordo de sócios'
      },
      {
        id: 'contratos-comerciais',
        tag: 'Contratos Estratégicos',
        title: 'Contratos Empresariais & Parcerias Comerciais',
        desc: 'Elaboração e negociação de contratos de fornecimento, prestação de serviços, distribuição, franquias, representação comercial e parcerias, blindando a empresa contra multas abusivas e inadimplementos.',
        when: 'Para empresas que buscam segurança jurídica em suas operações de compra, venda e prestação de serviços.',
        ctaText: 'Blindar contratos da empresa'
      },
      {
        id: 'gestao-passivos',
        tag: 'Reestruturação Financeira',
        title: 'Gestão de Passivos & Renegociação de Dívidas',
        desc: 'Renegociação estratégica de endividamentos bancários e com fornecedores, proteção contra penhoras arbitrárias de contas e faturamento, e medidas de preservação da atividade empresarial.',
        when: 'Quando o endividamento compromete o fluxo de caixa ou há risco iminente de execuções judiciais.',
        ctaText: 'Renegociar passivos corporativos'
      },
      {
        id: 'fusoes-aquisicoes',
        tag: 'M&A & Transações',
        title: 'Fusões, Aquisições & Due Diligence (M&A)',
        desc: 'Auditoria jurídica completa (due diligence) para avaliar riscos ocultos tributários, trabalhistas e cíveis na compra ou venda de participações societárias e ativos comerciais.',
        when: 'Antes de assinar memorandos de entendimento (MOU) ou adquirir cotas de outras empresas.',
        ctaText: 'Realizar due diligence de M&A'
      },
      {
        id: 'dissolucao-societaria',
        tag: 'Litígios Societários',
        title: 'Dissolução Parcial de Sociedade & Exclusão de Sócios',
        desc: 'Atuação combativa em litígios entre sócios por quebra de confiança, desvio de finalidade ou concorrência desleal, garantindo apuração justa do valor real das quotas sem prejudicar a empresa.',
        when: 'Em situações de conflito societário insustentável ou saída litigiosa de sócio.',
        ctaText: 'Conduzir disputa societária'
      },
      {
        id: 'blindagem-patrimonial',
        tag: 'Proteção Patrimonial',
        title: 'Holdings Patrimoniais & Proteção dos Sócios',
        desc: 'Estruturação de pessoas jurídicas patrimoniais para segregar os bens pessoais e familiares dos riscos da atividade operacional, resguardando o patrimônio construído contra oscilações de mercado.',
        when: 'Para famílias empresárias e empresários que desejam proteger seus ativos de forma lícita e estruturada.',
        ctaText: 'Criar holding patrimonial'
      }
    ]
  },
  {
    id: 'civil',
    label: 'Civil & Contratos',
    title: 'Direito Civil & Contratos Estratégicos',
    badge: 'Contencioso de Alta Complexidade',
    image: '/assets/contratos.png',
    icon: Scale,
    heroDesc: 'Soluções jurídicas para disputas de alta relevância econômica, responsabilidade civil, cumprimento forçado de obrigações e cobranças de créditos, priorizando sempre a resolução célere e a proteção integral do patrimônio.',
    shortDesc: 'Ações indenizatórias, cobranças de títulos, rescisões contratuais, reintegração de posse e defesas em execuções patrimoniais.',
    causes: [
      {
        id: 'indenizacoes',
        tag: 'Responsabilidade Civil',
        title: 'Ações Indenizatórias por Danos Morais e Materiais',
        desc: 'Atuação especializada em demandas de grande porte por prejuízos patrimoniais, perdas e danos, lucros cessantes, acidentes graves e ofensas severas à reputação de pessoas físicas e jurídicas.',
        when: 'Quando você ou sua empresa sofrerem danos financeiros ou morais causados por conduta ilícita de terceiros.',
        ctaText: 'Ajuizar ação indenizatória'
      },
      {
        id: 'cobrancas-execucoes',
        tag: 'Recuperação de Créditos',
        title: 'Execução de Títulos & Cobranças Judiciais',
        desc: 'Localização estratégica de patrimônio e execução forçada de notas promissórias, cheques, duplicatas, instrumentos de confissão de dívida e contratos inadimplidos, com penhoras céleres via Sisbajud e Renajud.',
        when: 'Para credores que necessitam recuperar valores não pagos e bloquear bens dos devedores com rapidez.',
        ctaText: 'Recuperar valores inadimplidos'
      },
      {
        id: 'descumprimento-contratual',
        tag: 'Rescisões & Cláusulas',
        title: 'Rescisão Contratual & Cobrança de Multas Negociais',
        desc: 'Medidas judiciais para extinguir contratos rompidos injustificadamente pela outra parte, com exigência da multa penal compensatória, restituição de quantias adiantadas e reparação de perdas.',
        when: 'Em caso de atraso injustificado, descumprimento de cláusulas ou vícios na entrega de serviços e obras.',
        ctaText: 'Rescindir contrato com multa'
      },
      {
        id: 'defesa-execucoes',
        tag: 'Defesa do Devedor',
        title: 'Defesa em Execuções & Desbloqueio de Contas',
        desc: 'Apresentação de Embargos à Execução e Exceções de Pré-Executividade contra cobranças com juros abusivos, dívidas prescritas, excesso de execução e liberação urgente de salários e bem de família.',
        when: 'Se você foi surpreendido por uma penhora de contas bancárias ou bloqueio de veículos e imóveis.',
        ctaText: 'Desbloquear bens e contas'
      },
      {
        id: 'posse-propriedade',
        tag: 'Direitos Reais',
        title: 'Ações Possessórias & Conflitos de Divisa',
        desc: 'Medidas liminares urgentes de reintegração de posse, manutenção de posse e interdito proibitório para cessar invasões, turbações e disputas territoriais urbanas e rurais.',
        when: 'Em episódios de invasão de terrenos, turbação de posse ou disputas graves de limites de propriedades.',
        ctaText: 'Proteger posse e propriedade'
      },
      {
        id: 'negociacoes-extrajudiciais',
        tag: 'Mediação Estratégica',
        title: 'Mediação e Resolução Extrajudicial de Conflitos',
        desc: 'Condução de mesas de negociação com advogados da parte contrária para pactuar acordos com segurança jurídica plena e força de título executivo, poupando anos de desgaste judicial.',
        when: 'Para solucionar impasses comerciais ou patrimoniais de forma discreta, rápida e economicamente vantajosa.',
        ctaText: 'Negociar acordo extrajudicial'
      }
    ]
  },
  {
    id: 'tributario',
    label: 'Tributário & Fiscal',
    title: 'Direito Tributário & Fiscal',
    badge: 'Eficiência Fiscal & Recuperação de Ativos',
    image: '/assets/objetos_nadilson.png',
    icon: Receipt,
    heroDesc: 'Atuação consultiva e contenciosa perante o Fisco Federal, Estadual e Municipal para reduzir a carga tributária de forma 100% legal, recuperar impostos pagos a maior e defender o patrimônio da empresa em execuções fiscais.',
    shortDesc: 'Planejamento tributário, recuperação de tributos (PIS/COFINS, ICMS), defesa em autos de infração e emissão de CND.',
    causes: [
      {
        id: 'planejamento-tributario',
        tag: 'Elisão Fiscal Lícita',
        title: 'Planejamento Tributário & Otimização de Regimes',
        desc: 'Estudo das operações da empresa para enquadramento na melhor sistemática fiscal (Simples Nacional, Lucro Presumido ou Real), aproveitamento de créditos fiscais e diminuição substancial do desembolso mensal.',
        when: 'Para empresas que buscam reduzir seus custos operacionais fiscais com respaldo legal seguro.',
        ctaText: 'Otimizar carga tributária'
      },
      {
        id: 'recuperacao-tributos',
        tag: 'Créditos Tributários',
        title: 'Recuperação de Tributos Pagos a Maior (Últimos 5 Anos)',
        desc: 'Levantamento e restituição administrativa ou judicial de impostos cobrados indevidamente, como PIS/COFINS monofásico (autopeças, farmácias, bebidas), exclusão do ICMS da base do PIS/COFINS e tarifas de energia.',
        when: 'Para comércios e prestadores de serviços que nunca auditaram os tributos pagos nos últimos 60 meses.',
        ctaText: 'Calcular créditos tributários'
      },
      {
        id: 'defesa-auto-infracao',
        tag: 'Contencioso Administrativo',
        title: 'Defesa em Autos de Infração (Receita Federal & SEFAZ)',
        desc: 'Impugnações e recursos com argumentos técnicos e precedentes do CARF e dos Tribunais Superiores para anular autuações arbitrárias, cancelando multas confiscatórias antes da inscrição em dívida ativa.',
        when: 'Ao receber uma notificação de fiscalização ou auto de infração da Receita Federal, Estadual ou Municipal.',
        ctaText: 'Impugnar auto de infração'
      },
      {
        id: 'execucao-fiscal',
        tag: 'Dívida Ativa',
        title: 'Defesa em Execução Fiscal & Bloqueio de Ativos',
        desc: 'Medidas para trancar execuções fiscais infundadas, demonstrando prescrição do crédito, vícios na CDA, nulidade de citações e cancelando penhoras sobre faturamento e bens essenciais da empresa.',
        when: 'Quando a Procuradoria da Fazenda ingressar com ação de cobrança judicial contra a empresa.',
        ctaText: 'Suspender execução fiscal'
      },
      {
        id: 'protecao-socios-tributos',
        tag: 'Blindagem de Sócios',
        title: 'Defesa Contra Redirecionamento da Dívida para os Sócios',
        desc: 'Combate jurídico à tentativa do Fisco de responsabilizar os sócios com seus bens pessoais por dívidas tributárias da empresa, demonstrando a ausência de fraude ou dissolução irregular.',
        when: 'Se o Fisco tentar penhorar contas ou imóveis registrados em nome da pessoa física dos sócios.',
        ctaText: 'Blindar patrimônio pessoal'
      },
      {
        id: 'cnd-parcelamentos',
        tag: 'Regularidade Fiscal',
        title: 'Obtenção de CND e Transações Tributárias Especiais',
        desc: 'Ações ordinárias com pedido de tutela para liberar certidões negativas de débito (CND/CPEN), viabilizando participação em licitações e contratação com o poder público, além de adesão a transações fiscais.',
        when: 'Quando pendências no Fisco travarem a emissão da certidão necessária para negócios e contratos públicos.',
        ctaText: 'Emitir certidão negativa (CND)'
      }
    ]
  },
  {
    id: 'trabalhista',
    label: 'Trabalhista Corporativo',
    title: 'Direito do Trabalho Corporativo',
    badge: 'Prevenção & Defesa Patronal',
    image: '/assets/direito_trabalhista.png',
    icon: Briefcase,
    heroDesc: 'Assessoria jurídica focada na segurança do empregador e na redução drástica de passivos trabalhistas. Atuamos com postura combativa nos tribunais e consultoria preventiva contínua nas rotinas de departamento pessoal.',
    shortDesc: 'Defesa em reclamatórias, auditoria preventiva de RH, acordos judiciais homologados e negociações sindicais.',
    causes: [
      {
        id: 'defesa-reclamatorias',
        tag: 'Contencioso Trabalhista',
        title: 'Defesa Técnica em Reclamatórias Trabalhistas',
        desc: 'Construção de defesas e recursos com provas documentais robustas perante as Varas do Trabalho, TRTs e TST, combatendo pedidos infundados de horas extras, equiparação salarial, acúmulo de função e danos morais.',
        when: 'Assim que sua empresa for intimada sobre o ajuizamento de uma reclamação trabalhista.',
        ctaText: 'Apresentar defesa trabalhista'
      },
      {
        id: 'auditoria-preventiva',
        tag: 'Compliance Trabalhista',
        title: 'Auditoria Preventiva & Mapeamento de Riscos de RH',
        desc: 'Revisão detalhada de contratos de trabalho, jornadas, controle de ponto, banco de horas, adicional de insalubridade e benefícios para eliminar brechas que alimentam futuras ações judiciais.',
        when: 'Recomendado para empresas com mais de 10 colaboradores que queiram zerar riscos de contingências.',
        ctaText: 'Agendar auditoria trabalhista'
      },
      {
        id: 'acordo-extrajudicial-clt',
        tag: 'Quitação Plena',
        title: 'Acordo Extrajudicial Homologado na Justiça (Art. 855-B)',
        desc: 'Formalização de rescisões e transações amigáveis com homologação judicial perante o juiz do trabalho, garantindo a quitação plena e geral do contrato, sem risco de processos trabalhistas posteriores.',
        when: 'No desligamento de funcionários com potencial litigioso, cargos de confiança ou valores rescisórios elevados.',
        ctaText: 'Formalizar acordo homologado'
      },
      {
        id: 'terceirizacao-pj',
        tag: 'Contratos PJ',
        title: 'Contratos de Prestação de Serviços (PJ) & Terceirização',
        desc: 'Estruturação contratual rígida para prestadores de serviços autônomos e contratações B2B, assegurando que não haja requisitos fáticos de subordinação que possam gerar pedidos de vínculo empregatício.',
        when: 'Antes de terceirizar atividades ou contratar profissionais na modalidade PJ ou autônomo.',
        ctaText: 'Estruturar contratos PJ seguros'
      },
      {
        id: 'negociacoes-sindicais',
        tag: 'Relações Sindicais',
        title: 'Acordos Coletivos & Negociações Sindicais (ACT/CCT)',
        desc: 'Assessoria jurídica patronal em mesas de negociação com sindicatos laborais, pactuação de Acordos Coletivos de Trabalho personalizados e flexibilização de normas conforme o princípio do legislado sobre o acordado.',
        when: 'Durante a data-base da categoria ou para implementar regimes especiais de jornada e banco de horas.',
        ctaText: 'Assessorar negociação sindical'
      },
      {
        id: 'acidentes-doencas',
        tag: 'Saúde Ocupacional',
        title: 'Defesa em Ações de Acidente de Trabalho e Doença',
        desc: 'Comprovação da ausência de nexo causal, entrega regular de EPIs e cumprimento de normas de segurança ocupacional (NRs), afastando indenizações milionárias por estabilidade provisória e pensões vitais.',
        when: 'Quando houver afastamento de colaborador pelo INSS por acidente de trabalho ou alegação de doença laboral.',
        ctaText: 'Defender em caso de acidente'
      }
    ]
  },
  {
    id: 'imobiliario',
    label: 'Imobiliário & Patrimonial',
    title: 'Direito Imobiliário & Patrimonial',
    badge: 'Segurança Fundiária & Negócios Imobiliários',
    image: '/assets/nadilson_sede.png',
    icon: Home,
    heroDesc: 'Segurança jurídica absoluta para aquisições, regularizações, contratos e disputas envolvendo imóveis urbanos e rurais. Garantimos que sua propriedade tenha matrícula perfeita e plena valorização de mercado.',
    shortDesc: 'Regularização fundiária, usucapião extrajudicial, due diligence imobiliária, contratos de locação comercial e distratos.',
    causes: [
      {
        id: 'regularizacao-imoveis',
        tag: 'Documentação & Matrícula',
        title: 'Regularização Fundiária & Imóveis Sem Escritura',
        desc: 'Procedimentos técnicos em Cartório de Registro de Imóveis e órgãos municipais para regularizar imóveis com contratos de gaveta, recibos de compra e venda, averbações de construção e retificações de área.',
        when: 'Se você adquiriu um imóvel e ainda não possui a escritura pública registrada na matrícula definitiva.',
        ctaText: 'Regularizar matrícula de imóvel'
      },
      {
        id: 'usucapiao',
        tag: 'Aquisição da Propriedade',
        title: 'Usucapião em Cartório (Extrajudicial) e Judicial',
        desc: 'Obtenção da propriedade definitiva de imóveis urbanos ou rurais com base no tempo de posse mansa, pacífica e sem oposição, aproveitando a rapidez dos cartórios extrajudiciais com economia de custos.',
        when: 'Para possuidores que residem ou produzem no imóvel há anos e desejam torná-lo sua propriedade formal.',
        ctaText: 'Ingressar com usucapião'
      },
      {
        id: 'due-diligence-imoveis',
        tag: 'Compra & Venda Segura',
        title: 'Auditoria Prévia em Compra e Venda (Due Diligence)',
        desc: 'Investigação profunda de certidões judiciais cíveis, fiscais, trabalhistas e criminais do vendedor e análise da cadeia dominial do imóvel para evitar que a compra seja anulada por fraude contra credores.',
        when: 'Antes de transferir sinais financeiros ou assinar qualquer promessa de compra de casas, terrenos ou fazendas.',
        ctaText: 'Auditar compra de imóvel'
      },
      {
        id: 'locacao-comercial',
        tag: 'Ponto Comercial',
        title: 'Locação Comercial & Ação Renovatória de Aluguel',
        desc: 'Redação de contratos de locação com garantias firmes e propositura de Ação Renovatória Compulsória para proteger o ponto comercial e o fundo de comércio construído pelo empresário inquilino.',
        when: 'Para lojistas e empresários que desejam garantir judicialmente a renovação do seu contrato de aluguel.',
        ctaText: 'Proteger ponto comercial'
      },
      {
        id: 'despejo-cobranca',
        tag: 'Inadimplência Locatícia',
        title: 'Ações de Despejo por Falta de Pagamento & Cobranças',
        desc: 'Obtenção de liminares rápidas de desocupação do imóvel por inadimplência de aluguéis e taxas condominiais, com execução simultânea dos fiadores e garantias contratuais.',
        when: 'Quando o inquilino deixar de pagar e se recusar a desocupar amigavelmente o imóvel locado.',
        ctaText: 'Ajuizar ação de despejo'
      },
      {
        id: 'distrato-planta',
        tag: 'Atraso de Obra',
        title: 'Distrato Imobiliário & Devolução de Valores da Planta',
        desc: 'Rescisão motivada de promessa de compra de imóvel em construção por atraso além do prazo legal de carência (180 dias), com restituição de 100% dos valores pagos com correção monetária e lucros cessantes.',
        when: 'Se a construtora atrasou a entrega das chaves ou cobra índices abusivos de reajuste (INCC/IGPM).',
        ctaText: 'Solicitar distrato com devolução'
      }
    ]
  },
  {
    id: 'familia',
    label: 'Família & Sucessões',
    title: 'Família & Planejamento Sucessório',
    badge: 'Proteção Patrimonial Familiar',
    image: '/assets/direito_familia.png',
    icon: Users,
    heroDesc: 'Soluções humanas, discretas e tecnicamente rigorosas para proteger o patrimônio construído e garantir uma sucessão tranquila. Atuamos com extrema sensibilidade para harmonizar interesses e resguardar laços familiares.',
    shortDesc: 'Inventários judiciais e extrajudiciais, holding familiar, planejamento sucessório em vida, divórcios e partilhas complexas.',
    causes: [
      {
        id: 'inventario-extrajudicial',
        tag: 'Partilha Célere',
        title: 'Inventários em Cartório (Extrajudiciais) e Judiciais',
        desc: 'Processamento ágil da partilha de herança em cartório (concluído em semanas quando consensual), apuração do ITCMD com a menor alíquota permitida e regularização definitiva dos bens deixados pelo falecido.',
        when: 'Dentro do prazo legal de 60 dias após o falecimento de um familiar para evitar multas sobre o ITCMD.',
        ctaText: 'Iniciar processo de inventário'
      },
      {
        id: 'holding-familiar-sucessao',
        tag: 'Transmissão em Vida',
        title: 'Holding Familiar & Planejamento Sucessório em Vida',
        desc: 'Organização antecipada da sucessão patrimonial através de sociedade holding, doação de quotas com reserva de usufruto e cláusulas restritivas, evitando brigas de herdeiros e as custas altas de um inventário.',
        when: 'Para famílias detentoras de patrimônio imobiliário ou empresas que desejam perpetuar seus ativos em vida.',
        ctaText: 'Planejar sucessão familiar'
      },
      {
        id: 'divorcio-partilha',
        tag: 'Dissolução & Bens',
        title: 'Divórcio Consensual e Litigioso com Partilha de Bens',
        desc: 'Condução estratégica na apuração e divisão de patrimônios complexos (empresas, participações societárias, imóveis e fundos), respeitando com rigor o regime de casamento e evitando ocultação de bens.',
        when: 'Na dissolução da união ou casamento, garantindo a justa divisão de acordo com a lei.',
        ctaText: 'Atendimento para divórcio'
      },
      {
        id: 'pensao-alimenticia',
        tag: 'Alimentos & Guarda',
        title: 'Pensão Alimentícia (Fixação, Revisão e Cobrança)',
        desc: 'Ações para fixação de pensão alimentar conforme as reais possibilidades do pagador e as necessidades dos filhos, revisão por alteração de renda e prisão civil de devedores contumazes de pensão.',
        when: 'Quando o valor pago estiver defasado, houver inadimplência reiterada ou necessidade de fixação inicial.',
        ctaText: 'Regularizar pensão alimentícia'
      },
      {
        id: 'guarda-convivencia',
        tag: 'Melhor Interesse dos Filhos',
        title: 'Regulamentação de Guarda Compartilhada e Visitas',
        desc: 'Estruturação jurídica do plano de convivência parental equilibrado, autorizações judiciais para viagens internacionais e combate a condutas de alienação parental de qualquer dos genitores.',
        when: 'Em situações de desacordo sobre a rotina de convivência e criação dos filhos menores.',
        ctaText: 'Definir plano de guarda'
      },
      {
        id: 'pacto-antenupcial',
        tag: 'Regime de Bens',
        title: 'Pactos Antenupciais & Contratos de União Estável',
        desc: 'Elaboração de escrituras personalizadas de pacto pré-nupcial para escolha fundamentada do regime de bens (separação total, comunhão parcial, participação nos aquestos) e regras de convivência patrimonial.',
        when: 'Antes do casamento ou na formalização de união estável para resguardar patrimônios particulares prévios.',
        ctaText: 'Elaborar pacto antenupcial'
      }
    ]
  },
  {
    id: 'consumidor',
    label: 'Consumidor & Bancário',
    title: 'Direito do Consumidor Especializado',
    badge: 'Combate a Abusividades & Fraudes',
    image: '/assets/direito_consumidor.png',
    icon: FileText,
    heroDesc: 'Defesa enérgica contra abusos cometidos por instituições financeiras, operadoras de saúde, concessionárias e fornecedores de grande porte, restabelecendo o equilíbrio e garantindo indenizações justas.',
    shortDesc: 'Ações revisionais bancárias, golpes e fraudes via PIX, negativação indevida no SPC/Serasa e liminares de saúde.',
    causes: [
      {
        id: 'fraudes-bancarias-pix',
        tag: 'Golpes & Segurança',
        title: 'Golpes Bancários, Fraudes via PIX & Empréstimos Falsos',
        desc: 'Responsabilização judicial de bancos por falhas de segurança em transferências indevidas, golpes do falso funcionário, clonagem de cartões e contratação de empréstimos consignados fraudulentos.',
        when: 'Logo após ser vítima de fraude financeira com recusa do banco em estornar o valor transferido.',
        ctaText: 'Recuperar valores de golpe'
      },
      {
        id: 'juros-abusivos',
        tag: 'Revisão Bancária',
        title: 'Ações Revisionais de Financiamentos & Juros Abusivos',
        desc: 'Recálculo pericial de contratos de financiamento de veículos, cartões de crédito RMC e empréstimos pessoais com taxas que superam a taxa média divulgada pelo Banco Central do Brasil.',
        when: 'Quando as parcelas do financiamento consumirem fatia desproporcional da sua renda devido a juros ilegais.',
        ctaText: 'Revisar contrato bancário'
      },
      {
        id: 'negativacao-indevida',
        tag: 'Nome Limpo & Indenização',
        title: 'Negativação Indevida no SPC/Serasa & Protestos Ilegais',
        desc: 'Pedido de liminar urgente para retirada do nome dos cadastros de restrição ao crédito em caso de dívida já quitada, inexistente ou fraudulenta, com pedido cumulado de indenização por dano moral in re ipsa.',
        when: 'Ao descobrir que seu CPF foi negativado injustamente e ter crédito ou negócios bloqueados.',
        ctaText: 'Limpar nome e pedir indenização'
      },
      {
        id: 'planos-de-saude-liminares',
        tag: 'Direito à Saúde',
        title: 'Negativa de Cobertura de Planos de Saúde & Cirurgias',
        desc: 'Ajuizamento de ações com pedido de liminar de urgência em 24 a 48 horas para obrigar o plano de saúde a custear cirurgias, UTIs, exames de alta complexidade, próteses e medicamentos oncológicos vitais.',
        when: 'Quando a operadora de saúde recusar o custeio de tratamento ou internação prescrita pelo seu médico.',
        ctaText: 'Conseguir liminar de saúde'
      },
      {
        id: 'problemas-aereos',
        tag: 'Direito Aeronáutico',
        title: 'Cancelamentos Abusivos de Voos & Extravio de Bagagem',
        desc: 'Indenização por danos morais e materiais decorrentes de voos cancelados sem assistência adequada, atrasos superiores a 4 horas que causaram perda de compromissos e extravio definitivo de bagagem.',
        when: 'Após ter viagem interrompida ou bagagens perdidas por negligência da companhia aérea.',
        ctaText: 'Cobrar indenização de voo'
      },
      {
        id: 'vicios-veiculos',
        tag: 'Bens Duráveis',
        title: 'Defeitos Ocultos em Veículos e Máquinas (Vício Redibitório)',
        desc: 'Ações para exigir a devolução integral do valor pago ou a substituição do veículo após o surgimento de vícios de motor, câmbio ou estrutura não solucionados pela concessionária no prazo de 30 dias.',
        when: 'Se você comprou um veículo novo ou seminovo com defeitos graves que a garantia não solucionou.',
        ctaText: 'Exigir devolução ou troca'
      }
    ]
  }
];

export default function Areas() {
  const [selectedAreaId, setSelectedAreaId] = useState('previdenciario');
  const detailsRef = useRef(null);

  const selectedArea = AREAS_DATA.find(a => a.id === selectedAreaId) || AREAS_DATA[0];

  const handleSelectArea = (id) => {
    setSelectedAreaId(id);
    if (detailsRef.current) {
      const topOffset = detailsRef.current.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const getWhatsAppLink = (areaTitle, causeTitle = '') => {
    let msg = `Olá! Vim através da página de Áreas de Atuação do site e gostaria de orientação jurídica sobre ${areaTitle}`;
    if (causeTitle) {
      msg += ` especificamente sobre a causa: ${causeTitle}.`;
    } else {
      msg += '.';
    }
    return `${WHATSAPP_BASE}&text=${encodeURIComponent(msg)}&type=phone_number&app_absent=0&utm_source=ig`;
  };

  return (
    <>
      <Header />
      
      <main className="areas-page-wrapper">
        <div className="areas-page-container">
          
          {/* Header Block matching the reference aesthetic */}
          <div className="areas-header-block">
            <h1 className="areas-page-title">Áreas de atuação</h1>
            <p className="areas-page-subtitle">
              Direito empresarial, previdenciário, patrimonial e consultoria jurídica de alta excelência.
            </p>
          </div>

          {/* Large Hero Card - Destaque Visual */}
          <div className="areas-hero-card">
            <img 
              src="/assets/areas_hero_banner.jpg" 
              alt="Reunião de alinhamento e assessoria jurídica - Nadilson Gomes Advocacia" 
              className="areas-hero-card-img" 
            />
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="areas-filter-bar">
            {AREAS_DATA.map(area => (
              <button
                key={area.id}
                onClick={() => handleSelectArea(area.id)}
                className={`areas-filter-btn ${selectedAreaId === area.id ? 'active' : ''}`}
                type="button"
              >
                <span className="filter-btn-dot"></span>
                <span>{area.label}</span>
              </button>
            ))}
          </div>

          {/* DEEP-DIVE SHOWCASE DA ÁREA SELECIONADA */}
          <div className="area-deep-dive" ref={detailsRef}>
            
            {/* Header da Área Selecionada */}
            <div className="area-deep-dive-hero">
              {selectedArea.image && (
                <div className="area-deep-dive-photo-card">
                  <img 
                    src={selectedArea.image} 
                    alt={selectedArea.title} 
                    className="area-deep-dive-photo-img" 
                  />
                </div>
              )}

              <div className="area-deep-dive-left">
                <div className="area-deep-dive-badge-row">
                  <span className="area-deep-dive-badge">
                    <Sparkles size={14} /> {selectedArea.badge}
                  </span>
                </div>
                <h2 className="area-deep-dive-title">{selectedArea.title}</h2>
                <p className="area-deep-dive-desc">{selectedArea.heroDesc}</p>
              </div>

              <div className="area-deep-dive-right">
                <a
                  href={getWhatsAppLink(selectedArea.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="area-deep-dive-cta-btn"
                >
                  <MessageCircle size={20} />
                  <span>Falar com especialista agora</span>
                </a>
                <a
                  href="tel:5573998249898"
                  className="area-deep-dive-phone-btn"
                >
                  <PhoneCall size={18} />
                  <span>(73) 99824-9898</span>
                </a>
              </div>
            </div>

            {/* Causas e Demandas Atendidas da Área */}
            <div className="causes-section-header">
              <span className="causes-section-badge">Demandas & Ações Conduzidas</span>
              <h3 className="causes-section-title">
                Principais causas que tratamos em {selectedArea.title}
              </h3>
              <p className="causes-section-subtitle">
                Conheça os casos e situações jurídicas concretas que resolvemos com rigor técnico e combatividade:
              </p>
            </div>

            {/* Grid de 6 Causas Detalhadas */}
            <div className="causes-grid">
              {selectedArea.causes.map((cause) => (
                <div key={cause.id} className="cause-card">
                  <span className="cause-card-tag">{cause.tag}</span>
                  <h4 className="cause-card-title">{cause.title}</h4>
                  <p className="cause-card-desc">{cause.desc}</p>
                  
                  <div className="cause-card-when">
                    <strong>Quando procurar:</strong> {cause.when}
                  </div>

                  <div className="cause-card-action">
                    <a
                      href={getWhatsAppLink(selectedArea.title, cause.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cause-card-btn"
                    >
                      <span>{cause.ctaText}</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Methodological Value Pillars */}
          <div className="areas-methodology-section">
            <div className="areas-methodology-header">
              <span className="areas-methodology-badge">
                Metodologia
              </span>
              <h2 className="areas-methodology-title">
                Como conduzimos cada caso
              </h2>
            </div>

            <div className="areas-methodology-grid">
              <div className="areas-methodology-card">
                <div className="areas-methodology-icon"><Compass size={28} /></div>
                <h3 className="areas-methodology-card-title">Diagnóstico Estratégico</h3>
                <p className="areas-methodology-card-desc">
                  Análise profunda dos documentos, riscos e oportunidades para traçar o caminho jurídico mais seguro e econômico.
                </p>
              </div>

              <div className="areas-methodology-card">
                <div className="areas-methodology-icon"><Award size={28} /></div>
                <h3 className="areas-methodology-card-title">Rigor Técnico & Ética</h3>
                <p className="areas-methodology-card-desc">
                  Aplicação da jurisprudência mais recente e atuação combativa em defesa integral dos interesses do nosso cliente.
                </p>
              </div>

              <div className="areas-methodology-card">
                <div className="areas-methodology-icon"><Lock size={28} /></div>
                <h3 className="areas-methodology-card-title">Sigilo & Atendimento Próximo</h3>
                <p className="areas-methodology-card-desc">
                  Comunicação clara, relatórios periódicos e confidencialidade absoluta em todas as etapas da demanda.
                </p>
              </div>
            </div>
          </div>

          {/* Final Call to Action Banner */}
          <div className="areas-cta-banner">
            <div className="areas-cta-content">
              <span className="areas-cta-badge">
                <CheckCircle2 size={16} /> Consulta Jurídica Especializada
              </span>
              <h2 className="areas-cta-title">
                Precisa de orientação jurídica estratégica para o seu caso?
              </h2>
              <p className="areas-cta-desc">
                Nossa equipe de advogados especialistas está pronta para avaliar a sua situação com atenção personalizada, agilidade e total discrição.
              </p>
            </div>

            <div className="areas-cta-actions">
              <a 
                href={getWhatsAppLink('Geral')} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="areas-cta-primary-btn"
              >
                <MessageCircle size={20} />
                <span>Falar com Advogado no WhatsApp</span>
              </a>

              <a 
                href="tel:5573998249898" 
                className="areas-cta-secondary-btn"
              >
                <PhoneCall size={18} />
                <span>Ligue para (73) 99824-9898</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
