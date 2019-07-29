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
            it(`should return sum ${expected} when a = ${a} and b = ${b} and c = ${c}`, () => {
                assert.strictEqual(actual, expected);
            });

        });
    });

    describe('sumUpMaxExpression', () => {
        //Given
        const testData = [
            {
                a: 2,
                b: 3,
                c: 5,
                expected: 33,
            },
            {
                a: 1,
                b: 2,
                c: 2,
                expected: 8,
            },
            {
                a: 0,
                b: 1,
                c: 3,
                expected: 7,
            }
        ];
        
        testData.forEach(data => {
            const {a, b, c, expected} = data;
            // //When
            const actual = sumUpMaxExpression(a, b, c);

            // //Then
            it(`should return ${expected} when a = ${a}  b = ${b} c = ${c}`, () => {
                assert.strictEqual(actual, expected);
            });

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
            },
            {
                rating: 70,
                expected: 'C',
            },
            {
                rating: 74,
                expected: 'C',
            },
            {
                rating: 75,
                expected: 'B',
            },
            {
                rating: 76,
                expected: 'B',
            },
            {
                rating: 81,
                expected: 'B',
            },
            {
                rating: 89,
                expected: 'B',
            },
            {
                rating: 90,
                expected: 'A',
            },
            {
                rating: 91,
                expected: 'A',
            },
            {
                rating: 96,
                expected: 'A',
            },
            {
                rating: 100,
                expected: 'A',
            },
            {
                rating: 101,
                expected: "Mark is not exist",
            }
        ];
 
        testData.forEach(data => {
            const { rating, expected } = data;
 
            const actual = getMarkByRating(rating);
 
            it(`should return ${expected} when rating = ${rating}`, () => {
                assert.strictEqual(actual, expected);
            });

            // it(`should return ${expected}`, () => {
            //     expect(function () {}).to.throw();
            // })


        });
    });

    describe('getSumEvenIndex', () => {

        it(`should return sum of even index`, () => {
            const expected = 0;
            getSumEvenIndex();
            assert.strictEqual(actual, expected);
        })
    })

    describe('getMinElemOfArr', () => {
		//given
		const testData = [
			{
				array: [],
				expected: -1,
			},
			{
				array: [3],
				expected: 3,
			},
			{
				array: [12, 9],
				expected: 9,
			},
			{
				array: [4, 8, 1, 5],
				expected: 1,
			}
		];

		testData.forEach(data => {
			const {array, expected} = data;

			const actual = getMinElemOfArr(array);

			it(`should return min el ${expected} when array - [${array}]`, () => {
		
				assert.strictEqual(actual, expected);

			});
		});
	});

	describe('getMaxElemOfArr', () => {

		const testData = [
			{
				array: [],
				expected: -1,
			},
			{
				array: [2],
				expected: 2,
			},
			{
				array: [7, 14],
				expected: 14,
			},
			{
				array: [3, 9, 20, 12],
				expected: 20,
			}
		];

		testData.forEach(data => {
			const { array, expected } = data;

			const actual = getMaxElemOfArr(array);
 
			it(`should return max ${expected} when array - [${array}]`, () => {
				assert.strictEqual(actual, expected);
			});
		});

	});

    describe('getMinIndex', () => {
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [5],
                expected: 0,
            },
            {
                array: [3, 2],
                expected: 1,
            },
            {
                array: [2, 5, 6, 0, 7],
                expected: 3,
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            const actual = getMinIndex(array);

            it(`should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        })
    });

    describe('getMaxIndex', () => {
        const testData = [
            {
                arr: [],
                expected: -1,
            },
            {

            }
        ];
        
        testData.forEach(data => {
            const {arr, expected} = data;

            const actual = getMaxIndex(arr);


            it(`should return ${expected} max Index when array = [${arr}]`, () => {
                asssert.strictEqual(actual, expected);
            });


        });



    });




});