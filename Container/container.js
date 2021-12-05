
/**
 * The container class will be the one of the three elements needed
 * in order to create a grid view.
 *
 * The container is not necessarily a component as we want to use bootstraps auto
 * layout manager
 *

 */

class Container {

    constructor() {
        this.class_name = "container"
        this.style = {"background-color:": "#FFF"}
    }

    setBackgroundColor(color){
        this.style['background-color:'] = color
    }

    setContainerBreakPoint(string) {
        this.class_name = string
    }

}


module.exports = Container