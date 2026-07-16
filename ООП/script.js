// №1
const DomElement = function(selector, height, width, bg, fontSize, position) {
    this.selector = selector,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize,
    this.position = position
    this.cssText = function(elem) {
        elem.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        position: ${this.position};
        `
    },
    this.element = function() {
        let elem;

        const cleanName = this.selector.slice(1);

        if (this.selector.at(0) === '.') {
            elem = document.createElement('div');
            elem.classList.add(cleanName);
            elem.innerText = 'Hello, i div';
        } else if (this.selector.at(0) === '#') {
            elem = document.createElement('p');
            elem.id = cleanName;
            elem.innerText = 'hello, i P';
        }

        if (elem) {
            this.cssText(elem);

        document.addEventListener('DOMContentLoaded', () => {
            document.body.append(elem);
        })
        }

        return elem;
    }
}



const elementDiv = new DomElement('.block', 100, 100, 'green', 24, 'absolute');
const square = elementDiv.element();


// №2
let topPosition = 100;
let leftPosition = 100;
const step = 10;

document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowUp') {
            topPosition -= step;
        } else if (e.code === 'ArrowDown') {
            topPosition += step;
        } else if (e.code === 'ArrowLeft') {
            leftPosition -= step;
        } else if (e.code === 'ArrowRight') {
            leftPosition += step;
        }

        square.style.top = `${topPosition}px`;
        square.style.left = `${leftPosition}px`;
    })