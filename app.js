var read = require("fs-readdir-recursive");
var fs = require("fs");
var mkpath = require("mkpath");
var path = require("path");

var IN_DIR = "/XXX/_src"; 
var OUT_DIR = "/XXX/src";
var DRY_RUN = false;

var files = read(IN_DIR);
var regex1 = /[\(\[](\w*(-\w*)+)[\)\]]/gm;
var regex2 = /(ng-\w*)/gm;

var regex = /(ng(-\w*)+)|([\(\[]\w*(-\w*)+[\)\]])|(@Input\(["'](\w*(-\w*)+)["']\))/gm;

//var str = "hdsjkfh [ng-if] ajdhgjg";

function replacer(match, p1, p2, p3, p4, p5) {
	var p = p1 || p3 || p5;	
	var res = p.split("-").map(function(m, i) {
		if (i > 0) 
			return  m.charAt(0).toUpperCase() + m.slice(1);
		else 
			return m;
	}).join("");
	console.log(p + " >>> " + res);
	return res;
}

for (var i = 0; i < files.length; i++) {
	var in_path = IN_DIR + "/" + files[i];
	console.log(in_path);
	 	
	var out_path = OUT_DIR + "/" + files[i];
	var file = fs.readFileSync(in_path, "utf8");					
	var r = file.replace(regex, replacer);
	if (!DRY_RUN) {
		mkpath.sync(path.dirname(out_path));
		fs.writeFileSync(out_path, r, "utf8");
	}
}
