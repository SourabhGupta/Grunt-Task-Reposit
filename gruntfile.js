module.exports = function(grunt) {



	grunt.initConfig({

		  express: {
	      all: {
	        options: {
	          port: 9000,
	          hostname: "0.0.0.0",
	          bases: ['.'], // Replace with the directory you want the files served from
	                              // Make sure you don't use `.` or `..` in the path as Express
	                              // is likely to return 403 Forbidden responses if you do
	                              // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
	          livereload: true
	        }
	      }
	    },

	    open: {
	      all: {
		        // Gets the port from the connect configuration
		        path: 'http://localhost:<%= express.all.options.port%>'
		      }
		    },

		watch: {
	      files: ['agg.jade','*.css'],
	      tasks: ['jade']
	    },
		
		jade: {
		      reportal: {
		        options: {
		          pretty: true,
		          data: {
		            debug: true,
		            timestamp: "<%= new Date().getTime() %>"
		          }
		        },
		        files: {
		            "index.html": "agg.jade"
		          }
		      }
		    }
		})

grunt.loadNpmTasks('grunt-contrib-jade');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-express');
grunt.loadNpmTasks('grunt-open');
grunt.registerTask('default', ['express','open','watch']);

};