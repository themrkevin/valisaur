!function($) {
	$.fn.valisaur = function(options) {
		//	set defaults
		var settings = $.extend({
			failMessage: 'is a required field',
			phoneRegex: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
			emailRegex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
			required: '*',
			requireAll: false
		}, options);
		return this.each(function() {
			var that$ = $(this),
				submit$ = $(this).find('input[type="submit"]'),
				input$ = that$.find('input[type="text"]'),
				required$ = that$.find('[data-required]');
			
			if(settings.requireAll == true) {
				input$.attr('data-required','');
				required$ = input$;
				if(settings.required === 'all') {
					that$.find('input[type="submit"]').before('<p class="require-all">All fields are required.</p>');
				}
			}

			if(settings.required && settings.required !== 'all') {
				for(i=0;i<required$.length;i++) {
					required$[i].placeholder = required$[i].placeholder + ' ' + settings.required;
				}
			}

			that$.addClass('valisaur');
			required$.addClass('unprocessed');

			input$
				.on('click', function() {
					$(this).select();
				})
				.on('focus change input', function() {
					var that$ = $(this),
						dataType$ = that$.attr('data-type');

					that$.removeClass('unprocessed');
					if(that$.is('[data-required]')) {
						//	validate required fields
						if(validateField(that$) && validateDataType(that$, dataType$)) {
							validatePass(that$);
						} else {
							validateFail(that$);
						}
					} else {
						//	validate non-required fields if they need specials checks
						if(that$.val() && !validateDataType(that$, dataType$)) {
							validateFail(that$);
						} else if(!that$.val()) {
							that$.removeClass('valifail valiyay');
						} else {
							validatePass(that$);
						}
					}

				if(!input$.hasClass('unprocessed') && !input$.hasClass('valifail')) {
					console.log('good to go');
					submit$.addClass('form-ready');
				} else {
					console.log('something is off');
					submit$.removeClass('form-ready');
				}
			});
			//	on submit validation
			that$.on('submit', function() {
				//	extra screening just incase
				if(required$.hasClass('unprocessed')) {
					for(i=0;i<required$.length;i++) {
						if(!required$[i].value || required$[i].value === required$[i].placeholder) {
							console.log(required$[i].placeholder + ' ' + settings.failMessage);
							validateFail($(required$[i]));
						}
					}
				}
				if(input$.hasClass('valifail')) {
					console.log('Validation Failed');
					return false;
				}
				console.log('Validation Passed');
				return false;
			});

			function validateField(field) {
				var dataOK = true;
				if (!field.val() || field.val() === field.attr('placeholder')) {
					dataOK = false;
				}
				return dataOK;
			}

			function validateDataType(field, type) {
				var dataOK = true;
				switch(type) {
					case 'phone':
						dataOK = settings.phoneRegex.test(field.val());
						break;

					case 'email':
						dataOK = settings.emailRegex.test(field.val());
						break;
				}
				return dataOK;
			}

			function validateFail(field) {
				field.addClass('valifail');
				field.removeClass('valiyay');
			}

			function validatePass(field) {
				field.removeClass('valifail');
				field.addClass('valiyay');
			}

		});
	}
}(jQuery);