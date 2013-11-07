var QuizController = {

	getQuizzes: function(){
		var self = this;
		$.ajax({
			url: "/quizzes.json",
			type: 'GET'
		}).done(function(quiz_json){
			QuizView.displayList(quiz_json);
		});
	},

};

var QuizView = {
	
	displayList: function(quiz_json){
		var new_quiz_template = $('#templates .quiz-options').clone();
		$('.container').append(new_quiz_template);

		for(var i=0; i < quiz_json.quizzes.length; i++){
			var new_list_item_template = $('#templates .list-item').clone()
			new_list_item_template.html(quiz_json.quizzes[i].name);
			$('.quiz-list').append(new_list_item_template);
		}
	}

};


$(document).ready(function(){
	QuizController.getQuizzes();
});

// var QuestionController = {

// 	addEventListenerToButton: function(){
// 		$('.container .new-question').on('click', function(){
// 			QuestionController.getNextQuestion(1);
// 		});
// 	},

// 	getNextQuestion: function(id){
// 		var self = this;
// 		$.ajax({
// 			url: "/quizzes/"+id+"/questions/next.json",
// 			type: 'GET',
// 			data: { session_key: 'a124f87dec55da23' }
// 		}).done(function(next_question_json){
// 			self.showNextQuestion(next_question_json);
// 		});
// 	},

// 	showNextQuestion: function(next_question_json){
// 		var question_name_template = $('#templates .new-question').clone();
// 		question_name_template.html(next_question_json.question.question);
// 		$('.container .quiz-question').append(question_name_template);
// 		debugger
// 	}
// };
