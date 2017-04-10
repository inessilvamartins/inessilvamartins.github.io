//-----------------------------KLAUS--------------------

$(document).ready(function() {
    $('#fklaus').mouseenter(function() {
        $('#klaus').hide();
        $('#aklaus').show();
        $('#pklaus').show().attr('src', 'img/pklaus.gif?rnd=' +Math.random()+'');
        $('#pklaus2').hide().attr('src', '');
        $('#pmrpoe2').hide().attr('src', '');
        $('#psunny2').hide().attr('src', '');
        $('#pviolet2').hide().attr('src', '');
        $('#polaf2').hide().attr('src', '');
        $('#pergaminho').hide().attr('src', '');
    })

     $('#fklaus').mouseleave(function() {
        $('#klaus').show();
        $('#aklaus').hide();
        $('#pklaus').hide().attr('src', '');
        $('#pklaus2').show().attr('src', 'img/pklaus2.gif?rnd=' +Math.random()+'');

    });

     $('#fmrpoe').mouseenter(function() {
        $('#mrpoe').hide();
        $('#amrpoe').show();
        $('#pmrpoe').show().attr('src', 'img/pmrpoe.gif?rnd=' +Math.random()+'');
        $('#pklaus2').hide().attr('src', '');
        $('#pmrpoe2').hide().attr('src', '');
        $('#psunny2').hide().attr('src', '');
        $('#pviolet2').hide().attr('src', '');
        $('#polaf2').hide().attr('src', '');
        $('#pergaminho').hide().attr('src', '');
    });

     $('#fmrpoe').mouseleave(function() {
        $('#mrpoe').show()
        $('#amrpoe').hide()
        $('#pmrpoe').hide().attr('src', '');
        $('#pmrpoe2').show().attr('src', 'img/pmrpoe2.gif?rnd=' +Math.random()+'');
    });

     $('#fsunny').mouseenter(function() {
        $('#sunny').hide()
        $('#asunny').show()
        $('#psunny').show().attr('src', 'img/psunny.gif?rnd=' +Math.random()+'');
        $('#pklaus2').hide().attr('src', '');
        $('#pmrpoe2').hide().attr('src', '');
        $('#psunny2').hide().attr('src', '');
        $('#pviolet2').hide().attr('src', '');
        $('#polaf2').hide().attr('src', '');
        $('#pergaminho').hide().attr('src', '');
    });

     $('#fsunny').mouseleave(function() {
        $('#sunny').show()
        $('#asunny').hide()
        $('#psunny').hide().attr('src', '');
        $('#psunny2').show().attr('src', 'img/psunny2.gif?rnd=' +Math.random()+'');
    });

    $('#fviolet').mouseenter(function() {
        $('#violet').hide()
        $('#aviolet2').show()
        $('#aviolet3').show().delay(100)
        $('#aviolet4').show().delay(400)
        $('#aviolet5').show().delay(800)
        $('#aviolet6').show().delay(1200)
        $('#aviolet7').show().delay(1600)
        $('#pviolet').show().attr('src', 'img/pviolet.gif?rnd=' +Math.random()+'');
        $('#pklaus2').hide().attr('src', '');
        $('#pmrpoe2').hide().attr('src', '');
        $('#psunny2').hide().attr('src', '');
        $('#pviolet2').hide().attr('src', '');
        $('#polaf2').hide().attr('src', '');
        $('#pergaminho').hide().attr('src', '');
    });

     $('#fviolet').mouseleave(function() {
        $('#violet').show()
        $('#aviolet2').hide()
        $('#aviolet3').hide()
        $('#aviolet4').hide()
        $('#aviolet5').hide()
        $('#aviolet6').hide()
        $('#aviolet7').hide()
        $('#pviolet').hide().attr('src', '');
        $('#pviolet2').show().attr('src', 'img/pviolet2.gif?rnd=' +Math.random()+'');
    });

    $('#folaf').mouseenter(function() {
        $('#olaf').hide()
        $('#aolaf').show()
        $('#polaf').show().attr('src', 'img/polaf.gif?rnd=' +Math.random()+'');
        $('#pklaus2').hide().attr('src', '');
        $('#pmrpoe2').hide().attr('src', '');
        $('#psunny2').hide().attr('src', '');
        $('#pviolet2').hide().attr('src', '');
        $('#polaf2').hide().attr('src', '');
        $('#pergaminho').hide().attr('src', '');
    });

     $('#folaf').mouseleave(function() {
        $('#olaf').show()
        $('#aolaf').hide()
        $('#polaf').hide().attr('src', '');
        $('#polaf2').show().attr('src', 'img/polaf2.gif?rnd=' +Math.random()+'');
    });

});



