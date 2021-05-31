
import { _decorator, Component, Node, Vec3, systemEvent, SystemEvent, EventMouse } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Character')
export class Character extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    private _startJump = false;
    private _jumpStep: number = 0;
    private _curlJumpTime:number = 0;
    private _jumpTime: number = 0.1;
    private _curlJumpSpeed: number = 0;
    private _curlPos: Vec3 = new Vec3();
    private _deltaPos: Vec3 = new Vec3(0,0,0);
    private _targetPos: Vec3 = new Vec3();
    private _isMoving = false;
    start () {
        systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this)
    }

    onMouseUp(event: EventMouse){
        if(event.getButton() === 0){
            
        }
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
