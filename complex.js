var complex = /** @class */ (function () {
    function complex(re, im) {
        this.re = re;
        this.im = im;
    }
    complex.prototype.add = function (digit) {
        var re = this.re + digit.re;
        var im = this.im + digit.im;
        return new complex(re, im);
    };
    complex.prototype.substract = function (digit) {
        var re = this.re - digit.re;
        var im = this.im - digit.im;
        return new complex(re, im);
    };
    complex.prototype.modul = function () {
        var re = this.re;
        var im = this.im;
        var z = sqrt(pow(re, 2) + pow(im, 2));
        return new complex(z);
    };
    complex.prototype.tostring = function () {
        console.log('re:', this.re, 'im:', this.im);
    };
    return complex;
}());
var c1 = new complex(2, 4);
var c2 = new complex(-4, 7);
var c3 = c1.add(c2);
c3.tostring();
c3.modul();
