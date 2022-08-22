/* js file */

(function( window, undefined ){

	var Dropdown = function( button, nav ){

		    var that = this;

		    var respondToClick = function( e ){

		        if( that.isHidden ){
		            that.show();
		        }
		        else{
		            that.hide();
		        }
		        e.preventDefault();
		    };

		    this.button   = document.getElementById( button );
		    this.nav      = document.getElementById( nav );
		    this.isHidden = false;

		    this.button.addEventListener( "click", respondToClick );
		};

		Dropdown.prototype.show = function(){

		    //remove a class of hidden from the nav
		    var c = this.nav.className;

		    this.nav.className = c.replace( " hidden", "" );
		    this.isHidden = false;

		    return this.nav.className;
		};

		Dropdown.prototype.hide = function(){

		    var c = this.nav.className;

		    this.nav.className = c + " hidden";
		    this.isHidden = true;

		    return this.nav.className;
		};

	//Namespacing
	window.Cat = {};
	window.Cat.Dropdown = Dropdown;

	var dd = new window.Cat.Dropdown( "dropdown_button", "dropdown_menu" );
	dd.hide();

})( window, undefined );


