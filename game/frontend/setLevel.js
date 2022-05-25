function setLevel(n) {

    overworld.map.startCutscene([
        {type: "changeMap", map: `lev${n}`}
    ]);
    
}