export const docs = {
  functions: [{
      name: 'abs(x)',
      desc: 'Calculate the absolute value of a number.'
    },
    {
      name: 'add(x, y)',
      desc: 'Add two or more values, x + y.'
    },
    {
      name: 'cbrt(x [, allRoots])',
      desc: 'Calculate the cubic root of a value.'
    },
    {
      name: 'ceil(x)',
      desc: 'Round a value towards plus infinity If x is complex, both real and imaginary part are rounded towards plus infinity.'
    },
    {
      name: 'cube(x)',
      desc: 'Compute the cube of a value, x * x * x.'
    },
    {
      name: 'divide(x, y)',
      desc: 'Divide two values, x / y.'
    },
    {
      name: 'dotDivide(x, y)',
      desc: 'Divide two matrices element wise.'
    },
    {
      name: 'dotMultiply(x, y)',
      desc: 'Multiply two matrices element wise.'
    },
    {
      name: 'dotPow(x, y)',
      desc: 'Calculates the power of x to y element wise.'
    },
    {
      name: 'exp(x)',
      desc: 'Calculate the exponent of a value.'
    },
    {
      name: 'expm1(x)',
      desc: 'Calculate the value of subtracting 1 from the exponential value.'
    },
    {
      name: 'fix(x)',
      desc: 'Round a value towards zero.'
    },
    {
      name: 'floor(x)',
      desc: 'Round a value towards minus infinity.'
    },
    {
      name: 'gcd(a, b)',
      desc: 'Calculate the greatest common divisor for two or more values or arrays.'
    },
    {
      name: 'hypot(a, b, …)',
      desc: 'Calculate the hypotenusa of a list with values.'
    },
    {
      name: 'lcm(a, b)',
      desc: 'Calculate the least common multiple for two or more values or arrays.'
    },
    {
      name: 'log(x [, base])',
      desc: 'Calculate the logarithm of a value.'
    },
    {
      name: 'log10(x)',
      desc: 'Calculate the 10-base logarithm of a value.'
    },
    {
      name: 'log1p(x)',
      desc: 'Calculate the logarithm of a value+1.'
    },
    {
      name: 'log2(x)',
      desc: 'Calculate the 2-base of a value.'
    },
    {
      name: 'mod(x, y)',
      desc: 'Calculates the modulus, the remainder of an integer division.'
    },
    {
      name: 'multiply(x, y)',
      desc: 'Multiply two or more values, x * y.'
    },
    {
      name: 'norm(x [, p])',
      desc: 'Calculate the norm of a number, vector or matrix.'
    },
    {
      name: 'nthRoot(a)',
      desc: 'Calculate the nth root of a value.'
    },
    {
      name: 'nthRoots(x)',
      desc: 'Calculate the nth roots of a value.'
    },
    {
      name: 'pow(x, y)',
      desc: 'Calculates the power of x to y, x ^ y.'
    },
    {
      name: 'round(x [, n])',
      desc: 'Round a value towards the nearest integer.'
    },
    {
      name: 'sign(x)',
      desc: 'Compute the sign of a value.'
    },
    {
      name: 'sqrt(x)',
      desc: 'Calculate the square root of a value.'
    },
    {
      name: 'square(x)',
      desc: 'Compute the square of a value, x * x.'
    },
    {
      name: 'subtract(x, y)',
      desc: 'Subtract two values, x - y.'
    },
    {
      name: 'unaryMinus(x)',
      desc: 'Inverse the sign of a value, apply a unary minus operation.'
    },
    {
      name: 'unaryPlus(x)',
      desc: 'Unary plus operation.'
    },
    {
      name: 'xgcd(a, b)',
      desc: 'Calculate the extended greatest common divisor for two values.'
    }
  ],
  units: [{
      base: 'Length',
      unit: 'meter (m), inch (in), foot (ft), yard (yd), mile (mi), link (li), rod (rd), chain (ch), angstrom, mil'
    },
    {
      base: 'Surface area',
      unit: 'm2, sqin, sqft, sqyd, sqmi, sqrd, sqch, sqmil, acre, hectare'
    },
    {
      base: 'Volume',
      unit: 'm3, litre (l, L, lt, liter), cc, cuin, cuft, cuyd, teaspoon, tablespoon'
    },
    {
      base: 'Liquid volume',
      unit: 'minim (min), fluiddram (fldr), fluidounce (floz), gill (gi), cup (cp), pint (pt), quart (qt), gallon (gal), beerbarrel (bbl), oilbarrel (obl), hogshead, drop (gtt)'
    },
    {
      base: 'Angles',
      unit: 'rad (radian), deg (degree), grad (gradian), cycle, arcsec (arcsecond), arcmin (arcminute)'
    },
    {
      base: 'Time',
      unit: 'second (s, secs, seconds), minute (mins, minutes), hour (h, hr, hrs, hours), day (days), week (weeks), month (months), year (years), decade (decades), century (centuries), millennium (millennia)'
    },
    {
      base: 'Frequency',
      unit: 'hertz (Hz)'
    },
    {
      base: 'Mass',
      unit: 'gram(g), tonne, ton, grain (gr), dram (dr), ounce (oz), poundmass (lbm, lb, lbs), hundredweight (cwt), stick, stone'
    },
    {
      base: 'Electric current',
      unit: 'ampere (A)'
    },
    {
      base: 'Temperature',
      unit: 'kelvin (K), celsius (degC), fahrenheit (degF), rankine (degR)'
    },
    {
      base: 'Amount of substance',
      unit: 'mole (mol)'
    },
    {
      base: 'Luminous intensity',
      unit: 'candela (cd)'
    },
    {
      base: 'Force',
      unit: 'newton (N), dyne (dyn), poundforce (lbf), kip'
    },
    {
      base: 'Energy',
      unit: 'joule (J), erg, Wh, BTU, electronvolt (eV)'
    },
    {
      base: 'Power',
      unit: 'watt (W), hp'
    },
    {
      base: 'Pressure',
      unit: 'Pa, psi, atm, torr, bar, mmHg, mmH2O, cmH2O'
    },
    {
      base: 'Electricity and magnetism',
      unit: 'ampere (A), coulomb (C), watt (W), volt (V), ohm, farad (F), weber (Wb), tesla (T), henry (H), siemens (S), electronvolt (eV)'
    },
    {
      base: 'Binary',
      unit: 'bit (b), byte (B)'
    }
  ],
  prefixes: [
    [{
        name: 'deca',
        abbreviation: 'da',
        value: '1e1'
      },
      {
        name: 'hecto',
        abbreviation: 'h',
        value: '1e2'
      },
      {
        name: 'kilo',
        abbreviation: 'k',
        value: '1e3'
      },
      {
        name: 'mega',
        abbreviation: 'M',
        value: '1e6'
      },
      {
        name: 'giga',
        abbreviation: 'G',
        value: '1e9'
      },
      {
        name: 'tera',
        abbreviation: 'T',
        value: '1e12'
      },
      {
        name: 'peta',
        abbreviation: 'P',
        value: '1e15'
      },
      {
        name: 'exa',
        abbreviation: 'E',
        value: '1e18'
      },
      {
        name: 'zetta',
        abbreviation: 'Z',
        value: '1e21'
      },
      {
        name: 'yotta',
        abbreviation: 'Y',
        value: '1e24'
      }
    ],
    [{
        name: 'deci',
        abbreviation: 'd',
        value: '1e-1'
      },
      {
        name: 'centi',
        abbreviation: 'c',
        value: '1e-2'
      },
      {
        name: 'milli',
        abbreviation: 'm',
        value: '1e-3'
      },
      {
        name: 'micro',
        abbreviation: 'u',
        value: '1e-6'
      },
      {
        name: 'nano',
        abbreviation: 'n',
        value: '1e-9'
      },
      {
        name: 'pico',
        abbreviation: 'p',
        value: '1e-12'
      },
      {
        name: 'femto',
        abbreviation: 'f',
        value: '1e-15'
      },
      {
        name: 'atto',
        abbreviation: 'a',
        value: '1e-18'
      },
      {
        name: 'zepto',
        abbreviation: 'z',
        value: '1e-21'
      },
      {
        name: 'yocto',
        abbreviation: 'y',
        value: '1e-24'
      }
    ],
    [{
        name: 'kibi',
        abbreviation: 'Ki',
        value: '1024'
      },
      {
        name: 'mebi',
        abbreviation: 'Mi',
        value: '1024^2'
      },
      {
        name: 'gibi',
        abbreviation: 'Gi',
        value: '1024^3'
      },
      {
        name: 'tebi',
        abbreviation: 'Ti',
        value: '1024^4'
      },
      {
        name: 'pebi',
        abbreviation: 'Pi',
        value: '1024^5'
      },
      {
        name: 'exi',
        abbreviation: 'Ei',
        value: '1024^6'
      },
      {
        name: 'zebi',
        abbreviation: 'Zi',
        value: '1024^7'
      },
      {
        name: 'yobi',
        abbreviation: 'Yi',
        value: '1024^8'
      }
    ],
    [{
        name: 'kilo',
        abbreviation: 'k',
        value: '1e3'
      },
      {
        name: 'mega',
        abbreviation: 'M',
        value: '1e6'
      },
      {
        name: 'giga',
        abbreviation: 'G',
        value: '1e9'
      },
      {
        name: 'tera',
        abbreviation: 'T',
        value: '1e12'
      },
      {
        name: 'peta',
        abbreviation: 'P',
        value: '1e15'
      },
      {
        name: 'exa',
        abbreviation: 'E',
        value: '1e18'
      },
      {
        name: 'zetta',
        abbreviation: 'Z',
        value: '1e21'
      },
      {
        name: 'yotta',
        abbreviation: 'Y',
        value: '1e24'
      }
    ]
  ],
  universal_constants: [
    [{
        name: 'speedOfLight',
        symbol: 'c',
        value: '299792458',
        unit: 'm · s-1'
      },
      {
        name: 'gravitationConstant',
        symbol: 'G',
        value: '6.6738480e-11',
        unit: 'm3 · kg-1 · s-2'
      },
      {
        name: 'planckConstant',
        symbol: 'h',
        value: '6.626069311e-34',
        unit: 'J · s'
      },
      {
        name: 'reducedPlanckConstant',
        symbol: 'h',
        value: '1.05457172647e-34',
        unit: 'J · s'
      }
    ],
    [{
        name: 'magneticConstant',
        symbol: 'μ0',
        value: '1.2566370614e-6',
        unit: 'N · A-2'
      },
      {
        name: 'electricConstant',
        symbol: 'ε0',
        value: '8.854187817e-12',
        unit: 'F · m-1'
      },
      {
        name: 'vacuumImpedance',
        symbol: 'Z0',
        value: '376.730313461',
        unit: '&ohm;'
      },
      {
        name: 'coulomb',
        symbol: 'κ',
        value: '8.9875517873681764e9',
        unit: 'N · m2 · C-2'
      },
      {
        name: 'elementaryCharge',
        symbol: 'e',
        value: '1.60217656535e-19',
        unit: 'C'
      },
      {
        name: 'bohrMagneton',
        symbol: 'μB',
        value: '9.2740096820e-24',
        unit: 'J · T-1'
      },
      {
        name: 'conductanceQuantum',
        symbol: 'G0',
        value: '7.748091734625e-5',
        unit: 'S'
      },
      {
        name: 'inverseConductanceQuantum',
        symbol: 'G0-1',
        value: '12906.403721742',
        unit: '&ohm;'
      },
      {
        name: 'magneticFluxQuantum',
        symbol: 'f0',
        value: '2.06783375846e-15',
        unit: 'Wb'
      },
      {
        name: 'nuclearMagneton',
        symbol: 'μN',
        value: '5.0507835311e-27',
        unit: 'J · T-1'
      },
      {
        name: 'klitzing',
        symbol: 'RK',
        value: '25812.807443484',
        unit: '&ohm;'
      }
    ],
    [{
        name: 'bohrRadius',
        symbol: 'a0',
        value: '5.291772109217e-11',
        unit: 'm'
      },
      {
        name: 'classicalElectronRadius',
        symbol: 're',
        value: '2.817940326727e-15',
        unit: 'm'
      },
      {
        name: 'electronMass',
        symbol: 'me',
        value: '9.1093829140e-31',
        unit: 'kg'
      },
      {
        name: 'fermiCoupling',
        symbol: 'GF',
        value: '1.1663645e-5',
        unit: 'GeV-2'
      },
      {
        name: 'fineStructure',
        symbol: 'α',
        value: '7.297352569824e-3',
        unit: '-'
      },
      {
        name: 'hartreeEnergy',
        symbol: 'Eh',
        value: '4.3597443419e-18',
        unit: 'J'
      },
      {
        name: 'protonMass',
        symbol: 'mp',
        value: '1.67262177774e-27',
        unit: 'kg'
      },
      {
        name: 'deuteronMass',
        symbol: 'md',
        value: '3.3435830926e-27',
        unit: 'kg'
      },
      {
        name: 'neutronMass',
        symbol: 'mn',
        value: '1.6749271613e-27',
        unit: 'kg'
      },
      {
        name: 'quantumOfCirculation',
        symbol: 'h / (2me)',
        value: '3.636947552024e-4',
        unit: 'm2 · s-1'
      },
      {
        name: 'rydberg',
        symbol: 'R∞',
        value: '10973731.56853955',
        unit: 'm-1'
      },
      {
        name: 'thomsonCrossSection',
        symbol: ' ',
        value: '6.65245873413e-29',
        unit: 'm2'
      },
      {
        name: 'weakMixingAngle',
        symbol: ' ',
        value: '0.222321',
        unit: '-'
      },
      {
        name: 'efimovFactor',
        symbol: ' ',
        value: '22.7',
        unit: '-'
      }
    ],
    [{
        name: 'atomicMass',
        symbol: 'mu',
        value: '1.66053892173e-27',
        unit: 'kg'
      },
      {
        name: 'avogadro',
        symbol: 'NA',
        value: '6.0221412927e23',
        unit: 'mol-1'
      },
      {
        name: 'boltzmann',
        symbol: 'k',
        value: '1.380648813e-23',
        unit: 'J · K-1'
      },
      {
        name: 'faraday',
        symbol: 'F',
        value: '96485.336521',
        unit: 'C · mol-1'
      },
      {
        name: 'firstRadiation',
        symbol: 'c1',
        value: '3.7417715317e-16',
        unit: 'W · m2'
      },
      {
        name: 'loschmidt',
        symbol: 'n0',
        value: '2.686780524e25',
        unit: 'm-3'
      },
      {
        name: 'gasConstant',
        symbol: 'R',
        value: '8.314462175',
        unit: 'J · K-1 · mol-1'
      },
      {
        name: 'molarPlanckConstant',
        symbol: 'NA · h',
        value: '3.990312717628e-10',
        unit: 'J · s · mol-1'
      },
      {
        name: 'molarVolume',
        symbol: 'Vm',
        value: '2.241396820e-10',
        unit: 'm3 · mol-1'
      },
      {
        name: 'sackurTetrode',
        symbol: ' ',
        value: '-1.164870823',
        unit: '-'
      },
      {
        name: 'secondRadiation',
        symbol: 'c2',
        value: '1.438777013e-2',
        unit: 'm · K'
      },
      {
        name: 'stefanBoltzmann',
        symbol: 'σ',
        value: '5.67037321e-8',
        unit: 'W · m-2 · K-4'
      },
      {
        name: 'wienDisplacement',
        symbol: 'b',
        value: '2.897772126e-3',
        unit: 'm · K'
      }
    ],
    [{
        name: 'molarMass',
        symbol: 'Mu',
        value: '1e-3',
        unit: 'kg · mol-1'
      },
      {
        name: 'molarMassC12',
        symbol: 'M(12C)',
        value: '1.2e-2',
        unit: 'kg · mol-1'
      },
      {
        name: 'gravity',
        symbol: 'gn',
        value: '9.80665',
        unit: 'm · s-2'
      },
      {
        name: 'atm',
        symbol: 'atm',
        value: '101325',
        unit: 'Pa'
      }
    ],
    [{
        name: 'planckLength',
        symbol: 'lP',
        value: '1.61619997e-35',
        unit: 'm'
      },
      {
        name: 'planckMass',
        symbol: 'mP',
        value: '2.1765113e-8',
        unit: 'kg'
      },
      {
        name: 'planckTime',
        symbol: 'tP',
        value: '5.3910632e-44',
        unit: 's'
      },
      {
        name: 'planckCharge',
        symbol: 'qP',
        value: '1.87554595641e-18',
        unit: 'C'
      },
      {
        name: 'planckTemperature',
        symbol: 'TP',
        value: '1.41683385e+32',
        unit: 'K'
      }
    ]
  ],
  adopted_values: [{
      name: 'molarMass',
      symbol: 'Mu',
      value: '1e-3',
      unit: 'kg · mol-1'
    },
    {
      name: 'molarMassC12',
      symbol: 'M(12C)',
      value: '1.2e-2',
      unit: 'kg · mol-1'
    },
    {
      name: 'gravity',
      symbol: 'gn',
      value: '9.80665',
      unit: 'm · s-2'
    },
    {
      name: 'atm',
      symbol: 'atm',
      value: '101325',
      unit: 'Pa'
    }
  ]
}
