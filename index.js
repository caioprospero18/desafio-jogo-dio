class TypeHero{
    constructor(type){
        this.type = type
    }

    defTypeHero(){
        let x = Math.floor(Math.random() * 4) + 1

        switch(x){
            case 1:
                this.type = "Guerreiro"
                break
            case 2:
                this.type = "Mago"
                break
            case 3:
                this.type = "Monge"
                break
            default:
                this.type = "Ninja"
                break
        }
        return this.type
    }
}
class Hero extends TypeHero{
    constructor(name, age, type){
        super(type)
        this.name = name
        this.age = age
        this.type = type
        this.qtdXp = 0
    }

    attack(type){
        let attackType
        if(this.type === "Guerreiro"){
            attackType = "Espada"
        } else if (this.type === "Mago"){
            attackType = "Magia"
        } else if (this.type === "Monge"){
            attackType = "Artes Marciais"
        } else {
            attackType = "Shuriken"
        }
        return attackType
    }

    calculateTotalXp(name, qtdXp){
        let nivel
        if (qtdXp <= 5000){
            nivel = 1
        } else if (qtdXp > 5000 && qtdXp <= 8000){
            nivel = 2 
        } else if (qtdXp > 8000 && qtdXp <= 12000){
            nivel = 3
        } else if (qtdXp > 12000 && qtdXp <= 17000){
            nivel = 4
        } else if (qtdXp > 17000 && qtdXp <= 23000){
            nivel = 5
        } else if (qtdXp > 23000 && qtdXp <= 30000){
            nivel = 6
        } else if (qtdXp > 30000 && qtdXp <= 38000){
            nivel = 7 
        } else if (qtdXp > 38000 && qtdXp <= 47000){
            nivel = 8
        } else if (qtdXp > 47000 && qtdXp <= 57000){
            nivel = 9
        }else{
            nivel = 10
        }
        console.log(`O personagem ${name} está no nivel: ${nivel}`)
    }
    attackOrMiss(name){
        let j = Math.floor(Math.random() * 2 + 1)
        let qtdXp
        let attackType = this.attack()
        switch(j){
            case 1:
                qtdXp = Math.floor(Math.random() * 2000) + 1000
                console.log(`${name} do tipo ${this.type} atacou usando ${attackType} e ganhou ${qtdXp} de exp.`)
                break
            case 2:
                qtdXp = 0
                console.log(name + " errou o ataque.")
                break
    
        }
        this.qtdXp += qtdXp
    }

    qtdTryAttack(name){
        for(let i=0; i < 20; i++){
            this.attackOrMiss(name)
        }
    }
}
tipo = new TypeHero()
heroi = new Hero("Capa", 28, tipo.defTypeHero())
heroi.qtdTryAttack(heroi.name)
heroi.calculateTotalXp(heroi.name, heroi.qtdXp)






