/* js file */

(function( window, undefined ){
	var Dropdown = function( button, div ){

    var that = this;

    var respondToClick = function( e ){

        console.log( "isClicked" );

        if( that.isHidden ){
            that.show();
        }
        else{
            that.hide();
        }
        e.preventDefault();
    };

    this.button   = document.getElementById( button );
    this.div      = document.getElementById( div );
    this.isHidden = false;

    this.button.addEventListener( "click", respondToClick );
};

Dropdown.prototype.show = function(){

    //remove a class of hidden from the div
    var c = this.div.className;

    this.div.className = c.replace( " hidden", "" );
    this.isHidden = false;

    return this.div.className;
};

Dropdown.prototype.hide = function(){

    var c = this.div.className;

    this.div.className = c + " hidden";
    this.isHidden = true;

    return this.div.className;
};

var dd = new Dropdown( "dropdown_button", "dropdown_layr" );

console.log( dd );

dd.hide();

var dd_col = new Dropdown( "dropdown_button_col", "dropdown_col" );

console.log( dd_col );

dd_col.hide();


})( window, undefined );