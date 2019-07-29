describe('HW_test', () => {

//loop
	// describe('getSumValueOfEvenIndOf99', () => {
	// 	const expected = {
	// 		sum: 2450,
	// 		count: 50,
	// 	}
	// 	const actual = getSumValueOfEvenIndOf99();
	// 	it(`should return sum`, () => {
	// 		expect(expected).to.deep.equal(actual);
	// 	})
	// });

//arr
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
                array: [],
                expected: -1,
            },
            {
                array: [3],
                expected: 0,
            },
            {
                array: [6, 9],
                expected: 1,
            },
            {
                array: [2, 4, 9, 0, 7],
                expected: 2,
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            const actual = getMaxIndex(array);

            it(`should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        })
    });

    describe('getMaxIndex', () => {
        const testData = [
            // {
            //     array: [],
            //     expected: -1,
            // },
            // {
            //     array: [3],
            //     expected: 0,
            // },
            // {
            //     array: [6, 9],
            //     expected: 1,
            // },
            // {
            //     array: [2, 4, 9, 0, 7],
            //     expected: 2,
            // }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            const actual = getMaxIndex(array);

            it(`should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        })
    });

    describe('getSumOfEvenIndex', () => {
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
    			array: [2, 7],
    			expected: 2,
    		},
    		{
    			array: [3, 8, 7],
    			expected: 10,
    		},
    		{
    			array: [2, 5, 3, 6, 1],
    			expected: 6,
    		}
    	];

    	testData.forEach(data => {
    		const {array, expected} = data;

    		const actual = getSumOfEvenIndex(array);

    		it(`should return ${expected} when [${array}]`, () => {
				assert.strictEqual(actual, expected);
    		});

    	})

    	
    });

    describe('reverseArr', () => {
    	const testData = [
    		{
    			array: [],
    			expected: -1,
    		},
    		{
    			array: [5],
    			expected: [5],
    		},
    		{
    			array: [2, 6],
    			expected: [6, 2],
    		},
    		// {
    		// 	array: [3, 8, 7],
    		// 	expected: [7, 8, 3],
    		// }
    	];

    	testData.forEach(data => {
    		const {array, expected} = data;

    		const actual = reverseArr(array);

    		it(`should return ${expected} when [${array}]`, () => {
				assert.deepEqual(actual, expected);
				//expect([1, 2]).to.deep.equal([1, 2]);
			});

    	});

    	
    });


});