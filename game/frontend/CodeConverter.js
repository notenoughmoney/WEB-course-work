class CodeConverter {


    static insert(str, substr, pos) {
        var array = str.split('');
        array.splice(pos, 0, substr);
        return array.join('');
    }

    static convert(code) {

        const hRegex = RegExp("document|console|log", "g");
        if (code.match(hRegex) != null) {
            const event = new CustomEvent("event");
            document.addEventListener("event", AchieveHandler.hackerHandler);
            document.dispatchEvent(event);
            return;
        }

        let readyString = code;

        const regex = RegExp("Naruto|Sakura|Sasuke|Enemy|Itachi", 'g');
        let myArray;
        let c = 0;
        while ((myArray = regex.exec(code)) !== null) {
            
            if (readyString == code) readyString = this.insert(readyString, "await this.", myArray.index)
            else       
                readyString = this.insert(readyString, "await this.", myArray.index + 11*c);
            c++;
        }
        
        console.log(readyString);
        return readyString;
    }

}