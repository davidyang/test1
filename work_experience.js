'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WorkExperienceSchema = new Schema({
	title: String,
	startDate: { year: Number, month: Number },
	endDate: { year: Number, month: Number },
	isCurrent: Boolean,
	id: Number,
	company: {}
});

var EducationSchema = new Schema({
	startDate: { year: Number, month: Number },
	endDate: { year: Number, month: Number },
	schoolName: String,
	notes: String,
	id: Number,
	fieldOfStudy: String,
	degree: String,
	activities: String
});

var ProjectSchema = new Schema({
	name: String,
	githubUrl: String,
	pitch: String,
	description: String,
	tags: [String],
	tech_tags: String,
	image: {
    crops: Object,
    original: String
  },
	video: String,
	url: String,
	role: String
});

ProjectSchema.methods = {
	tagsList: function() {
		console.log(this.tech_tags);
		if(this.tech_tags) {
			return this.tech_tags.split(",").map(function(tag) { return tag.trim() });
		} else {
			return [];
		}
	}
}


exports.WorkExperienceSchema = WorkExperienceSchema;
exports.EducationSchema = EducationSchema;
exports.ProjectSchema = ProjectSchema;
// mongoose.model('WorkExperience', WorkExperienceSchema);