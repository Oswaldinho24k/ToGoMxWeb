export {misTiendasWatcher} from './misTiendasWatcher';

export class ObjectWatcher{
    constructor(snap, object){
        this.object = object;
        this.key = snap.key;
        this.ref = object.dbRef.child(this.key);
        this.ref.on("value", this.onChange.bind(this));
    }

    // onChange(snap){
    //     if(!snap) return;
    //     this.object.actions.agregar({
    //         [this.key]:snap.val()
    //     });
    // }

    onChange(snap){
        if(!snap) return;
        let tienda = snap.val();
        tienda["key"] = this.key;
        this.object.actions.agregar(tienda)
    }

    remove(){
        this.object.actions.remove(this.key);
        this.ref().off("value", this.onChange);
    }
}

export class ListWatcher{
    constructor(){
        this.cache = {};
    }

    watchList(ref, object){
        ref.on("child_added", snap=>this.onChildAdded(snap, object));
        ref.on("child_removed", snap=>this.onChildRemoved(snap));
    }

    onChildAdded(snap, object){
        this.cache[snap.key] = new ObjectWatcher(snap, object);
    }

    onChildRemoved(snap){
        this.cache[snap.key].remove();
        delete this.cache[snap.key];
    }
}