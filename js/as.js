

class AS {
    constructor(spriteArray, parent) {
        this.spriteArray = spriteArray;
        this.currentFrame = 0;
        this.totalFrames = spriteArray.length
        this.parent = parent;
        this.visible = true;
        this.parent.addChild(this.spriteArray[0])
        this.animateFn = () => {
            const nextFrame = this.currentFrame < this.totalFrames - 1 ? this.currentFrame + 1 : 0;
            this.gotoAndStop(nextFrame);
        }
        this.animatingId = null;
    }

    gotoAndStop(i) {
        if (this.visible) this.parent.removeChild(this.spriteArray[this.currentFrame])
        this.parent.addChild(this.spriteArray[i])
        this.currentFrame = i
        this.visible = true;
    }

    hide() {
        if (this.animatingId) clearInterval(this.animatingId)
        this.animatingId = null;
        this.parent.removeChild(this.spriteArray[this.currentFrame])
        this.visible = false;
    }

    animate() {
        if (this.animatingId === null) {
            this.animateFn();
            this.animatingId = setInterval(this.animateFn, 100)
        }
    }
}