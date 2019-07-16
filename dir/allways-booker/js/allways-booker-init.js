$('input:radio').change(function(){
    var $self = $(this);
    if ($self.prop('checked')) {
    $self.parent().siblings('label').removeClass('for-checked');
       $self.parent().addClass('for-checked');
    } else {
       $self.parent().removeClass('for-checked');
    }
});

// CUSTOM SELECT START
(function() {
    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
       new SelectFx(el);
   } );
})();
// CUSTOM SELECT END