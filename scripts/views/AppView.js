var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function() {
		console.log('initialized!!');
		this.game = new gameCollection();

		this.loading = new LoadingView({
				game: this.game
		});
		this.menu = new MenuView({
				game: this.game
		});
		this.play = new PlayView({
				game: this.game
		});
		this.leaderboard = new LeaderboardView({
				game: this.game
		});
		this.settings = new SettingsView({
				game: this.game
		});

		var self = this;
		


		var Router = Backbone.Router.extend({
				routes: {
						'loading': 		'loading',
						'menu': 		'menu',
						'play': 		'play',
						'leaderboard': 	'leaderboard',
						'settings': 	'settings',
						'': 			'loading'
				},

				loading: function() {
					self.hideAllPages();
					self.loading.$el.show();
					setTimeout( function () {
						self.loading.$el.hide();
						self.menu.$el.show();
					}, 4000);
				},

				menu: function() {
					self.hideAllPages();
					self.menu.$el.show();
				},

				play: function() {
					self.hideAllPages();
					self.play.$el.show();
				},

				leaderboard: function() {
					self.hideAllPages();
					self.leaderboard.$el.show();
				},

				settings: function() {
					self.hideAllPages();
					self.settings.$el.show();
				},

				defaultRoute: function() {
					self.hideAllPages();
					self.loading.$el.show();
				} 
		});

		var appRouter = new Router();

		Backbone.history.start();
	},

	hideAllPages: function() {
		$('.page-view').hide();
	}
});