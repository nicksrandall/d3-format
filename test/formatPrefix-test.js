var tape = require("tape"),
    format = require("../");

require("./inDelta");

tape("formatPrefix(x) returns the expected symbol for small numbers", function(test) {
  test.equal(format.formatPrefix(0).symbol, "");
  test.equal(format.formatPrefix(1e-00).symbol, "");
  test.equal(format.formatPrefix(1e-01).symbol, "m");
  test.equal(format.formatPrefix(1e-02).symbol, "m");
  test.equal(format.formatPrefix(1e-03).symbol, "m");
  test.equal(format.formatPrefix(1e-04).symbol, "µ");
  test.equal(format.formatPrefix(1e-05).symbol, "µ");
  test.equal(format.formatPrefix(1e-06).symbol, "µ");
  test.equal(format.formatPrefix(1e-07).symbol, "n");
  test.equal(format.formatPrefix(1e-08).symbol, "n");
  test.equal(format.formatPrefix(1e-09).symbol, "n");
  test.equal(format.formatPrefix(1e-10).symbol, "p");
  test.equal(format.formatPrefix(1e-11).symbol, "p");
  test.equal(format.formatPrefix(1e-12).symbol, "p");
  test.equal(format.formatPrefix(1e-13).symbol, "f");
  test.equal(format.formatPrefix(1e-14).symbol, "f");
  test.equal(format.formatPrefix(1e-15).symbol, "f");
  test.equal(format.formatPrefix(1e-16).symbol, "a");
  test.equal(format.formatPrefix(1e-17).symbol, "a");
  test.equal(format.formatPrefix(1e-18).symbol, "a");
  test.equal(format.formatPrefix(1e-19).symbol, "z");
  test.equal(format.formatPrefix(1e-20).symbol, "z");
  test.equal(format.formatPrefix(1e-21).symbol, "z");
  test.equal(format.formatPrefix(1e-22).symbol, "y");
  test.equal(format.formatPrefix(1e-23).symbol, "y");
  test.equal(format.formatPrefix(1e-24).symbol, "y");
  test.equal(format.formatPrefix(1e-25).symbol, "y");
  test.equal(format.formatPrefix(1e-26).symbol, "y");
  test.equal(format.formatPrefix(1e-27).symbol, "y");
  test.end();
});

tape("formatPrefix(x) returns the expected symbol for large numbers", function(test) {
  test.equal(format.formatPrefix(0).symbol, "");
  test.equal(format.formatPrefix(1e00).symbol, "");
  test.equal(format.formatPrefix(1e01).symbol, "");
  test.equal(format.formatPrefix(1e02).symbol, "");
  test.equal(format.formatPrefix(1e03).symbol, "k");
  test.equal(format.formatPrefix(1e04).symbol, "k");
  test.equal(format.formatPrefix(1e05).symbol, "k");
  test.equal(format.formatPrefix(1e06).symbol, "M");
  test.equal(format.formatPrefix(1e07).symbol, "M");
  test.equal(format.formatPrefix(1e08).symbol, "M");
  test.equal(format.formatPrefix(1e09).symbol, "G");
  test.equal(format.formatPrefix(1e10).symbol, "G");
  test.equal(format.formatPrefix(1e11).symbol, "G");
  test.equal(format.formatPrefix(1e12).symbol, "T");
  test.equal(format.formatPrefix(1e13).symbol, "T");
  test.equal(format.formatPrefix(1e14).symbol, "T");
  test.equal(format.formatPrefix(1e15).symbol, "P");
  test.equal(format.formatPrefix(1e16).symbol, "P");
  test.equal(format.formatPrefix(1e17).symbol, "P");
  test.equal(format.formatPrefix(1e18).symbol, "E");
  test.equal(format.formatPrefix(1e19).symbol, "E");
  test.equal(format.formatPrefix(1e20).symbol, "E");
  test.equal(format.formatPrefix(1e21).symbol, "Z");
  test.equal(format.formatPrefix(1e22).symbol, "Z");
  test.equal(format.formatPrefix(1e23).symbol, "Z");
  test.equal(format.formatPrefix(1e24).symbol, "Y");
  test.equal(format.formatPrefix(1e25).symbol, "Y");
  test.equal(format.formatPrefix(1e26).symbol, "Y");
  test.equal(format.formatPrefix(1e27).symbol, "Y");
  test.end();
});

tape("formatPrefix(x) returns the expected symbol for negative numbers", function(test) {
  test.equal(format.formatPrefix(-0).symbol, "");
  test.equal(format.formatPrefix(-1e-00).symbol, "");
  test.equal(format.formatPrefix(-1e-03).symbol, "m");
  test.equal(format.formatPrefix(-1e-06).symbol, "µ");
  test.equal(format.formatPrefix(-1e-09).symbol, "n");
  test.equal(format.formatPrefix(-1e-12).symbol, "p");
  test.equal(format.formatPrefix(-1e-15).symbol, "f");
  test.equal(format.formatPrefix(-1e-18).symbol, "a");
  test.equal(format.formatPrefix(-1e-21).symbol, "z");
  test.equal(format.formatPrefix(-1e-24).symbol, "y");
  test.equal(format.formatPrefix(-1e-27).symbol, "y");
  test.equal(format.formatPrefix(-1e00).symbol, "");
  test.equal(format.formatPrefix(-1e03).symbol, "k");
  test.equal(format.formatPrefix(-1e06).symbol, "M");
  test.equal(format.formatPrefix(-1e09).symbol, "G");
  test.equal(format.formatPrefix(-1e12).symbol, "T");
  test.equal(format.formatPrefix(-1e15).symbol, "P");
  test.equal(format.formatPrefix(-1e18).symbol, "E");
  test.equal(format.formatPrefix(-1e21).symbol, "Z");
  test.equal(format.formatPrefix(-1e24).symbol, "Y");
  test.equal(format.formatPrefix(-1e27).symbol, "Y");
  test.end();
});

tape("formatPrefix(x) considers the effect of rounding based on precision", function(test) {
  test.equal(format.formatPrefix(999.50000, 4).symbol, "");
  test.equal(format.formatPrefix(999.50000, 3).symbol, "k");
  test.equal(format.formatPrefix(995.00000, 3).symbol, "");
  test.equal(format.formatPrefix(995.00000, 2).symbol, "k");
  test.equal(format.formatPrefix(950.00000, 2).symbol, "");
  test.equal(format.formatPrefix(950.00000, 1).symbol, "k");
  test.equal(format.formatPrefix(0.0009995, 4).symbol, "µ");
  test.equal(format.formatPrefix(0.0009995, 3).symbol, "m");
  test.equal(format.formatPrefix(0.0009950, 3).symbol, "µ");
  test.equal(format.formatPrefix(0.0009950, 2).symbol, "m");
  test.equal(format.formatPrefix(0.0009500, 2).symbol, "µ");
  test.equal(format.formatPrefix(0.0009500, 1).symbol, "m");
  test.end();
});

tape("formatPrefix(x) returns the expected scale", function(test) {
  test.inDelta(format.formatPrefix(999.50000, 4).scale(999.50000), 999.5);
  test.inDelta(format.formatPrefix(999.50000, 3).scale(999.50000), .9995);
  test.inDelta(format.formatPrefix(995.00000, 3).scale(995.00000), 995);
  test.inDelta(format.formatPrefix(995.00000, 2).scale(995.00000), .995);
  test.inDelta(format.formatPrefix(950.00000, 2).scale(950.00000), 950);
  test.inDelta(format.formatPrefix(950.00000, 1).scale(950.00000), .95);
  test.inDelta(format.formatPrefix(0.0009995, 4).scale(0.0009995), 999.5);
  test.inDelta(format.formatPrefix(0.0009995, 3).scale(0.0009995), .9995);
  test.inDelta(format.formatPrefix(0.0009950, 3).scale(0.0009950), 995);
  test.inDelta(format.formatPrefix(0.0009950, 2).scale(0.0009950), .995);
  test.inDelta(format.formatPrefix(0.0009500, 2).scale(0.0009500), 950);
  test.inDelta(format.formatPrefix(0.0009500, 1).scale(0.0009500), .95);
  test.end();
});