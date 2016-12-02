/**
 * Created by jmccommas on 11/29/16.
 */
module.exports = function (wallaby) {
	return {
		files: [
			'src/**/*.js'
		],
		
		tests: [
			'test/**/*Spec.js'
		]
	};
};