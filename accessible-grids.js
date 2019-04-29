const AccessibleGrids = (() => {

    // reorder grid elements in html based on grid position
    function organize(grid, options) {
        let elements = sort(grid);
        for (let element of elements) {
            grid.removeChild(element);
        }
        for (let element of elements) {
            grid.appendChild(element);
        }
    }

    // apply tab index values according to grid position
    function index(grid, options={}) {
        let defaults = { offset: 0 };
        options = Object.assign(defaults, options);
        let elements = sort(grid);
        for (let i = 0; i < elements.length; i++) {
            elements[i].tabIndex = i + options.offset;
        }
    }

    function sort(grid) {
        let elements = Array.from(grid.children);
        return elements.sort((a, b) => {
            let aProps = parseGridProps(a);
            let bProps = parseGridProps(b);
            if (aProps.row.value === bProps.row.value) {
                return aProps.col.value - bProps.col.value;
            } else {
                return aProps.row.value - bProps.row.value;
            }
        });
    }

    function parseGridProp(prop) {
        const re = /(span)? ?(auto|\d+)/i;
        let match = re.exec(prop);
        return { span: !!match[1], value: Number(match[2]) };
    }

    function parseGridProps(element) {
        let style = window.getComputedStyle(element);
        let row = parseGridProp(style.gridRowStart);
        let col = parseGridProp(style.gridColumnStart);
        return { row, col };
    }

    return { organize, index };
})();