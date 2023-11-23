class GameObject{
    constructor (x=0, y=0){
        this.x = x;
        this.y = y;
        this.components = [];
    }


    addComponent(){
        this.components.push(component);
        component.GameObject = this;
    }

    update(deltaTime){
        for(const component of this.components) {
            component.update(deltaTime);
        }
    }

    draw(ctx) {
        for(const component of this.components){
            component.draw(ctx);
        }
    }

    getComponent(componentClass) {
        return this.components.find((component) => this.component instanceof componentClass);
    }
}
export default GameObject;