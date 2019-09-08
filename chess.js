'use strict';

const settings = {
    rowCount: 10,
    colCount: 10,
    emptyCellColor: '#eee',
    letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    numbers: [8, 7, 6, 5, 4, 3, 2, 1],

};

const chess = {
    settings,
    containerElement: null,
    cellElements: null,

    renderField() {
        this.containerElement = document.getElementById('chess');
        this.containerElement.innerHTML = '';
        this.cellElements = [];

        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);


            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement('td');
                trElem.appendChild(cell);
                this.cellElements.push(cell);
                if (col > 0) {
                    switch (row) {
                        case (0):
                            cell.textContent = this.settings.letters[col - 1];
                            break;
                        case (this.settings.colCount - 1):
                            cell.textContent = this.settings.letters[col - 1];
                            break;
                    }
                }
                if (row > 0) {
                    switch (col) {
                        case (0):
                            cell.textContent = this.settings.numbers[row - 1];
                            break;
                        case (this.settings.colCount - 1):
                            cell.textContent = this.settings.numbers[row - 1];
                            break;
                    }
                }
                if (
                    col % 2 !== 0 && row % 2 === 0 &&
                    col !== this.settings.colCount - 1 && row !== this.settings.colCount - 1 &&
                    col !== 0 && row !== 0) {
                    cell.style.backgroundColor = 'black'
                } else if (
                    col % 2 === 0 && row % 2 !== 0 &&
                    col !== this.settings.colCount - 1 && row !== this.settings.colCount - 1 &&
                    col !== 0 && row !== 0) {
                    cell.style.backgroundColor = 'black'
                }
            }
        }
    }
};

window.addEventListener('load', () => chess.renderField());
