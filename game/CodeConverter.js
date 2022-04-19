class CodeConverter {


    static insert(str, substr, pos) {
        var array = str.split('');
        array.splice(pos, 0, substr);
        return array.join('');
    }

    static convert(code) {

        // //создаём массив со строками кода
        // var stringArray = code.split("\n");

        // let readyString = "";

        // //если есть пустые строчки, то удаляем
        // for (let i = 0; i <stringArray.length; i++) {
        //     if (stringArray[i] == "") {
        //         stringArray.splice(i, 1);
        //         i--;
        //     }
        // }

        // //конкатенируем каждый элемент массива с await this.
        // //если он начинается с имени героев
        // for (let i = 0; i <stringArray.length; i++) {
        //     if (
        //         stringArray[i].indexOf("Naruto" + 1) || 
        //         stringArray[i].indexOf("Sakura" + 1) ||
        //         stringArray[i].indexOf("Sasuke" + 1) ||
        //         stringArray[i].indexOf("Enemy" + 1) ||
        //         stringArray[i].indexOf("Itachi" + 1)
        //     ) 
        //         stringArray[i] = "await this." + stringArray[i];
        //     readyString += stringArray[i] + "\n";
        // }

        //, "Sakura", "Sasuke", "Enemy", "Itachi");

        let readyString = code;

        const regex = RegExp("Naruto|Sakura|Sasuke|Enemy|Itachi", 'g');
        let myArray;
        while ((myArray = regex.exec(code)) !== null) {
            console.log(myArray);
            if 
                (readyString == code) readyString = this.insert(readyString, "await this.", myArray.index)
            else       
                readyString = this.insert(readyString, "await this.", myArray.index + 11);
        }
        
        console.log(readyString);
        return readyString;
    }

}