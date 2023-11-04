import random
class No():
    def __init__(self,dado):
        self.dado = dado
        self.proximo = []
        self.passou = 0
# pegar uma string dividila 
# depois inserir cada um 
# depois verificar se  existe um igual a ser inserida  e separa os espacos em brancos
# se houver(retorna valor) entao a ser inserida sera o proximo dela  caso contrario sera o proximo da anterior

class listaEncadeada():
    def __init__(self):
        self.lista = None
        self.lst = []
    def busca(self,palavra,noAtual = None):
        lista = self.lst 
        for i in lista :
            if(i.dado == palavra):
                return i

                            # z = None
                            # if(noAtual == None):
                            #     noAtual = self.lista
                            # if(noAtual.dado == palavra):
                            #     return noAtual
                            # elif(noAtual.proximo):
                            #     # print(f'A palavra é : {palavra}')
                            #     # print(noAtual.proximo[len(noAtual.proximo)-1].dado)
                            #     for i in range(0,len(noAtual.proximo)):
                            #         # um no fica apontando para outro e dando voltas
                            #         print(palavra,noAtual.dado,len(noAtual.proximo),noAtual.passou)
                            #         if(noAtual.passou < len(noAtual.proximo)):
                            #             noAtual.passou += 1
                            #             z = self.busca(palavra,noAtual.proximo[i])
                            #             noAtual.passou = 0
                            #             if(z is None):
                            #                 continue 
                            #             else:
                            #                 if(z.dado == palavra):
                            #                     return z 
                            # else:
                            #     pass
    def comparar(self,pesq ,ant):
        # print(ant.proximo)
        for i in range(0,len(ant.proximo)):
            if(i is None):
                continue
            else:
                if(ant.proximo[i].dado == pesq.dado):
                    return True 
        return False

    def append(self,arr,noAtual = None):
        array = arr.split(' ')
        anterior = None # remover ''
        controle = 0
        if(noAtual == None):
            noAtual = self.lista
        if(self.lista == None):
            x = No(array[0])
            self.lista = x
            self.lst.append(x)
        for i in range (0,len(array)):
            # print(f'A array : {array[i]}')
            if(array[i] == ''):
                if(array[i -1] != ''):
                    anterior = array[i -1]
                    controle = 1
                    # removendo espaço extra
                pass
            else:
                if(controle == 1):
                    # print(f'O anterior é {anterior}')
                    controle = 0
                    pass
                else:
                    anterior = array[i -1]
                pesq = self.busca(array[i],noAtual)
                if(pesq == None):
                    # cenario se houver a anterior e não houver a atual . e ligar anterior a atual 
                    ant = self.busca(anterior, noAtual)
                    # print(ant.dado + 'linha 57')
                    x = No(array[i])
                    ant.proximo.append(x)
                    self.lst.append(x)
                    
                else:
                    # se houver a anterior e a atual e anterior não ligar a atual 
                    ant = self.busca(anterior, noAtual) 
                    if(ant != None):
                        comparar = self.comparar(pesq , ant)
                        if(comparar == False):
                            ant.proximo.append(pesq)
                    
    def imprimir(self,noAtual = None ):
        if(noAtual == None):
            noAtual = self.lista
            # print(noAtual.dado)
        # if(noAtual.dado == 'inserida'):
        #         print(noAtual.proximo)


        # retornar algum valor como false ?
        if(noAtual.proximo):     
            for i in range(0,len(noAtual.proximo)):
                #noAtual.passou < i + 1
                if(noAtual.passou < i + 1):
                    #print( f'|||  {noAtual.dado} lst {len(noAtual.proximo)} e pass{noAtual.passou} passprox{noAtual.proximo[i].passou} len{len(noAtual.proximo[i].proximo)} dd{noAtual.proximo[i].dado} |||||' , end= ' ')
                    print( noAtual.dado , noAtual.passou , end= ' ')
                    noAtual.passou += 1
                    self.imprimir(noAtual.proximo[i])
                    
        if(noAtual.proximo == [] and noAtual.passou < 1):
            noAtual.passou += 1
            print(f'Olaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa {noAtual.dado}')
    def escolher (self , noAtual = None, passagem = 0 , ultEscolha = None):
        if(noAtual == None):
            noAtual = self.lista
        if( passagem < 100):
            print(noAtual.dado,'', end='')
            passagem += 1
            if(len(noAtual.proximo) > 1):
                ultEscolha = noAtual
                noAtual = random.choice(noAtual.proximo)
                self.escolher(noAtual,passagem, ultEscolha)
            else:
                if(noAtual == []):
                    self.escolher(ultEscolha,passagem,ultEscolha)
                else:
                    try:
                        noAtual = noAtual.proximo[0]
                        self.escolher(noAtual,passagem,ultEscolha)
                    except:
                        print(noAtual.dado)
        else:
            print('.')
                
        
        
            
        
           

lst = listaEncadeada()
# arr = 'pegar uma string dividila depois              inserir cada um depois        verificar             se existe um igual a ser inserida   '
#arr = 'A Wikipédia não exige que seus usuários forneçam a sua identificação.[89] No entanto, como a Wikipédia cresce através do seu modelo não convencional de construção de enciclopédia, "Quem escreve a Wikipédia?" tornou-se uma das perguntas mais frequentes sobre o projeto, muitas vezes com uma referência para outros projetos de Web 2.0 como o Digg.[90] Jimmy Wales afirmou certa vez que apenas "uma comunidade... um grupo dedicado de algumas centenas de voluntários" faz a maior parte das contribuições para a Wikipédia e que o projeto é, portanto, "como qualquer organização tradicional". Wales realizou um estudo onde constatou que mais de 50% de todas as edições são feitas por apenas 0,7% dos usuários (ou seja, 524 pessoas em 2006, ano da pesquisa). Este método de avaliação de contribuições foi posteriormente contestada por Aaron Swartz, que observou que vários artigos de uma amostragem que efetuou tinham grande parte do seu conteúdo (medida pelo número de caracteres) contribuído por usuários com baixas contagens de edições.[91] Um estudo de 2007 realizado por pesquisadores da Faculdade de Dartmouth descobriu que "colaboradores anônimos e pouco frequentes na Wikipédia são confiáveis e uma fonte de conhecimento tanto quanto os contribuintes que se inscrevem no site".[92] Embora alguns contribuintes sejam autoridades em suas áreas, a Wikipédia exige que mesmo os seus contributos sejam apoiados por publicações e fontes verificáveis. A preferência do projeto pelo consenso sobre credenciais foi rotulada como "anti-elitismo". Gráfico histórico do número de wikipedistas considerados ativos pela Fundação Wikimedia. Em um estudo de 2003 sobre a comunidade da Wikipédia, a doutoranda em economia Andrea Ciffolilli argumentou que os baixos custos de transação de participar de software wiki criaram um catalisador para o desenvolvimento colaborativo e que uma abordagem de "construção criativa" incentiva a participação.[93] Em seu livro de 2008, O Futuro da Internet e Como Pará-lo, Jonathan Zittrain, do Oxford Internet Institute e do Berkman Center for Internet & Society, pertencente à Harvard Law School, cita o sucesso da Wikipédia como um caso de como a colaboração aberta tem fomentado a inovação na web.[94] Um estudo de 2008 revelou que usuários da Wikipédia eram menos agradáveis e abertos, embora mais conscientes, que os não-usuários da Wikipédia.[95][96] Um estudo de 2009 sugeriu que havia "indícios de uma crescente resistência da comunidade da Wikipédia a novos conteúdos".[97] Na OOPSLA de 2009, o CTO da Wikimedia Brion Vibber fez uma apresentação intitulada "Otimização de Desempenho da Comunidade: Fazendo a sua Equipe Funcionar Tão Bem Quanto o Seu Site" em que discutiu os desafios de lidar com as contribuições de uma grande comunidade e comparou o processo com o de desenvolvimento de softwares.[98] O The New York Times publicou uma coluna com uma pesquisa sobre a Wikipédia no momento do seu décimo aniversário citando que "a Wikimedia Foundation colaborou em um estudo da base contribuinte da Wikipédia e descobriu que ela era composta por apenas 13% de mulheres e a média de idade de um contribuinte estava entre os 20 e 30 anos, de acordo com o estudo conjunto de um centro da Universidade das Nações Unidas e da Universidade de Maastricht", e também observa que "as pesquisas sugerem que menos de 15% de suas centenas de milhares de colaboradores são mulheres". A meta estabelecida por Sue Gardner, diretora executiva da Fundação Wikimedia, é ver as contribuições femininas aumentarem para 25% até 2015.[99] '
arr = 'Brasil (localmente [bɾaˈziw][b]), oficialmente República Federativa do Brasil (? escutar),[7] é o maior país da América do Sul e da região da América Latina, sendo o quinto maior do mundo em área territorial (equivalente a 47,3% do território sul-americano), com 8 510 417,771 km²,[1][8][9] e o sétimo em população[10][11] (com 203 milhões de habitantes, em agosto de 2022).[12] É o único país na América onde se fala majoritariamente a língua portuguesa e o maior país lusófono do planeta,[13] além de ser uma das nações mais multiculturais e etnicamente diversas, em decorrência da forte imigração oriunda de variados locais do mundo. Sua atual Constituição, promulgada em 1988, concebe o Brasil como uma república federativa presidencialista,[7] formada pela união dos 26 estados, do Distrito Federal e dos 5 570 municípios.[7][14][nota 1]Banhado pelo Oceano Atlântico, o Brasil tem um litoral de 7 491 km[13] e faz fronteira com todos os outros países sul-americanos, exceto Chile e Equador, sendo limitado a norte pela Venezuela, Guiana, Suriname e pelo departamento ultramarino francês da Guiana Francesa; a noroeste pela Colômbia; a oeste pela Bolívia e Peru; a sudoeste pela Argentina e Paraguai e ao sul pelo Uruguai. Vários arquipélagos formam parte do território brasileiro, como o Atol das Rocas, o Arquipélago de São Pedro e São Paulo, Fernando de Noronha (o único destes habitado por civis) e Trindade e Martim Vaz.[13] O Brasil também é o lar de uma diversidade de animais selvagens, ecossistemas e de vastos recursos naturais em uma grande variedade de habitats protegidos.[13] O território que atualmente forma o Brasil foi oficialmente descoberto pelos portugueses em 22 de abril de 1500, em expedição liderada por Pedro Álvares Cabral. Segundo alguns historiadores como Antonio de Herrera e Pietro dAnghiera, o encontro do território teria sido três meses antes, em 26 de janeiro, pelo navegador espanhol Vicente Yáñez Pinzón, durante uma expedição sob seu comando. A região, então habitada por indígenas ameríndios divididos entre milhares de grupos étnicos e linguísticos diferentes, cabia a Portugal pelo Tratado de Tordesilhas, e tornou-se uma colônia do Império Português.[16] O vínculo colonial foi rompido, de fato, quando em 1808 a capital do reino foi transferida de Lisboa para a cidade do Rio de Janeiro, depois de tropas francesas comandadas por Napoleão Bonaparte invadirem o território português.[17] Em 1815, o Brasil se torna parte de um reino unido com Portugal. Dom Pedro I, o primeiro imperador, proclamou a independência política do país em 1822. Inicialmente independente como um império, período no qual foi uma monarquia constitucional parlamentarista, o Brasil tornou-se uma república em 1889, em razão de um golpe militar chefiado pelo marechal Deodoro da Fonseca (o primeiro presidente), embora uma legislatura bicameral, agora chamada de Congresso Nacional, já existisse desde a ratificação da primeira Constituição, em 1824.[17] Desde o início do período republicano, a governança democrática foi interrompida por longos períodos de regimes autoritários, até um governo civil e eleito democraticamente assumir o poder em 1985, com o fim da ditadura militar.[18] Como potência regional e média,[19] a nação tem reconhecimento e influência internacional, sendo que também é classificada como uma potência global emergente[20] e como uma potencial superpotência por vários analistas.[21] O PIB nominal brasileiro foi o décimo segundo maior do mundo[22][23] e o oitavo por paridade do poder de compra (PPC) em 2020.[24] O país é um dos principais celeiros do planeta, sendo o maior produtor de café dos últimos 150 anos,[25] além de ser classificado como uma economia de renda média-alta pelo Banco Mundial[26] e como um país recentemente industrializado, que detém a maior parcela de riqueza global da América do Sul. No entanto, o país ainda mantém níveis notáveis de corrupção, criminalidade e desigualdade social. É membro fundador da Organização das Nações Unidas (ONU), G20, BRICS, Comunidade dos Países de Língua Portuguesa (CPLP), União Latina, Organização dos Estados Americanos (OEA), Organização dos Estados Ibero-americanos (OEI) e Mercado Comum do Sul (Mercosul). As raízes etimológicas do termo "Brasil" são de difícil reconstrução. O filólogo Adelino José da Silva Azevedo postulou que se trata de uma palavra de procedência celta (uma lenda que fala de uma "terra de delícias", vista entre nuvens), mas advertiu também que as origens mais remotas do termo poderiam ser encontradas na língua dos antigos fenícios. Na época colonial, cronistas da importância de João de Barros, frei Vicente do Salvador e Pero de Magalhães Gândavo apresentaram explicações concordantes acerca da origem do nome "Brasil". De acordo com eles, o nome "Brasil" é derivado de "pau-brasil", designação dada a um tipo de madeira empregada na tinturaria de tecidos. Na época dos descobrimentos, era comum aos exploradores guardar cuidadosamente o segredo de tudo quanto achavam ou conquistavam, a fim de explorá-lo vantajosamente, mas não tardou em se espalhar na Europa que haviam descoberto certa "ilha Brasil" no meio do oceano Atlântico, de onde extraíam o pau-brasil (madeira cor de brasa).[27] Antes de ficar com a designação atual, "Brasil", as novas terras descobertas foram designadas de: Monte Pascoal (quando os portugueses avistaram terras pela primeira vez), Ilha de Vera Cruz, Terra de Santa Cruz, Nova Lusitânia, Cabrália, Império do Brasil e Estados Unidos do Brasil.[28] Os habitantes naturais do Brasil são denominados brasileiros, cujo gentílico é registrado em português a partir de 1706[29] e referia-se inicialmente apenas aos que comercializavam pau-brasil.[30] Embora supostamente o português Duarte Pacheco Pereira[43] e o navegador espanhol Vicente Yáñez Pinzón tenham sido os primeiros europeus a chegar à terra agora chamada de Brasil (cuja viagem de Pinzón terá sido documentada ao atingir o cabo de Santo Agostinho, no litoral de Pernambuco, em 26 de janeiro de 1500), o território foi reivindicado por Portugal em 22 de abril do mesmo ano, com a chegada da frota portuguesa comandada por Pedro Álvares Cabral a Porto Seguro, no atual estado da Bahia, em função do Tratado de Tordesilhas.[16][44] A colonização do Brasil foi efetivamente iniciada em 1534, quando D. João III dividiu o território em quatorze capitanias hereditárias,[45][46] mas esse arranjo se mostrou problemático, uma vez que apenas as capitanias de Pernambuco e São Vicente prosperaram. Então, em 1549, o rei atribuiu um governador-geral para administrar toda a colônia.[46][47] Os portugueses assimilaram algumas das tribos nativas,[48] enquanto outras foram escravizadas ou exterminadas por doenças europeias a que não tinham imunidade,[49][50] ou em longas guerras travadas nos dois primeiros séculos de colonização, entre os grupos indígenas rivais e seus aliados europeus.[51][52][53] Em meados do século XVI, quando o açúcar de cana tornou-se o mais importante produto de exportação do Brasil,[54] os portugueses iniciaram a importação de escravos africanos, comprados nos mercados de escravos da África Ocidental.[55][56] Assim, esses começaram a ser trazidos ao Brasil, inicialmente para lidar-se com a crescente demanda internacional do produto, naquele que foi denominado ciclo do açúcar.[57][58] Ignorando o tratado de Tordesilhas de 1494, os portugueses, através de expedições conhecidas como bandeiras, paulatinamente avançaram sua fronteira colonial na América do Sul para onde se situa a maior parte das atuais fronteiras brasileiras,[59][60] tendo passado os séculos XVI e XVII defendendo tais conquistas contra potências rivais europeias.[60] Desse período destacam-se os conflitos que rechaçaram as incursões coloniais francesas (no Rio de Janeiro em 1567 e no Maranhão em 1615) e que, após o fim da União Ibérica, expulsaram os holandeses do nordeste, na chamada Insurreição Pernambucana — sendo o conflito com os holandeses parte integrante da Guerra Luso-Holandesa.[60][61] Ao final do século XVII, devido à concorrência colonial as exportações de açúcar brasileiro começaram a declinar, mas a descoberta de ouro pelos bandeirantes na década de 1690 abriu um novo ciclo para a economia extrativista da colônia, promovendo uma febre do ouro no Brasil, que atraiu milhares de novos colonos, vindos não só de Portugal, mas também de outras colônias portuguesas ao redor do mundo, o que por sua vez acabou gerando conflitos (como a Guerra dos Emboabas), entre os antigos colonos e os recém-chegados.[62] Para garantir a manutenção da ordem colonial interna, além da defesa do monopólio de exploração econômica do Brasil, o foco da administração colonial portuguesa concentrou-se tanto em manter sob controle e erradicar as principais formas de rebelião e resistência dos escravos (a exemplo do Quilombo dos Palmares),[63] como em reprimir todo movimento por autonomia ou independência política (como a Inconfidência Mineira).[64][65] No final de 1807, forças espanholas e napoleônicas ameaçaram a segurança de Portugal Continental, fazendo com que o Príncipe Regente D. João VI, em nome da rainha Maria I, transferisse a corte real de Lisboa ao Brasil.[66] O estabelecimento da corte portuguesa trouxe o surgimento de algumas das primeiras instituições brasileiras, como bolsas de valores locais[67] e um banco nacional, e acabou com o monopólio comercial que Portugal mantinha sobre o Brasil, liberando as trocas comerciais com outras nações. Em 1809, em retaliação por ter sido forçado a um "autoexílio" no Brasil, o príncipe regente ordenou a conquista portuguesa da Guiana Francesa.[68] Com o fim da Guerra Peninsular em 1814, os tribunais europeus exigiram que a rainha Maria I e o príncipe regente D. João regressassem a Portugal, já que consideravam impróprio que representantes de uma antiga monarquia europeia residissem em uma colônia. Em 1815, para justificar a sua permanência no Brasil, onde a corte real tinha prosperado nos últimos seis anos, o Reino Unido de Portugal, Brasil e Algarves foi criado, estabelecendo, assim, um Estado monárquico transatlântico e pluricontinental.[69] No entanto, isso não foi suficiente para acalmar a demanda portuguesa pelo retorno da corte para Lisboa, como a revolução liberal do Porto exigiria em 1820, e nem o desejo de independência e pelo estabelecimento de uma república por grupos de brasileiros, como a Revolução Pernambucana de 1817 mostrou.[69] Em 1821, como uma exigência de revolucionários que haviam tomado a cidade do Porto,[70] D. João VI foi incapaz de resistir por mais tempo e partiu para Lisboa, onde foi obrigado a fazer um juramento à nova constituição, deixando seu filho, o príncipe Pedro de Alcântara, como Regente do Reino do Brasil.[71'


lst.append(arr)
#lst.imprimir()
# print()
# print(lst.lst[1].proximo[8].proximo[1].passou)
print()
lst.escolher()


# print(lst.lista.proximo[0].proximo[0].proximo[0].proximo[0].proximo[1].proximo[0].proximo[0].proximo[0].proximo[0].proximo[0].dado)

#__________________________________________________________________
# Para fazer :
# *
# * imprimir a passagem
# *  # retornar algum valor como false ?
#





# arr = 'a  b  b         c  d'
# arr = arr.split(' ')
# print(arr)
# i = 0 
# troca = 1
# # while(troca):
# #     troca = 0
# #     if(arr[i] == ''):
# #         troca = 
# #         arr.pop(i)
# #     if( i > len(arr)):
# #         i = 0
    
# print(arr)
# n1 = No('No1')
# n2 = No('No2')
# n3 = No('No3')
# n4 = No('No4')
# n5 = No('No5')
# n6 = No('No6')
# n7 = No('No7')
# n8 = No('No8')
# n9 = No('No9')
# n1.proximo.append(n2) 
# n1.proximo.append(n3) 
# n1.proximo.append(n4) 
# g = n1.proximo[0]
# g.proximo.append(n5)
# g.proximo.append(n6)
# g.proximo.append(n7)
# g.proximo.append(n8)
# # n1.proximo[0].proximo.append(n9)
# # print(n1.proximo[1].proximo[2].dado)
# x =[55,25,32]
# # print(len(n1.proximo[0].proximo  ) > 0)
# def funrec(x):
#     # print(x.dado)
#     z = None
#     if(x.dado == 'No4'):
#         return x
#     elif(x.proximo):
#         print(len(x.proximo))
        
#         for i in range(0,len(x.proximo)):
#             print(x.proximo[i].dado)
#             z = funrec(x.proximo[i])
#             if(z is None):
#                 continue 
#             else:
#                 if(z.dado == 'No4'):
#                     return z
        
#     else:
#         pass
        
# print(funrec(n1).dado, 55)


