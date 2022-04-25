class CodeConverter {


    static insert(str, substr, pos) {
        var array = str.split('');
        array.splice(pos, 0, substr);
        return array.join('');
    }

    static convert(code) {

        let readyString = code;

        const regex = RegExp("Naruto|Sakura|Sasuke|Enemy|Itachi", 'g');
        let myArray;
        let c = 0;
        while ((myArray = regex.exec(code)) !== null) {
            console.log(myArray);
            
            if (readyString == code) readyString = this.insert(readyString, "await this.", myArray.index)
            else       
                readyString = this.insert(readyString, "await this.", myArray.index + 11*c);
            c++;
        }
        
        console.log(readyString);
        return readyString;
    }

}