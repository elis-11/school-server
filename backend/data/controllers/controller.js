class Controller {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.action = this.req.body.action;
        this.actionMethodName = 'action_' + this.action;
    }
 
    process() {
        this[this.actionMethodName]();
    }
 
    getValue(idCode) {
        return this.req.body[idCode];
    }
}
 
export default Controller;