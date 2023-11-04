class Personagem :
    def __init__(self,nome = 'Desconhecido',vida = 0 ,mana = 0,nivel = 1  , ataque = 0 , defesa = 0 , agilidade = 0 , inteligencia = 0 , sorte = 0,xp = 1,itens = [] ):
        self.nome = nome
        self.vida = vida
        self.mana = mana
        self.nivel = nivel
        self.xp = xp
        self.experenciaMax = 100 * (self.nivel * 0.20) 
        self.ataque = ataque
        self.defesa = defesa
        self.agilidade = agilidade
        self.inteligencia = inteligencia
        self.sort = sorte

    def ganharExperiencia(self,experencia):
        self.xp += experencia
        print(self.xp)
        
        if (self.xp >= self.experenciaMax):
            self.nivel += 1
            subirDeNivel()
            self.xp = self.xp - self.experenciaMax
            print(f'{self.nome} subiu de Nivel para O proximo nivel faltam {self.experenciaMax - self.xp} de experiencia')
    def subirDeNivel(self):
        self.vida += 10
        self.mana += 10
        self.ataque += 10
        self.defesa += 10
        self.agilidade += 10
        self.inteligencia += 10
    def atacar(self,alvo):
        dano = self.ataque - alvo.defesa * 0.20 # implementar uma funcao para a defesa varia de acordo com nivel
        alvo.vida -=  dano
        print(f'{self.nome} causou {dano} de em {alvo.nome}')
        print(f'{alvo.nome} esta com {alvo.vida} de vida')
        if(alvo.vida <= 0):
            print(f'{alvo.nome} foi derrotado !!!!')
class Equipamento :
    def __init__(self,nome,vida = 0 ,mana = 0, ataque = 0 , defesa = 0 , agilidade = 0 , inteligencia = 0 , sorte = 0):
        self.nome = nome
        self.vida = vida
        self.mana = mana
        self.ataque = ataque
        self.defesa = defesa
        self.agilidade = agilidade
        self.inteligencia = inteligencia
        self.sort = sorte
    #

    
    

