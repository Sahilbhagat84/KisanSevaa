var validate_and_preview = function() {
    document.getElementById('alert').removeAttribute('style');
    document.getElementById('alert').innerHTML = '';
    var total_files = document.getElementById("files").files.length;
    var total_size = 0
    for (var i = 0; i < total_files; i++) {
        var fsize = document.getElementById("files").files.item(i).size; // file size in bytes
        var fsize_mb = fsize / (1024 * 1024); // file size in MB
        total_size += fsize_mb
    }
    if (total_size >= 50) {
        document.getElementById('alert').setAttribute('style', 'padding-top: 64px;');
        document.getElementById('alert').innerHTML = '<p class="mb-0 mt-3">You uploaded files larger than 50 MB. The Total Maximum file size should be 50 MB.</p>';
        document.getElementById('files').value = "";
        return;
    }
    for (var i = 0; i < total_files; i++) {
        var filename = document.getElementById("files").files[i].name;
        var file_list = filename.split(".");
        var file_ext = file_list[file_list.length - 1].toUpperCase();
        var ext = ['JPG', 'JPEG', 'PNG'];
        if (ext.includes(file_ext)) {
            if (i === 0) {
                document.getElementById('image_preview').innerHTML += '<h4 class="pb-3">Image Preview:</h4>'
            }
            document.getElementById('image_preview').innerHTML += '<div class="card custom-bg-color card-custom mx-2 mb-3"><img src="' + URL.createObjectURL(event.target.files[i]) + '" class="card-img-top" alt="Crop Image" style="padding-top: 12px; max-height:150px; object-fit: cover;"><div class="card-body"><p class="card-text"><strong>Filename:</strong> ' + filename + '</p></div></div>';
        }
        else {
            document.getElementById('alert').setAttribute('style', 'padding-top: 64px;');
            document.getElementById('alert').innerHTML = '<p class="mb-0 mt-3">You uploaded files other than PNG or JPG/JPEG. We currently supports PNG or JPG/JPEG Image Files Only.</p>';
            document.getElementById('files').value = "";
            return;
        }
    }
}