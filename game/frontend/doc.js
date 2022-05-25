function showDoc() {

    let filling = "";

    // игроку незачем знать про методы, до которых он ещё не дошел
    // поэтому с каждым новым уровнем принтим актуальные методы
    if (completedLevels > 0) {
        filling += `
            <tr>
                <td>Naruto.moveRight(n)</td>
                <td>Передваигает Наруто на n клеток вправо</td>
            </tr>
            <tr>
                <td>Naruto.moveLeft(n)</td>
                <td>Передваигает Наруто на n клеток влево</td>
            </tr>
            <tr>
                <td>Naruto.moveUp(n)</td>
                <td>Передваигает Наруто на n клеток вверх</td>
            </tr>
            <tr>
                <td>Naruto.moveDown(n)</td>
                <td>Передваигает Наруто на n клеток вниз</td>
            </tr>`
    }
    if (completedLevels > 2) {
        filling += `
            <tr>
                <td>Sakura.moveRight(n)</td>
                <td>Передвигает Саукуру на n клеток вправо.<br>Сакура так же может двигаться во всех 4 направлениях</td>
            </tr>
            <tr>
                <td>Sasuke.moveRight(n)</td>
                <td>Передвигает Саске на n клеток вправо.<br>Саске так же может двигаться во всех 4 направлениях</td>
            </tr>`
    }
    if (completedLevels > 3) {
        filling += `
            <tr>
                <td>.hitRight(n)</td>
                <td>Указанный персонаж бьёт вправо n раз</td>
            </tr>
            <tr>
                <td>.hitLeft(n)</td>
                <td>Указанный персонаж бьёт влево n раз</td>
            </tr>`
    }
    if (completedLevels > 5) {
        filling += `
            <tr>
                <td>Naruto.sexyJutsu(n)</td>
                <td>Наруто использует свою технику соблазнения n раз </td>
            </tr>
            <tr>`
    }

    Swal.fire({
        customClass: 'swal-custom',
        title: "Справка",
        html: `<table id="table">
                <thead>
                    <tr>
                        <th>Метод</th>
                        <th>Что делает</th>
                    </tr>
                </thead>
                <tbody>
                    ${filling}
                </tbody>
            </table>`
      })
}