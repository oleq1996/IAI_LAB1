class complex {
     re: number;
     im: number;

    constructor(re, im) {
        this.re = re;
        this.im = im;
    }

    add(digit: complex) {
        let re = this.re + digit.re;
        let im = this.im + digit.im;

        return new complex(re,im)
    }

    substract(digit: complex){
        let re = this.re - digit.re;
        let im = this.im - digit.im;

        return new complex(re,im)
    }

    modul(){
        let re = this.re;
        let im = this.im;

        let z = sqrt( pow(re,2) + pow(im,2) );

        return new complex(z);
    }


   tostring(){
console.log('re:',this.re,'im:',this.im);
    }


}

let c1 = new complex(2,4);
let c2 = new complex(-4,7);
let c3 = c1.add(c2);
c3.tostring();
c3.modul();