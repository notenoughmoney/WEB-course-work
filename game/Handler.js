class Handler {
    
    static handler = e => {
        if (e.detail.pos[0] == 0)
            e.detail.where.startCutscene([
                {type: "changeMap", map: "lev2"}
            ]);
    }

}