class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        let attack = ""
        switch (this.type) {
            case "wizard":
                attack = "used spell"
                break
            case "warrior":
                attack = "used sword"
                break
            case "monk":
                attack = "used marcial arts"
                break
            case "ninja":
                attack: "used shuriken"
                break            
            default :
                attack = 'used a unknown attack'    
            }
            console.log(`O ${this.type} attacked using ${this.attack}`)
    }
}

const wizard = new Hero("Jubileu", 33,"wizard");

wizard.attack()

const warrior = new Hero("Cleitin dos machado", 25, "warrior")

warrior.attack()
