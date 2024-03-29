//personagen padrão
const defaultCharacter  = {
    name: '',
    life: 1,
    maxLife: 1,
    attack : 0,
    defense :0
}
//pesonagem guerreio(knight)
const createKnight = (name) => {
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
const createBigMonster= () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack : 16,
        defense:  6
    }
}
const stage = {
    fighter1: null,
    fighter2: null,
    fighter1E1: null,
    fighter2E1: null,

    start(fighter1, fighter2,fighter1E1, fighter2E1){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1E1 = fighter1E1;
        this.fighter2E1 = fighter2E1;
        this.fighter1E1.querySelector('.attackButton').addEventListener('click',()=> this.doAttack(this.fighter1,  this.fighter2));
        this.fighter2E1.querySelector('.attackButton').addEventListener('click',()=> this.doAttack(this.fighter2,  this.fighter1));

        this.update();
    },
    update(){
        //atualiza as informações do fighter 1
        this.fighter1E1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        //CALCULO DA VIDA
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife)* 100;
        //para aparecer a porcentagem
        this.fighter1E1.querySelector('.bar').style.width = `${f1Pct}%`

        //atuaLIZA AS INFORMAÇÕES DO FIGTHER 2
        this.fighter2E1.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
         //CALCULO DA VIDA
         let f2Pct = (this.fighter2.life / this.fighter2.maxLife)* 100;
         //para aparecer a porcentagem
         this.fighter2E1.querySelector('.bar').style.width = `${f2Pct}%`

    
    },
    doAttack(attacking, attacked){
        if(attacking.life <= 0 ||  attacked.life <= 0){
            log.addMessage('Algem esta morto, não pode atacar');
            return;

        }
        const attackFactor = (Math.random() *2).toFixed(2);
        const defenseFactor = (Math.random() *2).toFixed(2);
       

        const actualAttack = attacking.attack  *  attackFactor;
        const actualDefense = attacked.defense * defenseFactor;
        
        if (actualAttack <= actualDefense) {
            attacked.life  -=  actualDefense;
            attacked.life  = attacked.life < 0 ? 0 :attacked.life;
          log.addMessage(`${attacked.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
         }else {
           log.addMessage(`${attacked.name} conseguiu defender ...`);

        }
        this.update();
        }
}
//logar e aparecer as mensagens
const log = {
    list:[],
    addMessage(msg) {
        //adciona no array
        this.list.push(msg);
        //mostar na tela(função)
        this.render();
    },
    //função para EXIBER AS MENSAGENS
    render() {
        const logE1 = document.querySelector('.log');

        logE1.innerHTML ='';
        for(let i  in this.list) {
            logE1.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }

}
