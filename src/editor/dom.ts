interface Istyle {
    [propName:string]: string
}

const $ = {
    createElement(name: string, style?: Istyle) {
        const el = document.createElement(name);
        for(let item in style) {
            el.style[item as any] = style[item];
        }
        return el;
    }
}

export default $;