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
		this.gameOn = new GameOnView({
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
						'gameon': 		'gameon',
						'leaderboard': 	'leaderboard',
						'settings': 	'settings'
				},

				loading: function() {
					console.log('loading');
					self.hideAllPages();
					self.LoadingView.$el.show();
				},

				menu: function() {
					console.log('menu');
					self.hideAllPages();
					self.MenuView.$el.show();
				},

				gameOn: function() {
					console.log('gameon');
					self.hideAllPages();
					self.GameOnView.$el.show();
				},

				leaderboard: function() {
					console.log('leaderboard');
					self.hideAllPages();
					self.LeaderboardView.$el.show();
				},

				settings: function() {
					console.log('settings');
					self.hideAllPages();
					self.SettingsView.$el.show();
			}
		});

		var appRouter = new Router();

		Backbone.history.start();
	},

	hideAllPages: function() {
		$('.page-view').hide();
	}
});