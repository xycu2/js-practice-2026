const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize,
    this.cssText = function(elem) {
        elem.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        `
    },
    this.element = function() {
        let elem;

        const cleanName = this.selector.slice(1);

        if (this.selector.at(0) === '.') {
            elem = document.createElement('div')
            elem.classList.add(cleanName)
            elem.innerText = 'Hello, i div'
        } else if (this.selector.at(0) === '#') {
            elem = document.createElement('p')
            elem.id = cleanName
            elem.innerText = 'hello, i P'
        }

        if (elem) {
            this.cssText(elem)

            document.body.append(elem)
        }
    }
}

const elementDiv = new DomElement('.block', 100, 150, 'green', 24);
elementDiv.element()