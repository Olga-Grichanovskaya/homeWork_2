describe('Homework tasks', () => {
    describe('multiplyOrSumUp', () => {
        //Given
        const testData = [
            {
                a: 2,
                b: 3,
                expected: 6,
            },
            {
                a: 1,
                b: 4,
                expected: 5,
            },
            {
                a: 0,
                b: 1,
                expected: 0,
            }
        ];
        
        testData.forEach(data => {
            const {a, b, expected} = data;
            //When
            const actual = multiplyOrSumUp(a, b);

            //Then
            it(`should return ${expected} when a = ${a} and b = ${b}`, () => {
                assert.strictEqual(actual, expected);
            });

        });
    });

    describe('getCoordinateQuarter', () => {
        //Given
        const testData = [
            {
                x: 3,
                y: 5,
                expected: 'I quarter',
            },
            {
                x: -5,
                y: 5,
                expected: 'II quarter',
            },
            {
                x: -9,
                y: -57,
                expected: 'III quarter',
            },
            {
                x: 55,
                y: -25,
                expected: 'IV quarter',
            }
        ];

        testData.forEach(data => {
            const {x, y, expected} = data;
            //When
            const actual = getCoordinateQuarter(x, y);

            //Then
            it(`should return ${expected} when x = ${x} and y = ${y}`, () => {
                assert.strictEqual(actual, expected);
            });

            it(`should return string ${expected}`, () => {
                assert.isString(expected);
            });
        });
    });

    describe('getSum', () => {
        //Given
        const testData = [
            {
                a: 6,
                b: 4,
                c: -11,
                expected: 10,
            },
            {
                a: -7,
                b: 9,
                c: 3,
                expected: 12,
            },
            {
                a: 0,
                b: 9,
                c: -11,
                expected: 9,
            }
        ];
        
        testData.forEach(data => {
            const {a, b, c, expected} = data;
            //When
            const actual = getSum(a, b, c);

            //Then
            it(`should return not undefined, result - ${expected}`, () => {
                expect(expected).not.to.be.undefined;
            });
            it(`should return sum ${expected} when a = ${a} and b = ${b} and c = ${c}`, () => {
                assert.strictEqual(actual, expected);
            });
            it(`should return a number - ${expected}`, () => {
                assert.isNumber(expected);
            });
        });
    });

    describe('multiplyOrSumUp', () => {
        //Given
        const testData = [
            {
                a: 2,
                b: 3,
                c: 9,
                expected: 6,
            },
            {
                a: 1,
                b: 4,
                expected: 5,
            },
            {
                a: 0,
                b: 1,
                expected: 0,
            }
        ];
        
        testData.forEach(data => {
            // const {a, b, expected} = data;
            // //When
            // const actual = multiplyOrSumUp(a, b);

            // //Then
            // it(`should return ${expected} when a = ${a} and b = ${b}`, () => {
            //     assert.strictEqual(actual, expected);
            // });

        });
    });

    describe('getMarkByRating', () => {
        const testData = [
             {
                 rating: 0,
                 expected: 'F',
             },
            {
                rating: 1,
                expected: 'F',
            },
            {
                rating: 12,
                expected: 'F',
            },
            {
                rating: 19,
                expected: 'F',
            },
            {
                rating: 20,
                expected: 'E',
            },
            {
                rating: 21,
                expected: 'E',
            },
            {
                rating: 32,
                expected: 'E',
            },
            {
                rating: 39,
                expected: 'E',
            },
            {
                rating: 40,
                expected: 'D',
            },
            {
                rating: 41,
                expected: 'D',
            },
            {
                rating: 55,
                expected: 'D',
            },
            {
                rating: 59,
                expected: 'D',
            },
            {
                rating: 60,
                expected: 'C',
            },
            {
                rating: 61,
                expected: 'C',
            }
         ];
 
        testData.forEach(data => {
            const { rating, expected } = data;
 
            const actual = getMarkByRating(rating);
 
            it(`should return ${expected} when rating = ${rating}`, () => {
                assert.strictEqual(actual, expected);
            });


        });
     });

});