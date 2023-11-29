searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    if(window.scrollY > 80){
        document.querySelector('.container').classList.add('active');
    }else{
        document.querySelector('.container').classList.remove('active');
    }
}

$('#check').change(function () {
    if ($(this).is(":checked")) {
        $('.nav-link > .dropdown').hide();
    }
});

// Close dropdown on mobile when a list item is clicked
$('.nav-link > a').on('click', function () {
    if ($('#check').is(":checked")) {
        $('#check').prop('checked', false);
    }
});