var app = new Vue({
    el: '#calculator',
    data: {
        previous: null,
        current: '',
        operator: null,
        operatorClicked: false
    },
    methods: {
        percent() {
            this.current = parseFloat(this.current / 100);
        },
        clear() {
            this.current = ''
        },
        append(number) {
            if(this.operatorClicked){
                this.current = '';
                this.operatorClicked = false;
            }
            if(this.current === '0'){
                this.current = '';
            }
            this.current = this.current + number;
        },
        setPrevious(){
            this.previous = this.current;
            this.operatorClicked = true;
        },
        divide() {
            this.operator = (a, b) => a / b;
            this.setPrevious();
        },
        times() {
            this.operator = (a, b) => a * b;
            this.setPrevious();
        },
        minus() {
            this.operator = (a, b) => a - b;
            this.setPrevious();
        },
        plus() {
            this.operator = (a, b) => a + b;
            this.setPrevious();
        },
        dot() {
            if(this.current.indexOf('.') === -1){
                this.append('.');
            }
        },
        equal() {
            this.current = this.operator(parseFloat(this.current), parseFloat(this.previous))
            this.previous = null;
        }
    }
})