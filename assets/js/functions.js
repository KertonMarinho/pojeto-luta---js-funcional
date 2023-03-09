//personagen padrão
const defaultCharacter  = {
    name: "",
    life: 1,
    maxLife: 1,
    attack : 0,
    defense :0
}
//pesonagem guerreio(knight)
function createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack :100,
        defense:  8
    }

}
//pesonagem mago(sorrcerer)
const createSorcerer = () => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack :14,
        defense: 3
    }
}
//personagem Monstro
const createLitleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Litle Monster',
        life: 40,
        maxLife: 40,
        attack :4,
        defense:  4
    }
}
//personagem Monstro
const createBigMonster =  = () {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack : 16,
        defense:  6
    }
}