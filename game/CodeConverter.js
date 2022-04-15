class CodeConverter {

    static convert(code) {

        //создаём массив со строками кода
        var stringArray = code.split("\n");

        let readyString = "";

        //если есть пустые строчки, то удаляем
        for (let i = 0; i <stringArray.length; i++) {
            if (stringArray[i] == "") {
                stringArray.splice(i, 1);
                i--;
            }
        }

        //конкатенируем каждый элемент массива с await this.
        for (let i = 0; i <stringArray.length; i++) {
            stringArray[i] = "await this." + stringArray[i];
            readyString += stringArray[i] + "\n";
        }
        
        console.log(readyString);
        return readyString;
    }

}