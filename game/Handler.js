class Handler {

    static hitHandler = e => {
        //e.detail.where.Enemy.die();
        console.log(e.detail.where.overworld.Enemy.die());
    }
    
    // static hitHandler = e => {
    //     if (e.detail.pos[0] == 0)
    //         e.detail.where.startCutscene([
    //             {type: "changeMap", map: "lev2"}
    //         ]);
    // }

}