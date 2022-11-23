const MonsterFactory = function () {

    // A Factory Method returns one of a variety of objects depending on an argument passed to it
    this.createMonster = function (type) {
        let monster;

        // Instantiate a new instance depending on type
        switch (type) {
            case 'common':
                monster = new common();
                break;
            case 'rare':
                monster = new rare();
                break;
            case 'elite':
                monster = new elite();
                break;
            case 'boss':
                monster = new boss();
                break;
        }

        // Every monster should have a type property
        monster.type = type;

        // Every monster should have an info property
        monster.info = function () {
            console.log(`Hi I am a ${this.type} monster.`);
            console.log(`I have ${this.hitPoints} hitpoints.`);
        }
        
        return monster;
    }
};

// The entire point of this function is to give whatever object invokes it a hitPoints property 
const common = function () {
    this.hitPoints = "25";
};

const rare = function () {
    this.hitPoints = "80";
};

const elite = function () {
    this.hitPoints = "190";
};

const boss = function () {
    this.hitPoints = "970";
};

function run() {

    var monsters = [];
    var factory = new MonsterFactory();

    monsters.push(factory.createMonster("common"));
    monsters.push(factory.createMonster("rare"));
    monsters.push(factory.createMonster("elite"));
    monsters.push(factory.createMonster("boss"));

    for (var i = 0, len = monsters.length; i < len; i++) {
        monsters[i].info();
    }
}

run();